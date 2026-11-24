---
id: critical-points
title: Critical points
prereqs: [derivative-function, power-rule, sum-constant-rules]
big: At the top of a hill or the bottom of a valley, a smooth curve is flat for an instant, so its slope is 0. The points where the slope is 0, or where there is no slope at all, are called critical points. They are the only places a peak or a valley can be.
recap: A critical point of f is an input c, where f is defined, with $f'(c) = 0$ or $f'(c)$ undefined. To find them, take the derivative, set it equal to 0, and solve. Then check for places where the derivative does not exist. Every peak and valley is at a critical point, but not every critical point is a peak or a valley.
check:
  q: Where is the critical point of $f(x) = x^2 - 4x$?
  options: ["$x = 2$", "$x = 0$ and $x = 4$", "$x = -2$"]
  answer: 0
  why: $f'(x) = 2x - 4$. Set it to 0: $2x = 4$, so $x = 2$. That is the bottom of the parabola. $x = 0$ and $x = 4$ are where f itself is 0, its x-intercepts, not where its slope is 0. $x = -2$ has a sign slip.
---

## Flat at the top

Walk over the top of a smooth hill. On the way up the ground slopes up. On the way down it slopes down. Right at the top, for one instant, it is level.

Here is $f(x) = x^3 - 3x$:

:::widget plot
fn: x*x*x - 3*x
x: -2.4 2.4
y: -3 3
points: -1,2; 1,-2
label: y = x³ − 3x
caption: A peak at (−1, 2) and a valley at (1, −2). At both, the tangent line is flat.
:::

Its [[derivative-function|derivative]] is $f'(x) = 3x^2 - 3$. Where is that 0?

$$3x^2 - 3 = 0 \quad\Rightarrow\quad x^2 = 1 \quad\Rightarrow\quad x = 1 \text{ or } x = -1$$

*Notice: those are exactly the peak and the valley. Solving $f'(x) = 0$ found them without drawing anything.*

**Why it works.** Just left of a peak the curve is rising, so its slope is positive. Just right, it is falling, so its slope is negative. A smooth slope cannot jump from positive to negative without passing through 0. At a valley it is the other way round.^[n_fermat]

## Local peaks and valleys

The peak at $x = -1$ is not the highest point of the whole curve. Further right, the curve climbs far higher. It is only the highest point **near** $x = -1$.

- A **local maximum** is a point higher than everything near it: the top of a hill.
- A **local minimum** is a point lower than everything near it: the bottom of a valley.

"Local" means "compared with its neighbours". Finding the very highest or lowest value overall is a later page's job.

## The definition

A **critical point** of f is an input c, where f is defined, such that:

- $f'(c) = 0$: the curve is flat there, **or**
- $f'(c)$ does not exist: the curve has a sharp corner or a vertical tangent there.

**Why include "does not exist"?** Take $f(x) = |x|$, a V shape. Its lowest point is at $x = 0$. But it has a sharp corner there, so it has no slope at that point at all. The slope is $-1$ on the left and $+1$ on the right. $f'(x) = 0$ has no solutions, yet there is clearly a valley. So corners have to be checked too.

## A flat point that is not a peak

Not every critical point is a peak or a valley. Look at $f(x) = x^3$:

:::widget plot
fn: x*x*x
x: -1.8 1.8
y: -3 3
points: 0,0
label: y = x³
caption: The curve flattens out at the origin, then keeps climbing. It is a shelf, not a peak or a valley.
:::

$f'(x) = 3x^2$, which is 0 at $x = 0$. So 0 is a critical point. But the curve rises before it and rises after it. It just pauses.

So critical points are the **candidates**. Every local peak and valley is at one, but each candidate still has to be checked. The next page gives a quick way to check.

## How to find them

1. Find $f'(x)$.
2. Set $f'(x) = 0$ and solve. Factoring usually does it.
3. Look for inputs where $f'(x)$ does not exist, such as where it would divide by 0, but f itself is defined.
4. The critical points are all the answers from steps 2 and 3.

:::example
title: Find the critical points of $f(x) = 2x^3 - 3x^2 - 12x$.

1. Take the derivative: $f'(x) = 6x^2 - 6x - 12$.
   why: The power rule on each term.
   uses: [power-rule, sum-constant-rules]

2. Set it to 0 and pull out the common factor: $6(x^2 - x - 2) = 0$.
   why: Every term divides by 6, which makes the bracket easier to factor.
   uses: [factoring]

3. Factor: $6(x - 2)(x + 1) = 0$, so $x = 2$ or $x = -1$.
   why: Two numbers that multiply to $-2$ and add to $-1$ are $-2$ and 1. A product is 0 only when one factor is 0.
   uses: [factoring]

4. Check for places where $f'$ does not exist. $f'$ is a polynomial, defined everywhere, so there are none.
   why: Corners and vertical tangents only appear where the derivative breaks down.
   uses: []

5. Work out the heights: $f(-1) = -2 - 3 + 12 = 7$ and $f(2) = 16 - 12 - 24 = -20$. So the critical points are at $(-1, 7)$ and $(2, -20)$.
   why: The height tells you where on the graph each one sits.
   uses: []
:::

:::practice
q: Find the critical points of $f(x) = x^3 - 12x$.
answer: $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$. So **$x = 2$ and $x = -2$**.
:::

:::problems
q: Find the critical point of $f(x) = x^2 - 6x$.
answer: $f'(x) = 2x - 6 = 0$, so **$x = 3$**.

q: Find the critical point of $f(x) = -x^2 + 4x + 1$. Is it a peak or a valley, and how high is it?
answer: $f'(x) = -2x + 4 = 0$, so **$x = 2$**. $f(2) = -4 + 8 + 1 = 5$. The parabola opens downward (the $x^2$ has a minus sign), so it is a **peak at height 5**.

q: Find the critical points of $f(x) = x^4 - 2x^2$.
answer: $f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$. So **$x = 0$, $x = 1$ and $x = -1$**.

q: Find the critical points of $f(x) = x^3 - 6x^2 + 9x$.
answer: $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$. So **$x = 1$ and $x = 3$**.

q: $f'(x) = (x - 1)(x + 4)$. Where are the critical points of f?
answer: Where a factor is 0: **$x = 1$ and $x = -4$**.

q: Does $f(x) = 5x + 2$ have any critical points?
answer: **No.** $f'(x) = 5$, which is never 0 and always exists. A straight line with nonzero slope has no peaks or valleys.

q: Find the critical point of $f(x) = x^3$. Is it a peak, a valley, or neither?
answer: $f'(x) = 3x^2 = 0$ at **$x = 0$**. It is **neither**: the curve rises on both sides, and only flattens for an instant.

q: Find the critical point of $f(x) = x^3 - 3x^2 + 3x$, and say what kind it is.
answer: $f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2$, which is 0 only at **$x = 1$**. Since $(x - 1)^2$ is never negative, the slope is never negative: the curve never falls. So it is a **shelf, neither a peak nor a valley**.

q: Find the critical points of $f(x) = x^4 - 4x^3$.
answer: $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. So **$x = 0$ and $x = 3$**. (At 0 the curve only pauses, while $x = 3$ is a valley, at $f(3) = 81 - 108 = -27$.)

q: Find the critical points of $f(x) = x + \dfrac{1}{x}$.
answer: $f'(x) = 1 - x^{-2} = 1 - \dfrac{1}{x^2}$. This is 0 when $x^2 = 1$: **$x = 1$ and $x = -1$**. At $x = 0$ the derivative does not exist, but neither does f, so 0 is **not** a critical point.

q: Explain why $x = 0$ is a critical point of $f(x) = |x|$.
answer: f is defined at 0, but it has a sharp corner there: slope $-1$ on the left, $+1$ on the right. **The derivative does not exist at 0**, and that makes it a critical point. It is also the lowest point of the V.

q: Find the critical point of $f(x) = x^{2/3}$.
answer: $f'(x) = \tfrac{2}{3}x^{-1/3} = \dfrac{2}{3\sqrt[3]{x}}$. It is never 0, but it divides by 0 at $x = 0$, where f is defined ($f(0) = 0$). So **$x = 0$** is a critical point. The graph has a sharp point there, called a cusp.

q: A ball's height is $h(t) = 20t - 5t^2$ metres after t seconds. When is it at its highest, and how high is that?
answer: $h'(t) = 20 - 10t = 0$ at **$t = 2$ seconds**. The height then is $40 - 20 =$ **20 metres**.

q: A student says $f(x) = x^2 - 9$ has critical points at $x = 3$ and $x = -3$. What did they mix up?
answer: They solved $f(x) = 0$, which finds where the curve crosses the x-axis. Critical points come from **$f'(x) = 0$**: $2x = 0$, so the only critical point is **$x = 0$**, the bottom of the parabola.
:::
