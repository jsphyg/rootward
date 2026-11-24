---
id: induction
title: Electromagnetic induction
prereqs: [magnetic-fields, voltage]
big: A changing magnetic field through a loop of wire makes a voltage in it; this is how generators make almost all our electricity and how transformers change voltages.
recap: Magnetic flux through a loop is $\Phi = BA$ (field times area, for a field straight through), in webers (Wb). Faraday's law: a changing flux induces a voltage, $\varepsilon = N\dfrac{\Delta\Phi}{\Delta t}$ for a coil of N turns. Faster change, more voltage. Lenz's law: the induced current flows so as to oppose the change. Transformers use this to change AC voltages: $\dfrac{V_s}{V_p} = \dfrac{N_s}{N_p}$.
check:
  q: A transformer has 1000 turns on its primary coil and 50 on its secondary. It is connected to 230 V AC. What is the output voltage?
  options: ["11.5 V", "4600 V", "230 V", "0 V"]
  answer: 0
  why: $V_s = V_p \times \dfrac{N_s}{N_p} = 230 \times \dfrac{50}{1000} = 11.5$ V. 4600 V turns the ratio upside down. 230 V ignores the turns. 0 V would be right only for a steady (DC) supply, which makes no changing flux.
---

## Magnets make currents

Ørsted showed that currents make magnetic fields. In 1831, Michael Faraday found the reverse. Connect a coil of wire to a meter and push a magnet into it:

| What you do | Meter |
|---|---|
| push the magnet in | flicks one way |
| hold it still inside | reads zero |
| pull it out | flicks the other way |
| push it in faster | flicks further |

*Notice: it is not the magnet but the **change** that makes the current. A still magnet does nothing.*

This is {{induction|electromagnetic induction}}.

## Flux

To measure "how much field goes through a loop", use the **magnetic flux**:

$$\Phi = BA$$

B is the [[magnetic-fields|magnetic field]] and A the loop's area, when the field passes straight through. The unit is the weber, Wb (1 Wb = 1 T·m²). Picture flux as the number of field lines passing through the loop.

## Faraday's law

When the flux through a coil changes, a [[voltage|voltage]] (called an EMF, electromotive force) is induced:

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t}$$

N is the number of turns: each turn adds its own share. The flux can change because the field changes, because the loop moves or turns, or because its area changes. The faster the change, the bigger the voltage.

A straight rod of length L moving at speed v across a field also has a voltage across it, $\varepsilon = BLv$, because it sweeps through field lines.

## Lenz's law

Which way does the induced current flow? Always **so as to fight the change** that caused it. Push a north pole into a coil, and the coil's current makes a north pole facing it, pushing back. You have to do work to push the magnet in, and that work becomes electrical energy. If the current helped instead, you would get energy from nothing.^[n_lenz]

## Generators and transformers

A **generator** turns a coil inside a magnetic field (or a magnet inside a coil). The flux through the coil keeps rising and falling, so the voltage keeps reversing: **alternating current** (AC). Power stations, wind turbines and bicycle dynamos all work this way.

A **transformer** has two coils wound on one iron core. AC in the primary coil makes a changing field in the core, which induces a voltage in the secondary coil. The voltages are in the ratio of the turns:

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

More turns on the secondary steps the voltage **up**; fewer steps it **down**. An ideal transformer wastes no power, so $V_pI_p = V_sI_s$: stepping the voltage up steps the current down. That is how electricity is sent at high voltage, as the electric power page explains. Transformers only work with AC: a steady current makes no change in flux.

:::example
title: A coil of 100 turns, area 0.01 m², sits in a 0.5 T field passing straight through it. The field is switched off, falling to zero in 0.1 s. Find the average voltage induced.

1. Flux through one turn at the start: $\Phi = BA = 0.5 \times 0.01 = 0.005$ Wb. At the end it is 0.
   why: Flux is field times area.
   uses: [magnetic-fields]

2. Change in flux: $\Delta\Phi = 0.005$ Wb.
   why: The size of the change is what matters for the voltage's size.
   uses: []

3. $\varepsilon = N\dfrac{\Delta\Phi}{\Delta t} = 100 \times \dfrac{0.005}{0.1} = 100 \times 0.05 = 5$ V.
   why: Faraday's law, with every turn adding its share.
   uses: [voltage]

4. **5 V on average.** Switching the field off ten times faster would give 50 V.
   why: The voltage depends on how fast the flux changes.
   uses: []
:::

:::practice
q: A 0.2 T field passes straight through a 0.05 m² loop. Find the flux.
answer: $0.2 \times 0.05 =$ **0.01 Wb**.
:::

:::problems
q: The flux through a single loop falls by 0.02 Wb in 0.5 s. Find the induced voltage.
answer: $\dfrac{0.02}{0.5} =$ **0.04 V**.

q: A 100-turn coil has its flux change by 0.005 Wb in 0.1 s. Find the voltage.
answer: **5 V.**

q: The same change happens twice as fast. What happens to the voltage?
answer: **It doubles.**

q: A magnet sits still inside a coil. Is there an induced current?
answer: **No.** The flux is not changing.

q: A 0.5 m metal rod moves at 4 m/s across a 0.2 T field. Find the voltage across it.
answer: $\varepsilon = BLv = 0.2 \times 0.5 \times 4 =$ **0.4 V**.

q: A transformer has 1000 primary turns and 50 secondary turns, on 230 V. Find the output.
answer: **11.5 V.**

q: In that transformer, the primary current is 2 A. Find the secondary current, if no power is lost.
answer: $I_s = \dfrac{230 \times 2}{11.5} =$ **40 A**.

q: A transformer must step 230 V up to 11,500 V. Its primary has 200 turns. How many turns does the secondary need?
answer: $200 \times \dfrac{11{,}500}{230} =$ **10,000 turns**.

q: Why won't a transformer work on a battery's steady DC?
answer: **A steady current makes a steady field**, so the flux does not change and nothing is induced.

q: You push a north pole into a coil. Which pole does the coil's induced current make at that end? Why?
answer: **A north pole**, which pushes back against the magnet. Lenz's law: the induced current opposes the change.

q: Why is it harder to turn a generator when a lamp is connected to it?
answer: **The current flowing makes a force that opposes the turning** (Lenz's law), so you must do work, which becomes the lamp's energy.

q: Why does a generator produce alternating current?
answer: **As the coil turns, the flux through it rises and falls**, so the induced voltage keeps reversing direction.
:::
