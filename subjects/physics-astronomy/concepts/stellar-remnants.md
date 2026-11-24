---
id: stellar-remnants
title: White dwarfs, neutron stars and supernovae
prereqs: [stellar-evolution, escape-velocity]
big: When fusion ends, a star's core collapses into an extremely dense remnant: a white dwarf, the size of the Earth, or, after a supernova explosion, a neutron star, the size of a city; how heavy the core is decides which.
recap: A white dwarf is the leftover core of a Sun-like star: about a Sun's mass packed into the size of the Earth, a million times denser than water. It is held up by electrons resisting being squeezed closer, which works only up to 1.4 solar masses (the Chandrasekhar limit). A heavier core, at the end of a massive star's life, collapses in under a second until its electrons and protons are crushed into neutrons; the infalling layers rebound and blast outward as a supernova, briefly as bright as a whole galaxy. The neutron star left behind is about 1.4 solar masses in a ball 20 km across, as dense as an atomic nucleus, with an escape velocity of over half the speed of light. Spinning neutron stars that sweep beams across us are pulsars. Above about 3 solar masses, nothing can stop the collapse.
check:
  q: A neutron star has 1.4 solar masses in a radius of 10 km. About what is its escape velocity?
  options: ["about 0.6 times the speed of light", "about 11 km/s", "about 600 km/s", "faster than light"]
  answer: 0
  why: $v = \sqrt{\dfrac{2GM}{R}} = \sqrt{\dfrac{2 \times 6.67 \times 10^{-11} \times 2.8 \times 10^{30}}{10^4}} \approx 1.9 \times 10^8$ m/s, about 0.64c. 11 km/s is the Earth's. 600 km/s is about the Sun's, which is far larger. Faster than light would make it a black hole, which needs it squeezed smaller still.
---

## When the fire goes out

A star lives by balancing gravity against the pressure of its hot gas, as in [[the-sun|the Sun]]. When [[stellar-evolution|fusion ends]], the heat source is gone and gravity wins. The core collapses until something else can hold it up. What that something is depends on how heavy the core is.

| Core mass | What holds it up | Remnant | Size |
|---|---|---|---|
| under 1.4 solar masses | electrons refusing to be squeezed closer | white dwarf | about the Earth |
| 1.4 to about 3 solar masses | neutrons refusing to be squeezed closer | neutron star | about 20 km across |
| over about 3 solar masses | nothing | black hole | see the next page |

The "refusing to be squeezed" is a quantum effect: particles like electrons and neutrons cannot be packed into the same state, so they resist being crowded, however cold they are.

## White dwarfs

A Sun-like star ends by puffing off its outer layers, leaving its carbon and oxygen core: a {{white-dwarf|white dwarf}}. It has about 0.6 solar masses in a ball the size of the Earth.

- **Density:** about $10^9$ kg/m³. A teaspoon would weigh about 5 tonnes.
- **Temperature:** hot at first, tens of thousands of kelvin, so it is white. With no fuel, it then cools slowly over billions of years.
- **Limit:** electrons can only hold up 1.4 solar masses. This is the {{chandrasekhar-limit|Chandrasekhar limit}}, found by Subrahmanyan Chandrasekhar in 1930, aged 19.

## Supernovae

In a star over about 8 solar masses, the core turns to iron, which cannot fuel fusion. When it passes 1.4 solar masses, the electrons give way. The core falls in on itself in under a second, from the size of the Earth to a ball about 20 km wide. Electrons and protons are crushed together into neutrons.

The outer layers crash down onto this hard new core, rebound, and are blown outward in a {{supernova|supernova}}. For a few weeks, one star can outshine a whole galaxy of 100 billion stars. The explosion forges many elements heavier than iron and scatters them, with the star's carbon and oxygen, into space.

Another kind of supernova happens when a white dwarf in a [[binary-stars|binary]] pulls gas from its partner until it passes 1.4 solar masses and blows apart. These all reach nearly the same peak luminosity, which makes them [[brightness-distance|standard candles]] for measuring distant galaxies.

In 1054, Chinese astronomers recorded a new star bright enough to see in daylight for weeks. Its wreckage is the Crab Nebula, with a neutron star at its heart.

## Neutron stars and pulsars

A {{neutron-star|neutron star}} packs about 1.4 solar masses into a radius of about 10 km. It is as dense as an atomic nucleus: a teaspoon would weigh billions of tonnes. Its [[escape-velocity|escape velocity]] is over half the speed of light.

The collapse also spins it up enormously, like a skater pulling in their arms: [[angular-momentum|angular momentum]] is conserved. Many neutron stars spin many times a second and sweep beams of radio waves around like a lighthouse. Each time the beam crosses the Earth we see a pulse, so they are called **pulsars**. Jocelyn Bell Burnell discovered the first one in 1967.

:::example
title: Find the density of a white dwarf of 0.6 solar masses ($1.2 \times 10^{30}$ kg) with the Earth's radius, $6.37 \times 10^6$ m.

1. Volume: $\tfrac{4}{3}\pi R^3 = \tfrac{4}{3}\pi \times (6.37 \times 10^6)^3 \approx 1.08 \times 10^{21}$ m³.
   why: The volume of a sphere.
   uses: []

2. Density: $\dfrac{1.2 \times 10^{30}}{1.08 \times 10^{21}}$.
   why: Density is mass divided by volume.
   uses: [density]

3. $\approx 1.1 \times 10^9$ kg/m³.
   why: Divide.
   uses: []

4. **About $10^9$ kg/m³, a million times denser than water.** A teaspoon, 5 cm³, weighs about 5.5 tonnes.
   why: $1.1 \times 10^9 \times 5 \times 10^{-6} \approx 5500$ kg.
   uses: []
:::

:::practice
q: Find the escape velocity from that white dwarf (0.6 solar masses, radius $6.37 \times 10^6$ m).
answer: $\sqrt{\dfrac{2 \times 6.67 \times 10^{-11} \times 1.2 \times 10^{30}}{6.37 \times 10^6}} \approx$ **5000 km/s**, about 1.7% of light speed.
:::

:::problems
q: A core of 1.2 solar masses is left when a star dies. What does it become?
answer: **A white dwarf**, since it is under 1.4 solar masses.

q: A core of 2 solar masses collapses. What does it become?
answer: **A neutron star**, between 1.4 and about 3 solar masses.

q: What is the Chandrasekhar limit, and why does it matter?
answer: **1.4 solar masses: the most a white dwarf can hold up.** Heavier cores collapse further.

q: Find the density of a neutron star of 1.4 solar masses ($2.8 \times 10^{30}$ kg) and radius 10 km.
answer: $\dfrac{2.8 \times 10^{30}}{\tfrac{4}{3}\pi \times (10^4)^3} \approx$ **$6.7 \times 10^{17}$ kg/m³**.

q: How much would a teaspoon (5 cm³) of that neutron star weigh?
answer: $6.7 \times 10^{17} \times 5 \times 10^{-6} \approx$ **$3 \times 10^{12}$ kg**, about 3 billion tonnes.

q: Find the escape velocity from that neutron star.
answer: **About $1.9 \times 10^8$ m/s, 0.64c.**

q: A core the size of the Earth (radius 6400 km) spins once an hour, then collapses to a radius of 10 km. How fast does it spin now?
answer: Spin goes as $\frac{1}{R^2}$: $640^2 \approx 410{,}000$ times faster, so **one turn every 0.009 s**, about 110 times a second.

q: Why does a pulsar appear to pulse?
answer: **It sweeps a beam around as it spins**, and we see a flash each time the beam crosses us.

q: Why does a white dwarf slowly fade?
answer: **It has no fuel left**, so it just cools.

q: Why are white dwarf supernovae useful for measuring distance?
answer: **They all explode at about 1.4 solar masses**, so they reach nearly the same luminosity: standard candles.

q: The Crab supernova was seen in 1054. How long ago is that?
answer: **About 970 years.** (Its light set out about 6500 years before that, since it is 6500 light-years away.)
:::
