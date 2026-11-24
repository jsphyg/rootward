---
id: temperature
title: Temperature and thermal energy
prereqs: [kinetic-energy]
big: Everything is made of jiggling particles; temperature measures how much kinetic energy each particle has on average, and thermal energy is the total energy of all that jiggling.
recap: Temperature measures the average kinetic energy of the particles in a material. The Kelvin scale starts at absolute zero, the coldest possible, where the jiggling is as small as it can be: $T_{\text{K}} = T_{\text{°C}} + 273$. Thermal energy (internal energy) is the total energy of all the particles, so a big cool bath can hold more than a small hot cup. Heat is energy flowing from hotter to colder, until both reach the same temperature.
check:
  q: What is 27°C on the Kelvin scale?
  options: ["300 K", "246 K", "27 K", "−246 K"]
  answer: 0
  why: Add 273: $27 + 273 = 300$ K. 246 subtracts instead of adding. 27 K forgets to convert. Kelvin temperatures are never negative, since 0 K is the coldest possible.
---

## Jiggling particles

Everything is made of atoms and molecules, and they never sit still. In a gas they zoom about and bump into each other. In a liquid they slide past one another. In a solid they jiggle in place. Heat something up, and its particles move faster.

| State | What the particles do | Hotter means |
|---|---|---|
| solid | vibrate in fixed places | bigger, faster vibrations |
| liquid | move and slide past each other | faster sliding |
| gas | fly about freely | faster flight |

**Temperature** measures how fast, on average: it is a measure of the average [[kinetic-energy|kinetic energy]] of the particles.^[n_temp_ke] Air molecules at room temperature move at about 500 m/s, as fast as a bullet, in all directions.

## Temperature scales

| Scale | Water freezes | Water boils | Zero is |
|---|---|---|---|
| Celsius (°C) | 0 | 100 | water's freezing point |
| Kelvin (K) | 273 | 373 | absolute zero |
| Fahrenheit (°F) | 32 | 212 | an old salt-ice mixture |

Cool something down and its particles slow. There is a limit: {{absolute-zero|absolute zero}}, −273°C, where the particles have the least energy they possibly can. Nothing can be colder.

The {{kelvin|Kelvin}} scale starts there. Its degrees are the same size as Celsius degrees, so

$$T_{\text{K}} = T_{\text{°C}} + 273$$

A change of 10°C is a change of 10 K. Physics formulas involving temperature itself, like the gas law, need kelvin.

## Temperature is not the same as thermal energy

{{thermal-energy|Thermal energy}}, also called internal energy, is the **total** energy of all the particles. Temperature is the **average** per particle.

A bathtub of warm water at 40°C holds far more thermal energy than a cup of tea at 80°C, because it has so many more particles. But if you touch them together, energy flows from the tea to the bath, because the tea is hotter.

## Heat flows from hot to cold

**Heat** is energy moving from a hotter object to a colder one. Fast particles bump slower ones and speed them up. This continues until both are at the same temperature, called **thermal equilibrium**. That is how a thermometer works: it reaches the same temperature as whatever it touches.

:::example
title: A room is at 20°C. Convert it to kelvin. If the room warms to 25°C, by how many kelvin has it warmed?

1. Add 273: $20 + 273 = 293$ K.
   why: Kelvin starts at absolute zero, 273 below the Celsius zero.
   uses: []

2. New temperature: $25 + 273 = 298$ K.
   why: Same conversion.
   uses: []

3. Change: $298 - 293 = 5$ K.
   why: Subtract.
   uses: []

4. **293 K; it warmed by 5 K**, the same as 5°C. The degrees are the same size; only the starting point differs.
   why: For a change, kelvin and Celsius give the same number.
   uses: [kinetic-energy]
:::

:::practice
q: Convert 100°C to kelvin, and 0 K to Celsius.
answer: **373 K**, and **−273°C**.
:::

:::problems
q: Convert 27°C to kelvin.
answer: **300 K.**

q: Convert 77 K (liquid nitrogen) to Celsius.
answer: $77 - 273 =$ **−196°C**.

q: Convert −40°C to kelvin.
answer: **233 K.**

q: The temperature rises from 15°C to 35°C. What is the rise in kelvin?
answer: **20 K.**

q: The Sun's surface is about 5800 K. What is that in Celsius?
answer: **About 5527°C**, so about 5500°C.

q: Can anything be at −300°C?
answer: **No.** That is below absolute zero, −273°C.

q: A bath at 40°C and a cup of tea at 80°C. Which has the higher temperature? Which has more thermal energy?
answer: **The tea is hotter. The bath has more thermal energy**, because it has far more particles.

q: A cold spoon is put in hot soup. Which way does heat flow, and when does it stop?
answer: **From the soup to the spoon**, until they reach the same temperature.

q: What happens to the particles of a gas when it is heated?
answer: **They move faster**, on average.

q: Why must a thermometer be left in a drink for a while before you read it?
answer: **It needs time to reach the same temperature** as the drink.

q: Doubling the Kelvin temperature of a gas doubles what about its particles?
answer: **Their average kinetic energy.**

q: Is 20°C twice as hot as 10°C?
answer: **No.** In kelvin it is 293 K against 283 K, only about 3.5% more. Only the Kelvin scale starts at a true zero.
:::
