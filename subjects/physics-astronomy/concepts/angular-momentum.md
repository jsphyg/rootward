---
id: angular-momentum
title: Angular momentum
prereqs: [rotational-motion, momentum, torque]
big: A spinning object has angular momentum, its resistance to turning times its spin rate; with no outside torque it stays the same, so pulling mass inward makes the spin faster.
recap: The moment of inertia I measures how hard something is to spin up; for a small mass m at distance r, $I = mr^2$. Angular momentum is $L = I\omega$, in kg·m²/s. A net torque changes it: $\tau = I\alpha$. With no outside torque, L stays the same, so if I gets smaller, ω gets bigger: $I_1\omega_1 = I_2\omega_2$. That is why a skater spins faster with arms pulled in.
check:
  q: A skater spins at 2 turns per second with a moment of inertia of 4 kg·m². Pulling the arms in drops it to 1.6 kg·m². How fast is the spin now?
  options: ["5 turns per second", "0.8 turns per second", "2 turns per second", "3.2 turns per second"]
  answer: 0
  why: Angular momentum stays the same: $4 \times 2 = 1.6 \times \omega$, so $\omega = \frac{8}{1.6} = 5$ turns per second. 0.8 multiplies by the new I instead of dividing. 2 assumes nothing changes. 3.2 multiplies 2 by 1.6.
---

## The spinning skater

A figure skater starts a slow spin with arms out wide. Then the skater pulls both arms in tight and whirls round much faster. Nobody pushed. What caused the speed-up?

| Arms | How spread out | Spin rate |
|---|---|---|
| out wide | mass far from the spin axis | 2 turns per second |
| pulled in | mass close to the axis | 5 turns per second |

*Notice: moving mass toward the axis makes the spin faster, with no push from outside.*

## Moment of inertia

In straight-line motion, mass measures how hard something is to speed up. For spinning, what matters is not just the mass but **where** it is. Mass far from the axis is harder to swing round, because it has to move faster and further.

The {{moment-of-inertia|moment of inertia}}, I, measures this. For a small mass m at a distance r from the axis:

$$I = mr^2$$

For a larger object, add up $mr^2$ for every bit of it. A ring of mass M and radius R has all its mass at R, so $I = MR^2$. A solid disc has much of its mass nearer the middle, and works out to $I = \tfrac{1}{2}MR^2$.^[n_disc_inertia]

The spinning version of $F = ma$ is

$$\tau = I\alpha$$

A [[torque|torque]] gives an angular acceleration, smaller for a bigger I.

## Angular momentum

[[momentum|Momentum]] is mass times velocity. Its spinning partner, {{angular-momentum|angular momentum}}, is

$$L = I\omega$$

in kg·m²/s. A net torque changes L, just as a net force changes momentum.

**With no outside torque, L stays the same.** So if I shrinks, ω must grow:

$$I_1\omega_1 = I_2\omega_2$$

## Where you see it

- **Skaters and divers** pull in to spin fast, and spread out to slow down before landing.
- **The Earth** keeps spinning at almost the same rate day after day: nothing gives it a big twist.
- **Collapsing stars** spin up enormously. A star shrinking to a tiny neutron star can end up spinning hundreds of times a second.
- **Helicopters** have a tail rotor: without it, the body would spin the opposite way to the main blades.

:::example
title: A 2 kg ball on a light rod 0.5 m long spins at 4 rad/s. A string pulls the ball in to 0.25 m. Find its new angular speed.

1. Before: $I_1 = 2 \times 0.5^2 = 0.5$ kg·m², so $L = 0.5 \times 4 = 2$ kg·m²/s.
   why: A small mass at distance r has $I = mr^2$.
   uses: [rotational-motion]

2. After: $I_2 = 2 \times 0.25^2 = 0.125$ kg·m².
   why: Halving r makes $r^2$, and so I, a quarter as big.
   uses: []

3. The string pulls toward the axis, so it gives no torque, and L is kept: $0.125\,\omega_2 = 2$, so $\omega_2 = 16$ rad/s.
   why: A force pointing at the pivot has no torque.
   uses: [torque]

4. **16 rad/s, four times faster.** The kinetic energy, $\tfrac{1}{2}I\omega^2$, rises from 4 J to 16 J. The extra 12 J comes from the work done pulling the string.
   why: Angular momentum is kept, but kinetic energy is not; something had to do work.
   uses: [momentum]
:::

:::practice
q: A 3 kg mass is 2 m from a spin axis. Find its moment of inertia, and its angular momentum at 5 rad/s.
answer: $I = 3 \times 4 =$ **12 kg·m²**. $L = 12 \times 5 =$ **60 kg·m²/s**.
:::

:::problems
q: Find I for a 0.5 kg mass 0.4 m from the axis.
answer: $0.5 \times 0.16 =$ **0.08 kg·m²**.

q: A solid disc has a mass of 2 kg and a radius of 0.5 m. Find I and its angular momentum at 10 rad/s.
answer: $I = \tfrac{1}{2} \times 2 \times 0.25 =$ **0.25 kg·m²**. $L =$ **2.5 kg·m²/s**.

q: A 5 N·m torque acts on a wheel with $I = 2$ kg·m². Find α.
answer: $\alpha = \dfrac{5}{2} =$ **2.5 rad/s²**.

q: A wheel with $I = 0.4$ kg·m² must reach 50 rad/s from rest in 4 s. What torque is needed?
answer: $\alpha = 12.5$ rad/s². $\tau = 0.4 \times 12.5 =$ **5 N·m**.

q: A skater spinning at 3 turns per second halves their moment of inertia. Find the new spin rate.
answer: **6 turns per second.**

q: A skater spins at 2 turns per second with $I = 4$ kg·m², then pulls in to $I = 1.6$ kg·m². Find the new spin.
answer: **5 turns per second.**

q: A merry-go-round with $I = 200$ kg·m² turns at 1 rad/s. A 50 kg child jumps onto its edge, 2 m out. Find the new angular speed.
answer: The child adds $50 \times 4 = 200$ kg·m². $200 \times 1 = 400\,\omega$, so **ω = 0.5 rad/s**.

q: A diver leaves the board spinning slowly, then tucks into a tight ball. What happens, and why?
answer: **The spin speeds up.** Tucking lowers I, and L stays the same in the air.

q: Why does a helicopter need a small tail rotor?
answer: **To stop the body spinning.** The engine twists the main blades one way; the body would twist the other way to keep the total angular momentum zero.

q: A star spinning once every 25 days collapses from a radius of $7 \times 10^8$ m to $1 \times 10^4$ m. Roughly how fast does it spin now? (Treat I as proportional to $r^2$.)
answer: I falls by $(7 \times 10^4)^2 = 4.9 \times 10^9$ times, so the spin rises by that much. $\dfrac{25 \times 86{,}400}{4.9 \times 10^9} \approx$ **0.00044 s per turn**, over 2000 turns a second. Real neutron stars lose some spin as they collapse, but many still turn hundreds of times a second.

q: Show that kg·m²/s is the right unit for $L = I\omega$.
answer: I is in kg·m² and ω in rad/s. Radians have no unit, so **kg·m²/s**.

q: Two wheels have the same mass and radius: one solid, one a ring. Which is harder to spin up?
answer: **The ring** ($I = MR^2$ against $\tfrac{1}{2}MR^2$), because all its mass is far from the axis.
:::
