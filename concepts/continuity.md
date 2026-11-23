---
id: continuity
title: Continuity
prereqs: [limits, graphs]
big: A function is continuous at a point if its graph has no break there. You could draw through it without lifting your pen. In exact terms, the limit there equals the value there.
recap: f is {{continuous|continuous}} at a when $\displaystyle\lim_{x \to a} f(x) = f(a)$. That needs three things: f has a value at a, f has a limit at a, and the two are equal. Polynomials, roots, exponentials, logs, sine and cosine are continuous wherever they are defined.
check:
  q: Which of these functions is continuous at $x = 1$?
  options: ["$x^2 + 1$", "$\dfrac{x^2 - 1}{x - 1}$", "$\dfrac{1}{x - 1}$"]
  answer: 0
  why: $x^2 + 1$ is a polynomial, so its limit at 1 is its value, 2. $\dfrac{x^2 - 1}{x - 1}$ has a limit of 2 at 1, but no value there ($0 \div 0$), so its graph has a hole. $\dfrac{1}{x - 1}$ has no value at 1 and blows up on both sides.
---

## The pen test

Picture drawing a graph from left to right. If you never have to lift your pen, the function is {{continuous|continuous}}. A break that forces you to lift it is called a {{discontinuity|discontinuity}}.

There are three kinds of break:

:::widget three-breaks

- **A hole.** One point is missing. For example, $\dfrac{x^2 - 1}{x - 1}$ at $x = 1$, as on the [[graphs|graphs]] page.
- **A jump.** The graph leaps from one height to another. For example, a function with one rule left of a point and another rule right of it.
- **A blow-up.** The graph shoots off without end. For example, $\dfrac{1}{x}$ at $x = 0$.

## The exact definition

The pen test is a good picture, but calculus needs something exact. Here it is:

$$f \text{ is continuous at } a \quad \text{means} \quad \lim_{x \to a} f(x) = f(a)$$

Hidden inside that one equation are three checks:

1. **f has a value at a.** $f(a)$ exists.
2. **f has a [[limits|limit]] at a.** Both sides head to the same number.
3. **They match.** The limit equals the value.

Each kind of break fails one of the checks:

| break | which check fails |
|---|---|
| hole (point missing) | 1: there is no value at a |
| jump | 2: the two sides disagree, so there is no limit |
| blow-up | 1 and 2: no value, and no finite limit |
| point moved off the curve | 3: there is a value and a limit, but they differ |

The last row is a hole with a single dot placed somewhere else. For example, $f(x) = 2x$ everywhere except $f(1) = 5$. The limit at 1 is 2, but the value is 5.

**Why define it this way?** "The limit equals the value" says that nearby inputs give nearby outputs, with no surprises at the point itself. That is exactly what an unbroken graph means.

## Which functions are continuous?

Most of the functions you meet are continuous wherever they are defined:

- **Polynomials**, like $x^3 - 5x + 2$, everywhere. The limit laws make plugging in give the limit, and plugging in also gives the value. So they match.
- **Fractions of polynomials** everywhere except where the bottom is 0.
- **Roots**, like $\sqrt{x}$, for $x \geq 0$.
- **Exponentials** $b^x$ everywhere, and **logs** for $x > 0$.
- **Sine and cosine** everywhere.

Combining continuous functions by adding, subtracting, multiplying, dividing (where the bottom is not 0) or composing gives another continuous function.

When people say a function is "continuous on an interval", they mean it has no break anywhere on that stretch.

## Fixing a hole

A hole can be patched. If the limit at a exists, just define $f(a)$ to be that limit. For $\dfrac{x^2 - 1}{x - 1}$, set its value at 1 to 2. The new function equals $x + 1$ everywhere, which is continuous. A break that can be fixed like this is called removable. Jumps and blow-ups cannot be fixed this way.

## Why calculus cares

**No skipping values.** A continuous function cannot get from one height to another without passing through every height in between. This is the {{ivt|intermediate value theorem}}.^[n_ivt]

It gives an easy way to show an equation has a solution. Take $f(x) = x^3 + x - 1$. Then $f(0) = -1$ and $f(1) = 1$. The function is continuous and goes from below 0 to above 0, so it must equal 0 somewhere between $x = 0$ and $x = 1$.

**Derivatives need it.** A graph with a break has no single slope at the break. So continuity comes first, and many later results, such as the mean value theorem, require it.

:::example
title: Let $f(x) = x^2$ for $x < 2$, and $f(x) = 3x - 2$ for $x \geq 2$. Is f continuous at 2?

1. Check 1, the value: $x = 2$ uses the second rule, so $f(2) = 3 \cdot 2 - 2 = 4$.
   why: The value at a point comes from the rule that covers that point.
   uses: [functions]

2. Check 2, the limit. From the left, $x^2 \to 4$. From the right, $3x - 2 \to 4$. Both sides agree, so $\displaystyle\lim_{x \to 2} f(x) = 4$.
   why: For a limit to exist, both sides must head to the same number.
   uses: [limits]

3. Check 3, do they match? The limit is 4 and the value is 4. Yes.
   why: Continuity means the limit equals the value.
   uses: []

4. All three checks pass, so **f is continuous at 2**. The two pieces meet at the point $(2, 4)$.
   why: Passing all three checks is exactly the definition.
   uses: [graphs]
:::

:::practice
q: Let $f(x) = kx + 1$ for $x < 3$, and $f(x) = x^2 - 2$ for $x \geq 3$. Find the number k that makes f continuous at 3.
answer: Value: $f(3) = 9 - 2 = 7$. Right side heads to 7 as well. Left side heads to $3k + 1$. For continuity, $3k + 1 = 7$, so $3k = 6$ and **$k = 2$**.
:::
