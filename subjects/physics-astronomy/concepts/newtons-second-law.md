---
id: newtons-second-law
title: Newton's second law, F = ma
prereqs: [newtons-first-law, acceleration]
big: The net force on an object equals its mass times its acceleration, so a bigger force gives more acceleration and a bigger mass gives less.
recap: Newton's second law: $F_{\text{net}} = ma$, with force in newtons, mass in kilograms and acceleration in m/s². The acceleration points the same way as the net force. One newton is the net force that gives 1 kg an acceleration of 1 m/s². Always add up all the forces first to get the net force.
check:
  q: A net force of 12 N acts on a 3 kg cart. What is its acceleration?
  options: ["4 m/s²", "36 m/s²", "0.25 m/s²", "15 m/s²"]
  answer: 0
  why: $a = \dfrac{F}{m} = \dfrac{12}{3} = 4$ m/s². 36 multiplies force and mass. 0.25 divides mass by force, upside down. 15 adds them, which mixes a force and a mass.
---

## Push a cart

Push a cart on smooth ground and measure the acceleration. Then change the push, or load up the cart:

| Net force (N) | Mass (kg) | Acceleration (m/s²) |
|---|---|---|
| 10 | 2 | 5 |
| 20 | 2 | 10 |
| 20 | 4 | 5 |
| 20 | 8 | 2.5 |

*Notice: double the force and the acceleration doubles. Double the mass and the acceleration halves. Force divided by mass gives the acceleration every time.*

## The law

**Newton's second law:**

$$F_{\text{net}} = ma$$

The acceleration is directly proportional to the net force and inversely proportional to the mass:

$$a = \frac{F_{\text{net}}}{m}$$

This is what the first law left open. The first law says no net force means no change in velocity. The second law says how much the velocity changes when there is one.

**The acceleration points the way the net force points.** Push a moving cart backward and it slows down: the acceleration is backward, like the force.

## Where the newton comes from

The newton is defined by this law. One newton is the net force that gives a 1 kg mass an acceleration of 1 m/s²:

$$1\text{ N} = 1\text{ kg} \times 1\text{ m/s}^2 = 1\text{ kg} \cdot \text{m/s}^2$$

So with mass in kg and acceleration in m/s², the force comes out in newtons with no conversion.

## Net force, not just any force

Use the **total** force. A 10 kg box pushed with 50 N while friction holds it back with 20 N has a net force of $50 - 20 = 30$ N, so

$$a = \frac{30}{10} = 3 \text{ m/s}^2$$

Using 50 N would give 5 m/s², too much.

**Why mass resists.** Mass measures inertia. The same push spread over more stuff changes its motion less. A shopping trolley full of bottles needs a much harder shove than an empty one to get going at the same rate.

## Forces and motion together

The second law links forces to the acceleration, and the [[constant-acceleration|constant-acceleration equations]] link the acceleration to speeds, distances and times. Many problems use both: find the acceleration from the forces, then use it to describe the motion, or the other way round.

:::example
title: A 1200 kg car moving at 25 m/s brakes to a stop in 5 s. What braking force acts on it?

1. Find the acceleration: $a = \dfrac{\Delta v}{\Delta t} = \dfrac{0 - 25}{5} = -5$ m/s².
   why: The forces are unknown, but the motion gives the acceleration.
   uses: [acceleration]

2. Use the second law: $F = ma = 1200 \times (-5) = -6000$ N.
   why: The net force is mass times acceleration.
   uses: []

3. The minus sign means the force points backward, against the motion.
   why: The force has the same direction as the acceleration, and the car is slowing down.
   uses: []

4. The braking force is **6000 N, backward**.
   why: That is about the weight of 600 bags of sugar, pushing back on the car through the tyres.
   uses: []
:::

:::practice
q: A 10 kg box is pushed with 50 N, and friction holds it back with 20 N. Find its acceleration.
answer: Net force $50 - 20 = 30$ N. $a = \dfrac{30}{10} =$ **3 m/s²**, in the direction of the push.
:::

:::problems
q: A net force of 12 N acts on a 3 kg cart. Find the acceleration.
answer: $\dfrac{12}{3} =$ **4 m/s²**.

q: What net force gives a 2 kg ball an acceleration of 5 m/s²?
answer: $2 \times 5 =$ **10 N**.

q: A net force of 20 N gives an object an acceleration of 4 m/s². Find its mass.
answer: $m = \dfrac{F}{a} = \dfrac{20}{4} =$ **5 kg**.

q: What net force does a 1500 kg car need to accelerate at 2 m/s²?
answer: $1500 \times 2 =$ **3000 N**.

q: The same net force acts on an object whose mass is then doubled. What happens to the acceleration?
answer: **It halves.**

q: Forces of 30 N east and 10 N west act on a 4 kg block. Find its acceleration.
answer: Net force 20 N east. $\dfrac{20}{4} =$ **5 m/s² east**.

q: A 0.15 kg ball is kicked with an average force of 30 N. Find its acceleration during the kick.
answer: $\dfrac{30}{0.15} =$ **200 m/s²**.

q: A 1000 kg car speeds up from 0 to 20 m/s in 10 s. Find the net force.
answer: $a = 2$ m/s², so $F = 1000 \times 2 =$ **2000 N**.

q: A 1200 kg car brakes from 25 m/s to rest in 5 s. Find the braking force.
answer: $a = -5$ m/s², $F = -6000$ N: **6000 N backward**.

q: A 2 kg cart starts from rest, and a net force of 5 N acts on it for 4 s. Find its final speed and how far it goes.
answer: $a = 2.5$ m/s². $v = 2.5 \times 4 =$ **10 m/s**. $s = \tfrac{1}{2} \times 2.5 \times 16 =$ **20 m**.

q: Forces of 3 N east and 4 N north act on a 0.5 kg puck on smooth ice. Find its acceleration.
answer: Net force $\sqrt{9 + 16} = 5$ N, at about 53° north of east. $a = \dfrac{5}{0.5} =$ **10 m/s², 53° north of east**.

q: A 2000 kg rocket's engine pushes up with 50,000 N. Gravity pulls it down with 19,600 N. Find its acceleration.
answer: Net force $50{,}000 - 19{,}600 = 30{,}400$ N up. $a = \dfrac{30{,}400}{2000} =$ **15.2 m/s² upward**.

q: An 800 kg lift is pulled up by a cable with 9000 N. Gravity pulls it down with 7840 N. Find its acceleration.
answer: Net force $1160$ N up. $a = \dfrac{1160}{800} =$ **1.45 m/s² upward**.

q: A 50 kg skater pushes off a wall and reaches 2 m/s in 0.5 s. Find the average force the wall exerts on the skater.
answer: $a = \dfrac{2}{0.5} = 4$ m/s². $F = 50 \times 4 =$ **200 N**.

q: Show that $\text{kg} \cdot \text{m/s}^2$ is the unit you get from mass times acceleration.
answer: Mass is in kg and acceleration in $\text{m/s}^2$, so their product is in **$\text{kg} \cdot \text{m/s}^2$, which is the newton.**
:::
