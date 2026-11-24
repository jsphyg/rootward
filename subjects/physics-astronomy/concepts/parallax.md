---
id: parallax
title: Measuring distance by parallax
prereqs: [angular-size, astronomical-distances]
big: Nearby stars seem to shift slightly against far-away ones as the Earth goes round the Sun; the smaller the shift, the further the star, and this gives the most direct way of measuring distances to the stars.
recap: Parallax is the apparent shift of a nearby object against a distant background when you view it from two places. As the Earth moves from one side of its orbit to the other, nearby stars shift. The parallax angle p is half the total shift, the angle that 1 AU makes at the star. Distance in parsecs is $d = \dfrac{1}{p}$, with p in arcseconds. A star with a parallax of 1″ is 1 parsec away; all real stars have parallaxes smaller than 1″.
check:
  q: A star has a parallax of 0.1″. How far away is it?
  options: ["10 parsecs", "0.1 parsecs", "100 parsecs", "1 parsec"]
  answer: 0
  why: $d = \dfrac{1}{p} = \dfrac{1}{0.1} = 10$ pc. 0.1 pc uses the parallax as the distance. 100 pc squares the 10. 1 pc would need a parallax of 1″.
---

## Your thumb's jump

Hold up a thumb at arm's length. Close your left eye, then your right. Your thumb jumps against the background. Bring it closer to your face and it jumps further. That shift is **parallax**, and how much it jumps tells you how far away your thumb is.

Your two eyes are a few centimetres apart. To measure the distance to a star, astronomers use a much wider baseline: the Earth's orbit. They observe a star, then again six months later from the other side of the Sun, 2 AU away. A nearby star shifts slightly against much more distant stars behind it.

## The parallax angle

The {{parallax|parallax angle}} p is half of the total shift: the angle that 1 AU, the radius of the Earth's orbit, makes as seen from the star. By the [[angular-size|small-angle formula]],

$$p \approx \frac{1 \text{ AU}}{d} \quad (\text{in radians})$$

## The parsec

Astronomers chose a unit to make this neat. The {{parsec|parsec}} ("parallax arcsecond") is the distance at which 1 AU makes an angle of exactly 1″. Then

$$d \text{ (pc)} = \frac{1}{p \text{ (arcseconds)}}$$

| Parallax | Distance |
|---|---|
| 1″ | 1 pc (3.26 ly) |
| 0.5″ | 2 pc |
| 0.1″ | 10 pc |
| 0.01″ | 100 pc |

*Notice: half the parallax means twice as far. Even the nearest star, Proxima Centauri, has a parallax of only 0.77″: no star is as close as 1 pc.*

## Why it took so long

Ancient Greek astronomers looked for stellar parallax, found none, and some concluded the Earth must not move. In fact the shifts are just too tiny for the naked eye: 0.77″ is the size of a coin seen from 5 km away. The first stellar parallax was measured only in 1838, by Friedrich Bessel.

Today, the Gaia space telescope measures parallaxes as small as about 20 millionths of an arcsecond, giving distances to over a billion stars. Parallax is the first rung of the **distance ladder**: every method for measuring greater distances is calibrated using stars whose distances parallax has found.

:::example
title: Proxima Centauri's parallax is 0.768″. How far away is it, in parsecs and light-years?

1. $d = \dfrac{1}{p} = \dfrac{1}{0.768}$.
   why: The parallax formula, with p in arcseconds.
   uses: [angular-size]

2. $d \approx 1.30$ pc.
   why: Divide.
   uses: []

3. In light-years: $1.30 \times 3.26 \approx 4.24$ ly.
   why: One parsec is 3.26 light-years.
   uses: [astronomical-distances]

4. **About 1.30 pc, or 4.24 light-years**: the nearest star to the Sun.
   why: Matches the distance quoted on the last page.
   uses: []
:::

:::practice
q: Sirius has a parallax of 0.379″. How far away is it?
answer: $\dfrac{1}{0.379} \approx$ **2.64 pc** (about 8.6 ly).
:::

:::problems
q: A star has a parallax of 0.1″. Find its distance.
answer: **10 pc.**

q: A star has a parallax of 0.05″. Find its distance in parsecs and light-years.
answer: **20 pc**, which is $20 \times 3.26 \approx$ **65 ly**.

q: A star is 50 pc away. What is its parallax?
answer: $\dfrac{1}{50} =$ **0.02″**.

q: Proxima Centauri's parallax is 0.768″. Find its distance.
answer: **About 1.30 pc (4.24 ly).**

q: One star's parallax is twice another's. Which is further, and by how much?
answer: **The one with the smaller parallax, twice as far.**

q: Gaia can measure parallaxes down to about 20 millionths of an arcsecond. How far is that?
answer: $\dfrac{1}{2 \times 10^{-5}} =$ **50,000 pc**, enough to reach across much of the Milky Way.

q: Why do astronomers wait six months between parallax measurements?
answer: **To view from opposite sides of the Earth's orbit**, the widest possible baseline.

q: Why did ancient astronomers fail to see stellar parallax?
answer: **The shifts are far too small for the naked eye**, under 1″ even for the nearest star.

q: What is a parsec, in words?
answer: **The distance at which the Earth-Sun distance would look 1 arcsecond across.**

q: Why is parallax called the first rung of the distance ladder?
answer: **It measures distance directly, by geometry**, and other methods for further objects are calibrated using stars it has measured.
:::
