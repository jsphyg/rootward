---
id: astronomical-distances
title: Distances in space (AU, light-year, parsec)
prereqs: [unit-conversion, velocity]
big: Space is so big that metres are useless; astronomers use the astronomical unit for the solar system, and the light-year and parsec for the stars and beyond.
recap: The astronomical unit (AU) is the Earth's average distance from the Sun, $1.496 \times 10^{11}$ m. The light-year (ly) is the distance light travels in a year, $9.46 \times 10^{15}$ m, about 63,000 AU. The parsec (pc) is $3.09 \times 10^{16}$ m, or 3.26 ly; it comes from parallax. Because light takes time to travel, looking far away means looking back in time.
check:
  q: The nearest star beyond the Sun, Proxima Centauri, is 4.24 light-years away. About how far is that in kilometres?
  options: ["about 4 × 10¹³ km", "about 4 × 10¹⁶ km", "about 1.3 × 10⁸ km", "about 6.3 × 10⁴ km"]
  answer: 0
  why: One light-year is $9.46 \times 10^{15}$ m $= 9.46 \times 10^{12}$ km, so $4.24 \times 9.46 \times 10^{12} \approx 4 \times 10^{13}$ km. $4 \times 10^{16}$ forgets to turn metres into kilometres. $1.3 \times 10^8$ km is close to the Earth-Sun distance. $6.3 \times 10^4$ is the number of AU in a light-year.
---

## Why new units?

The Moon is 384,000 km away. The Sun is 150 million km. The nearest star is 40 million million km. The numbers get silly fast. So astronomers use bigger rulers, and [[unit-conversion|unit conversion]] lets you move between them.

| Unit | Defined as | In metres |
|---|---|---|
| astronomical unit (AU) | Earth's average distance from the Sun | $1.496 \times 10^{11}$ |
| light-year (ly) | distance light travels in one year | $9.46 \times 10^{15}$ |
| parsec (pc) | distance at which 1 AU spans 1″ (see the next page) | $3.09 \times 10^{16}$ |

Useful links: 1 ly ≈ 63,000 AU, and 1 pc ≈ 3.26 ly.

| What | Distance |
|---|---|
| Sun | 1 AU, 8.3 light-minutes |
| Neptune | 30 AU, 4.2 light-hours |
| Proxima Centauri, the nearest star | 4.24 ly, 1.30 pc |
| across the Milky Way | about 100,000 ly |
| Andromeda galaxy | 2.5 million ly |
| the most distant galaxies seen | over 13 billion light-years of travel time |

## The light-year

A {{light-year|light-year}} is a **distance**, not a time. It is how far light, at $3 \times 10^8$ m/s, goes in one year. Using distance = [[velocity|speed]] × time:

$$1 \text{ ly} = 3 \times 10^8 \times 3.156 \times 10^7 \approx 9.46 \times 10^{15} \text{ m}$$

## Looking back in time

Light takes time to reach us, so we always see things as they **were**. We see the Sun as it was 8 minutes ago, Proxima Centauri as it was over 4 years ago, and the Andromeda galaxy as it was 2.5 million years ago. The further we look, the further back in time we see. This lets astronomers watch the universe's history directly.

:::example
title: Show that a light-year is about 63,000 AU.

1. A year in seconds: $365.25 \times 24 \times 3600 \approx 3.156 \times 10^7$ s.
   why: Days × hours × seconds per hour.
   uses: [unit-conversion]

2. Light-year: $3 \times 10^8 \times 3.156 \times 10^7 \approx 9.46 \times 10^{15}$ m.
   why: Distance = speed × time.
   uses: [velocity]

3. In AU: $\dfrac{9.46 \times 10^{15}}{1.496 \times 10^{11}} \approx 63{,}200$.
   why: Divide by the metres in one AU.
   uses: []

4. **About 63,000 AU.** If the Earth-Sun distance were 1 cm, a light-year would be 630 m.
   why: Scaling down makes it easier to picture.
   uses: []
:::

:::practice
q: How far is 4.24 light-years in kilometres?
answer: $4.24 \times 9.46 \times 10^{12} \approx$ **$4.0 \times 10^{13}$ km**.
:::

:::problems
q: How long does sunlight take to reach Earth, 1 AU?
answer: $\dfrac{1.496 \times 10^{11}}{3 \times 10^8} \approx 499$ s, about **8.3 minutes**.

q: How many metres in a light-year?
answer: **About $9.46 \times 10^{15}$ m.**

q: How many AU in a light-year?
answer: **About 63,000.**

q: Convert 1 parsec to light-years.
answer: $\dfrac{3.09 \times 10^{16}}{9.46 \times 10^{15}} \approx$ **3.26 ly**.

q: Proxima Centauri is 1.30 pc away. How many light-years is that?
answer: $1.30 \times 3.26 \approx$ **4.24 ly**.

q: The Andromeda galaxy is 2.5 million light-years away. When did the light we see tonight leave it?
answer: **2.5 million years ago.**

q: A star is 100 ly away. How far is that in parsecs?
answer: $\dfrac{100}{3.26} \approx$ **31 pc**.

q: The fastest spacecraft travel at about 0.0002c (60 km/s). How long would one take to reach Proxima Centauri?
answer: $\dfrac{4.24}{0.0002} =$ **about 21,000 years**.

q: Is a light-year a time or a distance?
answer: **A distance**: how far light goes in a year.

q: Why does looking far into space mean looking back in time?
answer: **The light has taken a long time to reach us**, so we see things as they were when it left.
:::
