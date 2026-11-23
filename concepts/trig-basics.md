---
id: trig-basics
title: Sine, cosine, tangent
prereqs: [graphs]
big: Sine, cosine and tangent turn an angle into a number. They start as side ratios in a right triangle, and a circle of radius 1 stretches them to every angle.
recap: In a right triangle, for an angle θ, $\sin\theta = \dfrac{\text{opposite}}{\text{hypotenuse}}$, $\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}$ and $\tan\theta = \dfrac{\text{opposite}}{\text{adjacent}}$. On a circle of radius 1, the point at angle θ is $(\cos\theta, \sin\theta)$. Calculus measures angles in radians, where a full turn is $2\pi$.
check:
  q: A right triangle has sides 3, 4 and 5. The angle θ is opposite the side of length 3. What is $\sin\theta$?
  options: ["$\tfrac{3}{5}$", "$\tfrac{4}{5}$", "$\tfrac{3}{4}$", "$\tfrac{5}{3}$"]
  answer: 0
  why: Sine is opposite over hypotenuse. The hypotenuse is the longest side, 5, and the side opposite θ is 3. So $\sin\theta = \tfrac{3}{5}$. $\tfrac{4}{5}$ is adjacent over hypotenuse, which is the cosine. $\tfrac{3}{4}$ is opposite over adjacent, which is the tangent. $\tfrac{5}{3}$ is upside down.
---

## Same angle, same shape

Draw a right triangle with a 30° angle. Measure the side across from that angle, and the longest side. Now draw a bigger one, with the same 30° angle:

| triangle | side opposite 30° | longest side | opposite ÷ longest |
|---|---|---|---|
| small | 1 | 2 | 0.5 |
| medium | 3 | 6 | 0.5 |
| large | 7 | 14 | 0.5 |

*Notice: the sizes change, but the ratio does not. With a 30° angle, the opposite side is always exactly half the longest side.*

**Why it works.** Triangles with the same angles are the same shape, just scaled. Scaling multiplies every side by the same number, so the ratio of any two sides stays the same. So each angle has its own fixed ratios. Sine, cosine and tangent are the names of those ratios.

## Naming the sides

In a right triangle, pick one of the two sharp angles and call it θ (the Greek letter theta, a common name for an angle).

- The {{hypotenuse|hypotenuse}} is the longest side, across from the right angle.
- The **opposite** side is across from θ.
- The **adjacent** side is the other short side, the one touching θ.

## The three ratios

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

They are called the {{sine|sine}}, the {{cosine|cosine}} and the {{tan-ratio|tangent}}. A memory trick: **SOH CAH TOA**. Sine is Opposite over Hypotenuse, Cosine is Adjacent over Hypotenuse, Tangent is Opposite over Adjacent.

**Tangent is sine divided by cosine.** Divide the first two ratios. The hypotenuses cancel:

$$\frac{\sin\theta}{\cos\theta} = \frac{\text{opp} / \text{hyp}}{\text{adj} / \text{hyp}} = \frac{\text{opp}}{\text{adj}} = \tan\theta$$

Some angles have exact values that come up again and again:

| angle | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| $\sin$ | 0 | $\tfrac{1}{2}$ | $\tfrac{\sqrt{2}}{2}$ | $\tfrac{\sqrt{3}}{2}$ | 1 |
| $\cos$ | 1 | $\tfrac{\sqrt{3}}{2}$ | $\tfrac{\sqrt{2}}{2}$ | $\tfrac{1}{2}$ | 0 |
| $\tan$ | 0 | $\tfrac{1}{\sqrt{3}}$ | 1 | $\sqrt{3}$ | none |

*Notice: sine climbs from 0 to 1 while cosine falls from 1 to 0. Tan at 90° would mean dividing by $\cos 90° = 0$, so it has no value.*

## Radians: measuring angles by distance

Degrees split a full turn into 360 parts.^[n_degrees] Calculus uses a different unit, the {{radian|radian}}.

Take a circle of radius 1. Walk around its edge from the right-hand side, going anticlockwise. The angle in radians is **how far you have walked**.

- A full turn is the whole way around. The distance around a circle of radius 1 is $2\pi$, about 6.28. So a full turn is $2\pi$ radians.
- A half turn is $\pi$ radians, about 3.14.
- A quarter turn (a right angle) is $\dfrac{\pi}{2}$ radians.

Since $360° = 2\pi$ radians, to turn degrees into radians, multiply by $\dfrac{\pi}{180}$. So $60° = 60 \cdot \dfrac{\pi}{180} = \dfrac{\pi}{3}$.

**Why calculus uses radians.** In radians, the derivative formulas for sine and cosine come out with no extra numbers in them. In degrees, every one would carry a messy factor of $\dfrac{\pi}{180}$.^[n_radian_why]

## The unit circle: every angle at once

A triangle can only hold angles between 0° and 90°. To handle any angle, use a circle of radius 1, centred at the origin. It is called the {{unit-circle|unit circle}}.

Turn by an angle θ from the right-hand side, anticlockwise, and mark the point you reach on the circle. Then:

$$\text{the point is } (\cos\theta, \sin\theta)$$

The cosine is how far **across** the point is. The sine is how far **up** it is.

**Why this matches the triangle.** For an angle between 0° and 90°, drop a line from the point straight down to the x-axis. That makes a right triangle whose hypotenuse is the radius, 1. Then $\sin\theta = \dfrac{\text{opposite}}{1}$, which is just the height. And $\cos\theta = \dfrac{\text{adjacent}}{1}$, which is just the distance across. The circle keeps working past 90°, where the triangle stops.

:::widget unit-circle

Past 90°, the point can be left of centre or below it, so cosine or sine can be **negative**. For example, a half turn lands on $(-1, 0)$, so $\cos 180° = -1$ and $\sin 180° = 0$.

**A rule that always holds.** The point is on a circle of radius 1. By Pythagoras, across² + up² = 1² for every point on it. So for every angle:

$$\sin^2\theta + \cos^2\theta = 1$$

Here $\sin^2\theta$ means $(\sin\theta)^2$.

## Sine and cosine as functions

Feed every angle into sine and plot the outputs. Keep walking round the circle, and the height goes up, down, and back again. The graph is a wave:

:::widget plot
fn: Math.sin(x)
x: -0.5 6.8
y: -1.5 1.5
label: y = sin x (x in radians)
caption: The wave starts at 0, peaks at 1 a quarter turn in, and repeats every full turn, 2π ≈ 6.28. Its outputs always stay between −1 and 1.
:::

Cosine makes the same wave, shifted a quarter turn to the left. It starts at 1 instead of 0.

Each new full turn returns you to the same point on the circle. So both functions repeat every $2\pi$. That is why they describe anything that repeats: tides, sound waves, a swinging pendulum, the seasons. Calculus studies how fast these waves rise and fall.

:::example
title: A 5 m ladder leans against a wall, making a 60° angle with the ground. How high up the wall does it reach?

1. Draw the right triangle. The ladder is the hypotenuse, 5 m. The height up the wall is the side **opposite** the 60° angle.
   why: The wall and the ground meet at a right angle, and the longest side is the one across from it.
   uses: []

2. Pick the ratio that links opposite and hypotenuse: sine. So $\sin 60° = \dfrac{\text{height}}{5}$.
   why: SOH: sine is opposite over hypotenuse.
   uses: []

3. Multiply both sides by 5: $\text{height} = 5 \sin 60°$.
   why: This gets the height on its own.
   uses: []

4. Use $\sin 60° = \dfrac{\sqrt{3}}{2}$: $\text{height} = \dfrac{5\sqrt{3}}{2} \approx \dfrac{5 \times 1.732}{2} \approx 4.33$ m.
   why: This is one of the exact values in the table.
   uses: []

5. Check with Pythagoras. The foot of the ladder is $5 \cos 60° = 5 \times \tfrac{1}{2} = 2.5$ m out. Then $2.5^2 + 4.33^2 \approx 6.25 + 18.75 = 25 = 5^2$. It fits.
   why: The two short sides must fit $a^2 + b^2 = c^2$ with the ladder.
   uses: []
:::

:::practice
q: Where on the unit circle is the angle $\dfrac{\pi}{2}$? Use that to find $\cos\dfrac{\pi}{2}$ and $\sin\dfrac{\pi}{2}$.
answer: $\dfrac{\pi}{2}$ is a quarter turn, which lands at the top of the circle: the point $(0, 1)$. Across is 0 and up is 1, so **$\cos\dfrac{\pi}{2} = 0$** and **$\sin\dfrac{\pi}{2} = 1$**. That matches the 90° column of the table.
:::

:::problems
q: A right triangle has sides 5, 12 and 13. The angle θ is opposite the side of length 5. Find $\sin\theta$, $\cos\theta$ and $\tan\theta$.
answer: Hypotenuse 13 (the longest), opposite 5, adjacent 12. **$\sin\theta = \tfrac{5}{13}$, $\cos\theta = \tfrac{12}{13}$, $\tan\theta = \tfrac{5}{12}$**.

q: A right triangle has sides 8, 15 and 17. The angle θ is opposite the side of length 8. Find $\cos\theta$.
answer: Cosine is adjacent over hypotenuse. The adjacent side is 15: **$\cos\theta = \tfrac{15}{17}$**.

q: Use the table: what are $\sin 30°$ and $\cos 60°$?
answer: **Both are $\tfrac{1}{2}$.** Sine and cosine swap places between 30° and 60°.

q: Show that $\tan 45° = 1$ using sine and cosine.
answer: $\tan 45° = \dfrac{\sin 45°}{\cos 45°} = \dfrac{\sqrt{2}/2}{\sqrt{2}/2} =$ **1**. At 45° the opposite and adjacent sides are equal.

q: Turn 90° and 45° into radians.
answer: Multiply by $\dfrac{\pi}{180}$. $90 \cdot \dfrac{\pi}{180} =$ **$\dfrac{\pi}{2}$**. $45 \cdot \dfrac{\pi}{180} =$ **$\dfrac{\pi}{4}$**.

q: Turn 180°, 30° and 120° into radians.
answer: **$\pi$**, **$\dfrac{\pi}{6}$** and **$\dfrac{2\pi}{3}$**. For 120°: $120 \cdot \dfrac{\pi}{180} = \dfrac{120\pi}{180} = \dfrac{2\pi}{3}$.

q: Turn $\dfrac{\pi}{3}$ radians into degrees.
answer: Going the other way, multiply by $\dfrac{180}{\pi}$: $\dfrac{\pi}{3} \cdot \dfrac{180}{\pi} = \dfrac{180}{3} =$ **60°**.

q: Where on the unit circle is the angle $\pi$? Find $\cos\pi$ and $\sin\pi$.
answer: $\pi$ is a half turn, landing on the left at $(-1, 0)$. So **$\cos\pi = -1$** and **$\sin\pi = 0$**.

q: Where on the unit circle is the angle $\dfrac{3\pi}{2}$? Find its cosine and sine.
answer: Three quarter turns lands at the bottom, $(0, -1)$. So **$\cos\dfrac{3\pi}{2} = 0$** and **$\sin\dfrac{3\pi}{2} = -1$**.

q: θ is between 0° and 90°, and $\sin\theta = \tfrac{3}{5}$. Find $\cos\theta$ and $\tan\theta$.
answer: Use $\sin^2\theta + \cos^2\theta = 1$: $\cos^2\theta = 1 - \tfrac{9}{25} = \tfrac{16}{25}$, so $\cos\theta = \tfrac{4}{5}$ (positive, since the angle is under 90°). Then $\tan\theta = \dfrac{3/5}{4/5} = \tfrac{3}{4}$. **$\cos\theta = \tfrac{4}{5}$, $\tan\theta = \tfrac{3}{4}$**.

q: A ramp is 10 m long and rises at 30° to the ground. How high does it climb?
answer: The ramp is the hypotenuse; the height is opposite the 30°. Height $= 10 \sin 30° = 10 \cdot \tfrac{1}{2} =$ **5 m**.

q: You stand 20 m from a tree. The angle up to its top, from the ground, is 45°. How tall is the tree?
answer: The height is opposite the angle and the 20 m is adjacent, so use tangent. Height $= 20 \tan 45° = 20 \cdot 1 =$ **20 m**.

q: A 6 m ladder has its foot 3 m from a wall. What angle does it make with the ground?
answer: The 3 m is adjacent to the ground angle, and the ladder is the hypotenuse. $\cos\theta = \tfrac{3}{6} = \tfrac{1}{2}$. From the table, $\cos 60° = \tfrac{1}{2}$, so **θ = 60°**.
:::
