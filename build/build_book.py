#!/usr/bin/env python3
"""Build a plain reading website for a book written as Markdown chapters.

Used for the Weather Book (subjects/weather-book/). It is much simpler than
build.py: no concept pages, quizzes or prerequisites. Each chapter becomes one
web page, plus a contents page. Python 3 standard library only.

    python3 build/build_book.py --book subjects/weather-book --out docs/weather-book

The book folder needs:
  book.md        title, subtitle, and a short note for the contents page
  chapters/      chapter-01.md, chapter-02.md, ... (sorted by file name)
"""
import argparse
import html
import json
import os
import re
import shutil
import sys

STYLE = """
:root{--bg:#241811;--ink:#f4e7b8;--muted:#bfae86;--line:#3a2a1e;--accent:#86c9bd;--pic:#2e2017}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-size:18px;line-height:1.7}
main{max-width:700px;margin:0 auto;padding:40px 16px 80px}
a{color:var(--accent)}
nav.top{font-size:.9rem;color:var(--muted);margin-bottom:28px;display:flex;gap:16px;flex-wrap:wrap}
nav.top a{text-decoration:none}
nav.top a:hover{text-decoration:underline}
h1{font-size:2.3rem;line-height:1.2;font-weight:700;letter-spacing:-.02em;margin:.2em 0 .2em}
h2{font-size:1.5rem;line-height:1.3;font-weight:650;margin:2.2em 0 .5em}
h3{font-size:1.1rem;font-weight:650;margin:1.8em 0 .4em;color:var(--muted)}
h1 + h2{margin-top:.2em;color:var(--muted);font-weight:500}
p{margin:0 0 1.1em}
hr{border:0;border-top:1px solid var(--line);margin:2.6em 0}
blockquote{margin:0 0 1.1em;padding-left:18px;border-left:3px solid var(--line);color:var(--muted)}
ul,ol{padding-left:1.4em;margin:0 0 1.1em}
li{margin:.25em 0}
table{border-collapse:collapse;width:100%;margin:0 0 1.3em;font-size:.92rem;display:block;overflow-x:auto}
th,td{text-align:left;padding:6px 10px;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--muted);font-weight:600}
.pic{background:var(--pic);border-radius:6px;padding:14px 16px;color:var(--muted);font-size:.95rem}
.pic em{font-style:normal}
.book-figure{margin:1.3em 0 2em}
.book-figure.spread{width:min(1000px,calc(100vw - 32px));position:relative;left:50%;transform:translateX(-50%)}
.book-figure img{display:block;width:100%;height:auto;background:#ede0bd}
.book-figure figcaption{color:var(--ink);font-size:.94rem;line-height:1.5;margin-top:.65em}
.figure-notes{color:var(--muted);font-size:.88rem;line-height:1.5;margin:.6em 0 0;padding-left:1.25em}
.figure-notes li{margin:.35em 0}
.book-figure.spread figcaption,.book-figure.spread .figure-notes{max-width:700px;margin-left:auto;margin-right:auto}
.part{font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:3em 0 0}
.toc a{display:block;padding:12px 0;text-decoration:none;color:var(--ink)}
.toc a + a{border-top:1px solid var(--line)}
.toc b{color:var(--accent);font-weight:600}
.toc span{display:block;color:var(--muted);font-size:.95rem}
.pager{display:flex;justify-content:space-between;gap:16px;margin-top:3em;font-size:.95rem}
.lede{color:var(--muted)}
"""

FONT = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap" rel="stylesheet">')


def inline(text):
    """Bold, italics, code and links inside one line of text."""
    t = html.escape(text, quote=False)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', t)
    t = re.sub(r"\*\*\*(.+?)\*\*\*", r"<b><i>\1</i></b>", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    return t


def is_picture(par):
    """A paragraph that is all italics is a picture description."""
    s = par.strip()
    return s.startswith("*") and s.endswith("*") and not s.startswith("**")


def to_html(md, illustrations=None):
    """A small Markdown reader: enough for the book's chapters."""
    lines = md.replace("\r\n", "\n").split("\n")
    out, i, n = [], 0, len(lines)
    in_picture = False  # after an "Illustration" or "Visual Spread" heading
    illustrations = illustrations or {}
    while i < n:
        line = lines[i]
        s = line.strip()
        if not s:
            i += 1
            continue
        m = re.match(r"^(#{1,4})\s+(.*)$", s)
        if m:
            level = len(m.group(1))
            text = m.group(2).strip()
            in_picture = level == 3 and re.match(r"(Illustration|Visual Spread)", text) is not None
            out.append(f"<h{level}>{inline(text)}</h{level}>")
            i += 1
            if in_picture and text in illustrations:
                item = illustrations[text]
                cls = "book-figure spread" if text.startswith("Visual Spread") else "book-figure"
                src = "images/" + os.path.basename(item["image"])
                out.append(f'<figure class="{cls}"><img src="{html.escape(src, quote=True)}" '
                           f'alt="{html.escape(item["alt"], quote=True)}" loading="lazy" decoding="async">'
                           f'<figcaption>{html.escape(item["caption"])}</figcaption>')
                if item.get("notes"):
                    tag = 'ol' if item.get('ordered') else 'ul'
                    out.append(f'<{tag} class="figure-notes">' + ''.join(
                        f'<li>{html.escape(note)}</li>' for note in item["notes"]) + f'</{tag}>')
                out.append('</figure>')
                # Keep the source illustration brief, but hide it after the finished image.
                while i < n and not re.match(r"^-{3,}$", lines[i].strip()):
                    i += 1
                in_picture = False
            continue
        if re.match(r"^(-{3,}|\*{3,})$", s):
            in_picture = False
            out.append("<hr>")
            i += 1
            continue
        if s.startswith(">"):
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip()[1:].strip())
                i += 1
            out.append("<blockquote><p>" + "<br>".join(inline(b) for b in buf) + "</p></blockquote>")
            continue
        if s.startswith("|"):
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip())
                i += 1
            cells = [[c.strip() for c in r.strip("|").split("|")] for r in rows]
            head, body = cells[0], [r for r in cells[1:] if not all(re.match(r"^:?-+:?$", c) for c in r)]
            t = "<table><thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr></thead><tbody>"
            t += "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body)
            out.append(t + "</tbody></table>")
            continue
        lm = re.match(r"^([-*]|\d+\.)\s+", s)
        if lm:
            ordered = lm.group(1)[0].isdigit()
            items = []
            while i < n:
                st = lines[i].strip()
                mm = re.match(r"^([-*]|\d+\.)\s+(.*)$", st)
                if mm:
                    items.append(mm.group(2))
                elif st and items and lines[i].startswith(("  ", "\t")):
                    items[-1] += " " + st
                else:
                    break
                i += 1
            tag = "ol" if ordered else "ul"
            cls = ' class="pic"' if in_picture or all(is_picture(x) for x in items) else ""
            out.append(f"<{tag}{cls}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
            continue
        buf = []
        while i < n:
            st = lines[i].strip()
            if not st or re.match(r"^(#{1,4}\s|>|\||([-*]|\d+\.)\s|-{3,}$)", st):
                break
            buf.append(st)
            i += 1
        par = " ".join(buf)
        cls = ' class="pic"' if is_picture(par) else ""
        out.append(f"<p{cls}>{inline(par)}</p>")
    return "\n".join(out)


def read_header(path):
    """Read 'key: value' lines between --- markers at the top of book.md."""
    text = open(path, encoding="utf-8").read()
    meta, body = {}, text
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if m:
        for line in m.group(1).splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip()
        body = m.group(2)
    return meta, body


def page(title, body, home_link):
    return ("<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n"
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
            f"<title>{html.escape(title)}</title>\n{FONT}\n<style>{STYLE}</style>\n</head>\n<body>\n<main>\n"
            f"{home_link}\n{body}\n</main>\n</body>\n</html>\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--book", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    meta, intro = read_header(os.path.join(args.book, "book.md"))
    manifest_path = os.path.join(args.book, "illustrations.json")
    illustrations = {}
    if os.path.exists(manifest_path):
        with open(manifest_path, encoding="utf-8") as fh:
            illustrations = json.load(fh)
    title = meta.get("title", "Book")
    chdir = os.path.join(args.book, "chapters")
    files = sorted(f for f in os.listdir(chdir) if f.endswith(".md"))
    if not files:
        sys.exit("No chapters found in " + chdir)
    os.makedirs(args.out, exist_ok=True)
    for chapter_images in illustrations.values():
        for item in chapter_images.values():
            source = os.path.join(args.book, "images", os.path.basename(item["image"]))
            target_dir = os.path.join(args.out, "images")
            os.makedirs(target_dir, exist_ok=True)
            shutil.copy2(source, os.path.join(target_dir, os.path.basename(source)))

    chapters = []
    for f in files:
        md = open(os.path.join(chdir, f), encoding="utf-8").read()
        h1 = re.search(r"^#\s+(.+)$", md, re.M)
        h2 = re.search(r"^##\s+(.+)$", md, re.M)
        words = len(re.findall(r"\b\w+\b", md))
        chapters.append({"file": f, "slug": f[:-3], "md": md,
                         "label": h1.group(1).strip() if h1 else f,
                         "name": h2.group(1).strip() if h2 else "",
                         "words": words})

    site_home = '<a href="../">Rootward</a>'
    for k, ch in enumerate(chapters):
        nav = f'<nav class="top">{site_home}<a href="./">{html.escape(title)}: contents</a></nav>'
        prev_l = f'<a href="{chapters[k-1]["slug"]}.html">&larr; {html.escape(chapters[k-1]["label"])}</a>' if k else "<span></span>"
        next_l = f'<a href="{chapters[k+1]["slug"]}.html">{html.escape(chapters[k+1]["label"])} &rarr;</a>' if k + 1 < len(chapters) else "<span></span>"
        body = to_html(ch["md"], illustrations.get(ch["slug"])) + f'\n<div class="pager">{prev_l}{next_l}</div>'
        with open(os.path.join(args.out, ch["slug"] + ".html"), "w", encoding="utf-8") as fh:
            fh.write(page(f'{ch["label"]}: {ch["name"]} | {title}', body, nav))

    toc = "".join(
        f'<a href="{c["slug"]}.html"><b>{html.escape(c["label"])}</b><span>{inline(c["name"])}</span></a>'
        for c in chapters)
    body = (f'<div class="part">{html.escape(meta.get("label", "Book"))}</div>'
            f'<h1>{html.escape(title)}</h1>'
            f'<p class="lede">{html.escape(meta.get("subtitle", ""))}</p>'
            f'{to_html(intro)}<div class="toc">{toc}</div>')
    with open(os.path.join(args.out, "index.html"), "w", encoding="utf-8") as fh:
        fh.write(page(title, body, f'<nav class="top">{site_home}</nav>'))
    total = sum(c["words"] for c in chapters)
    print(f"{len(chapters)} chapters, about {total:,} words (all text), written to {args.out}")


if __name__ == "__main__":
    main()
