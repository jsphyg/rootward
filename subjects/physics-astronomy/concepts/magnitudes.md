---
id: magnitudes
title: The magnitude scale
prereqs: [brightness-distance, calculus:logarithms]
big: Astronomers rank star brightness by magnitude, an old scale where smaller numbers mean brighter and each step of 5 magnitudes is a factor of exactly 100 in brightness; it is a logarithmic scale.
recap: Apparent magnitude m measures how bright a star looks. Lower is brighter: magnitude 1 is brighter than magnitude 6, and very bright objects have negative magnitudes. A difference of 5 magnitudes is a factor of 100 in brightness, so 1 magnitude is a factor of $100^{1/5} \approx 2.512$. In general, $m_1 - m_2 = -2.5\log_{10}\dfrac{b_1}{b_2}$. Absolute magnitude M is the magnitude a star would have at 10 parsecs, and $m - M = 5\log_{10}\dfrac{d}{10}$, with d in parsecs.
check:
  q: Star A has magnitude 1 and star B has magnitude 6. Which looks brighter, and by how much?
  options: ["A, by 100 times", "B, by 100 times", "A, by 5 times", "B, by 6 times"]
  answer: 0
  why: Smaller magnitude means brighter, so A. The difference is 5 magnitudes, which is exactly a factor of 100. B is wrong because higher magnitudes are fainter. 5 times treats the scale as ordinary steps instead of multiplying by 2.512 each step.
---

## An ancient scale

Over 2000 years ago, the Greek astronomer Hipparchus sorted stars into six classes: the brightest were "first magnitude", the faintest he could see were "sixth magnitude". We still use his scale, now made exact. That is why it runs **backwards**: smaller numbers mean brighter.

| Object | Apparent magnitude |
|---|---|
| the Sun | −26.7 |
| full Moon | −12.7 |
| Venus at its brightest | −4.6 |
| Sirius, brightest star at night | −1.46 |
| Polaris | 2.0 |
| faintest stars visible to the eye | about 6 |
| faintest objects seen by Hubble | about 31 |

## A logarithmic scale

Your eye judges brightness by ratios, not differences. So the scale was fixed in 1856: a difference of **5 magnitudes** is exactly a factor of **100** in brightness. One magnitude is then a factor of $100^{1/5} \approx 2.512$.

| Magnitude difference | Brightness ratio |
|---|---|
| 1 | 2.512 |
| 2 | 6.31 |
| 5 | 100 |
| 10 | 10,000 |

In general, using [[calculus:logarithms|logarithms]]:

$$m_1 - m_2 = -2.5\log_{10}\frac{b_1}{b_2}$$

The minus sign makes brighter stars have smaller magnitudes.

## Absolute magnitude

Apparent magnitude mixes a star's true power with its distance, just like [[brightness-distance|apparent brightness]]. To compare stars fairly, astronomers imagine moving every star to the same distance, 10 parsecs. The magnitude it would have there is its **absolute magnitude**, M. It measures luminosity.

The Sun's absolute magnitude is 4.83: from 10 pc, it would be a dim, ordinary star.

Using the inverse-square law, the gap between m and M depends only on distance:

$$m - M = 5\log_{10}\frac{d}{10} \quad (d \text{ in parsecs})$$

$m - M$ is called the **distance modulus**. If you know both, you know the distance.

:::example
title: A star has an apparent magnitude of 10 and an absolute magnitude of 0. How far away is it?

1. Distance modulus: $m - M = 10 - 0 = 10$.
   why: The gap between how bright it looks and how bright it really is.
   uses: [brightness-distance]

2. $10 = 5\log_{10}\dfrac{d}{10}$, so $\log_{10}\dfrac{d}{10} = 2$.
   why: Divide by 5.
   uses: [calculus:logarithms]

3. $\dfrac{d}{10} = 10^2 = 100$, so $d = 1000$ pc.
   why: Undo the logarithm with a power of 10.
   uses: [calculus:logarithms]

4. **1000 parsecs, about 3260 light-years.** Check: 10 magnitudes fainter is 10,000 times dimmer, which needs 100 times the distance (10 pc to 1000 pc).
   why: Inverse square: $100^2 = 10{,}000$.
   uses: []
:::

:::practice
q: Two stars differ by 3 magnitudes. How many times brighter is the brighter one?
answer: $2.512^3 \approx$ **15.9 times**.
:::

:::problems
q: Star A is magnitude 1; star B is magnitude 6. Compare them.
answer: **A is 100 times brighter.**

q: How many times brighter is a magnitude 0 star than a magnitude 10 star?
answer: **10,000 times.**

q: Which is brighter: a star of magnitude −1 or one of magnitude +2?
answer: **The −1 star**, by $2.512^3 \approx$ 16 times.

q: One star is 100 times brighter than another, of magnitude 7. Find its magnitude.
answer: **2.**

q: Star X looks 1000 times brighter than star Y. Find the magnitude difference.
answer: $2.5\log_{10}1000 = 2.5 \times 3 =$ **7.5 magnitudes**.

q: A star is 10 pc away. What is the difference between its apparent and absolute magnitudes?
answer: **Zero.** At 10 pc, m = M by definition.

q: A star has m − M = 5. How far away is it?
answer: $\log_{10}\dfrac{d}{10} = 1$, so **d = 100 pc**.

q: A star with M = 0 is 1000 pc away. Find m.
answer: $5\log_{10}100 = 10$, so **m = 10**.

q: Sirius has m = −1.46 and is 2.64 pc away. Find its absolute magnitude.
answer: $M = m - 5\log_{10}\dfrac{2.64}{10} = -1.46 - 5 \times (-0.578) \approx$ **+1.43**.

q: Why does the magnitude scale run backwards?
answer: **It comes from Hipparchus's ranking**, where the brightest stars were "first class" and fainter ones had bigger numbers.

q: The Sun's absolute magnitude is 4.83. Is the Sun an unusually bright star?
answer: **No.** From 10 pc, at magnitude 4.83, it would be an ordinary, dim star.
:::
