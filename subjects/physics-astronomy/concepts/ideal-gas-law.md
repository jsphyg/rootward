---
id: ideal-gas-law
title: The ideal gas law
prereqs: [temperature, pressure]
big: For a gas, pressure times volume is proportional to the amount of gas and its temperature in kelvin, so squeezing a gas raises its pressure and heating it raises its pressure or makes it expand.
recap: The ideal gas law is $PV = nRT$: P is the pressure in Pa, V the volume in m³, n the amount of gas in moles, T the temperature in kelvin, and $R = 8.31$ J/(mol·K). For a fixed amount of gas, $\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}$. At a fixed temperature, halving the volume doubles the pressure; at a fixed volume, doubling the kelvin temperature doubles the pressure. Always use kelvin.
check:
  q: A sealed, rigid can of gas is heated from 27°C to 327°C. What happens to the pressure inside?
  options: ["It doubles", "It goes up about 12 times", "It stays the same, because the can is sealed", "It halves"]
  answer: 0
  why: In kelvin the gas goes from 300 K to 600 K, so with the volume fixed, the pressure doubles. "About 12 times" divides the Celsius temperatures, 327 by 27, but the law needs kelvin. The can being sealed keeps the amount of gas fixed, not the pressure. Heating raises the pressure; it does not lower it.
---

## A gas is mostly empty space

A gas is billions of tiny molecules zooming about, far apart, bouncing off each other and off the walls of their container. Each time a molecule hits a wall, it gives it a tiny push. Billions of tiny pushes every second add up to a steady force on the wall. That is the gas's [[pressure|pressure]].

This picture explains everything on this page.

| Change | What the molecules do | Result |
|---|---|---|
| squeeze into a smaller volume | hit the walls more often | higher pressure |
| heat up | move faster, hit harder and more often | higher pressure (or expand) |
| add more gas | more molecules hitting the walls | higher pressure |

## The law

All three effects combine into one equation:

$$PV = nRT$$

| Symbol | Means | Unit |
|---|---|---|
| P | pressure | Pa |
| V | volume | m³ |
| n | amount of gas | moles |
| R | the gas constant, 8.31 | J/(mol·K) |
| T | temperature | K (kelvin) |

A {{mole|mole}} is a fixed number of particles, $6.02 \times 10^{23}$, used for counting atoms and molecules. One mole of any gas, at 0°C and normal air pressure, takes up about 22.4 litres.

The law is called "ideal" because it treats molecules as tiny points that do not attract each other. Real gases follow it closely unless they are very cold or very squeezed.

**T must be in kelvin.** At 0°C the gas still has plenty of pressure. The law only works with a temperature scale that starts at true zero, as the [[temperature|temperature]] page explains.

## Fixed amount of gas

When no gas gets in or out, nR stays the same, so

$$\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$$

Two special cases are worth knowing by name:

| Kept fixed | Rule | In words |
|---|---|---|
| temperature | $P_1V_1 = P_2V_2$ (Boyle's law) | squeeze to half the volume, double the pressure |
| pressure | $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$ (Charles's law) | double the kelvin temperature, double the volume |

:::example
title: Show that one mole of gas at 0°C and 101,000 Pa takes up about 22.4 litres.

1. Convert to kelvin: $T = 0 + 273 = 273$ K.
   why: The gas law needs kelvin.
   uses: [temperature]

2. Rearrange: $V = \dfrac{nRT}{P}$.
   why: We want the volume.
   uses: [rearranging-formulas]

3. $V = \dfrac{1 \times 8.31 \times 273}{101{,}000} = \dfrac{2269}{101{,}000} \approx 0.0225$ m³.
   why: Put in the numbers.
   uses: [pressure]

4. **About 0.0225 m³, which is 22.5 litres**, matching the 22.4 litres quoted (the small gap is rounding).
   why: 1 m³ is 1000 litres.
   uses: []
:::

:::practice
q: A gas at 100 kPa is squeezed from 2 litres to 0.5 litres at a steady temperature. Find the new pressure.
answer: $P_2 = \dfrac{100 \times 2}{0.5} =$ **400 kPa**.
:::

:::problems
q: A sealed can is heated from 27°C to 327°C. What happens to the pressure?
answer: **It doubles** (300 K to 600 K).

q: A gas at 100 kPa is squeezed from 2 L to 0.5 L at steady temperature. Find the new pressure.
answer: **400 kPa.**

q: A balloon holds 3 L of gas at 300 K. It is warmed to 400 K at steady pressure. Find the new volume.
answer: $V_2 = 3 \times \dfrac{400}{300} =$ **4 L**.

q: A tyre is at 200 kPa on a cold morning, 280 K. By afternoon it is 300 K. Find the new pressure (ignore the tyre stretching).
answer: $200 \times \dfrac{300}{280} \approx$ **214 kPa**.

q: A gas has P = 100,000 Pa, V = 0.0249 m³ and T = 300 K. How many moles are there?
answer: $n = \dfrac{PV}{RT} = \dfrac{2490}{2493} \approx$ **1 mole**.

q: How many molecules are in 2 moles of gas?
answer: $2 \times 6.02 \times 10^{23} \approx$ **$1.2 \times 10^{24}$**.

q: A classroom holds 240 m³ of air at 101,000 Pa and 20°C. How many moles of air is that?
answer: $n = \dfrac{101{,}000 \times 240}{8.31 \times 293} \approx$ **10,000 moles**.

q: A gas at 100 kPa, 2 L and 300 K is changed to 200 kPa and 600 K. Find the new volume.
answer: $V_2 = \dfrac{P_1V_1T_2}{T_1P_2} = \dfrac{100 \times 2 \times 600}{300 \times 200} =$ **2 L**: the two changes cancel.

q: A diver releases an air bubble 10 m deep, where the pressure is 2 atmospheres. What happens to its volume by the surface (1 atmosphere), at steady temperature?
answer: **It doubles.**

q: Why must aerosol cans never be thrown on a fire?
answer: **Heating raises the gas pressure** inside the sealed can, which can burst it.

q: Explain, in terms of molecules, why squeezing a gas raises its pressure.
answer: **The molecules hit the walls more often**, because there is less space to cross.

q: Why does the gas law fail if you use Celsius?
answer: **Celsius does not start at true zero.** At 0°C the formula would give zero pressure, which is wrong; kelvin starts where the molecules' energy really is at its lowest.
:::
