---
id: hr-diagram
title: The Hertzsprung–Russell diagram
prereqs: [magnitudes, stellar-spectra]
big: Plotting stars by temperature and luminosity sorts them into a few groups: most lie on a band called the main sequence, with giants above it and white dwarfs below; the chart shows stars' sizes and how they change over their lives.
recap: The Hertzsprung–Russell (H–R) diagram plots luminosity (or absolute magnitude) up the side against surface temperature (or spectral class) along the bottom, with hot stars on the left. About 90% of stars sit on the main sequence, a band from hot, bright, blue stars at top left to cool, dim, red ones at bottom right; these stars are fusing hydrogen in their cores. Giants and supergiants lie above, cool but very luminous, so they must be huge. White dwarfs lie below left, hot but dim, so they must be tiny. Size follows from $L \propto R^2 T^4$. Reading a main sequence star's luminosity off the diagram gives its distance.
check:
  q: A star is as hot as the Sun but 100 times more luminous. How does its radius compare with the Sun's?
  options: ["10 times bigger", "100 times bigger", "the same", "10,000 times bigger"]
  answer: 0
  why: At the same temperature, each square metre gives out the same power, so luminosity goes as area, $R^2$. 100 times the luminosity means $R^2$ is 100 times bigger, so R is 10 times bigger. 100 forgets the square. The same ignores the extra light. 10,000 squares instead of taking the square root.
---

## Sorting the stars

Around 1910, Ejnar Hertzsprung in Denmark and Henry Norris Russell in the United States had the same idea. Take many stars whose distances are known, so their true power is known. Plot each one by two numbers:

- **up the side:** {{luminosity|luminosity}}, or [[magnitudes|absolute magnitude]];
- **along the bottom:** surface temperature, or [[stellar-spectra|spectral class]], with **hot on the left**, running O, B, A, F, G, K, M.

If stars were random, the dots would be scattered everywhere. They are not. They fall into a few clear groups. This chart is the {{hr-diagram|Hertzsprung–Russell diagram}}, or H–R diagram.

## The groups

| Group | Where on the diagram | What the stars are like | Example |
|---|---|---|---|
| main sequence | a band from top left to bottom right | ordinary stars fusing hydrogen in their cores | the Sun, Sirius, Proxima |
| giants | above the main sequence, right side | cool but very luminous, so very large | Arcturus |
| supergiants | across the very top | the most luminous and largest stars | Betelgeuse, Rigel |
| white dwarfs | below the main sequence, left side | hot but dim, so tiny | Sirius's partner |

About 90% of stars are on the {{main-sequence|main sequence}}. Along it, **mass** sets everything: the heavy stars are hot, blue and brilliant at the top left; the light ones are cool, red and dim at the bottom right.

*Notice: the diagram does not only sort stars. It also shows them at different stages of their lives. The next pages follow a star across it.*

## Size from light and temperature

A star's luminosity is its surface area times the power from each square metre. By the [[blackbody-radiation|Stefan-Boltzmann law]], that power goes as $T^4$. So

$$L \propto R^2 T^4, \qquad \frac{R}{R_\odot} = \sqrt{\frac{L}{L_\odot}} \times \left(\frac{5800 \text{ K}}{T}\right)^2$$

where $R_\odot$ and $L_\odot$ are the Sun's radius and luminosity, and 5800 K is its temperature.

| Star | Luminosity (Suns) | Temperature | Radius (Suns) |
|---|---|---|---|
| Sun | 1 | 5800 K | 1 |
| Sirius | 25 | 9900 K | 1.7 |
| Proxima Centauri | 0.0017 | 3000 K | 0.15 |
| Betelgeuse | about 100,000 | 3500 K | about 900 |

A cool star can only be very luminous by being enormous. Betelgeuse, put where the Sun is, would reach past the orbit of Mars.

## Distances from the diagram

Once you know where a star sits on the main sequence from its spectrum, you can read off its absolute magnitude. Measure how bright it looks, and the [[magnitudes|distance modulus]] gives how far away it is. This works far beyond the reach of parallax.

:::example
title: Betelgeuse is about 100,000 times as luminous as the Sun, with a surface temperature of 3500 K. Find its radius.

1. $\sqrt{\dfrac{L}{L_\odot}} = \sqrt{100{,}000} \approx 316$.
   why: The luminosity part of the size formula.
   uses: []

2. $\left(\dfrac{5800}{3500}\right)^2 \approx 1.657^2 \approx 2.75$.
   why: A cooler surface gives out less per square metre, so the star must be bigger still.
   uses: [stellar-spectra]

3. $R \approx 316 \times 2.75 \approx 870\, R_\odot$.
   why: Multiply.
   uses: []

4. **About 870 times the Sun's radius**, roughly 4 AU. A supergiant.
   why: The Sun's radius is about 0.0047 AU.
   uses: []
:::

:::practice
q: A star has the Sun's temperature and 4 times its luminosity. Find its radius.
answer: $\sqrt{4} =$ **2 Sun radii**.
:::

:::problems
q: A star has the Sun's temperature and 100 times its luminosity. Find its radius.
answer: **10 Sun radii.**

q: A star has the Sun's radius but twice its temperature. How much more luminous is it?
answer: $2^4 =$ **16 times**.

q: A star has twice the Sun's radius and twice its temperature. How luminous is it?
answer: $2^2 \times 2^4 =$ **64 Suns**.

q: A white dwarf has 0.01 times the Sun's luminosity and a temperature of 10,000 K. Find its radius.
answer: $0.1 \times (0.58)^2 \approx$ **0.034 Sun radii**, about 3.7 times the Earth's radius.

q: A star has 10,000 times the Sun's luminosity and a temperature of 3000 K. Find its radius.
answer: $100 \times (1.93)^2 \approx$ **370 Sun radii**: a red supergiant.

q: A star sits at the top right of the H–R diagram. Describe it.
answer: **Cool, red, very luminous and huge**: a supergiant.

q: A star sits at the bottom left. Describe it.
answer: **Hot, white, dim and tiny**: a white dwarf.

q: On the main sequence, what single property decides where a star sits?
answer: **Its mass.** Heavier stars are hotter and more luminous.

q: A Sun-like main sequence star (M = 4.83) looks magnitude 14.83. How far away is it?
answer: $m - M = 10$, so **1000 pc**.

q: A Sun-like main sequence star looks magnitude 9.83. How far away is it?
answer: $m - M = 5$, so **100 pc**.

q: Which way does temperature run along the bottom of the H–R diagram?
answer: **Hot on the left, cool on the right**, following the classes O to M.
:::
