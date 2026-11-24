---
id: diffraction
title: Diffraction and gratings
prereqs: [interference, em-waves]
big: Waves spread out as they pass through gaps and around edges, most when the gap is about their wavelength; a grating of many fine slits uses this, with interference, to split light into sharp colours at angles that measure its wavelength.
recap: Diffraction is the spreading of waves through a gap or round an obstacle; it is strongest when the gap is about the same size as the wavelength. A diffraction grating has many evenly spaced slits a distance d apart. Bright lines appear where $d\sin\theta = n\lambda$, for n = 0, 1, 2, ... Diffraction also limits how fine a detail any telescope can see: about $\theta \approx 1.22\dfrac{\lambda}{D}$ radians for a mirror or lens of width D.
check:
  q: Light of wavelength 600 nm shines on a grating with 500 lines per millimetre. At what angle is the first bright line beside the centre?
  options: ["about 17.5°", "about 0.3°", "about 72.5°", "about 36.9°"]
  answer: 0
  why: $d = \frac{1}{500}$ mm $= 2 \times 10^{-6}$ m. $\sin\theta = \frac{\lambda}{d} = \frac{6 \times 10^{-7}}{2 \times 10^{-6}} = 0.3$, so $\theta \approx 17.5°$. 0.3° treats 0.3 as the angle itself. 72.5° is $90° - 17.5°$. 36.9° is the second-order line, n = 2.
---

## Sound round corners

You can hear someone talking in the next room through an open door, even though you cannot see them. Sound bends round the edge of the doorway; light, it seems, does not. Why the difference?

Waves spread out when they pass through a gap or round an edge. This is {{diffraction|diffraction}}. How much they spread depends on the gap compared with the wavelength.

| Gap compared with wavelength | Spreading |
|---|---|
| much bigger | very little: the wave goes through almost in a straight beam |
| about the same | a lot: the wave fans out in a wide arc |

*Notice: sound waves are about a metre long, like a doorway, so they spread a lot. Light waves are under a thousandth of a millimetre, so through a doorway they hardly spread at all.*

Shine a laser through a very narrow slit, a fraction of a millimetre wide, and the light does spread out. That is diffraction of light, and more proof that light is a [[em-waves|wave]].

## The diffraction grating

A **diffraction grating** is a sheet with thousands of fine, evenly spaced slits (or grooves). Light diffracts through each slit and spreads out, and the waves from all the slits overlap and [[interference|interfere]].

In most directions, the waves from different slits arrive out of step and cancel. Only in certain directions does the path from each slit to the next differ by a whole number of wavelengths. There, they all arrive in step and add into a bright line. From a little geometry, the path difference between neighbouring slits is $d\sin\theta$, so the bright lines are at

$$d\sin\theta = n\lambda$$

d is the slit spacing and n = 0, 1, 2, ... is the **order**. The n = 0 line goes straight through.

Because the angle depends on λ, each colour goes to a different angle. White light is spread into a spectrum, with much sharper colours than a prism gives. The shimmering colours on a CD or DVD come from its closely spaced tracks acting as a grating.

Astronomers pass starlight through gratings to measure its wavelengths exactly. The spectra page shows what that reveals.

## Diffraction limits telescopes

Light entering a telescope is diffracted by the telescope's own opening. So even a perfect telescope blurs a point of light into a tiny disc. Two stars closer together than about

$$\theta \approx 1.22\,\frac{\lambda}{D}$$

radians blur into one, where D is the width of the main mirror or lens. That is a big reason astronomers build ever larger telescopes. Radio waves are so long that radio telescopes must be huge, or linked across continents, to see fine detail.

:::example
title: Light of 600 nm passes through a grating with 500 lines per millimetre. Find the angles of the first and second bright lines, and how many orders appear.

1. Slit spacing: $d = \dfrac{1 \text{ mm}}{500} = 0.002$ mm $= 2 \times 10^{-6}$ m.
   why: 500 lines in each millimetre.
   uses: [interference]

2. First order: $\sin\theta_1 = \dfrac{1 \times 6 \times 10^{-7}}{2 \times 10^{-6}} = 0.3$, so $\theta_1 \approx 17.5°$. Second order: $\sin\theta_2 = 0.6$, so $\theta_2 \approx 36.9°$.
   why: $d\sin\theta = n\lambda$, with n = 1 and 2.
   uses: [em-waves]

3. Largest order: $\sin\theta$ cannot exceed 1, so $n \le \dfrac{d}{\lambda} = \dfrac{2 \times 10^{-6}}{6 \times 10^{-7}} \approx 3.3$, so n goes up to 3.
   why: A sine above 1 has no angle.
   uses: []

4. **17.5° and 36.9°; orders 0 to 3 appear on each side.**
   why: The third order is at $\sin^{-1}(0.9) \approx 64°$.
   uses: []
:::

:::practice
q: A grating has slits $2 \times 10^{-6}$ m apart. Its first-order bright line for a laser is at 18.4°. Find the wavelength.
answer: $\lambda = d\sin\theta = 2 \times 10^{-6} \times \sin 18.4° \approx 2 \times 10^{-6} \times 0.316 \approx$ **630 nm** (red).
:::

:::problems
q: Why can you hear round a corner but not see round it?
answer: **Sound's wavelength is about the size of a doorway, so it diffracts a lot; light's is far smaller, so it hardly spreads.**

q: Find d for a grating with 600 lines per mm.
answer: $\dfrac{1}{600}$ mm $\approx$ **$1.67 \times 10^{-6}$ m**.

q: 656 nm light (red, from hydrogen) passes through that 600 lines/mm grating. Find the first-order angle.
answer: $\sin\theta = \dfrac{6.56 \times 10^{-7}}{1.67 \times 10^{-6}} \approx 0.394$, so **θ ≈ 23.2°**.

q: 600 nm light passes through a grating with d = $2 \times 10^{-6}$ m. Find the first-order angle.
answer: **About 17.5°.**

q: For the same light and grating, find the second-order angle.
answer: **About 36.9°.**

q: How many orders can you see with d = $2 \times 10^{-6}$ m and λ = 600 nm?
answer: **Up to n = 3**, on each side of the centre.

q: Which colour is bent through the bigger angle by a grating: red or violet?
answer: **Red**, because its wavelength is longer. (A prism bends violet more.)

q: Find the smallest angle the Hubble Space Telescope (D = 2.4 m) can separate, for 550 nm light.
answer: $1.22 \times \dfrac{5.5 \times 10^{-7}}{2.4} \approx$ **$2.8 \times 10^{-7}$ rad**.

q: Find the same limit for your eye, with a 5 mm pupil.
answer: $1.22 \times \dfrac{5.5 \times 10^{-7}}{0.005} \approx$ **$1.3 \times 10^{-4}$ rad**, about 500 times worse than Hubble.

q: Why do radio telescopes need to be so big?
answer: **Radio wavelengths are very long**, so a big D is needed to keep $\dfrac{\lambda}{D}$, and the blur, small.

q: Why does a CD show rainbow colours?
answer: **Its tracks are closely and evenly spaced, so they act as a diffraction grating**, sending each colour to a different angle.

q: Ocean waves 20 m long pass through a 15 m gap in a harbour wall. Do they spread much?
answer: **Yes.** The gap is about the same size as the wavelength, so they diffract strongly.
:::
