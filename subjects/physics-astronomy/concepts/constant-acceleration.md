---
id: constant-acceleration
title: The constant-acceleration equations
prereqs: [motion-graphs, quadratic-formula]
big: When acceleration stays the same, four short equations connect the start velocity, end velocity, acceleration, time and displacement, so knowing any three gives you the rest.
recap: With constant acceleration a, start velocity u, end velocity v, time t and displacement s: $v = u + at$, $s = ut + \tfrac{1}{2}at^2$, $v^2 = u^2 + 2as$ and $s = \tfrac{1}{2}(u + v)t$. Pick the equation that contains the three things you know and the one you want.
check:
  q: A car moving at 10 m/s speeds up at 2 m/s² for 5 s. How far does it go in that time?
  options: ["75 m", "50 m", "100 m", "55 m"]
  answer: 0
  why: $s = ut + \tfrac{1}{2}at^2 = 10 \times 5 + \tfrac{1}{2} \times 2 \times 25 = 50 + 25 = 75$ m. 50 m ignores the speeding up. 100 m forgets the ½. 55 m forgets to square the time.
---

## Five quantities

Motion with a steady acceleration involves five quantities:

| Letter | Means | Unit |
|---|---|---|
| u | velocity at the start | m/s |
| v | velocity at the end | m/s |
| a | acceleration (constant) | m/s² |
| t | time taken | s |
| s | displacement | m |

Each of the four equations below leaves out one of the five. So if you know any three, one of the equations will give you a fourth.^[n_suvat]

These equations only work when the acceleration stays the same the whole time. Most textbook problems, and free fall without air, are like that.

## Where the equations come from

All four come from the velocity–time graph. With constant acceleration it is a straight line from u up to v, over a time t.

**1. The slope.** The slope is the acceleration: $a = \dfrac{v - u}{t}$. Rearranged:

$$v = u + at$$

**2. The area.** The area under the line is the displacement. The shape is a trapezium with parallel sides u and v and width t. Its area is the average of the two sides times the width:

$$s = \tfrac{1}{2}(u + v)t$$

**3. Leave out v.** Put $v = u + at$ into equation 2: $s = \tfrac{1}{2}(u + u + at)t = \tfrac{1}{2}(2u + at)t$. Multiplying out:

$$s = ut + \tfrac{1}{2}at^2$$

The $ut$ part is the rectangle under the graph (what you would cover at the starting speed). The $\tfrac{1}{2}at^2$ part is the triangle on top (the extra from speeding up).

**4. Leave out t.** From equation 1, $t = \dfrac{v - u}{a}$. Put it into equation 2: $s = \dfrac{(v + u)(v - u)}{2a} = \dfrac{v^2 - u^2}{2a}$. Rearranged:

$$v^2 = u^2 + 2as$$

## Choosing the equation

| You do not know and do not need | Use |
|---|---|
| s | $v = u + at$ |
| v | $s = ut + \tfrac{1}{2}at^2$ |
| t | $v^2 = u^2 + 2as$ |
| a | $s = \tfrac{1}{2}(u + v)t$ |

*Notice: find the one quantity the problem neither gives nor asks for. The equation without it is the one to use.*

Words carry numbers too. "Starts from rest" means $u = 0$. "Comes to a stop" means $v = 0$. "Slows down" means a has the opposite sign to the velocity.

## When the unknown is the time

If you know u, a and s and want t, the equation $s = ut + \tfrac{1}{2}at^2$ is a quadratic in t. Move everything to one side and use the [[quadratic-formula|quadratic formula]]. Often one answer is negative and can be thrown away, because it is before the motion began.

:::example
title: A car is moving at 4 m/s and speeds up at 2 m/s². How long does it take to cover 21 m?

1. List what you know: $u = 4$, $a = 2$, $s = 21$. You want t. You do not know or need v.
   why: Listing the five letters shows which equation fits.
   uses: []

2. The equation without v is $s = ut + \tfrac{1}{2}at^2$: $21 = 4t + t^2$.
   why: $\tfrac{1}{2} \times 2 = 1$, so the $t^2$ term has 1 in front.
   uses: [motion-graphs]

3. Rearrange: $t^2 + 4t - 21 = 0$. Here $b^2 - 4ac = 16 + 84 = 100$, so $t = \dfrac{-4 \pm 10}{2}$, which is 3 or −7.
   why: A quadratic in t needs the quadratic formula (or factoring: $(t + 7)(t - 3) = 0$).
   uses: [quadratic-formula]

4. Time cannot be negative here, so **t = 3 s**. Check: $4 \times 3 + 9 = 21$ m.
   why: The −7 is a time before the car started this motion, so it does not answer the question.
   uses: []
:::

:::practice
q: A car moving at 30 m/s brakes at −6 m/s². How far does it travel before stopping?
answer: $u = 30$, $v = 0$, $a = -6$; t is not needed. $v^2 = u^2 + 2as$: $0 = 900 - 12s$, so **$s = 75$ m**.
:::

:::problems
q: An object starts from rest and accelerates at 3 m/s² for 4 s. Find its final velocity.
answer: $v = u + at = 0 + 12 =$ **12 m/s**.

q: An object starts at 5 m/s and accelerates at 2 m/s² for 6 s. Find its final velocity.
answer: $v = 5 + 12 =$ **17 m/s**.

q: An object starts from rest and accelerates at 4 m/s² for 5 s. How far does it go?
answer: $s = 0 + \tfrac{1}{2} \times 4 \times 25 =$ **50 m**.

q: A car moving at 10 m/s speeds up at 2 m/s² for 5 s. How far does it go?
answer: $s = 50 + \tfrac{1}{2} \times 2 \times 25 =$ **75 m**.

q: An object goes from 12 m/s to 20 m/s in 4 s. Find its acceleration and how far it goes.
answer: $a = \dfrac{20 - 12}{4} =$ **2 m/s²**. $s = \tfrac{1}{2}(12 + 20) \times 4 =$ **64 m**.

q: A car at 20 m/s brakes at −5 m/s² until it stops. How long does it take, and how far does it go?
answer: $0 = 20 - 5t$, so **t = 4 s**. $s = \tfrac{1}{2}(20 + 0) \times 4 =$ **40 m**.

q: An object starts from rest and accelerates at 2 m/s² over 100 m. Find its final velocity.
answer: $v^2 = 0 + 2 \times 2 \times 100 = 400$, so **v = 20 m/s**.

q: A car at 30 m/s brakes at −6 m/s². Find its stopping distance.
answer: $0 = 900 - 12s$, **s = 75 m**.

q: A plane must reach 80 m/s to take off and accelerates from rest at 2 m/s². How long must the runway be?
answer: $80^2 = 0 + 2 \times 2 \times s$, so $6400 = 4s$, **s = 1600 m**.

q: An object starts from rest and accelerates at 2 m/s². How long does it take to cover 36 m?
answer: $36 = 0 + t^2$, so **t = 6 s**.

q: A car moving at 4 m/s speeds up at 2 m/s². How long does it take to cover 21 m?
answer: $21 = 4t + t^2$, $t^2 + 4t - 21 = 0$, $(t + 7)(t - 3) = 0$: **t = 3 s**.

q: An object moving at 10 m/s has an acceleration of −2 m/s². When is it 24 m from its start?
answer: $24 = 10t - t^2$, so $t^2 - 10t + 24 = 0$, giving **t = 4 s or t = 6 s**. At 4 s it passes 24 m going forward. It stops at 5 s (25 m) and comes back, passing 24 m again at 6 s.

q: A car's speed doubles from 15 m/s to 30 m/s. With the same braking, how does its stopping distance change?
answer: With $v = 0$: $s = \dfrac{u^2}{-2a}$, so s is proportional to $u^2$. Double the speed, **4 times the stopping distance**.

q: A driver going 25 m/s sees a hazard. They take 0.8 s to react, then brake at −5 m/s². How far does the car go before stopping?
answer: Reacting (steady speed): $25 \times 0.8 = 20$ m. Braking: $0 = 625 - 10s$, $s = 62.5$ m. Total **82.5 m**.

q: You know u, a and s, and you want v. Which equation do you use?
answer: Time is neither given nor wanted, so use **$v^2 = u^2 + 2as$**.
:::
