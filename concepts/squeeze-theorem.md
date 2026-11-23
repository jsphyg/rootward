---
id: squeeze-theorem
title: The squeeze theorem
prereqs: [limit-laws]
big: If a function is trapped between two others, and those two head to the same limit, the trapped function must head there too.
recap: If $g(x) \leq f(x) \leq h(x)$ for x near a, and both $g(x)$ and $h(x)$ head to L as $x \to a$, then $f(x)$ heads to L as well. It finds limits of functions too messy to handle directly.
check:
  q: For x near 0, $1 - x^2 \leq f(x) \leq 1 + x^2$. What is $\displaystyle\lim_{x \to 0} f(x)$?
  options: ["1", "0", "2", "You cannot tell without a formula for f"]
  answer: 0
  why: The lower bound $1 - x^2$ heads to 1, and the upper bound $1 + x^2$ heads to 1. f is stuck between them, so it heads to 1 too. You do not need f's formula: that is the whole point of the squeeze. 0 is where $x^2$ heads, not the bounds. 2 adds the two bounds.
---

## Trapped in the middle

Suppose we know almost nothing about a function f. We only know that near 0 it stays between two simpler curves:

$$1 - x^2 \leq f(x) \leq 1 + x^2$$

Check how much room f has at a few inputs:

| $x$ | 0.5 | 0.1 | 0.01 |
|---|---|---|---|
| lower: $1 - x^2$ | 0.75 | 0.99 | 0.9999 |
| upper: $1 + x^2$ | 1.25 | 1.01 | 1.0001 |

*Notice: the gap between the two bounds shrinks to nothing. Whatever f does, it is squeezed into a smaller and smaller space around 1.*

:::widget squeeze

So f must head to 1. This is the **{{squeeze|squeeze theorem}}**.^[n_sandwich]

## The theorem

If, for every x near a (except perhaps at a itself),

$$g(x) \leq f(x) \leq h(x)$$

and

$$\lim_{x \to a} g(x) = L \quad \text{and} \quad \lim_{x \to a} h(x) = L$$

then

$$\lim_{x \to a} f(x) = L$$

**Why it works.** Close to a, g is within a tiny distance of L, and so is h. f sits between g and h, so it cannot be further from L than they are. As the bounds close in on L, f is dragged along with them.

**Both bounds must head to the same limit.** If the lower bound heads to 1 and the upper bound to 3, f could end up anywhere between, or have no limit at all. Then the theorem says nothing.

## The classic trick: a wobble times something small

Here is where the squeeze really pays off. Suppose $w(x)$ is a wild function that keeps jumping around near 0, and has no limit there. All we know is that it stays between $-1$ and 1.

What is $\displaystyle\lim_{x \to 0} x^2 \, w(x)$?

The [[limit-laws|product law]] cannot help, because $w(x)$ has no limit. But we can trap the product. Multiply each part of $-1 \leq w(x) \leq 1$ by $x^2$:

$$-x^2 \leq x^2 \, w(x) \leq x^2$$

Both bounds head to 0 as $x \to 0$. So $x^2 \, w(x) \to 0$.

**Why multiplying is safe.** Multiplying both sides of an inequality by a positive number keeps it the right way round. $x^2$ is never negative, so the inequality survives. (Multiplying by a negative number would flip it.)

## How to use it

1. Find a lower bound and an upper bound for the messy function, for x near a.
2. Find the limit of each bound. These are usually easy.
3. If both limits are the same number L, the messy function's limit is L.

## Why calculus cares

The squeeze theorem proves limits that nothing else can reach. The most famous is the limit that gives the slope of the sine curve. It is exactly the "wobble times something small" pattern, and the derivative of sine depends on it.^[n_sinx]

:::example
title: For x near 2, $4x - 4 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 2} f(x)$.

1. Limit of the lower bound: $4x - 4 \to 4 \cdot 2 - 4 = 4$.
   why: A polynomial, so plug in.
   uses: [limit-laws]

2. Limit of the upper bound: $x^2 \to 2^2 = 4$.
   why: Also a polynomial.
   uses: [limit-laws]

3. Both bounds head to 4, so by the squeeze theorem, $\displaystyle\lim_{x \to 2} f(x) = 4$.
   why: f is trapped between two functions that close in on the same number.
   uses: []

4. Check the bounds really are in order: $x^2 - (4x - 4) = x^2 - 4x + 4 = (x - 2)^2$, which is never negative. So $4x - 4 \leq x^2$ for every x.
   why: The squeeze only works if the lower bound truly stays below the upper one.
   uses: [factoring]
:::

:::practice
q: For x near 0, $2 - x^2 \leq f(x) \leq 2 + 3x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$.
answer: Lower bound: $2 - 0 = 2$. Upper bound: $2 + 0 = 2$. Both head to 2, so by the squeeze theorem **$\displaystyle\lim_{x \to 0} f(x) = 2$**.
:::

:::problems
q: For x near 0, $3 - x^2 \leq f(x) \leq 3 + x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$.
answer: Both bounds head to $3 - 0 = 3$ and $3 + 0 = 3$. Squeeze: **3**.

q: For x near 0, $-x^2 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$.
answer: Both bounds head to 0. Squeeze: **0**.

q: For x near 0, $1 \leq f(x) \leq 3$. Can the squeeze theorem find $\displaystyle\lim_{x \to 0} f(x)$?
answer: **No.** The bounds head to 1 and 3, which are different. f could head to anything from 1 to 3, or wobble with no limit at all.

q: For x near 1, $2x - 1 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 1} f(x)$, and check the bounds are in the right order.
answer: Lower: $2 - 1 = 1$. Upper: $1^2 = 1$. Squeeze: **1**. Order check: $x^2 - (2x - 1) = (x - 1)^2 \geq 0$, so the lower bound is never above the upper one.

q: For x near 3, $6x - 9 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 3} f(x)$.
answer: Lower: $18 - 9 = 9$. Upper: $3^2 = 9$. Squeeze: **9**. (The order holds because $x^2 - 6x + 9 = (x - 3)^2 \geq 0$.)

q: $w(x)$ always stays between $-1$ and 1. Find $\displaystyle\lim_{x \to 0} x^2 \, w(x)$.
answer: Multiply $-1 \leq w(x) \leq 1$ by $x^2 \geq 0$: $-x^2 \leq x^2 w(x) \leq x^2$. Both bounds head to 0, so the limit is **0**.

q: $w(x)$ always stays between $-2$ and 2. Find $\displaystyle\lim_{x \to 0} x^4 \, w(x)$.
answer: Multiply by $x^4 \geq 0$: $-2x^4 \leq x^4 w(x) \leq 2x^4$. Both bounds head to 0, so the limit is **0**.

q: Why can't the product law be used on $x^2 \, w(x)$ when w has no limit at 0?
answer: The product law says "if **both** pieces have limits, the product heads to the product of the limits". Here $w(x)$ has no limit, so the law's condition fails. The squeeze is needed instead.

q: For x near 0, $0 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$ and $\displaystyle\lim_{x \to 0} \big(f(x) + 5\big)$.
answer: Bounds: 0 and $x^2 \to 0$, so $f(x) \to$ **0**. Then by the sum law, $f(x) + 5 \to 0 + 5 =$ **5**.

q: $w(x)$ always stays between $-1$ and 1. Find $\displaystyle\lim_{x \to \infty} \frac{w(x)}{x}$.
answer: For positive x, divide $-1 \leq w(x) \leq 1$ by x: $-\frac{1}{x} \leq \frac{w(x)}{x} \leq \frac{1}{x}$. As x grows without end, both bounds shrink to 0. Squeeze: **0**.

q: A function w stays between $-1$ and 1. Does $\displaystyle\lim_{x \to 0} \big(x + 2\big) w(x)$ have to exist?
answer: **No.** Near 0, $x + 2$ is close to 2, not 0. The bounds $-(x + 2)$ and $x + 2$ head to $-2$ and 2, which differ. If w keeps jumping between $-1$ and 1, the product keeps jumping between about $-2$ and 2, with no limit.
:::
