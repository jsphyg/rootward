---
id: limit-laws
title: Limit laws
prereqs: [limits]
big: Limits can be split into pieces. The limit of a sum, product or quotient is the sum, product or quotient of the separate limits, as long as each piece has a limit and you never divide by zero.
recap: If $f(x) \to L$ and $g(x) \to M$ as $x \to a$, then $f + g \to L + M$, $f - g \to L - M$, $c \cdot f \to cL$, $f \cdot g \to LM$, and $\dfrac{f}{g} \to \dfrac{L}{M}$ when $M \neq 0$. These {{limit-laws|limit laws}} are why plugging in works for ordinary formulas.
check:
  q: As $x \to 2$, $f(x) \to 3$ and $g(x) \to -4$. What is $\displaystyle\lim_{x \to 2} \big(2f(x) - g(x)\big)$?
  options: ["10", "2", "14"]
  answer: 0
  why: Split it up. $2f(x) \to 2 \cdot 3 = 6$ and $g(x) \to -4$. So the difference heads to $6 - (-4) = 6 + 4 = 10$. Getting 2 means $6 - 4$, which forgets that taking away $-4$ adds 4. Getting 14 doubles g as well as f, but the 2 only multiplies f.
---

## Pieces you already know

Two limits are as simple as limits get:

- **A constant stays put.** $\displaystyle\lim_{x \to 3} 5 = 5$. The output is 5 whatever x does.
- **x heads where x heads.** $\displaystyle\lim_{x \to 3} x = 3$.

Now put them together. What is $\displaystyle\lim_{x \to 3} (x + 5)$? Check with inputs near 3:

| $x$ | 2.9 | 2.99 | 3.01 | 3.1 |
|---|---|---|---|---|
| $x + 5$ | 7.9 | 7.99 | 8.01 | 8.1 |

*Notice: the sum heads to 8, which is $3 + 5$. The limit of the sum is the sum of the two limits.*

## The laws

Suppose that as $x \to a$, $f(x)$ heads to L and $g(x)$ heads to M. Then:

| law | the limit of… | heads to |
|---|---|---|
| sum | $f(x) + g(x)$ | $L + M$ |
| difference | $f(x) - g(x)$ | $L - M$ |
| constant multiple | $c \cdot f(x)$ | $c \cdot L$ |
| product | $f(x) \cdot g(x)$ | $L \cdot M$ |
| quotient | $\dfrac{f(x)}{g(x)}$ | $\dfrac{L}{M}$, **only if** $M \neq 0$ |
| power | $f(x)^n$ | $L^n$ |
| root | $\sqrt{f(x)}$ | $\sqrt{L}$, when $L > 0$ |

In words: you may work out the limit of each piece separately, then combine the answers the same way the pieces were combined.^[n_two_limits]

**Why the sum law works.** Near a, $f(x)$ is within a tiny distance of L, and $g(x)$ is within a tiny distance of M. Adding them, $f(x) + g(x)$ is within those two tiny distances of $L + M$. Two tiny errors added together still make a tiny error. So the sum crowds in on $L + M$. The other laws work the same way: small errors in the pieces give small errors in the result.

## Why plugging in works

Start from the two simple limits, a constant and x itself. Every polynomial is built from those using sums, products and powers. So the laws give, for example:

$$\lim_{x \to a} (x^2 + 3x) = \left(\lim_{x \to a} x\right)^2 + 3\lim_{x \to a} x = a^2 + 3a$$

That is just plugging in a. So for any polynomial, the limit is the value. The same goes for a fraction of polynomials, as long as the bottom does not head to 0. This shortcut is called **direct substitution**, and the laws are the reason it is allowed.

## When the laws do not apply

**A bottom heading to 0.** The quotient law needs $M \neq 0$. For $\dfrac{x^2 - 4}{x - 2}$ as $x \to 2$, the bottom heads to 0, so the law says nothing. Plugging in gives $0 \div 0$. Use algebra instead, as on the [[limits|limits]] page: factor, cancel, then plug in. The answer is 4.

**A piece with no limit.** Each law assumes both pieces have limits. If one piece blows up, like $\dfrac{1}{x}$ near 0, the laws cannot be used on it.

**The most common slip.** Splitting a fraction into "top limit over bottom limit" when the bottom limit is 0. Always check the bottom first.

:::example
title: Find $\displaystyle\lim_{x \to 2} \frac{x^2 + 1}{x + 3}$, naming the law used at each step.

1. Check the bottom: $x + 3 \to 2 + 3 = 5$. That is not 0.
   why: The quotient law is only allowed when the bottom's limit is not zero.
   uses: []

2. Quotient law: the limit is $\dfrac{\lim (x^2 + 1)}{\lim (x + 3)}$.
   why: Top and bottom each have a limit, and the bottom's is not 0.
   uses: [limits]

3. Top, by the sum and power laws: $\lim (x^2 + 1) = 2^2 + 1 = 5$.
   why: $x \to 2$, so $x^2 \to 4$, and the constant 1 stays 1.
   uses: []

4. Put them together: $\dfrac{5}{5} = 1$.
   why: The limit of the quotient is the quotient of the limits.
   uses: []

5. Notice the shortcut: plugging $x = 2$ straight in gives $\dfrac{5}{5} = 1$ too.
   why: The laws are exactly what make direct substitution safe here.
   uses: []
:::

:::practice
q: Find $\displaystyle\lim_{x \to -1} \frac{2x^3 - x}{x^2 + 1}$.
answer: The bottom heads to $(-1)^2 + 1 = 2$, not 0, so the quotient law applies. Top: $2(-1)^3 - (-1) = -2 + 1 = -1$. So the limit is **$-\tfrac{1}{2}$**.
:::

:::problems
q: As $x \to a$, $f(x) \to 4$ and $g(x) \to -2$. Find $\displaystyle\lim_{x \to a} \big(f(x) + g(x)\big)$.
answer: Sum law: $4 + (-2) =$ **2**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} 3f(x)$.
answer: Constant multiple law: $3 \cdot 4 =$ **12**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} f(x)\,g(x)$.
answer: Product law: $4 \cdot (-2) =$ **$-8$**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$.
answer: The bottom heads to $-2$, which is not 0, so the quotient law applies: $\frac{4}{-2} =$ **$-2$**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} \big(f(x)^2 - g(x)\big)$.
answer: Power law: $f(x)^2 \to 4^2 = 16$. Difference law: $16 - (-2) = 16 + 2 =$ **18**.

q: Find $\displaystyle\lim_{x \to 3} (x^2 - 2x + 5)$.
answer: A polynomial, so plug in: $9 - 6 + 5 =$ **8**.

q: Find $\displaystyle\lim_{x \to -2} (x^3 + 4x)$.
answer: Plug in: $(-2)^3 + 4(-2) = -8 - 8 =$ **$-16$**.

q: Find $\displaystyle\lim_{x \to 1} \frac{3x + 1}{x + 1}$.
answer: The bottom heads to 2, not 0. So plug in: $\frac{3 + 1}{1 + 1} = \frac{4}{2} =$ **2**.

q: Find $\displaystyle\lim_{x \to 4} \sqrt{x}\,(x - 1)$.
answer: Root law: $\sqrt{x} \to \sqrt{4} = 2$. And $x - 1 \to 3$. Product law: $2 \cdot 3 =$ **6**.

q: As $x \to a$, $f(x) \to 5$ and $f(x) + g(x) \to 9$. What does $g(x)$ head to?
answer: Write $g(x) = \big(f(x) + g(x)\big) - f(x)$. Difference law: $9 - 5 =$ **4**.

q: Why can't the quotient law be used for $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$? Find the limit another way.
answer: The bottom heads to $2 - 2 = 0$, and the quotient law needs a bottom limit that is not 0. Factor instead: $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \neq 2$. That heads to **4**.

q: Find $\displaystyle\lim_{x \to 3} \frac{x + 1}{x - 3}$, or explain why it does not exist.
answer: The bottom heads to 0, but the top heads to 4, not 0. So this is not a $0 \div 0$ case that algebra can fix. Near 3 the fraction is 4 divided by a tiny number, so it blows up: about $\frac{4}{0.01} = 400$ just right of 3, and $\frac{4}{-0.01} = -400$ just left. **The limit does not exist.**

q: As $x \to 1$, $f(x) \to 2$. Find $\displaystyle\lim_{x \to 1} \frac{f(x)^2 + 3f(x)}{f(x) + 3}$.
answer: Top: $2^2 + 3 \cdot 2 = 4 + 6 = 10$. Bottom: $2 + 3 = 5$, not 0. Quotient law: $\frac{10}{5} =$ **2**.
:::
