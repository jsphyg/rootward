---
id: proportional-reasoning
title: Proportion and scaling
prereqs: [rearranging-formulas, calculus:exponents]
big: Many laws of physics say how one quantity changes when another changes, so you can scale an answer without knowing every number, just by asking "what happens if I double this?"
recap: In direct proportion ($y = kx$), doubling x doubles y. In inverse proportion ($y = \dfrac{k}{x}$), doubling x halves y. In an inverse-square law ($y = \dfrac{k}{x^2}$), doubling x makes y a quarter as big. If x is multiplied by some factor, y is multiplied by that factor raised to the matching power.
check:
  q: The brightness of a lamp follows an inverse-square law with distance. You move twice as far away. How bright does it look now?
  options: ["A quarter as bright", "Half as bright", "Twice as bright", "Four times as bright"]
  answer: 0
  why: Inverse-square means $\text{brightness} = \dfrac{k}{d^2}$. Doubling d makes $d^2$ four times bigger, and dividing by something four times bigger gives a quarter. Half would be a plain inverse law, without the square. Twice and four times have the direction wrong: moving away makes a lamp dimmer, not brighter.
---

## Three tables

Here are three ways one quantity, y, can depend on another, x:

| x | direct: $y = 6x$ | inverse: $y = \dfrac{12}{x}$ | inverse-square: $y = \dfrac{16}{x^2}$ |
|---|---|---|---|
| 1 | 6 | 12 | 16 |
| 2 | 12 | 6 | 4 |
| 4 | 24 | 3 | 1 |

*Notice: going from x = 1 to x = 2 doubles the first column, halves the second, and quarters the third.*

These three patterns, plus "y grows with the square of x", cover a large share of physics.

## Direct proportion

y is {{proportional|directly proportional}} to x when

$$y = kx$$

for some fixed number k, called the {{constant-k|constant of proportionality}}. Double x and y doubles. Triple x and y triples. Speed and distance work this way: at a steady 50 km/h, twice the time means twice the distance.

The symbol $\propto$ means "is proportional to". So $y \propto x$ says the same thing as $y = kx$.

## Inverse proportion

y is inversely proportional to x when

$$y = \frac{k}{x}$$

Double x and y halves. Triple x and y becomes a third. A fixed trip works this way: drive twice as fast and the time is cut in half.

**Why it works.** In $y = \dfrac{k}{x}$, x is on the bottom. Making the bottom of a fraction bigger makes the fraction smaller by the same factor.

## Squares and inverse squares

Some laws involve a square. The energy of a moving car grows with the **square** of its speed:

$$E = kv^2$$

Double the speed and the energy goes up by $2^2 = 4$.

Others are **inverse-square** laws:

$$y = \frac{k}{x^2}$$

Double x and y drops to $\dfrac{1}{2^2} = \dfrac{1}{4}$. Gravity, electric forces and the brightness of light all follow inverse-square laws.

**Why light is inverse-square.** Light from a bulb spreads out in every direction, over the surface of a growing sphere. A sphere twice as wide has four times the surface area, because area grows with the square of the radius. The same light is spread over four times the area, so each patch gets a quarter.

## The scaling shortcut

You do not need k to scale. If x is multiplied by some factor, y is multiplied by that factor raised to a power:

| Law | x multiplied by f | y multiplied by |
|---|---|---|
| $y = kx$ | f | f |
| $y = \dfrac{k}{x}$ | f | $\dfrac{1}{f}$ |
| $y = kx^2$ | f | $f^2$ |
| $y = \dfrac{k}{x^2}$ | f | $\dfrac{1}{f^2}$ |

*Notice: the power of x in the law is the power the factor gets.*

## Finding k

If you know one pair of values, you can find k by rearranging. If $y = \dfrac{k}{x}$ and y is 6 when x is 4, then $k = xy = 24$. Now the law is $y = \dfrac{24}{x}$, and you can find y for any x.

:::example
title: A lamp gives a brightness of 50 units at 2 m. How bright is it at 5 m? Light follows an inverse-square law.

1. Find the factor: x goes from 2 to 5, so it is multiplied by $f = \dfrac{5}{2} = 2.5$.
   why: The shortcut only needs how many times bigger x got.
   uses: []

2. Inverse-square, so the brightness is multiplied by $\dfrac{1}{f^2} = \dfrac{1}{2.5^2} = \dfrac{1}{6.25}$.
   why: In an inverse-square law, the factor is squared and then flipped.
   uses: [calculus:exponents]

3. New brightness: $\dfrac{50}{6.25} = 8$ units.
   why: Multiply the old value by the scaling factor.
   uses: []

4. Check with k: $k = 50 \times 2^2 = 200$, and $\dfrac{200}{5^2} = \dfrac{200}{25} = 8$. The brightness is **8 units**.
   why: Finding k is a second route to the same answer.
   uses: [rearranging-formulas]
:::

:::practice
q: y is inversely proportional to $x^2$, and y = 20 when x = 1. What is y when x = 2?
answer: x doubles, so y is multiplied by $\dfrac{1}{2^2} = \dfrac{1}{4}$: $20 \times \dfrac{1}{4} =$ **5**.
:::

:::problems
q: y is directly proportional to x, and y = 12 when x = 3. Find k, then find y when x = 5.
answer: $k = \dfrac{y}{x} = \dfrac{12}{3} = 4$. So $y = 4x$, and at x = 5, **y = 20**.

q: y is directly proportional to x. x is tripled. What happens to y?
answer: **y is tripled.**

q: y is inversely proportional to x, and y = 6 when x = 4. Find y when x = 8.
answer: $k = xy = 24$, so $y = \dfrac{24}{8} =$ **3**. (x doubled, so y halved.)

q: y is inversely proportional to x. x is halved. What happens to y?
answer: Halving is multiplying by $\frac{1}{2}$, so y is multiplied by $\dfrac{1}{1/2} = 2$. **y doubles.**

q: y is proportional to $x^2$. x doubles. What happens to y?
answer: $2^2 = 4$. **y is 4 times bigger.**

q: y follows an inverse-square law with x. x is tripled. What happens to y?
answer: $\dfrac{1}{3^2} = \dfrac{1}{9}$. **y becomes a ninth of what it was.**

q: y follows an inverse-square law with x. x is halved. What happens to y?
answer: The factor is $\frac{1}{2}$, so y is multiplied by $\dfrac{1}{(1/2)^2} = 4$. **y is 4 times bigger.**

q: Which law fits this table? x: 1, 2, 3. y: 5, 10, 15.
answer: y doubles when x doubles, and $\frac{y}{x} = 5$ every time. **Direct proportion, $y = 5x$.**

q: Which law fits this table? x: 1, 2, 4. y: 8, 4, 2.
answer: y halves when x doubles, and $xy = 8$ every time. **Inverse proportion, $y = \dfrac{8}{x}$.**

q: Which law fits this table? x: 1, 2, 4. y: 16, 4, 1.
answer: y quarters when x doubles, and $x^2 y = 16$ every time. **Inverse-square, $y = \dfrac{16}{x^2}$.**

q: y follows an inverse-square law, and y = 100 when x = 2. Find y when x = 10.
answer: x is multiplied by 5, so y is multiplied by $\frac{1}{25}$: $\dfrac{100}{25} =$ **4**. Check: $k = 100 \times 4 = 400$, and $\dfrac{400}{100} = 4$.

q: A spring stretches 3 cm when pulled with 6 N. Stretch is directly proportional to the pull. How far does it stretch with 10 N?
answer: $k = \dfrac{3}{6} = 0.5$ cm per newton. $0.5 \times 10 =$ **5 cm**.

q: A trip takes 2 hours at 60 km/h. Time is inversely proportional to speed. How long at 80 km/h?
answer: $k = 2 \times 60 = 120$ (the distance in km). $\dfrac{120}{80} =$ **1.5 hours**.

q: A car's energy of motion is proportional to the square of its speed. Its speed goes from 20 km/h to 60 km/h. How many times more energy does it have?
answer: Speed is multiplied by 3, so energy by $3^2 =$ **9**. This is why fast crashes are so much worse.

q: Your weight at the Earth's surface is 600 N. Gravity follows an inverse-square law with distance from the Earth's centre. What would you weigh twice as far from the centre?
answer: Distance doubles, so weight is multiplied by $\frac{1}{4}$: **150 N**.

q: A lamp gives brightness 36 at 1 m. Find the brightness at 3 m and at 6 m.
answer: At 3 m: $\dfrac{36}{3^2} =$ **4**. At 6 m: $\dfrac{36}{6^2} =$ **1**.
:::
