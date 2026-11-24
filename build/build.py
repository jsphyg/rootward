#!/usr/bin/env python3
"""Learning Web build script and checker.

Reads one subject's Markdown files, checks them, and joins them with the
engine into one self-contained HTML page.

    python3 build/build.py                # check, then build dist/<storage-name>.html
    python3 build/build.py --check        # check only, write nothing
    python3 build/build.py --subject DIR  # subject folder (default: the folder above build/)

Standard library only. No installs needed.

Subject folder layout:
    subject.md        site title, start page, intro text, plan file
    concepts/*.md     one concept per file (header block + Markdown body)
    glossary.md       terms ({{id|text}}) and footnotes (^[id])
    widgets/*.js      interactive figures, each calls LW.widget("name", fn)
    widgets/*.css     optional styles for a widget with the same name

Exit code: 0 when there are no errors (warnings are allowed), 1 otherwise.
The page is still written when there are errors, so you can see them, but
broken links show in amber as "not written yet".
"""
import argparse, base64, html, json, re, sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
ENGINE = HERE.parent / "engine"

# ---------------------------------------------------------------- report

class Report:
    def __init__(self):
        self.errors, self.warnings, self.notes = [], [], []
    def err(self, where, msg):  self.errors.append(f"{where}: {msg}")
    def warn(self, where, msg): self.warnings.append(f"{where}: {msg}")
    def note(self, where, msg): self.notes.append(f"{where}: {msg}")
    def print(self):
        for title, items in (("ERRORS", self.errors), ("WARNINGS", self.warnings), ("NOTES", self.notes)):
            print(f"\n{title} ({len(items)})")
            for i in items: print("  - " + i)
        print()

# ---------------------------------------------------------------- header block
# A small, forgiving reader for the header block. Not full YAML on purpose:
# backslashes in math (like \cdot) are kept exactly as written.

KEY_RE = re.compile(r"^(\s*)([A-Za-z_][\w-]*):(?:\s+(.*)|\s*)$")

def parse_list(s, where, rep):
    inner = s.strip()[1:-1]
    items, i, n = [], 0, len(inner)
    while i < n:
        ch = inner[i]
        if ch in " \t,": i += 1; continue
        if ch in "\"'":
            q, i, buf = ch, i + 1, []
            while i < n and inner[i] != q:
                if inner[i] == "\\" and i + 1 < n and inner[i+1] == q: buf.append(q); i += 2; continue
                buf.append(inner[i]); i += 1
            if i >= n: rep.err(where, f"unclosed quote in list {s!r}")
            items.append("".join(buf)); i += 1
        else:
            j = inner.find(",", i); j = n if j < 0 else j
            items.append(inner[i:j].strip()); i = j
    return items

def parse_value(v, where, rep):
    v = v.strip()
    if v.startswith("[") and v.endswith("]"): return parse_list(v, where, rep)
    if re.fullmatch(r"-?\d+", v): return int(v)
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'": return v[1:-1]
    return v

def split_header(text, where, rep):
    lines = text.replace("\r\n", "\n").split("\n")
    if not lines or lines[0].strip() != "---":
        rep.err(where, "file must start with a --- header block"); return {}, text
    end = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), None)
    if end is None:
        rep.err(where, "header block is not closed with ---"); return {}, ""
    hdr, sub, last = {}, None, None   # last = (dict, key) for continuation lines
    for raw in lines[1:end]:
        if not raw.strip() or raw.lstrip().startswith("#"): continue
        m = KEY_RE.match(raw)
        if not m:
            if last and isinstance(last[0][last[1]], str):
                last[0][last[1]] += " " + raw.strip(); continue
            rep.err(where, f"cannot read header line {raw.strip()!r}"); continue
        indent, key, val = len(m.group(1)), m.group(2), m.group(3)
        target = sub if (indent > 0 and sub is not None) else hdr
        if indent == 0: sub = None
        if val is None or val == "":
            if indent == 0: hdr[key] = sub = {}; last = None
            else: target[key] = ""; last = (target, key)
        else:
            target[key] = parse_value(val, where, rep); last = (target, key)
    return hdr, "\n".join(lines[end+1:])

# ---------------------------------------------------------------- inline Markdown

MATH_RE = re.compile(r"\$\$(.+?)\$\$|\$((?:\\\$|[^$])+?)\$", re.S)

def tex_html(src, display):
    t = html.escape(src.strip(), quote=False)
    if display: return f'<div class="eq"><span class="tex" data-d="1">{t}</span></div>'
    return f'<span class="tex" data-d="0">{t}</span>'

class Page:
    """Collects what one page refers to, so the checker can test it later."""
    def __init__(self, cid, where, rep, allow_refs=True):
        self.id, self.where, self.rep, self.allow = cid, where, rep, allow_refs
        self.fn = 0
        self.links = []   # (concept id, where)
        self.terms = []   # (term id, where, in_body)
        self.notes = []   # (note id, where)
        self.widgets = [] # (name, where)
        self.in_body = False

    def inline(self, s, where=None):
        where = where or self.where
        keep = []
        def stash(h):
            keep.append(h); return f"\x00{len(keep)-1}\x00"
        s = s.replace("\\$", "\x01")
        s = MATH_RE.sub(lambda m: stash(tex_html((m.group(1) if m.group(1) is not None else m.group(2)).replace("\x01", "\\$"), m.group(1) is not None)), s)
        if "$" in s: self.rep.err(where, f"a $ is not closed, so math will not show: {s.strip()[:70]!r}")
        s = s.replace("\x01", "$")
        s = re.sub(r"\\([_*\[\]{}\\^|`])", lambda m: stash(html.escape(m.group(1))), s)
        s = html.escape(s, quote=False)

        def link(m):
            cid, text = m.group(1).strip(), m.group(2)
            if not self.allow: self.rep.err(where, f"concept links are not allowed here ([[{cid}]])")
            self.links.append((cid, where))
            label = text if text else f"\x02{cid}\x02"
            return stash(f'<button class="clink" data-c="{html.escape(cid)}">') + label + stash("</button>")
        def term(m):
            tid, text = m.group(1).strip(), m.group(2)
            if not self.allow: self.rep.err(where, f"term pop-ups are not allowed here ({{{{{tid}}}}})")
            self.terms.append((tid, where, self.in_body))
            return stash(f'<button class="term" data-g="{html.escape(tid)}">') + (text or tid) + stash("</button>")
        def note(m):
            nid = m.group(1).strip()
            if not self.allow: self.rep.err(where, f"footnotes are not allowed here (^[{nid}])")
            self.notes.append((nid, where)); self.fn += 1
            return stash(f'<button class="fn" data-g="{html.escape(nid)}" aria-label="Note {self.fn}">{self.fn}</button>')
        s = re.sub(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]", link, s)
        s = re.sub(r"\{\{([^}|]+)(?:\|([^}]+))?\}\}", term, s)
        s = re.sub(r"\^\[([^\]]+)\]", note, s)
        for bad in ("[[", "]]", "{{", "}}", "^["):
            if bad in s: self.rep.err(where, f"broken markup near {bad!r} in {s.strip()[:70]!r}")
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"(?<![\w*])\*(?=\S)(.+?)(?<=\S)\*(?![\w*])", r"<em>\1</em>", s)
        while "\x00" in s:
            s = re.sub(r"\x00(\d+)\x00", lambda m: keep[int(m.group(1))], s)
        return s

# ---------------------------------------------------------------- block Markdown

def split_cells(row):
    """Split a table row on | but not inside $math$, [[links]] or {{terms}}."""
    row = row.strip()
    if row.startswith("|"): row = row[1:]
    if row.endswith("|") and not row.endswith("\\|"): row = row[:-1]
    cells, buf, depth, math, i = [], [], 0, False, 0
    while i < len(row):
        two = row[i:i+2]
        if two in ("[[", "{{") and not math: depth += 1; buf.append(two); i += 2; continue
        if two in ("]]", "}}") and not math and depth: depth -= 1; buf.append(two); i += 2; continue
        ch = row[i]
        if ch == "\\" and i + 1 < len(row): buf.append(row[i:i+2]); i += 2; continue
        if ch == "$": math = not math
        if ch == "|" and not math and depth == 0: cells.append("".join(buf).strip()); buf = []
        else: buf.append(ch)
        i += 1
    cells.append("".join(buf).strip())
    return cells

BLOCK_START = re.compile(r"^(#{1,6}\s|\||:::|\$\$|[-*]\s+|\d+\.\s+)")

def render_blocks(text, pg):
    lines = text.split("\n")
    out, i = [], 0
    example = practice = problems = None
    while i < len(lines):
        st = lines[i].strip()
        if not st: i += 1; continue
        where = f"{pg.where} (line ~{i+1} of body)"
        if st.startswith(":::"):
            kind = st[3:].strip()
            if kind.startswith("widget"):
                name = kind[len("widget"):].strip()
                if not name: pg.rep.err(where, ":::widget needs a name, like :::widget slope-slider")
                pg.widgets.append((name, where))
                # Optional data: lines up to a closing ::: (before any other :::block opens)
                # are passed to the widget, each rendered as inline Markdown. A caption: line becomes the caption.
                j = i + 1
                while j < len(lines) and not lines[j].strip().startswith(":::"): j += 1
                wdata = {"lines": [], "caption": ""}
                if j < len(lines) and lines[j].strip() == ":::":
                    for raw in lines[i+1:j]:
                        s2 = raw.strip()
                        if not s2: continue
                        if s2.startswith("caption:"): wdata["caption"] = pg.inline(s2[8:].strip(), where)
                        else: wdata["lines"].append(pg.inline(s2, where))
                    i = j + 1
                else:
                    i += 1
                attr = html.escape(json.dumps(wdata, ensure_ascii=False), quote=True)
                out.append(f'<div class="widget" data-w="{html.escape(name)}" data-args="{attr}"></div>')
                continue
            j, buf = i + 1, []
            while j < len(lines) and lines[j].strip() != ":::": buf.append(lines[j]); j += 1
            if j >= len(lines): pg.rep.err(where, f":::{kind} is not closed with :::")
            if kind == "example":
                if example: pg.rep.err(where, "more than one :::example (the page takes one worked example)")
                pg.in_body = False; example = parse_example(buf, pg, where)
            elif kind == "practice":
                if practice: pg.rep.err(where, "more than one :::practice")
                pg.in_body = False; practice = parse_practice(buf, pg, where)
            elif kind == "problems":
                if problems: pg.rep.err(where, "more than one :::problems (put the whole set in one block)")
                pg.in_body = False; problems = parse_problems(buf, pg, where)
            elif kind == "image":
                out.append(render_image(buf, pg, where))
            else:
                pg.rep.err(where, f"unknown block :::{kind} (use example, practice, problems, image or widget)")
            pg.in_body = True
            i = j + 1; continue
        m = re.match(r"^(#{1,6})\s+(.*)$", st)
        if m:
            lvl = len(m.group(1))
            if lvl == 1: pg.rep.warn(where, "use ## for sections; # is reserved for the page title")
            h = 2 if lvl <= 2 else 3
            out.append(f"<h{h}>{pg.inline(m.group(2), where)}</h{h}>"); i += 1; continue
        if st.startswith("$$"):
            buf = [st[2:]]
            if st.endswith("$$") and len(st) >= 4: buf = [st[2:-2]]; i += 1
            else:
                i += 1
                while i < len(lines) and not lines[i].strip().endswith("$$"): buf.append(lines[i]); i += 1
                if i >= len(lines): pg.rep.err(where, "$$ display math is not closed")
                else: buf.append(lines[i].strip()[:-2]); i += 1
            out.append(tex_html("\n".join(buf), True)); continue
        if st.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"): rows.append(lines[i]); i += 1
            out.append(render_table(rows, pg, where)); continue
        if re.match(r"^[-*]\s+", st) or re.match(r"^\d+\.\s+", st):
            ordered = bool(re.match(r"^\d+\.", st))
            pat = r"^\d+\.\s+" if ordered else r"^[-*]\s+"
            items = []
            while i < len(lines) and lines[i].strip():
                s2 = lines[i].strip()
                if re.match(pat, s2): items.append(re.sub(pat, "", s2))
                elif items and lines[i][:1] in " \t": items[-1] += " " + s2
                else: break
                i += 1
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{pg.inline(x, where)}</li>" for x in items) + f"</{tag}>"); continue
        buf = []
        while i < len(lines) and lines[i].strip() and not (buf and BLOCK_START.match(lines[i].strip())):
            buf.append(lines[i].strip()); i += 1
        para = " ".join(buf)
        cls = ' class="cap"' if re.fullmatch(r"\*[^*].*[^*]\*", para) else ""
        out.append(f"<p{cls}>{pg.inline(para, where)}</p>")
    return "\n".join(out), example, practice, problems

COMMONS = "https://commons.wikimedia.org/wiki/"

def render_image(buf, pg, where):
    """A picture loaded live from Wikimedia Commons when the page opens; nothing is stored.
    Lines: file: <Commons file name>, alt: <what it shows>, caption: <what to notice>, credit: <author, license>.
    Where the page is not allowed to load outside images (for example inside an artifact),
    the engine shows a captioned link to the picture instead."""
    f = dict((k, v) for k, v in parse_fields(buf, ["file", "alt", "caption", "credit"]) if k)
    name = f.get("file", "").strip().removeprefix("File:").replace(" ", "_")
    for k in ("file", "alt", "caption", "credit"):
        if not f.get(k): pg.rep.err(where, f":::image needs a {k}: line")
    if name and not re.fullmatch(r"[^/#?<>\[\]{}|]+\.(jpe?g|png|gif|svg|tif?f|webp)", name, re.I):
        pg.rep.err(where, f":::image file '{name}' does not look like a Commons file name (like Rosetta_Stone.JPG)")
    pg.images = getattr(pg, "images", []) + [(name, where)]
    from urllib.parse import quote
    q = quote(name)
    src = f"{COMMONS}Special:FilePath/{q}?width=800"
    page = f"{COMMONS}File:{q}"
    cap = pg.inline(f.get("caption", ""), where)
    credit = pg.inline(f.get("credit", ""), where)
    alt = html.escape(f.get("alt", ""), quote=True)
    return (f'<figure class="fig pic" data-src="{html.escape(src)}" data-page="{html.escape(page)}" data-alt="{alt}">'
            f'<div class="picframe"></div><figcaption>{cap}<span class="credit">Image: {credit} · '
            f'<a href="{html.escape(page)}" target="_blank" rel="noopener">source</a></span></figcaption></figure>')

def render_table(rows, pg, where):
    cells = [split_cells(r) for r in rows]
    head = None
    if len(cells) >= 2 and all(re.fullmatch(r":?-{2,}:?", c.strip()) for c in cells[1] if c.strip()):
        head, cells = cells[0], cells[2:]
    widths = {len(r) for r in cells + ([head] if head else [])}
    if len(widths) > 1: pg.rep.warn(where, "table rows have different numbers of cells")
    h = ""
    if head: h = "<thead><tr>" + "".join(f"<th>{pg.inline(c, where)}</th>" for c in head) + "</tr></thead>"
    b = "<tbody>" + "".join("<tr>" + "".join(f"<td>{pg.inline(c, where)}</td>" for c in r) + "</tr>" for r in cells) + "</tbody>"
    return f'<div class="tablewrap"><table class="t">{h}{b}</table></div>'

def parse_fields(buf, keys):
    """Read 'key: value' lines with continuation lines into a list of (key, value)."""
    out = []
    for raw in buf:
        s = raw.strip()
        if not s: continue
        m = re.match(r"^(%s):\s*(.*)$" % "|".join(keys), s)
        if m: out.append([m.group(1), m.group(2)])
        elif out: out[-1][1] += " " + s
        else: out.append([None, s])
    return out

def parse_example(buf, pg, where):
    title, steps = None, []
    for raw in buf:
        s = raw.strip()
        if not s: continue
        m = re.match(r"^title:\s*(.*)$", s)
        if m and not steps: title = m.group(1); continue
        m = re.match(r"^(\d+)\.\s+(.*)$", s)
        if m: steps.append({"text": m.group(2), "why": "", "uses": [], "_last": "text"}); continue
        m = re.match(r"^(why|uses):\s*(.*)$", s)
        if m and steps:
            if m.group(1) == "uses": steps[-1]["uses"] = parse_value(m.group(2), where, pg.rep) or []
            else: steps[-1]["why"] = m.group(2)
            steps[-1]["_last"] = m.group(1); continue
        if steps and steps[-1]["_last"] in ("text", "why"): steps[-1][steps[-1]["_last"]] += " " + s
        elif title is not None and not steps: title += " " + s
        else: pg.rep.err(where, f"cannot read example line {s!r}")
    if not title: pg.rep.err(where, "worked example has no title: line")
    if not steps: pg.rep.err(where, "worked example has no numbered steps")
    res = {"title": pg.inline(title or "", where), "steps": []}
    for n, st in enumerate(steps, 1):
        if not st["why"]: pg.rep.err(where, f"worked example step {n} has no why:")
        if isinstance(st["uses"], str): st["uses"] = [st["uses"]] if st["uses"] else []
        for u in st["uses"]: pg.links.append((u, f"{where} step {n} uses"))
        res["steps"].append({"text": pg.inline(st["text"], where), "why": pg.inline(st["why"], where), "uses": st["uses"]})
    return res

def parse_practice(buf, pg, where):
    f = dict((k, v) for k, v in parse_fields(buf, ["q", "answer"]))
    if None in f: pg.rep.err(where, "practice block lines must start with q: or answer:")
    if not f.get("q"): pg.rep.err(where, "practice has no q:")
    if not f.get("answer"): pg.rep.err(where, "practice has no answer:")
    return {"q": pg.inline(f.get("q", ""), where), "answer": pg.inline(f.get("answer", ""), where)}

def parse_problems(buf, pg, where):
    """A practice set: q:/answer: pairs, separated by blank lines, easiest first."""
    groups, cur = [], []
    for raw in buf:
        if raw.strip(): cur.append(raw)
        elif cur: groups.append(cur); cur = []
    if cur: groups.append(cur)
    res = []
    for n, g in enumerate(groups, 1):
        f = parse_fields(g, ["q", "answer"])
        keys = [k for k, _ in f]
        w = f"{where} problem {n}"
        if None in keys or keys.count("q") != 1 or keys.count("answer") != 1 or keys[0] != "q":
            pg.rep.err(w, "each problem is one q: line then one answer: line, with a blank line before the next problem")
            continue
        d = dict(f)
        if not d["q"].strip(): pg.rep.err(w, "problem has an empty q:")
        if not d["answer"].strip(): pg.rep.err(w, "problem has an empty answer:")
        res.append({"q": pg.inline(d["q"], w), "answer": pg.inline(d["answer"], w)})
    if not res: pg.rep.err(where, ":::problems has no problems")
    return res

# ---------------------------------------------------------------- glossary

def load_glossary(path, rep):
    entries, section, cur = {}, "term", None
    if not path.exists(): rep.err("glossary.md", "file not found"); return entries
    for n, raw in enumerate(path.read_text(encoding="utf-8").split("\n"), 1):
        s = raw.strip()
        if s.startswith("## "): section = "note" if "footnote" in s.lower() else "term"; cur = None; continue
        if s.startswith("### "):
            gid = s[4:].strip()
            if gid in entries: rep.err(f"glossary.md line {n}", f"'{gid}' is defined twice")
            cur = entries[gid] = {"kind": section, "line": n}; continue
        if cur is None: continue
        m = re.match(r"^-\s*(title|def|concept):\s*(.*)$", s)
        if m: cur[m.group(1)] = m.group(2); cur["_last"] = m.group(1)
        elif s and not s.startswith("---") and cur.get("_last") and raw[:1] in " \t":
            cur[cur["_last"]] += " " + s
    out = {}
    for gid, e in entries.items():
        where = f"glossary.md '{gid}'"
        for k in ("title", "def"):
            if not e.get(k): rep.err(where, f"missing - {k}:")
        pg = Page(None, where, rep, allow_refs=False)
        out[gid] = {"kind": e["kind"], "title": pg.inline(e.get("title", gid)), "def": pg.inline(e.get("def", "")),
                    "concept": e.get("concept") or None}
    return out

# ---------------------------------------------------------------- concepts

def load_concept(path, rep):
    where = f"concepts/{path.name}"
    hdr, body = split_header(path.read_text(encoding="utf-8"), where, rep)
    cid = hdr.get("id")
    if not cid: rep.err(where, "header has no id:"); cid = path.stem
    elif cid != path.stem: rep.err(where, f"id '{cid}' does not match the file name '{path.stem}.md'")
    stub = str(hdr.get("status", "")).lower() == "stub"
    pg = Page(cid, where, rep)
    for k in ("title", "big", "recap"):
        if not hdr.get(k): rep.err(where, f"header has no {k}:")
    prereqs = hdr.get("prereqs", [])
    if isinstance(prereqs, str): prereqs = [p.strip() for p in prereqs.split(",") if p.strip() and p.strip() != "none"]
    if "prereqs" not in hdr: rep.err(where, "header has no prereqs: (write prereqs: [] for a starting point)")
    chk = hdr.get("check")
    check = None
    if not isinstance(chk, dict): rep.err(where, "header has no check: question")
    else:
        opts = chk.get("options", [])
        if not chk.get("q"): rep.err(where, "check has no q:")
        if not isinstance(opts, list) or not (3 <= len(opts) <= 4): rep.err(where, "check needs 3 or 4 options")
        ans = chk.get("answer")
        if not isinstance(ans, int) or not isinstance(opts, list) or not (0 <= ans < len(opts)):
            rep.err(where, f"check answer: must be the number of the right option, counting from 0 (got {ans!r})"); ans = 0
        if not chk.get("why"): rep.err(where, "check has no why:")
        cpg = Page(cid, where + " check", rep, allow_refs=False)
        check = {"q": cpg.inline(str(chk.get("q", ""))), "options": [cpg.inline(str(o)) for o in (opts if isinstance(opts, list) else [])],
                 "answer": ans, "why": cpg.inline(str(chk.get("why", "")))}
    recap = pg.inline(str(hdr.get("recap", "")), where + " recap")
    big = pg.inline(str(hdr.get("big", "")), where + " big")
    pg.in_body = True
    body_html, example, practice, problems = render_blocks(body, pg)
    if stub:
        rep.warn(where, "is a stub (header only). It shows as 'Not written yet'.")
    else:
        if not body.strip(): rep.err(where, "has no body text (mark it status: stub if it is not written yet)")
        if not example: rep.err(where, "has no :::example worked example")
        if not practice: rep.err(where, "has no :::practice problem")
    return {"id": cid, "title": str(hdr.get("title", cid)), "prereqs": prereqs, "big": big, "recap": recap,
            "check": check, "body": body_html, "example": example, "practice": practice, "problems": problems, "stub": stub, "_page": pg, "_where": where}

def load_plan(path):
    """Read concept ids and prereqs from the concept-list tables: | id | Concept | Prerequisites | Status |"""
    plan = {}
    if not path or not path.exists(): return plan
    for raw in path.read_text(encoding="utf-8").split("\n"):
        if not raw.strip().startswith("|"): continue
        cells = split_cells(raw)
        if len(cells) < 3 or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", cells[0]) or cells[0] == "id": continue
        pr = [] if cells[2].strip().lower() in ("none", "", "-") else [p.strip() for p in cells[2].split(",")]
        plan[cells[0]] = pr
    return plan

# ---------------------------------------------------------------- pages from other subjects

def plain_refs(s, titles):
    """Turn links, pop-ups and footnotes into plain text (for a recap borrowed from another subject)."""
    s = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"\2", s)
    s = re.sub(r"\[\[([^\]|]+)\]\]", lambda m: titles.get(m.group(1).strip(), m.group(1).strip()), s)
    s = re.sub(r"\{\{([^}|]+)\|([^}]+)\}\}", r"\2", s)
    s = re.sub(r"\{\{([^}|]+)\}\}", r"\1", s)
    return re.sub(r"\^\[[^\]]+\]", "", s)

def load_external(subj_hdr, root, wanted, rep):
    """Pages from another subject, named like calculus:exponents.
    subject.md lists each other subject as   external:  /  calculus: <folder> <web address>
    The build reads that page's header (title, recap, check, prereqs). The page itself
    opens in the other subject's site, in a new tab."""
    conf = subj_hdr.get("external") if isinstance(subj_hdr.get("external"), dict) else {}
    ext = {}
    for key in sorted({w.split(":", 1)[0] for w in wanted}):
        if key not in conf:
            rep.err("subject.md", f"pages like '{key}:...' are used, but external: has no '{key}:' line"); continue
        parts = str(conf[key]).split()
        if len(parts) != 2: rep.err("subject.md", f"external: {key}: needs a folder and a web address"); continue
        folder, url = (root / parts[0]).resolve(), parts[1]
        sh, _ = split_header((folder / "subject.md").read_text(encoding="utf-8"), f"{key} subject.md", rep)
        titles = {}
        for f in (folder / "concepts").glob("*.md"):
            h, _ = split_header(f.read_text(encoding="utf-8"), f"{key}:{f.name}", Report())
            titles[f.stem] = str(h.get("title", f.stem))
        for w in sorted(x for x in wanted if x.split(":", 1)[0] == key):
            cid = w.split(":", 1)[1]
            f = folder / "concepts" / f"{cid}.md"
            if not f.exists(): continue   # reported as a missing page by run_checks
            h, _ = split_header(f.read_text(encoding="utf-8"), w, rep)
            where = f"{w} (in {parts[0]})"
            if str(h.get("status", "")).lower() == "stub": rep.warn(where, "is a stub in its own subject")
            chk = h.get("check")
            pg = Page(None, where, rep, allow_refs=False)
            check = None
            if isinstance(chk, dict) and isinstance(chk.get("options"), list):
                check = {"q": pg.inline(plain_refs(str(chk.get("q", "")), titles)),
                         "options": [pg.inline(plain_refs(str(o), titles)) for o in chk["options"]],
                         "answer": chk.get("answer", 0) if isinstance(chk.get("answer"), int) else 0,
                         "why": pg.inline(plain_refs(str(chk.get("why", "")), titles))}
            pr = h.get("prereqs", [])
            if isinstance(pr, str): pr = [x.strip() for x in pr.split(",") if x.strip() and x.strip() != "none"]
            ext[w] = {"id": w, "title": titles.get(cid, cid), "recap": pg.inline(plain_refs(str(h.get("recap", "")), titles)),
                      "check": check, "prereqs": [p if ":" in p else f"{key}:{p}" for p in pr],
                      "ext": url.rstrip("/") + "/#" + cid, "from": str(sh.get("name", key))}
    # also read what those pages build on, so "direct prerequisites only" can be checked across subjects
    todo = [p for e in ext.values() for p in e["prereqs"] if p not in ext]
    while todo:
        w = todo.pop(); key, cid = w.split(":", 1)
        if w in ext or key not in conf: continue
        f = (root / str(conf[key]).split()[0]).resolve() / "concepts" / f"{cid}.md"
        if not f.exists(): continue
        h, _ = split_header(f.read_text(encoding="utf-8"), w, Report())
        pr = h.get("prereqs", [])
        if isinstance(pr, str): pr = [x.strip() for x in pr.split(",") if x.strip() and x.strip() != "none"]
        ext[w] = {"id": w, "prereqs": [p if ":" in p else f"{key}:{p}" for p in pr], "_hidden": True}
        todo += [p for p in ext[w]["prereqs"] if p not in ext]
    return ext

# ---------------------------------------------------------------- checks

def run_checks(concepts, glossary, widgets, plan, rep, ext=None):
    ext = ext or {}
    by = {c["id"]: c for c in concepts}
    if len(by) != len(concepts): rep.err("concepts", "two files share the same id")
    ids = set(by) | {k for k, e in ext.items() if not e.get("_hidden")}
    graph = {**{k: e["prereqs"] for k, e in ext.items()}, **{k: c["prereqs"] for k, c in by.items()}}

    # 1. every link points to a concept that exists
    for c in concepts:
        for p in c["prereqs"]:
            if p not in ids: rep.err(c["_where"], f"prerequisite '{p}' has no concept file")
            if p == c["id"]: rep.err(c["_where"], "lists itself as a prerequisite")
        counts = Counter()
        for cid, where in c["_page"].links:
            if cid not in ids: rep.err(where, f"links to '{cid}', which has no concept file")
            if "uses" not in where: counts[cid] += 1
        for cid, k in counts.items():
            if k > 2: rep.warn(c["_where"], f"links to '{cid}' {k} times (rule: at most twice per page)")
    for gid, g in glossary.items():
        if g["concept"] and g["concept"] not in ids:
            rep.err(f"glossary.md '{gid}'", f"concept: '{g['concept']}' has no concept file")

    # 2. every term and footnote exists in the glossary
    used = set()
    for c in concepts:
        seen = Counter()
        for tid, where, in_body in c["_page"].terms:
            used.add(tid)
            if tid not in glossary: rep.err(where, f"term {{{{{tid}}}}} is not in glossary.md")
            elif glossary[tid]["kind"] != "term": rep.err(where, f"{{{{{tid}}}}} is a footnote; write it as ^[{tid}]")
            if in_body: seen[tid] += 1
        for tid, k in seen.items():
            if k > 1: rep.warn(c["_where"], f"term '{tid}' pops up {k} times in the body (rule: pop-up on first use)")
        for nid, where in c["_page"].notes:
            used.add(nid)
            if nid not in glossary: rep.err(where, f"footnote ^[{nid}] is not in glossary.md")
            elif glossary[nid]["kind"] != "note": rep.err(where, f"^[{nid}] is a term; write it as {{{{{nid}|text}}}}")
        for name, where in c["_page"].widgets:
            if name and name not in widgets: rep.err(where, f"widget '{name}' has no file widgets/{name}.js")
    unused = sorted(set(glossary) - used)
    if unused: rep.note("glossary.md", "not used on any page yet: " + ", ".join(unused))

    # 3. no prerequisite loops
    state = {}
    def visit(n, path):
        state[n] = 1
        for p in by[n]["prereqs"]:
            if p not in by: continue
            if state.get(p) == 1:
                loop = path[path.index(p):] + [p]
                rep.err("prerequisites", "loop: " + " -> ".join(loop))
            elif not state.get(p): visit(p, path + [p])
        state[n] = 2
    for c in concepts:
        if not state.get(c["id"]): visit(c["id"], [c["id"]])

    # 4. every prerequisite has a recap and a check question
    for c in concepts:
        for p in c["prereqs"]:
            src = by.get(p) or ext.get(p)
            if src and (not src.get("recap") or not src.get("check")):
                rep.err(c["_where"], f"prerequisite '{p}' has no recap or check question")

    # style rules: 1 to 4 prereqs, direct prereqs only
    def reach(n, seen=None):
        seen = set() if seen is None else seen
        for p in graph.get(n, []):
            if p in graph and p not in seen: seen.add(p); reach(p, seen)
        return seen
    for c in concepts:
        if len(c["prereqs"]) > 4: rep.warn(c["_where"], f"has {len(c['prereqs'])} prerequisites (rule: 1 to 4)")
        for p in c["prereqs"]:
            for q in c["prereqs"]:
                if q != p and p in reach(q):
                    rep.warn(c["_where"], f"lists '{p}', but '{q}' already leads to it (list direct prerequisites only)"); break

    # plan file agrees with the pages
    if plan:
        for c in concepts:
            if c["id"] not in plan: rep.warn(c["_where"], "is not in the concept list")
            elif sorted(plan[c["id"]]) != sorted(c["prereqs"]):
                rep.warn(c["_where"], f"prereqs {c['prereqs']} differ from the concept list {plan[c['id']]}")

# ---------------------------------------------------------------- build

def katex_css():
    css = (ENGINE / "vendor/katex/katex.min.css").read_text(encoding="utf-8")
    def font(m):
        name = m.group(1)
        p = ENGINE / "vendor/katex/fonts" / name
        if name.endswith(".woff2") and p.exists():
            return "url(data:font/woff2;base64," + base64.b64encode(p.read_bytes()).decode() + ")"
        return None
    # keep only the woff2 source of each @font-face
    css = re.sub(r"src:url\(fonts/([^)]+\.woff2)\) format\(\"woff2\"\)(,url\([^)]*\) format\(\"[^\"]*\"\))*",
                 lambda m: "src:" + font(m) + ' format("woff2")', css)
    return css

def main():
    ap = argparse.ArgumentParser(description="Check and build a Learning Web subject.")
    ap.add_argument("--subject", default=str(HERE.parent), help="subject folder")
    ap.add_argument("--out", help="output HTML file (default: dist/<storage>.html)")
    ap.add_argument("--check", action="store_true", help="check only, do not write the page")
    a = ap.parse_args()
    root = Path(a.subject).resolve()
    rep = Report()

    subj_hdr, intro_md = split_header((root / "subject.md").read_text(encoding="utf-8"), "subject.md", rep)
    files = sorted((root / "concepts").glob("*.md"))
    concepts = [load_concept(p, rep) for p in files]
    glossary = load_glossary(root / "glossary.md", rep)
    wdir = root / "widgets"
    widgets = {p.stem: p for p in wdir.glob("*.js")} if wdir.exists() else {}
    plan_path = root / subj_hdr["plan"] if subj_hdr.get("plan") else None
    plan = load_plan(plan_path)
    wanted = {p for c in concepts for p in c["prereqs"] if ":" in p}
    wanted |= {cid for c in concepts for cid, _ in c["_page"].links if ":" in cid}
    wanted |= {g["concept"] for g in glossary.values() if g["concept"] and ":" in g["concept"]}
    ext = load_external(subj_hdr, root, wanted, rep) if wanted else {}
    run_checks(concepts, glossary, widgets, plan, rep, ext)
    # practice_sets: yes in subject.md means every written page needs a :::problems set.
    if str(subj_hdr.get("practice_sets", "")).lower() in ("yes", "true", "required"):
        for c in concepts:
            if not c["stub"] and not c["problems"]: rep.err(c["_where"], "has no :::problems practice set (subject.md asks for one on every page)")
            elif c["problems"] and len(c["problems"]) < 3: rep.warn(c["_where"], f"practice set has only {len(c['problems'])} problems")

    # order: concept-list order first, then any others by id
    rank = {cid: i for i, cid in enumerate(plan)}
    concepts.sort(key=lambda c: (rank.get(c["id"], 10**6), c["id"]))
    ids = {c["id"] for c in concepts}

    start = subj_hdr.get("start")
    if start and start not in ids: rep.err("subject.md", f"start page '{start}' has no concept file")
    ipg = Page(None, "subject.md intro", rep)
    intro_html, _, _, _ = render_blocks(intro_md, ipg)

    n_stub = sum(c["stub"] for c in concepts)
    print(f"Learning Web build: {len(concepts)} concepts ({n_stub} stub), {sum(g['kind']=='term' for g in glossary.values())} terms, "
          f"{sum(g['kind']=='note' for g in glossary.values())} footnotes, {len(widgets)} widgets")
    rep.print()
    if a.check: return 1 if rep.errors else 0

    used_w = sorted({n for c in concepts for n, _ in c["_page"].widgets if n in widgets})
    data = {
        "subject": {"title": subj_hdr.get("title", "Learning Web"), "name": subj_hdr.get("name", ""), "subtitle": subj_hdr.get("subtitle", ""),
                    "start": start, "storage": subj_hdr.get("storage", "learning-web"),
                    "intro": {"page": subj_hdr.get("intro_page", start), "html": intro_html} if intro_md.strip() else None,
                    "labels": {"example": "Worked example", "practice": "Try it yourself", "level": "Level",
                               **(subj_hdr.get("labels") if isinstance(subj_hdr.get("labels"), dict) else {})}},
        "concepts": [{k: v for k, v in c.items() if not k.startswith("_")} for c in concepts],
        "external": [{k: v for k, v in e.items() if k != "prereqs"} for e in ext.values() if not e.get("_hidden")],
        "glossary": {gid: {"title": g["title"], "def": g["def"], "concept": g["concept"]} for gid, g in glossary.items()},
    }
    titles = {c["id"]: c["title"] for c in concepts}
    titles.update({k: e["title"] for k, e in ext.items() if not e.get("_hidden")})
    js_data = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    js_data = re.sub(r"\\u0002([^\\]+?)\\u0002", lambda m: html.escape(titles.get(m.group(1), m.group(1))), js_data)
    wjs = "\n".join(f"/* widgets/{n}.js */\n" + widgets[n].read_text(encoding="utf-8") for n in used_w)
    wcss = "\n".join((wdir / f"{n}.css").read_text(encoding="utf-8") for n in used_w if (wdir / f"{n}.css").exists())
    page = (ENGINE / "engine.html").read_text(encoding="utf-8")
    title = html.escape(data["subject"]["title"])
    # Only subjects that use math carry KaTeX (about 700 KB).
    math = 'class=\\"tex\\"' in js_data or "lw.tex(" in wjs
    for token, value in (("/*__LW_KATEX_CSS__*/", katex_css() if math else ""),
                         ("/*__LW_KATEX_JS__*/", (ENGINE / "vendor/katex/katex.min.js").read_text(encoding="utf-8") if math else ""),
                         ("/*__LW_WIDGET_CSS__*/", wcss), ("/*__LW_WIDGETS__*/", wjs),
                         ("/*__LW_DATA__*/null", js_data), ("__LW_TITLE__", title)):
        if token not in page: sys.exit(f"engine.html is missing the {token} marker")
        page = page.replace(token, value)
    slug = re.sub(r"[^a-z0-9]+", "-", (data["subject"]["name"] or "subject").lower()).strip("-")
    out = Path(a.out) if a.out else root / "dist" / f"{slug}.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    # Full document for opening the file directly (KaTeX needs a doctype),
    # plus a fragment for publishing as an artifact (the host adds the doctype).
    out.write_text('<!doctype html>\n<html lang="en">\n<meta charset="utf-8">\n'
                   '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + page, encoding="utf-8")
    frag = out.with_suffix(".artifact.html")
    frag.write_text(page, encoding="utf-8")
    print(f"Wrote {out} ({out.stat().st_size // 1024} KB) and {frag.name} (same page, for publishing as an artifact)")
    return 1 if rep.errors else 0

if __name__ == "__main__":
    sys.exit(main())
