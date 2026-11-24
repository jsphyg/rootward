---
id: nuclear-physics
title: The atomic nucleus
prereqs: [energy-levels, mass-energy]
big: At the centre of every atom is a tiny, dense nucleus of protons and neutrons, held together by the strong nuclear force; a nucleus weighs less than its separate parts, and that missing mass is the energy binding it together.
recap: A nucleus is made of protons (charge +e) and neutrons (no charge), together called nucleons. Z, the atomic number, counts protons and fixes the element; A, the mass number, counts all nucleons. Isotopes are versions of an element with different numbers of neutrons. The strong nuclear force holds nucleons together against the protons' electric repulsion, but only over very short distances. A nucleus has less mass than its separate parts; this mass defect times $c^2$ is the binding energy. Iron-56 has the most binding energy per nucleon, about 8.8 MeV.
check:
  q: Carbon-14 has atomic number 6 and mass number 14. How many neutrons does it have?
  options: ["8", "6", "14", "20"]
  answer: 0
  why: Neutrons = mass number minus atomic number = $14 - 6 = 8$. 6 is the number of protons. 14 counts protons and neutrons together. 20 adds the two numbers.
---

## A tiny centre

In 1911, Ernest Rutherford's team fired alpha particles at thin gold foil. Most went straight through, but a very few bounced almost straight back. Rutherford said it was "as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you."

The explanation: almost all of an atom's mass is packed into a tiny, positively charged **nucleus** at its centre. The rest of the atom, where the electrons are, is nearly empty.

| | Size |
|---|---|
| atom | about $10^{-10}$ m |
| nucleus | about $10^{-15}$ m |

*Notice: the nucleus is about 100,000 times smaller than the atom. If an atom were a football stadium, the nucleus would be a pea on the centre spot.*

## What a nucleus is made of

A nucleus contains two kinds of particle, together called **nucleons**:

| Particle | Charge | Mass |
|---|---|---|
| proton | +e | about 1 u |
| neutron | 0 | about 1 u |
| (electron, outside the nucleus) | −e | about $\frac{1}{1800}$ u |

The atomic mass unit u is about $1.66 \times 10^{-27}$ kg.

Two numbers describe a nucleus:

- The **atomic number Z** counts the protons. It decides the element: every carbon atom has 6.
- The **mass number A** counts protons plus neutrons.

A nucleus is written like $^{14}_{\ 6}\text{C}$: mass number on top, atomic number below. Atoms of one element with different numbers of neutrons are {{isotope|isotopes}}. Carbon-12 and carbon-14 are both carbon, with 6 and 8 neutrons.

## The strong force

Protons are all positive and packed incredibly close, so they repel each other with huge electric forces. Something must hold them together. That is the **strong nuclear force**: a pull between nucleons, far stronger than the electric force, but acting only over about $10^{-15}$ m, the width of a nucleus. Neutrons help: they add strong-force pull without adding electric push. That is why heavier nuclei need more neutrons than protons.

## Binding energy

Here is something strange. Weigh a helium-4 nucleus, and it weighs **less** than two protons and two neutrons weighed separately. The difference is the **mass defect**.

By [[mass-energy|$E = mc^2$]], that missing mass is energy. It is the {{binding-energy|binding energy}}: the energy given out when the nucleus formed, and the energy you would need to pull it apart again. Nuclear energies are measured in MeV (million electron-volts, from the [[energy-levels|energy levels]] page), and 1 u of mass is worth 931.5 MeV.

The binding energy **per nucleon** shows how tightly a nucleus is held. It rises steeply from hydrogen to about iron-56, the most tightly bound nucleus (about 8.8 MeV per nucleon), then falls slowly for heavier nuclei. This one curve explains both nuclear power and the power of stars, on the fusion and fission page.

:::example
title: Find the binding energy of helium-4. Proton mass 1.007276 u, neutron mass 1.008665 u, helium-4 nucleus 4.001506 u.

1. Mass of the separate parts: $2 \times 1.007276 + 2 \times 1.008665 = 2.014552 + 2.017330 = 4.031882$ u.
   why: Helium-4 has 2 protons and 2 neutrons.
   uses: [mass-energy]

2. Mass defect: $4.031882 - 4.001506 = 0.030376$ u.
   why: The nucleus weighs less than its parts.
   uses: []

3. Binding energy: $0.030376 \times 931.5 \approx 28.3$ MeV.
   why: 1 u of mass is equivalent to 931.5 MeV.
   uses: [energy-levels]

4. **About 28.3 MeV, or 7.1 MeV per nucleon.** That is millions of times the few eV that hold electrons in atoms.
   why: Divide by the 4 nucleons; compare with 13.6 eV for hydrogen's electron.
   uses: []
:::

:::practice
q: Uranium-235 has Z = 92. How many protons and neutrons does it have?
answer: **92 protons and 143 neutrons** ($235 - 92$).
:::

:::problems
q: Carbon-14 has Z = 6, A = 14. How many neutrons?
answer: **8.**

q: An atom has 26 protons and 30 neutrons. Find Z and A.
answer: **Z = 26, A = 56** (iron-56).

q: Oxygen-16 and oxygen-18 are isotopes. How do their nuclei differ?
answer: **Oxygen-18 has 2 more neutrons.** Both have 8 protons.

q: How many electrons does a neutral uranium-238 atom (Z = 92) have?
answer: **92.**

q: Roughly how many times smaller is a nucleus than an atom?
answer: **About 100,000 times.**

q: Why didn't most alpha particles bounce back in Rutherford's experiment?
answer: **Atoms are mostly empty space**; only a few alpha particles came close to a tiny nucleus.

q: What holds protons together in a nucleus, despite their electric repulsion?
answer: **The strong nuclear force**, which is stronger but acts only over very short distances.

q: Find helium-4's binding energy, given a mass defect of 0.030376 u.
answer: **About 28.3 MeV.**

q: A deuterium nucleus (1 proton + 1 neutron) has a mass of 2.013553 u. Find its binding energy.
answer: Parts: $1.007276 + 1.008665 = 2.015941$ u. Defect: 0.002388 u. $\times 931.5 \approx$ **2.22 MeV**.

q: Which nucleus is most tightly bound per nucleon?
answer: **Iron-56**, at about 8.8 MeV per nucleon.

q: Convert 1 u into energy in joules, using $E = mc^2$.
answer: $1.66 \times 10^{-27} \times 9 \times 10^{16} \approx$ **$1.49 \times 10^{-10}$ J**, which is about 931 MeV.

q: Why do heavy nuclei have more neutrons than protons?
answer: **Neutrons add strong-force pull without adding electric push**, helping hold the crowded protons together.
:::
