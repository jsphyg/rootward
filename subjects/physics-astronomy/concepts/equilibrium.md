---
id: equilibrium
title: Balance and static equilibrium
prereqs: [torque, newtons-first-law]
big: An object stays perfectly still only if the forces on it cancel and the turning effects on it cancel too.
recap: For an object to stay at rest, two things must be true. The net force is zero, so it does not start moving. The net torque about any point is zero, so it does not start turning. On a seesaw, this means $m_1d_1 = m_2d_2$. A uniform object's weight acts at its middle, its centre of gravity.
check:
  q: A 30 kg child sits 2 m from the middle of a seesaw. Where must a 40 kg child sit, on the other side, to balance?
  options: ["1.5 m from the middle", "2.67 m from the middle", "2 m from the middle", "0.67 m from the middle"]
  answer: 0
  why: Torques must match: $30 \times 2 = 40 \times d$, so $d = \frac{60}{40} = 1.5$ m. The heavier child sits closer. 2.67 m puts the heavier child further out, which would tip the seesaw their way. 2 m ignores the different masses. 0.67 m divides 2 by 3 for no reason.
---

## Balancing a seesaw

Two children sit on a seesaw. If one is heavier, the seesaw tips their way. To balance, the heavier child moves in toward the middle.

| Child | Mass | Distance from middle | Mass × distance |
|---|---|---|---|
| left | 30 kg | 2 m | 60 |
| right | 40 kg | 1.5 m | 60 |

*Notice: the seesaw balances when mass times distance is the same on both sides. A heavy child near the middle balances a light child far out.*

That is the [[torque|torque]] rule at work. Each child's weight gives a torque, $mg \times d$. The g is the same on both sides, so it cancels, leaving $m_1d_1 = m_2d_2$.

## The two conditions

An object in {{equilibrium|static equilibrium}} stays still. By the [[newtons-first-law|first law]], that needs no net force. It also needs no net torque, or it would start to turn.

| Condition | Stops it from |
|---|---|
| forces up = forces down, forces left = forces right | sliding or lifting off |
| clockwise torques = anticlockwise torques | turning or tipping |

**A useful trick.** You can take torques about **any** point. Choose a point where an unknown force acts. That force then has zero distance, so zero torque, and drops out of the equation.

## Where weight acts

A whole object's weight acts as if it were all at one point, the {{centre-of-gravity|centre of gravity}}. For a uniform plank or rod, that is the middle. An object stands steadily as long as its centre of gravity is above its base. Lean too far and the centre of gravity moves past the edge of the base: the weight's torque tips it over.

## Levers

A crowbar, wheelbarrow and nutcracker all use this. A small force far from the pivot balances a big force close to it. Your forearm works the other way: the biceps muscle attaches very close to the elbow, so it must pull very hard to hold a weight in your hand, but your hand moves fast and far.

:::example
title: A uniform 4 m plank weighing 100 N rests on supports at each end. A 200 N painter stands 1 m from the left end. Find the force from each support.

1. The plank's weight acts at its middle, 2 m from the left end.
   why: A uniform object's centre of gravity is at its middle.
   uses: [torque]

2. Take torques about the left support, so its unknown force drops out. Clockwise: $100 \times 2 + 200 \times 1 = 400$ N·m. Anticlockwise: the right support, $R \times 4$. So $4R = 400$ and $R = 100$ N.
   why: Balanced torques; choosing the pivot at an unknown force removes it.
   uses: [torque]

3. Forces up must equal forces down: $L + 100 = 100 + 200$, so $L = 200$ N.
   why: Zero net force.
   uses: [newtons-first-law]

4. **Left support 200 N, right support 100 N.** The support nearer the painter takes more of the load, as you would expect.
   why: Checking with common sense.
   uses: []
:::

:::practice
q: A 25 kg child sits 2 m from the middle of a seesaw. Where must a 50 kg adult sit to balance?
answer: $25 \times 2 = 50 \times d$, so **d = 1 m**.
:::

:::problems
q: A 30 kg child sits 2 m from a seesaw's middle. Where must a 40 kg child sit to balance?
answer: **1.5 m** from the middle.

q: A 20 kg child sits 1.8 m from the middle. What mass, 1.2 m from the middle on the other side, balances it?
answer: $\dfrac{20 \times 1.8}{1.2} =$ **30 kg**.

q: A metre stick balances at its 50 cm mark. A 2 N weight hangs at the 10 cm mark. Where must a 4 N weight hang to balance it?
answer: The 2 N weight is 40 cm from the middle: $2 \times 40 = 4 \times d$, so 20 cm from the middle, at the **70 cm mark**.

q: A crowbar lifts a rock pushing down with 600 N, 0.1 m from the pivot. You push 1.5 m from the pivot. What force do you need?
answer: $\dfrac{600 \times 0.1}{1.5} =$ **40 N**.

q: A wheelbarrow's load of 800 N acts 0.4 m from the wheel's axle. The handles are 1.6 m from the axle. What lifting force is needed?
answer: $\dfrac{800 \times 0.4}{1.6} =$ **200 N**.

q: You hold a 50 N weight in your hand, 0.35 m from your elbow. Your biceps attaches 0.04 m from the elbow. How hard must it pull? (Ignore the arm's weight.)
answer: $\dfrac{50 \times 0.35}{0.04} =$ **437.5 N**, almost nine times the weight.

q: A uniform 6 m beam weighing 300 N rests on supports at each end. Find each support's force.
answer: The weight acts at the middle, so they share it: **150 N each**.

q: A uniform 4 m plank weighing 100 N rests on end supports. A 200 N painter stands 1 m from the left. Find the forces.
answer: **Left 200 N, right 100 N.**

q: A sign weighing 50 N hangs from the end of a light 2 m pole fixed to a wall. What torque must the wall supply?
answer: $50 \times 2 =$ **100 N·m**, turning the other way.

q: Why does a tall, narrow bookcase tip over more easily than a short, wide one?
answer: **Its centre of gravity is high and its base is narrow**, so a small lean moves the centre of gravity past the edge of the base.

q: A uniform plank lies on a table with part of it hanging over the edge. How far can it stick out before it tips?
answer: **Up to half its length.** Once its middle, the centre of gravity, passes the table's edge, it tips.

q: Can an object have zero net force on it but still start turning?
answer: **Yes.** Two equal, opposite forces acting at different points, like hands on a steering wheel, cancel as forces but add as torques.
:::
