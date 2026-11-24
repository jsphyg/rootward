---
id: blackbody-radiation
title: Glowing hot things (blackbody radiation)
prereqs: [photons, temperature]
big: Every object glows with light that depends on its temperature; hotter objects glow brighter and at shorter wavelengths, so a star's colour tells its temperature.
recap: A blackbody is an ideal object that absorbs all light and glows only because of its temperature. Its glow peaks at a wavelength set by Wien's law, $\lambda_{\max} = \dfrac{b}{T}$, with $b = 2.9 \times 10^{-3}$ m·K and T in kelvin. The total power it gives out is $P = \sigma A T^4$ (Stefan-Boltzmann law), with $\sigma = 5.67 \times 10^{-8}$ W/m²K⁴. Double the temperature and it gives out 16 times the power, peaking at half the wavelength. Stars are close to blackbodies.
check:
  q: The Sun's surface is about 5800 K. At what wavelength does its light peak?
  options: ["about 500 nm", "about 5 nm", "about 2 m", "about 17 µm"]
  answer: 0
  why: $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}}{5800} = 5 \times 10^{-7}$ m $= 500$ nm, green-blue, in the middle of visible light. 5 nm slips by a factor of 100. 2 m multiplies b by T instead of dividing. 17 µm is not from the law at all; that would be a cold object around 170 K.
---

## Red hot, white hot

Heat a poker in a fire. At first it glows a dull red. Hotter, it turns orange, then yellow, then, if it does not melt, white. Everything glows with light that depends on its temperature. Even you glow, but in infrared, which your eyes cannot see.

| Object | Temperature | Peak wavelength | What we see |
|---|---|---|---|
| your body | 310 K | 9.4 µm | nothing (infrared; thermal cameras see it) |
| electric stove ring | 1000 K | 2.9 µm | dull red (only the faint visible tail) |
| cool star (Betelgeuse) | 3500 K | 830 nm | orange-red |
| the Sun | 5800 K | 500 nm | yellowish white |
| hot star (Rigel) | 12,000 K | 240 nm | blue-white |

*Notice: hotter means shorter peak wavelength, from infrared through red to blue.*

## The blackbody

A {{blackbody|blackbody}} is an ideal object that absorbs every bit of light falling on it. It reflects nothing, so any light coming from it is its own glow, depending only on its temperature. Real stars, hot coals and a small hole in an oven come close.

Its spectrum is a smooth hump: a little light at long wavelengths, a peak, then a quick fall-off at short wavelengths.

## Wien's law: colour gives temperature

The peak wavelength is inversely proportional to the [[temperature|temperature]] in kelvin:

$$\lambda_{\max} = \frac{b}{T}, \quad b = 2.9 \times 10^{-3} \text{ m·K}$$

Double the temperature, halve the peak wavelength. So astronomers read a star's temperature straight from its colour.

## Stefan-Boltzmann law: hotter means much brighter

The total power given out by a blackbody of surface area A is

$$P = \sigma A T^4, \quad \sigma = 5.67 \times 10^{-8} \text{ W/m}^2\text{K}^4$$

The fourth power is dramatic: twice the temperature gives $2^4 = 16$ times the power.

## Why this led to photons

In 1900, physicists could not explain the blackbody's shape: wave theory predicted endless amounts of ultraviolet. Max Planck fixed it by assuming energy is given out in packets of size $hf$. High-frequency packets are so large that a hot object rarely has enough energy to make many, so the curve falls off at short wavelengths. That was the birth of the idea of the [[photons|photon]] and of quantum physics.^[n_planck]

:::example
title: The Sun's surface is 5800 K and its radius is $6.96 \times 10^8$ m. Find the total power it gives out.

1. Surface area: $A = 4\pi r^2 = 4\pi \times (6.96 \times 10^8)^2 \approx 6.09 \times 10^{18}$ m².
   why: The Sun is a sphere.
   uses: [temperature]

2. $T^4 = 5800^4 \approx 1.13 \times 10^{15}$.
   why: Square, then square again.
   uses: []

3. Power per square metre: $\sigma T^4 = 5.67 \times 10^{-8} \times 1.13 \times 10^{15} \approx 6.4 \times 10^7$ W/m².
   why: Stefan-Boltzmann law, per unit area.
   uses: [photons]

4. Total: $6.4 \times 10^7 \times 6.09 \times 10^{18} \approx$ **$3.9 \times 10^{26}$ W**, which matches the measured power of the Sun.
   why: Multiply by the area.
   uses: []
:::

:::practice
q: Find the peak wavelength of a star at 3500 K.
answer: $\dfrac{2.9 \times 10^{-3}}{3500} \approx$ **$8.3 \times 10^{-7}$ m (830 nm)**, just into the infrared, so the star looks orange-red.
:::

:::problems
q: Find the Sun's peak wavelength (5800 K).
answer: **About 500 nm.**

q: Find the peak wavelength of your body (310 K).
answer: **About 9.4 µm**, in the infrared.

q: A star glows with a peak at 250 nm. Find its temperature.
answer: $T = \dfrac{2.9 \times 10^{-3}}{2.5 \times 10^{-7}} =$ **11,600 K**.

q: The universe is filled with leftover glow at 2.7 K. Find its peak wavelength.
answer: $\dfrac{2.9 \times 10^{-3}}{2.7} \approx$ **1.1 mm**, in the microwave range.

q: An object's kelvin temperature doubles. What happens to its peak wavelength?
answer: **It halves.**

q: An object's kelvin temperature doubles. What happens to the power it gives out?
answer: **It goes up 16 times.**

q: Two stars are the same size. One is twice as hot. How much brighter is it?
answer: **16 times.**

q: Find the power given out per square metre by a surface at 1000 K.
answer: $5.67 \times 10^{-8} \times 10^{12} =$ **56,700 W/m²**.

q: Why does a stove ring look red, not white, when hot?
answer: **At about 1000 K, its peak is in the infrared**; only the short tail of its glow reaches the red end of the visible spectrum.

q: Which is hotter: a red star or a blue star?
answer: **The blue star.**

q: Find the Sun's total power, with radius $6.96 \times 10^8$ m and 5800 K.
answer: **About $3.9 \times 10^{26}$ W.**

q: What problem did blackbody radiation pose, and how was it solved?
answer: **Wave theory predicted endless ultraviolet. Planck solved it by assuming energy comes in packets, hf**, starting quantum physics.
:::
