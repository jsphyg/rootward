---
name: visual-style
description: Joe's chosen look for all Learning Web sites (overrides style-and-rules.md section 7 colors, fonts and boxes)
metadata:
  type: feedback
---

Joe (2026-11-23): dark brown background, light yellow text; then "too busy, too boxy, minimal boxes, simpler font". Applied engine-wide (all subjects + landing page) in engine/engine.html, merged as rootward PR #4:
- bg #241811, text #f4e7b8, links/interactive teal #86c9bd, got-it green #b7d98c, detour orange #eda25e.
- One font: Inter (sans-serif) for everything. No serif, no mono labels, no all-caps labels.
- Minimal: no page frame, no grid background, no bordered boxes around equations, prereqs, quizzes, figures, examples, practice or the map. Spacing and headings separate sections; quiz options are soft filled pills, buttons rounded.
**Why:** Joe found the boxed "instrument panel" look busy and complicated. style-and-rules.md section 7 still describes the old style; this memory wins.
**How to apply:** new widgets/CSS should not add borders or boxes; use var(--raise) fill sparingly, plain text labels in sentence case.
