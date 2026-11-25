# Learning Web: Calculus

## Standing rules (from Joe, 2026-11-23)
- Project writes Calculus concept pages for the Learning Web, one concept at a time. Joe also expects this project to build the website itself (engine + build).
- Follow style-and-rules.md exactly (page structure, writing, prerequisites, check questions). File id: file_012sMt7w2nSPwoD9bSM2sjDW
- calculus-concept-list.md is the plan (/mnt/project-files/calculus-concept-list.md). Direct prerequisites only. Mark ✅ when a page is done.
- Pages use the engine spec content format (Markdown + header block).
- Check all math step by step; state uncertainty plainly.
- Smart reader who forgot everything; short sentences, plain words first.
- Give direct, critical feedback on weak pages/ideas.
- Joe wants answers stated first, simply, with decisions separated.
- Publishing (Joe, 2026-11-23 4:17 PM ET): publish new pages without asking once they pass checks. Joe approves every page.
- Practice (Joe, 2026-11-23): math 'Do you have it?' sections need textbook-style practice sets, with as many problems as a learner needs. One question is fine for a simple idea; skills like solving equations need many.

## Concept list status (2026-11-23)
- Fixed and saved to /mnt/project-files/calculus-concept-list.md: chain-rule no longer lists derivative; lhopital no longer lists limits.
- Also fixed (Joe approved): optimization no longer lists critical-points; riemann-sums no longer lists functions. No indirect prerequisites or loops.
- expanding ✅ added (Joe approved): prereq exponents; factoring now lists expanding only.
- exponents ✅ and negative-fractional-exponents ✅ (Joe approved split): power-rule now lists derivative, negative-fractional-exponents. List count 44.
- 2026-11-23: functions, graphs, and the 6 rewritten prototype pages merged (PR #1, live). Slope prereq is now graphs. linear-functions ✅ in PR #2 (Joe said merge). inverse-functions ✅ live (PR #3). trig-basics ✅ live (PR #5; prereq changed to graphs). exponential-functions ✅ live (PR #6; prereqs now negative-fractional-exponents, functions). logarithms ✅ live (PR #7). Level 0 foundations complete. one-sided-limits ✅ (PR #8), limit-laws ✅ + continuity ✅ (PR #9) live; their problem sets wait in practice-sets/. limits-at-infinity ✅ + squeeze-theorem ✅ (PR #10). Level 1 complete (22/44 pages). derivative-function ✅ + sum-constant-rules ✅ (PR #12, with problem sets). 24/44 done. product-rule ✅ + quotient-rule ✅ (PR #13). trig-derivatives ✅ (PR #14; prereqs changed to sum-constant-rules, trig-basics, squeeze-theorem). 27/44 done. exp-log-derivatives ✅ (PR #15; prereqs sum-constant-rules, logarithms). 28/44 done. implicit-differentiation ✅ (PR #16; prereqs chain-rule, product-rule, sum-constant-rules). 29/44 done. higher-derivatives ✅ (PR #17; prereqs derivative-function, power-rule, sum-constant-rules). Level 2 complete. related-rates ✅ (PR #18). 31/44 done. linear-approximation ✅ (PR #19; prereqs linear-functions, power-rule). 32/44 done. critical-points ✅ (PR #20). 33/44 done. increasing-decreasing ✅ (PR #21; plot widget now has adaptive ticks, labels: side, labelat: topleft). 34/44 done. concavity ✅ (PR #22). 35/44 done. optimization ✅ (PR #23). 36/44 done. mean-value-theorem ✅ (PR #24; prereqs continuity, power-rule, sum-constant-rules). 37/44 done. lhopital ✅ (PR #25; prereqs power-rule, trig-derivatives, exp-log-derivatives). Level 3 complete. antiderivatives ✅ (PR #26; prereqs mean-value-theorem, trig-derivatives, exp-log-derivatives). 39/44 done. riemann-sums ✅ (PR #27). 40/44 done. definite-integral ✅ (PR #28). 41/44 done. ftc ✅ (PR #29). u-substitution ✅ + area-between-curves ✅ (PR #30; area-between-curves prereq changed to ftc). 44/44 done: Calculus list COMPLETE (2026-11-24).
- Reusable `plot` widget (widgets/plot.js): data lines fn/x/y/points/holes/label/caption.

## Website (2026-11-23)
- Engine + build + checker in /mnt/project-files (see build/README.md). Live: https://jsphyg.github.io/rootward/ (repo jsphyg/rootward, docs/).
- World History pilot. Facts not checked against outside sources yet.
- World history plan: /mnt/project-files/subjects/world-history/concept-list-draft.md, 75 concepts. Joe approved scope; themes later; start writing at the beginning (tools of history, then Era 1).
- Physics and Astronomy (2026-11-24): plan APPROVED (123 pages; first miscounted as 124), subjects/physics-astronomy/concept-list.md. COMPLETE 2026-11-24: all 123 live (PRs #31-43). Physics has its own widgets/plot.js copy (subject folder). Calculus pages reused as calculus:<id>. See physics-astronomy-plan.md.
- Look: Joe wants a dark brown background, light yellow text, a simple font, and a minimal design with very few boxes (pages felt too busy and boxy). This overrides style-and-rules.md section 7.

## Weather Book (added 2026-11-25)
- A separate project (the "Weather Book" Claude project), now kept in this repo too: `subjects/weather-book/`. Read `project/notes/weather-book.md` first; it has status, file map, style rules, build steps, and what's left.
- Status: all 20 chapters revised (2026-11-25). Live as a plain reader at https://jsphyg.github.io/rootward/weather-book/ (draft edition, built by `build/build_book.py`). It does not yet work like the other subjects; Joe said that's fine for now.
