---
id: voltage
title: Electric potential (voltage)
prereqs: [electric-field, potential-energy]
big: Voltage is energy per charge; a 12 V battery gives every coulomb that passes through it 12 joules, the way a pump lifts water to a height.
recap: The potential difference, or voltage, between two points is the energy change per coulomb of charge moved between them: $V = \dfrac{W}{q}$, in volts (1 V = 1 J/C). So moving a charge q through a voltage V transfers energy $W = qV$. In a uniform field, $V = Ed$. An electron moved through 1 V gains 1 electron-volt (eV) of energy, $1.6 \times 10^{-19}$ J.
check:
  q: A battery moves 2 C of charge through a 12 V lamp. How much energy does the lamp get?
  options: ["24 J", "6 J", "0.17 J", "14 J"]
  answer: 0
  why: $W = qV = 2 \times 12 = 24$ J. 6 J divides voltage by charge. 0.17 divides charge by voltage. 14 adds them.
---

## Lifting charge uphill

Think of water and a pump. The pump lifts water to a high tank. The water then flows down a pipe, turning a water wheel on the way. The higher the tank, the more energy each litre gives up as it falls.

A battery is a pump for charge. It "lifts" each coulomb to a higher electric energy. The charge then flows around a circuit, giving up that energy in lamps and motors.

| Water | Electricity |
|---|---|
| height of the tank | voltage |
| amount of water | amount of charge |
| energy given up = weight × height | energy given up = charge × voltage |

## Potential difference

Just as gravity's [[potential-energy|potential energy]] depends on height, a charge in an [[electric-field|electric field]] has electric potential energy that depends on where it is. The **potential difference** between two points, also called {{voltage|voltage}}, is the energy change per coulomb of charge moving between them:

$$V = \frac{W}{q}$$

The unit is the {{volt|volt}}, V: one joule per coulomb. So a 1.5 V cell gives each coulomb 1.5 J; a 230 V mains supply gives each coulomb 230 J. Turned around:

$$W = qV$$

Positive charges naturally move from high potential to low, like water flowing downhill. Electrons, being negative, go the other way.

## Voltage in a uniform field

Between two parallel plates, the field E is uniform. Moving a charge q a distance d against it takes work $W = Fd = qEd$. Per coulomb, that is

$$V = Ed$$

So the field can also be written in volts per metre: $E = \dfrac{V}{d}$, and 1 V/m is the same as 1 N/C.

## The electron-volt

Atomic energies are tiny in joules. Physicists use the **electron-volt**, eV: the energy an electron gains moving through 1 V.

$$1 \text{ eV} = 1.6 \times 10^{-19} \text{ C} \times 1 \text{ V} = 1.6 \times 10^{-19} \text{ J}$$

:::example
title: An electron starts at rest and is accelerated through 1000 V. How much energy does it gain, and how fast is it going? (Electron mass $9.11 \times 10^{-31}$ kg.)

1. Energy gained: $W = qV = 1.6 \times 10^{-19} \times 1000 = 1.6 \times 10^{-16}$ J, which is 1000 eV.
   why: Energy is charge times voltage.
   uses: [electric-field]

2. All of it becomes kinetic energy: $\tfrac{1}{2}mv^2 = 1.6 \times 10^{-16}$.
   why: Conservation of energy, with electric PE turning into KE.
   uses: [potential-energy]

3. $v^2 = \dfrac{2 \times 1.6 \times 10^{-16}}{9.11 \times 10^{-31}} \approx 3.5 \times 10^{14}$.
   why: Rearrange for $v^2$.
   uses: []

4. **v ≈ $1.9 \times 10^7$ m/s**, about 6% of the speed of light, from a modest 1000 V. Old TV tubes worked this way.
   why: Square root of $3.5 \times 10^{14}$.
   uses: []
:::

:::practice
q: A 9 V battery pushes 3 C of charge round a circuit. How much energy does it give out?
answer: $3 \times 9 =$ **27 J**.
:::

:::problems
q: 2 C passes through a 12 V lamp. How much energy does the lamp get?
answer: **24 J.**

q: 60 J of energy is given to 5 C. What is the voltage?
answer: $\dfrac{60}{5} =$ **12 V**.

q: How much charge must pass through a 230 V kettle to give it 460,000 J?
answer: $q = \dfrac{460{,}000}{230} =$ **2000 C**.

q: How much energy does a 1.5 V cell give each coulomb?
answer: **1.5 J.**

q: Two plates 0.02 m apart have 100 V between them. Find the field.
answer: $E = \dfrac{100}{0.02} =$ **5000 V/m** (5000 N/C).

q: The field between two plates is 2000 V/m and they are 0.05 m apart. Find the voltage.
answer: **100 V.**

q: An electron moves through 1000 V. Find the energy gained in joules and in eV.
answer: **$1.6 \times 10^{-16}$ J = 1000 eV.**

q: A proton is accelerated through 500 V. How much energy does it gain in eV?
answer: **500 eV.** It has the same size of charge as an electron.

q: Convert 13.6 eV, the energy to free hydrogen's electron, into joules.
answer: $13.6 \times 1.6 \times 10^{-19} \approx$ **$2.2 \times 10^{-18}$ J**.

q: In a thundercloud, $10^9$ V drives 20 C of charge to the ground. How much energy is that?
answer: $20 \times 10^9 =$ **$2 \times 10^{10}$ J**, as much as about 5 tonnes of TNT.

q: Which way do electrons naturally move: toward higher or lower potential?
answer: **Toward higher potential.** Being negative, they go the opposite way to positive charges.

q: Explain what "a 12 V car battery" means, in terms of energy.
answer: **It gives 12 J of energy to every coulomb of charge** it pushes round the circuit.
:::
