---
id: sum-constant-rules
title: Sum and constant-multiple rules
prereqs: [derivative]
big: Derivatives can be taken one piece at a time. The derivative of a sum is the sum of the derivatives, and a number multiplying a function just rides along.
recap: $(f + g)' = f' + g'$ and $(f - g)' = f' - g'$. A number in front rides along: $(c \cdot f)' = c \cdot f'$. A number added on its own disappears, because its slope is 0. So a long expression can be differentiated term by term.
check:
  q: Suppose $f'(x) = 2x$ and $g'(x) = 3$. What is the derivative of $5f(x) - g(x)$?
  options: ["$10x - 3$", "$10x - 15$", "$2x - 3$"]
  answer: 0
  why: Term by term. $5f$ gives $5 \cdot 2x = 10x$. $-g$ gives $-3$. Together: $10x - 3$. Getting $10x - 15$ multiplies g's slope by 5 as well, but the 5 belongs only to f. Getting $2x - 3$ drops the 5 that should ride along.
---

## Slopes that add

Start with two straight lines, where slopes are easy to see:

| function | $2x$ | $3x$ | $2x + 3x = 5x$ |
|---|---|---|---|
| slope | 2 | 3 | 5 |

*Notice: adding the functions added their slopes. Each step right, the first rises 2 and the second rises 3, so together they rise 5.*

The same is true for curves, at every single point.

## The rules

For any two functions f and g that have [[derivative|derivatives]], and any number c:

| rule | in symbols | in words |
|---|---|---|
| sum | $(f + g)' = f' + g'$ | the slope of a sum is the sum of the slopes |
| difference | $(f - g)' = f' - g'$ | the same, with a minus |
| constant multiple | $(c f)' = c f'$ | a number in front rides along |
| constant added | $(f + c)' = f'$ | adding a number changes nothing |

## Why they work

**The sum rule.** Write the slope formula for $f + g$:

$$\frac{\big(f(x + h) + g(x + h)\big) - \big(f(x) + g(x)\big)}{h} = \frac{f(x + h) - f(x)}{h} + \frac{g(x + h) - g(x)}{h}$$

The rise of the sum splits into the two separate rises. As $h \to 0$, the first piece heads to $f'(x)$ and the second to $g'(x)$. So the total heads to $f'(x) + g'(x)$.

**The constant-multiple rule.** Multiplying f by 3 stretches its graph to 3 times the height. Every rise becomes 3 times as big, but every run stays the same. So every slope is 3 times as big. In symbols, the c comes straight out of the rise: $\dfrac{c f(x + h) - c f(x)}{h} = c \cdot \dfrac{f(x + h) - f(x)}{h}$.

**A number added.** $f(x) + 5$ is the same graph, slid up by 5. Sliding a graph up does not tilt it, so the slopes do not change. Put another way, a constant has slope 0, and adding 0 changes nothing.

## Putting them to work

These rules let you break a long expression into pieces you already know. From the earlier pages:

- $x^2$ has derivative $2x$.
- $x$ has derivative 1, because the line $y = x$ has slope 1.
- A constant has derivative 0.

So, for example:

$$\frac{d}{dx}\left(4x^2 - 7x + 9\right) = 4 \cdot 2x - 7 \cdot 1 + 0 = 8x - 7$$

With the [[power-rule|power rule]] for every $x^n$, these two rules are enough to differentiate any polynomial.

## What these rules do not say

**Products do not work this way.** The derivative of $f \cdot g$ is **not** $f' \cdot g'$. Test it with $f(x) = x$ and $g(x) = x$. Their product is $x^2$, whose derivative is $2x$. But $f' \cdot g' = 1 \cdot 1 = 1$. Wrong. Products and quotients need rules of their own, which come later.

:::example
title: Find the derivative of $f(x) = 4x^2 - 7x + 9$, and check it at $x = 1$.

1. Split into terms: $4x^2$, $-7x$ and $+9$.
   why: The sum and difference rules let us take each term separately.
   uses: []

2. First term: $4 \cdot (x^2)' = 4 \cdot 2x = 8x$.
   why: The 4 rides along. $x^2$ has derivative $2x$.
   uses: [derivative]

3. Second term: $-7 \cdot (x)' = -7 \cdot 1 = -7$.
   why: The $-7$ rides along. The line $y = x$ has slope 1.
   uses: []

4. Third term: $(9)' = 0$. So $f'(x) = 8x - 7$.
   why: A constant has slope 0.
   uses: []

5. Check at $x = 1$: $f'(1) = 8 - 7 = 1$. A tiny step: $f(1) = 6$ and $f(1.001) = 6.001004$, so rise over run is $\dfrac{0.001004}{0.001} \approx 1.004$. Close to 1.
   why: A secant slope with a tiny run should be close to the derivative.
   uses: [slope]
:::

:::practice
q: Find the derivative of $3 - 5x^2 + 2x$.
answer: Term by term: $(3)' = 0$, $(-5x^2)' = -5 \cdot 2x = -10x$, $(2x)' = 2$. So the derivative is **$-10x + 2$**.
:::

:::problems
q: Find the derivative of $x^2 + x$.
answer: Sum rule: $2x + 1$. So **$2x + 1$**.

q: Find the derivative of $6x^2$.
answer: The 6 rides along: $6 \cdot 2x =$ **$12x$**.

q: Find the derivative of $x^2 + 10$.
answer: $2x + 0 =$ **$2x$**. Adding 10 slides the graph up without tilting it.

q: Find the derivative of $-3x^2$.
answer: $-3 \cdot 2x =$ **$-6x$**.

q: Find the derivative of $5x - 2x^2$.
answer: $5 \cdot 1 - 2 \cdot 2x =$ **$5 - 4x$**.

q: Find the derivative of $\dfrac{x^2}{4}$.
answer: $\frac{x^2}{4} = \frac{1}{4} x^2$, so the $\frac{1}{4}$ rides along: $\frac{1}{4} \cdot 2x =$ **$\frac{x}{2}$**.

q: Find the derivative of $\pi x^2$.
answer: $\pi$ is just a number, about 3.14, so it rides along: **$2\pi x$**.

q: Find the derivative of $2(x^2 + 3)$.
answer: Expand first, or let the 2 ride along: $2 \cdot (2x + 0) =$ **$4x$**.

q: Suppose $f'(x) = 4x^3$ and $g'(x) = 2x$. Find the derivative of $f(x) + 3g(x)$.
answer: Sum rule, with the 3 riding along on g: **$4x^3 + 6x$**.

q: Suppose $f'(1) = 3$ and $g'(1) = -4$. Find the slope of $2f(x) - g(x)$ at $x = 1$.
answer: $2 \cdot 3 - (-4) = 6 + 4 =$ **10**.

q: Show that the derivative of $x \cdot x$ is not $(x)' \cdot (x)'$.
answer: $x \cdot x = x^2$, whose derivative is $2x$. But $(x)' \cdot (x)' = 1 \cdot 1 = 1$. These differ (for example at $x = 3$: 6 versus 1), so **the derivative of a product is not the product of the derivatives**.

q: Where is the slope of $f(x) = 3x^2 - 12x + 1$ equal to 0?
answer: $f'(x) = 6x - 12$. Set it to 0: $6x = 12$, so **$x = 2$**. That is the lowest point of this U-shaped curve.

q: A ball is thrown upward. Its height after t seconds is $h(t) = 20 + 15t - 5t^2$ metres. Find its speed upward at $t = 1$, and when it stops rising.
answer: $h'(t) = 0 + 15 - 10t$. At $t = 1$: $15 - 10 = $ **5 metres per second** upward. It stops rising when $h'(t) = 0$: $15 - 10t = 0$, so **$t = 1.5$ seconds**.
:::
