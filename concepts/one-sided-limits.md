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

:::problems
q: Let $f(x) = 2x$ for $x < 4$, and $f(x) = x + 5$ for $x \geq 4$. Find $\displaystyle\lim_{x \to 4^-} f(x)$.
answer: From the left, $x < 4$, so use $2x$. It heads to $2 \cdot 4 =$ **8**.

q: For the same f, find $\displaystyle\lim_{x \to 4^+} f(x)$ and $f(4)$. Does $\displaystyle\lim_{x \to 4} f(x)$ exist?
answer: From the right, use $x + 5$, which heads to $4 + 5 = 9$. Also $f(4) = 9$, because $x = 4$ uses the second rule. The left limit is 8 and the right limit is 9. They disagree, so **the limit at 4 does not exist**.

q: What does $x \to 5^-$ mean? Give three inputs that fit it.
answer: x approaches 5 from the left, staying **below** 5. For example 4.9, 4.99, 4.999. The minus does not mean the inputs are negative.

q: Let $f(x) = x^2$ for $x < -1$, and $f(x) = 3x + 4$ for $x \geq -1$. Find both one-sided limits at $-1$. Does the limit exist?
answer: Left: $(-1)^2 = 1$. Right: $3(-1) + 4 = -3 + 4 = 1$. Both are 1, so **$\displaystyle\lim_{x \to -1} f(x) = 1$**.

q: A function has $f(x) = 1$ for every $x \neq 0$, and $f(0) = 7$. Find $\displaystyle\lim_{x \to 0^-} f(x)$, $\displaystyle\lim_{x \to 0^+} f(x)$, and $\displaystyle\lim_{x \to 0} f(x)$.
answer: On both sides, every input near 0 (but not 0) gives 1. So **all three limits are 1**. The value $f(0) = 7$ does not matter, because limits never look at the point itself.

q: Find $\displaystyle\lim_{x \to 0^+} \sqrt{x}$. Why is there no left-hand limit at 0?
answer: As x shrinks toward 0 from above, $\sqrt{x}$ shrinks toward **0**. For example $\sqrt{0.0001} = 0.01$. There is no left-hand limit because $\sqrt{x}$ has no real output for negative x, so there are no inputs on the left to look at.

q: Describe $\displaystyle\lim_{x \to 0^+} \frac{1}{x}$ and $\displaystyle\lim_{x \to 0^-} \frac{1}{x}$.
answer: From the right: $\frac{1}{0.01} = 100$, $\frac{1}{0.001} = 1000$. The outputs grow without end: **$+\infty$**. From the left: $\frac{1}{-0.01} = -100$, $\frac{1}{-0.001} = -1000$. They fall without end: **$-\infty$**. Neither is a real number, so neither limit exists as a number.

q: Describe $\displaystyle\lim_{x \to 3^-} \frac{1}{x - 3}$ and $\displaystyle\lim_{x \to 3^+} \frac{1}{x - 3}$.
answer: From the left, $x - 3$ is a tiny **negative** number. At $x = 2.99$: $\frac{1}{-0.01} = -100$. So the left limit is **$-\infty$**. From the right, $x - 3$ is tiny and positive. At $x = 3.01$: $\frac{1}{0.01} = 100$. So the right limit is **$+\infty$**.

q: Rounding down to a whole number is written $\lfloor x \rfloor$. So $\lfloor 2.7 \rfloor = 2$ and $\lfloor 3 \rfloor = 3$. Find $\displaystyle\lim_{x \to 3^-} \lfloor x \rfloor$ and $\displaystyle\lim_{x \to 3^+} \lfloor x \rfloor$.
answer: Just below 3, inputs like 2.99 round down to 2, so the left limit is **2**. Just above 3, inputs like 3.01 round down to 3, so the right limit is **3**. The graph is a staircase that jumps at every whole number.

q: A letter costs 1 dollar to post if it weighs up to 1 ounce, and 1.50 dollars if it weighs more than 1 ounce, up to 2 ounces. Let $C(w)$ be the cost for weight w. Find the one-sided limits of C at $w = 1$.
answer: Just under 1 ounce, the cost is 1 dollar, so $\displaystyle\lim_{w \to 1^-} C(w) =$ **1**. Just over 1 ounce, it is 1.50 dollars, so $\displaystyle\lim_{w \to 1^+} C(w) =$ **1.50**. The cost jumps, so there is no two-sided limit at 1.

q: Find $\displaystyle\lim_{x \to 1^-} \frac{x^2 - 1}{x - 1}$ and $\displaystyle\lim_{x \to 1^+} \frac{x^2 - 1}{x - 1}$.
answer: Factor: $\frac{(x - 1)(x + 1)}{x - 1} = x + 1$ for $x \neq 1$. This holds on both sides, so both one-sided limits are $1 + 1 =$ **2**. A hole, unlike a jump, has matching one-sided limits.

q: Let $f(x) = x + k$ for $x < 2$, and $f(x) = x^2$ for $x \geq 2$. Find the number k that makes $\displaystyle\lim_{x \to 2} f(x)$ exist.
answer: Left limit: $2 + k$. Right limit: $2^2 = 4$. For the limit to exist they must be equal: $2 + k = 4$, so **$k = 2$**. Check: with $k = 2$, both sides head to 4.
:::
