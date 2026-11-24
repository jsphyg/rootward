---
id: stellar-spectra
title: What starlight tells us (temperature and makeup)
prereqs: [spectra, blackbody-radiation]
big: A star's colour gives its surface temperature, and the dark lines in its spectrum show what it is made of; sorting stars by their spectra gives the spectral classes O, B, A, F, G, K, M, from hottest to coolest.
recap: A star's light is close to a blackbody spectrum, so its colour and peak wavelength give its surface temperature by Wien's law. Its outer layers make absorption lines, which reveal the elements present and also depend strongly on temperature. Stars are sorted into spectral classes O, B, A, F, G, K, M, from about 40,000 K (blue) down to about 3000 K (red). The Sun is a G star at 5800 K. Almost all stars are mostly hydrogen and helium.
check:
  q: Which spectral class has the hottest stars?
  options: ["O", "M", "G", "A"]
  answer: 0
  why: The classes run O, B, A, F, G, K, M from hottest to coolest, so O stars are hottest, over 30,000 K and blue. M stars are the coolest and red. G stars, like the Sun, are in the middle. A stars are hot, about 10,000 K, but not the hottest.
---

## Colour means temperature

Look at the constellation Orion on a winter night. Betelgeuse, at one shoulder, is orange-red. Rigel, at the opposite foot, is blue-white. The difference is temperature.

Stars glow almost like [[blackbody-radiation|blackbodies]], so Wien's law applies: the hotter the surface, the shorter the peak wavelength. Red stars are cool; blue stars are hot.

## The spectral classes

In the early 1900s, astronomers at Harvard, led by Annie Jump Cannon and Cecilia Payne, sorted hundreds of thousands of star [[spectra|spectra]]. They settled on seven main classes, arranged by temperature:

| Class | Surface temperature | Colour | Strongest lines | Example |
|---|---|---|---|---|
| O | over 30,000 K | blue | ionised helium | stars in Orion's Belt |
| B | 10,000 to 30,000 K | blue-white | helium, hydrogen | Rigel |
| A | 7500 to 10,000 K | white | hydrogen, strongest of all | Sirius, Vega |
| F | 6000 to 7500 K | yellow-white | hydrogen, metals | Procyon |
| G | 5200 to 6000 K | yellow | ionised calcium, metals | the Sun |
| K | 3700 to 5200 K | orange | metals | Arcturus |
| M | under 3700 K | red | molecules like titanium oxide | Betelgeuse, Proxima |

*Notice: the strongest lines change with temperature. That is because temperature decides which energy levels atoms are in, and so which lines they can absorb.*

A common memory aid: "Oh Be A Fine Girl/Guy, Kiss Me". Each class is split into ten steps, 0 to 9; the Sun is G2.

## What stars are made of

The lines also reveal the elements present. In 1925, Cecilia Payne showed that the big differences between spectra are mostly due to temperature, not makeup, and that stars are overwhelmingly **hydrogen and helium**: about 73% and 25% by mass for the Sun, with everything else just 2%. This surprised everyone at the time; it is now one of the foundations of astronomy.

:::example
title: A star's light peaks at 290 nm. What is its temperature and spectral class?

1. Wien's law: $T = \dfrac{2.9 \times 10^{-3}}{\lambda_{\max}} = \dfrac{2.9 \times 10^{-3}}{2.9 \times 10^{-7}}$.
   why: The peak wavelength gives the temperature.
   uses: [blackbody-radiation]

2. $T = 10{,}000$ K.
   why: Divide.
   uses: []

3. 10,000 K is at the boundary of classes A and B.
   why: Read off the table.
   uses: [spectra]

4. **About 10,000 K; a hot A or cool B star, blue-white**, with very strong hydrogen lines.
   why: Hydrogen lines are strongest around this temperature.
   uses: []
:::

:::practice
q: The Sun's surface is 5800 K. What spectral class is it?
answer: **G** (G2).
:::

:::problems
q: List the spectral classes from hottest to coolest.
answer: **O, B, A, F, G, K, M.**

q: What colour are M stars, and why?
answer: **Red**, because they are the coolest, so their light peaks at long wavelengths.

q: A star's light peaks at 290 nm. Find its temperature.
answer: **About 10,000 K.**

q: A star has a surface temperature of 3500 K. Find its peak wavelength and class.
answer: $\dfrac{2.9 \times 10^{-3}}{3500} \approx$ **830 nm; class M.**

q: Which class shows the strongest hydrogen lines?
answer: **A.**

q: What are stars mostly made of?
answer: **Hydrogen and helium.**

q: Who showed that stars are mostly hydrogen and helium?
answer: **Cecilia Payne**, in 1925.

q: Why do the strongest lines change from class to class?
answer: **Temperature decides which energy levels the atoms are in**, and so which lines they can absorb.

q: Betelgeuse looks orange-red, Rigel blue-white. Which is hotter?
answer: **Rigel.**
:::
