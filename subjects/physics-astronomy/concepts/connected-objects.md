---
id: connected-objects
title: Connected objects and pulleys
prereqs: [contact-forces, systems-of-equations]
big: When objects are tied or pushed together and move as one, they share the same acceleration, so you can write Newton's second law for each one and solve the equations together.
recap: Objects linked by a tight rope or pushing on each other share one acceleration. To find it, treat them as one object: $a = \dfrac{\text{net outside force}}{\text{total mass}}$. To find the rope tension or contact force between them, write $F = ma$ for just one of the objects. Over a pulley, the rope's tension is the same on both sides.
check:
  q: A 2 kg block sits on a smooth table. A string runs from it over a pulley at the table's edge to a 1 kg mass hanging below. What is the acceleration?
  options: ["about 3.27 m/s²", "9.8 m/s²", "4.9 m/s²", "about 6.53 m/s²"]
  answer: 0
  why: The only outside force driving the motion is the hanging mass's weight, $1 \times 9.8 = 9.8$ N, and it has to move all 3 kg: $a = \frac{9.8}{3} \approx 3.27$ m/s². 9.8 m/s² is free fall, as if the block on the table were not there. 4.9 m/s² divides by 2 kg instead of the total. 6.53 is the tension in newtons, not the acceleration.
---

## Pushing two boxes

Two boxes sit side by side on a smooth floor: 4 kg in front of your hands, 2 kg beyond it. You push the 4 kg box with 30 N. Both move together.

| What you look at | Mass | Force on it | Acceleration |
|---|---|---|---|
| both boxes as one | 6 kg | your 30 N | $30 \div 6 = 5$ m/s² |
| the 2 kg box alone | 2 kg | push from the 4 kg box | must also be 5 m/s² |

*Notice: the boxes move together, so they share the same acceleration. That one fact links everything.*

The 2 kg box accelerates at 5 m/s², so the force on it must be $2 \times 5 = 10$ N. That 10 N is the 4 kg box pushing it. By the third law, the 2 kg box pushes back on the 4 kg box with 10 N, so the 4 kg box feels $30 - 10 = 20$ N net, and $20 \div 4 = 5$ m/s². Everything agrees.

## The method

1. **Draw a free-body diagram for each object.** Include the forces between them (tension or contact push).
2. **Choose the direction of motion as positive for each object.** For a rope over a pulley, "positive" turns the corner with the rope.
3. **Write $F_{\text{net}} = ma$ for each object.** Every object gets the same a.
4. **Solve the equations together.** Adding them usually cancels the inside forces.

The shortcut for the acceleration alone is to treat the whole group as one object. Forces between the parts are third-law pairs inside the group, so they cancel:

$$a = \frac{\text{net outside force}}{\text{total mass}}$$

## Pulleys

A light, smooth pulley changes the direction of a rope without changing its tension. So the same tension T pulls on both objects.

**Block on a table, mass hanging.** Block $m_1$ on a smooth table; hanging mass $m_2$. Positive is "toward the pulley" for the block and "down" for the hanging mass:

$$\text{block: } T = m_1 a \qquad \text{hanging mass: } m_2 g - T = m_2 a$$

Adding the two equations cancels T: $m_2 g = (m_1 + m_2)a$.

**Two masses hanging over one pulley.** The heavier one goes down, the lighter one up:

$$\text{heavy: } m_2 g - T = m_2 a \qquad \text{light: } T - m_1 g = m_1 a$$

Adding gives $(m_2 - m_1)g = (m_1 + m_2)a$. Equal masses give $a = 0$: they balance.

:::example
title: A 3 kg mass and a 5 kg mass hang on either side of a pulley. Find the acceleration and the tension.

1. The 5 kg side goes down. Write the second law for each, taking each one's direction of motion as positive. 5 kg: $49 - T = 5a$. 3 kg: $T - 29.4 = 3a$.
   why: Each mass feels its weight and the same tension, and they share one acceleration.
   uses: [contact-forces, newtons-second-law]

2. Add the equations: $49 - 29.4 = 8a$, so $19.6 = 8a$ and $a = 2.45$ m/s².
   why: Adding is elimination; T cancels because it appears with opposite signs.
   uses: [systems-of-equations]

3. Put a back into the 3 kg equation: $T = 29.4 + 3 \times 2.45 = 29.4 + 7.35 = 36.75$ N.
   why: Either equation works once a is known.
   uses: []

4. Check in the 5 kg equation: $49 - 36.75 = 12.25 = 5 \times 2.45$. **a = 2.45 m/s², T ≈ 36.8 N.** The tension is between the two weights, as it must be: enough to lift the light one, not enough to hold the heavy one.
   why: Checking in the other equation, and with common sense, catches slips.
   uses: []
:::

:::practice
q: A 2 kg block on a smooth table is pulled by a string over a pulley to a hanging 1 kg mass. Find the acceleration and the tension.
answer: $a = \dfrac{9.8}{3} \approx$ **3.27 m/s²**. From the block: $T = 2a \approx$ **6.53 N**. Check on the hanging mass: $9.8 - 6.53 = 3.27 = 1 \times a$.
:::

:::problems
q: You push a 4 kg box with 30 N, and it pushes a 2 kg box in front of it, on a smooth floor. Find the acceleration and the force between the boxes.
answer: $a = \dfrac{30}{6} =$ **5 m/s²**. The 2 kg box needs $2 \times 5 =$ **10 N**.

q: Now you push the 2 kg box instead, and it pushes the 4 kg box. Find the force between them.
answer: Still 5 m/s². The 4 kg box needs $4 \times 5 =$ **20 N**. The force between them depends on which box is pushed.

q: Two blocks, 3 kg in front and 2 kg behind, are tied together. You pull the front one with 20 N on a smooth floor. Find a and the tension in the tie.
answer: $a = \dfrac{20}{5} =$ **4 m/s²**. The tie pulls the 2 kg block: $T = 2 \times 4 =$ **8 N**.

q: An engine pulls two 1000 kg carriages on a smooth track with 4000 N. Find the acceleration and the force on the coupling between the carriages.
answer: $a = \dfrac{4000}{2000} =$ **2 m/s²**. The rear coupling only pulls the last carriage: $1000 \times 2 =$ **2000 N**.

q: In a tug-of-war, each team pulls with 500 N and nobody moves. What is the tension in the rope?
answer: **500 N**, not 1000 N. Each end pulls with 500 N, like a rope tied to a wall.

q: Two 4 kg masses hang on either side of a pulley. Find the acceleration.
answer: $(4 - 4)g = 8a$, so **a = 0**. They balance.

q: A 3 kg and a 5 kg mass hang over a pulley. Find a and T.
answer: **a = 2.45 m/s², T ≈ 36.8 N.**

q: A 2 kg and a 6 kg mass hang over a pulley. Find a and T.
answer: $(6 - 2) \times 9.8 = 8a$, so **a = 4.9 m/s²**. $T = 2(9.8 + 4.9) =$ **29.4 N**.

q: A 2 kg block on a smooth table is linked over a pulley to a hanging 1 kg mass. Find a and T.
answer: **a ≈ 3.27 m/s², T ≈ 6.53 N.**

q: A 4 kg block on a table ($\mu_k = 0.1$) is linked over a pulley to a hanging 1 kg mass. Find a and T.
answer: Friction on the block: $0.1 \times 39.2 = 3.92$ N. Net outside force $9.8 - 3.92 = 5.88$ N on 5 kg: **a ≈ 1.18 m/s²**. Hanging mass: $T = 1 \times (9.8 - 1.176) \approx$ **8.62 N**.

q: Use two equations to solve problem 3 again: the 3 kg front block has $20 - T = 3a$, the 2 kg rear block has $T = 2a$.
answer: Substitute: $20 - 2a = 3a$, so $a = 4$ and $T = 8$. **Same answer: 4 m/s² and 8 N.**
:::
