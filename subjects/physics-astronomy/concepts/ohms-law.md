---
id: ohms-law
title: Resistance and Ohm's law
prereqs: [current, voltage]
big: Resistance is how hard a component makes it for current to flow; the current equals the voltage divided by the resistance, so a bigger push gives more current and more resistance gives less.
recap: Resistance is $R = \dfrac{V}{I}$, in ohms (Ω). Ohm's law says that for many materials at a steady temperature, R stays the same, so $V = IR$: double the voltage, double the current. A wire's resistance grows with its length and falls with its thickness. Components like lamps do not obey Ohm's law, because their resistance rises as they heat up.
check:
  q: A 12 V battery is connected across a 4 Ω resistor. What current flows?
  options: ["3 A", "48 A", "0.33 A", "16 A"]
  answer: 0
  why: $I = \dfrac{V}{R} = \dfrac{12}{4} = 3$ A. 48 A multiplies instead of dividing. 0.33 A divides the wrong way round. 16 adds them.
---

## Pushing through

The same battery makes a big current through a thick copper wire, and a tiny one through a long thin wire of nichrome (the wire inside toasters). What differs is how hard each one makes it for the charge to get through. That is {{resistance|resistance}}.

| Voltage across a resistor (V) | Current through it (A) | V ÷ I |
|---|---|---|
| 2 | 0.5 | 4 |
| 4 | 1.0 | 4 |
| 6 | 1.5 | 4 |
| 8 | 2.0 | 4 |

*Notice: double the voltage, double the current. The ratio stays at 4.*

## Resistance and Ohm's law

Resistance is the [[voltage|voltage]] needed per amp of [[current|current]]:

$$R = \frac{V}{I}$$

The unit is the {{ohm|ohm}}, Ω (the Greek letter omega). The resistor in the table is 4 Ω.

Georg Ohm found in 1827 that for metal wires at a steady temperature, R stays the same whatever the voltage. This is **Ohm's law**:

$$V = IR$$

A graph of current against voltage is a straight line through the origin, like the spring graph on the Hooke's law page. Components that obey it are called **ohmic**.

The three forms are the same equation, rearranged:

| Want | Use |
|---|---|
| voltage | $V = IR$ |
| current | $I = \dfrac{V}{R}$ |
| resistance | $R = \dfrac{V}{I}$ |

## Why resistance happens

As electrons drift through a metal, they keep bumping into the vibrating atoms. Each bump slows them and passes energy to the atoms, which jiggle more: the wire warms up. That is why wires heat up, and how toasters and heaters work.

| Wire | Resistance |
|---|---|
| twice as long | 2 times (twice as many bumps) |
| twice the cross-section area | half (twice as many paths) |
| copper instead of nichrome | far less (copper is a better conductor) |

The material is described by its **resistivity** ρ: $R = \dfrac{\rho L}{A}$, for length L and cross-section area A.^[n_resistivity]

## Not everything is ohmic

A filament lamp's resistance rises as it gets hot, because the atoms jiggle more and the electrons bump into them more. Its current-voltage graph curves over. A diode lets current through one way only. These are **non-ohmic**. $R = \dfrac{V}{I}$ still gives the resistance at any moment; it just does not stay constant.

:::example
title: A heater draws 10 A from a 230 V supply. Find its resistance. What current would flow if the voltage fell to 115 V, assuming its resistance stayed the same?

1. $R = \dfrac{V}{I} = \dfrac{230}{10} = 23$ Ω.
   why: Resistance is voltage per amp.
   uses: [voltage, current]

2. At 115 V: $I = \dfrac{115}{23}$.
   why: Ohm's law with the same R.
   uses: []

3. $I = 5$ A.
   why: Half the voltage gives half the current.
   uses: []

4. **23 Ω; 5 A at 115 V.** (A real heater element would cool a little and its resistance drop slightly, so the current would be a little more than 5 A.)
   why: Ohm's law assumes a steady temperature.
   uses: []
:::

:::practice
q: A current of 0.2 A flows through a 50 Ω resistor. What is the voltage across it?
answer: $V = 0.2 \times 50 =$ **10 V**.
:::

:::problems
q: 12 V is across a 4 Ω resistor. Find the current.
answer: **3 A.**

q: A 6 V battery drives 0.5 A through a lamp. Find the lamp's resistance.
answer: $\dfrac{6}{0.5} =$ **12 Ω**.

q: A 1000 Ω resistor carries 0.005 A. Find the voltage across it.
answer: **5 V.**

q: A 230 V toaster has a resistance of 46 Ω. Find the current.
answer: $\dfrac{230}{46} =$ **5 A**.

q: The voltage across an ohmic resistor triples. What happens to the current?
answer: **It triples.**

q: A wire has 2 Ω resistance. A wire of the same material twice as long and the same thickness. Find its resistance.
answer: **4 Ω.**

q: A wire has 6 Ω resistance. Another of the same material and length has twice the cross-section area. Find its resistance.
answer: **3 Ω.**

q: A lamp takes 0.2 A at 2 V and 0.3 A at 6 V. Find its resistance at each. Is it ohmic?
answer: **10 Ω, then 20 Ω. Not ohmic**: its resistance rises as it heats up.

q: Why do wires get warm when current flows?
answer: **Electrons bump into the metal's atoms**, passing them energy, so the atoms jiggle more.

q: What does a straight line through the origin on a current-voltage graph tell you?
answer: **The component is ohmic**: its resistance stays constant.

q: A human body might have about 1000 Ω of resistance with wet skin. What current would 230 V drive through it?
answer: $\dfrac{230}{1000} =$ **0.23 A**, which can easily kill. That is why mains electricity is dangerous.

q: A copper wire 10 m long with cross-section area $1 \times 10^{-6}$ m² has resistivity $1.7 \times 10^{-8}$ Ω·m. Find its resistance.
answer: $R = \dfrac{1.7 \times 10^{-8} \times 10}{10^{-6}} =$ **0.17 Ω**.
:::
