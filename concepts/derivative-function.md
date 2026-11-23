---
id: derivative-function
title: The derivative as a function
prereqs: [derivative]
big: The derivative is a function of its own. Give it any input x, and it gives back the slope of the original curve at that x.
recap: $f'(x)$ takes an input x and returns the slope of f there. Where f rises, $f'$ is positive. Where f falls, $f'$ is negative. Where f is flat, as at a peak or a valley, $f' = 0$. It is also written $\dfrac{dy}{dx}$.
check:
  q: For $f(x) = x^2$, the derivative is $f'(x) = 2x$. What is $f'(-3)$?
  options: ["$-6$", "9", "6"]
  answer: 0
  why: Put $-3$ into the derivative, not into f: $f'(-3) = 2 \cdot (-3) = -6$. The curve is falling there, so the slope is negative. 9 is $f(-3)$, the height, not the slope. 6 drops the minus sign.
---

## Slopes at many points

The [[derivative|derivative]] page found the slope of $f(x) = x^2$ at one point at a time. Line up several of them:

| $x$ | $-2$ | $-1$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| slope of $x^2$ at x | $-4$ | $-2$ | 0 | 2 | 4 | 6 |

*Notice: every slope is exactly twice the input. The slopes follow their own rule: $2x$.*

So there is a function hiding here. Feed it an input, and it returns the slope of $x^2$ at that input. That function is the **derivative function**, written $f'(x)$. For $f(x) = x^2$, $f'(x) = 2x$.

## Finding the formula

Use the limit definition with a general x instead of a number:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

For $x^2$, the derivative page showed this works out to $2x + h$, which heads to $2x$. The x stays as a letter the whole way through, so the answer is a formula in x. One calculation gives the slope everywhere at once.

## Reading the derivative from a graph

:::widget slope-reader

The [[graphs|graph]] of $f'$ is a picture of the slopes of f. Every feature of f shows up in it:

| where f is… | $f'$ is… |
|---|---|
| rising | positive (above the x-axis) |
| falling | negative (below the x-axis) |
| flat for an instant (a peak or a valley) | 0 (on the x-axis) |
| steep | far from 0 |
| gently sloped | close to 0 |

**Why it works.** The height of $f'$ at x **is** the slope of f at x. That is what the function was built to give. So reading heights on the graph of $f'$ is reading slopes on the graph of f.

## Other ways to write it

All of these mean the same thing:

$$f'(x) \qquad y' \qquad \frac{dy}{dx} \qquad \frac{d}{dx} f(x)$$

$\dfrac{dy}{dx}$ is read "dee y by dee x". It is a reminder that a derivative is a ratio, rise over run, made exact by a limit. It is a single symbol, not a fraction you can cancel.^[n_two_notations]

## Where there is no derivative

The derivative at a point needs one clear slope there. Three things can stop that:

- **A corner.** The graph of $|x|$, which turns negative inputs positive, is a V. Left of 0 its slope is $-1$. Right of 0 it is $+1$. At the corner there is no single slope.
- **A break.** Where a function is not continuous, such as a jump or a hole, there is no slope.
- **A vertical tangent.** If the curve stands straight up for an instant, rise over run has a run of 0.

Everywhere else on a smooth, unbroken curve, the derivative exists.

## Why it matters

If $s(t)$ is position at time t, then $s'(t)$ is the speed at every moment: a whole speed-versus-time function. The derivative of that, in turn, is acceleration. Taking a derivative of a derivative is the idea behind second derivatives.

:::example
title: Use the limit definition to find $f'(x)$ for $f(x) = x^2 - 4x$. Where is the slope 0, and what does that point look like?

1. Find $f(x + h)$: $(x + h)^2 - 4(x + h) = x^2 + 2xh + h^2 - 4x - 4h$.
   why: Put $x + h$ in place of every x, then expand.
   uses: [expanding]

2. Take away $f(x) = x^2 - 4x$: what remains is $2xh + h^2 - 4h$.
   why: This is the rise between the two points.
   uses: [derivative]

3. Divide by h: $\dfrac{2xh + h^2 - 4h}{h} = 2x + h - 4$.
   why: Every term on top has an h, and h is never exactly 0.
   uses: []

4. Let $h \to 0$: $f'(x) = 2x - 4$.
   why: The limit slides the two points together.
   uses: [limits]

5. Set the slope to 0: $2x - 4 = 0$, so $x = 2$. There $f(2) = 4 - 8 = -4$.
   why: The slope is 0 where the curve is flat for an instant.
   uses: [functions]

6. For $x < 2$, $f'(x)$ is negative, so f falls. For $x > 2$ it is positive, so f rises. So $(2, -4)$ is the **lowest point** of the curve.
   why: Falling then rising means a valley.
   uses: [graphs]
:::

:::practice
q: Use the limit definition to find $f'(x)$ for $f(x) = 3x^2 + 1$.
answer: $f(x + h) - f(x) = 3(x^2 + 2xh + h^2) + 1 - 3x^2 - 1 = 6xh + 3h^2$. Divide by h: $6x + 3h$. Let $h \to 0$: **$f'(x) = 6x$**.
:::

:::problems
q: For $f(x) = x^2$, $f'(x) = 2x$. Find $f'(0)$ and $f'(5)$.
answer: $f'(0) = 2 \cdot 0 =$ **0**, so the curve is flat at the bottom of the U. $f'(5) = 2 \cdot 5 =$ **10**, steeply uphill.

q: A function has $f'(3) = -2$. What does that tell you about the graph of f at $x = 3$?
answer: At $x = 3$ the graph is **falling**, with slope $-2$: it drops 2 for every 1 step right, right there.

q: Find $f'(x)$ for $f(x) = 5x - 1$. Why does the answer have no x in it?
answer: **$f'(x) = 5$.** The graph is a straight line with slope 5, and a line has the same slope everywhere. So the slope does not depend on x.

q: Find $f'(x)$ for $f(x) = 7$.
answer: **$f'(x) = 0$.** The graph is a flat line, so its slope is 0 everywhere. By the definition: $\frac{7 - 7}{h} = 0$.

q: Use the limit definition to find $f'(x)$ for $f(x) = x^2 + x$.
answer: $f(x + h) - f(x) = (x^2 + 2xh + h^2 + x + h) - (x^2 + x) = 2xh + h^2 + h$. Divide by h: $2x + h + 1$. Let $h \to 0$: **$f'(x) = 2x + 1$**.

q: Use the limit definition to find $f'(x)$ for $f(x) = 4 - x^2$.
answer: $f(x + h) - f(x) = 4 - (x^2 + 2xh + h^2) - 4 + x^2 = -2xh - h^2$. Divide by h: $-2x - h$. Let $h \to 0$: **$f'(x) = -2x$**.

q: For $f(x) = x^2 - 4x$, $f'(x) = 2x - 4$. For which x is f rising?
answer: Rising means $f'(x) > 0$: $2x - 4 > 0$, so **$x > 2$**.

q: The graph of f has a peak at $x = 1$ and a valley at $x = 4$. What are $f'(1)$ and $f'(4)$?
answer: At a peak or a valley the curve is flat for an instant, so **$f'(1) = 0$ and $f'(4) = 0$**.

q: Use the limit definition to find $f'(x)$ for $f(x) = x^3$.
answer: $(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$. Take away $x^3$: $3x^2h + 3xh^2 + h^3$. Divide by h: $3x^2 + 3xh + h^2$. Let $h \to 0$: **$f'(x) = 3x^2$**.

q: For $f(x) = x^3$, where is the slope equal to 12?
answer: $f'(x) = 3x^2 = 12$, so $x^2 = 4$ and **$x = 2$ or $x = -2$**. The curve is equally steep at both, since $x^3$ is symmetric about the origin.

q: Explain why $f(x) = |x|$ has no derivative at $x = 0$.
answer: Left of 0, $|x| = -x$, a line with slope $-1$. Right of 0, $|x| = x$, with slope $+1$. At 0 the slopes from the two sides disagree, so **there is no single slope: no derivative** at the corner.

q: A dropped ball has fallen $s(t) = 5t^2$ metres after t seconds. Find $s'(t)$ and the ball's speed at $t = 3$.
answer: $s(t + h) - s(t) = 5(2th + h^2) = 10th + 5h^2$. Divide by h and let $h \to 0$: $s'(t) = 10t$. At $t = 3$: **30 metres per second**.

q: Use the limit definition to find $f'(x)$ for $f(x) = \dfrac{1}{x}$.
answer: $\frac{1}{x + h} - \frac{1}{x} = \frac{x - (x + h)}{x(x + h)} = \frac{-h}{x(x + h)}$. Divide by h: $\frac{-1}{x(x + h)}$. Let $h \to 0$: **$f'(x) = -\frac{1}{x^2}$**. Check at $x = 1$: the slope from 1 to 1.001 is $\frac{0.999 - 1}{0.001} \approx -1$, and $-\frac{1}{1^2} = -1$.
:::
