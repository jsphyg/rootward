---
id: projectile-motion
title: Projectile motion
prereqs: [free-fall, vector-components]
big: A thrown object moves sideways at a steady speed while it falls exactly like a dropped one, and the two motions happen at the same time without affecting each other.
recap: Split a projectile's motion into sideways and up-down. Sideways: no acceleration, so $x = u_x t$. Up-down: free fall, with $a = -9.8$ m/s². Find the launch components with $u_x = u\cos\theta$ and $u_y = u\sin\theta$, use the vertical motion to find the time, then use that time for the sideways distance.
check:
  q: A ball rolls off a table at 3 m/s and lands 0.4 s later. How far from the table's edge does it land?
  options: ["1.2 m", "0.78 m", "7.5 m", "3 m"]
  answer: 0
  why: Sideways, nothing speeds the ball up or slows it down (ignoring air), so it keeps its 3 m/s: $3 \times 0.4 = 1.2$ m. 0.78 m is how far it falls, $4.9 \times 0.4^2$, not how far out it goes. 7.5 m divides instead of multiplying. 3 m mixes up the speed with the distance.
---

## Two balls, one moment

Roll one ball off a table at 3 m/s. At the same instant, drop a second ball from the same height. Which lands first?

They land **together**. Here is the rolling ball, every 0.1 s:

| time (s) | 0 | 0.1 | 0.2 | 0.3 | 0.4 |
|---|---|---|---|---|---|
| distance out (m) | 0 | 0.3 | 0.6 | 0.9 | 1.2 |
| distance fallen (m) | 0 | 0.049 | 0.196 | 0.441 | 0.784 |

*Notice: the "out" row grows by the same amount each step, like steady motion. The "fallen" row is exactly the free-fall row for a dropped ball.*

The sideways motion does not slow the fall, and the fall does not slow the sideways motion. Gravity pulls only downward, so it changes only the up-down part of the velocity.

This is the key to every {{projectile|projectile}} problem: **treat sideways and up-down as two separate problems that share the same clock.**

## The two motions

| | Sideways (x) | Up-down (y) |
|---|---|---|
| acceleration | 0 | −9.8 m/s² (up positive) |
| velocity | stays $u_x$ | $v_y = u_y - 9.8t$ |
| displacement | $x = u_x t$ | $y = u_y t - 4.9t^2$ |

Time is the only thing they share. Usually you find the time from the up-down motion, then use it sideways.

## Launching at an angle

A ball launched at speed u and angle θ above the ground has [[vector-components|components]]:

$$u_x = u\cos\theta \qquad u_y = u\sin\theta$$

Here is a ball launched at 20 m/s at 45°:

:::widget plot
fn: x >= 0 && x <= 40.8 ? x - 0.0245*x*x : NaN
x: -2 44
y: -2 14
points: 20.4,10.2
xname: x (m)
yname: y (m)
caption: The path is a curve called a parabola. It rises to 10.2 m at the halfway point, then comes down the same way it went up, landing 40.8 m away.
:::

At the top, the up-down velocity is 0, but the sideways velocity is still $u_x$. So the ball is never fully stopped, unless it was thrown straight up.

## Useful results on level ground

For a launch and landing at the same height:

- **Time in the air.** The ball lands when $y = 0$: $u_y t - 4.9t^2 = 0$, so $t = \dfrac{u_y}{4.9} = \dfrac{2u_y}{9.8}$.
- **Greatest height.** At the top $v_y = 0$, so from $v^2 = u^2 + 2as$: $h = \dfrac{u_y^2}{2 \times 9.8}$.
- **Range** (sideways distance): $u_x$ times the time in the air.

**Why 45° goes farthest.** A steep launch gives lots of time in the air but little sideways speed. A shallow launch gives lots of sideways speed but little time. 45° is the best balance, ignoring air. Angles the same amount either side of 45°, like 30° and 60°, give the same range.^[n_air_resistance]

:::example
title: A football is kicked at 20 m/s at 30° above level ground. Find the time in the air, the range and the greatest height.

1. Components: $u_x = 20\cos 30° \approx 17.32$ m/s and $u_y = 20\sin 30° = 10$ m/s.
   why: The two motions need their own starting velocities.
   uses: [vector-components]

2. Time in the air, from the vertical motion: $0 = 10t - 4.9t^2 = t(10 - 4.9t)$, so $t = 0$ (the kick) or $t = \dfrac{10}{4.9} \approx 2.04$ s.
   why: It lands when its height is back to 0.
   uses: [free-fall]

3. Range, from the sideways motion: $x = 17.32 \times 2.04 \approx 35.3$ m.
   why: Sideways speed is steady, so distance is speed times the shared time.
   uses: []

4. Greatest height: $h = \dfrac{10^2}{2 \times 9.8} = \dfrac{100}{19.6} \approx 5.1$ m. **In the air about 2.04 s, landing about 35.3 m away, reaching about 5.1 m high.**
   why: At the top the vertical velocity is 0; the sideways part plays no role in the height.
   uses: [constant-acceleration]
:::

:::practice
q: A stone is thrown horizontally at 15 m/s from the top of a 20 m cliff. How far from the base of the cliff does it land?
answer: Fall time: $20 = 4.9t^2$, $t \approx 2.02$ s. Sideways: $15 \times 2.02 \approx$ **30.3 m**.
:::

:::problems
q: A ball rolls off a table at 3 m/s and lands 0.4 s later. How far out does it land?
answer: $3 \times 0.4 =$ **1.2 m**.

q: A table is 0.8 m high. How long does a ball rolling off it take to land?
answer: Up-down only: $0.8 = 4.9t^2$, $t \approx$ **0.40 s**. Its sideways speed makes no difference.

q: A bullet is fired horizontally and another is dropped from the same height at the same moment. Which lands first?
answer: **They land together.** Both start with no up-down velocity, and both fall with g.

q: A stone is thrown horizontally at 15 m/s from a 20 m cliff. How long is it in the air, and how far out does it land?
answer: $t = \sqrt{\frac{20}{4.9}} \approx$ **2.02 s**. $15 \times 2.02 \approx$ **30.3 m**.

q: For the stone in the last problem, how fast is it moving when it hits the ground?
answer: Sideways: still 15 m/s. Down: $9.8 \times 2.02 \approx 19.8$ m/s. Speed $\sqrt{15^2 + 19.8^2} \approx$ **24.8 m/s**.

q: A ball is launched at 20 m/s at 30°. Find its launch components.
answer: $u_x = 20\cos 30° \approx$ **17.3 m/s**, $u_y = 20\sin 30° =$ **10 m/s**.

q: For that ball, on level ground, find the time in the air.
answer: $t = \dfrac{2 \times 10}{9.8} \approx$ **2.04 s**.

q: For that ball, find the range and greatest height.
answer: Range $17.32 \times 2.04 \approx$ **35.3 m**. Height $\dfrac{100}{19.6} \approx$ **5.1 m**.

q: What is the ball's velocity at the top of its path?
answer: The up-down part is 0, so only the sideways part is left: **about 17.3 m/s, horizontal**. Its acceleration is still 9.8 m/s² downward.

q: A ball is launched at 20 m/s at 45° on level ground. Find its range.
answer: $u_x = u_y \approx 14.14$ m/s. Time $\dfrac{2 \times 14.14}{9.8} \approx 2.89$ s. Range $14.14 \times 2.89 \approx$ **40.8 m**.

q: The same ball is launched at 60° instead. Find its range and compare with 30°.
answer: $u_x = 10$, $u_y \approx 17.32$. Time $\approx 3.53$ s. Range $10 \times 3.53 \approx$ **35.3 m**, the same as at 30°. It goes higher but not farther.

q: A plane flying level at 50 m/s, 80 m above the ground, drops a supply box. How far ahead of the drop point does it land?
answer: Fall time: $80 = 4.9t^2$, $t \approx 4.04$ s. The box keeps the plane's 50 m/s sideways: $50 \times 4.04 \approx$ **202 m** ahead.

q: A ball thrown horizontally at 10 m/s lands 15 m away. How high was it thrown from?
answer: Time: $\dfrac{15}{10} = 1.5$ s. Height: $4.9 \times 1.5^2 \approx$ **11.0 m**.

q: Ignoring air, what launch angle gives the longest range on level ground?
answer: **45°.**
:::
