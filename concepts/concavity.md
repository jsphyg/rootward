---
id: concavity
title: Concavity and inflection points
prereqs: [higher-derivatives, increasing-decreasing]
big: The second derivative says which way a curve bends. Bending up like a cup is called concave up, and bending down like a cap is concave down. The point where the bend switches is an inflection point. The bend also gives a quick test for peaks and valleys.
recap: If $f''(x) > 0$, f is concave up there (a cup). If $f''(x) < 0$, it is concave down (a cap). An inflection point is where the concavity changes. Find candidates where $f'' = 0$ or does not exist, then check that the sign really changes. Second derivative test: if $f'(c) = 0$ and $f''(c) > 0$, c is a local minimum. If $f''(c) < 0$, it is a local maximum. If $f''(c) = 0$, the test says nothing.
check:
  q: $f''(x) = 6x - 12$. Where is f concave up?
  options: ["For $x > 2$", "For $x < 2$", "Only at $x = 2$"]
  answer: 0
  why: Concave up means $f''(x) > 0$. $6x - 12 > 0$ when $x > 2$. For $x < 2$, $f''$ is negative, so f is concave down there. At $x = 2$ itself, $f'' = 0$, and the bend is switching: that is the inflection point, not a stretch of either kind.
---

## Two ways to rise

Two curves can both go up and still look very different.

- One rises **faster and faster**, like a debt with interest piling up. It bends upward, like a cup.
- One rises **slower and slower**, like a learner's skill that improves quickly at first, then levels off. It bends downward, like a cap.

The first derivative says both are increasing. The second derivative tells them apart. The [[higher-derivatives|second derivatives]] page showed that $f''$ measures how fast the slope is changing:

- $f''(x) > 0$: the slope is increasing. The curve is **concave up**, a cup. ∪
- $f''(x) < 0$: the slope is decreasing. The curve is **concave down**, a cap. ∩

**Another way to see it.** A concave up curve sits above its tangent lines. A concave down curve sits below them.

## Inflection points

An **inflection point** is a point on the curve where the concavity changes, from cup to cap or from cap to cup. It is where the curve is steepest, or least steep, compared with its neighbours.

Since $f''$ changes sign there, the candidates are where $f''(x) = 0$ or $f''(x)$ does not exist. But, just as with critical points, a candidate must be checked: **the sign of $f''$ must actually change**.

**A candidate that fails.** $f(x) = x^4$ has $f''(x) = 12x^2$, which is 0 at $x = 0$. But $12x^2$ is positive on both sides. The curve is a cup the whole way, so 0 is not an inflection point.

## A full picture

Take $f(x) = x^3 - 6x^2 + 9x + 1$.

- $f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$. Critical points at 1 and 3.
- $f''(x) = 6x - 12$. It is 0 at $x = 2$, negative to the left and positive to the right.

So f is concave down for $x < 2$ and concave up for $x > 2$, with an inflection point at $(2, 3)$.

:::widget plot
fn: x*x*x - 6*x*x + 9*x + 1
x: -0.6 4.4
y: -2 7
points: 1,5; 2,3; 3,1
label: y = x³ − 6x² + 9x + 1
caption: A cap on the left, a cup on the right. The bend switches at the middle point, (2, 3), the inflection point. That is where the curve falls most steeply.
:::

## The second derivative test

At a critical point where the curve is flat, the bend tells you what kind of point it is:

- **Flat and concave up** ($f'(c) = 0$, $f''(c) > 0$): the bottom of a cup. A **local minimum**.
- **Flat and concave down** ($f'(c) = 0$, $f''(c) < 0$): the top of a cap. A **local maximum**.
- **Flat with $f''(c) = 0$**: the test **says nothing**. It could be a peak, a valley, or neither. Use the sign chart from the [[increasing-decreasing|increasing and decreasing]] page instead.

In the example: $f''(1) = -6$, so $x = 1$ is a peak, at $f(1) = 5$. And $f''(3) = 6$, so $x = 3$ is a valley, at $f(3) = 1$. That matches the picture.

**Why the third case gives no answer.** $x^4$, $-x^4$ and $x^3$ all have $f'(0) = 0$ and $f''(0) = 0$. But the first has a valley at 0, the second a peak, and the third neither.

:::example
title: Find where $f(x) = x^4 - 6x^2$ is concave up and concave down, and find its inflection points.

1. Take two derivatives: $f'(x) = 4x^3 - 12x$, then $f''(x) = 12x^2 - 12$.
   why: Concavity comes from the second derivative.
   uses: [higher-derivatives]

2. Factor: $f''(x) = 12(x^2 - 1) = 12(x - 1)(x + 1)$. It is 0 at $x = -1$ and $x = 1$.
   why: These are the candidates for inflection points.
   uses: [factoring]

3. Test each stretch. At $x = -2$: $12(-3)(-1) > 0$. At $x = 0$: $12(-1)(1) < 0$. At $x = 2$: $12(1)(3) > 0$.
   why: The sign of $f''$ only changes at its zeros, so one test input per stretch is enough.
   uses: [increasing-decreasing]

4. So f is **concave up for $x < -1$ and $x > 1$**, and **concave down for $-1 < x < 1$**.
   why: + means a cup, − means a cap.
   uses: []

5. The sign changes at both candidates, so both are inflection points. Heights: $f(\pm 1) = 1 - 6 = -5$. The inflection points are $(-1, -5)$ and $(1, -5)$.
   why: An inflection point is a point on the curve, so it needs its height too.
   uses: []
:::

:::practice
q: Where is $f(x) = x^3 - 3x^2$ concave up and concave down? Where is its inflection point?
answer: $f''(x) = 6x - 6$, zero at $x = 1$. Negative for $x < 1$, positive for $x > 1$. So **concave down for $x < 1$, concave up for $x > 1$**, with an inflection point at **$(1, -2)$**.
:::

:::problems
q: Where is $f(x) = x^3$ concave up and concave down? Find its inflection point.
answer: $f''(x) = 6x$. **Concave down for $x < 0$, concave up for $x > 0$.** Inflection point at **$(0, 0)$**.

q: Is $f(x) = x^2 + 3x$ concave up or down? Does it have an inflection point?
answer: $f''(x) = 2 > 0$ everywhere. **Concave up everywhere**, so **no inflection point**.

q: Is $f(x) = \sqrt{x}$ concave up or concave down, for $x > 0$?
answer: $f'(x) = \tfrac{1}{2}x^{-1/2}$ and $f''(x) = -\tfrac{1}{4}x^{-3/2}$, which is negative for every $x > 0$. **Concave down**: it rises, but more and more slowly.

q: Explain why $f(x) = x^4$ has no inflection point, even though $f''(0) = 0$.
answer: $f''(x) = 12x^2$ is **positive on both sides of 0**. The concavity never changes. The curve is a cup the whole way, just very flat at the bottom.

q: Find the inflection point of $f(x) = 2x^3 + 3x^2 - 12x$.
answer: $f''(x) = 12x + 6$, zero at $x = -\tfrac{1}{2}$, and it changes sign there. $f(-\tfrac{1}{2}) = -\tfrac{1}{4} + \tfrac{3}{4} + 6 = 6.5$. Inflection point at **$(-\tfrac{1}{2}, 6.5)$**.

q: Use the second derivative test on the critical points of $f(x) = x^3 - 12x$.
answer: $f'(x) = 3x^2 - 12$, zero at $x = \pm 2$. $f''(x) = 6x$. $f''(2) = 12 > 0$: **local minimum at $(2, -16)$**. $f''(-2) = -12 < 0$: **local maximum at $(-2, 16)$**.

q: Use the second derivative test on $f(x) = -x^2 + 4x$.
answer: $f'(x) = -2x + 4$, zero at $x = 2$. $f''(x) = -2 < 0$, so it is a **local maximum**, at $f(2) = 4$.

q: For $f(x) = x^5 - 5x$, find the critical points, classify them with the second derivative test, and find the inflection point.
answer: $f'(x) = 5x^4 - 5 = 0$ when $x^4 = 1$, so $x = \pm 1$. $f''(x) = 20x^3$. $f''(1) = 20 > 0$: **local minimum at $(1, -4)$**. $f''(-1) = -20 < 0$: **local maximum at $(-1, 4)$**. $f''$ changes sign at 0, so the **inflection point is $(0, 0)$**.

q: $f(x) = x^4$ has $f'(0) = 0$ and $f''(0) = 0$. What does the second derivative test say? What is really happening at 0?
answer: **The test says nothing** when $f''(c) = 0$. Using the sign of $f'(x) = 4x^3$ instead: negative left of 0, positive right. So 0 is a **local minimum**.

q: Where is $f(x) = \dfrac{1}{x}$ concave up and concave down? Does it have an inflection point?
answer: $f(x) = x^{-1}$, $f'(x) = -x^{-2}$, $f''(x) = 2x^{-3} = \dfrac{2}{x^3}$. **Concave down for $x < 0$, concave up for $x > 0$.** The concavity changes across 0, but f is not defined at 0, so there is **no inflection point**.

q: $f''(x) = (x - 2)(x + 3)$. Where are the inflection points?
answer: $f''$ changes sign at each of its single factors' zeros: **$x = 2$ and $x = -3$**.

q: $f''(x) = (x - 1)^2$. Does f have an inflection point at $x = 1$?
answer: **No.** $(x - 1)^2$ is never negative, so $f''$ does not change sign. f is concave up on both sides.

q: A company's sales are rising, but the graph of sales against time is concave down. What does that mean in plain words?
answer: **Sales are still growing, but the growth is slowing down.** Each month adds less than the month before.

q: A population grows along a curve that is concave up at first, then concave down. What does the inflection point mean here?
answer: It is the moment of **fastest growth**. Before it, the growth rate is speeding up. After it, the population still grows, but more and more slowly.
:::
