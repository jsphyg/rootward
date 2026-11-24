---
id: vectors
title: "Vectors: size and direction"
prereqs: [pythagorean-theorem]
big: A vector is a quantity with both a size and a direction, like "5 metres north", drawn as an arrow whose length is the size and whose point shows the direction.
recap: A vector has a size (its magnitude) and a direction, like a velocity of 30 km/h east. A scalar has only a size, like a mass of 3 kg. A vector is drawn as an arrow. Written as (across, up), such as (3, 4), its size is $\sqrt{3^2 + 4^2} = 5$.
check:
  q: Which of these is a vector?
  options: ["A wind of 20 km/h blowing east", "A mass of 20 kg", "A temperature of 20 °C", "A time of 20 s"]
  answer: 0
  why: The wind has a size (20 km/h) and a direction (east), so it is a vector. Mass, temperature and time have a size but no direction. "20 kg to the north" makes no sense, so they are scalars.
---

## Same size, different answer

You walk 4 m, then another 4 m. How far are you from where you started?

| Second walk | End point from the start |
|---|---|
| same direction | 8 m away |
| at right angles | about 5.7 m away |
| straight back | 0 m (you are back where you began) |

*Notice: the sizes are the same in every row. Only the direction changed, and the answer went from 8 to 0.*

So "4 m" is not enough information. To know where you end up, you need "4 m **which way**".

## Vectors and scalars

A {{vector|vector}} is a quantity with a size and a direction. A {{scalar|scalar}} has only a size.

| Scalars (size only) | Vectors (size and direction) |
|---|---|
| mass: 3 kg | force: 10 N downward |
| time: 20 s | velocity: 30 km/h east |
| distance: 8 m | displacement: 5 m to the left |
| speed: 30 km/h | acceleration: 9.8 m/s² downward |
| temperature: 20 °C | |

*Notice: some come in pairs. Speed is just "how fast". Velocity is "how fast, and which way".*

The size of a vector is called its {{magnitude|magnitude}}. It is always positive or zero.

## Drawing vectors as arrows

Draw a vector as an arrow. The arrow's length shows the magnitude, using a scale such as 1 cm for each metre. The arrow's point shows the direction.

Where you draw the arrow does not matter. Two arrows with the same length and direction are the same vector, even if they start in different places. "3 m east" means the same move wherever you start it.

In print, a vector is often written in bold, $\mathbf{v}$, or with an arrow on top, $\vec{v}$. Its magnitude is written $|\vec{v}|$ or just v.

## Writing vectors with numbers

On a grid, a vector can be described by how far it goes across and how far up. The arrow from (0, 0) to (3, 4) is written

$$\vec{v} = (3, 4)$$

Negative numbers mean left or down: $(-2, 5)$ goes 2 left and 5 up.

The arrow is the hypotenuse of a right triangle with sides 3 and 4. So its magnitude comes from the Pythagorean theorem:

$$|\vec{v}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$$

## Flipping and stretching

A minus sign reverses a vector's direction and keeps its size. If $\vec{v}$ is 4 m/s north, then $-\vec{v}$ is 4 m/s south. In numbers, every part changes sign: $-(3, 4) = (-3, -4)$.

Multiplying by a positive number stretches the vector and keeps its direction. $2\vec{v}$ is twice as long, pointing the same way: $2(3, 4) = (6, 8)$, with magnitude 10.

**Why.** Doubling both the across and the up keeps the same slope, so the arrow points the same way. It also doubles both sides of the right triangle, so the hypotenuse doubles too.

:::example
title: A runner goes once around a 400 m track and stops at the starting line. Find the distance and the displacement.

1. Distance is a scalar: the total length of the path. The runner covered **400 m**.
   why: Distance does not care about direction. It adds up every metre run.
   uses: []

2. Displacement is a vector: the arrow from start to finish.
   why: Displacement only looks at where you began and where you ended.
   uses: []

3. The runner finished at the start, so the arrow has no length. The displacement is **0 m**.
   why: A vector with zero length has no direction either. Running in a full loop cancels out.
   uses: []
:::

:::practice
q: Find the magnitude of the vector $(-6, 8)$.
answer: $\sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} =$ **10**. Squaring makes the minus sign disappear, which makes sense: a length is never negative.
:::

:::problems
q: Is "a mass of 3 kg" a vector or a scalar?
answer: **Scalar.** It has a size but no direction.

q: Is "a push of 10 N downward" a vector or a scalar?
answer: **Vector.** It has a size (10 N) and a direction (down).

q: What is the difference between "30 km/h" and "30 km/h east"?
answer: **The first is a speed (a scalar). The second is a velocity (a vector), because it has a direction.**

q: Find the magnitude of $(3, 4)$.
answer: $\sqrt{9 + 16} =$ **5**.

q: Find the magnitude of $(5, 0)$. Which way does it point?
answer: $\sqrt{25 + 0} =$ **5**, pointing **straight along the x direction** (to the right).

q: Find the magnitude of $(-5, -12)$. Which way does it point?
answer: $\sqrt{25 + 144} =$ **13**. Both parts are negative, so it points **left and down**.

q: $\vec{v}$ is 4 m/s north. What is $-\vec{v}$?
answer: **4 m/s south.** Same size, opposite direction.

q: $\vec{v} = (2, -1)$. Find $3\vec{v}$ and its magnitude.
answer: $3\vec{v} = (6, -3)$. Magnitude $\sqrt{36 + 9} = \sqrt{45} \approx$ **6.71**, which is 3 times the magnitude of $\vec{v}$ ($\sqrt{5} \approx 2.24$).

q: Arrow A goes from (0, 0) to (3, 4). Arrow B goes from (5, 5) to (8, 9). Are they the same vector?
answer: B goes 3 across and 4 up, just like A. **Yes**, same size and direction. Where an arrow starts does not matter.

q: You walk 4 m east, then 4 m west. Find your distance and your displacement.
answer: **Distance 8 m. Displacement 0 m.** You ended where you started.

q: You walk 4 m east, then 4 m north. How far are you from your start?
answer: The two walks are at right angles: $\sqrt{16 + 16} = \sqrt{32} \approx$ **5.7 m**.
:::
