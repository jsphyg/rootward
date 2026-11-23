---
id: derivative
title: The derivative
prereqs: [slope, limits]
big: The derivative is the slope of a curve at one exact point.
recap: The {{derivative|derivative}} $f'(x)$ is the slope of the curve at x. It is the limit of the slope between two points as they slide together.
check:
  q: The derivative of f at $x = a$ tells you…
  options: ["the slope of the curve at $x = a$", "the height of the curve at $x = a$", "the area under the curve", "the average of f"]
  answer: 0
  why: $f'(a)$ is the slope of the tangent line at $x = a$: how fast f is changing right there.
---

## The problem

You can find a {{slope|slope}} from two points. But a curve at one point is just one point. We need a trick.

## The trick

Take a second point a small step $h$ away.^[n_h] The line through the two points is a {{secant|secant line}}. Its slope is easy to compute. Now slide the second point closer by shrinking h. The secant turns into the {{tangent|tangent line}}. That is the slope we wanted.

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

It is the slope formula, rise ÷ run, with a [[limits|limit]] added so that the run shrinks to zero.^[n_notation]

:::widget derivative

Drag the slider on $f(x) = x^2$ at $x = 1$. The secant slope is exactly $2 + h$. As h shrinks to 0, it heads to 2.

:::example
title: Use the definition to find the slope of $f(x) = x^2$ at $x = 1$.

1. Write the secant slope: $\dfrac{f(1 + h) - f(1)}{h} = \dfrac{(1 + h)^2 - 1}{h}$.
   why: Rise over run between the points at $x = 1$ and $x = 1 + h$.
   uses: [slope, functions]

2. Expand: $(1 + h)^2 = 1 + 2h + h^2$, so the top is $2h + h^2$.
   why: The 1 and $-1$ cancel.
   uses: [expanding]

3. Divide by h: $\dfrac{2h + h^2}{h} = 2 + h$.
   why: Every term on top has an h, so it cancels.
   uses: []

4. Let $h \to 0$: $\displaystyle\lim_{h \to 0} (2 + h) = 2$.
   why: The slope at $x = 1$ is 2. For any x the same steps give $2x$.
   uses: [limits]
:::

:::practice
q: Using $f'(x) = 2x$ for $f(x) = x^2$, what is the slope of the curve at $x = 3$?
answer: $f'(3) = 2 \cdot 3 = 6$. Check it by hand: $\dfrac{(3 + h)^2 - 9}{h} = 6 + h$, which heads to 6.
:::
