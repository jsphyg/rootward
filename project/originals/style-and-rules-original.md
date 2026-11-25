# Learning Web: Style and Rules

This is the shared rulebook. It goes in **every** Learning Web project (the Engine and each subject), so all subjects look and behave the same.

---

## 1. The core idea

- The subject is a **web of concepts**, not a book of chapters.
- One concept = one page. A page teaches **one idea**.
- Every page lists the concepts it depends on (its **prerequisites**).
- A "book" is just a **path**: a suggested order through the web.
- The reader must never get stuck because they forgot something. Every needed idea is one tap away, and one tap brings them back.

---

## 2. What every concept page contains, in this order

1. **Title**: the name of the idea, as a reader would search for it.
2. **Big idea**: one plain sentence that says what this is. No jargon.
3. **What you need for this**: each prerequisite, with
   - a one-line **recap** (shown on "Remind me")
   - a link to open its full page.
4. **Check yourself first**: one quick question per prerequisite. A wrong answer links to that prerequisite's page.
5. **Body**: the explanation, in short sections with headings.
6. **Worked example**: numbered steps. Each step has
   - the step itself
   - **why** it is done
   - **uses:** which concepts that step depends on (tappable).
7. **Try it yourself**: one practice problem with a hidden answer.
8. **Do you have it?**: one check question on this page's own idea.
9. **Mark as got it**, then **Where this leads** (pages that list this one as a prerequisite).

A starting concept with no prerequisites says so: "Nothing. This is a starting point."

---

## 3. Writing rules

- **Explain simply, always.** Write for a smart reader who has forgotten everything. Assume they need to explain it to someone else afterward.
- **Short sentences.** One idea per sentence.
- **Plain words first, the technical term second.** "The steepness of a line, called its *slope*."
- **Every technical term is a pop-up** the first time it appears on a page.
- **Show before you tell.** A table of numbers, a picture or a slider comes before the formula when possible.
- **Say why, not just how.** Every rule gets a one-paragraph reason it works.
- **No filler.** No "As we all know", "Simply", "Obviously", "It's easy to see".
- **Footnotes are for side trips** (other notation, history, edge cases). The main text must make sense without them.

---

## 4. Prerequisite rules

- List only **direct** prerequisites. If the chain rule needs the derivative, and the derivative needs limits, the chain rule lists the derivative, not limits.
- Aim for **1 to 4** prerequisites per page. More than 4 usually means the page teaches too much. Split it.
- **No loops.** A concept can never depend on itself, even through other pages.
- A prerequisite's **recap** is one or two sentences and must be enough on its own for a reader who only half forgot.
- Each prerequisite needs a **check question** that a reader who truly understands it gets right in under 30 seconds.

---

## 5. Check questions

- Multiple choice, 3 or 4 options.
- The wrong options are **real mistakes people make** (forgot to multiply by the inner derivative, mixed up rise and run), not random numbers.
- The explanation shown after answering says **why** the right answer is right.

---

## 6. Linking rules

- **Concept link**: opens another concept page. Use it when the reader may want the whole idea.
- **Term pop-up**: a short definition that does not leave the page. Use it for vocabulary.
- **Footnote**: a numbered side note. Use it for extra detail that would interrupt the flow.
- Do not link the same concept more than twice on one page. Too many links become a rabbit hole.

---

## 7. Visual style

- Dark, technical "instrument panel" look. One theme only.
- **Sharp square corners everywhere.** No rounded buttons or pills.
- Content on the **left** and wide. Concept map on the **right**, narrow.
- Button and section labels in a monospace font, in capitals.
- One accent color (cyan) for links and interactive things. Green means "got it". Amber means "detour / not quite".
- Every figure has a one-line caption saying what to notice.

---

## 8. Other subjects (history, science, and so on)

The same page structure works, with different kinds of prerequisites:

| Math | History |
|---|---|
| Prerequisite concept | Earlier event, person, place, or idea |
| Worked example | Walkthrough of a cause-and-effect chain |
| Check question | "Which of these caused…", "Who was…" |
| Interactive figure | Timeline, map, family tree |

---

## 9. Quality checklist before a page is "done"

- [ ] The big idea is one plain sentence.
- [ ] Every prerequisite has a recap and a check question.
- [ ] Every technical term pops up on first use.
- [ ] The worked example names which concept each step uses.
- [ ] The math or facts were checked step by step (by a person or a second review).
- [ ] The page reads well with all footnotes ignored.
- [ ] No prerequisite loops.
