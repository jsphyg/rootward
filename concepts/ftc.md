---
id: ftc
title: The fundamental theorem of calculus
prereqs: [definite-integral, antiderivatives]
big: Areas and slopes are two sides of one coin. The rate at which area builds up under a curve is the curve's own height. So to find an exact area, find any antiderivative F and work out F(b) − F(a).
recap: Part 1: if $A(x) = \int_a^x f(t)\,dt$ is the area so far, then $A'(x) = f(x)$. Part 2: if F is any antiderivative of f, then $\int_a^b f(x)\,dx = F(b) - F(a)$. Integrals and derivatives undo each other.
check:
  q: What is $\displaystyle\int_1^3 2x\,dx$?
  options: ["8", "4", "9"]
  answer: 0
  why: An antiderivative of $2x$ is $x^2$. So the integral is $3^2 - 1^2 = 9 - 1 = 8$. 4 treats $2x$ as if it were the constant 2: $2 \times (3 - 1)$. 9 is $F(3)$ alone, forgetting to subtract $F(1)$.
---

## Two ideas that looked unrelated

Calculus so far has two halves.

- **Derivatives** answer "how fast?": slopes, rates, speeds.
- **Definite integrals** answer "how much in total?": areas, distances, totals. Until now, finding one exactly meant a limit of Riemann sums, which is a lot of work.

The **fundamental theorem of calculus** says these are the same idea run in opposite directions. It turns the hard problem of exact area into the much easier problem of finding an [[antiderivatives|antiderivative]].^[n_ftc_history]

## The area so far

Fix a starting point a. For each x, let $A(x)$ be the signed area under f from a up to x:

$$A(x) = \int_a^x f(t)\,dt$$

(The letter t is just a placeholder for the input along the way, so that x can stand for where we stop.)

As x moves right, the area grows where f is positive and shrinks where f is negative.

:::widget area-accumulate

*Notice: the slope of the area graph at every point matches the height of f at that point.*

## Part 1: the area grows at the rate f(x)

Push x a tiny bit further, to $x + h$. The area gains one thin extra strip. That strip is about h wide and about $f(x)$ tall, so:

$$A(x + h) - A(x) \approx f(x) \cdot h$$

Divide by h:

$$\frac{A(x + h) - A(x)}{h} \approx f(x)$$

As h shrinks, the strip becomes a better and better rectangle, and the left side becomes the derivative of A. So:

$$A'(x) = f(x)$$

**In words: the rate at which area builds up is the height of the curve.** A tall curve adds area fast. A curve near zero adds almost none. A curve below the axis takes area away.

## Part 2: exact areas from antiderivatives

Part 1 says A is an antiderivative of f. Now let F be **any** antiderivative of f, perhaps one you found from a table. Two antiderivatives of the same function differ by a constant, so

$$A(x) = F(x) + C$$

At $x = a$ there is no area yet, so $A(a) = 0$. That means $F(a) + C = 0$, so $C = -F(a)$. Then at $x = b$:

$$\int_a^b f(x)\,dx = A(b) = F(b) - F(a)$$

That is the whole method. It is often written with square brackets:

$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$

**The + C does not matter here.** Any C would appear in both $F(b)$ and $F(a)$, and cancel when you subtract. So use the simplest antiderivative, with no + C.

## The payoff

The [[definite-integral|definite integral]] page could not find $\displaystyle\int_0^2 x^2\,dx$ exactly, only estimate it with a table of Riemann sums that crept towards 2.6667. Now:

$$\int_0^2 x^2\,dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3} \approx 2.6667$$

One line, and it is exact. That is the same number the thousand-rectangle sum was closing in on.

:::example
title: Find $\displaystyle\int_1^3 (3x^2 - 2x)\,dx$.

1. Find an antiderivative: $F(x) = x^3 - x^2$.
   why: Raise each power by 1 and divide by the new power. No + C needed.
   uses: [antiderivatives]

2. Check it: $F'(x) = 3x^2 - 2x$. ✓
   why: Differentiating should give back the function inside the integral.
   uses: []

3. Top limit: $F(3) = 27 - 9 = 18$.
   why: Put b into F.
   uses: []

4. Bottom limit: $F(1) = 1 - 1 = 0$.
   why: Put a into F.
   uses: []

5. Subtract: $F(3) - F(1) = 18 - 0 = 18$.
   why: Top minus bottom, in that order.
   uses: []
:::

:::practice
q: Find $\displaystyle\int_0^3 x^2\,dx$.
answer: $\left[\dfrac{x^3}{3}\right]_0^3 = \dfrac{27}{3} - 0 =$ **9**.
:::

:::problems
q: Find $\displaystyle\int_1^2 x^3\,dx$.
answer: $\left[\dfrac{x^4}{4}\right]_1^2 = \dfrac{16}{4} - \dfrac{1}{4} =$ **$\dfrac{15}{4}$**.

q: Find $\displaystyle\int_0^1 (4x^3 + 2x)\,dx$.
answer: $\big[x^4 + x^2\big]_0^1 = 2 - 0 =$ **2**.

q: Find $\displaystyle\int_1^4 \sqrt{x}\,dx$.
answer: $\left[\tfrac{2}{3}x^{3/2}\right]_1^4 = \tfrac{2}{3}(8 - 1) =$ **$\dfrac{14}{3} \approx 4.67$**.

q: Find $\displaystyle\int_1^2 \frac{1}{x^2}\,dx$.
answer: $\left[-\dfrac{1}{x}\right]_1^2 = -\dfrac{1}{2} - (-1) =$ **$\dfrac{1}{2}$**.

q: Find $\displaystyle\int_1^e \frac{1}{x}\,dx$.
answer: $\big[\ln x\big]_1^e = 1 - 0 =$ **1**.

q: Find $\displaystyle\int_0^1 e^x\,dx$.
answer: $\big[e^x\big]_0^1 = e - 1 \approx$ **1.718**.

q: Find $\displaystyle\int_0^{\pi} \sin x\,dx$.
answer: $\big[-\cos x\big]_0^{\pi} = -\cos\pi - (-\cos 0) = 1 + 1 =$ **2**. One hump of the sine wave has area exactly 2.

q: Find $\displaystyle\int_0^{\pi/2} \cos x\,dx$.
answer: $\big[\sin x\big]_0^{\pi/2} = 1 - 0 =$ **1**.

q: Find $\displaystyle\int_{-1}^{1} x^3\,dx$. Why does the answer make sense?
answer: $\left[\dfrac{x^4}{4}\right]_{-1}^{1} = \dfrac{1}{4} - \dfrac{1}{4} =$ **0**. The curve is below the axis on the left and above it on the right, by the same amount, so the signed areas cancel.

q: Find $\displaystyle\int_0^2 (x^2 - 2x)\,dx$. What does the sign tell you?
answer: $\left[\dfrac{x^3}{3} - x^2\right]_0^2 = \dfrac{8}{3} - 4 =$ **$-\dfrac{4}{3}$**. Negative: between 0 and 2 the curve is below the x-axis.

q: Find $\dfrac{d}{dx}\displaystyle\int_0^x t^2\,dt$.
answer: By Part 1, the derivative of the area so far is the height: **$x^2$**. (Check: the integral is $\tfrac{x^3}{3}$, whose derivative is $x^2$.)

q: Find $\dfrac{d}{dx}\displaystyle\int_2^x \sqrt{1 + t^3}\,dt$.
answer: **$\sqrt{1 + x^3}$**. Part 1 gives it at once, even though this antiderivative has no simple formula.

q: A car's speed is $v(t) = 3t^2$ m/s. How far does it go in the first 4 seconds?
answer: Distance is the integral of speed: $\big[t^3\big]_0^4 =$ **64 m**.

q: Water flows into a tank at $6 - t$ litres per minute, for $0 \leq t \leq 6$. How much flows in?
answer: $\left[6t - \dfrac{t^2}{2}\right]_0^6 = 36 - 18 =$ **18 litres**. (A triangle, base 6 and height 6, agrees: $\tfrac{1}{2} \cdot 6 \cdot 6 = 18$.)

q: A student works out $\displaystyle\int_0^2 x\,dx$ as $F(0) - F(2) = 0 - 2 = -2$. What went wrong?
answer: **The subtraction is backwards.** It is always top limit minus bottom limit: $F(2) - F(0) = 2 - 0 =$ **2**. The region is a triangle above the axis, so the answer must be positive.

q: Why don't we need + C when working out a definite integral?
answer: **It cancels.** $(F(b) + C) - (F(a) + C) = F(b) - F(a)$. Any constant gives the same answer.
:::
