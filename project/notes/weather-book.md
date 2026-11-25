---
name: weather-book
description: The Weather Book: status, where every file is, the style rules, how to build it, and what's left
metadata:
  type: project
---

# The Weather Book: pick-up notes

**Status (2026-11-25): all 20 chapters revised.** The book is on the site as a plain reader at
https://jsphyg.github.io/rootward/weather-book/ (draft edition). It does NOT yet work like the other
subjects (no concept pages, pop-ups, prerequisites, or check questions). Joe said that's fine for now.

## What the book is
- A ~127,000-word, 20-chapter weather book Joe drafted in ChatGPT, revised down to about 80,000 words of
  main text in a new style. Revision started 2026-11-22, one chapter per thread, in the "Weather Book"
  Claude project.
- Revised word counts (main text only, see "Word counts" below) and targets are in the table in
  `subjects/weather-book/book-map.md`, section 3.

## Where the files are
| What | Where in this repo | Also kept in |
|---|---|---|
| Revised chapters | `subjects/weather-book/chapters/chapter-01.md` to `chapter-20.md` | Weather Book project files: `weather-book/chapter-NN-revised.md` |
| Source notes (Ch 13 to 20 only) | `subjects/weather-book/sources/chapter-NN.md` | project files: `chapter-NN-sources.md` |
| Style rules | `subjects/weather-book/style-guide.md` | project files |
| Which chapter owns each idea, length table, notes per chapter | `subjects/weather-book/book-map.md` | project files |
| Joe's original draft (all 20 chapters, one file) | `subjects/weather-book/original/weather-book-draft.md` | project upload |
| Book title and contents-page note | `subjects/weather-book/book.md` | |
| Reader builder | `build/build_book.py` (Python 3 standard library only) | |
| Built site pages (don't edit by hand) | `docs/weather-book/` | |

If the project files and the repo ever disagree, the newer edit wins. Copy it to the other place.

## How to build and publish
    python3 build/build_book.py --book subjects/weather-book --out docs/weather-book
`build/publish-site.sh` already runs this along with the other subjects. Then commit, push a branch, and
open a pull request (Joe approves merges).

## Style rules in one minute (full version: style-guide.md)
1. Tell a story, don't teach a lesson. Since Ch 13, each of about 12 sections opens with a true story
   (a real person, place, and date). Ch 19 and 20 also follow this.
2. One idea per paragraph. Short sentences for important ideas. Plain words; define a term in the
   sentence it appears. Write for a curious adult with no science background.
3. Detail goes into pictures. Each "Illustration N" or "Visual Spread N.N" is a title, an italic
   description, then callouts. Numbers, lists, and side facts live there, not in the main text.
4. Three metaphors, never mixed: the ocean of air (we live at the bottom of it); weather is the
   atmosphere trying to even things out; the basic weather machine. The book ends "at the bottom of
   the ocean" (Joe approved).
5. Every idea has one home (book-map.md section 1). Other chapters point back in a sentence:
   "(Chapter 7, 7.9)".
6. One safety box per chapter. Chapter 20 holds the one-page quick reference that points back to them.
7. One forecasting routine for the whole book, in Chapter 13 (13.11 and 13.12). Ch 18 and 20 point to it.
8. Metric first, US units in parentheses. Round numbers in the text; exact ones in tables or spreads.
9. No guessed facts. Every story fact is checked and listed in that chapter's sources file. If a
   detail can't be checked, leave it out and say so in the notes.
10. Each chapter ends: Weather Safety box, Field Observation / Field Exercise, one or two Try It
    boxes, Chapter Summary (ending on the ocean-of-air image), Weather-Watcher's Vocabulary, and a
    "Next:" line.
11. Length cap: about 4,500 words of main text per chapter.

## Word counts
Count main text, including boxes and the summary. Leave out headings, italic picture descriptions and
callouts, tables, and the vocabulary. (This matched the reported Ch 9 figure of 4,550.)

## How Joe likes to work
- Answer first, short, in plain words, with any decision asked separately and explained simply.
- After each chapter: a bold headline with the word count vs. target, short "What changed" bullets,
  and small judgment calls he can overrule.

## What's left (nothing is blocked)
1. Joe reviews Chapters 18, 19, and 20 (written 2026-11-25 without waiting for his OK, as he asked).
2. Decide whether to add a book-wide source-notes section. Ch 13 to 20 have their own notes files;
   Ch 1 to 12 have none.
3. One read-through of the whole book for cross-references ("Chapter 7, 7.9") and repeated stories.
4. Word count check: the book came in over the 70,000 target because Ch 13 onward open every section
   with a story. Joe may want to trim, or accept it.
5. Make it work like the other subjects (later): split chapters into linked concept pages with
   prerequisites, recaps, check questions, and live pictures. That means a concept list, like
   `calculus-concept-list.md`, and pages in the engine's format. Not started.
6. Illustrations: every picture is still a written description. Decide how pictures will be made.
