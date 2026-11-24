---
id: force
title: Forces and free-body diagrams
prereqs: [vector-addition]
big: A force is a push or a pull; it has a size, measured in newtons, and a direction, so all the forces on an object add up as vectors to one net force.
recap: A force is a push or a pull, measured in newtons (N). It is a vector. A free-body diagram draws one object with an arrow for each force acting on it. The net force is the vector sum of all those forces; if they balance, the net force is zero.
check:
  q: A box is pushed with 10 N to the east and 4 N to the west. What is the net force?
  options: ["6 N east", "14 N east", "6 N west", "0 N"]
  answer: 0
  why: The forces point opposite ways, so subtract: $10 - 4 = 6$ N, toward the bigger push, east. 14 N adds them as if both pushed east. 6 N west has the right size but points toward the weaker push. 0 N would need the two pushes to be equal.
---

## Pushes and pulls

Kick a ball, lift a bag, lean on a door. Each is a {{force|force}}: a push or a pull. Forces come from many sources:

| Force | What it is | Direction |
|---|---|---|
| weight | gravity pulling on an object | down, toward the Earth's centre |
| normal force | a surface pushing back on whatever presses on it | straight out of the surface |
| tension | a rope or cable pulling | along the rope |
| friction | surfaces gripping or rubbing | along the surface, against sliding |
| air resistance | air pushing back on a moving object | against the motion |

*Notice: every force has a direction as well as a size. A force is a vector.*

## Measuring force

Force is measured in {{newton|newtons}}, N, named after Isaac Newton. One newton is about the weight of a small apple, around 100 grams. A bag of shopping might weigh 50 N. In base units, $1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$; the page on Newton's second law explains why.

## Free-body diagrams

To work out what an object will do, draw a {{free-body|free-body diagram}}:

1. Draw the object as a dot or a simple box. Draw nothing else.
2. For each force **on** that object, draw an arrow starting at the object, pointing the way the force acts.
3. Label each arrow with what causes it and its size.

Only forces acting **on** the object go in. Forces the object exerts on other things do not.

A book resting on a table has two arrows: its weight pointing down, and the table's normal force pointing up. A lamp hanging from a cable has its weight down and the cable's tension up.

## The net force

The {{net-force|net force}} is the [[vector-addition|vector sum]] of all the forces on the object. It is the single force that would have the same effect as all of them together.

Along a line, give each force a sign and add: 10 N east plus 4 N west is $+10 - 4 = +6$ N, so 6 N east.

At angles, add components. Ropes pulling with 30 N east and 40 N north give a net force of $\sqrt{30^2 + 40^2} = 50$ N, at $\tan^{-1}\!\left(\frac{40}{30}\right) \approx 53°$ north of east.

When the forces cancel out exactly, the net force is zero. The forces are then called **balanced**. The book on the table has balanced forces: the table pushes up exactly as hard as gravity pulls down.

**Why the net force matters.** An object does not respond to each force separately. It responds to their total. The next pages show that the net force decides whether, and how, the object's motion changes.

:::example
title: A sled is pulled by two ropes. One pulls with 30 N toward the east, the other with 40 N toward the north. Find the net force. Ignore friction and gravity.

1. Draw the free-body diagram: one dot, an arrow of 30 N pointing east and an arrow of 40 N pointing north.
   why: The diagram shows every force on the sled and its direction.
   uses: []

2. Write the forces as components, east and north: $(30, 0)$ and $(0, 40)$. Add: $(30, 40)$ N.
   why: Forces are vectors, so they add part by part.
   uses: [vector-addition]

3. Size: $\sqrt{30^2 + 40^2} = 50$ N. Direction: $\tan^{-1}\!\left(\frac{40}{30}\right) \approx 53.1°$ north of east.
   why: Pythagoras gives the size, inverse tangent gives the angle.
   uses: [vector-components]

4. The net force is **50 N, about 53° north of east**. Not 70 N: the ropes pull in different directions, so their sizes do not simply add.
   why: Sizes only add directly when forces point the same way.
   uses: []
:::

:::practice
q: Three forces act on a crate along a line: 5 N east, 7 N east and 4 N west. Find the net force.
answer: $5 + 7 - 4 =$ **8 N east**.
:::

:::problems
q: A box is pushed with 10 N east and 4 N west. Find the net force.
answer: **6 N east.**

q: Two people push a car, each with 300 N, in the same direction. Find the net force from them.
answer: Same direction, so add: **600 N**.

q: A rope pulls a bucket up with 25 N. Its weight is 25 N. Find the net force.
answer: $25 - 25 =$ **0 N**. The forces are balanced.

q: Three forces act along a line: 5 N east, 7 N east and 4 N west. Find the net force.
answer: **8 N east.**

q: Draw (or describe) the free-body diagram of a book resting on a table.
answer: **Two arrows: weight pointing down, and the table's normal force pointing up.** They are the same size, so the net force is zero.

q: Describe the free-body diagram of a lamp hanging still from a cable.
answer: **Weight pointing down, and the cable's tension pointing up**, equal in size.

q: Describe the free-body diagram of a skydiver falling.
answer: **Weight pointing down, and air resistance pointing up** (against the motion).

q: Forces of 30 N east and 40 N north act on a box. Find the net force.
answer: **50 N, about 53° north of east.**

q: Two 20 N forces act at right angles. Find the net force.
answer: $\sqrt{400 + 400} \approx$ **28.3 N**, at 45° between them.

q: Forces $(3, 4)$ N and $(-1, 2)$ N act on an object. Find the net force and its size.
answer: $(2, 6)$ N. Size $\sqrt{4 + 36} = \sqrt{40} \approx$ **6.32 N**.

q: Forces of 30 N east and 40 N north act on a box. What single extra force would make the forces balanced?
answer: The opposite of the net force: **50 N, about 53° south of west.**

q: Write the newton in base SI units.
answer: **$1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$.**
:::
