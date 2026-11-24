---
id: motion-graphs
title: Reading motion graphs
prereqs: [acceleration]
big: A graph of velocity against time tells the whole story of a motion along a line: its slope is the acceleration, and the area under it is the displacement.
recap: On a position–time graph, the slope is the velocity. On a velocity–time graph, the slope is the acceleration, and the area between the line and the time axis is the displacement. Area below the time axis counts as negative.
check:
  q: A velocity–time graph is a flat line at 6 m/s from t = 0 to t = 5 s. What is the displacement?
  options: ["30 m", "6 m", "0 m", "1.2 m"]
  answer: 0
  why: The area under the line is a rectangle, 6 m/s high and 5 s wide: $6 \times 5 = 30$ m. 6 m reads the height of the graph, which is the velocity, not the displacement. 0 m confuses the flat line's slope (zero acceleration) with zero motion. 1.2 m divides instead of multiplying.
---

## Two graphs of the same trip

A car starts from rest and speeds up steadily at 4 m/s² for 4 seconds. Here is its velocity against time:

:::widget plot
fn: x >= 0 ? 4*x : NaN
x: -0.5 5
y: -2 18
points: 0,0; 4,16
xname: t (s)
yname: v (m/s)
label: v = 4t
labelat: topleft
caption: A straight line rising 16 m/s over 4 s. The slope, 4 m/s², is the acceleration.
:::

And here is its position against time:

:::widget plot
fn: x >= 0 ? 2*x*x : NaN
x: -0.5 5
y: -3 36
points: 1,2; 2,8; 4,32
xname: t (s)
yname: x (m)
label: x = 2t²
labelat: topleft
caption: A curve that gets steeper. The car covers more ground each second, because it is going faster.
:::

*Notice: the velocity graph is a straight line, but the position graph curves. A steady change in velocity means position changes faster and faster.*

## Slopes

The slope of each graph is the rate of change of the thing plotted:

| Graph | Its slope is | Because |
|---|---|---|
| position against time | velocity | $\frac{\Delta x}{\Delta t}$ is velocity |
| velocity against time | acceleration | $\frac{\Delta v}{\Delta t}$ is acceleration |

On the velocity graph above, the slope is $\frac{16}{4} = 4$ m/s², the acceleration.

On a curved position graph, the steepness at any moment is the velocity at that moment. Getting steeper means speeding up. Flattening out means slowing down.

## Area under a velocity graph is displacement

For a steady velocity, displacement is velocity times time. On a velocity–time graph, that is a rectangle: height v, width Δt. Its area is $v \times \Delta t$, the displacement.

**Why it works for changing velocity too.** Cut the time into thin slices. In each slice, the velocity barely changes, so the distance covered is about v times the slice's width, the area of a thin strip. Adding all the strips gives the area under the line. Thinner slices make it exact.^[n_area_integral]

For the car above, the area is a triangle:

$$\text{area} = \tfrac{1}{2} \times 4 \text{ s} \times 16 \text{ m/s} = 32 \text{ m}$$

The position graph agrees: at t = 4 s, x = 32 m.

The units check out: the height is in m/s and the width in s, so the area is in $\frac{\text{m}}{\text{s}} \times \text{s} = \text{m}$.

## Area below the axis

Velocity below the time axis is negative, so the object moves backwards. Area below the axis counts as **negative** displacement. To find the total displacement, add the areas above and subtract the areas below. To find the distance, add them all as positive.

## Reading the shapes

| Velocity–time graph | Motion |
|---|---|
| flat line on the axis | standing still |
| flat line above the axis | steady velocity, no acceleration |
| line sloping up | speeding up (if above the axis) |
| line sloping down toward the axis | slowing down |
| line crossing the axis | stops and turns around |

:::example
title: A car speeds up from 0 to 20 m/s in 5 s, drives at 20 m/s for 10 s, then slows to a stop in 5 s. Find the total displacement.

1. Sketch the velocity–time graph: up from 0 to 20, flat at 20, back down to 0. It is a trapezium shape.
   why: A sketch shows which simple shapes make up the area.
   uses: []

2. First triangle (speeding up): $\tfrac{1}{2} \times 5 \times 20 = 50$ m.
   why: The area of a triangle is half base times height.
   uses: []

3. Rectangle (steady): $10 \times 20 = 200$ m.
   why: At a steady velocity, displacement is velocity times time.
   uses: [velocity]

4. Last triangle (slowing down): $\tfrac{1}{2} \times 5 \times 20 = 50$ m.
   why: Same shape as the first triangle.
   uses: []

5. Total: $50 + 200 + 50 =$ **300 m**. The average velocity is $\frac{300}{20} = 15$ m/s.
   why: The total area under a velocity–time graph is the total displacement.
   uses: [acceleration]
:::

:::practice
q: A velocity–time graph goes in a straight line from (0 s, 10 m/s) to (5 s, 0 m/s). Find the acceleration and the displacement.
answer: Slope: $\dfrac{0 - 10}{5} =$ **−2 m/s²**. Area of the triangle: $\tfrac{1}{2} \times 5 \times 10 =$ **25 m**.
:::

:::problems
q: A position–time graph is a straight line from (0 s, 0 m) to (5 s, 20 m). Find the velocity.
answer: Slope $\dfrac{20}{5} =$ **4 m/s**.

q: A velocity–time graph is a straight line from (0 s, 2 m/s) to (4 s, 14 m/s). Find the acceleration.
answer: Slope $\dfrac{14 - 2}{4} =$ **3 m/s²**.

q: A velocity–time graph is flat at 6 m/s from 0 to 5 s. Find the displacement.
answer: Rectangle: $6 \times 5 =$ **30 m**.

q: A velocity–time graph goes from (0 s, 0 m/s) to (4 s, 16 m/s). Find the displacement.
answer: Triangle: $\tfrac{1}{2} \times 4 \times 16 =$ **32 m**.

q: A velocity–time graph goes from (0 s, 4 m/s) to (6 s, 16 m/s). Find the acceleration and the displacement.
answer: Slope $\dfrac{12}{6} =$ **2 m/s²**. The area is a trapezium: average height $\dfrac{4 + 16}{2} = 10$, times width 6: **60 m**.

q: A velocity–time graph is flat at −3 m/s for 4 s. Find the displacement.
answer: The area is below the axis: $-3 \times 4 =$ **−12 m**.

q: A position–time graph is a flat line. Describe the motion.
answer: **Standing still.** The position does not change.

q: A velocity–time graph is a flat line at 8 m/s. Describe the motion.
answer: **Moving steadily at 8 m/s, with no acceleration.**

q: A position–time graph curves upward, getting steeper. What is happening to the velocity?
answer: The slope is increasing, so **the object is speeding up**.

q: A velocity–time graph goes in a straight line from (0 s, 6 m/s) to (4 s, −6 m/s). Find the acceleration, the displacement and the distance.
answer: Slope $\dfrac{-12}{4} =$ **−3 m/s²**. It crosses zero at t = 2 s. Area above: $\tfrac{1}{2} \times 2 \times 6 = 6$. Area below: −6. **Displacement 0 m, distance 12 m.** It went forward 6 m and came back.

q: A car speeds up from 0 to 20 m/s in 5 s, holds 20 m/s for 10 s, then stops in 5 s. Find the displacement.
answer: $50 + 200 + 50 =$ **300 m**.

q: A train speeds up from 0 to 30 m/s in 60 s, then holds that speed for 120 s. How far does it go?
answer: Triangle $\tfrac{1}{2} \times 60 \times 30 = 900$ m. Rectangle $120 \times 30 = 3600$ m. Total **4500 m** (4.5 km).

q: What are the units of the area under a velocity–time graph, and why?
answer: The height is in m/s and the width in s, so $\frac{\text{m}}{\text{s}} \times \text{s} =$ **m**, a displacement.
:::
