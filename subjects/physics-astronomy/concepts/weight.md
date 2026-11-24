---
id: weight
title: Mass and weight
prereqs: [newtons-second-law, free-fall]
big: Weight is the force of gravity on an object, equal to its mass times g; mass is the amount of stuff and is the same everywhere, but weight changes from planet to planet.
recap: Weight is the pull of gravity, $W = mg$, measured in newtons. On Earth $g \approx 9.8$ N/kg, so a 1 kg mass weighs 9.8 N. Mass, in kilograms, is the same on the Moon or in space; weight is not. A 60 kg person weighs about 590 N on Earth and about 96 N on the Moon.
check:
  q: What is the weight of a 5 kg bag on Earth?
  options: ["49 N", "5 N", "5 kg", "0.51 N"]
  answer: 0
  why: $W = mg = 5 \times 9.8 = 49$ N. 5 N treats mass and weight as the same number. 5 kg is the mass, and kilograms are not a unit of force. 0.51 N divides by g instead of multiplying.
---

## Same astronaut, different worlds

An astronaut with a mass of 60 kg travels around the solar system:

| Place | Mass | Weight |
|---|---|---|
| Earth | 60 kg | 588 N |
| Moon | 60 kg | 96 N |
| Mars | 60 kg | 222 N |
| deep space, far from everything | 60 kg | about 0 N |

*Notice: the mass column never changes. The weight column changes with the place.*

## Two different things

{{mass|Mass}} is how much matter an object has, and how hard it is to speed up or slow down. It is measured in kilograms. It does not depend on where you are.

{{weight|Weight}} is the force of gravity pulling on the object. Like any force, it is measured in newtons and has a direction: toward the centre of the planet. It depends on how strong gravity is where you are.

In everyday speech, people say "I weigh 60 kilograms". In physics, that is your mass. Your weight is about 588 newtons.

## W = mg

Drop any object and, with no air, it accelerates at g, about 9.8 m/s². The only force on it is its weight. So by the [[newtons-second-law|second law]], $F = ma$ becomes

$$W = mg$$

On Earth, $g \approx 9.8$, so each kilogram weighs 9.8 N.

Here g is also called the {{field-strength|gravitational field strength}}: the pull on each kilogram, in newtons per kilogram. $9.8$ N/kg and $9.8$ m/s² are the same number, and the units are equal too, since $1\text{ N/kg} = 1\text{ m/s}^2$.

## Why everything falls at the same rate

A heavier object has a bigger weight, so gravity pulls it harder. But it also has more mass, so it is harder to accelerate. The two grow together:

$$a = \frac{W}{m} = \frac{mg}{m} = g$$

The mass cancels. That is why a hammer and a feather fall together on the Moon, as the [[free-fall|free fall]] page described.

## Other worlds

Each planet or moon has its own g:

| Place | g (N/kg) |
|---|---|
| Earth | 9.8 |
| Moon | 1.6 |
| Mars | 3.7 |
| Jupiter (at its cloud tops) | about 25 |

Your mass is the same on all of them, so your weight is $m$ times that place's g.^[n_scales]

:::example
title: A box of 20 kg is lifted with a rope. What pull is needed to lift it at a steady speed? What pull gives it an upward acceleration of 1 m/s²?

1. Its weight: $W = mg = 20 \times 9.8 = 196$ N, downward.
   why: Gravity pulls on every kilogram with 9.8 N.
   uses: []

2. At a steady speed the net force is zero, so the rope must pull **196 N** up.
   why: No acceleration means the forces balance (first law).
   uses: [newtons-first-law]

3. To accelerate upward at 1 m/s², the net force must be $ma = 20 \times 1 = 20$ N upward. So $T - 196 = 20$.
   why: The net force is the rope's pull minus the weight, with up as positive.
   uses: [newtons-second-law]

4. $T = 216$ N. The rope must pull **216 N** to speed the box up.
   why: It needs 196 N just to hold the box against gravity, plus 20 N more to accelerate it.
   uses: []
:::

:::practice
q: A person's weight on Earth is 490 N. What is their mass?
answer: $m = \dfrac{W}{g} = \dfrac{490}{9.8} =$ **50 kg**.
:::

:::problems
q: Find the weight of a 5 kg bag on Earth.
answer: $5 \times 9.8 =$ **49 N**.

q: Find the weight of a 70 kg person on Earth.
answer: $70 \times 9.8 =$ **686 N**.

q: Find the weight of a 100 g apple on Earth.
answer: 100 g is 0.1 kg. $0.1 \times 9.8 =$ **0.98 N**, about 1 N.

q: Something weighs 490 N on Earth. What is its mass?
answer: $\dfrac{490}{9.8} =$ **50 kg**.

q: A 60 kg astronaut stands on the Moon, where $g = 1.6$ N/kg. Find their weight and their mass.
answer: Weight $60 \times 1.6 =$ **96 N**. Mass: still **60 kg**.

q: Find the weight of an 80 kg rover on Mars, where $g = 3.7$ N/kg.
answer: $80 \times 3.7 =$ **296 N**.

q: A person weighs 1000 N on Earth. Find their mass and their weight on the Moon.
answer: Mass $\dfrac{1000}{9.8} \approx$ **102 kg**. Moon weight $102 \times 1.6 \approx$ **163 N**.

q: Show why a heavy ball and a light ball fall with the same acceleration (no air).
answer: $a = \dfrac{W}{m} = \dfrac{mg}{m} = g$. **The mass cancels**, so the acceleration is g for both.

q: A bathroom scale reads "70 kg". What is the person's weight in newtons?
answer: The scale shows mass. Weight $70 \times 9.8 =$ **686 N**.

q: An astronaut floats in deep space, far from any planet. What are their mass and weight?
answer: **Mass unchanged. Weight about zero**, since there is almost no gravity pulling.

q: A 20 kg box is lifted at a steady speed. How hard must the rope pull?
answer: Equal to the weight: **196 N**.

q: The same 20 kg box is lifted with an upward acceleration of 1 m/s². How hard must the rope pull?
answer: $T - 196 = 20 \times 1$, so **T = 216 N**.

q: Show that N/kg is the same unit as m/s².
answer: $1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$, so $\dfrac{\text{N}}{\text{kg}} = \dfrac{\text{kg} \cdot \text{m/s}^2}{\text{kg}} =$ **$\text{m/s}^2$**.
:::
