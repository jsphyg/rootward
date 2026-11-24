---
id: telescopes
title: Telescopes
prereqs: [lenses, em-spectrum]
big: A telescope's most important job is to collect light, which grows with the area of its main lens or mirror; a bigger telescope also sees finer detail, and telescopes for every part of the spectrum show different things.
recap: A telescope's light-gathering power goes as the area of its aperture, so as $D^2$: twice the width collects four times the light. Its finest detail is limited by diffraction to about $\theta \approx 1.22\dfrac{\lambda}{D}$ radians. Magnification, $\dfrac{f_{\text{objective}}}{f_{\text{eyepiece}}}$, matters least. Refractors use lenses; nearly all big telescopes are reflectors, using mirrors. Radio, infrared, X-ray and other telescopes see different objects, and space telescopes avoid the blurring and blocking of the atmosphere.
check:
  q: Telescope B's mirror is twice as wide as telescope A's. How much more light does B collect?
  options: ["4 times", "2 times", "8 times", "the same"]
  answer: 0
  why: Light collected goes as the mirror's area, which goes as the diameter squared: $2^2 = 4$. Twice is the width, not the area. 8 times would be for volume, which does not matter. A bigger mirror always catches more light.
---

## A bucket for light

The most important thing a telescope does is not magnify. It **collects light**. Distant stars and galaxies are faint, and your eye's pupil, about 7 mm across in the dark, catches only a little of their light. A telescope is a light bucket: a big lens or mirror gathers light over a wide area and brings it to a focus.

The light collected goes as the area of the {{aperture|aperture}}, $\pi\left(\dfrac{D}{2}\right)^2$, so as $D^2$:

| Collector | Width D | Light, compared with the eye |
|---|---|---|
| your eye (dark-adapted) | 7 mm | 1 |
| small amateur telescope | 100 mm | about 200 |
| Hubble Space Telescope | 2.4 m | about 120,000 |
| an 8 m ground telescope | 8 m | about 1.3 million |

*Notice: doubling the width gives four times the light.*

## Seeing detail

Bigger is also sharper. From the [[diffraction|diffraction]] page, the smallest angle a telescope can separate is about

$$\theta \approx 1.22\,\frac{\lambda}{D}$$

radians. A wider aperture, or a shorter wavelength, gives finer detail.

On the ground, the atmosphere's shimmering usually blurs images to about 1″, whatever the telescope's size. Modern telescopes fight this with **adaptive optics**: mirrors that flex hundreds of times a second to undo the blurring. Or the telescope is put in space.

## Magnification

A telescope's magnification is $\dfrac{f_{\text{objective}}}{f_{\text{eyepiece}}}$, as on the [[lenses|lenses]] page. You can change it by swapping eyepieces. But too much magnification just enlarges the blur. Without enough light and sharpness, magnifying more does not help.

## Refractors and reflectors

| Type | Main optic | Notes |
|---|---|---|
| refractor | a lens | lenses bend colours differently, sag under their weight, and must be flawless all through |
| reflector | a curved mirror | only the front surface matters, it can be supported from behind, and there are no colour problems |

Almost every large research telescope is a reflector. The biggest today have mirrors 8 to 10 m across, some made of many hexagonal segments, and telescopes of 25 to 40 m are being built.

## Every part of the spectrum

Different objects shine in different parts of the [[em-spectrum|electromagnetic spectrum]], so astronomers build telescopes for each:

- **Radio telescopes** are huge dishes, because radio wavelengths are long. Linked across the world, they act as one Earth-sized telescope and photographed a black hole's shadow.
- **Infrared telescopes** see through dust to newborn stars, and see the most distant galaxies, whose light is stretched to infrared. The James Webb Space Telescope works here.
- **X-ray and gamma-ray telescopes** see the hottest, most violent places. These wavelengths are blocked by the air, so they must go in space.

:::example
title: The James Webb Space Telescope has a 6.5 m mirror and observes infrared light around 2 µm. What is the finest detail it can see, in arcseconds? Compare Hubble (2.4 m) in visible light (550 nm).

1. Webb: $\theta = 1.22 \times \dfrac{2 \times 10^{-6}}{6.5} \approx 3.75 \times 10^{-7}$ rad.
   why: The diffraction limit.
   uses: [lenses]

2. In arcseconds: $3.75 \times 10^{-7} \times 206{,}265 \approx 0.077″$.
   why: One radian is 206,265 arcseconds.
   uses: []

3. Hubble: $1.22 \times \dfrac{5.5 \times 10^{-7}}{2.4} \times 206{,}265 \approx 0.058″$.
   why: Same formula, shorter wavelength, smaller mirror.
   uses: [em-spectrum]

4. **Webb, about 0.08″; Hubble, about 0.06″.** They are similar: Webb's bigger mirror makes up for its longer wavelength. But Webb collects about 7 times more light.
   why: $\left(\dfrac{6.5}{2.4}\right)^2 \approx 7.3$.
   uses: []
:::

:::practice
q: How many times more light does an 8 m telescope collect than your 7 mm pupil?
answer: $\left(\dfrac{8000}{7}\right)^2 \approx$ **1.3 million times**.
:::

:::problems
q: One telescope is twice as wide as another. How much more light does it collect?
answer: **4 times.**

q: How much more light does a 100 mm telescope collect than a 7 mm pupil?
answer: $\left(\dfrac{100}{7}\right)^2 \approx$ **200 times**.

q: A telescope has an objective of focal length 1200 mm and a 10 mm eyepiece. Find its magnification.
answer: **120 times.**

q: Find Hubble's diffraction limit (2.4 m, 550 nm) in arcseconds.
answer: **About 0.058″.**

q: A 100 m radio dish observes at 21 cm wavelength. Find its diffraction limit in degrees.
answer: $1.22 \times \dfrac{0.21}{100} \approx 0.0026$ rad $\approx$ **0.15°**, coarser than your eye in visible light.

q: Why are big research telescopes reflectors, not refractors?
answer: **Mirrors can be made huge and supported from behind, need only one perfect surface, and do not split colours.**

q: Why put a telescope in space?
answer: **To avoid the atmosphere's blurring, and to see wavelengths (like X-rays and much infrared) that the air blocks.**

q: Why does the James Webb telescope observe in infrared?
answer: **To see through dust and to catch light from the most distant galaxies**, which has been stretched into the infrared.

q: Why doesn't more magnification always show more?
answer: **It also magnifies the blur.** Detail is limited by the aperture and the atmosphere, not by magnification.

q: Radio telescopes around the world were linked to act as one telescope as wide as the Earth ($1.27 \times 10^7$ m), at 1.3 mm. Find the limit in arcseconds.
answer: $1.22 \times \dfrac{1.3 \times 10^{-3}}{1.27 \times 10^7} \times 206{,}265 \approx$ **$2.6 \times 10^{-5}$″**, sharp enough to image a black hole's shadow.
:::
