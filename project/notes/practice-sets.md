---
name: practice-sets
description: Every Calculus page needs a :::problems practice set (format, size and rules), added 2026-11-23 at Joe's request
metadata:
  type: project
  modified: 2026-11-23T21:36:37.665Z
---

Joe (2026-11-23) wants "Do you have it?" on math pages to hold as many problems as a learner needs, like a textbook exercise page. Simple ideas: one or a few; skills with working: many.

- Format: one `:::problems` block in the page body; each problem is a `q:` line + `answer:` line, blank line between problems, closed by `:::`. The single `:::practice` stays too.
- Engine shows it collapsed ("Practice set · N problems, easiest first") under the check question; each answer has its own toggle. Keeps the minimal look (see [[content-format-decisions]]).
- subject.md `practice_sets: yes` (Calculus) makes the checker ERROR on any written page without a set; <3 problems warns.
- Size: 5-8 for plain ideas, 12-20 for skills. Easiest first, cover every pattern the page teaches, worked answers with final in bold, only use the page + its prerequisites.
- Rules written up in /mnt/project-files/style-and-rules.md section 5b (an updated copy of the uploaded rulebook).
- Shipped in PR #11: 293 problems on 22 pages. A numeric checker script was used to test answers (rebuild one if needed; sympy is not installed).
