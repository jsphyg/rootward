---
id: higher-derivatives
title: Second and higher derivatives
prereqs: [derivative-function, power-rule, sum-constant-rules]
big: The derivative is itself a function, so you can take its derivative too. That second derivative tells you how fast the slope is changing. For motion, it is acceleration.
recap: The second derivative, $f''(x)$ or $\dfrac{d^2y}{dx^2}$, is the derivative of $f'(x)$. It measures how quickly the slope changes. If $f'' > 0$, the slope is increasing and the curve bends upward. If $f'' < 0$, it bends downward. If position is $s(t)$, then $s'(t)$ is velocity and $s''(t)$ is acceleration. You can keep going: $f'''$, $f^{(4)}$, and so on.
check:
  q: If $f(x) = x^3$, what is $f''(x)$?
  options: ["$6x$", "$3x^2$", "$6$"]
  answer: 0
  why: First derivative: $f'(x) = 3x^2$. Take the derivative again: $f''(x) = 3 \cdot 2x = 6x$. $3x^2$ stops after one step. $6$ goes one step too far: it is the third derivative.
---

## Do it again

The [[derivative-function|derivative]] of a function is another function. So nothing stops you from taking its derivative as well.

Start with $f(x) = x^4$ and keep going:

| | function | what it is |
|---|---|---|
| $f(x)$ | $x^4$ | the function |
| $f'(x)$ | $4x^3$ | its slope |
| $f''(x)$ | $12x^2$ | the slope of the slope |
| $f'''(x)$ | $24x$ | the next one |
| $f^{(4)}(x)$ | $24$ | a constant |
| $f^{(5)}(x)$ | $0$ | and nothing after that |

*Notice: each step uses the [[power-rule|power rule]] once, and each step lowers the power by 1. A polynomial with highest power 4 runs out after 4 steps. Every derivative after that is 0.*

## How to write it

- **Second derivative:** $f''(x)$, read "f double prime of x". Or $\dfrac{d^2y}{dx^2}$, read "dee two y by dee x squared".^[n_d2]
- **Third derivative:** $f'''(x)$, or $\dfrac{d^3y}{dx^3}$.
- **Fourth and beyond:** the dashes pile up, so the count goes in brackets: $f^{(4)}(x)$, $f^{(5)}(x)$. The brackets show it is a count of derivatives, not a power.

## What the second derivative means

The first derivative tells you how steep the curve is. The second derivative tells you how fast the **steepness** is changing.

- If $f''(x) > 0$, the slope is increasing. Moving right, the curve gets steeper upward (or less steep downward). It **bends upward**, like a cup.
- If $f''(x) < 0$, the slope is decreasing. The curve **bends downward**, like a cap.
- If $f''(x) = 0$, the slope is, for that instant, not changing. The bend may be switching direction there.

Try it on $f(x) = x^3 - 3x$. Its slope is $f'(x) = 3x^2 - 3$, and the slope of that is $f''(x) = 6x$.

:::widget deriv-stack

At $x = -1$ the curve has a peak, and $f''(-1) = -6$: it bends downward. At $x = 1$ it has a valley, and $f''(1) = 6$: it bends upward. At $x = 0$, $f''(0) = 0$, and the curve switches from one bend to the other. A later page uses this to sort peaks from valleys.

**A straight line never bends.** For $f(x) = 3x + 2$, $f'(x) = 3$ and $f''(x) = 0$ everywhere. The slope never changes, so there is no bending at all.

## Position, velocity, acceleration

Here is where the second derivative earns its name in physics. Let $s(t)$ be the position of an object at time t.

- $s'(t)$ is how fast the position changes: the **velocity**.
- $s''(t)$ is how fast the velocity changes: the **acceleration**.
- $s'''(t)$ is how fast the acceleration changes. It is called the **jerk**: the lurch you feel when a bus starts suddenly.

Throw a ball straight up at 20 metres per second. Its height after t seconds is roughly $h(t) = 20t - 5t^2$ metres.^[n_gravity]

- Velocity: $h'(t) = 20 - 10t$. It starts at 20 and drops by 10 every second.
- Acceleration: $h''(t) = -10$. It is the same at every moment. That is gravity, pulling down at a steady 10 metres per second, every second.

*Notice: at $t = 2$ the velocity is 0. The ball has stopped rising and is about to fall. But the acceleration is still $-10$. The ball is momentarily still, yet gravity is still changing its speed.*

:::example
title: For $f(x) = 2x^4 - 3x^2 + 5x$, find $f''(x)$ and say which way the curve bends at $x = 0$ and at $x = 1$.

1. First derivative: $f'(x) = 8x^3 - 6x + 5$.
   why: Power rule on each term. The constant multiples stay in front.
   uses: [power-rule, sum-constant-rules]

2. Second derivative: $f''(x) = 24x^2 - 6$.
   why: Take the derivative of $f'$, term by term. The constant 5 has slope 0.
   uses: [power-rule, sum-constant-rules]

3. At $x = 0$: $f''(0) = -6$, which is negative. The curve bends **downward** there.
   why: A negative second derivative means the slope is decreasing.
   uses: []

4. At $x = 1$: $f''(1) = 24 - 6 = 18$, which is positive. The curve bends **upward** there.
   why: A positive second derivative means the slope is increasing.
   uses: []
:::

:::practice
q: Find $f''(x)$ for $f(x) = x^5 - 4x^2$, and work out $f''(1)$.
answer: $f'(x) = 5x^4 - 8x$, so $f''(x) =$ **$20x^3 - 8$**. Then $f''(1) = 20 - 8 =$ **12**.
:::

:::problems
q: For $f(x) = x^3$, find $f'(x)$, $f''(x)$ and $f'''(x)$.
answer: **$f'(x) = 3x^2$, $f''(x) = 6x$, $f'''(x) = 6$.**

q: Find $f''(x)$ for $f(x) = 4x^5$.
answer: $f'(x) = 20x^4$, so **$f''(x) = 80x^3$**.

q: Find $f''(x)$ for $f(x) = x^4 - 2x^3 + x$, and work out $f''(2)$.
answer: $f'(x) = 4x^3 - 6x^2 + 1$, so $f''(x) =$ **$12x^2 - 12x$**. Then $f''(2) = 48 - 24 =$ **24**.

q: Find $f''(x)$ for $f(x) = 7x + 3$. Why does the answer make sense?
answer: $f'(x) = 7$, so **$f''(x) = 0$**. The graph is a straight line. Its slope is 7 everywhere and never changes.

q: Find $f''(x)$ for $f(x) = (x + 1)^2$. (Hint: expand first.)
answer: $(x + 1)^2 = x^2 + 2x + 1$. So $f'(x) = 2x + 2$ and **$f''(x) = 2$**.

q: For $f(x) = x^6$, find $f^{(6)}(x)$ and $f^{(7)}(x)$.
answer: Each step brings down the power: $6x^5$, $30x^4$, $120x^3$, $360x^2$, $720x$, then **$f^{(6)}(x) = 720$**. One more step gives **$f^{(7)}(x) = 0$**.

q: $f'(x) = 5x^4 - 3$. What is $f''(x)$?
answer: Take the derivative of $f'$: **$f''(x) = 20x^3$**.

q: Find $f''(x)$ for $f(x) = \dfrac{1}{x}$, and work out $f''(1)$.
answer: Write $f(x) = x^{-1}$. Then $f'(x) = -x^{-2}$ and $f''(x) = 2x^{-3} =$ **$\dfrac{2}{x^3}$**. So $f''(1) =$ **2**.

q: Find $f''(x)$ for $f(x) = \sqrt{x}$, and work out $f''(4)$.
answer: $f(x) = x^{1/2}$, so $f'(x) = \tfrac{1}{2}x^{-1/2}$ and $f''(x) =$ **$-\tfrac{1}{4}x^{-3/2}$**. At $x = 4$: $4^{-3/2} = \tfrac{1}{8}$, so $f''(4) =$ **$-\tfrac{1}{32}$**. It is negative, so the square root curve bends downward.

q: Does $y = x^2$ bend upward or downward? What about $y = -x^2$?
answer: For $x^2$, $y'' = 2$, which is positive: it **bends upward**, a cup. For $-x^2$, $y'' = -2$: it **bends downward**, a cap.

q: For $f(x) = x^3 - 3x$, find $f''(-1)$ and $f''(1)$. What do they tell you?
answer: $f''(x) = 6x$, so **$f''(-1) = -6$** and **$f''(1) = 6$**. At $x = -1$ the curve bends downward, which fits a peak. At $x = 1$ it bends upward, which fits a valley.

q: A ball's height is $h(t) = 30t - 5t^2$ metres after t seconds. Find its velocity and acceleration. When does it stop rising, and how high is it then?
answer: Velocity **$h'(t) = 30 - 10t$** m/s. Acceleration **$h''(t) = -10$** m/s², the same at every moment. It stops rising when $30 - 10t = 0$, at **$t = 3$ seconds**. The height then is $90 - 45 =$ **45 metres**.

q: A car's position is $s(t) = 2t^2$ metres after t seconds. Find its velocity and acceleration.
answer: Velocity **$s'(t) = 4t$** m/s, growing steadily. Acceleration **$s''(t) = 4$** m/s², constant.

q: A particle's position is $s(t) = t^3 - 6t^2 + 9t$. Find its velocity and acceleration at $t = 1$. When is its acceleration 0?
answer: $s'(t) = 3t^2 - 12t + 9$ and $s''(t) = 6t - 12$. At $t = 1$: velocity $3 - 12 + 9 =$ **0**, acceleration $6 - 12 =$ **$-6$**. The acceleration is 0 when $6t = 12$, at **$t = 2$**.

q: An object's position is $s(t) = t^4$. Find its jerk (the third derivative) at $t = 1$.
answer: $s' = 4t^3$, $s'' = 12t^2$, $s''' = 24t$. At $t = 1$ the jerk is **24**.

q: Name a function whose second derivative is 0 everywhere. Can you describe all of them?
answer: For example $f(x) = 3x + 2$. **Any straight line $f(x) = mx + b$** works: its slope is the constant m, and a constant has derivative 0. (These are the only ones, since a slope that never changes means a straight line.)
:::
