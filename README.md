# Rootward

The Learning Web: subjects written as small linked concept pages. Each page lists what you need to know first, so a reader can follow a gap back to its roots.

Live site (GitHub Pages): https://jsphyg.github.io/rootward/

## Layout

- `engine/`: the page engine (one HTML template) and vendored KaTeX for math.
- `build/`: the build script and checker. See `build/README.md`.
- Repository root: the Calculus subject (`subject.md`, `concepts/`, `glossary.md`, `widgets/`).
- `subjects/world-history/`: the World History subject (75 pages).
- `subjects/physics-astronomy/`: the Physics and Astronomy subject (123 pages).
- `subjects/weather-book/`: The Weather Book, 20 chapters shown as a plain reader (not concept pages yet). Pick-up notes: `project/notes/weather-book.md`.
- `calculus-concept-list.md`: the Calculus plan (44 pages). Each other subject keeps its plan in its own folder.
- `style-and-rules.md`: the writing rulebook every page follows (current version).
- `practice-sets/`: Calculus practice problem sets.
- `project/originals/`: the first documents the project started from (rulebook, engine spec, concept list, prototype page).
- `project/notes/`: the project's working notes (decisions, standing rules, how pages are built and published). Read `project/notes/MEMORY.md` first when picking the project back up.
- `docs/`: the built site that GitHub Pages serves. Do not edit by hand.

## Picking the project back up

1. Clone this repository.
2. Read `project/notes/MEMORY.md`, then `style-and-rules.md`.
3. Build one subject: `python3 build/build.py --subject subjects/world-history` (Calculus: `python3 build/build.py`). It needs only Python 3.

## Publish

```sh
sh build/publish-site.sh
git add -A && git commit -m "Update site" && git push
```
