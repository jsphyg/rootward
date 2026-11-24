---
id: keplers-laws
title: Kepler's laws of planetary motion
prereqs: [orbits]
big: Planets move on ellipses with the Sun at one focus, speed up when closer to the Sun, and take longer to orbit the further out they are, with the period squared proportional to the distance cubed.
recap: Kepler's three laws. 1: each planet moves on an ellipse, with the Sun at one focus. 2: a line from the Sun to the planet sweeps out equal areas in equal times, so a planet moves fastest when nearest the Sun. 3: the period squared is proportional to the average distance cubed, $T^2 \propto a^3$. With T in years and a in astronomical units (AU), $T^2 = a^3$ for anything orbiting the Sun.
check:
  q: An asteroid orbits the Sun at an average distance of 4 AU. How long does one orbit take?
  options: ["8 years", "16 years", "4 years", "64 years"]
  answer: 0
  why: $T^2 = a^3 = 4^3 = 64$, so $T = \sqrt{64} = 8$ years. 16 squares the distance instead of cubing and rooting. 4 assumes the period equals the distance. 64 is $T^2$, before the square root.
---

## Patterns in the sky

Around 1600, Johannes Kepler worked for years through the careful planet measurements of Tycho Brahe. He found three rules that every planet obeys. He did not know why. Newton later showed that all three follow from his law of gravitation.^[n_kepler_history]

## Law 1: ellipses

Planets do not move on perfect circles. Each moves on an {{ellipse|ellipse}}, a stretched circle. An ellipse has two special points inside it called foci. The Sun sits at one focus; the other is empty.

The **semi-major axis**, a, is half the ellipse's longest width. It works as the planet's average distance from the Sun.

Most planets' ellipses are very nearly circles: the Earth's distance from the Sun varies by only about 3%. Comets have long, thin ellipses that swing close to the Sun and far out again.

## Law 2: equal areas

Draw a line from the Sun to the planet. As the planet moves, the line sweeps out an area. Kepler found it sweeps **equal areas in equal times**.

Near the Sun, the line is short, so to sweep the same area the planet must cover more ground: it moves faster. Far from the Sun, the line is long, and the planet moves slowly. The Earth is fastest in early January, when it is closest to the Sun.^[n_equal_areas]

## Law 3: the period rule

Planets further out take longer to go round, by a precise rule:

$$T^2 \propto a^3$$

| Planet | Average distance a (AU) | Period T (years) | $a^3$ | $T^2$ |
|---|---|---|---|---|
| Mercury | 0.387 | 0.241 | 0.058 | 0.058 |
| Earth | 1 | 1 | 1 | 1 |
| Mars | 1.52 | 1.88 | 3.51 | 3.53 |
| Jupiter | 5.20 | 11.86 | 140.6 | 140.7 |

*Notice: the last two columns match. The period squared equals the distance cubed.*

The {{astronomical-unit|astronomical unit}}, AU, is the Earth's average distance from the Sun, about $1.5 \times 10^{11}$ m. Measured in AU and years, the rule for the Sun's planets is simply $T^2 = a^3$.

**Where law 3 comes from.** For a circular [[orbits|orbit]], $v = \sqrt{\dfrac{GM}{r}}$ and $T = \dfrac{2\pi r}{v}$. Square the second and put in the first:

$$T^2 = \frac{4\pi^2 r^2}{v^2} = \frac{4\pi^2}{GM}\,r^3$$

Everything in front of $r^3$ depends only on the Sun's mass, so it is the same for every planet. The rule works around any central body, with a different constant: for the Earth's moons and satellites, use the Moon as the comparison instead of the Earth.

:::example
title: Mars's average distance from the Sun is 1.52 AU. How long is a Martian year?

1. Kepler's third law in AU and years: $T^2 = a^3$.
   why: Mars orbits the Sun, so the Earth's 1 AU, 1 year sets the scale.
   uses: [orbits]

2. $a^3 = 1.52^3 = 1.52 \times 1.52 \times 1.52 \approx 3.51$.
   why: Cube the distance.
   uses: []

3. $T = \sqrt{3.51} \approx 1.87$ years.
   why: Take the square root to undo the square on T.
   uses: []

4. **About 1.88 years** (687 Earth days), allowing for rounding.
   why: $1.88 \times 365 \approx 687$.
   uses: []
:::

:::practice
q: An asteroid's average distance from the Sun is 9 AU. Find its period.
answer: $T^2 = 729$, so **T = 27 years**.
:::

:::problems
q: An asteroid orbits at 4 AU. Find its period.
answer: **8 years.**

q: Jupiter is 5.2 AU from the Sun. Find its period.
answer: $\sqrt{5.2^3} = \sqrt{140.6} \approx$ **11.9 years**.

q: Saturn is 9.54 AU from the Sun. Find its period.
answer: $\sqrt{868} \approx$ **29.5 years**.

q: Mercury is 0.387 AU from the Sun. Find its period in days.
answer: $\sqrt{0.058} \approx 0.241$ years $\approx$ **88 days**.

q: An asteroid takes 8 years to orbit the Sun. Find its average distance.
answer: $a^3 = 64$, so **a = 4 AU**.

q: Halley's Comet takes about 76 years per orbit. Find its average distance from the Sun.
answer: $a^3 = 76^2 = 5776$, so $a = \sqrt[3]{5776} \approx$ **18 AU**.

q: Where in its orbit does a comet move fastest?
answer: **Nearest the Sun**, by the equal-areas law.

q: The Earth is closest to the Sun in early January. Is it moving faster then, or in July?
answer: **In January.** Closer means faster.

q: A planet is 4 times as far from its star as another planet. How many times longer is its year?
answer: $T^2 \propto 4^3 = 64$, so **8 times longer**.

q: The Moon takes 27.3 days to orbit the Earth at $3.84 \times 10^8$ m. A satellite takes 1 day. Use Kepler's third law to find its orbit radius.
answer: $\left(\dfrac{r}{3.84 \times 10^8}\right)^3 = \left(\dfrac{1}{27.3}\right)^2$, so $r = 3.84 \times 10^8 \times \left(\dfrac{1}{27.3}\right)^{2/3} \approx$ **$4.2 \times 10^7$ m**, the geostationary orbit.

q: Can you use $T^2 = a^3$ (in years and AU) for the Moon going around the Earth?
answer: **No.** That form only works for things orbiting the Sun. Around the Earth, the constant is different, because the Earth's mass is different.

q: Why do the outer planets take so much longer to orbit than the inner ones?
answer: **They have further to go, and they move more slowly**, because the Sun's pull is weaker out there. Both effects add up.
:::
