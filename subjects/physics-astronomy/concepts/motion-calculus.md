---
id: motion-calculus
title: Velocity and acceleration as derivatives
prereqs: [acceleration, calculus:higher-derivatives, calculus:antiderivatives]
big: Calculus gives the exact velocity at a single instant, as the derivative of position, and the exact acceleration as the derivative of velocity; antiderivatives run the same chain backwards.
recap: If $x(t)$ is position, then velocity is $v(t) = x'(t)$ and acceleration is $a(t) = v'(t) = x''(t)$. Going back, velocity is an antiderivative of acceleration and position is an antiderivative of velocity. The "+ C" each time is fixed by the starting velocity or starting position.
check:
  q: An object's position is $x(t) = 3t^2 + 2t$ metres. What is its velocity at t = 2 s?
  options: ["14 m/s", "16 m/s", "6 m/s", "8 m/s"]
  answer: 0
  why: $v(t) = x'(t) = 6t + 2$, so $v(2) = 14$ m/s. 16 is $x(2)$, the position, not the velocity. 6 is the acceleration, $x''(t)$. 8 is the average velocity from 0 to 2 s, $\frac{16}{2}$, not the velocity at the instant t = 2.
---

## Average versus "right now"

The [[velocity|velocity]] page divides displacement by time. That gives the **average** over a stretch of time. A car's speedometer shows something else: the velocity right now, at one instant.

Take a car with position $x = t^2$ metres. Shrink the time interval after t = 3 s and watch the average velocity:

| interval | Δx (m) | Δt (s) | average velocity (m/s) |
|---|---|---|---|
| 3 to 4 s | 16 − 9 = 7 | 1 | 7 |
| 3 to 3.1 s | 9.61 − 9 = 0.61 | 0.1 | 6.1 |
| 3 to 3.01 s | 9.0601 − 9 = 0.0601 | 0.01 | 6.01 |

*Notice: as the interval shrinks, the average settles on 6 m/s. That is the velocity at the instant t = 3 s.*

That settling value is exactly the derivative of $x = t^2$ at t = 3, which is $2t = 6$.

## The chain of derivatives

So in calculus language:

$$v(t) = \frac{dx}{dt} = x'(t) \qquad a(t) = \frac{dv}{dt} = x''(t)$$

Velocity is the derivative of position. Acceleration is the derivative of velocity, which makes it the [[calculus:higher-derivatives|second derivative]] of position.

**Why.** A derivative is the slope of the graph at one point, and the slope of a position–time graph is velocity. The slope of a velocity–time graph is acceleration. Calculus just makes "slope at one point" exact.

For $x(t) = t^3 - 6t^2 + 9t$:

$$v(t) = 3t^2 - 12t + 9 \qquad a(t) = 6t - 12$$

The velocity is $3(t - 1)(t - 3)$, so the object stops for an instant at t = 1 s and t = 3 s and turns around each time.

## Running it backwards

If you know the acceleration, [[calculus:antiderivatives|antiderivatives]] give the velocity, and then the position. Each step adds a "+ C", which you fix from what you know at the start.

Do this for a constant acceleration a, with start velocity u and start position 0:

1. $v(t)$ is an antiderivative of a: $v = at + C$. At t = 0, $v = u$, so $C = u$. That gives $v = u + at$.
2. $x(t)$ is an antiderivative of $u + at$: $x = ut + \tfrac{1}{2}at^2 + C$. At t = 0, $x = 0$, so $C = 0$. That gives $x = ut + \tfrac{1}{2}at^2$.

These are two of the [[constant-acceleration|constant-acceleration equations]], now derived in two lines. The calculus method also works when the acceleration changes, where those equations fail.

The area under a velocity–time graph being the displacement is the same fact, seen as a definite integral: $\Delta x = \displaystyle\int_{t_1}^{t_2} v(t)\,dt$.

:::example
title: An object starts from rest at x = 0. Its acceleration grows with time as $a(t) = 6t$ m/s². Find its velocity and position at t = 2 s.

1. Antiderivative of a: $v(t) = 3t^2 + C$. It starts from rest, $v(0) = 0$, so $C = 0$ and $v(t) = 3t^2$.
   why: Velocity is the antiderivative of acceleration; the start velocity fixes C.
   uses: [calculus:antiderivatives]

2. Antiderivative of v: $x(t) = t^3 + C$. It starts at $x(0) = 0$, so $C = 0$ and $x(t) = t^3$.
   why: Position is the antiderivative of velocity; the start position fixes C.
   uses: [calculus:antiderivatives]

3. At t = 2: $v = 3 \times 4 = 12$ m/s and $x = 8$ m.
   why: Put the time into each function.
   uses: []

4. Check by differentiating back: $x' = 3t^2 = v$ and $v' = 6t = a$. **12 m/s, at 8 m.** The constant-acceleration equations would give the wrong answer here, because a is not constant.
   why: Differentiating undoes the antiderivatives, which confirms them.
   uses: [calculus:higher-derivatives]
:::

:::practice
q: A ball's height is $x(t) = 10 + 3t - 4.9t^2$ metres. Find its velocity and acceleration at any time.
answer: $v(t) = x'(t) =$ **$3 - 9.8t$ m/s**. $a(t) = v'(t) =$ **−9.8 m/s²**, constant, as free fall should be.
:::

:::problems
q: $x(t) = 5t^2$. Find $v(t)$ and $a(t)$.
answer: **$v = 10t$, $a = 10$.**

q: $x(t) = 4t^3$. Find $v(t)$ and $a(t)$.
answer: **$v = 12t^2$, $a = 24t$.**

q: $x(t) = 2t^2 - 8t + 3$. When is the object stopped?
answer: $v = 4t - 8 = 0$ when **t = 2 s**.

q: $x(t) = t^3 - 6t^2 + 9t$. Find the velocity at t = 0 and at t = 2.
answer: $v = 3t^2 - 12t + 9$. $v(0) =$ **9 m/s**. $v(2) = 12 - 24 + 9 =$ **−3 m/s** (moving backward).

q: For $x(t) = t^3 - 6t^2 + 9t$, when does the object stop, and what is its acceleration at t = 2?
answer: $3(t - 1)(t - 3) = 0$: stops at **t = 1 s and t = 3 s**. $a = 6t - 12$, so $a(2) =$ **0**.

q: $x(t) = 5\sin t$ (a swinging object). Find $v(t)$ and $a(t)$, and its greatest speed.
answer: **$v = 5\cos t$, $a = -5\sin t$.** The greatest speed is **5**, when $\cos t = \pm 1$.

q: The acceleration is a constant 6 m/s² and $v(0) = 2$ m/s. Find $v(t)$.
answer: $v = 6t + C$ and $C = 2$: **$v = 6t + 2$**.

q: Continuing, $x(0) = 0$. Find $x(t)$.
answer: $x = 3t^2 + 2t + C$, $C = 0$: **$x = 3t^2 + 2t$**.

q: $a(t) = 6t$, starting from rest at x = 0. Find x at t = 2 s.
answer: $v = 3t^2$, $x = t^3$: **x = 8 m**.

q: An object's velocity is $v(t) = 4t + 1$ m/s, and it starts at x = 5 m. Find its position at t = 3 s.
answer: $x = 2t^2 + t + C$, and $x(0) = 5$ gives $C = 5$. At t = 3: $18 + 3 + 5 =$ **26 m**.

q: $x(t) = t^2$. Find the average velocity from 0 to 4 s, and the velocity at the instant t = 4 s.
answer: Average: $\dfrac{16 - 0}{4} =$ **4 m/s**. At t = 4: $v = 2t =$ **8 m/s**.

q: Use antiderivatives to show that constant acceleration a with start velocity u gives $v = u + at$.
answer: $v$ is an antiderivative of a, so $v = at + C$. At t = 0, $v = u$, so $C = u$. **$v = u + at$.**
:::
