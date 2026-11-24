---
id: energy-levels
title: Atoms and energy levels
prereqs: [photons]
big: Electrons in an atom can only have certain fixed energies, like the rungs of a ladder; jumping down a rung gives out a photon carrying exactly the energy difference, which is why each element gives out its own set of colours.
recap: An atom's electrons can only be in certain energy levels. For hydrogen, $E_n = -\dfrac{13.6 \text{ eV}}{n^2}$, for n = 1, 2, 3, ... The lowest level, n = 1, is the ground state. An electron dropping from a higher level to a lower one gives out a photon whose energy is exactly the difference: $hf = E_{\text{upper}} - E_{\text{lower}}$. An atom can absorb a photon only if its energy exactly matches a jump up. 13.6 eV frees hydrogen's electron completely.
check:
  q: A hydrogen electron drops from level n = 2 to the ground state, n = 1. What energy does the photon carry?
  options: ["10.2 eV", "13.6 eV", "3.4 eV", "17.0 eV"]
  answer: 0
  why: $E_2 = -\frac{13.6}{4} = -3.4$ eV and $E_1 = -13.6$ eV. The difference is $-3.4 - (-13.6) = 10.2$ eV. 13.6 eV is the energy to free the electron from the ground state. 3.4 eV is the size of $E_2$ alone. 17.0 eV adds the two instead of subtracting.
---

## Atoms give out fixed colours

Put a pinch of salt in a flame and it glows bright yellow. Copper burns green; lithium, red. A tube of hydrogen gas, with electricity through it, glows pinkish. Pass that glow through a [[diffraction|grating]] or prism, and you do not see a smooth rainbow. You see a few sharp coloured lines, always at exactly the same wavelengths for each element.

Why only certain colours? Because atoms can only hold certain amounts of energy.

## Energy levels

In 1913, Niels Bohr proposed that an atom's electron can only exist in certain {{energy-level|energy levels}}, like the rungs of a ladder. It can be on a rung, but never between rungs.

For hydrogen, the simplest atom, the levels are

$$E_n = -\frac{13.6 \text{ eV}}{n^2}$$

| Level n | Energy |
|---|---|
| 1 (ground state) | −13.6 eV |
| 2 | −3.4 eV |
| 3 | −1.51 eV |
| 4 | −0.85 eV |
| ∞ (electron free) | 0 |

*Notice: the energies are negative, like the potential energy far from a planet on the escape velocity page. Zero means the electron has just escaped. The levels crowd together toward zero.*

The lowest level, n = 1, is the **ground state**, where the electron normally sits. Giving it energy lifts it to a higher, **excited** level. Giving it 13.6 eV or more frees it: the atom is **ionised**.

## Jumps make photons

An excited electron soon drops back down. When it drops, the atom gives out one [[photons|photon]], whose energy is exactly the gap between the rungs:

$$hf = E_{\text{upper}} - E_{\text{lower}}$$

Since only certain gaps exist, only certain photon energies, and so only certain colours, can come out. That is the line pattern each element shows.

It works the other way too. An atom can **absorb** a photon, but only one whose energy exactly matches a jump **up**. A photon with the wrong energy passes straight through (unless it has enough to free the electron entirely).

**Why it is like this.** Electrons behave as waves too. In an atom, the electron's wave must fit neatly around the nucleus, like a standing wave on a guitar string, and only certain patterns fit. Each pattern has its own energy.^[n_bohr]

:::example
title: A hydrogen electron drops from n = 3 to n = 2. What is the wavelength and colour of the light given out?

1. $E_3 = -\dfrac{13.6}{9} \approx -1.51$ eV and $E_2 = -\dfrac{13.6}{4} = -3.4$ eV.
   why: The hydrogen energy formula.
   uses: [photons]

2. Photon energy: $-1.51 - (-3.4) = 1.89$ eV.
   why: The photon carries away the energy difference.
   uses: []

3. Wavelength: $\lambda = \dfrac{1240}{1.89} \approx 656$ nm.
   why: The eV-to-nm shortcut from the photons page.
   uses: []

4. **About 656 nm: red.** This is hydrogen's brightest visible line. It colours glowing gas clouds in space pinkish red.
   why: 656 nm lies near the red end of the visible range.
   uses: []
:::

:::practice
q: Find the energy of hydrogen's n = 3 level.
answer: $-\dfrac{13.6}{9} \approx$ **−1.51 eV**.
:::

:::problems
q: A hydrogen electron drops from n = 2 to n = 1. Find the photon energy.
answer: **10.2 eV.**

q: Find that photon's wavelength. Can we see it?
answer: $\dfrac{1240}{10.2} \approx$ **122 nm. No**: it is ultraviolet.

q: A hydrogen electron drops from n = 4 to n = 2. Find the photon's energy and wavelength.
answer: $-0.85 - (-3.4) =$ **2.55 eV**; $\dfrac{1240}{2.55} \approx$ **486 nm**, blue-green.

q: How much energy frees an electron from hydrogen's ground state?
answer: **13.6 eV.**

q: How much energy frees it from the n = 2 level?
answer: **3.4 eV.**

q: A 5 eV photon hits a hydrogen atom in its ground state. What happens?
answer: **Nothing.** 5 eV matches no jump up from n = 1 (the smallest is 10.2 eV), and it is not enough to free the electron.

q: A 10.2 eV photon hits a hydrogen atom in its ground state. What happens?
answer: **It is absorbed**, lifting the electron to n = 2.

q: An electron in n = 4 can drop to any lower level, in one or several steps. How many different photon energies are possible?
answer: **6**: 4→3, 4→2, 4→1, 3→2, 3→1, 2→1.

q: Why does each element give out its own set of colours?
answer: **Each element has its own set of energy levels**, so its own set of gaps and photon energies.

q: Why are the energy levels negative?
answer: **Zero is chosen for a free electron.** A bound electron has less energy than that, so its energy is below zero.

q: Salt in a flame glows yellow at 589 nm. What energy gap in sodium does that come from?
answer: $\dfrac{1240}{589} \approx$ **2.1 eV**.

q: Why does an electron in an atom not slowly spiral into the nucleus?
answer: **It can only have the energies of the levels**, and the ground state is the lowest one. There is no lower rung to fall to.
:::
