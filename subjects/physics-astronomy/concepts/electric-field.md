---
id: electric-field
title: Electric fields
prereqs: [coulombs-law]
big: A charge changes the space around it, creating an electric field; any other charge placed there feels a force equal to its charge times the field's strength.
recap: The electric field at a point is the force per coulomb a small positive test charge would feel there: $E = \dfrac{F}{q}$, in N/C. So a charge q in a field E feels $F = qE$. Around a point charge Q, $E = \dfrac{kQ}{r^2}$, pointing away from positive charges and toward negative ones. Field lines show the direction; where they crowd together, the field is strong.
check:
  q: A 2 µC charge placed at a point feels a force of 0.01 N. What is the electric field there?
  options: ["5000 N/C", "0.00000002 N/C", "0.02 N/C", "200 N/C"]
  answer: 0
  why: $E = \dfrac{F}{q} = \dfrac{0.01}{2 \times 10^{-6}} = 5000$ N/C. $2 \times 10^{-8}$ multiplies force by charge. 0.02 forgets to turn µC into C and multiplies. 200 divides the charge by the force, upside down.
---

## Force at a distance

How does one charge "know" another is there, across empty space? A useful way to think about it: each charge fills the space around itself with an {{electric-field|electric field}}. Another charge placed in that field feels a force from the field, right where it sits.

The same idea works for gravity. The Earth makes a gravitational field around it, of strength g = 9.8 N/kg at the surface, and a mass m placed there feels a force mg.

| Field | Strength means | A thing in it feels |
|---|---|---|
| gravitational | g, force per kilogram | $F = mg$ |
| electric | E, force per coulomb | $F = qE$ |

## Defining the field

The electric field E at a point is the force that a small **positive** test charge would feel there, per coulomb:

$$E = \frac{F}{q}$$

Its unit is newtons per coulomb, N/C. The field is a vector: it points the way a positive charge would be pushed. A negative charge in the same field is pushed the opposite way.

## Field around a point charge

Put a test charge q at distance r from a charge Q. By [[coulombs-law|Coulomb's law]], it feels $F = \dfrac{kQq}{r^2}$. Divide by q:

$$E = \frac{kQ}{r^2}$$

The test charge drops out: the field belongs to Q alone. It points **away** from a positive charge and **toward** a negative one, and weakens with the square of the distance.

## Field lines

Field lines are a picture of the field:

- They start on positive charges and end on negative ones.
- The arrow on a line shows the direction a positive charge would be pushed.
- Where lines are close together, the field is strong; where they spread out, it is weak.
- They never cross.

Around a single positive charge, the lines spread straight out like the spokes of a wheel. Between two flat plates, one positive and one negative, they run straight across, evenly spaced: a **uniform** field, the same strength everywhere between the plates.

:::example
title: Find the electric field 0.5 m from a +3 µC charge. What force would a −2 µC charge feel there?

1. $E = \dfrac{kQ}{r^2} = \dfrac{8.99 \times 10^9 \times 3 \times 10^{-6}}{0.5^2}$.
   why: The field of a point charge.
   uses: [coulombs-law]

2. Top: $8.99 \times 10^9 \times 3 \times 10^{-6} = 26{,}970$. Divide by 0.25: $E \approx 107{,}900$ N/C, pointing away from the charge.
   why: Positive charges make fields that point outward.
   uses: []

3. Force on the −2 µC charge: $F = qE = 2 \times 10^{-6} \times 107{,}900 \approx 0.216$ N.
   why: Force is charge times field; use the size of the charge first.
   uses: []

4. **About $1.08 \times 10^5$ N/C; the −2 µC charge feels 0.22 N, pulled toward the +3 µC charge**, opposite to the field.
   why: Negative charges are pushed against the field's direction.
   uses: []
:::

:::practice
q: A charge of $4 \times 10^{-6}$ C sits in a uniform field of 2000 N/C. Find the force on it.
answer: $F = qE = 4 \times 10^{-6} \times 2000 =$ **0.008 N**.
:::

:::problems
q: A 2 µC charge feels 0.01 N. Find the field.
answer: **5000 N/C.**

q: An electron ($1.6 \times 10^{-19}$ C) is in a field of 10,000 N/C. Find the force on it.
answer: $1.6 \times 10^{-19} \times 10^4 =$ **$1.6 \times 10^{-15}$ N**.

q: That electron has mass $9.11 \times 10^{-31}$ kg. Find its acceleration.
answer: $\dfrac{1.6 \times 10^{-15}}{9.11 \times 10^{-31}} \approx$ **$1.8 \times 10^{15}$ m/s²**, enormous, because its mass is so tiny.

q: Find the field 0.5 m from a +3 µC charge.
answer: **About $1.08 \times 10^5$ N/C**, pointing away.

q: Find the field 0.1 m from a −1 µC charge.
answer: $\dfrac{8.99 \times 10^9 \times 10^{-6}}{0.01} \approx$ **$9 \times 10^5$ N/C, pointing toward the charge.**

q: You move twice as far from a point charge. What happens to its field?
answer: **It falls to a quarter.**

q: A positive charge sits in a field pointing east. Which way is it pushed? What about a negative charge?
answer: **Positive: east. Negative: west.**

q: What do closely packed field lines tell you?
answer: **The field is strong there.**

q: Describe the field lines between two flat, parallel plates, one positive and one negative.
answer: **Straight, evenly spaced lines from the positive plate to the negative one**: a uniform field.

q: Why can field lines never cross?
answer: **At a crossing, the field would point two ways at once**, but a charge can only be pushed one way.

q: A 0.001 kg dust grain carries +2 µC. What upward field would hold it still against gravity?
answer: Need $qE = mg$: $E = \dfrac{0.001 \times 9.8}{2 \times 10^{-6}} =$ **4900 N/C**, upward.

q: How is the electric field like g?
answer: **Both are force per unit of "stuff"**: g is newtons per kilogram, E is newtons per coulomb.
:::
