---
id: spectra
title: Emission and absorption spectra
prereqs: [energy-levels, diffraction]
big: Spread light out into its colours and you get a spectrum; hot dense things give a smooth rainbow, glowing thin gases give bright lines, and cool gas in front of a hot source takes out dark lines, and each element's lines are its fingerprint.
recap: There are three kinds of spectrum. A hot, dense object gives a continuous spectrum, all colours. A hot, thin gas gives an emission spectrum, bright lines at its own wavelengths. Cool gas in front of a hotter source gives an absorption spectrum, a rainbow with dark lines at those same wavelengths. Because each element's lines come from its own energy levels, spectra reveal what stars and gas clouds are made of, and their Doppler shifts reveal how fast they move.
check:
  q: White light from a hot lamp passes through cool hydrogen gas, then through a grating. What do you see?
  options: ["A rainbow with dark lines at hydrogen's wavelengths", "Only a few bright lines at hydrogen's wavelengths", "A plain rainbow with no lines", "Nothing, because the gas blocks all the light"]
  answer: 0
  why: The cool hydrogen absorbs photons that match its energy jumps, removing just those wavelengths, so they show up as dark gaps in the rainbow. Bright lines alone come from hot glowing gas with no bright source behind it. A plain rainbow ignores the gas. The gas only absorbs the matching wavelengths and lets the rest through.
---

## Three kinds of spectrum

Pass light through a prism or a [[diffraction|diffraction grating]] and it spreads into its wavelengths: a {{spectrum|spectrum}}. In the 1800s, scientists found three kinds.

| Source | Spectrum | Looks like |
|---|---|---|
| hot, dense object (lamp filament, the Sun's surface) | continuous | a smooth rainbow, every colour |
| hot, thin gas (a neon sign, a glowing nebula) | emission | a few bright lines on a dark background |
| cool, thin gas in front of a hotter source | absorption | a rainbow with dark lines missing |

*Notice: for one element, the bright emission lines and the dark absorption lines are at exactly the same wavelengths.*

## Why lines

From the [[energy-levels|energy levels]] page: an atom can only give out or take in photons whose energies match the gaps between its levels.

- **Emission.** In a hot, thin gas, atoms are knocked into excited levels by collisions. As their electrons drop back, they give out photons at only the matching wavelengths: bright lines.
- **Absorption.** Shine a full rainbow through cool gas. Atoms absorb exactly the photons that lift their electrons up a rung, and let all others pass. Those wavelengths go missing: dark lines. (The atoms soon give the energy out again, but in all directions, so very little continues in the original beam.)
- **Continuous.** In a hot, dense object, atoms are packed so closely that their levels smear together, and every wavelength is possible.

## Fingerprints of the elements

Every element has its own pattern of lines, as unique as a fingerprint. Hydrogen has red at 656 nm, blue-green at 486 nm and two violet lines. Sodium has a bright yellow pair near 589 nm.

| Discovery | How |
|---|---|
| the Sun's make-up | its spectrum has dark lines, matched to hydrogen, iron, calcium, sodium and many more |
| helium | a yellow line in the Sun's spectrum in 1868 matched no known element; helium was found on Earth 27 years later |
| what distant stars are made of | the same method, using starlight |

Before this, a famous philosopher had said we could never know what the stars are made of. Spectra answered it within a few decades.

## Speed from shifted lines

If a star or galaxy moves away from us, all its lines shift to longer wavelengths, toward the red; if toward us, toward the blue. That is the [[doppler-effect|Doppler effect]] applied to light. Because the line patterns are known exactly, astronomers can measure tiny shifts and so the speed.

:::example
title: Hydrogen's red line (656 nm) passes through a grating with 600 lines per mm. At what first-order angle does it appear?

1. Slit spacing: $d = \dfrac{1}{600}$ mm $\approx 1.667 \times 10^{-6}$ m.
   why: 600 lines in each millimetre.
   uses: [diffraction]

2. $\sin\theta = \dfrac{\lambda}{d} = \dfrac{6.56 \times 10^{-7}}{1.667 \times 10^{-6}} \approx 0.394$.
   why: The grating equation with n = 1.
   uses: []

3. $\theta \approx 23.2°$.
   why: Inverse sine.
   uses: []

4. **At about 23.2°.** The blue-green line at 486 nm appears at about 17°, so the two lines are well separated and easy to measure.
   why: Shorter wavelengths go to smaller angles in a grating.
   uses: [energy-levels]
:::

:::practice
q: A glowing gas shows bright lines at 589 nm only. Which element is it likely to be?
answer: **Sodium.**
:::

:::problems
q: What kind of spectrum does a light bulb's hot filament give?
answer: **Continuous.**

q: What kind of spectrum does a neon sign give?
answer: **Emission**: bright lines.

q: White light passes through cool sodium vapour. What do you see?
answer: **A rainbow with a dark line (a close pair) near 589 nm.**

q: Why are the Sun's dark lines there?
answer: **Cooler gas in the Sun's outer layers absorbs certain wavelengths** from the hot light below.

q: How was helium discovered?
answer: **From an unknown yellow line in the Sun's spectrum**, in 1868, before it was found on Earth.

q: Two gas clouds both show lines at 656 and 486 nm. What do they have in common?
answer: **Both contain hydrogen.**

q: Why are emission and absorption lines for an element at the same wavelengths?
answer: **Both come from the same energy gaps**, crossed downward for emission and upward for absorption.

q: Why does a hot, dense object give a continuous spectrum instead of lines?
answer: **The atoms are packed so close that their energy levels smear together**, so every wavelength can be given out.

q: A star's hydrogen line appears at 660 nm instead of 656 nm. What does that tell you?
answer: **The star is moving away from us** (redshift).

q: Find the first-order angle of 486 nm light through a 600 lines/mm grating.
answer: $\sin\theta = \dfrac{4.86 \times 10^{-7}}{1.667 \times 10^{-6}} \approx 0.292$, so **θ ≈ 17°**.

q: How can astronomers know what a star 100 light-years away is made of?
answer: **By matching the lines in its spectrum** to the known patterns of the elements.

q: Why do gratings give better spectra than prisms for measuring wavelengths?
answer: **The angle follows a simple, exact equation**, $d\sin\theta = n\lambda$, and the colours are spread out more sharply.
:::
