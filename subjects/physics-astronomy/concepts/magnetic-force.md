---
id: magnetic-force
title: Magnetic force on moving charges
prereqs: [magnetic-fields, circular-motion]
big: A magnetic field pushes on a moving charge at right angles to both its motion and the field; this sideways push bends charged particles into circles and makes current-carrying wires move, which is how electric motors work.
recap: A charge q moving at speed v across a magnetic field B feels a force $F = qvB$ (at right angles to the field), pointing at right angles to both v and B. A still charge feels nothing. A wire of length L carrying current I across a field feels $F = BIL$. Because the force is always sideways, it does no work and bends a charged particle into a circle of radius $r = \dfrac{mv}{qB}$.
check:
  q: A proton ($1.6 \times 10^{-19}$ C) moves at $1 \times 10^6$ m/s straight across a 0.5 T magnetic field. How big is the magnetic force on it?
  options: ["$8 \\times 10^{-14}$ N", "$3.2 \\times 10^{-13}$ N", "0 N, because protons are not magnetic", "$5 \\times 10^5$ N"]
  answer: 0
  why: $F = qvB = 1.6 \times 10^{-19} \times 10^6 \times 0.5 = 8 \times 10^{-14}$ N. $3.2 \times 10^{-13}$ divides by 0.5 instead of multiplying. A proton need not be magnetic: any moving charge feels the force. $5 \times 10^5$ leaves out the charge.
---

## A sideways push

Hold a magnet near an old TV screen and the picture warps. The picture was drawn by a beam of electrons, and the magnet pushed the beam sideways.

A magnetic field pushes on a **moving** charge. The push is odd in two ways:

| Feature | What it means |
|---|---|
| only moving charges feel it | a charge sitting still in a magnetic field feels nothing |
| it acts sideways | at right angles to both the motion and the field |

*Notice: the push is never along the motion, so it can change a particle's direction but never its speed.*

## The force on a charge

For a charge q moving at speed v at right angles to a [[magnetic-fields|magnetic field]] B:

$$F = qvB$$

If it moves along the field lines, there is no force. At an angle θ to the field, only the part across the field counts: $F = qvB\sin\theta$.

The direction comes from a **right-hand rule**: point your fingers along the velocity of a positive charge, curl them toward the field, and your thumb points along the force. For a negative charge like an electron, the force is the opposite way.^[n_flemings]

## Circles

Because the force is always sideways, it acts exactly like the string on a ball whirled in a circle. It supplies the centripetal force from the [[circular-motion|circular motion]] page:

$$qvB = \frac{mv^2}{r} \quad\Rightarrow\quad r = \frac{mv}{qB}$$

Faster or heavier particles make bigger circles; stronger fields make tighter ones. This is used in particle accelerators, and in mass spectrometers, which sort atoms by mass by seeing how much they curve.

The Earth's magnetic field bends the charged particles streaming from the Sun, steering them toward the poles. There they hit the upper air and make it glow: the northern and southern lights.

## The force on a wire

A current in a wire is lots of moving charges, so a wire carrying current across a field feels a force too. For a length L of wire carrying current I at right angles to B:

$$F = BIL$$

This is the **motor effect**. In an electric motor, a coil carrying current sits in a magnetic field. One side is pushed up, the other down, so the coil turns. A clever switch called a commutator flips the current every half turn, so it keeps turning the same way.

:::example
title: A proton moves at $1 \times 10^6$ m/s at right angles to a 0.5 T field. Find the force on it and the radius of its circle. (Proton mass $1.67 \times 10^{-27}$ kg.)

1. Force: $F = qvB = 1.6 \times 10^{-19} \times 10^6 \times 0.5 = 8 \times 10^{-14}$ N.
   why: The magnetic force on a moving charge.
   uses: [magnetic-fields]

2. This force is the centripetal force: $r = \dfrac{mv}{qB}$.
   why: The sideways push bends the path into a circle.
   uses: [circular-motion]

3. $r = \dfrac{1.67 \times 10^{-27} \times 10^6}{1.6 \times 10^{-19} \times 0.5} = \dfrac{1.67 \times 10^{-21}}{8 \times 10^{-20}} \approx 0.021$ m.
   why: Put in the numbers.
   uses: []

4. **$8 \times 10^{-14}$ N; a circle of radius about 2.1 cm.** Its speed never changes, only its direction.
   why: A force at right angles to the motion does no work.
   uses: []
:::

:::practice
q: A 0.2 m wire carries 5 A at right angles to a 0.1 T field. Find the force on it.
answer: $F = BIL = 0.1 \times 5 \times 0.2 =$ **0.1 N**.
:::

:::problems
q: A proton at $10^6$ m/s crosses a 0.5 T field at right angles. Find the force.
answer: **$8 \times 10^{-14}$ N.**

q: An electron at $2 \times 10^7$ m/s crosses a 0.01 T field at right angles. Find the force.
answer: $1.6 \times 10^{-19} \times 2 \times 10^7 \times 0.01 =$ **$3.2 \times 10^{-14}$ N**.

q: Find the radius of that electron's circle (mass $9.11 \times 10^{-31}$ kg).
answer: $r = \dfrac{9.11 \times 10^{-31} \times 2 \times 10^7}{1.6 \times 10^{-19} \times 0.01} \approx$ **0.011 m** (1.1 cm).

q: A charge sits still in a strong magnetic field. What force does it feel?
answer: **None.** Only moving charges feel a magnetic force.

q: A charge moves along the direction of the field lines. What force does it feel?
answer: **None.** It must cut across the field.

q: Why can a magnetic field never speed up or slow down a charged particle?
answer: **The force is always at right angles to the motion**, so it does no work.

q: A particle's speed doubles in the same field. What happens to the radius of its circle?
answer: **It doubles.**

q: A 0.2 m wire carries 5 A across a 0.1 T field. Find the force.
answer: **0.1 N.**

q: A 0.5 m wire across a 0.2 T field feels 0.3 N. Find the current.
answer: $I = \dfrac{0.3}{0.2 \times 0.5} =$ **3 A**.

q: A proton and an electron move at the same speed across the same field. Which circle is bigger, and which way do they curve?
answer: **The proton's circle is far bigger** (it is about 1800 times heavier). **They curve opposite ways**, having opposite charges.

q: How does an electric motor keep turning the same way?
answer: **A commutator reverses the current in the coil every half turn**, so the push on each side keeps turning it the same way.

q: What causes the northern lights?
answer: **Charged particles from the Sun are steered by the Earth's magnetic field toward the poles**, where they hit the upper air and make it glow.
:::
