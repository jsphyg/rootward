---
id: specific-heat
title: Heating things up (specific heat)
prereqs: [temperature]
big: The energy needed to warm something depends on its mass, how much warmer it gets, and what it is made of; water needs an unusually large amount.
recap: The energy to change a temperature is $Q = mc\Delta T$, where m is the mass, ΔT the temperature change, and c the specific heat capacity: the energy to warm 1 kg by 1°C. Water's c is about 4200 J/kg·°C, much more than most materials. Melting or boiling takes energy without changing the temperature: $Q = mL$, with L the latent heat.
check:
  q: How much energy does it take to warm 2 kg of water by 10°C? (Water's c is 4200 J/kg·°C.)
  options: ["84,000 J", "8400 J", "42,000 J", "840 J"]
  answer: 0
  why: $Q = mc\Delta T = 2 \times 4200 \times 10 = 84{,}000$ J. 8400 J leaves out the 10°C. 42,000 J leaves out the second kilogram. 840 J drops a zero from 8400.
---

## The beach puzzle

On a sunny day at the beach, the sand gets too hot to walk on, but the sea stays cool. Both got the same sunshine. Water simply needs far more energy to warm up than sand does.

| Material | Specific heat capacity c (J/kg·°C) |
|---|---|
| water | 4200 |
| ice | 2100 |
| aluminium | 900 |
| sand, rock | about 800 |
| iron | 450 |
| copper | 390 |

*Notice: water takes about five times as much energy as sand to warm by the same amount.*

## The formula

The energy Q needed to raise the [[temperature|temperature]] of a mass m by ΔT is

$$Q = mc\Delta T$$

c is the {{specific-heat|specific heat capacity}}: the energy needed to warm 1 kg of the material by 1°C (or 1 K, the same size). It makes sense that Q grows with both m and ΔT: twice as much water takes twice the energy, and so does warming it twice as far.

The same formula works for cooling: then ΔT is negative, and the object gives out energy.

**Why water matters.** Its large c means oceans warm and cool slowly. Coastal places have milder weather than inland ones. A hot-water bottle stays warm for hours. And your body, mostly water, keeps a steady temperature.

## Melting and boiling

Heat ice at 0°C and it melts, but the temperature does not rise until all of it has melted. The energy goes into breaking the bonds that hold the solid together, not into speeding the particles up. The same happens at boiling.

The energy to change state is

$$Q = mL$$

where L is the {{latent-heat|latent heat}} ("hidden heat"):

| Change | L for water |
|---|---|
| melting ice | 334,000 J/kg |
| boiling water | 2,260,000 J/kg |

*Notice: boiling 1 kg of water away takes over five times the energy of warming it from 0°C to 100°C (420,000 J).*

Sweating cools you because evaporating water takes energy from your skin.

## Mixing

Pour hot water into cold. With no energy lost to the surroundings, the energy given out by the hot water equals the energy taken in by the cold. That lets you find the final temperature.

:::example
title: 0.2 kg of water at 80°C is mixed with 0.3 kg of water at 20°C. What is the final temperature?

1. Call the final temperature T. Energy given out by the hot water: $0.2 \times 4200 \times (80 - T)$.
   why: It cools from 80 to T.
   uses: [temperature]

2. Energy taken in by the cold water: $0.3 \times 4200 \times (T - 20)$.
   why: It warms from 20 to T.
   uses: []

3. Set them equal. The 4200 cancels: $0.2(80 - T) = 0.3(T - 20)$, so $16 - 0.2T = 0.3T - 6$, and $22 = 0.5T$.
   why: Energy is conserved, so given out equals taken in.
   uses: [rearranging-formulas]

4. **T = 44°C.** It is nearer 20 than 80, because there was more cold water.
   why: A weighted average makes sense as a check.
   uses: []
:::

:::practice
q: How much energy warms 0.5 kg of aluminium from 20°C to 70°C?
answer: $0.5 \times 900 \times 50 =$ **22,500 J**.
:::

:::problems
q: How much energy warms 2 kg of water by 10°C?
answer: **84,000 J.**

q: A kettle warms 1.5 kg of water from 20°C to 100°C. How much energy does that take?
answer: $1.5 \times 4200 \times 80 =$ **504,000 J**.

q: That kettle is rated 2000 W. Ignoring losses, how long does it take?
answer: $\dfrac{504{,}000}{2000} =$ **252 s**, about 4 minutes.

q: 10,000 J is given to 2 kg of iron. How much does its temperature rise?
answer: $\Delta T = \dfrac{10{,}000}{2 \times 450} \approx$ **11.1°C**.

q: 4500 J warms 0.5 kg of a metal by 10°C. Find c.
answer: $c = \dfrac{4500}{0.5 \times 10} =$ **900 J/kg·°C** (aluminium).

q: Equal masses of water and copper get the same energy. Which warms more, and by how many times?
answer: **Copper**, by about $\dfrac{4200}{390} \approx$ **11 times** as much.

q: How much energy melts 0.5 kg of ice at 0°C?
answer: $0.5 \times 334{,}000 =$ **167,000 J**.

q: How much energy boils away 0.2 kg of water at 100°C?
answer: $0.2 \times 2{,}260{,}000 =$ **452,000 J**.

q: Find the energy to turn 1 kg of ice at 0°C into water at 20°C.
answer: Melt: 334,000 J. Warm: $1 \times 4200 \times 20 = 84{,}000$ J. Total **418,000 J**.

q: 0.2 kg of water at 80°C is mixed with 0.3 kg at 20°C. Find the final temperature.
answer: **44°C.**

q: 1 kg of water at 90°C is mixed with 1 kg at 10°C. Find the final temperature.
answer: Equal masses: **50°C**, halfway.

q: Why do coastal towns have milder winters and cooler summers than inland towns?
answer: **The sea's water has a large specific heat**, so it warms and cools slowly, and it evens out the nearby air temperature.
:::
