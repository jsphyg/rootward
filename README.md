# Rootward

The Learning Web: subjects written as small linked concept pages. Each page lists what you need to know first, so a reader can follow a gap back to its roots.

Live site (GitHub Pages): https://jsphyg.github.io/rootward/

## Layout

- `engine/`: the page engine (one HTML template) and vendored KaTeX for math.
- `build/`: the build script and checker. See `build/README.md`.
- Repository root: the Calculus subject (`subject.md`, `concepts/`, `glossary.md`, `widgets/`).
- `subjects/world-history/`: the World History subject.
- `docs/`: the built site that GitHub Pages serves. Do not edit by hand.

## Publish

```sh
sh build/publish-site.sh
git add -A && git commit -m "Update site" && git push
```
