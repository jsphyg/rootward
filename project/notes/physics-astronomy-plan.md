---
name: physics-astronomy-plan
description: Status of the Physics and Astronomy subject (approved 124-page plan, cross-subject links to Calculus, pages done)
metadata:
  type: project
  modified: 2026-11-24T12:22:30.410Z
---

Joe asked 2026-11-24 for a Physics and Astronomy "book" that includes the math both need.
- APPROVED by Joe 2026-11-24: all 124 pages. Plan: /mnt/project-files/subjects/physics-astronomy/concept-list.md (Part A math toolkit 13, Part B physics 81, Part C astronomy 30). Write in list order; publish each batch without asking once checks pass.
- Defaults (Joe did not object): algebra-first physics; "(calc)" pages are optional side trips nothing depends on.
- Cross-subject links built (PR #31): prereqs/links/uses written `calculus:<id>`; subject.md `external:` / `calculus: ../.. https://jsphyg.github.io/rootward/calculus/`. Build reads the Calculus header (recap/check, links stripped to plain text); engine opens it in a new tab ("Open in Calculus ↗"). Checker follows Calculus prereqs for indirect-prereq warnings. Documented in build/README.md.
- Built page: subjects/physics-astronomy/dist/physics-and-astronomy.html; site path docs/physics-astronomy/ (publish-site.sh updated, home page card added).
- Done: math toolkit (13, PRs #31-32), Motion (9, PR #33), Forces (11, PR #34), Energy and momentum (11, PR #35), Rotation and gravity (8, PR #36), Oscillations and waves (6, PR #37; hookes-law now links SHM). Matter and heat (8, PR #38), Electricity and magnetism (13, PR #39), Optics + modern physics (14, PR #40). 93/124: physics done. Sky and solar system (11, PR #41). 104/124. Stars (12, PR #42). Galaxies and cosmology (7, PR #43). BOOK COMPLETE: 123/123 (plan was miscounted as 124). Waiting on Joe's review.
- Physics plot widget: subjects/physics-astronomy/widgets/plot.js (Calculus copy + xname/yname axis names). Avoid point labels at the plot's right edge (they clip).
- Use g = 9.8 m/s² (10 only for stated estimates); up positive for throws.
- Branch claude/project-thread-98ac12 is reused: after a squash merge, merge origin/main into it and push (force-push is blocked).
- Repo flow: copy changed source from /mnt/project-files into a clone, `sh build/publish-site.sh`, branch, PR, merge (Joe's standing publish approval). Requesting Joe as reviewer fails (he is the PR author); assigning works.
See [[website-build]], [[visual-style]].
