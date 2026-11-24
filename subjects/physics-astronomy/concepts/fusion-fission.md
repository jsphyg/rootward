---
id: fusion-fission
title: Fusion and fission
prereqs: [nuclear-physics]
big: Splitting very heavy nuclei (fission) or joining very light ones (fusion) both make nuclei that are more tightly bound, so both release energy; fission runs nuclear power stations, and fusion powers the Sun and stars.
recap: Binding energy per nucleon peaks at iron. Splitting a heavy nucleus like uranium-235 into two middle-sized ones (fission) releases about 200 MeV; the neutrons it gives off can split more nuclei in a chain reaction. Joining light nuclei like hydrogen into helium (fusion) releases even more energy per kilogram, but needs temperatures of millions of degrees to push the positive nuclei together. In both, the products weigh less than what went in, and the missing mass becomes energy by $E = mc^2$.
check:
  q: Why do both fission of uranium and fusion of hydrogen release energy?
  options: ["Both make nuclei that are more tightly bound per nucleon, moving toward iron", "Both destroy protons and turn them into energy", "Both work by chemical burning at very high temperature", "Only fission releases energy; fusion absorbs it"]
  answer: 0
  why: Binding energy per nucleon rises toward iron from both sides. Splitting heavy nuclei or joining light ones both move toward iron, so the products are more tightly bound and lighter, and the difference comes out as energy. No protons are destroyed: the number of nucleons stays the same. These are nuclear, not chemical, reactions. Fusing light nuclei releases energy; only fusing nuclei heavier than iron would absorb it.
---

## Two ways down the hill

On the [[nuclear-physics|nucleus]] page, the binding energy per nucleon rises from hydrogen up to iron, then slowly falls for heavier nuclei. More binding energy means more tightly held and less mass.

| Starting point | Move toward iron by | Name |
|---|---|---|
| very heavy (uranium) | splitting | {{fission|fission}} |
| very light (hydrogen) | joining | {{fusion|fusion}} |

*Notice: either way, the products are more tightly bound and weigh less. The lost mass comes out as energy.*

## Fission

A slow neutron hits a uranium-235 nucleus. It wobbles, stretches, and splits into two middle-sized nuclei, plus two or three fast neutrons and about **200 MeV** of energy. A typical split:

$$^{235}\text{U} + \text{n} \rightarrow\ ^{141}\text{Ba} +\ ^{92}\text{Kr} + 3\text{n} + \text{energy}$$

**Chain reaction.** The new neutrons can split more uranium nuclei, which release more neutrons, and so on. In a **nuclear power station**, control rods absorb spare neutrons, so on average exactly one neutron from each fission causes another: a steady chain. The heat boils water to drive turbines. In a bomb, the chain is allowed to run away.

Fission's drawbacks: the products are radioactive waste, some lasting thousands of years, and accidents can release radiation.

## Fusion

Join two light nuclei and they release energy. The Sun turns hydrogen into helium; overall, four protons become one helium-4 nucleus, releasing about **26.7 MeV**.

The difficulty: nuclei are positive and repel each other strongly. They only get close enough for the strong force to grab them if they are moving extremely fast, which means very hot, about 15 million K in the Sun's core. That is why it is also called **thermonuclear** fusion. The Sun's huge gravity squeezes and heats its core enough.

On Earth, scientists are trying to build fusion power stations, usually fusing deuterium and tritium (heavy forms of hydrogen) at over 100 million K, held in place by magnetic fields. It would give plentiful energy with little long-lived waste, but keeping such hot fuel stable is very hard.

## Energy per kilogram

| Fuel | Energy per kg, about |
|---|---|
| coal (chemical) | $3 \times 10^7$ J |
| uranium-235 (fission) | $8 \times 10^{13}$ J |
| hydrogen to helium (fusion) | $6 \times 10^{14}$ J |

*Notice: fission fuel is millions of times more concentrated than coal, and fusion about eight times more again.*

:::example
title: Each fission of uranium-235 releases about 200 MeV. How much energy comes from 1 kg of uranium-235, and how does it compare with coal ($3 \times 10^7$ J/kg)?

1. Energy per fission: $200 \times 1.6 \times 10^{-13} = 3.2 \times 10^{-11}$ J.
   why: 1 MeV is $1.6 \times 10^{-13}$ J.
   uses: [nuclear-physics]

2. Mass of one nucleus: $235 \times 1.66 \times 10^{-27} \approx 3.9 \times 10^{-25}$ kg, so 1 kg holds $\dfrac{1}{3.9 \times 10^{-25}} \approx 2.56 \times 10^{24}$ nuclei.
   why: 235 atomic mass units each.
   uses: []

3. Total: $2.56 \times 10^{24} \times 3.2 \times 10^{-11} \approx 8.2 \times 10^{13}$ J.
   why: Energy per fission times the number of fissions.
   uses: []

4. **About $8 \times 10^{13}$ J, nearly 3 million times as much as burning 1 kg of coal.**
   why: $\dfrac{8.2 \times 10^{13}}{3 \times 10^7} \approx 2.7 \times 10^6$.
   uses: []
:::

:::practice
q: In a fission, uranium-235 plus a neutron gives barium-141, krypton-92 and some neutrons. How many neutrons? (Count the nucleons.)
answer: Before: $235 + 1 = 236$. After: $141 + 92 = 233$, so **3 neutrons**.
:::

:::problems
q: Which nuclei release energy by fission, and which by fusion?
answer: **Very heavy ones by fission; very light ones by fusion.**

q: Why can't iron release energy by either fusion or fission?
answer: **It is already the most tightly bound nucleus**, at the peak of the curve.

q: What keeps a chain reaction going?
answer: **The neutrons released by each fission**, which go on to split more nuclei.

q: What do control rods do in a reactor?
answer: **Absorb spare neutrons**, so the chain reaction stays steady instead of growing.

q: Fusion of four protons into helium-4 releases 26.7 MeV. Convert to joules.
answer: $26.7 \times 1.6 \times 10^{-13} \approx$ **$4.3 \times 10^{-12}$ J**.

q: Using that, find the energy from fusing 1 kg of hydrogen (each proton about $1.67 \times 10^{-27}$ kg).
answer: Per four protons, $6.7 \times 10^{-27}$ kg. $\dfrac{4.3 \times 10^{-12}}{6.7 \times 10^{-27}} \approx$ **$6.4 \times 10^{14}$ J/kg**.

q: Deuterium-tritium fusion gives 17.6 MeV per reaction from about 5 u of fuel. Find the energy per kg.
answer: $\dfrac{17.6 \times 1.6 \times 10^{-13}}{5 \times 1.66 \times 10^{-27}} \approx$ **$3.4 \times 10^{14}$ J/kg**.

q: Why does fusion need such enormous temperatures?
answer: **The nuclei are positive and repel**, so they must be moving extremely fast to get close enough for the strong force to take over.

q: How does the Sun reach fusion temperatures?
answer: **Its huge gravity squeezes its core**, heating it to about 15 million K.

q: Give one advantage and one difficulty of fusion power.
answer: **Advantage: plentiful fuel and little long-lived waste. Difficulty: keeping fuel at over 100 million K stable.**

q: What is the main drawback of fission power?
answer: **Long-lived radioactive waste** (and the risk of releasing radiation in accidents).

q: In fission, is any matter destroyed?
answer: **No nucleons are destroyed.** The products just weigh slightly less, because they are more tightly bound; that mass difference becomes energy.
:::
