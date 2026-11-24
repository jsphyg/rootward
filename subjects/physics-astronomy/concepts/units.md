---
id: units
title: Units and the SI system
prereqs: [scientific-notation]
big: A measurement is a number and a unit together, and scientists everywhere use the same set of units, called SI, with prefixes like kilo and milli for powers of ten.
recap: The main SI units are the metre (m) for length, the kilogram (kg) for mass and the second (s) for time. Prefixes stand for powers of ten, such as kilo ($10^3$), centi ($10^{-2}$), milli ($10^{-3}$) and micro ($10^{-6}$). Units multiply and divide like letters, so distance in m divided by time in s gives a speed in m/s.
check:
  q: What is 3 millimetres (3 mm) in metres?
  options: ["$3 \times 10^{-3}$ m", "$3 \times 10^{3}$ m", "$3 \times 10^{-2}$ m", "$3 \times 10^{-6}$ m"]
  answer: 0
  why: Milli means one thousandth, $10^{-3}$, so 3 mm is $3 \times 10^{-3}$ m. $10^{3}$ is kilo, the opposite direction. $10^{-2}$ is centi (centimetres). $10^{-6}$ is micro.
---

## A number alone means nothing

"The table is 2 long." Two what? Two metres is a normal table. Two kilometres is not a table. A measurement needs a number **and** a {{unit|unit}}, the amount you are counting in.

| Measurement | Number | Unit |
|---|---|---|
| 2 m | 2 | metre |
| 70 kg | 70 | kilogram |
| 9.58 s | 9.58 | second |

*Notice: the unit is part of the answer. Dropping it is like dropping the decimal point.*

## The SI units

Scientists everywhere agreed on one set of units, called {{si|SI}}. Physics in this web uses these base units:

| Quantity | Unit | Symbol |
|---|---|---|
| length | metre | m |
| mass | kilogram | kg |
| time | second | s |
| temperature | kelvin | K |
| electric current | ampere | A |

There are two more base units, for amounts of substance and for brightness.^[n_other_si] Every other unit is built from these.

**Why one system?** In 1999 a spacecraft sent to Mars was lost because one team worked in pounds and another in newtons, the SI unit of force.^[n_mars_orbiter] With one agreed system, everyone's numbers fit together.

## Prefixes are powers of ten

A {{prefix|prefix}} in front of a unit multiplies it by a power of ten. You already know some: a kilometre is 1000 metres.

| Prefix | Symbol | Means | Example |
|---|---|---|---|
| giga | G | $10^9$ | 1 Gm = $10^9$ m |
| mega | M | $10^6$ | 1 Mm = $10^6$ m |
| kilo | k | $10^3$ | 1 km = 1000 m |
| centi | c | $10^{-2}$ | 1 cm = 0.01 m |
| milli | m | $10^{-3}$ | 1 mm = 0.001 m |
| micro | μ | $10^{-6}$ | 1 μm = $10^{-6}$ m |
| nano | n | $10^{-9}$ | 1 nm = $10^{-9}$ m |

*Notice: to write a prefixed unit in base units, swap the prefix for its power of ten. 5 μm is $5 \times 10^{-6}$ m.*

The kilogram is the odd one out. It is the base unit even though it already has a prefix. A gram is $10^{-3}$ kg.

## Units multiply and divide like letters

Speed is distance divided by time. So its unit is a length unit divided by a time unit:

$$\frac{\text{m}}{\text{s}} = \text{m/s, said "metres per second"}$$

A unit built from base units like this is a {{derived-unit|derived unit}}. Area is length times length, so its unit is $\text{m} \times \text{m} = \text{m}^2$.

Units also cancel like letters. Speed times time:

$$10\ \frac{\text{m}}{\cancel{\text{s}}} \times 5\ \cancel{\text{s}} = 50\ \text{m}$$

**Why it works.** "Per second" means "divided by seconds". Multiplying by seconds undoes it, just as $\frac{a}{b} \times b = a$.

## Units catch mistakes

If a formula is right, the units on both sides match. Suppose someone writes "distance = speed ÷ time". Check the units:

$$\frac{\text{m/s}}{\text{s}} = \frac{\text{m}}{\text{s}^2}$$

That is not a length, so the formula must be wrong. (Distance is speed **times** time.) This check is called {{dimensional|checking the units}}, and it catches many slips.

:::example
title: A force is measured in newtons (N), where $1\ \text{N} = 1\ \text{kg} \cdot \text{m/s}^2$. A 2 kg box speeds up by 3 m/s every second (3 m/s²). Multiply mass by this to find the force, and check the units.

1. Multiply the numbers: $2 \times 3 = 6$.
   why: Numbers and units can be handled separately.
   uses: []

2. Multiply the units: $\text{kg} \times \text{m/s}^2 = \text{kg} \cdot \text{m/s}^2$.
   why: Units multiply like letters.
   uses: []

3. That unit is exactly one newton, so the force is **6 N**.
   why: $\text{kg} \cdot \text{m/s}^2$ is the definition of a newton. Matching units show the answer is a force.
   uses: []
:::

:::practice
q: Write 250 nm in metres, using scientific notation.
answer: Nano means $10^{-9}$: $250 \times 10^{-9}$ m. Fix the front number: $2.5 \times 10^2 \times 10^{-9} =$ **$2.5 \times 10^{-7}$ m**.
:::

:::problems
q: What is the SI unit of time, and its symbol?
answer: **The second, s.**

q: What power of ten does the prefix kilo stand for?
answer: **$10^3$**, one thousand.

q: Write 4 kg in grams.
answer: Kilo means $10^3$, so 4 kg is $4 \times 10^3$ g, which is **4000 g**.

q: Write 7 ms (milliseconds) in seconds.
answer: Milli means $10^{-3}$: **$7 \times 10^{-3}$ s**, or 0.007 s.

q: Write 5 μm in metres.
answer: Micro means $10^{-6}$: **$5 \times 10^{-6}$ m**.

q: Write 3 nm in metres.
answer: Nano means $10^{-9}$: **$3 \times 10^{-9}$ m**.

q: The Earth's radius is about $6.4 \times 10^6$ m. Write it with a prefix.
answer: $10^6$ is mega: **6.4 Mm** (megametres). The same as 6400 km.

q: What are the SI units of speed?
answer: Distance in metres divided by time in seconds: **m/s**.

q: A rectangle is 3 m by 4 m. What is its area, with units?
answer: $3\ \text{m} \times 4\ \text{m} =$ **$12\ \text{m}^2$**.

q: A cyclist rides at 10 m/s for 5 s. How far do they go? Show the units cancel.
answer: $10\ \frac{\text{m}}{\text{s}} \times 5\ \text{s} = 50\ \text{m}$. The seconds cancel: **50 m**.

q: How long does it take to go 20 m at 4 m/s? Show the units.
answer: $\dfrac{20\ \text{m}}{4\ \text{m/s}} = 5\ \text{s}$. Dividing by "m per s" leaves s: **5 s**.

q: Someone claims "distance = speed ÷ time". Use units to show it is wrong.
answer: $\dfrac{\text{m/s}}{\text{s}} = \text{m/s}^2$, which is not a length (m). **The units do not match, so the formula is wrong.**

q: Energy is measured in joules, where $1\ \text{J} = 1\ \text{kg} \cdot \text{m}^2/\text{s}^2$. Is $\text{mass} \times \text{speed}^2$ an energy?
answer: $\text{kg} \times (\text{m/s})^2 = \text{kg} \cdot \text{m}^2/\text{s}^2$. **Yes, the units are joules.**
:::
