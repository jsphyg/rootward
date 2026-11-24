---
id: spring-energy
title: Energy stored in a spring
prereqs: [potential-energy, hookes-law]
big: A stretched or squashed spring stores energy, $\tfrac{1}{2}kx^2$, because the force needed grows steadily as you stretch it.
recap: A spring stretched or squashed by x stores elastic potential energy $E = \tfrac{1}{2}kx^2$. The half appears because the force grows from 0 up to $kx$, so the average force is $\tfrac{1}{2}kx$. On a force-stretch graph, the energy is the area of the triangle under the line. Double the stretch and the energy goes up four times.
check:
  q: A spring with $k = 200$ N/m is stretched by 0.1 m. How much energy does it store?
  options: ["1 J", "2 J", "20 J", "10 J"]
  answer: 0
  why: $E = \tfrac{1}{2}kx^2 = \tfrac{1}{2} \times 200 \times 0.01 = 1$ J. 2 J leaves out the half. 20 J is $kx$, which is the force in newtons, not an energy. 10 J is $\tfrac{1}{2}kx$, which forgets to square the stretch.
---

## Springs store energy

Pull back a catapult and let go: the stone flies. Squash a toy's spring and it jumps. A stretched or squashed spring can do work as it springs back, so it holds energy. This is {{elastic-pe|elastic potential energy}}.

## Why there is a half

By [[hookes-law|Hooke's law]], the force needed to stretch a spring is $F = kx$. That force is not steady. At the start it is zero, and it grows as you stretch.

| Stretch x | Force needed (k = 200 N/m) |
|---|---|
| 0 m | 0 N |
| 0.05 m | 10 N |
| 0.10 m | 20 N |

*Notice: over the whole stretch, the force goes evenly from 0 to 20 N, so on average it is 10 N.*

The work done is the **average** force times the distance: $10 \times 0.1 = 1$ J. In general, the average force is $\tfrac{1}{2}kx$, and

$$E = \tfrac{1}{2}kx \times x = \tfrac{1}{2}kx^2$$

## The area under the graph

Plot force against stretch. Hooke's law gives a straight line through the origin. The work done stretching the spring is the **area under that line**, a triangle with base x and height $kx$:

:::widget plot
fn: x >= 0 ? 2*x : NaN
x: -2 14
y: -3 28
points: 10,20
xname: x (cm)
yname: F (N)
label: k = 200 N/m
labelat: topleft
caption: The area of the triangle under the line, up to 10 cm (0.1 m), is ½ × 0.1 × 20 = 1 J. That is the energy stored.
:::

This "area under a force graph" idea works for any force that changes, and the page on work done by a changing force uses it with calculus.

## Squared again

Because x is squared, doubling the stretch stores **four** times the energy. A bow drawn twice as far gives its arrow four times the energy.

:::example
title: A toy spring gun has $k = 800$ N/m. Its spring is squashed 5 cm and fires a 0.02 kg ball. How fast does the ball leave, if all the spring's energy goes into it?

1. Convert: $x = 5$ cm $= 0.05$ m.
   why: k is in newtons per metre, so x must be in metres.
   uses: []

2. Energy stored: $\tfrac{1}{2} \times 800 \times 0.05^2 = 400 \times 0.0025 = 1$ J.
   why: Elastic potential energy, $\tfrac{1}{2}kx^2$.
   uses: [hookes-law]

3. All of it becomes kinetic energy: $1 = \tfrac{1}{2} \times 0.02 \times v^2 = 0.01v^2$, so $v^2 = 100$.
   why: Energy is conserved; the spring's energy turns into the ball's motion.
   uses: [potential-energy]

4. **v = 10 m/s.**
   why: Square root of 100.
   uses: []
:::

:::practice
q: A spring with $k = 500$ N/m is stretched by 0.2 m. How much energy does it store?
answer: $\tfrac{1}{2} \times 500 \times 0.04 =$ **10 J**.
:::

:::problems
q: A spring with $k = 100$ N/m is stretched 0.3 m. Find the energy stored.
answer: $\tfrac{1}{2} \times 100 \times 0.09 =$ **4.5 J**.

q: A spring with $k = 400$ N/m is squashed 5 cm. Find the energy stored.
answer: $\tfrac{1}{2} \times 400 \times 0.0025 =$ **0.5 J**.

q: The stretch of a spring doubles. What happens to the energy stored?
answer: **It becomes 4 times as big.**

q: A spring with $k = 400$ N/m stores 8 J. How far is it stretched?
answer: $8 = 200x^2$, so $x^2 = 0.04$ and **x = 0.2 m**.

q: A spring with $k = 300$ N/m is stretched 0.2 m. Find the force at the end and the energy, using the triangle area.
answer: Force $300 \times 0.2 = 60$ N. Area $\tfrac{1}{2} \times 0.2 \times 60 =$ **6 J**, the same as $\tfrac{1}{2}kx^2$.

q: A spring with $k = 1000$ N/m is squashed 0.1 m and launches a 0.5 kg block across a smooth floor. How fast does the block go?
answer: Energy $\tfrac{1}{2} \times 1000 \times 0.01 = 5$ J. $5 = \tfrac{1}{2} \times 0.5 \times v^2$, so $v^2 = 20$ and **v ≈ 4.47 m/s**.

q: That block then slides up a smooth ramp. How high does it get?
answer: All 5 J becomes PE: $h = \dfrac{5}{0.5 \times 9.8} \approx$ **1.02 m**.

q: A bow acts like a spring. It is drawn back 0.5 m, where it pulls with 200 N. How much energy does it store?
answer: Triangle area: $\tfrac{1}{2} \times 0.5 \times 200 =$ **50 J**.

q: That bow fires a 0.025 kg arrow with all 50 J. How fast does the arrow go?
answer: $50 = \tfrac{1}{2} \times 0.025 \times v^2$, so $v^2 = 4000$ and **v ≈ 63 m/s**.

q: Spring A ($k = 100$ N/m) and spring B ($k = 400$ N/m) are each pulled with 20 N. Which stores more energy?
answer: A stretches 0.2 m and stores $\tfrac{1}{2} \times 100 \times 0.04 = 2$ J. B stretches 0.05 m and stores $0.5$ J. **The floppier spring A stores 4 times more**, because it stretches further under the same force.

q: Why can't you find the energy in a spring with $W = Fd$, using the final force?
answer: **The force is not steady.** It grows from 0, so using the final force all the way gives twice the true answer.
:::
