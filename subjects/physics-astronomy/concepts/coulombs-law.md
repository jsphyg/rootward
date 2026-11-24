---
id: coulombs-law
title: Coulomb's law
prereqs: [electric-charge, proportional-reasoning]
big: The electric force between two charges grows with each charge and falls with the square of the distance, just like gravity, but it is vastly stronger and can push as well as pull.
recap: Coulomb's law: $F = \dfrac{kq_1q_2}{r^2}$, with $k = 8.99 \times 10^9$ N·m²/C². Double either charge and the force doubles; double the distance and it falls to a quarter. Like charges repel, opposite charges attract. Between a proton and an electron, the electric force is about $10^{39}$ times stronger than gravity.
check:
  q: Two small charges of 1 µC each are 0.1 m apart. How big is the force between them?
  options: ["about 0.9 N", "about 0.09 N", "about 90 N", "about 0.009 N"]
  answer: 0
  why: $F = \dfrac{8.99 \times 10^9 \times (10^{-6})^2}{0.1^2} = \dfrac{8.99 \times 10^{-3}}{0.01} \approx 0.9$ N. 0.09 N divides by 0.1 instead of $0.1^2$. 90 N uses 0.01 m for the distance, misreading 10 cm. 0.009 N forgets to divide by $r^2$ at all.
---

## Gravity's stronger cousin

Charles-Augustin de Coulomb measured the force between charged balls in 1785, using a twisting wire much like Cavendish later did for gravity. He found a rule with exactly the same shape as [[gravitation|Newton's law of gravitation]]:

$$F = \frac{kq_1q_2}{r^2}$$

with $q_1$ and $q_2$ the charges in coulombs, r the distance between their centres, and $k = 8.99 \times 10^9$ N·m²/C², the **Coulomb constant**.

| | Gravity | Electric force |
|---|---|---|
| formula | $\dfrac{Gm_1m_2}{r^2}$ | $\dfrac{kq_1q_2}{r^2}$ |
| constant | $6.67 \times 10^{-11}$ | $8.99 \times 10^9$ |
| direction | always attracts | like charges repel, opposites attract |

*Notice: the constant is about $10^{20}$ times bigger. Electric forces are enormously strong.*

## Reading the law

It is the same [[proportional-reasoning|proportional reasoning]] as for gravity, an inverse-square law:

| Change | Effect on the force |
|---|---|
| double one charge | 2 times |
| double both charges | 4 times |
| double the distance | a quarter |
| half the distance | 4 times |

To get the direction, use the signs. If the charges are alike, they repel; if opposite, they attract. A common way to work: put in the sizes of the charges to find the size of the force, then decide the direction from the signs.

## So why is gravity what we feel?

If electric forces are so strong, why does gravity run the solar system? Because ordinary matter is almost perfectly neutral. A planet has about equal numbers of protons and electrons, so the electric pushes and pulls cancel. Gravity only adds, so with huge masses it wins. But at the scale of atoms, electric forces rule: they hold atoms together, bind them into molecules, and make solids solid.^[n_neutral]

:::example
title: In a hydrogen atom, the electron is about $5.3 \times 10^{-11}$ m from the proton. Find the electric force between them, and compare it with gravity, about $3.6 \times 10^{-47}$ N.

1. Both charges have size $e = 1.6 \times 10^{-19}$ C, so $q_1q_2 = (1.6 \times 10^{-19})^2 = 2.56 \times 10^{-38}$.
   why: The proton is $+e$ and the electron $-e$.
   uses: [electric-charge]

2. $r^2 = (5.3 \times 10^{-11})^2 \approx 2.81 \times 10^{-21}$.
   why: Square the distance.
   uses: []

3. $F = \dfrac{8.99 \times 10^9 \times 2.56 \times 10^{-38}}{2.81 \times 10^{-21}} \approx 8.2 \times 10^{-8}$ N, attractive.
   why: Opposite charges attract.
   uses: [proportional-reasoning]

4. **About $8.2 \times 10^{-8}$ N.** Divided by gravity's $3.6 \times 10^{-47}$ N, that is about $2 \times 10^{39}$ times stronger.
   why: Comparing shows why gravity can be ignored inside atoms.
   uses: []
:::

:::practice
q: Two charges of 2 µC and 3 µC are 0.3 m apart. Find the force.
answer: $\dfrac{8.99 \times 10^9 \times 6 \times 10^{-12}}{0.09} \approx$ **0.6 N**, repulsive.
:::

:::problems
q: Two 1 µC charges are 0.1 m apart. Find the force.
answer: **About 0.9 N.**

q: The distance between two charges is tripled. What happens to the force?
answer: **It becomes one ninth.**

q: Both charges are doubled and the distance is doubled. What happens to the force?
answer: $\dfrac{2 \times 2}{2^2} = 1$: **it stays the same.**

q: Two charges, +4 µC and −2 µC, are 0.2 m apart. Find the size and direction of the force.
answer: $\dfrac{8.99 \times 10^9 \times 8 \times 10^{-12}}{0.04} \approx$ **1.8 N, attractive.**

q: Two equal charges 1 m apart repel with 9 N. Find each charge.
answer: $q^2 = \dfrac{9 \times 1}{8.99 \times 10^9} \approx 10^{-9}$, so **q ≈ $3.2 \times 10^{-5}$ C** (32 µC).

q: Two 1 C charges are 1 m apart. Find the force.
answer: **$8.99 \times 10^9$ N**, about the weight of a million cars. A coulomb is a lot of charge.

q: Two charges attract with 0.4 N. At what new distance does the force become 0.1 N, if they started 0.05 m apart?
answer: A quarter of the force means twice the distance: **0.1 m**.

q: Find the electric force between the electron and proton in hydrogen, $5.3 \times 10^{-11}$ m apart.
answer: **About $8.2 \times 10^{-8}$ N.**

q: Why is gravity, not the electric force, what holds the Moon in orbit?
answer: **The Earth and Moon are both very nearly neutral**, so electric forces cancel, while gravity only adds.

q: Charge A is +3 µC and charge B is +3 µC. Does A push on B harder than B pushes on A?
answer: **No.** They push on each other equally, a third-law pair.

q: How much stronger is the Coulomb constant than G?
answer: $\dfrac{8.99 \times 10^9}{6.67 \times 10^{-11}} \approx$ **$1.3 \times 10^{20}$ times**.

q: Why must you convert µC to C before using Coulomb's law?
answer: **k is in N·m²/C²**, so the charges must be in coulombs (and distances in metres) for the answer to come out in newtons.
:::
