---
name: content-format-decisions
description: Choices made for concept Markdown files where engine-spec section 2 is silent (example/practice syntax, stubs, glossary layout)
metadata:
  type: project
---

Decided while writing concepts/factoring.md (2026-11-23), not yet confirmed by Joe:
- Pages live in /mnt/project-files/concepts/<id>.md; glossary in /mnt/project-files/glossary.md (### id, then - title/- def/- concept lines). All prototype glossary entries were ported there.
- :::example uses `title:` then numbered steps, each with indented `why:` and `uses: [ids]`. :::practice uses `q:` and `answer:`.
- A prereq's recap/check live in the PREREQ's own file header. If that page isn't written yet, create a header-only stub with `status: stub` (exponents.md is one).
- The header `check` doubles as the page's own "Do you have it?" question (as in the prototype), so pick it to test what downstream pages need.
Resolved: `expanding` page added (Joe approved); factoring links to it instead of teaching it.
- Starting-point pages (prereqs: []) do NOT write "Nothing. This is a starting point." in the body; the engine should render it from the empty prereqs list. (Decided writing exponents.md, 2026-11-23.)
- `status: draft` marks a written page whose place in the concept list is not yet approved by Joe.
