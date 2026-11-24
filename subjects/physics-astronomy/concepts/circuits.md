---
id: circuits
title: Series and parallel circuits
prereqs: [ohms-law, systems-of-equations]
big: Components joined in a single line (series) share the voltage and carry the same current; components on separate branches (parallel) share the current and get the same voltage.
recap: In series, one current flows through everything, the voltages add up to the supply, and resistances add: $R = R_1 + R_2$. In parallel, each branch gets the full voltage, the branch currents add up to the total, and $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$, so the total is less than the smallest branch. Two rules always hold: current into a junction equals current out, and the voltages around any loop add to zero.
check:
  q: A 6 Ω and a 3 Ω resistor are connected in parallel. What is their combined resistance?
  options: ["2 Ω", "9 Ω", "4.5 Ω", "0.5 Ω"]
  answer: 0
  why: $\dfrac{1}{R} = \dfrac{1}{6} + \dfrac{1}{3} = \dfrac{1}{6} + \dfrac{2}{6} = \dfrac{3}{6}$, so $R = 2$ Ω. 9 Ω adds them, which is the series rule. 4.5 Ω averages them. 0.5 is $\frac{1}{R}$, before turning it upside down.
---

## Two ways to wire two lamps

Connect two lamps to a battery in a single line, one after the other: that is **series**. Or give each lamp its own branch from the battery: that is **parallel**.

| | Series | Parallel |
|---|---|---|
| paths for the current | one | one per branch |
| take one lamp out | the other goes off too | the other stays on |
| brightness of each lamp | dimmer | as bright as alone |
| used in | old fairy lights, switches | house wiring |

*Notice: houses are wired in parallel, so each appliance gets the full voltage and can be switched on or off by itself.*

## Series

One path, so the **same current** flows through every component. The battery's voltage is shared out between them: the voltages add up to the supply.

Each resistor adds more opposition, so the total resistance is the sum:

$$R_{\text{series}} = R_1 + R_2 + \dots$$

**Why.** The current I is the same through each. The voltages add: $V = IR_1 + IR_2 = I(R_1 + R_2)$. So the pair behaves like one resistor of $R_1 + R_2$.

## Parallel

Each branch connects straight across the battery, so each gets the **same, full voltage**. The total current splits between the branches and adds back up where they rejoin.

Each extra branch gives the current another path, so the total resistance goes **down**:

$$\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$$

**Why.** Each branch gets the full V, so the currents are $\dfrac{V}{R_1}$ and $\dfrac{V}{R_2}$, and the total is $I = V\left(\dfrac{1}{R_1} + \dfrac{1}{R_2}\right)$. Comparing with $I = \dfrac{V}{R}$ gives the rule. For two resistors, a handy shortcut is $R = \dfrac{R_1R_2}{R_1 + R_2}$, "product over sum".

## Kirchhoff's two rules

Any circuit, however tangled, obeys two rules:

1. **Junction rule.** The current flowing into a junction equals the current flowing out. Charge does not pile up.
2. **Loop rule.** Going all the way round any closed loop, the voltage rises (from batteries) equal the voltage drops (across resistors). Energy is conserved.

For circuits that do not break down into simple series and parallel pieces, write these rules as equations and solve them together, as a [[systems-of-equations|system of equations]].

:::example
title: A 12 V battery drives current through a 2 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω. Find the total current, and the current in the 6 Ω resistor.

1. Parallel pair: $\dfrac{6 \times 3}{6 + 3} = \dfrac{18}{9} = 2$ Ω.
   why: Product over sum for two resistors in parallel.
   uses: [ohms-law]

2. Total: $2 + 2 = 4$ Ω, so the total current is $\dfrac{12}{4} = 3$ A.
   why: The 2 Ω and the pair are in series, so they add.
   uses: []

3. Voltage across the pair: $3 \times 2 = 6$ V. So the 6 Ω resistor carries $\dfrac{6}{6} = 1$ A, and the 3 Ω carries $\dfrac{6}{3} = 2$ A.
   why: Both branches of a parallel pair get the same voltage.
   uses: [ohms-law]

4. **3 A total; 1 A in the 6 Ω resistor.** Check: $1 + 2 = 3$ A at the junction, and $6 + 6 = 12$ V round the loop.
   why: The junction and loop rules both check out.
   uses: [systems-of-equations]
:::

:::practice
q: A 4 Ω and a 6 Ω resistor are in series with a 20 V battery. Find the current and the voltage across each.
answer: $R = 10$ Ω, so **I = 2 A**. Voltages: **8 V and 12 V**, adding to 20 V.
:::

:::problems
q: Find the total resistance of 2 Ω, 3 Ω and 5 Ω in series.
answer: **10 Ω.**

q: Find the total resistance of 6 Ω and 3 Ω in parallel.
answer: **2 Ω.**

q: Find the total resistance of two 10 Ω resistors in parallel.
answer: **5 Ω.** Two equal resistors in parallel give half of one.

q: Find the total resistance of 4 Ω, 4 Ω and 2 Ω, all in parallel.
answer: $\dfrac{1}{4} + \dfrac{1}{4} + \dfrac{1}{2} = 1$, so **1 Ω**.

q: A 12 V battery is connected to a 6 Ω and a 3 Ω resistor in parallel. Find the current in each branch and in total.
answer: **2 A and 4 A; 6 A in total.**

q: A 9 V battery runs three identical lamps in series. What voltage is across each lamp?
answer: **3 V.**

q: Five 2 Ω resistors are in series with a 5 V battery. Find the current.
answer: $R = 10$ Ω, **I = 0.5 A**.

q: 6 A flows into a junction. 2 A leaves by one wire. How much leaves by the other?
answer: **4 A.**

q: A 12 V battery drives a 2 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω. Find the total current.
answer: **3 A.**

q: Adding another lamp in parallel to a house circuit: what happens to the total current drawn?
answer: **It goes up**, because the total resistance falls.

q: Two loops share a resistor. Kirchhoff's rules give $I_1 + I_2 = 3$ and $4I_1 - 2I_2 = 0$. Find $I_1$ and $I_2$.
answer: From the second, $I_2 = 2I_1$. Then $3I_1 = 3$: **$I_1 = 1$ A, $I_2 = 2$ A.**

q: Why are homes wired in parallel rather than series?
answer: **Each appliance gets the full voltage and can be switched on and off on its own.** In series, one switched-off appliance would cut off everything.
:::
