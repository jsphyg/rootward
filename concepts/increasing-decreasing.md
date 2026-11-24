---
id: increasing-decreasing
title: Increasing and decreasing
prereqs: [critical-points]
big: Where the derivative is positive, the function is going up. Where it is negative, the function is going down. The critical points split the graph into stretches, and one test value in each stretch tells you which way that whole stretch goes.
recap: If $f'(x) > 0$ on a stretch of inputs, f is increasing there. If $f'(x) < 0$, f is decreasing. The sign of $f'$ can only change at a critical point, so test one input between each pair of critical points. If $f'$ changes from + to − at a critical point, it is a local maximum. From − to +, a local minimum. No change: neither.
check:
  q: $f'(x) = (x - 1)(x - 4)$. Where is f decreasing?
  options: ["Between 1 and 4", "Below 1 and above 4", "Everywhere below 4"]
  answer: 0
  why: Test $x = 2$: $(2 - 1)(2 - 4) = 1 \cdot (-2) = -2$, which is negative. So f decreases between 1 and 4. Test $x = 0$: $(-1)(-4) = 4$, positive. Test $x = 5$: $(4)(1) = 4$, positive. So f increases below 1 and above 4, which is the second option backwards. The third option ignores the change at $x = 1$.
---

## Up or down

A function is **increasing** on a stretch of inputs if moving right always takes you up. It is **decreasing** if moving right always takes you down.

The derivative already tells you this, point by point:

- $f'(x) > 0$: the tangent slopes up, so f is increasing there.
- $f'(x) < 0$: the tangent slopes down, so f is decreasing there.

The question this page answers is: **on which stretches** is f going up, and on which is it going down? That gives the whole shape of the graph, without plotting a single point.

## Where the sign can change

The sign of $f'$ cannot flip from positive to negative just anywhere. To get from positive to negative, it has to pass through 0, or break down altogether. Those are exactly the [[critical-points|critical points]].^[n_sign_change]

So the critical points cut the number line into stretches, and **on each stretch the sign of $f'$ stays the same**. One test input from each stretch is enough.

## A sign chart

Take $f(x) = x^3 - 3x^2 - 9x + 1$.

**Step 1: find the critical points.** $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$. So $x = -1$ and $x = 3$.

**Step 2: test one input in each stretch.**

| stretch | test input | $f'$ there | sign | f is |
|---|---|---|---|---|
| left of $-1$ | $x = -2$ | $3(-5)(-1) = 15$ | + | increasing |
| between $-1$ and 3 | $x = 0$ | $3(-3)(1) = -9$ | − | decreasing |
| right of 3 | $x = 4$ | $3(1)(5) = 15$ | + | increasing |

**Step 3: read the shape.** Up, then down, then up again.

:::widget plot
fn: x*x*x - 3*x*x - 9*x + 1
x: -3 5
y: -34 14
points: -1,6; 3,-26
labels: side
labelat: topleft
label: y = x³ − 3x² − 9x + 1
caption: Rising until x = −1, falling until x = 3, then rising again. The turning points are a peak and a valley.
:::

## The first derivative test

The sign chart also says what kind each critical point is:

- **+ then −:** the curve rises into the point and falls away from it. It is a **local maximum**, a peak.
- **− then +:** it falls in and rises out. It is a **local minimum**, a valley.
- **No change** (+ then +, or − then −): it is **neither**, just a pause, like $x^3$ at 0.

In the example, $x = -1$ goes from + to −, so it is a peak, at height $f(-1) = -1 - 3 + 9 + 1 = 6$. And $x = 3$ goes from − to +, so it is a valley, at height $f(3) = 27 - 27 - 27 + 1 = -26$.

## The method

1. Find $f'(x)$, and factor it if you can.
2. Find the critical points. Also mark any inputs where f itself is undefined, since the sign can change there too.
3. Pick one test input in each stretch between them, and find the sign of $f'$ there.
4. + means increasing, − means decreasing.
5. Read off peaks (+ to −) and valleys (− to +).

**A shortcut for the sign.** With a factored derivative, you do not need the exact value. Just count minus signs. At $x = 0$ above, $3(x - 3)(x + 1)$ is (+)(−)(+), one minus sign, so it is negative.

:::example
title: Where is $f(x) = 2x^3 + 3x^2 - 12x$ increasing and decreasing? Find its peaks and valleys.

1. Find and factor the derivative: $f'(x) = 6x^2 + 6x - 12 = 6(x^2 + x - 2) = 6(x + 2)(x - 1)$.
   why: Factored form makes the zeros and the signs easy to read.
   uses: [critical-points]

2. Critical points: $x = -2$ and $x = 1$.
   why: Where a factor is 0. A polynomial's derivative is defined everywhere, so there are no others.
   uses: [critical-points]

3. Test each stretch. At $x = -3$: $6(-1)(-4) > 0$. At $x = 0$: $6(2)(-1) < 0$. At $x = 2$: $6(4)(1) > 0$.
   why: One test input per stretch is enough, because the sign only changes at critical points.
   uses: []

4. So f is **increasing for $x < -2$**, **decreasing for $-2 < x < 1$**, and **increasing for $x > 1$**.
   why: + means increasing and − means decreasing.
   uses: []

5. At $x = -2$ the sign goes + to −: a peak, at $f(-2) = -16 + 12 + 24 = 20$. At $x = 1$ it goes − to +: a valley, at $f(1) = 2 + 3 - 12 = -7$.
   why: The first derivative test.
   uses: []
:::

:::practice
q: Where is $f(x) = x^2 - 4x$ increasing and decreasing? Does it have a peak or a valley?
answer: $f'(x) = 2x - 4$, zero at $x = 2$. At $x = 0$: $-4 < 0$. At $x = 3$: $2 > 0$. So f is **decreasing for $x < 2$ and increasing for $x > 2$**. The sign goes − to +, so there is a **valley at $x = 2$**, height $4 - 8 = -4$.
:::

:::problems
q: Where is $f(x) = -x^2 + 6x$ increasing and decreasing? Find its peak.
answer: $f'(x) = -2x + 6$, zero at $x = 3$. Positive for $x < 3$, negative for $x > 3$. So **increasing for $x < 3$, decreasing for $x > 3$**, with a **peak at $(3, 9)$**.

q: Is $f(x) = 5 - 3x$ increasing or decreasing?
answer: $f'(x) = -3$, always negative. **Decreasing everywhere.**

q: Where is $f(x) = x^3 - 12x$ increasing and decreasing? Find its peaks and valleys.
answer: $f'(x) = 3(x - 2)(x + 2)$. Signs: + for $x < -2$, − between, + for $x > 2$. **Increasing for $x < -2$ and $x > 2$, decreasing for $-2 < x < 2$.** Peak at $(-2, 16)$, valley at $(2, -16)$.

q: Where is $f(x) = x^4 - 2x^2$ increasing and decreasing?
answer: $f'(x) = 4x(x - 1)(x + 1)$, zero at $-1$, 0 and 1. Tests: $x = -2$ gives −, $x = -\tfrac{1}{2}$ gives +, $x = \tfrac{1}{2}$ gives −, $x = 2$ gives +. **Decreasing for $x < -1$ and $0 < x < 1$. Increasing for $-1 < x < 0$ and $x > 1$.** Valleys at $(-1, -1)$ and $(1, -1)$, a peak at $(0, 0)$.

q: Show that $f(x) = x^3$ is increasing everywhere, even though $f'(0) = 0$.
answer: $f'(x) = 3x^2$ is positive on both sides of 0. The sign goes + to +, so **x = 0 is neither a peak nor a valley**. The curve rises the whole way, pausing for an instant at 0.

q: Show that $f(x) = x^3 - 3x^2 + 3x$ never decreases.
answer: $f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2$. A square is never negative, so **$f'(x) \geq 0$ everywhere**. The only critical point, $x = 1$, is a pause, not a peak.

q: $f'(x) = (x - 2)^2(x + 1)$. Which critical points are peaks, valleys, or neither?
answer: $(x - 2)^2$ is never negative, so the sign of $f'$ is the sign of $x + 1$: − for $x < -1$, + for $x > -1$. So **$x = -1$ is a valley** (− to +), and **$x = 2$ is neither** (+ to +).

q: Where is $f(x) = x^4 - 4x^3$ increasing and decreasing?
answer: $f'(x) = 4x^2(x - 3)$. $4x^2$ is never negative, so the sign is the sign of $x - 3$. **Decreasing for $x < 3$, increasing for $x > 3$.** Valley at $(3, -27)$. At $x = 0$ the curve pauses but keeps falling.

q: Where is $f(x) = x + \dfrac{1}{x}$ increasing and decreasing? (Careful: f is not defined at 0.)
answer: $f'(x) = 1 - \dfrac{1}{x^2} = \dfrac{x^2 - 1}{x^2}$. The bottom is positive, so the sign is the sign of $x^2 - 1$. Mark $-1$, 0 and 1. **Increasing for $x < -1$ and $x > 1$. Decreasing for $-1 < x < 0$ and $0 < x < 1$.** Peak at $(-1, -2)$, valley at $(1, 2)$.

q: Find where $f(x) = x^3 + 3x^2 - 9x$ has its peak and valley.
answer: $f'(x) = 3x^2 + 6x - 9 = 3(x + 3)(x - 1)$. Signs: + then − then +. **Peak at $x = -3$**, height $-27 + 27 + 27 = 27$. **Valley at $x = 1$**, height $1 + 3 - 9 = -5$.

q: A company's profit is $P(x) = -x^2 + 40x - 300$ thousand dollars when it makes x thousand items. For which x does making more raise the profit?
answer: $P'(x) = -2x + 40$, positive when $x < 20$. So making more helps **up to 20 thousand items**. After that, profit falls. The best is at $x = 20$: $P(20) = -400 + 800 - 300 = 100$ thousand dollars.

q: $f'(x) > 0$ for every x between 1 and 5, and $f(1) = 3$. Is $f(4)$ bigger or smaller than 3?
answer: **Bigger.** f is increasing on that whole stretch, so moving right from 1 to 4 takes it up.

q: Why is one test input enough for each stretch between critical points?
answer: To change sign, $f'$ would have to pass through 0 or stop existing. **Both of those happen only at critical points** (or where f itself is undefined). Between them, the sign cannot change, so one input shows the sign for the whole stretch.
:::
