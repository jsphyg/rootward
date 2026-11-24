---
id: black-holes
title: Black holes
prereqs: [stellar-remnants, general-relativity]
big: A black hole is a region where matter is squeezed so small that its escape velocity exceeds the speed of light, so nothing, not even light, can get out; its edge, the event horizon, has a radius of about 3 km for every solar mass.
recap: Set the escape velocity $\sqrt{2GM/R}$ equal to c, and you get the Schwarzschild radius $R_s = \dfrac{2GM}{c^2}$, about 3 km per solar mass. Anything squeezed inside it becomes a black hole, and its surface, the event horizon, is a point of no return. In general relativity, the black hole is spacetime curved so steeply that every path leads inward. Stellar black holes, a few to tens of solar masses, form when cores over about 3 solar masses collapse. Supermassive black holes, millions to billions of solar masses, sit at the centres of galaxies, including ours. We find them by their effects: stars and gas orbiting them, hot glowing discs, gravitational waves, and images of their shadows. Far from a black hole, its gravity is just that of its mass.
check:
  q: What is the Schwarzschild radius of a black hole of 10 solar masses?
  options: ["about 30 km", "about 3 km", "about 300 km", "about 10 km"]
  answer: 0
  why: $R_s$ grows in step with mass, about 3 km per solar mass, so 10 solar masses gives about 30 km. 3 km is for 1 solar mass. 300 km uses 100 solar masses, or squares the 10. 10 km takes 1 km per solar mass.
---

## Escape faster than light

From the [[escape-velocity|escape velocity page]], to leave a body of mass M from a distance R you need

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

Squeeze the same mass smaller and the escape velocity rises. For a [[stellar-remnants|neutron star]] it is already over half the speed of light. Squeeze it a little smaller and the escape velocity reaches **c**. Then not even light can get out. Setting $v_{\text{esc}} = c$ and solving for R gives the {{schwarzschild-radius|Schwarzschild radius}}:

$$R_s = \frac{2GM}{c^2} \approx 3 \text{ km} \times \frac{M}{M_\odot}$$

| Object | Mass | Schwarzschild radius |
|---|---|---|
| the Earth | $6 \times 10^{24}$ kg | about 9 mm, a marble |
| the Sun | 1 solar mass | about 3 km |
| a stellar black hole | 10 solar masses | about 30 km |
| Sagittarius A*, at the Milky Way's centre | 4 million solar masses | about 12 million km, 0.08 AU |
| the black hole in galaxy M87 | 6.5 billion solar masses | about 130 AU |

The Earth and Sun are not black holes because they are far bigger than these radii. Only something crushed inside its Schwarzschild radius becomes one.

## The event horizon

The sphere at the Schwarzschild radius is the {{event-horizon|event horizon}}. It is not a solid surface. Anything can fall through it, but nothing that crosses can ever come back out, or send a signal out.

The escape velocity idea gives the right size, but [[general-relativity|general relativity]] gives the true picture. Mass curves spacetime, and inside the horizon it is curved so steeply that **every** path, even a light ray pointed outward, leads further in. Near the horizon, clocks run very slowly as seen from far away. A falling object seems to freeze and fade at the edge, though it falls straight through by its own clock.

An object falling in is also stretched: the pull on its near end is much stronger than on its far end, the same tidal effect that raises the Earth's [[tides|tides]], but enormously stronger. Near a small black hole, this "spaghettification" would tear a person apart.

## Seeing the invisible

A black hole gives out no light of its own. Astronomers find them by their effects:

| Evidence | What is seen |
|---|---|
| orbiting stars | stars whipping round something massive and dark |
| hot discs | gas spiralling in heats to millions of degrees and glows in X-rays |
| gravitational waves | ripples in spacetime from two black holes merging, first detected in 2015 |
| shadow images | a dark circle against glowing gas, photographed for M87 in 2019 and Sagittarius A* in 2022 |

**Stellar black holes** form when a core over about 3 solar masses collapses at the end of a massive star's life. **Supermassive black holes** sit at the centres of most large galaxies. How they grew so big is still being worked out.

## Not a cosmic vacuum cleaner

Far from a black hole, its gravity is the same as any object of the same mass. If the Sun were somehow replaced by a black hole of one solar mass, the Earth would carry on in exactly the same orbit, only cold and dark.

:::example
title: Find the Schwarzschild radius of a black hole of 3 solar masses ($6.0 \times 10^{30}$ kg).

1. $R_s = \dfrac{2GM}{c^2} = \dfrac{2 \times 6.67 \times 10^{-11} \times 6.0 \times 10^{30}}{(3.0 \times 10^8)^2}$.
   why: The radius where the escape velocity equals c.
   uses: [escape-velocity]

2. Top: $8.0 \times 10^{20}$. Bottom: $9.0 \times 10^{16}$.
   why: Work out each part.
   uses: []

3. $R_s \approx 8.9 \times 10^3$ m.
   why: Divide.
   uses: []

4. **About 9 km**: three solar masses in a ball smaller than a city.
   why: About 3 km per solar mass.
   uses: []
:::

:::practice
q: Find the Schwarzschild radius of the Earth, $6.0 \times 10^{24}$ kg.
answer: $\dfrac{2 \times 6.67 \times 10^{-11} \times 6.0 \times 10^{24}}{9 \times 10^{16}} \approx$ **$8.9 \times 10^{-3}$ m, about 9 mm**.
:::

:::problems
q: Find the Schwarzschild radius of a 10 solar mass black hole.
answer: **About 30 km.**

q: Find the Schwarzschild radius of a 3 solar mass black hole.
answer: **About 9 km.**

q: Derive the Schwarzschild radius from the escape velocity.
answer: Set $\sqrt{\dfrac{2GM}{R}} = c$; square: $\dfrac{2GM}{R} = c^2$; so $R = \dfrac{2GM}{c^2}$.

q: Sagittarius A* has 4 million solar masses. Find its Schwarzschild radius in AU.
answer: $4 \times 10^6 \times 3$ km $= 1.2 \times 10^7$ km, which is $\dfrac{1.2 \times 10^7}{1.5 \times 10^8} \approx$ **0.08 AU**.

q: A star orbits Sagittarius A* every 16 years at an average distance of about 1000 AU. Find the black hole's mass.
answer: $\dfrac{1000^3}{16^2} = \dfrac{10^9}{256} \approx$ **4 million solar masses**, by the [[binary-stars|binary star]] rule.

q: If a black hole's mass doubles, what happens to its event horizon's radius?
answer: **It doubles.** $R_s$ is in step with M.

q: If the Sun became a black hole of the same mass, what would happen to the Earth's orbit?
answer: **Nothing.** At the same distance from the same mass, gravity is the same.

q: Why can't light escape from inside the event horizon?
answer: **The escape velocity there is more than c**; in relativity, spacetime is curved so every path leads inward.

q: How can we detect something that gives out no light?
answer: **By its effects**: orbiting stars, glowing hot gas, gravitational waves, and its shadow.

q: What is the minimum core mass that collapses to a black hole?
answer: **About 3 solar masses.**

q: Why isn't the Earth a black hole, though it has a Schwarzschild radius?
answer: **It is far bigger than 9 mm.** Only matter crushed inside its Schwarzschild radius becomes a black hole.
:::
