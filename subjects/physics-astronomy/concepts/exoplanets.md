---
id: exoplanets
title: Planets around other stars
prereqs: [redshift, planets]
big: Thousands of planets have been found orbiting other stars, mostly not by seeing them but by their effects on their star: a tiny back-and-forth wobble in its spectral lines, or a tiny dip in its light as the planet passes in front.
recap: An exoplanet is a planet orbiting another star. Planets are too faint to see next to their stars, so most are found indirectly. The radial velocity method spots the star's wobble: as the planet tugs it, the star's lines redshift and blueshift; a bigger shift means a heavier planet. The transit method spots the dip in starlight when the planet crosses the star; the fraction dimmed is $\left(\dfrac{R_{\text{planet}}}{R_{\text{star}}}\right)^2$, giving the planet's size. The time between dips is the year, and Kepler's third law gives the distance. The first planet around a Sun-like star was found in 1995; over 5000 are now known. The habitable zone is the range of distances where water could be liquid.
check:
  q: A planet passes in front of a Sun-like star and dims it by 1%. How big is the planet compared with the star?
  options: ["one tenth of the star's radius", "one hundredth of the star's radius", "one thousandth of the star's radius", "the same size"]
  answer: 0
  why: The dip is the fraction of the star's disc blocked: $\left(\frac{R_p}{R_s}\right)^2 = 0.01$, so $\frac{R_p}{R_s} = \sqrt{0.01} = 0.1$. One hundredth forgets that area goes as radius squared. One thousandth makes the same slip worse. The same size would blot out the whole star.
---

## Lost in the glare

Finding a planet around another star is like spotting a firefly beside a searchlight from thousands of kilometres away. The Sun is about ten billion times brighter than the Earth in visible light. So nearly all {{exoplanet|exoplanets}} have been found not by seeing them, but by watching what they do to their star.

## The wobble method

A planet does not simply orbit a star. Both orbit their shared centre of mass, as in a [[binary-stars|binary star]]. The star is much heavier, so it moves in a small circle, but it does move. As it swings toward and away from us, its spectral lines [[redshift|shift]] blue and red, back and forth, once per orbit.

| Planet | Sun's wobble speed it causes |
|---|---|
| Jupiter | about 12.5 m/s, a running pace |
| Earth | about 0.09 m/s, a slow crawl |

The star's speed times its mass equals the planet's speed times its mass, as momentum balances, so a bigger wobble means a heavier planet. Today's best spectrographs can measure wobbles under 1 m/s. This is the {{radial-velocity|radial velocity method}}.

In 1995, Michel Mayor and Didier Queloz found 51 Pegasi b this way: a planet half Jupiter's mass, orbiting its star every 4.2 days, far closer than Mercury is to the Sun. Nobody had expected giant planets so close in. These "hot Jupiters" were the easiest to find first, because they cause big, fast wobbles.

## The transit method

If a planet's orbit is edge-on to us, it passes in front of its star once each orbit and blocks a little light. The star dims by the fraction of its disc that is covered:

$$\text{fraction dimmed} = \left(\frac{R_{\text{planet}}}{R_{\text{star}}}\right)^2$$

| Planet crossing the Sun | Dip in light |
|---|---|
| Jupiter (a tenth of the Sun's radius) | about 1% |
| Earth (a hundredth of the Sun's radius) | about 0.008% |

The depth gives the planet's **size**. The time between dips is its **year**, and [[keplers-laws|Kepler's third law]] then gives its **distance** from the star. Space telescopes like Kepler and TESS have found thousands of planets this way, by watching hundreds of thousands of stars at once.

*Notice: the two methods together are powerful. The wobble gives the mass, the transit gives the size, and mass over volume gives the [[density|density]], which shows whether the planet is rock or gas.*

## What has been found

Over 5000 exoplanets are now known, and the count keeps rising. Most stars probably have planets. Many kinds have no match in our [[planets|solar system]], such as "super-Earths", between the Earth and Neptune in size, which turn out to be the most common kind.

The {{habitable-zone|habitable zone}} is the band of distances from a star where a planet could be the right temperature for liquid water on its surface. For the Sun, it includes the Earth's orbit. For a dim red star, it is much closer in. The next big goal is to read the light passing through these planets' atmospheres, looking for gases like oxygen that could signal life.

:::example
title: A Sun-like star's light dips by 1% every 3 months. Find the planet's size and its distance from the star.

1. $\left(\dfrac{R_p}{R_s}\right)^2 = 0.01$, so $\dfrac{R_p}{R_s} = 0.1$.
   why: The dip is the fraction of the star's disc blocked.
   uses: []

2. The planet's radius is a tenth of the Sun's: about $7 \times 10^4$ km, the size of Jupiter.
   why: The Sun's radius is about 700,000 km.
   uses: []

3. Its year is 3 months, 0.25 years, so $a^3 = T^2 = 0.0625$ and $a = 0.0625^{1/3}$.
   why: Kepler's third law, for a star of one solar mass.
   uses: [keplers-laws]

4. **A Jupiter-sized planet about 0.4 AU from its star**, about where Mercury is in our system.
   why: $0.0625^{1/3} \approx 0.40$.
   uses: []
:::

:::practice
q: A planet a hundredth of its star's radius crosses the star. How much does the star dim?
answer: $0.01^2 = 0.0001$, **0.01%**.
:::

:::problems
q: A planet dims its star by 1%. Find its radius compared with the star's.
answer: **One tenth.**

q: A planet dims its star by 0.25%. Find its radius compared with the star's.
answer: $\sqrt{0.0025} =$ **0.05, one twentieth**.

q: A planet half the radius of its small red star crosses it. How much does the star dim?
answer: $0.5^2 =$ **25%**.

q: Jupiter's radius is 0.1 of the Sun's. How much would it dim the Sun, seen from far away?
answer: **About 1%.**

q: A planet's transits are 8 years apart around a Sun-like star. Find its distance.
answer: $a = 8^{2/3} =$ **4 AU**.

q: A star's lines shift back and forth every 4.2 days. What could be orbiting it, and how far out is it?
answer: **A planet with a 4.2-day year**: $a = (0.0115)^{2/3} \approx$ **0.05 AU**, very close in.

q: Which causes a bigger wobble in the Sun, Jupiter or Earth, and why?
answer: **Jupiter**, about 140 times bigger: it is 318 times heavier, though it moves more slowly.

q: Why were hot Jupiters found first?
answer: **They make the biggest, fastest wobbles**, the easiest to detect.

q: The transit gives a planet's size and the wobble its mass. What do the two together reveal?
answer: **Its density**, which shows whether it is rocky or gassy.

q: Why can most planets' transits not be seen from Earth?
answer: **Their orbits are not edge-on to us**, so they never pass in front of their stars from our view.

q: What is the habitable zone?
answer: **The range of distances from a star where liquid water could exist on a planet's surface.**
:::
