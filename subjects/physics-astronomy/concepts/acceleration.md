---
id: acceleration
title: Acceleration
prereqs: [velocity]
big: Acceleration is how fast velocity changes, found by dividing the change in velocity by the time it took, so speeding up, slowing down and turning are all accelerations.
recap: Acceleration is change in velocity divided by time, $a = \dfrac{\Delta v}{\Delta t}$, in m/s² (metres per second, every second). When a and v have the same sign, the object speeds up. When they have opposite signs, it slows down.
check:
  q: A car goes from 10 m/s to 25 m/s in 5 s. What is its acceleration?
  options: ["3 m/s²", "5 m/s²", "2 m/s²", "75 m/s²"]
  answer: 0
  why: $a = \dfrac{\Delta v}{\Delta t} = \dfrac{25 - 10}{5} = \dfrac{15}{5} = 3$ m/s². 5 m/s² uses the end velocity, 25, instead of the change. 2 m/s² uses the start velocity. 75 multiplies the change by the time instead of dividing.
---

## Velocity every second

A car pulls away from a traffic light. Its speedometer, read every second, shows:

| time t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| velocity v (m/s) | 0 | 4 | 8 | 12 | 16 |

*Notice: every second, the velocity goes up by the same 4 m/s.*

The car gains 4 m/s of velocity each second. That is its {{acceleration|acceleration}}: 4 metres per second, per second.

## The formula

Acceleration is the change in velocity divided by the time taken:

$$a = \frac{\Delta v}{\Delta t} = \frac{v_{\text{end}} - v_{\text{start}}}{\Delta t}$$

It has the same shape as velocity. Velocity is how fast position changes. Acceleration is how fast velocity changes.

## The unit m/s²

Velocity is in m/s, and we divide it by seconds again:

$$\frac{\text{m/s}}{\text{s}} = \frac{\text{m}}{\text{s}^2}$$

Say it as "metres per second, every second". An acceleration of 4 m/s² means the velocity grows by 4 m/s in each second.

A useful one to remember: anything dropped near the Earth's surface speeds up by about 9.8 m/s every second, ignoring air. That is an acceleration of 9.8 m/s² downward.

## Slowing down is acceleration too

A car braking from 30 m/s to 10 m/s in 4 s:

$$a = \frac{10 - 30}{4} = -5 \text{ m/s}^2$$

The negative acceleration means the velocity is decreasing. In everyday speech this is called deceleration, but physics just calls it acceleration with a sign.

The sign of the acceleration alone does **not** tell you whether something speeds up. Compare it with the sign of the velocity:

| velocity | acceleration | what happens |
|---|---|---|
| + | + | speeds up, moving in the + direction |
| + | − | slows down |
| − | − | speeds up, moving in the − direction |
| − | + | slows down |

*Notice: same signs speed up, opposite signs slow down.*

**Why.** Speeding up means the size of the velocity grows. If the velocity is −10 m/s and the acceleration is −5 m/s², after 2 s it is −20 m/s. That is faster, just in the negative direction.

## Turning is acceleration too

Velocity is a vector, so it changes when its direction changes, even at a steady speed. A car going around a bend at a steady 20 km/h is accelerating, because the direction of its velocity keeps changing. This matters a lot for circular motion and orbits.

## Finding the new velocity

Rearranging $a = \dfrac{v_{\text{end}} - v_{\text{start}}}{\Delta t}$ gives

$$v_{\text{end}} = v_{\text{start}} + a\,\Delta t$$

Starting at 4 m/s with $a = 3$ m/s², after 6 s the velocity is $4 + 3 \times 6 = 22$ m/s.

:::example
title: A car brakes from 24 m/s with an acceleration of −6 m/s². How long does it take to stop?

1. Stopping means $v_{\text{end}} = 0$. Write $a = \dfrac{\Delta v}{\Delta t}$ with what we know: $-6 = \dfrac{0 - 24}{\Delta t}$.
   why: The change in velocity is end minus start.
   uses: [velocity]

2. Rearrange for the time: $\Delta t = \dfrac{0 - 24}{-6}$.
   why: Multiply both sides by Δt, then divide by −6.
   uses: [rearranging-formulas]

3. $\Delta t = \dfrac{-24}{-6} = 4$ s.
   why: A negative divided by a negative is positive, as a time should be.
   uses: []

4. Check: losing 6 m/s every second, the car goes 24, 18, 12, 6, 0. That is **4 seconds**.
   why: Counting it out second by second confirms the formula.
   uses: []
:::

:::practice
q: A cyclist speeds up from rest to 20 m/s in 4 s. Find the acceleration.
answer: $a = \dfrac{20 - 0}{4} =$ **5 m/s²**.
:::

:::problems
q: A car goes from 0 to 20 m/s in 4 s. Find its acceleration.
answer: $\dfrac{20}{4} =$ **5 m/s²**.

q: A car goes from 10 m/s to 25 m/s in 5 s. Find its acceleration.
answer: $\dfrac{15}{5} =$ **3 m/s²**.

q: A car goes from 30 m/s to 10 m/s in 4 s. Find its acceleration.
answer: $\dfrac{-20}{4} =$ **−5 m/s²**. It is slowing down.

q: A car moves at a steady 15 m/s in a straight line for 10 s. Find its acceleration.
answer: The velocity does not change: **0 m/s²**.

q: An object's velocity changes from −10 m/s to −20 m/s in 2 s. Find a. Is it speeding up or slowing down?
answer: $a = \dfrac{-20 - (-10)}{2} =$ **−5 m/s²**. v and a are both negative, so it is **speeding up** (in the negative direction).

q: An object's velocity changes from −20 m/s to −10 m/s in 5 s. Find a. Is it speeding up or slowing down?
answer: $a = \dfrac{-10 - (-20)}{5} =$ **+2 m/s²**. v is negative and a is positive, so it is **slowing down**.

q: An object moves at +5 m/s with an acceleration of −2 m/s². Is it speeding up or slowing down?
answer: Opposite signs: **slowing down**.

q: An object starts at 4 m/s and accelerates at 3 m/s² for 6 s. Find its final velocity.
answer: $4 + 3 \times 6 =$ **22 m/s**.

q: An object starts from rest and accelerates at 2.5 m/s² for 8 s. Find its final velocity.
answer: $0 + 2.5 \times 8 =$ **20 m/s**.

q: A sports car reaches 100 km/h from rest in 4 s. Find its acceleration in m/s².
answer: $100 \div 3.6 \approx 27.8$ m/s. $a = \dfrac{27.8}{4} \approx$ **6.9 m/s²**.

q: A car braking at −6 m/s² starts at 24 m/s. How long does it take to stop?
answer: $\Delta t = \dfrac{0 - 24}{-6} =$ **4 s**.

q: A stone is dropped. It speeds up by 9.8 m/s every second. How fast is it falling after 3 s?
answer: $0 + 9.8 \times 3 =$ **29.4 m/s**.

q: A ball is thrown straight up at 15 m/s. Taking up as positive, its acceleration is −9.8 m/s². Find its velocity after 2 s. Which way is it moving?
answer: $15 + (-9.8)(2) = 15 - 19.6 =$ **−4.6 m/s**. The minus sign means it is now **moving down**, having passed the top.

q: A car drives around a roundabout at a steady 20 km/h. Is it accelerating?
answer: **Yes.** Its speed is steady, but the direction of its velocity keeps changing, and velocity is a vector.
:::
