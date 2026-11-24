---
id: collisions
title: Elastic and inelastic collisions
prereqs: [conservation-of-momentum, kinetic-energy, systems-of-equations]
big: Momentum is kept in every collision, but kinetic energy is kept only in an elastic one; in an inelastic collision some turns into heat and sound, most of all when the objects stick together.
recap: In every collision, total momentum is conserved. In an elastic collision, total kinetic energy is also conserved, and the objects bounce apart. In an inelastic collision, some kinetic energy becomes heat, sound and bending. When the objects stick together (perfectly inelastic), $v = \dfrac{m_1u_1 + m_2u_2}{m_1 + m_2}$, and the most energy is lost. For an elastic head-on hit on a still object, $v_1 = \dfrac{m_1 - m_2}{m_1 + m_2}u$ and $v_2 = \dfrac{2m_1}{m_1 + m_2}u$.
check:
  q: A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest, and they stick together. How much kinetic energy is lost?
  options: ["3 J", "0 J", "9 J", "6 J"]
  answer: 0
  why: Momentum: $2 \times 3 = 6$ before, so together $v = \frac{6}{3} = 2$ m/s. KE before $\tfrac{1}{2} \times 2 \times 9 = 9$ J; after $\tfrac{1}{2} \times 3 \times 4 = 6$ J. Lost: 3 J. 0 J assumes kinetic energy is always kept, but only momentum is. 9 J assumes it all goes, but the carts are still moving. 6 J is the energy left, not the energy lost.
---

## Bouncy and sticky

Drop a superball and it bounces back almost to your hand. Drop a lump of clay and it splats and stays put. Both collisions keep [[conservation-of-momentum|momentum]] (counting the Earth). They differ in what happens to kinetic energy.

| Type | Objects afterward | Momentum | Kinetic energy |
|---|---|---|---|
| {{elastic-collision|elastic}} | bounce apart | kept | kept |
| {{inelastic-collision|inelastic}} | bounce apart, more slowly | kept | some lost |
| perfectly inelastic | stick together | kept | most lost |

*Notice: momentum is kept in every row. Kinetic energy is the one that can change.*

"Lost" kinetic energy is not destroyed. It becomes heat, sound, and the work of denting and bending. Most real collisions are partly inelastic. Billiard balls and steel balls come close to elastic. Car crashes are very inelastic, by design: the crumpling soaks up energy.

## Sticking together

When the objects stick, they share one final velocity. Momentum alone gives it:

$$m_1u_1 + m_2u_2 = (m_1 + m_2)v$$

Here u means velocity before and v velocity after.

## Elastic collisions

Now there are two unknowns, both final velocities, so you need two equations. Momentum gives one and kinetic energy gives the other. Solving them as a [[systems-of-equations|system]], for a head-on hit where object 2 starts at rest, gives:^[n_elastic_solve]

$$v_1 = \frac{m_1 - m_2}{m_1 + m_2}\,u \qquad v_2 = \frac{2m_1}{m_1 + m_2}\,u$$

| Case | What happens |
|---|---|
| equal masses | the first stops dead and the second takes its speed (a pool shot, a Newton's cradle) |
| heavy hits light | heavy barely slows; light shoots off at nearly twice the speed |
| light hits heavy | light bounces back; heavy barely moves |

:::example
title: A 1 kg ball at 6 m/s hits a 2 kg ball at rest, head-on and elastically. Find both velocities afterwards, and check the answer.

1. First ball: $v_1 = \dfrac{1 - 2}{1 + 2} \times 6 = -\dfrac{1}{3} \times 6 = -2$ m/s.
   why: The elastic-collision formula. The minus sign means it bounces back.
   uses: [systems-of-equations]

2. Second ball: $v_2 = \dfrac{2 \times 1}{3} \times 6 = 4$ m/s.
   why: The same pair of formulas.
   uses: []

3. Check momentum: before $1 \times 6 = 6$; after $1 \times (-2) + 2 \times 4 = -2 + 8 = 6$. Kept.
   why: Every collision must pass this check.
   uses: [conservation-of-momentum]

4. Check energy: before $\tfrac{1}{2} \times 1 \times 36 = 18$ J; after $\tfrac{1}{2} \times 1 \times 4 + \tfrac{1}{2} \times 2 \times 16 = 2 + 16 = 18$ J. Kept. **The 1 kg ball bounces back at 2 m/s; the 2 kg ball moves off at 4 m/s.**
   why: An elastic collision must keep kinetic energy too.
   uses: [kinetic-energy]
:::

:::practice
q: A 1000 kg car at 20 m/s runs into a 1500 kg car at rest. They lock together. How fast do they move just after?
answer: $v = \dfrac{1000 \times 20}{2500} =$ **8 m/s**.
:::

:::problems
q: A 2 kg cart at 3 m/s sticks to a 1 kg cart at rest. Find the final speed and the KE lost.
answer: **2 m/s; 3 J lost** (9 J before, 6 J after).

q: For the two cars that locked together at 8 m/s, how much kinetic energy was lost?
answer: Before $\tfrac{1}{2} \times 1000 \times 400 = 200{,}000$ J. After $\tfrac{1}{2} \times 2500 \times 64 = 80{,}000$ J. Lost: **120,000 J**.

q: Two 2 kg carts move toward each other at 4 m/s each, and stick. What happens?
answer: Total momentum $8 - 8 = 0$, so **they stop dead**, and all 32 J of kinetic energy is lost.

q: A 0.5 kg ball at 5 m/s hits an identical ball at rest, elastically and head-on. What happens?
answer: **The first stops; the second moves off at 5 m/s.**

q: A 3 kg ball at 4 m/s hits a 1 kg ball at rest, elastically and head-on. Find both velocities.
answer: $v_1 = \dfrac{2}{4} \times 4 =$ **2 m/s**; $v_2 = \dfrac{6}{4} \times 4 =$ **6 m/s**. Check: momentum $12 = 6 + 6$; KE $24 = 6 + 18$.

q: A 1 kg ball at 10 m/s hits a 9 kg ball at rest, elastically. Find both velocities.
answer: $v_1 = \dfrac{-8}{10} \times 10 =$ **−8 m/s** (bounces back); $v_2 = \dfrac{2}{10} \times 10 =$ **2 m/s**.

q: A ball hits a very heavy wall elastically at 6 m/s. How fast does it bounce back?
answer: **6 m/s.** With $m_2$ huge, $v_1 \approx -u$.

q: A 0.01 kg bullet at 300 m/s lodges in a 2 kg wooden block at rest. How fast does the block move?
answer: $v = \dfrac{0.01 \times 300}{2.01} \approx$ **1.49 m/s**.

q: How much of the bullet's kinetic energy is lost in that collision?
answer: Before: $\tfrac{1}{2} \times 0.01 \times 90{,}000 = 450$ J. After: $\tfrac{1}{2} \times 2.01 \times 1.49^2 \approx 2.2$ J. **About 448 J, over 99%**, goes into heat and splintering wood.

q: The block hangs on strings like a pendulum. How high does it swing after the bullet hits?
answer: Energy after the hit becomes PE: $h = \dfrac{v^2}{2g} = \dfrac{1.49^2}{19.6} \approx$ **0.11 m** (about 11 cm). Measuring that height is an old way of finding a bullet's speed.

q: Which quantity is always conserved in a collision, momentum or kinetic energy?
answer: **Momentum**, as long as no outside force acts. Kinetic energy is kept only in elastic collisions.

q: Can the total kinetic energy go **up** in a collision?
answer: **Only if stored energy is released**, as when a spring between the objects lets go, or in an explosion. A plain collision cannot gain kinetic energy.
:::
