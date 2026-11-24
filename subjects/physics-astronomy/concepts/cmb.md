---
id: cmb
title: The cosmic microwave background
prereqs: [big-bang]
big: In every direction, the sky glows faintly with microwaves: the leftover light of the hot early universe, released 380,000 years after the Big Bang and stretched by the expansion from a 3000 K glow to just 2.7 K; its tiny ripples were the seeds of galaxies.
recap: For its first 380,000 years, the universe was a hot glowing fog: light kept bouncing off free electrons. When it cooled to about 3000 K, electrons joined nuclei into atoms and the light flew free. That light still fills the universe. The expansion has since stretched its wavelengths about 1100 times, so it now matches a blackbody at 2.725 K, peaking at about 1 mm, in microwaves. It was discovered by accident in 1965 by Arno Penzias and Robert Wilson. It is almost perfectly even in every direction, but has tiny ripples, about 1 part in 100,000, showing where matter was slightly denser; gravity grew these into galaxies. The CMB is the strongest evidence for the Big Bang.
check:
  q: The CMB was released at about 3000 K and is now 2.7 K. By how much has the universe stretched since?
  options: ["about 1100 times", "about 3000 times", "about 2.7 times", "it has not stretched; the light cooled down"]
  answer: 0
  why: Stretching lengthens wavelengths, and a blackbody's peak wavelength goes as $\frac{1}{T}$, so the temperature falls in step with the stretch: $\frac{3000}{2.7} \approx 1100$. 3000 just takes the starting temperature. 2.7 takes today's. Light does not cool like a hot object: its temperature drops only because its wavelengths stretch.
---

## The fog clears

Picture the early universe, filled with hot, glowing gas of nuclei and free electrons. Light could not get far: it kept bouncing off the electrons, like light in thick fog. The universe was opaque.

As it expanded, it cooled. At about **380,000 years** old, it reached about **3000 K**: cool enough for electrons to stick to nuclei and make atoms. Atoms let light pass. Suddenly, the fog cleared, and the light then glowing everywhere set off in straight lines. It has been travelling ever since.

That light is the {{cmb|cosmic microwave background}}, or CMB. It is the oldest light there is, and wherever we look, we see the place it came from.

## Stretched into microwaves

At release, the light matched a [[blackbody-radiation|blackbody]] at 3000 K, glowing orange like a cool star. Since then the universe has stretched about 1100 times, and the light's wavelengths have stretched with it. By Wien's law, a longer peak wavelength is a lower temperature:

$$T_{\text{now}} = \frac{T_{\text{then}}}{1 + z} = \frac{3000 \text{ K}}{1100} \approx 2.7 \text{ K}$$

| | At release | Today |
|---|---|---|
| temperature | about 3000 K | 2.725 K |
| peak wavelength | about 1 µm (near infrared) | about 1 mm (microwaves) |
| age of the universe | 380,000 years | 13.8 billion years |

## Found by accident

In 1964, Arno Penzias and Robert Wilson were working with a large radio antenna in New Jersey. They found a faint hiss they could not get rid of. It came from every direction, day and night. They even cleaned out pigeon droppings from the antenna, in case they were the cause. They were not.

Nearby, a team at Princeton had just predicted that the Big Bang should have left exactly such a glow, and were building a detector to look for it. On hearing of the hiss, one of them said, "Boys, we've been scooped." Penzias and Wilson won the Nobel Prize in 1978.

Some of the "snow" on an old untuned analogue television was this same light.

## The ripples

Satellites (COBE in 1989, WMAP in 2001, Planck in 2009) mapped the CMB over the whole sky. It is astonishingly even: the same temperature in every direction to about **1 part in 100,000**.

But not perfectly even. The tiny ripples show where matter was slightly denser. Over billions of years, gravity pulled more and more matter into these denser spots. They grew into the galaxies, clusters and filaments we see today. The CMB is a baby picture of the universe's structure.

The exact pattern of ripples is a precise test. It matches the Big Bang theory and gives the universe's age (13.8 billion years), its makeup (including [[dark-matter|dark matter]]), and much more.

:::example
title: Find the peak wavelength of the CMB today, at 2.725 K.

1. Wien's law: $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}}{T}$.
   why: The peak of a blackbody spectrum.
   uses: [blackbody-radiation]

2. $\lambda_{\max} = \dfrac{2.9 \times 10^{-3}}{2.725}$.
   why: Substitute today's temperature.
   uses: []

3. $\lambda_{\max} \approx 1.06 \times 10^{-3}$ m.
   why: Divide.
   uses: []

4. **About 1 mm: microwaves.** That is why it is called the microwave background.
   why: Wavelengths from about 1 mm to 30 cm are microwaves.
   uses: [em-spectrum]
:::

:::practice
q: Find the peak wavelength of the CMB at release, at 3000 K.
answer: $\dfrac{2.9 \times 10^{-3}}{3000} \approx$ **$9.7 \times 10^{-7}$ m, about 1 µm**: near infrared, just beyond red light.
:::

:::problems
q: Why couldn't light travel freely before 380,000 years?
answer: **Free electrons kept scattering it**, like light in fog.

q: What happened at 380,000 years that let light go free?
answer: **Electrons joined nuclei to form atoms**, which let light pass.

q: The CMB left at 3000 K and is now 2.7 K. By how much has the universe stretched?
answer: **About 1100 times.**

q: When the universe was half its present size, what was the CMB's temperature?
answer: **About 5.4 K**, twice today's.

q: What was the CMB's temperature when the universe was a tenth of its present size?
answer: **About 27 K.**

q: Why does the CMB now appear as microwaves?
answer: **Its wavelengths have been stretched about 1100 times**, from near infrared to about 1 mm.

q: Who discovered the CMB, and how?
answer: **Penzias and Wilson in 1965**, as a hiss in a radio antenna from every direction.

q: The CMB varies by about 1 part in 100,000. How big is that variation at 2.725 K?
answer: $2.725 \times 10^{-5}$ K, **about 27 millionths of a kelvin**.

q: Why do the CMB's ripples matter?
answer: **They were the seeds of galaxies**: denser spots that gravity grew into structure.

q: Why is the CMB strong evidence for the Big Bang?
answer: **It is the predicted glow of a hot, dense early universe**, a near-perfect blackbody, from every direction.
:::
