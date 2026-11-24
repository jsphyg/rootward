---
id: orbits
title: Circular orbits
prereqs: [gravitation, circular-motion]
big: An orbiting satellite is falling all the time, but it moves sideways so fast that it keeps missing the planet; gravity supplies exactly the inward pull a circle needs.
recap: In a circular orbit, gravity provides the centripetal force: $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}$, so $v = \sqrt{\dfrac{GM}{r}}$. The satellite's own mass cancels. Higher orbits are slower and take longer: the period is $T = \dfrac{2\pi r}{v}$. Astronauts float because they and their craft fall together, not because gravity is missing.
check:
  q: On the space station, 400 km up, gravity is still about 90% as strong as on the ground. Why do astronauts float?
  options: ["They and the station are falling together, so nothing presses them against the floor", "There is no gravity in space", "They are too far from the Earth to feel its pull", "The station's air pressure holds them up"]
  answer: 0
  why: Gravity is the very thing keeping the station in orbit; the station and everyone in it fall around the Earth at the same rate, so the floor never pushes up on them. "No gravity in space" and "too far away" are both wrong: the gravity page shows g is about 8.7 m/s² there. Air pressure pushes equally in all directions and holds nothing up.
---

## Newton's cannon

Imagine a cannon on a very tall mountain, above the air, firing sideways.

| Launch speed | What happens |
|---|---|
| slow | the ball curves down and lands nearby |
| faster | it lands much further away |
| about 7.9 km/s | the ground curves away as fast as the ball falls: it never lands |
| faster still | it swings out into a stretched, oval orbit |

*Notice: an orbit is not floating. It is falling while moving sideways so fast that the Earth's surface curves away beneath you.*

## The orbit speed

In a circular {{orbit|orbit}}, the only force on the satellite is gravity, pointing toward the planet's centre. That is exactly the centripetal force a circle needs, from the [[circular-motion|circular motion]] page:

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

Here r is the distance from the planet's **centre**, not the height above the ground. The satellite's mass m cancels, and one r cancels:

$$v = \sqrt{\frac{GM}{r}}$$

The time for one orbit, the period, is the circumference divided by the speed:

$$T = \frac{2\pi r}{v}$$

## What this tells you

- **The satellite's mass does not matter.** A spanner and a space station at the same height orbit at the same speed side by side.
- **Higher orbits are slower.** Bigger r means smaller v, and a longer path too, so the period grows quickly.
- **Each height has one speed.** Go faster than $\sqrt{GM/r}$ and the orbit stretches out; go slower and it dips toward the planet.

## Floating astronauts

Astronauts on the space station look weightless, but gravity is pulling them nearly as hard as on the ground. They float because they are falling around the Earth together with the station. Nothing presses them against the floor, so they feel no weight. This is called {{weightlessness|weightlessness}}, or free fall. You feel the same thing for a moment at the top of a roller coaster's drop.

:::example
title: The space station orbits 400 km above the ground. The Earth's radius is $6.37 \times 10^6$ m and $GM = 3.98 \times 10^{14}$ m³/s². Find its speed and period.

1. The orbit radius is measured from the centre: $r = 6.37 \times 10^6 + 0.4 \times 10^6 = 6.77 \times 10^6$ m.
   why: The law of gravitation uses distances between centres.
   uses: [gravitation]

2. Speed: $v = \sqrt{\dfrac{3.98 \times 10^{14}}{6.77 \times 10^6}} = \sqrt{5.88 \times 10^7} \approx 7670$ m/s.
   why: Gravity provides exactly the centripetal force.
   uses: [circular-motion]

3. Period: $T = \dfrac{2\pi \times 6.77 \times 10^6}{7670} \approx 5550$ s.
   why: One lap is the circumference.
   uses: []

4. **About 7.7 km/s, and one orbit every 92 minutes**, so the crew see about 16 sunrises a day.
   why: $5550 \div 60 \approx 92$ minutes, and $1440 \div 92 \approx 16$.
   uses: []
:::

:::practice
q: A satellite orbits at $r = 1.27 \times 10^7$ m from the Earth's centre, twice the Earth's radius. Using $GM = 3.98 \times 10^{14}$ m³/s², find its speed.
answer: $v = \sqrt{\dfrac{3.98 \times 10^{14}}{1.27 \times 10^7}} \approx$ **5590 m/s** (5.6 km/s).
:::

:::problems
q: Find the period of the satellite at twice the Earth's radius, moving at 5590 m/s.
answer: $T = \dfrac{2\pi \times 1.27 \times 10^7}{5590} \approx 14{,}300$ s, about **4 hours**.

q: Use $v = \sqrt{GM/r}$ to find the Moon's orbital speed, at $3.84 \times 10^8$ m.
answer: $\sqrt{\dfrac{3.98 \times 10^{14}}{3.84 \times 10^8}} \approx$ **1020 m/s**, matching the speed found from its period on the circular motion page.

q: A satellite is moved to a higher orbit. Does it go faster or slower?
answer: **Slower**, since $v = \sqrt{GM/r}$ falls as r grows.

q: Two satellites, 100 kg and 5000 kg, share the same orbit. Which moves faster?
answer: **Neither.** The satellite's mass cancels.

q: An orbit's radius is made 4 times bigger. What happens to the speed?
answer: $\sqrt{4} = 2$: **it halves.**

q: The Earth orbits the Sun at $1.5 \times 10^{11}$ m. The Sun's $GM$ is $1.33 \times 10^{20}$ m³/s². Find the Earth's speed.
answer: $\sqrt{\dfrac{1.33 \times 10^{20}}{1.5 \times 10^{11}}} \approx$ **29,800 m/s**, about 30 km/s.

q: The Earth moves at 29,800 m/s at $1.5 \times 10^{11}$ m from the Sun. Find the Sun's mass.
answer: From $v^2 = \dfrac{GM}{r}$: $M = \dfrac{v^2 r}{G} = \dfrac{(29{,}800)^2 \times 1.5 \times 10^{11}}{6.67 \times 10^{-11}} \approx$ **$2.0 \times 10^{30}$ kg**. This is how astronomers weigh stars.

q: A geostationary satellite stays above one spot, so its period is one day (86,400 s). Find its orbit radius.
answer: Put $v = \dfrac{2\pi r}{T}$ into $v^2 = \dfrac{GM}{r}$: $r^3 = \dfrac{GMT^2}{4\pi^2} \approx 7.5 \times 10^{22}$, so **r ≈ $4.2 \times 10^7$ m**, about 36,000 km above the ground.

q: Why does a satellite in a low orbit need to go faster than one in a high orbit?
answer: **Gravity is stronger close in**, so it needs more speed for the path to curve only as fast as the planet's surface does.

q: Why do astronauts on the space station float?
answer: **They are in free fall with the station**, so nothing pushes on them to give the feeling of weight.

q: A rocket puts a satellite at 400 km up but only gives it 6 km/s sideways. What happens?
answer: **It falls back in.** It needs about 7.7 km/s there; any slower and its path curves down into the atmosphere.

q: Does the space station need its engine running to stay in orbit?
answer: **No.** Once moving fast enough, gravity alone keeps it circling. (It does fire small boosts now and then, because the thin air up there slowly drags it down.)
:::
