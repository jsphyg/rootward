---
id: work
title: Work
prereqs: [force, position-displacement]
big: In physics, a force does work when it moves something along the direction of the force; the work is the force times the distance moved in that direction, measured in joules.
recap: Work is $W = Fd\cos\theta$, where F is the force, d is the displacement and θ is the angle between them. It is measured in joules: 1 J = 1 N·m. A force along the motion does positive work, one against it (like friction) does negative work, and one at right angles to the motion does none.
check:
  q: You pull a suitcase 20 m along the floor with a 50 N force angled 60° above the horizontal. How much work does your pull do?
  options: ["500 J", "1000 J", "866 J", "0 J"]
  answer: 0
  why: Only the part of the force along the motion does work: $W = 50 \times 20 \times \cos 60° = 1000 \times 0.5 = 500$ J. 1000 J ignores the angle. 866 J uses sine, which gives the part pointing up, not along the floor. 0 J would be right only if the pull were at 90° to the motion.
---

## Effort is not work

Hold a heavy bag still for ten minutes. Your arms ache, but in physics you have done **no work** on the bag. Nothing moved.

| Situation | Force | Movement | Work done by that force |
|---|---|---|---|
| lift a 20 N bag 1 m up | 20 N up | 1 m up | 20 J |
| hold the bag still | 20 N up | none | 0 |
| carry the bag 10 m along a flat corridor | 20 N up | 10 m sideways | 0 |
| push a wall that does not move | your push | none | 0 |

*Notice: work needs both a force and a movement, and the movement has to be along the force.*

## The formula

When a force F moves something a distance d in the force's own direction:

$$W = Fd$$

The unit is the {{joule|joule}}, J. One joule is the work done by a 1 N force moving something 1 m: $1\text{ J} = 1\text{ N} \cdot \text{m}$. Lifting a small apple 1 m takes about 1 J.

**Why define it this way?** Work turns out to measure the energy a force hands over. The next pages show that the work done on an object exactly equals the energy it gains. That is what makes the idea useful.

## Forces at an angle

If the force is at an angle θ to the motion, only its [[vector-components|component]] along the motion counts. That part is $F\cos\theta$:

$$W = Fd\cos\theta$$

| Angle between force and motion | $\cos\theta$ | Work |
|---|---|---|
| 0° (same direction) | 1 | $Fd$, positive |
| 60° | 0.5 | half of $Fd$ |
| 90° (at right angles) | 0 | zero |
| 180° (opposite) | −1 | $-Fd$, negative |

## Negative work and zero work

A force against the motion does **negative work**: it takes energy away. Friction on a sliding box does negative work. So does gravity on a ball thrown upward, while the ball rises.

A force at right angles to the motion does **no work**. When you carry a bag across a flat room, your upward force is at 90° to the sideways motion. The string whirling a ball in a circle pulls toward the centre, always at 90° to the motion, so it does no work, and the ball's speed stays the same.

## Work by several forces

Each force does its own work. The **net work** is the total, which is the same as the work done by the net force. Push a box 3 m with 50 N against 20 N of friction: your push does $+150$ J, friction does $-60$ J, and the net work is $90$ J.

:::example
title: You lift a 2 kg box straight up by 3 m at a steady speed. How much work do you do? How much work does gravity do?

1. At a steady speed, your lift balances the weight: $F = mg = 2 \times 9.8 = 19.6$ N, upward.
   why: Steady velocity means balanced forces.
   uses: [force]

2. Your force and the motion are both upward, so $\theta = 0$: $W = 19.6 \times 3 = 58.8$ J.
   why: Force along the motion does positive work, $Fd$.
   uses: []

3. Gravity points down, opposite to the motion, so $\theta = 180°$: $W = 19.6 \times 3 \times (-1) = -58.8$ J.
   why: A force against the motion does negative work.
   uses: []

4. **You do 58.8 J. Gravity does −58.8 J.** The net work is zero, which fits the box's speed not changing.
   why: The net work matches the change in speed, as the kinetic energy page will show.
   uses: []
:::

:::practice
q: Friction of 20 N acts on a box as it slides 5 m. How much work does friction do?
answer: Friction points against the motion ($\theta = 180°$): $W = 20 \times 5 \times (-1) =$ **−100 J**.
:::

:::problems
q: A 10 N force pushes a cart 5 m in the direction of the force. Find the work.
answer: $10 \times 5 =$ **50 J**.

q: How much work does it take to lift a 2 kg box 3 m at a steady speed?
answer: $19.6 \times 3 =$ **58.8 J**.

q: You push a wall with 30 N, and it does not move. How much work do you do?
answer: **0 J.** There is no displacement.

q: You carry a bag at a steady speed along a flat corridor. How much work does your upward holding force do?
answer: **0 J.** The force is at 90° to the motion.

q: You pull a suitcase 20 m with 50 N at 60° above the horizontal. Find the work.
answer: $50 \times 20 \times 0.5 =$ **500 J**.

q: A 100 N force at 30° to the motion moves a sled 10 m. Find the work.
answer: $100 \times 10 \times \cos 30° \approx$ **866 J**.

q: Friction of 20 N acts on a box sliding 5 m. Find the work done by friction.
answer: **−100 J.**

q: A 3 kg ball falls 10 m. How much work does gravity do on it?
answer: Force and motion both down: $3 \times 9.8 \times 10 =$ **294 J**.

q: A 0.5 kg ball thrown upward rises 4 m. How much work does gravity do while it rises?
answer: Gravity is opposite to the motion: $-0.5 \times 9.8 \times 4 =$ **−19.6 J**.

q: You do 600 J of work pushing a crate 4 m. What force did you push with (along the motion)?
answer: $F = \dfrac{W}{d} = \dfrac{600}{4} =$ **150 N**.

q: You push a box 3 m with 50 N against 20 N of friction. Find the net work.
answer: $150 - 60 =$ **90 J**.

q: A ball whirls in a circle on a string. How much work does the string's pull do?
answer: **None.** The pull points to the centre, always at 90° to the motion.

q: Show that a joule is the same as $\text{kg} \cdot \text{m}^2/\text{s}^2$.
answer: $1\text{ J} = 1\text{ N} \cdot \text{m}$, and $1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$. So **$1\text{ J} = 1\text{ kg} \cdot \text{m}^2/\text{s}^2$**.
:::
