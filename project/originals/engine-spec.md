# Learning Web: Engine Spec

The **engine** is the reusable part: the page layout, navigation, pop-ups, quizzes and progress map. Every subject uses the same engine. The **content** (the concepts) lives in each subject's project.

The current working prototype is `engine-prototype.html`. In it, the engine and the calculus content are mixed in one file. Separating them is the first job.

---

## 1. Features the engine provides

| Feature | What it does | Status |
|---|---|---|
| Concept pages | Renders one concept in the standard layout (see Style and Rules) | Done in prototype |
| Back to where I was | A history stack. Every jump saves your place. Back returns you to the exact scroll spot | Done |
| Detour bar | Amber bar showing the trail you took, with a one-tap return | Done |
| Term pop-ups | Short definitions, with an optional link to the full page | Done |
| Footnotes | Numbered side notes as pop-ups | Done |
| Prerequisite box | Recap and link for each prerequisite | Done |
| Check questions | Wrong answer links to the prerequisite | Done |
| Progress map | Concepts by level, marked not yet / visited / got it | Done |
| Interactive figures | Sliders and diagrams per concept | Done, but hard-coded |
| Proper math display | Real math typesetting (KaTeX) | **To do** |
| Content separate from engine | Concepts loaded from data files | **To do** |
| Learning paths | Named routes through the web ("Calc 1 start to finish") | **To do** |
| Search | Find a concept by name or term | **To do** |
| Full map view | A visual graph of all concepts and their links | **To do** |
| Progress across devices | Progress saved to the account, not just the browser | **To do**, check what artifact storage allows |

---

## 2. Content format (proposed)

Each concept is **one Markdown file** with a header block. This is easy to write, read and review.

```markdown
---
id: chain-rule
title: The chain rule
prereqs: [derivative, power-rule, composite-functions]
big: To differentiate a function inside another function, multiply the two rates of change.
recap: d/dx f(g(x)) = f'(g(x)) · g'(x).
check:
  q: What is the derivative of $(2x+1)^3$?
  options: ["$6(2x+1)^2$", "$3(2x+1)^2$", "$6x+3$", "$2(2x+1)^3$"]
  answer: 0
  why: Outer gives $3u^2$, inner gives 2. Multiply them.
---

## The problem
The [[power-rule|power rule]] works on a bare x. But $(3x+1)^4$ is a
[[composite-functions|composite function]]: the {{inner|inner}} part sits inside...

Rates in a chain multiply.^[n_rates]
```

**Markup rules**

| Write this | Means |
|---|---|
| `[[concept-id\|text]]` | Link to another concept page |
| `{{term-id\|text}}` | Term pop-up from the subject's glossary |
| `^[note-id]` | Numbered footnote from the glossary |
| `$...$` | Math, typeset with KaTeX |
| `:::example` … `:::` | Worked example block, each step with `why:` and `uses:` |
| `:::practice` … `:::` | Practice problem with hidden answer |
| `:::widget slope-slider` | Embed a named interactive figure |

Each subject also has:
- `glossary.md`: terms and footnotes
- `paths.md`: named learning paths
- `widgets/`: interactive figures specific to that subject

---

## 3. Build and publish

1. A small build script reads the subject's concept files.
2. It checks them:
   - every link points to a concept that exists
   - every term and footnote exists in the glossary
   - there are no prerequisite loops
   - every prerequisite has a recap and a check question.
3. It combines the engine and the content into one page.
4. The page is published as an artifact, one per subject.

The checker matters most. With hundreds of pages, broken links and loops will happen, and a person won't catch them by reading.

---

## 4. Build order

Each step says why it sits where it does.

1. **Split the prototype and write the build script, together.** Engine code goes in one file, the 7 calculus concepts become Markdown files, and the hard-coded interactive figures move out of the engine into the subject's `widgets/` folder. The build script then joins them back into one page.
   *Why first:* Markdown files can't be seen until something turns them back into a page, so the split can't be tested without the build script. Doing them together means the page works again at the end of step 1.
2. **Add the checker** (the four checks in section 3), and run it on the 7 calculus concepts.
   *Why here:* the split is where broken links, missing glossary terms and loops get created. Catching them now is cheap, and every later step gets checked automatically.
3. **Add KaTeX math display.**
   *Why here:* the Markdown already marks math with `$...$`, so this is only a display change. Doing it after the checker means nothing else breaks unnoticed while it goes in.
4. **Test with a second, very different subject** (a small history slice).
   *Why here, not last:* this proves the engine is not math-only. If paths, search and the map were built first on a math-only engine, any calculus assumptions baked into them would have to be undone later. Better to find those assumptions while the engine is small.
5. **Add learning paths and search.**
   *Why here:* both read the content files and the glossary, so they need the content format settled and proven on two subjects first.
6. **Add the full map view.**
   *Why here:* it is the biggest visual feature and reuses the same concept and link data as paths and search, so it comes after they work.
7. **Progress across devices.** First check what artifact storage allows, then build it if possible.
   *Why last:* it depends on a platform question, not on our code, and nothing else waits for it. Progress is keyed by concept id, which is fixed in step 1, so it won't force rework.

---

## 5. Known limits of the prototype

- Math is styled text, not real math typesetting.
- Progress is saved in one browser only.
- Interactive figures are written by hand inside the engine.
- Tested in a simulated browser only, not on real phones.
