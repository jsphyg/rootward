---
id: dark-matter
title: Dark matter
prereqs: [milky-way]
big: Stars far out in galaxies orbit much too fast for the gravity of everything we can see, so galaxies must hold about five times more mass than shines; this unseen mass, called dark matter, gives out no light and is probably an unknown kind of particle.
recap: If most of a galaxy's mass were in its bright centre, stars further out would orbit more slowly, with $v \propto \dfrac{1}{\sqrt{r}}$, like the planets. Instead, galaxy rotation curves stay flat: orbital speeds hold steady far beyond the visible stars. Since $M = \dfrac{v^2 r}{G}$, a flat curve means the mass inside keeps growing with distance, so there is a large halo of unseen mass. Galaxy clusters, the bending of light by gravity, and the early universe all point the same way. Dark matter makes up about 85% of all matter. It feels gravity but does not give out, absorb or reflect light, and it is not made of ordinary atoms. What it is remains one of the biggest open questions in physics.
check:
  q: Far beyond a galaxy's visible stars, gas still orbits at the same speed as further in. What does this tell us?
  options: ["There is a lot of unseen mass out there", "The galaxy has no mass in its outer parts", "Gravity is stronger far from the centre", "The gas is moving outward, not orbiting"]
  answer: 0
  why: With $M = \frac{v^2 r}{G}$, the same speed at a larger r means more mass inside, so mass keeps adding up where nothing shines. If the outer parts had no mass, speeds would fall off like the planets'. Gravity weakens with distance, not strengthens. The motion is measured as rotation: one side of the galaxy redshifted, the other blueshifted.
---

## The speed that would not drop

In the [[keplers-laws|solar system]], almost all the mass is in the Sun, so distant planets orbit slowly. Neptune moves at 5.4 km/s; the Earth at 30 km/s. From $v = \sqrt{\dfrac{GM}{r}}$, if the mass inside stays the same, speed falls as $\dfrac{1}{\sqrt{r}}$.

A galaxy's light is concentrated toward its centre. So astronomers expected the same pattern: stars far out should orbit slowly.

In the 1970s, Vera Rubin and Kent Ford measured the [[redshift|Doppler shifts]] of stars and gas across spiral galaxies. The speeds did **not** fall. Far out, beyond most of the light, they stayed almost the same. A graph of orbital speed against distance, a {{rotation-curve|rotation curve}}, is flat.

| Distance from centre | Expected if all mass is in the visible stars | Measured |
|---|---|---|
| r | 200 km/s | 200 km/s |
| 4r | 100 km/s | about 200 km/s |
| 9r | 67 km/s | about 200 km/s |

## What a flat curve means

From [[milky-way|the Milky Way page]], the mass inside an orbit is

$$M = \frac{v^2 r}{G}$$

If v stays the same while r grows, M grows in step with r. Twice as far out, twice the mass inside. The mass keeps piling up far beyond where the stars thin out. Galaxies must sit inside huge, roughly round halos of something that does not shine. It is called {{dark-matter|dark matter}}.

## More clues

| Evidence | What it shows |
|---|---|
| galaxy clusters | in 1933, Fritz Zwicky found galaxies in the Coma cluster moving far too fast to be held together by their visible mass |
| bending of light | mass bends light, as [[general-relativity|general relativity]] predicts; the bending around clusters shows far more mass than we see |
| colliding clusters | in the Bullet Cluster, the hot gas crashed and slowed, but most of the mass, mapped by bent light, passed straight through |
| the early universe | the pattern of the oldest light in the universe needs extra matter that does not interact with light |

All these methods agree: there is about **five times** as much dark matter as ordinary matter.

## What could it be?

Dark matter is not just dark gas, dead stars or black holes. Those are made of ordinary atoms, and the early universe limits how much ordinary matter there can be. It is also not a cloud blocking light: it neither absorbs nor gives out any.

The leading idea is a kind of particle not yet discovered, which feels gravity but almost nothing else. Thousands of them may be passing through you each second. Detectors deep underground are waiting to catch one. A minority of physicists instead suspect that gravity itself behaves differently over huge distances. Neither has been confirmed.

:::example
title: Stars orbit a galaxy at 200 km/s at 10 kpc ($3.1 \times 10^{20}$ m) and still at 200 km/s at 40 kpc. How much mass is inside each orbit?

1. At 10 kpc: $M = \dfrac{(2 \times 10^5)^2 \times 3.1 \times 10^{20}}{6.67 \times 10^{-11}}$.
   why: The mass inside an orbit, from its speed and radius.
   uses: [milky-way]

2. $M \approx \dfrac{4 \times 10^{10} \times 3.1 \times 10^{20}}{6.67 \times 10^{-11}} \approx 1.9 \times 10^{41}$ kg, about 90 billion solar masses.
   why: Divide, then divide by the Sun's mass, $2 \times 10^{30}$ kg.
   uses: []

3. At 40 kpc: same speed, 4 times the radius, so 4 times the mass, about 370 billion solar masses.
   why: M is in step with r when v is fixed.
   uses: []

4. **About 90 billion inside 10 kpc, but about 370 billion inside 40 kpc.** If the outer region has few stars, most of that extra mass is dark.
   why: Mass keeps rising where light does not.
   uses: []
:::

:::practice
q: If all of a galaxy's mass were at its centre, how would orbital speed at 4 times the distance compare?
answer: $v \propto \dfrac{1}{\sqrt{r}}$: **half the speed**.
:::

:::problems
q: If all the mass were at the centre, what speed would you expect at 9 times the distance?
answer: **One third of the speed.**

q: A rotation curve stays at 220 km/s from 10 kpc to 30 kpc. How does the mass inside compare?
answer: **3 times as much inside 30 kpc**, since M is in step with r.

q: Stars orbit at 250 km/s at 20 kpc ($6.2 \times 10^{20}$ m). Find the mass inside.
answer: $\dfrac{(2.5 \times 10^5)^2 \times 6.2 \times 10^{20}}{6.67 \times 10^{-11}} \approx$ **$5.8 \times 10^{41}$ kg, about 290 billion solar masses**.

q: How were galaxy rotation speeds measured?
answer: **By Doppler shifts**: one side of the galaxy is redshifted, the other blueshifted.

q: Who first showed galaxy rotation curves are flat?
answer: **Vera Rubin and Kent Ford**, in the 1970s.

q: Why can't dark matter be clouds of ordinary dark dust?
answer: **Dust absorbs and glows**, and the early universe limits how much ordinary matter there is.

q: About how much dark matter is there compared with ordinary matter?
answer: **About five times as much.**

q: How does the bending of light reveal dark matter?
answer: **The amount of bending shows how much mass is present**, and it is far more than we see.

q: Why is the Bullet Cluster strong evidence?
answer: **Most of the mass, mapped by bent light, is in a different place from the ordinary matter**, the hot gas.

q: What do physicists think dark matter most likely is?
answer: **An undiscovered particle** that feels gravity but almost nothing else.
:::
