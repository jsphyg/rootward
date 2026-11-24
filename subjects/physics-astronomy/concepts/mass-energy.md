---
id: mass-energy
title: E = mc²
prereqs: [special-relativity, conservation-of-energy]
big: Mass is a form of energy; a mass m holds an energy $mc^2$, which is enormous because c² is enormous, and when energy is released, a tiny amount of mass disappears.
recap: Einstein's $E = mc^2$: any mass m has a rest energy $mc^2$, with $c^2 = 9 \times 10^{16}$ m²/s². Mass and energy are two forms of one thing, and it is their total that is conserved. When a system gives out energy E, its mass falls by $\dfrac{E}{c^2}$. In chemical reactions the change is far too small to measure; in nuclear reactions it is about a thousandth of the mass, which is why nuclear fuel is so concentrated. A particle and its antiparticle can turn entirely into energy.
check:
  q: If 1 gram of mass were turned completely into energy, how much energy would that be?
  options: ["$9 \\times 10^{13}$ J", "$3 \\times 10^5$ J", "$9 \\times 10^{16}$ J", "$3 \\times 10^{11}$ J"]
  answer: 0
  why: $E = mc^2 = 0.001 \times (3 \times 10^8)^2 = 0.001 \times 9 \times 10^{16} = 9 \times 10^{13}$ J. $3 \times 10^5$ forgets to square c. $9 \times 10^{16}$ uses 1 kg instead of 1 g. $3 \times 10^{11}$ uses c without squaring and grams as kilograms.
---

## The most famous equation

In 1905, the same year as [[special-relativity|special relativity]], Einstein found that it has a startling consequence:

$$E = mc^2$$

Every mass m holds an amount of energy $mc^2$, called its **rest energy**, just by existing. Mass is a very concentrated form of energy.

Because $c^2 = 9 \times 10^{16}$, a little mass is a lot of energy:

| Mass | Energy $mc^2$ | Compare with |
|---|---|---|
| 1 kg | $9 \times 10^{16}$ J | about 20 million tonnes of TNT |
| 1 g | $9 \times 10^{13}$ J | a large city's electricity for a day |
| an electron | $8.2 \times 10^{-14}$ J = 0.511 MeV | |

*Notice: the rest energy of a single 1 g raisin, if it could all be released, would be more than the bomb that destroyed Hiroshima.*

## Mass changes when energy changes

The equation works both ways. When anything gives out energy E, its mass goes down by

$$\Delta m = \frac{E}{c^2}$$

A hot cup of tea weighs very slightly more than the same tea cold. A stretched spring weighs very slightly more than a slack one. The changes are far too tiny to measure in everyday life: burning a litre of petrol releases about $3 \times 10^7$ J, which is a mass loss of about a third of a millionth of a gram.

So what is conserved is not mass alone, or energy alone, but the two together, counting $mc^2$ as energy. This is the full form of [[conservation-of-energy|conservation of energy]].

## Where it shows

- **Nuclear power and the Sun.** In nuclear reactions, the products weigh noticeably less than what went in, about 0.1% for fission and 0.7% for fusion. The missing mass comes out as energy. That is why a kilogram of uranium can give millions of times more energy than a kilogram of coal.
- **The Sun** gives out $3.9 \times 10^{26}$ W, so it loses about 4 million tonnes of mass every second.
- **Antimatter.** An electron meeting its antiparticle, a positron, can vanish completely into two gamma-ray photons, each carrying 0.511 MeV.
- **Making particles.** Particle accelerators do the reverse: they turn energy into new particles with mass.

:::example
title: The Sun gives out $3.9 \times 10^{26}$ W. How much mass does it lose each second?

1. Energy each second: $3.9 \times 10^{26}$ J.
   why: A watt is a joule per second.
   uses: [conservation-of-energy]

2. Mass lost: $\Delta m = \dfrac{E}{c^2} = \dfrac{3.9 \times 10^{26}}{9 \times 10^{16}}$.
   why: Energy out means mass lost, by $E/c^2$.
   uses: [special-relativity]

3. $\Delta m \approx 4.3 \times 10^9$ kg.
   why: Divide the number parts and subtract the powers.
   uses: []

4. **About 4.3 million tonnes every second.** The Sun is so massive ($2 \times 10^{30}$ kg) that over its whole 10-billion-year life, it loses less than a thousandth of its mass this way.
   why: Comparing with its total mass.
   uses: []
:::

:::practice
q: Find the rest energy of 1 kg.
answer: **$9 \times 10^{16}$ J.**
:::

:::problems
q: Find the rest energy of 1 g.
answer: **$9 \times 10^{13}$ J.**

q: Find the rest energy of an electron ($9.11 \times 10^{-31}$ kg), in joules and MeV.
answer: $9.11 \times 10^{-31} \times 9 \times 10^{16} \approx$ **$8.2 \times 10^{-14}$ J**, which is $\dfrac{8.2 \times 10^{-14}}{1.6 \times 10^{-13}} \approx$ **0.51 MeV**.

q: An electron and a positron annihilate at rest. How much energy comes out?
answer: Twice the electron's rest energy: **about 1.02 MeV**, as two gamma rays.

q: How much mass is lost when something gives out 1 J?
answer: $\dfrac{1}{9 \times 10^{16}} \approx$ **$1.1 \times 10^{-17}$ kg**.

q: A 1 GW nuclear power station runs for a year ($3.15 \times 10^7$ s). How much mass is turned into energy?
answer: $E = 10^9 \times 3.15 \times 10^7 = 3.15 \times 10^{16}$ J. $\Delta m = \dfrac{3.15 \times 10^{16}}{9 \times 10^{16}} \approx$ **0.35 kg**.

q: The Hiroshima bomb released about $6.3 \times 10^{13}$ J. How much mass was converted?
answer: $\dfrac{6.3 \times 10^{13}}{9 \times 10^{16}} \approx$ **0.0007 kg**, less than a gram.

q: The Sun gives out $3.9 \times 10^{26}$ W. How much mass does it lose per second?
answer: **About $4.3 \times 10^9$ kg.**

q: Burning a litre of petrol releases about $3 \times 10^7$ J. How much mass is lost?
answer: $\dfrac{3 \times 10^7}{9 \times 10^{16}} \approx$ **$3.3 \times 10^{-10}$ kg**, far too little to weigh.

q: A hot cup of tea cools down. Does its mass change?
answer: **Yes, it falls very slightly**, by the energy lost divided by $c^2$. Far too little to measure.

q: Why is nuclear fuel so much more concentrated than chemical fuel?
answer: **Nuclear reactions turn about a thousandth of the mass into energy**; chemical reactions turn about a billionth.

q: What is conserved: mass, energy, or something else?
answer: **The total of energy and mass together**, counting mass as energy $mc^2$.

q: Why does such a small mass give such a large energy?
answer: **$c^2$ is enormous**: $9 \times 10^{16}$ m²/s².
:::
