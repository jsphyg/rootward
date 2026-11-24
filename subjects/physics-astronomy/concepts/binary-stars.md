---
id: binary-stars
title: Weighing stars with binary orbits
prereqs: [keplers-laws, redshift]
big: Many stars come in pairs that orbit each other; timing the orbit and measuring its size gives, through Kepler's third law, the total mass of the pair, and this is how we know the masses of stars.
recap: A binary star is two stars orbiting their common centre of mass. Newton's version of Kepler's third law, in years, AU and solar masses, is $M_1 + M_2 = \dfrac{a^3}{T^2}$, where a is the size of the orbit and T the period. The heavier star sits closer to the centre of mass: $M_1 a_1 = M_2 a_2$, which splits the total into the two masses. Some binaries are seen as two dots (visual), some only by their spectral lines shifting back and forth (spectroscopic), some by dimming as one star passes in front of the other (eclipsing).
check:
  q: Two stars orbit each other every 2 years, 4 AU apart. What is their total mass?
  options: ["16 solar masses", "8 solar masses", "64 solar masses", "4 solar masses"]
  answer: 0
  why: $M_1 + M_2 = \dfrac{a^3}{T^2} = \dfrac{4^3}{2^2} = \dfrac{64}{4} = 16$ solar masses. 8 divides by $T^3$ instead of $T^2$. 64 forgets to divide by the period at all. 4 squares the distance instead of cubing it.
---

## Stars come in pairs

About half of all Sun-like stars have a partner. The two stars orbit each other, held by gravity, just like a planet and the Sun. Such a pair is a {{binary-star|binary star}}.

Binaries matter because they are the only direct way to **weigh** a star. You cannot put a star on scales. But you can watch how fast something orbits it, and gravity does the rest.

## Kepler's law, with masses

For the planets, [[keplers-laws|Kepler's third law]] says $T^2 = a^3$, in years and AU. Newton showed the full rule includes the masses involved. In years, AU and solar masses:

$$M_1 + M_2 = \frac{a^3}{T^2}$$

| Symbol | Means | Unit |
|---|---|---|
| a | the average distance between the two stars | AU |
| T | the time for one orbit | years |
| $M_1 + M_2$ | the total mass of the pair | solar masses |

Check it on the Earth and Sun: $a = 1$, $T = 1$, so the total is 1 solar mass. The Earth's own mass is too small to notice.

*Notice: a heavier pair pulls harder, so at the same distance it orbits faster.*

## Splitting the total

Both stars orbit a shared balance point, the **centre of mass**. Like a seesaw, the heavier star sits closer to it:

$$M_1 a_1 = M_2 a_2$$

where $a_1$ and $a_2$ are each star's distance from the centre of mass. If star 1's orbit is half the size of star 2's, star 1 is twice as heavy.

## Three ways to spot a binary

| Kind | How it is seen |
|---|---|
| visual | both stars are seen through a telescope, moving round each other |
| spectroscopic | too close to separate, but the spectral lines [[redshift|shift back and forth]] as each star swings toward and away from us |
| eclipsing | the orbit is edge-on, so the stars take turns passing in front of each other and the light dips |

Spectroscopic binaries give the stars' orbital speeds directly from the Doppler shifts. Eclipsing binaries give their sizes, from how long each dip lasts.

:::example
title: Sirius and its faint partner orbit each other every 50 years, about 20 AU apart. The partner's orbit is twice the size of Sirius's. Find both masses.

1. Total: $M_1 + M_2 = \dfrac{20^3}{50^2} = \dfrac{8000}{2500}$.
   why: Kepler's third law, in AU, years and solar masses.
   uses: [keplers-laws]

2. Total $= 3.2$ solar masses.
   why: Divide.
   uses: []

3. Sirius's orbit is half the partner's, so Sirius is twice as heavy: $M_1 = 2M_2$, and $3M_2 = 3.2$.
   why: $M_1 a_1 = M_2 a_2$, with $a_2 = 2a_1$.
   uses: []

4. **Sirius: about 2.1 solar masses. Partner: about 1.1 solar masses.** (Careful measurements give 2.06 and 1.02.)
   why: $M_2 \approx 1.07$, and $M_1 = 2 \times 1.07$.
   uses: []
:::

:::practice
q: Two stars orbit every 10 years, 10 AU apart. Find their total mass.
answer: $\dfrac{10^3}{10^2} =$ **10 solar masses**.
:::

:::problems
q: Two stars orbit every 2 years, 4 AU apart. Find their total mass.
answer: **16 solar masses.**

q: Two stars orbit every year, 2 AU apart. Find their total mass.
answer: $\dfrac{2^3}{1^2} =$ **8 solar masses**.

q: Two stars orbit every 27 years, 9 AU apart. Find their total mass.
answer: $\dfrac{729}{729} =$ **1 solar mass**.

q: Alpha Centauri A and B orbit every 79.9 years, 23.4 AU apart. Find their total mass.
answer: $\dfrac{23.4^3}{79.9^2} \approx \dfrac{12{,}800}{6380} \approx$ **2.0 solar masses**.

q: A pair has a total mass of 2 solar masses and orbits 8 AU apart. Find the period.
answer: $T^2 = \dfrac{8^3}{2} = 256$, so **T = 16 years**.

q: In a binary, star A is 1 AU from the centre of mass and star B is 3 AU from it. Which is heavier, and by how much?
answer: **Star A, 3 times as heavy.** The heavier star is closer to the balance point.

q: A pair has a total of 4 solar masses, and one star is 3 times as heavy as the other. Find each mass.
answer: **3 and 1 solar masses.**

q: A star's spectral lines shift to longer wavelengths, then shorter, then longer again, every 6 days. What is going on?
answer: **It is a spectroscopic binary**: it orbits a partner every 6 days, moving away, then toward us.

q: A star's light dips by a third every 3.5 days, for a few hours. What could cause this?
answer: **An eclipsing binary**: a partner passes in front of it each orbit.

q: Why can't we find a single star's mass the way we find a binary's?
answer: **Nothing visible orbits it**, and mass is measured by the orbits it causes.
:::
