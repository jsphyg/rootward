---
id: waves
title: "Waves: wavelength, frequency, speed"
prereqs: [simple-harmonic-motion]
big: A wave is a pattern of oscillation that travels, carrying energy from place to place without carrying the material along; its speed equals its frequency times its wavelength.
recap: A wave carries energy, not matter: each bit of the medium just oscillates about its own spot. The wavelength λ is the distance from one crest to the next, the frequency f is how many crests pass each second, and the speed is $v = f\lambda$. In transverse waves the medium moves at right angles to the wave's travel; in longitudinal waves it moves back and forth along it.
check:
  q: A wave has a frequency of 5 Hz and a wavelength of 2 m. How fast does it travel?
  options: ["10 m/s", "2.5 m/s", "0.4 m/s", "7 m/s"]
  answer: 0
  why: $v = f\lambda = 5 \times 2 = 10$ m/s. 2.5 divides frequency by wavelength. 0.4 divides wavelength by frequency. 7 adds them.
---

## A duck on a pond

Drop a stone in a pond. Ripples spread out in rings. A duck sitting on the water bobs up and down as each ripple passes, but it does not get carried out to the edge of the pond.

That is what a {{wave|wave}} is: a disturbance that travels, while each piece of water just [[simple-harmonic-motion|oscillates]] around its own place. The wave carries **energy** across the pond, not water.

## Two kinds of wave

| Kind | The medium moves | Examples |
|---|---|---|
| {{transverse|transverse}} | at right angles to the wave's travel | ripples on water, a shaken rope, light |
| {{longitudinal|longitudinal}} | back and forth along the wave's travel | sound, a pushed Slinky |

Shake a rope up and down and a hump runs along it: transverse. Push and pull one end of a Slinky and a squeezed patch runs along it: longitudinal.

## Measuring a wave

:::widget plot
fn: x >= 0 ? 2*Math.sin(Math.PI*x/2) : NaN
x: -0.5 8.6
y: -4 4
points: 3,-2; 7,-2
xname: x (m)
yname: y (cm)
label: wavelength 4 m
labelat: topleft
caption: A snapshot of a wave. The troughs at 3 m and 7 m are one wavelength apart, 4 m, and so are the crests at 1 m and 5 m. The amplitude is 2 cm, the height of a crest above the middle level.
:::

| Quantity | Symbol | Meaning | Unit |
|---|---|---|---|
| {{wavelength|wavelength}} | λ (lambda) | distance from one crest to the next | m |
| amplitude | A | height of a crest above the middle | m |
| frequency | f | crests passing a point each second | Hz |
| period | T | time between one crest and the next | s |

A bigger amplitude carries more energy: a taller ocean wave hits harder. The period and frequency are linked, as for any oscillation, by $f = \dfrac{1}{T}$.

## The wave equation

In one period, one full wavelength passes by. So the wave moves a distance λ in a time T, and its speed is

$$v = \frac{\lambda}{T} = f\lambda$$

The speed is mostly set by the **medium**: sound in air, light in glass, ripples on water. For a wave in a given medium, a higher frequency means a shorter wavelength, and the speed stays the same.

:::example
title: An FM radio station broadcasts at 100 MHz. Radio waves travel at $3 \times 10^8$ m/s. What is the wavelength?

1. Convert the frequency: 100 MHz $= 100 \times 10^6 = 1 \times 10^8$ Hz.
   why: Mega means a million.
   uses: []

2. Rearrange $v = f\lambda$ for λ: $\lambda = \dfrac{v}{f}$.
   why: We know the speed and the frequency.
   uses: [rearranging-formulas]

3. $\lambda = \dfrac{3 \times 10^8}{1 \times 10^8} = 3$ m.
   why: Dividing powers of ten.
   uses: []

4. **3 m.** That is why FM aerials are around a metre long, a fraction of the wavelength.
   why: Aerials work best at about a quarter or half of the wavelength.
   uses: []
:::

:::practice
q: A wave has a frequency of 2 Hz and a wavelength of 3 m. Find its speed.
answer: $2 \times 3 =$ **6 m/s**.
:::

:::problems
q: A wave has f = 5 Hz and λ = 2 m. Find its speed.
answer: **10 m/s.**

q: Sound travels at 343 m/s. Find the wavelength of a 440 Hz note.
answer: $\dfrac{343}{440} \approx$ **0.78 m**.

q: A sound wave in air (343 m/s) has a wavelength of 0.5 m. Find its frequency.
answer: $\dfrac{343}{0.5} =$ **686 Hz**.

q: A wave has a frequency of 50 Hz. Find its period.
answer: $\dfrac{1}{50} =$ **0.02 s**.

q: Ocean wave crests are 20 m apart and one passes a pier every 4 s. Find the frequency and speed.
answer: $f = \dfrac{1}{4} =$ **0.25 Hz**. $v = 0.25 \times 20 =$ **5 m/s**.

q: Green light has a wavelength of 500 nm ($5 \times 10^{-7}$ m) and travels at $3 \times 10^8$ m/s. Find its frequency.
answer: $\dfrac{3 \times 10^8}{5 \times 10^{-7}} =$ **$6 \times 10^{14}$ Hz**.

q: In the same medium, the frequency of a wave doubles. What happens to the wavelength?
answer: **It halves.** The speed is set by the medium.

q: You shake a rope so 10 crests leave your hand in 5 s. The crests are 0.4 m apart. Find f and v.
answer: **f = 2 Hz, v = 0.8 m/s.**

q: Is sound transverse or longitudinal? What about ripples on water?
answer: **Sound is longitudinal. Water ripples are transverse** (roughly: the water actually moves in small circles).

q: A duck bobs on a pond as waves pass. Why doesn't it move to the shore?
answer: **Waves carry energy, not the water.** Each bit of water just moves up and down in place.

q: Which carries more energy: a wave with amplitude 1 m or 2 m, in the same water?
answer: **The 2 m wave.** A bigger amplitude carries more energy.

q: A radio station broadcasts at 1 MHz, an AM station. Find the wavelength.
answer: $\dfrac{3 \times 10^8}{1 \times 10^6} =$ **300 m**.
:::
