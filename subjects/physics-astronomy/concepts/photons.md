---
id: photons
title: Light as particles (photons)
prereqs: [em-spectrum]
big: Light travels as a wave but gives up its energy in separate packets called photons, each with energy $hf$; this explains why dim ultraviolet can knock electrons out of a metal when bright red light cannot.
recap: Light's energy comes in packets, photons, each with energy $E = hf = \dfrac{hc}{\lambda}$, where $h = 6.63 \times 10^{-34}$ J·s is Planck's constant. Higher frequency, more energy per photon. In the photoelectric effect, one photon frees one electron, but only if its energy beats the metal's work function φ; the electron leaves with at most $hf - \varphi$. Brighter light means more photons, not more energetic ones. A handy shortcut: E in eV $= \dfrac{1240}{\lambda \text{ in nm}}$.
check:
  q: What is the energy of a photon of green light, wavelength 500 nm?
  options: ["about 4 × 10⁻¹⁹ J", "about 1.3 × 10⁻²⁷ J", "about 6 × 10¹⁴ J", "about 3 × 10⁸ J"]
  answer: 0
  why: $E = \dfrac{hc}{\lambda} = \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{5 \times 10^{-7}} \approx 4 \times 10^{-19}$ J, about 2.5 eV. $1.3 \times 10^{-27}$ divides h by λ and leaves out c. $6 \times 10^{14}$ is the frequency in hertz, not an energy. $3 \times 10^8$ is the speed of light.
---

## A puzzle with metal

Shine light on a clean zinc plate and, sometimes, electrons fly off it. This is the **photoelectric effect**. The details made no sense if light were only a wave:

| Light | Result |
|---|---|
| bright red | no electrons at all, however bright |
| dim ultraviolet | electrons straight away |
| brighter ultraviolet | more electrons, but no faster |
| higher-frequency ultraviolet | faster electrons |

*Notice: what matters for whether electrons come out is the colour (frequency), not the brightness.*

A wave would deliver more energy if it were brighter, so bright red light should eventually shake electrons loose. It never does.

## Packets of energy

In 1905, Albert Einstein explained it. Light's energy arrives in separate packets, now called {{photon|photons}}. Each photon carries an energy

$$E = hf = \frac{hc}{\lambda}$$

where $h = 6.63 \times 10^{-34}$ J·s is **Planck's constant**.

- A photon gives all its energy to **one** electron, or none.
- A red photon carries too little to free an electron from zinc. Sending more red photons does not help: no single one is enough.
- An ultraviolet photon carries more energy per packet, enough to free an electron.
- Brighter light means **more** photons, so more electrons, but each photon still has the same energy.

The least energy needed to free an electron from a metal is its **work function**, φ. The leftover becomes the electron's kinetic energy:

$$KE_{\max} = hf - \varphi$$

Einstein won the Nobel Prize for this.

## Wave or particle?

Both. Light spreads, diffracts and interferes like a wave. But it gives up its energy in packets, like particles. This **wave-particle duality** is a deep feature of nature: electrons, it turns out, behave the same way.

Photon energies are tiny in joules, so the electron-volt from the [[voltage|voltage]] page is handy. A useful shortcut:

$$E \text{ (eV)} \approx \frac{1240}{\lambda \text{ (nm)}}$$

| Light | Wavelength | Photon energy |
|---|---|---|
| red | 700 nm | 1.8 eV |
| violet | 400 nm | 3.1 eV |
| X-ray | 0.1 nm | 12,400 eV |

This is why the [[em-spectrum|short-wavelength end of the spectrum]] is dangerous: each photon carries enough energy to break molecules.

:::example
title: Sodium has a work function of 2.3 eV. Does violet light (400 nm) free electrons from it? If so, how fast can they go? What about red light (700 nm)?

1. Violet photon energy: $\dfrac{1240}{400} = 3.1$ eV.
   why: The eV shortcut.
   uses: [em-spectrum]

2. 3.1 eV beats 2.3 eV, so electrons come out, with up to $3.1 - 2.3 = 0.8$ eV $= 0.8 \times 1.6 \times 10^{-19} = 1.28 \times 10^{-19}$ J.
   why: $KE_{\max} = hf - \varphi$.
   uses: []

3. Speed: $v = \sqrt{\dfrac{2 \times 1.28 \times 10^{-19}}{9.11 \times 10^{-31}}} \approx 5.3 \times 10^5$ m/s.
   why: $KE = \tfrac{1}{2}mv^2$, with the electron's mass.
   uses: []

4. **Violet frees electrons at up to about 530 km/s. Red, at $\frac{1240}{700} \approx 1.8$ eV per photon, frees none**, however bright.
   why: 1.8 eV is less than the 2.3 eV work function.
   uses: []
:::

:::practice
q: Find the energy of a photon with a frequency of $1 \times 10^{15}$ Hz, in joules and eV.
answer: $6.63 \times 10^{-34} \times 10^{15} =$ **$6.63 \times 10^{-19}$ J**, which is $\dfrac{6.63 \times 10^{-19}}{1.6 \times 10^{-19}} \approx$ **4.1 eV**.
:::

:::problems
q: Find the energy of a 500 nm photon.
answer: **About $4 \times 10^{-19}$ J (2.5 eV).**

q: Find the energy of an FM radio photon, 100 MHz.
answer: $6.63 \times 10^{-34} \times 10^8 =$ **$6.63 \times 10^{-26}$ J**, millions of times less than visible light.

q: Find the energy of a 0.1 nm X-ray photon in eV.
answer: $\dfrac{1240}{0.1} =$ **12,400 eV** (12.4 keV).

q: A red laser pointer (633 nm) gives out 1 mW. How many photons does it send each second?
answer: Each photon: $\dfrac{hc}{\lambda} \approx 3.14 \times 10^{-19}$ J. $\dfrac{10^{-3}}{3.14 \times 10^{-19}} \approx$ **$3.2 \times 10^{15}$ photons per second**.

q: Zinc's work function is 4.3 eV. Find the lowest frequency of light that frees electrons.
answer: $f = \dfrac{\varphi}{h} = \dfrac{4.3 \times 1.6 \times 10^{-19}}{6.63 \times 10^{-34}} \approx$ **$1.04 \times 10^{15}$ Hz**, in the ultraviolet.

q: Light of 3.1 eV photons hits sodium (φ = 2.3 eV). Find the maximum kinetic energy of the electrons.
answer: **0.8 eV.**

q: Bright red light does not free electrons from zinc. Will making it ten times brighter help?
answer: **No.** Each photon still has too little energy.

q: Ultraviolet light frees electrons from a metal. You make it brighter. What changes?
answer: **More electrons come out each second**, but their top speed stays the same.

q: You switch to a higher frequency of ultraviolet. What changes?
answer: **The electrons come out faster**, because each photon has more energy.

q: Which photon has more energy, red or blue?
answer: **Blue**, because its frequency is higher.

q: A photon has 2 eV of energy. Find its wavelength and colour.
answer: $\dfrac{1240}{2} =$ **620 nm, orange-red**.

q: Give one thing light does that shows it is a wave, and one that shows it comes in particles.
answer: **Wave: interference or diffraction. Particles: the photoelectric effect.**
:::
