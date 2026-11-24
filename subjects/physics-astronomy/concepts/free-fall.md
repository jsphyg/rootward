---
id: free-fall
title: Free fall
prereqs: [constant-acceleration]
big: Without air in the way, everything near the Earth falls with the same steady acceleration, about 9.8 m/s² downward, no matter how heavy it is.
recap: In free fall, the only thing acting is gravity, so the acceleration is $g \approx 9.8$ m/s² downward for every object, heavy or light. Use the constant-acceleration equations with $a = -9.8$ m/s² if up is positive. At the top of a throw the velocity is 0 for an instant, but the acceleration is still 9.8 m/s² downward.
check:
  q: A ball is thrown straight up. At its highest point, what are its velocity and its acceleration?
  options: ["velocity 0, acceleration 9.8 m/s² downward", "velocity 0, acceleration 0", "velocity 9.8 m/s downward, acceleration 0", "velocity 0, acceleration 9.8 m/s² upward"]
  answer: 0
  why: At the top the ball stops rising for an instant, so its velocity is 0. Gravity has not switched off, so it is still accelerating at 9.8 m/s² downward; that is why it starts falling. "Acceleration 0" is the most common mistake: if it were 0, the ball would stay hanging in the air. Gravity always pulls down, never up.
---

## Dropping a ball

Drop a ball from a high window and time it. Ignoring air, here is how it falls:

| time t (s) | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| speed (m/s) | 0 | 9.8 | 19.6 | 29.4 |
| distance fallen (m) | 0 | 4.9 | 19.6 | 44.1 |

*Notice: the speed grows by the same 9.8 m/s every second. The distance grows faster and faster: in 3 seconds it falls 9 times as far as in 1 second.*

The speed grows steadily, so the acceleration is constant. This is {{free-fall|free fall}}: motion with gravity as the only influence.

## The same for everything

The acceleration of free fall has its own letter, g:

$$g \approx 9.8 \text{ m/s}^2$$

It is the same for a feather, a hammer and an elephant. In everyday life a feather falls slowly, but that is because air pushes back on it. With no air, it falls just as fast as a hammer. Astronaut David Scott showed this on the Moon in 1971: he dropped a hammer and a feather together, and they landed at the same moment.^[n_g_varies]

**Why the weight does not matter.** A heavier object is pulled harder by gravity. But it is also harder to speed up, by exactly the same amount. The two effects cancel, so everything speeds up at the same rate. The pages on forces explain this properly.

## Using the equations

Free fall is constant acceleration, so the [[constant-acceleration|constant-acceleration equations]] work. Choose a direction to be positive and stick to it.

- **Up is positive** (best for throws): $a = -9.8$ m/s².
- **Down is positive** (fine for things that only fall): $a = +9.8$ m/s².

For a ball dropped from rest, with down positive, $u = 0$, so:

$$v = 9.8t \qquad s = 4.9t^2$$

That gives the table above: after 3 s, $s = 4.9 \times 9 = 44.1$ m.

## Throwing something up

Throw a ball straight up at speed u. With up positive, $a = -9.8$ m/s².

- **On the way up** it slows by 9.8 m/s every second.
- **At the top** it stops for an instant: $v = 0$. Setting $v = 0$ in $v = u + at$ gives the time to the top, $t = \dfrac{u}{9.8}$.
- **On the way down** it speeds up again. Coming back to the hand, it has the same speed it was thrown with, now downward.

The trip down takes as long as the trip up. The motion is symmetric.

The acceleration is −9.8 m/s² the whole time: going up, at the top and coming down. Only the velocity changes.

:::example
title: A ball is thrown straight up at 14.7 m/s. How long does it take to reach the top, how high does it go, and when does it come back to the hand?

1. Take up as positive: $u = 14.7$, $a = -9.8$. At the top, $v = 0$.
   why: Choosing a direction makes the signs consistent.
   uses: []

2. Time to the top, from $v = u + at$: $0 = 14.7 - 9.8t$, so $t = 1.5$ s.
   why: This equation links u, v, a and t, and we do not need s yet.
   uses: [constant-acceleration]

3. Height, from $v^2 = u^2 + 2as$: $0 = 14.7^2 - 2 \times 9.8 \times s$, so $s = \dfrac{216.09}{19.6} \approx 11.0$ m.
   why: This equation does not need the time, so a small slip in step 2 cannot spread.
   uses: [constant-acceleration]

4. The trip down takes as long as the trip up, so it is back in the hand after $2 \times 1.5 = 3$ s. **1.5 s to the top, about 11 m high, back after 3 s.**
   why: Free fall is symmetric. Check: $s = ut + \tfrac{1}{2}at^2 = 14.7 \times 3 - 4.9 \times 9 = 44.1 - 44.1 = 0$ at t = 3 s.
   uses: []
:::

:::practice
q: A stone is dropped down a well and you hear the splash 2.5 s later. Ignoring the time sound takes to come back up, how deep is the well?
answer: Down positive, $u = 0$: $s = 4.9 \times 2.5^2 = 4.9 \times 6.25 \approx$ **30.6 m**.
:::

:::problems
q: A ball is dropped from rest. How fast is it falling after 2 s?
answer: $v = 9.8 \times 2 =$ **19.6 m/s**.

q: A ball is dropped from rest. How far does it fall in 2 s?
answer: $s = 4.9 \times 4 =$ **19.6 m**.

q: A ball is dropped from rest. How far does it fall in 3 s?
answer: $s = 4.9 \times 9 =$ **44.1 m**.

q: A heavy ball and a light ball are dropped together in a vacuum. Which lands first?
answer: **They land together.** Without air, both fall with acceleration g.

q: At the highest point of a throw straight up, what are the velocity and the acceleration?
answer: **Velocity 0, acceleration 9.8 m/s² downward.**

q: A rock is dropped from 45 m. How long does it take to land?
answer: $45 = 4.9t^2$, $t^2 \approx 9.18$, **t ≈ 3.0 s**.

q: A rock is dropped from 20 m. How fast is it going when it lands?
answer: $v^2 = 0 + 2 \times 9.8 \times 20 = 392$, **v ≈ 19.8 m/s**.

q: A ball is thrown straight up at 20 m/s. How long until it reaches the top, and how high does it go?
answer: $t = \dfrac{20}{9.8} \approx$ **2.0 s**. $s = \dfrac{20^2}{2 \times 9.8} = \dfrac{400}{19.6} \approx$ **20.4 m**.

q: A ball is thrown straight up at 10 m/s. What is its velocity after 1.5 s (up positive)?
answer: $v = 10 - 9.8 \times 1.5 = 10 - 14.7 =$ **−4.7 m/s**. It is already coming down.

q: A ball thrown straight up at 14.7 m/s comes back to the hand. How fast is it moving when it arrives?
answer: **14.7 m/s, downward.** The fall is symmetric.

q: A stone is thrown straight down at 5 m/s from a 30 m bridge. How long until it hits the water?
answer: Down positive: $30 = 5t + 4.9t^2$, so $4.9t^2 + 5t - 30 = 0$. $t = \dfrac{-5 + \sqrt{25 + 588}}{9.8} = \dfrac{-5 + 24.76}{9.8} \approx$ **2.0 s**.

q: A ball is thrown up at 12 m/s from the edge of a cliff 20 m above the sea. When does it hit the water?
answer: Up positive, the sea is at $s = -20$: $-20 = 12t - 4.9t^2$, so $4.9t^2 - 12t - 20 = 0$. $t = \dfrac{12 + \sqrt{144 + 392}}{9.8} = \dfrac{12 + 23.15}{9.8} \approx$ **3.6 s**. (The other answer is negative.)

q: On the Moon, $g \approx 1.6$ m/s². A hammer is dropped from rest. How fast is it going after 2 s, and how far has it fallen?
answer: $v = 1.6 \times 2 =$ **3.2 m/s**. $s = \tfrac{1}{2} \times 1.6 \times 4 =$ **3.2 m**.

q: Using $g \approx 10$ m/s² for a quick estimate, how long does it take to fall 5 m from rest?
answer: $5 = 5t^2$, so **t = 1 s**.
:::
