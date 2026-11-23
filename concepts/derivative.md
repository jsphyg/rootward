---
id: derivative
title: The derivative
prereqs: [slope, limits]
big: The derivative is the slope of a curve at one exact point. It says how fast the output is changing right there.
recap: The {{derivative|derivative}} $f'(a)$ is the slope of the curve at $x = a$. Take the slope between two points, then let the second point slide onto the first: $f'(a) = \displaystyle\lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$.
check:
  q: For a function f, what does $f'(a)$ tell you?
  options: ["The slope of the curve at $x = a$", "The height of the curve at $x = a$", "The average slope between $x = 0$ and $x = a$", "The area under the curve up to $x = a$"]
  answer: 0
  why: $f'(a)$ is how steep the curve is at the single point $x = a$. The height there is $f(a)$, without the dash. An average slope uses two points far apart, but the derivative shrinks the gap to nothing. Area under a curve is a different tool, the integral.
---

## A curve has no single slope

A straight line has one [[slope|slope]] everywhere. A curve does not. Take $f(x) = x^2$ and measure the slope between neighbouring whole numbers:

| from → to | rise | run | slope |
|---|---|---|---|
| $x = 0$ to $x = 1$ | $1 - 0 = 1$ | 1 | 1 |
| $x = 1$ to $x = 2$ | $4 - 1 = 3$ | 1 | 3 |
| $x = 2$ to $x = 3$ | $9 - 4 = 5$ | 1 | 5 |

*Notice: the curve gets steeper as you go right. So "the slope of $x^2$" has no single answer. It depends where you are.*

That raises a real question. How steep is the curve **exactly at** $x = 1$? Slope needs two points, and here we have only one.

## The trick: bring the second point closer

Pick a second point a small step h to the right of $x = 1$.^[n_h] The straight line through the two points is a {{secant|secant line}}. Its slope is ordinary rise over run:

$$\frac{\text{rise}}{\text{run}} = \frac{f(1 + h) - f(1)}{h} = \frac{(1 + h)^2 - 1}{h}$$

Now shrink h and watch:

| step h | 1 | 0.5 | 0.1 | 0.01 | 0.001 |
|---|---|---|---|---|---|
| secant slope | 3 | 2.5 | 2.1 | 2.01 | 2.001 |

*Notice: as the second point slides toward the first, the slopes crowd in on 2.*

:::widget derivative

We cannot set h to exactly 0. Then the run is 0 and the slope is $0 \div 0$. But this is exactly the job [[limits|limits]] do. They tell us where the slope is heading as h gets close to 0. Here it heads to 2. So the slope of $x^2$ at $x = 1$ is **2**.

As h shrinks, the secant line settles into one line. It touches the curve at $x = 1$ and points the same way the curve does there. That is the {{tangent|tangent line}}. The derivative is its slope.

## The definition

Do the same thing at any point $x = a$, for any function f:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

Read it piece by piece:

- $f(a + h) - f(a)$ is the **rise**: the change in height between the two points.
- $h$ is the **run**: the step across.
- $\lim_{h \to 0}$ slides the second point onto the first.

So it is the slope formula, rise ÷ run, with a limit that shrinks the run to zero. $f'(a)$ is read "f prime of a". The result is the {{derivative|derivative}} of f at a.^[n_notation]

**Why it works.** Each secant slope is an honest average slope between two points. As the points get closer, the average is taken over a smaller and smaller piece of the curve. In the limit, it stops being an average over a stretch and becomes the slope at one point.

## What the number means

A slope is a [[slope|rate of change]]. So the derivative is the rate of change **at one moment**.

If $f(t)$ is how far a car has travelled after t hours, the slope between two times is the average speed over that stretch. The derivative $f'(t)$ is the speed at the instant t: what the speedometer shows.

## The slope at every point at once

Use the definition at a general x instead of at 1. For $f(x) = x^2$:

$$\frac{(x + h)^2 - x^2}{h} = \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

As h heads to 0, this heads to $2x$. So $f'(x) = 2x$. That is one formula for the slope at **every** point. At $x = 1$ it gives 2, matching the table. At $x = 3$ it gives 6.

Working through the limit each time is slow. Later pages give shortcuts, starting with the [[power-rule|power rule]].

:::example
title: Use the definition to find the slope of $f(x) = x^2 + 3x$ at $x = 2$.

1. Find $f(2 + h)$ by putting $2 + h$ in for x: $(2 + h)^2 + 3(2 + h)$.
   why: The input is the whole expression $2 + h$, so it goes in brackets everywhere x was.
   uses: [functions]

2. Expand: $(2 + h)^2 = 4 + 4h + h^2$ and $3(2 + h) = 6 + 3h$. So $f(2 + h) = 10 + 7h + h^2$.
   why: Expanding lets the plain numbers cancel in the next step.
   uses: [expanding]

3. Find $f(2) = 4 + 6 = 10$. The rise is $f(2 + h) - f(2) = 7h + h^2$.
   why: Rise is the change in height between the two points.
   uses: [slope]

4. Divide by the run h: $\dfrac{7h + h^2}{h} = 7 + h$.
   why: Every term on top has an h, so one h cancels. This is allowed because h is never exactly 0.
   uses: []

5. Let $h \to 0$: $7 + h$ heads to 7. So $f'(2) = 7$.
   why: The limit slides the second point onto the first.
   uses: [limits]
:::

:::practice
q: Use the definition to find the slope of $f(x) = 3x^2$ at $x = 1$.
answer: $f(1 + h) = 3(1 + h)^2 = 3 + 6h + 3h^2$, and $f(1) = 3$. Rise: $6h + 3h^2$. Divide by h: $6 + 3h$. As $h \to 0$ this heads to **6**.
:::

:::problems
q: For $f(x) = x^2$, find the slope of the secant line from $x = 1$ to $x = 1.1$.
answer: Rise $= 1.21 - 1 = 0.21$. Run $= 0.1$. Slope $=$ **2.1**, close to the true slope 2.

q: Use the definition to find the slope of $f(x) = 5x + 2$ at any x.
answer: Rise: $5(x + h) + 2 - (5x + 2) = 5h$. Divide by h: 5. No h is left, so **$f'(x) = 5$** everywhere. A line's derivative is its slope.

q: Use the definition to find the derivative of $f(x) = 7$.
answer: $f(x + h) - f(x) = 7 - 7 = 0$. Divide by h: 0. **$f'(x) = 0$**. A flat line has slope 0.

q: Use the definition to find the slope of $f(x) = x^2$ at $x = 3$.
answer: $f(3 + h) = 9 + 6h + h^2$. Rise: $6h + h^2$. Divide by h: $6 + h$. As $h \to 0$: **6**.

q: Use the definition to find the slope of $f(x) = x^2$ at $x = -2$.
answer: $f(-2 + h) = 4 - 4h + h^2$, and $f(-2) = 4$. Rise: $-4h + h^2$. Divide by h: $-4 + h$. As $h \to 0$: **$-4$**. The curve is going downhill there.

q: Use the definition to find the slope of $f(x) = 2x^2$ at $x = 1$.
answer: $f(1 + h) = 2(1 + 2h + h^2) = 2 + 4h + 2h^2$, and $f(1) = 2$. Rise: $4h + 2h^2$. Divide by h: $4 + 2h$. As $h \to 0$: **4**.

q: Use the definition to find the slope of $f(x) = x^2 - 4x$ at $x = 1$.
answer: $f(1 + h) = (1 + h)^2 - 4(1 + h) = 1 + 2h + h^2 - 4 - 4h = -3 - 2h + h^2$. $f(1) = -3$. Rise: $-2h + h^2$. Divide by h: $-2 + h$. As $h \to 0$: **$-2$**.

q: Use the definition to find $f'(x)$ for $f(x) = x^2 + x$.
answer: Rise: $(x + h)^2 + (x + h) - x^2 - x = 2xh + h^2 + h$. Divide by h: $2x + h + 1$. As $h \to 0$: **$f'(x) = 2x + 1$**.

q: Use the definition to find the slope of $f(x) = x^3$ at $x = 1$.
answer: $(1 + h)^3 = 1 + 3h + 3h^2 + h^3$. Rise: $3h + 3h^2 + h^3$. Divide by h: $3 + 3h + h^2$. As $h \to 0$: **3**.

q: A ball has rolled $s(t) = t^2$ metres after t seconds. Its derivative is $s'(t) = 2t$. How fast is it going at $t = 4$?
answer: $s'(4) = 2 \cdot 4 =$ **8 metres per second**. The derivative of distance is speed.

q: Use the definition to find the slope of $f(x) = \dfrac{1}{x}$ at $x = 1$.
answer: $f(1 + h) - f(1) = \dfrac{1}{1 + h} - 1 = \dfrac{1 - (1 + h)}{1 + h} = \dfrac{-h}{1 + h}$. Divide by h: $\dfrac{-1}{1 + h}$. As $h \to 0$: **$-1$**.
:::
