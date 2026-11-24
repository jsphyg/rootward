---
id: electric-power
title: Electric power
prereqs: [ohms-law, power]
big: The power an electrical device uses is its voltage times its current; combined with Ohm's law, this tells you how much energy appliances use and what they cost to run.
recap: Electric power is $P = IV$, in watts. Using Ohm's law, it can also be written $P = I^2R$ or $P = \dfrac{V^2}{R}$. Energy used is power × time; electricity companies charge per kilowatt-hour (kWh), 1000 W for one hour. Power lines carry current at very high voltages because, for the same power, the current is smaller, and the heat lost in the wires ($I^2R$) is far smaller.
check:
  q: A heater runs on 230 V and draws 5 A. What is its power?
  options: ["1150 W", "46 W", "235 W", "0.022 W"]
  answer: 0
  why: $P = IV = 5 \times 230 = 1150$ W. 46 is $\frac{V}{I}$, which is the resistance in ohms. 235 adds them. 0.022 divides current by voltage.
---

## Volts times amps

The [[voltage|voltage]] is the energy each coulomb carries. The [[current|current]] is how many coulombs pass each second. Multiply them, and you get the energy delivered each second, the [[power|power]]:

$$P = IV$$

joules per coulomb × coulombs per second = joules per second = watts.

| Appliance (230 V) | Current | Power |
|---|---|---|
| LED lamp | 0.04 A | about 10 W |
| laptop charger | 0.3 A | about 65 W |
| microwave | 4 A | about 900 W |
| kettle | 10 A | about 2300 W |

*Notice: things that heat are the power-hungry ones.*

## Two more forms

Put Ohm's law, $V = IR$, into $P = IV$:

$$P = I^2R \qquad P = \frac{V^2}{R}$$

All three give the same answer. Pick the one that uses what you know. $I^2R$ is useful for the heat made in a wire, because the current through it is what you know.

## Paying for it

Energy = power × time. Companies measure it in **kilowatt-hours**: a 1 kW device running for 1 hour uses 1 kWh, which is 3.6 million joules.

$$\text{energy (kWh)} = \text{power (kW)} \times \text{time (h)}$$

$$\text{cost} = \text{energy (kWh)} \times \text{price per kWh}$$

## Why power lines use high voltage

A power station must send a set amount of power through long cables, which have some resistance. Since $P = IV$, it can send that power with a high voltage and a small current, or a low voltage and a large current.

The heat wasted in the cables is $I^2R$. Ten times less current means **a hundred times** less heat lost. So electricity is sent at hundreds of thousands of volts, then stepped down near homes (the induction page shows how).

:::example
title: A 2 kW heater runs for 3 hours a day for 30 days. Electricity costs 30 cents per kWh. How much does it cost? What current does it draw on 230 V?

1. Energy per day: $2 \text{ kW} \times 3 \text{ h} = 6$ kWh.
   why: Power in kW times time in hours gives kWh.
   uses: [power]

2. For 30 days: $6 \times 30 = 180$ kWh.
   why: Multiply by the number of days.
   uses: []

3. Cost: $180 \times 30 = 5400$ cents, which is 54 dollars.
   why: Energy times price.
   uses: []

4. Current: $I = \dfrac{P}{V} = \dfrac{2000}{230} \approx 8.7$ A. **54 dollars for the month; about 8.7 A.**
   why: Rearranging $P = IV$.
   uses: [ohms-law]
:::

:::practice
q: A 12 V car headlamp draws 5 A. Find its power.
answer: $5 \times 12 =$ **60 W**.
:::

:::problems
q: A heater on 230 V draws 5 A. Find the power.
answer: **1150 W.**

q: A 2300 W kettle runs on 230 V. Find the current.
answer: $\dfrac{2300}{230} =$ **10 A**.

q: A 4 Ω resistor carries 3 A. Find the power.
answer: $3^2 \times 4 =$ **36 W**.

q: A 12 V supply is across a 6 Ω resistor. Find the power.
answer: $\dfrac{144}{6} =$ **24 W**.

q: Find the resistance of a 60 W lamp designed for 230 V.
answer: $R = \dfrac{V^2}{P} = \dfrac{52{,}900}{60} \approx$ **880 Ω**.

q: A 100 W TV is left on for 5 hours. How many kWh does it use?
answer: $0.1 \times 5 =$ **0.5 kWh**.

q: A 2 kW heater runs 3 hours a day for 30 days at 30 cents per kWh. Find the cost.
answer: **54 dollars.**

q: A 10 W LED replaces a 60 W bulb, used 4 hours a day for a year (365 days). How many kWh are saved?
answer: Saving 50 W: $0.05 \times 4 \times 365 =$ **73 kWh**.

q: The current through a resistor doubles. What happens to the power?
answer: **It goes up 4 times** ($I^2R$).

q: A power line carries 1000 A and loses 10,000 W as heat. The current is cut to 100 A by raising the voltage. Find the new loss.
answer: Ten times less current, $10^2 = 100$ times less loss: **100 W**.

q: A 1 MW power station sends its output at 400,000 V. What current flows in the line?
answer: $\dfrac{1{,}000{,}000}{400{,}000} =$ **2.5 A**.

q: Why do fuses melt when too much current flows?
answer: **The heat made in the fuse wire is $I^2R$**, so a large current heats it enough to melt and break the circuit.
:::
