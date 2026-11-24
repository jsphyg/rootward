---
id: em-waves
title: Light as an electromagnetic wave
prereqs: [induction, waves]
big: A changing magnetic field makes an electric field, and a changing electric field makes a magnetic field; together they can travel through empty space as a wave, at the speed of light, and light is exactly such a wave.
recap: An electromagnetic wave is linked electric and magnetic fields, each changing and so creating the other, at right angles to each other and to the direction of travel (a transverse wave). It needs no material, so it crosses empty space. In a vacuum all electromagnetic waves travel at $c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.00 \times 10^8$ m/s, and $c = f\lambda$. Light, radio, X-rays and the rest are all this same kind of wave.
check:
  q: In empty space, how does the speed of a radio wave compare with the speed of visible light?
  options: ["They are the same", "Radio is faster, because its waves are longer", "Light is faster, because its frequency is higher", "Radio waves cannot travel through empty space"]
  answer: 0
  why: All electromagnetic waves travel at c in a vacuum, about $3 \times 10^8$ m/s, whatever their frequency. Longer wavelength just means lower frequency, with $f\lambda$ the same. Radio waves cross space easily; that is how we talk to spacecraft.
---

## The puzzle of light

By the 1860s, people knew light travelled at about $3 \times 10^8$ m/s, and that it was a wave, because it showed [[interference|interference]]. But a wave of what? Sound is a wave in air. Light reaches us across empty space from the Sun, with nothing to wave.

James Clerk Maxwell found the answer by putting together everything known about electricity and magnetism.

## Fields that make each other

- [[induction|Faraday's law]]: a **changing magnetic field** makes an electric field. (That is what pushes the charges round in induction.)
- Maxwell's addition: a **changing electric field** makes a magnetic field.

Put the two together. A changing electric field makes a changing magnetic field, which makes a changing electric field, which makes a changing magnetic field... The pair can keep each other going, and the disturbance moves outward on its own. That is an {{em-wave|electromagnetic wave}}. It can be started by any charge that jiggles back and forth, like electrons in an aerial.

| Feature | What it means |
|---|---|
| no material needed | the fields themselves are what wave, so it crosses a vacuum |
| transverse | the electric and magnetic fields point at right angles to the travel direction |
| fields at right angles | the electric field and magnetic field are perpendicular to each other too |

## The speed

From the constants of electricity and magnetism, Maxwell worked out how fast such a wave must travel:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$

Here $\mu_0 = 4\pi \times 10^{-7}$ is the magnetic constant from the magnetic fields page, and $\varepsilon_0 = 8.85 \times 10^{-12}$ is its electric partner (Coulomb's constant k is $\frac{1}{4\pi\varepsilon_0}$). The answer came out at almost exactly the measured speed of light. Maxwell wrote that light must be an electromagnetic wave. He was right.^[n_maxwell]

All electromagnetic waves in a vacuum travel at the same speed, c, whatever their frequency. As for any [[waves|wave]]:

$$c = f\lambda$$

In glass or water, light slows down, which is the cause of refraction.

:::example
title: Use $\mu_0 = 4\pi \times 10^{-7}$ and $\varepsilon_0 = 8.85 \times 10^{-12}$ to calculate the speed of light.

1. Multiply: $\mu_0 \varepsilon_0 = 4\pi \times 10^{-7} \times 8.85 \times 10^{-12} \approx 1.257 \times 10^{-6} \times 8.85 \times 10^{-12} \approx 1.112 \times 10^{-17}$.
   why: Work out the bottom first.
   uses: [induction]

2. Square root: $\sqrt{1.112 \times 10^{-17}} = \sqrt{11.12 \times 10^{-18}} \approx 3.335 \times 10^{-9}$.
   why: Rewriting with an even power of ten makes the root easy.
   uses: []

3. $c = \dfrac{1}{3.335 \times 10^{-9}} \approx 3.00 \times 10^8$ m/s.
   why: One over the root.
   uses: []

4. **About $3.00 \times 10^8$ m/s**, the speed of light, from two constants measured with coils and charged plates.
   why: This match is how we know light is electromagnetic.
   uses: [waves]
:::

:::practice
q: Wi-Fi uses radio waves at 2.4 GHz ($2.4 \times 10^9$ Hz). Find the wavelength.
answer: $\lambda = \dfrac{3 \times 10^8}{2.4 \times 10^9} =$ **0.125 m** (12.5 cm).
:::

:::problems
q: How long does light take to reach us from the Sun, $1.5 \times 10^{11}$ m away?
answer: $\dfrac{1.5 \times 10^{11}}{3 \times 10^8} =$ **500 s**, about 8 minutes 20 seconds.

q: How long does light take to travel from the Moon, $3.84 \times 10^8$ m away?
answer: **About 1.28 s.**

q: A radar pulse bounces off the Moon. How long until the echo returns?
answer: There and back: **about 2.56 s.**

q: Orange light has a wavelength of 600 nm. Find its frequency.
answer: $\dfrac{3 \times 10^8}{6 \times 10^{-7}} =$ **$5 \times 10^{14}$ Hz**.

q: An FM station broadcasts at 100 MHz. Find the wavelength.
answer: **3 m.**

q: A GPS satellite is 20,000 km up. How long does its signal take to reach you, directly below?
answer: $\dfrac{2 \times 10^7}{3 \times 10^8} \approx$ **0.067 s**.

q: A light-year is the distance light travels in a year. Find it in metres.
answer: $3 \times 10^8 \times 365.25 \times 86{,}400 \approx$ **$9.5 \times 10^{15}$ m**.

q: Why can light cross empty space when sound cannot?
answer: **Light is made of electric and magnetic fields**, which need no material. Sound is a wave in a material.

q: Is light a transverse or longitudinal wave?
answer: **Transverse.** Its fields point at right angles to its travel.

q: What starts an electromagnetic wave?
answer: **A charge that accelerates**, for example electrons jiggling back and forth in an aerial.

q: Do blue and red light travel at different speeds in a vacuum?
answer: **No.** All colours travel at c in a vacuum.

q: What evidence convinced Maxwell that light is an electromagnetic wave?
answer: **The speed he calculated from electric and magnetic constants matched the measured speed of light.**
:::
