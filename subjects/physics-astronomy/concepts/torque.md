---
id: torque
title: Torque (turning force)
prereqs: [force]
big: How strongly a force turns something depends on the force and on how far from the pivot it acts; this turning effect is called torque.
recap: Torque is $\tau = rF\sin\theta$, where r is the distance from the pivot to where the force acts and θ is the angle between the force and that line. When the force is at right angles, $\tau = rF$. The unit is the newton-metre, N·m. A longer handle gives more torque for the same force; a force pointed straight at the pivot gives none.
check:
  q: You pull with 20 N at right angles on the end of a spanner 0.3 m long. What torque do you apply to the bolt?
  options: ["6 N·m", "66.7 N·m", "0.015 N·m", "20.3 N·m"]
  answer: 0
  why: $\tau = rF = 0.3 \times 20 = 6$ N·m. 66.7 divides the force by the length. 0.015 divides the length by the force. 20.3 adds them.
---

## Opening a door

Push a door near its handle and it swings easily. Push the same door close to its hinges and it barely moves. Push the edge straight toward the hinges and it does not turn at all.

| Where you push | Distance from hinge | Push | Turning effect |
|---|---|---|---|
| at the handle | 0.8 m | 10 N, at right angles | 8 N·m |
| halfway | 0.4 m | 10 N, at right angles | 4 N·m |
| near the hinge | 0.1 m | 10 N, at right angles | 1 N·m |
| at the handle, toward the hinge | 0.8 m | 10 N, along the door | 0 |

*Notice: the same push turns the door more the further from the hinge it acts, and not at all if it points at the hinge.*

## The formula

The turning effect of a force is called {{torque|torque}}, written τ (the Greek letter tau). When the force is at right angles to the line from the {{pivot|pivot}}:

$$\tau = rF$$

r is the distance from the pivot to where the force acts. The unit is the newton-metre, N·m.^[n_torque_unit]

**Why distance matters.** Picture a long spanner turning a bolt. Your hand moves around a big circle while the bolt turns only a little. You push a long way with a small force to turn the bolt a short way with a big force. That trade is how levers work.

## Forces at an angle

If the force is at an angle θ to the handle, only its part at right angles to the handle turns it. That part is $F\sin\theta$, so

$$\tau = rF\sin\theta$$

At 90°, $\sin\theta = 1$ and you get the full $rF$. At 0°, pulling straight along the handle, $\sin\theta = 0$ and there is no torque.

## Which way it turns

A torque turns things either clockwise or anticlockwise. When several forces act, give one direction a plus sign and the other a minus sign, then add. If they cancel, the object does not start turning.

:::example
title: You pull on a 0.4 m spanner with 50 N, at 30° to the handle. What torque do you apply? How could you get more?

1. The distance from the bolt is $r = 0.4$ m and the force is $F = 50$ N.
   why: List what you know first.
   uses: []

2. Only the part at right angles counts: $\tau = rF\sin\theta = 0.4 \times 50 \times \sin 30°$.
   why: The part of the force along the handle just pulls on the bolt without turning it.
   uses: [force]

3. $\sin 30° = 0.5$, so $\tau = 20 \times 0.5 = 10$ N·m.
   why: Evaluate.
   uses: []

4. **10 N·m.** Pulling at right angles would double it to 20 N·m, with no extra effort.
   why: At 90°, $\sin\theta = 1$, the most it can be.
   uses: []
:::

:::practice
q: A 30 N force acts at right angles, 0.5 m from a pivot. Find the torque.
answer: $0.5 \times 30 =$ **15 N·m**.
:::

:::problems
q: A 20 N force acts at right angles on a 0.3 m spanner. Find the torque.
answer: **6 N·m.**

q: A bolt needs 40 N·m to loosen. What force at right angles is needed on a 0.25 m spanner?
answer: $F = \dfrac{40}{0.25} =$ **160 N**.

q: A bolt needs 60 N·m. You can push with 200 N. How long must the spanner be?
answer: $r = \dfrac{60}{200} =$ **0.3 m**.

q: You switch to a spanner twice as long. What happens to the force you need?
answer: **It halves.**

q: You push on a door right at its hinge. What torque do you apply?
answer: **Zero**, because r = 0.

q: You push on a door's edge straight toward the hinge. What torque do you apply?
answer: **Zero.** The force points at the pivot, so θ = 0.

q: A 100 N force acts 0.2 m from a pivot, at 60° to the handle. Find the torque.
answer: $0.2 \times 100 \times \sin 60° \approx$ **17.3 N·m**.

q: A cyclist pushes down with 300 N on a pedal crank 0.17 m long, when the crank is level. Find the torque.
answer: $0.17 \times 300 =$ **51 N·m**.

q: A 30 kg child sits 2 m from the middle of a seesaw. What torque does the child's weight give?
answer: $2 \times 30 \times 9.8 =$ **588 N·m**.

q: You turn a steering wheel of radius 0.2 m with both hands, each pushing 20 N along the rim, one up and one down. Find the total torque.
answer: Both turn it the same way: $2 \times 0.2 \times 20 =$ **8 N·m**.

q: Two forces act on a wheel: 10 N·m clockwise and 6 N·m anticlockwise. What is the net torque?
answer: **4 N·m clockwise.**

q: Why are door handles put on the side away from the hinges?
answer: **The bigger r gives more torque** for the same push, so the door opens easily.
:::
