# Building the Calculus Learning Web

    python3 build/build.py            # check everything, then write dist/calculus.html
    python3 build/build.py --check    # check only

No installs needed (Python 3 standard library). It prints ERRORS, WARNINGS and NOTES.
Errors give exit code 1, but the page is still written so you can look at it.

Optional browser test (needs Node + Playwright): renders every page and reports math KaTeX
cannot read, missing figures and script errors.

    node build/render-test.js dist/calculus.html

## What goes where

| Path | What it is |
|---|---|
| `engine/engine.html` | The engine: layout, navigation, pop-ups, quizzes, map. Same for every subject. |
| `engine/vendor/katex/` | KaTeX 0.16.11 (math display), copied into the page at build time. |
| `subject.md` | Site title, start page, intro tip, which file is the concept list. |
| `concepts/<id>.md` | One concept per file. |
| `glossary.md` | Terms and footnotes. |
| `widgets/<name>.js` (+ optional `.css`) | Figures. Each file calls `LW.widget("name", function(el, lw){...})`. |
| `dist/calculus.html` | The built page (open in a browser). `calculus.artifact.html` is the same page for publishing. |

## What the checker tests

Errors: header fields missing (id, title, prereqs, big, recap, check with q / 3-4 options / answer / why);
id not matching the file name; links, `uses:`, prereqs or glossary `concept:` pointing to a page that does not exist;
`{{term}}` or `^[note]` not in the glossary (or the wrong kind); missing widget file; prerequisite loops;
unclosed `$` math or broken `[[ ]]` / `{{ }}` markup; a full page with no worked example, practice, or why on a step.

Warnings: stub pages; more than 4 prereqs; an indirect prerequisite; a concept linked more than twice on a page;
a term popped up more than once in the body; prereqs that differ from the concept list.

## Markup notes

- Header strings are read literally, so `\cdot` inside quotes is fine (this is not full YAML).
- Check-question text, options and glossary entries can hold math but not links, pop-ups or footnotes.
- A link with no text, `[[slope]]`, shows the page's title.
- A paragraph that is all italics (`*Notice: ...*`) is shown as a caption.
- `status: stub` pages show the recap and check under "Not written yet".

## Other subjects

Each subject has its own folder with the same layout. World history (pilot) lives in `subjects/world-history/`:

    python3 build/build.py --subject subjects/world-history

`subject.md` can rename the page labels, for example `labels:` with `example: Walkthrough`.
A widget can take data: put lines after `:::widget name` and close with `:::`. Each line reaches the widget
as `args.lines` (a `caption:` line becomes `args.caption`). See `subjects/world-history/widgets/timeline.js`.
KaTeX is only included when a subject uses math.

## Pictures (live from Wikimedia Commons, nothing stored)

    :::image
    file: Rosetta_Stone.JPG
    alt: what the picture shows, for screen readers
    caption: what to notice
    credit: author, license
    :::

The page loads the picture from Wikimedia Commons when someone opens it. Where outside pictures
are blocked (a claude.ai artifact blocks them), it shows a captioned link to the picture instead.
