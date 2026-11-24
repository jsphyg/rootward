---
id: angular-size
title: Angles in the sky (angular size)
prereqs: [calculus:trig-basics]
big: In the sky we cannot easily measure how big or far things are, only how big they look, as an angle; for small angles, that angle in radians is just the object's size divided by its distance.
recap: The angular size of an object is the angle it spans as seen from where you stand. For small angles, $\theta \approx \dfrac{\text{size}}{\text{distance}}$, with θ in radians. Astronomers divide degrees finely: 1° = 60 arcminutes (′), and 1′ = 60 arcseconds (″); one radian is about 206,265″. The Sun and Moon both span about 0.5°. Knowing any two of angle, size and distance gives the third.
check:
  q: The Moon is 3474 km across and 384,400 km away. About how big does it look in the sky?
  options: ["about 0.52°", "about 0.009°", "about 111°", "about 30°"]
  answer: 0
  why: $\theta \approx \dfrac{3474}{384{,}400} \approx 0.00904$ radians, and $0.00904 \times \dfrac{180}{\pi} \approx 0.52°$. 0.009 is the answer in radians, labelled as degrees. 111 divides distance by size, upside down. 30 is the Moon's angular size in arcminutes, not degrees.
---

## Size on the sky

Hold up your thumb at arm's length and you can cover the full Moon. Your thumb is not bigger than the Moon; it is much closer. In the sky, we see only how big things **look**: the angle they span from our eye. That is their {{angular-size|angular size}}.

| Object | Angular size, about |
|---|---|
| your fist at arm's length | 10° |
| your thumb at arm's length | 2° |
| the full Moon | 0.5° |
| the Sun | 0.5° |
| Jupiter, at its closest | 47″ (arcseconds) |

## Smaller units

A degree is too coarse for most things in the sky, so it is split into arcminutes and {{arcsecond|arcseconds}}:

$$1° = 60′ \text{ (arcminutes)}, \qquad 1′ = 60″ \text{ (arcseconds)}$$

So 1° is 3600″. An arcsecond is the size of a coin seen from about 4 km away.

## The small-angle formula

Picture the object as a short arc on a huge circle centred on your eye, with radius equal to the distance d. From [[calculus:trig-basics|radian measure]], the arc length is the radius times the angle in radians. For a small angle, the arc is almost exactly the object's size D:

$$\theta \approx \frac{D}{d} \quad (\theta \text{ in radians})$$

This works well for anything under a few degrees, which covers nearly everything in the sky. To convert: multiply radians by $\dfrac{180}{\pi} \approx 57.3$ to get degrees, or by 206,265 to get arcseconds.

## A lucky coincidence

The Sun is about 400 times wider than the Moon, and also about 400 times further away. So they look almost exactly the same size in our sky, about half a degree. That is why the Moon can just cover the Sun in a total solar eclipse.

:::example
title: Jupiter is 143,000 km across. At its closest it is about 630 million km away. Find its angular size in arcseconds.

1. Small-angle formula: $\theta \approx \dfrac{143{,}000}{630{,}000{,}000}$.
   why: Size over distance, in the same units.
   uses: [calculus:trig-basics]

2. $\theta \approx 2.27 \times 10^{-4}$ radians.
   why: Divide.
   uses: []

3. In arcseconds: $2.27 \times 10^{-4} \times 206{,}265 \approx 47″$.
   why: One radian is 206,265 arcseconds.
   uses: []

4. **About 47″**, under a hundredth of a degree. Too small to see as a disc with the eye, but easy with a small telescope.
   why: Your eye can only make out details bigger than about 60″.
   uses: []
:::

:::practice
q: Convert 0.5° into arcminutes and arcseconds.
answer: $0.5 \times 60 =$ **30′**, which is $30 \times 60 =$ **1800″**.
:::

:::problems
q: The Moon is 3474 km across and 384,400 km away. Find its angular size.
answer: **About 0.52°.**

q: The Sun is $1.39 \times 10^6$ km across and $1.5 \times 10^8$ km away. Find its angular size.
answer: $\dfrac{1.39 \times 10^6}{1.5 \times 10^8} \approx 0.0093$ rad $\approx$ **0.53°**.

q: A 2 cm thumb is held 60 cm from your eye. Find its angular size.
answer: $\dfrac{2}{60} \approx 0.033$ rad $\approx$ **1.9°**.

q: Convert 1 radian to degrees and to arcseconds.
answer: **About 57.3°, or 206,265″.**

q: A crater on the Moon spans 1″. How wide is it? (Moon distance 384,400 km.)
answer: $D = \theta d = \dfrac{1}{206{,}265} \times 384{,}400 \approx$ **1.9 km**.

q: A building 100 m tall spans 1° from where you stand. How far away is it?
answer: $d = \dfrac{D}{\theta} = \dfrac{100}{0.01745} \approx$ **5.7 km**.

q: An object moves twice as far away. What happens to its angular size?
answer: **It halves.**

q: Why do the Sun and Moon look the same size?
answer: **The Sun is about 400 times wider, but also about 400 times further away.**

q: Jupiter is 143,000 km across and 630 million km away. Find its angular size.
answer: **About 47″.**

q: Why does the small-angle formula need radians, not degrees?
answer: **Arc length = radius × angle only works with radians.** In degrees there would be an extra factor of $\dfrac{\pi}{180}$.
:::
