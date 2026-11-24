---
id: the-sun
title: The Sun: how a star shines
prereqs: [fusion-fission, blackbody-radiation]
big: The Sun is a ball of hot gas held together by its own gravity; in its core, at about 15 million K, hydrogen fuses into helium, turning 4 million tonnes of mass into energy every second, enough to keep it shining for about 10 billion years.
recap: The Sun's gravity squeezes it inward; the pressure of its hot gas pushes outward; the two balance. In the core, at about 15 million K, the proton-proton chain fuses four hydrogen nuclei into one helium nucleus, turning about 0.7% of the mass into energy by $E = mc^2$. To supply its luminosity of $3.85 \times 10^{26}$ W, the Sun loses about 4.3 million tonnes of mass per second. Energy crawls out through the radiative zone, is carried up by boiling motions in the convective zone, and leaves from the 5800 K surface, the photosphere. Above lie the chromosphere and the million-degree corona. With about 10% of its hydrogen usable, the Sun lasts about 10 billion years; it is halfway through.
check:
  q: The Sun gives out $3.85 \times 10^{26}$ W. About how much mass does it turn into energy each second?
  options: ["$4.3 \\times 10^9$ kg", "$1.3 \\times 10^{18}$ kg", "$3.85 \\times 10^{26}$ kg", "$4.3 \\times 10^{-9}$ kg"]
  answer: 0
  why: $m = \dfrac{E}{c^2} = \dfrac{3.85 \times 10^{26}}{(3 \times 10^8)^2} = \dfrac{3.85 \times 10^{26}}{9 \times 10^{16}} \approx 4.3 \times 10^9$ kg, about 4 million tonnes. $1.3 \times 10^{18}$ divides by c instead of $c^2$. $3.85 \times 10^{26}$ treats watts as kilograms. $4.3 \times 10^{-9}$ has the power of ten upside down.
---

## A balanced ball of gas

The Sun is 109 times as wide as the Earth and 333,000 times as heavy. It is not solid or liquid: it is gas, mostly hydrogen and helium, so hot that the atoms are torn apart into nuclei and electrons.

Two things fight inside it. **Gravity** pulls every part toward the centre. The **pressure** of the hot gas pushes outward. At each depth they balance exactly, so the Sun neither shrinks nor flies apart. This balance is called {{hydrostatic-equilibrium|hydrostatic equilibrium}}.

The deeper you go, the more weight presses down, so the gas there must be hotter and denser to hold it up. At the centre, the temperature is about **15 million K**.

## The fire in the core

Only in the core is it hot enough for [[fusion-fission|fusion]]. Hydrogen nuclei, protons, crash together fast enough to overcome their electric repulsion. In a series of steps called the **proton-proton chain**, four protons end up as one helium nucleus:

$$4\ {}^{1}\text{H} \rightarrow {}^{4}\text{He} + \text{energy}$$

The helium weighs about **0.7% less** than the four protons. That missing mass becomes energy, $E = mc^2$.

| Quantity | Value |
|---|---|
| luminosity | $3.85 \times 10^{26}$ W |
| mass turned to energy | about 4.3 million tonnes per second |
| hydrogen fused | about 600 million tonnes per second |
| core temperature | about 15 million K |
| surface temperature | 5800 K |

*Notice: 4 million tonnes a second sounds huge, but in 5 billion years the Sun has lost less than 0.1% of its mass this way.*

## From core to surface

The energy's journey out takes a very long time.

| Layer | What happens |
|---|---|
| core | fusion makes the energy |
| radiative zone | light is absorbed and given out again countless times, zigzagging outward; estimates of the time this takes range from about 10,000 to over 100,000 years |
| convective zone | the gas boils: hot blobs rise, cool and sink, like a pan of soup |
| photosphere | the visible surface, 5800 K, where light finally escapes; it glows almost like a [[blackbody-radiation|blackbody]] |
| chromosphere and corona | thin outer layers; the corona is strangely hot, over a million K |

**Sunspots** are dark patches on the photosphere where strong magnetic fields block the boiling. They are about 4000 K, cooler than their surroundings, so they look dark by contrast. Their numbers rise and fall in an 11-year cycle.

## How long it lasts

Only the core, about a tenth of the Sun's hydrogen, gets hot enough to fuse. That fuel, burning at today's rate, lasts about **10 billion years**. The Sun is about 4.6 billion years old, so it is roughly halfway through its life.

:::example
title: Estimate the Sun's lifetime. It has $2.0 \times 10^{30}$ kg of mass; 10% of it can fuse, and fusion turns 0.7% of that into energy.

1. Mass turned into energy: $0.007 \times 0.1 \times 2.0 \times 10^{30} = 1.4 \times 10^{27}$ kg.
   why: 0.7% of the 10% that fuses.
   uses: [fusion-fission]

2. Energy: $E = mc^2 = 1.4 \times 10^{27} \times 9 \times 10^{16} \approx 1.3 \times 10^{44}$ J.
   why: Mass becomes energy.
   uses: [fusion-fission]

3. Time: $\dfrac{1.3 \times 10^{44}}{3.85 \times 10^{26}} \approx 3.3 \times 10^{17}$ s.
   why: Energy divided by power gives time.
   uses: []

4. **About 10 billion years** ($3.3 \times 10^{17}$ s ÷ $3.16 \times 10^7$ s per year).
   why: Converting seconds to years.
   uses: []
:::

:::practice
q: How much energy does 1 kg of hydrogen give when it fuses into helium?
answer: $0.007 \times 1 \times (3 \times 10^8)^2 \approx$ **$6.3 \times 10^{14}$ J**, as much as burning about 15,000 tonnes of oil.
:::

:::problems
q: The Sun gives out $3.85 \times 10^{26}$ W. How much mass does it lose to fusion each second?
answer: **About $4.3 \times 10^9$ kg**, 4.3 million tonnes.

q: Why doesn't the Sun collapse under its own gravity?
answer: **The pressure of its hot gas pushes out** and balances gravity at every depth.

q: Why does fusion happen only in the core?
answer: **Only the core is hot and dense enough** for protons to crash together despite their repulsion.

q: What fraction of the mass is turned into energy when hydrogen fuses into helium?
answer: **About 0.7%.**

q: Use $P = \sigma A T^4$ to find the power from each square metre of the Sun's 5800 K surface.
answer: $5.67 \times 10^{-8} \times 5800^4 \approx$ **$6.4 \times 10^7$ W/m²**.

q: A sunspot is 4000 K. How much power does each square metre give out, compared with the 5800 K surface?
answer: $\left(\dfrac{4000}{5800}\right)^4 \approx$ **0.23, under a quarter**, so it looks dark by contrast.

q: About how long will the Sun shine in total, and how far through is it?
answer: **About 10 billion years; it is about halfway**, at 4.6 billion.

q: Where does the Sun's energy travel by boiling motions?
answer: **The convective zone**, the outer part under the surface.

q: The Sun's mass is $2.0 \times 10^{30}$ kg. If it lost $4.3 \times 10^9$ kg per second, how long to lose it all?
answer: About $4.7 \times 10^{20}$ s, **about 15 trillion years**. Fusion stops long before; only a tiny fraction is ever lost.
:::
