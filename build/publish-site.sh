#!/bin/sh
# Rebuild every subject and copy the pages into docs/, which GitHub Pages serves.
# Run from the repository root:  sh build/publish-site.sh
set -e
python3 build/build.py --subject .
python3 build/build.py --subject subjects/world-history
mkdir -p docs/calculus docs/world-history
cp dist/calculus.html docs/calculus/index.html
cp subjects/world-history/dist/world-history.html docs/world-history/index.html
cp build/site-index.html docs/index.html
touch docs/.nojekyll
echo "docs/ updated. Commit and push to publish."
