---
id: stellar-evolution
title: The life of a star
prereqs: [star-formation]
big: A star's mass decides its whole life: heavy stars burn their fuel fast and die young in explosions, light stars burn slowly for billions of years; when the core's hydrogen runs out, a star swells into a red giant, and the elements it makes are later scattered into space.
recap: On the main sequence, luminosity rises steeply with mass, roughly $L \propto M^{3.5}$, so the lifetime $t \propto \dfrac{M}{L} \propto M^{-2.5}$; the Sun's is 10 billion years. When the core's hydrogen runs out, the core shrinks and heats, hydrogen fuses in a shell around it, and the outer layers swell and cool: a red giant. The core then fuses helium into carbon at about 100 million K. A star like the Sun ends by puffing off its outer layers as a planetary nebula, leaving a white dwarf. A star over about 8 solar masses fuses heavier and heavier elements up to iron, then its core collapses and it explodes as a supernova. Stars make almost every element heavier than helium.
check:
  q: A star has 4 times the Sun's mass. Roughly how long is its main sequence life? (The Sun's is 10 billion years.)
  options: ["about 300 million years", "about 40 billion years", "about 2.5 billion years", "about 10 billion years"]
  answer: 0
  why: Lifetime goes as $M^{-2.5}$: $4^{-2.5} = \frac{1}{32}$, and $\frac{10 \text{ billion}}{32} \approx 300$ million years. 40 billion assumes more fuel means a longer life, forgetting the much faster burning. 2.5 billion divides by 4, as if luminosity rose only in step with mass. 10 billion ignores mass entirely.
---

## Mass is destiny

A heavier star has more fuel, but it squeezes its core much harder, so the core is hotter and burns far faster. Measurements of [[binary-stars|binary stars]] on the main sequence show that luminosity rises steeply with mass, roughly

$$L \propto M^{3.5}$$

How long the fuel lasts is fuel divided by burning rate:

$$t \propto \frac{M}{L} \propto \frac{M}{M^{3.5}} = M^{-2.5}, \qquad t \approx 10 \text{ billion years} \times \left(\frac{M}{M_\odot}\right)^{-2.5}$$

:::widget plot
fn: x > 0 ? 10*Math.pow(x, -2.5) : NaN
x: 0 5
y: -5 65
points: 1,10; 0.5,56.6
xname: solar masses
yname: Gyr
label: lifetime
labelat: topleft
caption: Main sequence lifetime, in billions of years (Gyr), against mass. The Sun, at 1 solar mass, lasts 10 Gyr. Half a solar mass lasts about 57 Gyr, longer than the universe's age so far. Above about 3 solar masses, the lifetime is under a billion years.
:::

| Mass (Suns) | Main sequence lifetime |
|---|---|
| 0.5 | about 57 billion years |
| 1 | 10 billion years |
| 2 | about 1.8 billion years |
| 10 | about 30 million years |
| 25 | about 3 million years |

*Notice: the universe is 13.8 billion years old, so no star much lighter than the Sun has ever died of old age.*

## Running out: the red giant

When the hydrogen in the core is used up, fusion there stops. Without its heat, the core can no longer hold itself up, so it shrinks and gets hotter. Hydrogen begins fusing in a **shell** around the core, faster than before. The extra power pushes the outer layers far out, where they cool and redden.

The star becomes a {{red-giant|red giant}}: on the [[hr-diagram|H–R diagram]], it moves off the main sequence up and to the right. When the Sun does this, in about 5 billion years, it will swell until its radius is about 1 AU, swallowing Mercury and Venus, and perhaps the Earth.

When the shrinking core reaches about **100 million K**, helium starts to fuse into carbon (and some oxygen): three helium nuclei make one carbon nucleus.

## Two endings

| | Stars under about 8 solar masses (like the Sun) | Stars over about 8 solar masses |
|---|---|---|
| fusion goes as far as | carbon and oxygen | iron |
| late stage | red giant | red supergiant, with fusion in layers like an onion |
| death | outer layers drift off as a glowing {{planetary-nebula|planetary nebula}} | the iron core collapses and the star explodes as a supernova |
| what is left | a white dwarf | a neutron star or black hole |

A planetary nebula has nothing to do with planets: through early telescopes, these glowing shells looked round like planets.

Why does fusion stop at iron? [[fusion-fission|Binding energy per nucleon]] peaks at iron. Fusing anything into elements heavier than iron takes energy instead of giving it. A core of iron has no fuel left at all. What happens next is the subject of the next page.

## We are made of star stuff

The Big Bang made only hydrogen, helium and a trace of lithium. Almost every other atom, the carbon in your cells, the oxygen you breathe, the iron in your blood, was made inside a star and thrown back into space when it died. New stars and planets then formed from that enriched gas.

:::example
title: Find the main sequence lifetime of a star of 10 solar masses.

1. $t \approx 10 \text{ billion years} \times 10^{-2.5}$.
   why: Lifetime goes as $M^{-2.5}$, scaled to the Sun's 10 billion years.
   uses: []

2. $10^{-2.5} = \dfrac{1}{10^{2.5}} = \dfrac{1}{316}$.
   why: $10^{2.5} = 10^2 \times 10^{0.5} = 100 \times 3.16$.
   uses: [calculus:negative-fractional-exponents]

3. $t \approx \dfrac{10{,}000 \text{ million}}{316} \approx 32$ million years.
   why: Divide.
   uses: []

4. **About 30 million years**, 300 times shorter than the Sun, though it has 10 times the fuel. It burns about 3000 times as brightly.
   why: $L \propto 10^{3.5} \approx 3160$.
   uses: []
:::

:::practice
q: How luminous is a 2 solar mass main sequence star, and how long does it live?
answer: $2^{3.5} \approx$ **11 Suns**; $10 \times 2^{-2.5} \approx$ **1.8 billion years**.
:::

:::problems
q: Find the lifetime of a 4 solar mass star.
answer: $10 \times 4^{-2.5} = \dfrac{10}{32} \approx$ **0.31 billion years** (310 million).

q: Find the lifetime of a 0.5 solar mass star.
answer: $10 \times 0.5^{-2.5} = 10 \times 5.66 \approx$ **57 billion years**.

q: Find the luminosity of a 10 solar mass main sequence star.
answer: $10^{3.5} \approx$ **3200 Suns**.

q: A heavier star has more fuel. Why does it die sooner?
answer: **Its luminosity rises much faster than its fuel**, as $M^{3.5}$, so it burns through it quicker.

q: Why have no 0.5 solar mass stars died of old age yet?
answer: **Their 57 billion year lifetime is longer than the universe's 13.8 billion year age.**

q: What happens to a star's core when its hydrogen runs out?
answer: **It shrinks and heats up**, while hydrogen fuses in a shell around it.

q: Why does a red giant look red, though its core is hotter than ever?
answer: **Its outer layers have swollen so far that they have cooled.** Colour shows surface temperature.

q: The Sun, as a red giant, may reach 1 AU. How many times its present radius of 0.0047 AU is that?
answer: $\dfrac{1}{0.0047} \approx$ **210 times**.

q: What temperature does helium fusion need, and what does it make?
answer: **About 100 million K; it makes carbon** (and oxygen).

q: Why does fusion in the biggest stars stop at iron?
answer: **Iron has the highest binding energy per nucleon**, so fusing it releases no energy.

q: How will the Sun end?
answer: **As a red giant, then a planetary nebula around a white dwarf.**

q: Where did the iron in your blood come from?
answer: **From inside stars that died before the Sun formed.**
:::
