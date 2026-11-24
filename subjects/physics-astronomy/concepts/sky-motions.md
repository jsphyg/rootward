---
id: sky-motions
title: Day, year and the turning sky
prereqs: [angular-size]
big: The Earth spins once a day, making the Sun and stars seem to wheel across the sky, and it orbits the Sun once a year, making the Sun drift against the background stars and the night sky change with the seasons.
recap: The Earth spins on its axis, so the whole sky seems to turn around us, 360° in a day, or 15° every hour, around points above the Earth's poles. The star Polaris sits close to the north pole of the sky, at an altitude equal to your latitude. As the Earth orbits the Sun, the Sun appears to move about 1° per day against the stars, so each star rises about 4 minutes earlier each night, and different constellations are up at night in different seasons.
check:
  q: How many degrees does the sky appear to turn in one hour?
  options: ["15°", "1°", "24°", "60°"]
  answer: 0
  why: The sky turns a full 360° in about 24 hours, and $360 \div 24 = 15°$ per hour. 1° is how far the Sun drifts against the stars in a day. 24 is the number of hours. 60 is the number of minutes in an hour.
---

## The turning sky

Watch the sky for a few hours. The Sun rises in the east, climbs, and sets in the west. At night, the stars do the same, wheeling slowly overhead. It looks as if the whole sky turns around us.

It is the Earth that turns. It spins on its axis, west to east, once a day. Standing on it, we see the sky move the other way.

| Time | The sky turns by |
|---|---|
| 24 hours | 360° |
| 1 hour | 15° |
| 4 minutes | 1° |

*Notice: in one hour the sky turns 15°, about one and a half fists at arm's length, using the [[angular-size|angular sizes]] from the last page.*

## The pivot points

The sky turns around two points directly above the Earth's North and South Poles, the **celestial poles**. In the Northern Hemisphere, the star Polaris sits less than 1° from the north celestial pole, so it barely moves while everything else circles around it. That is why it has guided travellers for centuries.

How high Polaris sits above your horizon equals your latitude. At the North Pole it is straight overhead; at the equator it sits on the horizon.

## The year

The Earth also orbits the Sun, once a year, at about 30 km/s. From Earth, the Sun seems to creep against the background stars, about 1° a day ($360° \div 365$), completing a loop each year. Its path is called the {{ecliptic|ecliptic}}, and the constellations along it are the zodiac.

Because of this, the night side of the Earth faces a slightly different part of space each night. Each star rises about **4 minutes earlier** every night. Over months, that adds up: the winter and summer night skies show different constellations.

## Two kinds of day

A **solar day**, noon to noon, is 24 hours. But the Earth turns once relative to the stars in 23 hours 56 minutes, a **sidereal day**. The difference comes from the orbit: in a day, the Earth moves about 1° round the Sun, so it must turn an extra degree, about 4 minutes, to bring the Sun back to the same place.

:::example
title: A bright star rises at 10 pm tonight. About when will it rise 30 days from now?

1. Each night, stars rise about 4 minutes earlier.
   why: The sidereal day is 4 minutes shorter than the solar day.
   uses: [angular-size]

2. Over 30 nights: $30 \times 4 = 120$ minutes.
   why: The shifts add up night by night.
   uses: []

3. 120 minutes is 2 hours.
   why: Convert.
   uses: []

4. **About 8 pm.** After about six months the shift is 12 hours, so the star rises around 10 am, in daylight, and cannot be seen at night at all.
   why: That is why constellations come and go with the seasons.
   uses: []
:::

:::practice
q: How far does the Sun appear to move against the stars in one day?
answer: $\dfrac{360°}{365} \approx$ **1°**.
:::

:::problems
q: How many degrees does the sky turn in 1 hour?
answer: **15°.**

q: How many degrees does it turn in 6 hours?
answer: **90°.**

q: You are at latitude 40° N. How high above the horizon is Polaris?
answer: **About 40°.**

q: Where is Polaris for someone at the North Pole? At the equator?
answer: **Straight overhead; on the horizon.**

q: A star rises at 10 pm tonight. When will it rise 30 days later?
answer: **About 8 pm.**

q: How long is a sidereal day, and why is it shorter than a solar day?
answer: **23 h 56 min.** The Earth also moves along its orbit, so it must turn about 1° extra to face the Sun again.

q: Find the Earth's orbital speed, given an orbit radius of $1.5 \times 10^{11}$ m and a year of $3.16 \times 10^7$ s.
answer: $\dfrac{2\pi \times 1.5 \times 10^{11}}{3.16 \times 10^7} \approx$ **30 km/s**.

q: Why do we see different constellations in winter and summer?
answer: **The night side of the Earth faces different directions in space** at different points in its orbit.
:::
