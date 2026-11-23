---
id: one-sided-limits
title: One-sided limits
prereqs: [limits]
big: A one-sided limit looks at just one side. It asks where the output heads as x comes in only from the left, or only from the right.
recap: $\displaystyle\lim_{x \to a^-} f(x)$ is where $f(x)$ heads as x approaches a from the left (from smaller numbers). $\displaystyle\lim_{x \to a^+} f(x)$ is the same from the right. The ordinary limit exists only when both sides exist and are equal.
check:
  q: Let $f(x) = x + 1$ for $x < 2$, and $f(x) = 2x + 1$ for $x \geq 2$. What is $\displaystyle\lim_{x \to 2^-} f(x)$?
  options: ["3", "5", "It does not exist"]
  answer: 0
  why: The small minus means "from the left", so only inputs below 2 count. There the rule is $x + 1$, which heads to $2 + 1 = 3$. 5 is the limit from the right, and also $f(2)$, but neither is on the left side. "Does not exist" is true of the two-sided limit, because the sides disagree, but each one-sided limit exists on its own.
---

## A function with a jump

Here is a function with two rules, one for each side of 2:

$$f(x) = \begin{cases} x + 1 & \text{if } x < 2 \\ 2x + 1 & \text{if } x \geq 2 \end{cases}$$

Try inputs close to 2 from each side:

| from the left: $x$ | 1.9 | 1.99 | 1.999 |
|---|---|---|---|
| $f(x) = x + 1$ | 2.9 | 2.99 | 2.999 |

| from the right: $x$ | 2.1 | 2.01 | 2.001 |
|---|---|---|---|
| $f(x) = 2x + 1$ | 5.2 | 5.02 | 5.002 |

*Notice: from the left, the outputs head to 3. From the right, they head to 5. The graph jumps at $x = 2$.*

:::widget plot
fn: x < 1.98 ? x + 1 : (x >= 2 ? 2*x + 1 : NaN)
x: -0.8 3.8
y: -0.8 8.2
holes: 2,3
points: 2,5
caption: The left piece runs up to an open circle at (2, 3). The right piece starts with a filled dot at (2, 5), because f(2) uses the second rule.
:::

The ordinary [[limits|limit]] at 2 does not exist here, because the two sides disagree. But each side on its own clearly heads somewhere. A **one-sided limit** gives that "somewhere" a name.

## The notation

$$\lim_{x \to 2^-} f(x) = 3 \qquad \lim_{x \to 2^+} f(x) = 5$$

- $x \to 2^-$ is read "x approaches 2 from the left". x stays below 2.
- $x \to 2^+$ is read "x approaches 2 from the right". x stays above 2.

**The most common slip.** The small minus does not mean "negative 2". It means "from the side of smaller numbers". $x \to 2^-$ uses inputs like 1.99, which are positive.

## When the ordinary limit exists

$$\lim_{x \to a} f(x) = L \quad \text{exactly when} \quad \lim_{x \to a^-} f(x) = L \text{ and } \lim_{x \to a^+} f(x) = L$$

**Why it works.** The ordinary limit looks at every input near a, on both sides. For the outputs to crowd in on one number, they must do it from the left **and** from the right. If the two sides head to different numbers, there is no single target.

## Where one-sided limits come up

**Jumps.** Any function built from different rules on different sides can jump. Real examples: postage that costs more once a letter passes a weight limit, or tax brackets.

**Blow-ups.** Take $\dfrac{1}{x}$ near 0. From the right, inputs like 0.01 give 100, then 0.001 gives 1000. The outputs grow without end. From the left, $-0.01$ gives $-100$, and the outputs fall without end. We write

$$\lim_{x \to 0^+} \frac{1}{x} = \infty \qquad \lim_{x \to 0^-} \frac{1}{x} = -\infty$$

as short for "grows without end" and "falls without end".^[n_infinity]

**Edges.** $\sqrt{x}$ only has outputs for $x \geq 0$. So only the right side of 0 makes sense: $\displaystyle\lim_{x \to 0^+} \sqrt{x} = 0$.

## How to find a one-sided limit

1. Decide which side you are on: below a for $a^-$, above a for $a^+$.
2. Use the rule that applies on that side.
3. Find where that rule heads as x approaches a, as on the limits page. For an ordinary formula, plug in a.

**Why step 2 is allowed.** A left-hand limit only ever looks at inputs below a. The rule for the other side never gets used, so it cannot affect the answer.

:::example
title: Let $g(x) = x^2 - 1$ for $x < 3$, and $g(x) = 2x + 2$ for $x \geq 3$. Find both one-sided limits at 3. Does $\displaystyle\lim_{x \to 3} g(x)$ exist?

1. From the left, $x < 3$, so the rule is $x^2 - 1$.
   why: A left-hand limit only uses inputs below 3.
   uses: [functions]

2. That heads to $3^2 - 1 = 8$. So $\displaystyle\lim_{x \to 3^-} g(x) = 8$.
   why: $x^2 - 1$ is an ordinary formula, so plugging in gives where it heads.
   uses: [limits]

3. From the right, $x > 3$, so the rule is $2x + 2$. That heads to $2 \cdot 3 + 2 = 8$. So $\displaystyle\lim_{x \to 3^+} g(x) = 8$.
   why: Same method, other side, other rule.
   uses: [limits]

4. Both sides head to 8, so $\displaystyle\lim_{x \to 3} g(x) = 8$.
   why: The ordinary limit exists when both one-sided limits exist and agree. Here the two pieces meet, so there is no jump.
   uses: []
:::

:::practice
q: Let $f(x) = 4 - x$ for $x < 1$, and $f(x) = x^2 + 5$ for $x \geq 1$. Find both one-sided limits at 1. Does the limit at 1 exist?
answer: From the left: $4 - 1 = 3$. From the right: $1^2 + 5 = 6$. The sides disagree (3 and 6), so **the limit at 1 does not exist**. The graph jumps up by 3 there.
:::
