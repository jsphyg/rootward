---
id: potential-energy
title: Gravitational potential energy
prereqs: [work, weight]
big: Lifting something stores energy in its height, $mgh$, which it can give back as it falls.
recap: Gravitational potential energy is $PE = mgh$, where m is the mass, g = 9.8 m/s² and h is the height above a chosen zero level. It equals the work done lifting the object at a steady speed. Only changes in height matter, and the path does not: a ramp and a ladder to the same height store the same energy.
check:
  q: You lift a 2 kg bag from the floor onto a shelf 1.5 m up. How much potential energy does it gain?
  options: ["29.4 J", "3 J", "14.7 J", "19.6 J"]
  answer: 0
  why: $PE = mgh = 2 \times 9.8 \times 1.5 = 29.4$ J. 3 J multiplies mass by height and leaves out g. 14.7 J halves the answer, as if it were kinetic energy. 19.6 J is the bag's weight in newtons, which would be the energy for a 1 m lift.
---

## Energy stored in height

Lift a brick onto a wall. Nothing is moving afterward, but something has changed: if the brick falls, it will hit the ground fast and could break a toe. Lifting it stored energy that the fall gives back. This stored energy is called {{potential-energy|potential energy}}, energy waiting to be used.

| What you lift | Mass | Height | Energy stored |
|---|---|---|---|
| apple onto a table | 0.1 kg | 1 m | 0.98 J |
| school bag onto a shelf | 2 kg | 1.5 m | 29.4 J |
| yourself up a flight of stairs | 60 kg | 3 m | 1764 J |
| a car up a 100 m hill | 1000 kg | 100 m | 980,000 J |

## The formula

To lift an object at a steady speed, you push up with a force equal to its [[weight|weight]], $mg$. Over a height h, your force does [[work|work]] $W = mgh$. That work is stored:

$$PE = mgh$$

m in kilograms, g = 9.8 m/s², h in metres. The answer is in joules.

When the object falls back down, gravity does $+mgh$ of work on it, and the stored energy comes back out, usually as motion.

## Zero is your choice

Height above **what**? You choose. A book on a table is 0.8 m above the floor, but 0 m above the table top. Its PE depends on where you put zero.

That sounds like a problem, but it is not. What matters is always a **change** in height, and the change is the same whatever zero you choose. A book falling from the table to the floor drops 0.8 m either way.

## The path does not matter

Carry a box up a gentle ramp, or lift it straight up a ladder to the same height. The ramp needs a smaller force but a longer distance. The ladder needs a bigger force over a shorter distance. Gravity's work, and so the PE gained, is $mgh$ both ways, because only the upward part of the movement is along gravity's line.^[n_conservative]

:::example
title: A 60 kg hiker climbs a hill 500 m high by a winding 4 km trail. How much potential energy does the hiker gain?

1. Only the height gain matters, not the trail length: $h = 500$ m.
   why: Gravity is vertical, so only vertical movement changes PE.
   uses: [work]

2. $PE = mgh = 60 \times 9.8 \times 500$.
   why: The formula for gravitational PE.
   uses: [weight]

3. $60 \times 9.8 = 588$, and $588 \times 500 = 294{,}000$ J.
   why: Multiply step by step.
   uses: []

4. **294,000 J (294 kJ).** A straight climb up a cliff of the same height would store exactly the same amount.
   why: The path does not change the PE.
   uses: []
:::

:::practice
q: You lift a 5 kg box onto a shelf 2 m high. How much potential energy does it gain?
answer: $5 \times 9.8 \times 2 =$ **98 J**.
:::

:::problems
q: A 3 kg box is raised 4 m. Find the gain in PE.
answer: $3 \times 9.8 \times 4 =$ **117.6 J**.

q: A 1 kg book is lifted from the floor to a table 0.8 m high. Find the gain in PE.
answer: $1 \times 9.8 \times 0.8 =$ **7.84 J**.

q: A 50 kg student climbs stairs 3 m high. Find the gain in PE.
answer: $50 \times 9.8 \times 3 =$ **1470 J**.

q: A 1000 kg lift (elevator) rises 30 m. Find the gain in PE.
answer: $1000 \times 9.8 \times 30 =$ **294,000 J**.

q: Lifting a 10 kg sack stores 500 J. How high was it lifted?
answer: $h = \dfrac{500}{10 \times 9.8} = \dfrac{500}{98} \approx$ **5.1 m**.

q: An object has 196 J of PE at a height of 5 m. Find its mass.
answer: $m = \dfrac{196}{9.8 \times 5} = \dfrac{196}{49} =$ **4 kg**.

q: A 2 kg ball falls from 10 m up to 4 m up. How much PE does it lose?
answer: It drops 6 m: $2 \times 9.8 \times 6 =$ **117.6 J**.

q: A 20 kg box is pushed up a 10 m ramp to a platform 2 m high. Find the gain in PE.
answer: Only the height counts: $20 \times 9.8 \times 2 =$ **392 J**.

q: A book sits on a table 0.8 m above the floor. What is its PE if you call the table top zero?
answer: **0 J.** It has PE only relative to a lower level, such as the floor.

q: On the Moon, g is about 1.6 m/s². Find the PE gained lifting 10 kg by 2 m there.
answer: $10 \times 1.6 \times 2 =$ **32 J**, about a sixth of the 196 J it would take on Earth.

q: 1000 kg of water falls 50 m over a dam. How much PE does it lose?
answer: $1000 \times 9.8 \times 50 =$ **490,000 J**. Hydroelectric power stations turn this into electricity.

q: Why is a ramp easier to use than lifting straight up, if both store the same PE?
answer: **The ramp needs a smaller force**, spread over a longer distance. The work, force times distance along gravity's line, is the same.
:::
