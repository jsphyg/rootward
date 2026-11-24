---
id: vector-addition
title: Adding vectors
prereqs: [vector-components]
big: To add vectors, add their across parts and their up parts separately; the sizes only add directly when the vectors point the same way.
recap: Add vectors by adding components: $(a_x, a_y) + (b_x, b_y) = (a_x + b_x,\ a_y + b_y)$. In a drawing, put the arrows tip to tail; the sum, called the resultant, runs from the first tail to the last tip. Sizes do not simply add: 3 east plus 4 north is 5, not 7.
check:
  q: You walk 3 km east, then 4 km north. How far are you from your start?
  options: ["5 km", "7 km", "1 km", "25 km"]
  answer: 0
  why: The walks are at right angles, so the resultant is the hypotenuse: $\sqrt{3^2 + 4^2} = 5$ km. 7 km adds the sizes, which only works when both walks go the same way. 1 km subtracts them, which only works when they go opposite ways. 25 km is $5^2$; the square root was forgotten.
---

## Sizes do not just add

Two people pull a box, one with 3 N and one with 4 N. What is the total pull?

| How they pull | Total pull |
|---|---|
| same direction | 7 N |
| at right angles | 5 N |
| opposite directions | 1 N, toward the stronger one |

*Notice: the total can be anything from 1 N to 7 N. The directions decide where in that range it lands.*

So adding vectors is not adding their sizes. The total of several vectors is called the {{resultant|resultant}}.

## Tip to tail

Draw the first arrow. Start the second arrow where the first one ends, at its tip. The resultant is the arrow from the very first tail to the very last tip.

This is exactly what happens on a walk. Walk 3 km east, then from **there** walk 4 km north. Your total move is the straight arrow from where you started to where you finished.

The order does not matter. Walking north first and then east lands you in the same place.

## Adding with components

Drawing is slow and rough. Components make it exact. Add the across parts together, and the up parts together:

$$(a_x,\ a_y) + (b_x,\ b_y) = (a_x + b_x,\ a_y + b_y)$$

$$(2, 3) + (4, 1) = (6, 4)$$

**Why it works.** The across parts all point along the same line, so they add like ordinary numbers, and so do the up parts. Across and up are at right angles, so neither one changes the other. Splitting into components turns one hard problem into two easy ones.

Then, if you need it, turn the result back into a size and angle with the Pythagorean theorem and inverse tangent.

## The full method

For vectors given as a size and angle:

1. Split each vector into components, with $A\cos\theta$ and $A\sin\theta$.
2. Add all the across parts. Add all the up parts.
3. Turn the total back into a size, $\sqrt{x^2 + y^2}$, and an angle, $\tan^{-1}\!\left(\frac{y}{x}\right)$.

## Subtracting vectors

To subtract a vector, add its opposite: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$. In components, just subtract part by part:

$$(3, 4) - (1, 1) = (2, 3)$$

:::example
title: Two forces pull on a ring. One is 10 N at 0°. The other is 10 N at 60°. Find the resultant force.

1. Split the first: $(10\cos 0°,\ 10\sin 0°) = (10,\ 0)$.
   why: Components can be added; slanted arrows cannot.
   uses: [vector-components]

2. Split the second: $(10\cos 60°,\ 10\sin 60°) \approx (5,\ 8.66)$.
   why: Same method, angle 60°.
   uses: [vector-components]

3. Add part by part: $(10 + 5,\ 0 + 8.66) = (15,\ 8.66)$.
   why: Across parts add to across parts, up parts to up parts.
   uses: []

4. Size: $\sqrt{15^2 + 8.66^2} \approx \sqrt{225 + 75} = \sqrt{300} \approx 17.3$ N. Angle: $\tan^{-1}\!\left(\frac{8.66}{15}\right) \approx 30°$.
   why: Pythagoras gives the size, inverse tangent gives the direction.
   uses: [pythagorean-theorem, inverse-trig]

5. The resultant is **about 17.3 N at 30°**. It points exactly halfway between the two forces, which makes sense because they are the same size.
   why: A symmetry check catches mistakes in the angle.
   uses: []
:::

:::practice
q: A plane points north at 200 km/h, and a wind blows east at 50 km/h. What is the plane's actual speed and direction?
answer: $(0, 200) + (50, 0) = (50, 200)$, taking east as across and north as up. Size $\sqrt{2500 + 40{,}000} = \sqrt{42{,}500} \approx$ **206 km/h**. The angle east of north is $\tan^{-1}\!\left(\frac{50}{200}\right) \approx$ **14°**.
:::

:::problems
q: Add $(2, 3) + (4, 1)$.
answer: **(6, 4)**.

q: Add $(5, -2) + (-1, 6)$ and find the size of the result.
answer: $(4, 4)$. Size $\sqrt{32} \approx$ **5.66**.

q: Work out $(3, 4) - (1, 1)$.
answer: **(2, 3)**.

q: Add 3 N east and 5 N east.
answer: Same direction, so the sizes add: **8 N east**.

q: Add 3 N east and 5 N west.
answer: Opposite directions: **2 N west**, toward the bigger force.

q: What is the biggest and the smallest possible resultant of a 3 N and a 4 N force?
answer: **Biggest 7 N** (same direction). **Smallest 1 N** (opposite directions).

q: What must be added to $(3, -2)$ to get $(0, 0)$?
answer: Its opposite: **(−3, 2)**.

q: Add 20 N at 0° and 20 N at 180°.
answer: $(20, 0) + (-20, 0) = (0, 0)$: **0 N**. They cancel.

q: Two 5 N forces act at right angles. Find the resultant.
answer: $\sqrt{25 + 25} \approx$ **7.07 N**, at **45°** between them.

q: You walk 6 km north, then 8 km east. Find your distance and direction from the start.
answer: $\sqrt{36 + 64} =$ **10 km**. The angle east of north is $\tan^{-1}\!\left(\frac{8}{6}\right) \approx$ **53.1° east of north**.

q: You walk 5 km east, then 5 km north, then 5 km west. Where are you?
answer: $(5, 0) + (0, 5) + (-5, 0) = (0, 5)$: **5 km north of your start.**

q: A boat heads straight across a river at 4 m/s. The current flows downstream at 3 m/s. What is the boat's actual speed, and how far does it angle downstream?
answer: Size $\sqrt{16 + 9} =$ **5 m/s**. Angle from straight across: $\tan^{-1}\!\left(\frac{3}{4}\right) \approx$ **36.9° downstream**.

q: Add 10 at 30° and 6 at 90°.
answer: $(10\cos 30°, 10\sin 30°) \approx (8.66, 5)$ and $(0, 6)$. Sum $(8.66, 11)$. Size $\sqrt{75 + 121} = \sqrt{196} =$ **14**. Angle $\tan^{-1}\!\left(\frac{11}{8.66}\right) \approx$ **51.8°**.

q: A hiker walks 2 km at 30°, then 3 km at 120°. Find the resultant.
answer: $(1.73, 1) + (-1.5, 2.60) = (0.23, 3.60)$. Size $\approx$ **3.61 km**. Angle $\tan^{-1}\!\left(\frac{3.60}{0.23}\right) \approx$ **86°**. (The walks are at right angles, so the size is also $\sqrt{4 + 9} = \sqrt{13} \approx 3.61$.)
:::
