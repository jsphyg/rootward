---
id: velocity
title: Speed and velocity
prereqs: [position-displacement, calculus:slope]
big: Velocity is how fast an object's position changes and in which direction, found by dividing displacement by time; on a position–time graph it is the slope.
recap: Average velocity is displacement divided by time, $v = \dfrac{\Delta x}{\Delta t}$, in m/s. Its sign shows the direction. Speed is how fast without the direction; average speed is total distance divided by time. On a graph of position against time, the velocity is the slope.
check:
  q: A cyclist is at x = 10 m when t = 2 s, and at x = 40 m when t = 8 s. What is the average velocity?
  options: ["5 m/s", "6.67 m/s", "3.75 m/s", "0.2 m/s"]
  answer: 0
  why: $v = \dfrac{\Delta x}{\Delta t} = \dfrac{40 - 10}{8 - 2} = \dfrac{30}{6} = 5$ m/s. 6.67 uses the end position, 40, instead of the change. 3.75 divides by the end time, 8, instead of the time taken. 0.2 is time over distance, upside down.
---

## Position every second

A runner jogs along a straight path. Here is where they are each second:

| time t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| position x (m) | 2 | 5 | 8 | 11 | 14 |

*Notice: every second, the position goes up by the same 3 m.*

That steady 3 m each second is the runner's velocity: 3 metres per second, 3 m/s.

## Velocity is change in position over change in time

The average {{velocity|velocity}} over any stretch of time is

$$v = \frac{\Delta x}{\Delta t} = \frac{\text{displacement}}{\text{time taken}}$$

From t = 1 s to t = 4 s: $v = \dfrac{14 - 5}{4 - 1} = \dfrac{9}{3} = 3$ m/s.

The unit is metres divided by seconds, m/s.

Velocity can be negative. If something moves from x = 50 m to x = 20 m in 6 s, then $v = \dfrac{20 - 50}{6} = -5$ m/s. The minus sign means it moved in the negative direction.

## Speed and velocity are different

{{speed|Speed}} is how fast, with no direction. It is the size of the velocity. A velocity of −5 m/s is a speed of 5 m/s.

For a whole trip, they can be very different:

$$\text{average speed} = \frac{\text{total distance}}{\text{time}} \qquad \text{average velocity} = \frac{\text{displacement}}{\text{time}}$$

Walk 800 m to a shop and back in 20 minutes (1200 s). Your average speed is $\frac{1600}{1200} \approx 1.33$ m/s. Your average velocity is $\frac{0}{1200} = 0$, because you ended where you started.

## Velocity is the slope of a position–time graph

Plot the runner's position against time:

:::widget plot
fn: 2 + 3*x
x: -0.5 4.6
y: -1 16
points: 0,2; 1,5; 4,14
xname: t (s)
yname: x (m)
label: x = 2 + 3t
labelat: topleft
caption: A straight line. Between t = 1 and t = 4 it rises 9 m over 3 s, a slope of 3 m/s, the runner's velocity.
:::

The [[calculus:slope|slope]] of a line is rise over run. Here the rise is a change in position, Δx, and the run is a change in time, Δt. So the slope of a position–time graph is the velocity.

**Why it works.** Slope is $\frac{\text{rise}}{\text{run}} = \frac{\Delta x}{\Delta t}$, which is exactly the definition of velocity. The graph and the formula are the same idea.

That gives a quick way to read motion from a graph:

| Position–time graph | Motion |
|---|---|
| steep line going up | fast, in the positive direction |
| gentle line going up | slow, in the positive direction |
| flat line | standing still (velocity 0) |
| line going down | moving in the negative direction |

## Using the formula

Rearranged, $v = \dfrac{\Delta x}{\Delta t}$ gives the other two forms:

$$\Delta x = v\,\Delta t \qquad \Delta t = \frac{\Delta x}{v}$$

At 12 m/s for 25 s, you cover $12 \times 25 = 300$ m.

:::example
title: You walk 300 m east in 100 s, then 100 m west in 100 s. Find your average speed and your average velocity.

1. Total distance: $300 + 100 = 400$ m. Total time: $200$ s.
   why: Average speed uses the whole length of the path.
   uses: [position-displacement]

2. Average speed: $\dfrac{400}{200} = 2$ m/s.
   why: Speed is distance over time.
   uses: []

3. Displacement, with east positive: $+300 - 100 = +200$ m.
   why: Velocity uses where you ended up compared with where you began.
   uses: [position-displacement]

4. Average velocity: $\dfrac{200}{200} = 1$ m/s, east.
   why: Velocity is displacement over time, and the plus sign means east.
   uses: []

5. **Average speed 2 m/s. Average velocity 1 m/s east.** Speed is bigger because the walk back added distance but undid some displacement.
   why: Comparing the two shows what each one measures.
   uses: []
:::

:::practice
q: An object moves from x = 50 m to x = 20 m in 6 s. Find its average velocity and its average speed.
answer: $v = \dfrac{20 - 50}{6} =$ **−5 m/s** (5 m/s in the negative direction). It moved in one direction only, so its average speed is **5 m/s**.
:::

:::problems
q: A runner covers 100 m in 20 s along a straight track. Find the average velocity.
answer: $\dfrac{100}{20} =$ **5 m/s** along the track.

q: A cyclist is at x = 10 m at t = 2 s and at x = 40 m at t = 8 s. Find the average velocity.
answer: $\dfrac{30}{6} =$ **5 m/s**.

q: A car goes from x = 50 m to x = 20 m in 6 s. Find its velocity.
answer: $\dfrac{-30}{6} =$ **−5 m/s**.

q: An object has a velocity of −8 m/s. What is its speed?
answer: Speed is the size of the velocity: **8 m/s**.

q: A position–time graph is a straight line from (0 s, 2 m) to (4 s, 14 m). Find the velocity.
answer: Slope $= \dfrac{14 - 2}{4 - 0} =$ **3 m/s**.

q: A position–time graph is a flat line at x = 7 m. What is the velocity?
answer: The position does not change: **0 m/s**, standing still at 7 m.

q: A position–time graph is a straight line from (0 s, 20 m) to (5 s, 5 m). Find the velocity.
answer: $\dfrac{5 - 20}{5} =$ **−3 m/s**. The line goes down, so the motion is in the negative direction.

q: How far does a car go in 25 s at 12 m/s?
answer: $\Delta x = v\,\Delta t = 12 \times 25 =$ **300 m**.

q: How long does it take to walk 1.5 km at 3 m/s?
answer: $1.5$ km $= 1500$ m. $\Delta t = \dfrac{1500}{3} =$ **500 s** (8 min 20 s).

q: You walk 800 m to a shop and back in 1200 s. Find your average speed and average velocity.
answer: Speed $\dfrac{1600}{1200} \approx$ **1.33 m/s**. Velocity **0**, since your displacement is 0.

q: A car drives at 60 km/h for 2 hours, then at 40 km/h for 1 hour, in the same direction. Find its average speed.
answer: Distance $120 + 40 = 160$ km in 3 h: $\dfrac{160}{3} \approx$ **53.3 km/h**. Not 50: it spent longer at the faster speed.

q: A sprinter runs 100 m in 9.58 s. Find the average speed in m/s and in km/h.
answer: $\dfrac{100}{9.58} \approx$ **10.4 m/s**. Times 3.6: about **37.6 km/h**.

q: Light travels at $3.0 \times 10^8$ m/s. The Sun is $1.5 \times 10^{11}$ m away. How long does sunlight take to reach the Earth?
answer: $\Delta t = \dfrac{1.5 \times 10^{11}}{3.0 \times 10^8} = 0.5 \times 10^3 =$ **500 s**, a little over 8 minutes.

q: A dog runs from x = 0 to x = 30 m in 5 s, then stays still for 5 s. Find its average velocity over the 10 s.
answer: Displacement 30 m in 10 s: **3 m/s**. Its velocity was 6 m/s while running and 0 while still; the average is lower than the running speed.
:::
