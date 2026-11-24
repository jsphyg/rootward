---
id: scientific-notation
title: Scientific notation
prereqs: [calculus:negative-fractional-exponents]
big: Scientific notation writes any number as a number between 1 and 10 times a power of ten, so huge and tiny numbers are short and easy to compare.
recap: A number in scientific notation looks like $a \times 10^n$, where a is at least 1 and less than 10. A positive n means a big number ($3 \times 10^4 = 30{,}000$). A negative n means a small one ($3 \times 10^{-4} = 0.0003$). To multiply, multiply the front numbers and add the powers.
check:
  q: Write $0.00045$ in scientific notation.
  options: ["$4.5 \times 10^{-4}$", "$4.5 \times 10^{4}$", "$4.5 \times 10^{-3}$", "$4.5 \times 10^{-5}$"]
  answer: 0
  why: To turn 0.00045 into 4.5, the decimal point moves 4 places to the right. The number is small, so the power is negative: $4.5 \times 10^{-4}$. $10^{4}$ would make it 45,000, a big number. $10^{-3}$ and $10^{-5}$ come from counting the places wrong: count the jumps the point makes, not the zeros.
---

## Numbers that are too long to write

Physics and astronomy deal with numbers far bigger and far smaller than everyday life:

| Thing | Ordinary number | Scientific notation |
|---|---|---|
| Mass of the Earth | 5,970,000,000,000,000,000,000,000 kg | $5.97 \times 10^{24}$ kg |
| Distance from the Earth to the Sun | 150,000,000 km | $1.5 \times 10^{8}$ km |
| Width of a hydrogen atom | about 0.0000000001 m | about $1 \times 10^{-10}$ m |

*Notice: the right-hand column is short, and the power of ten tells you the size at a glance.*

Counting all those zeros is slow and easy to get wrong. Scientific notation fixes that.

## The form

A number in scientific notation has two parts:

$$a \times 10^n$$

- The front number, a, is at least 1 and less than 10. It holds the digits.
- The {{power-of-ten|power of ten}}, $10^n$, holds the size.

So $1.5 \times 10^8$ is fine, but $15 \times 10^7$ is not in the form, because 15 is bigger than 10. Both are the same number. The rule just makes sure everyone writes it one way.

## Powers of ten

| Power | Value |
|---|---|
| $10^3$ | 1000 |
| $10^2$ | 100 |
| $10^1$ | 10 |
| $10^0$ | 1 |
| $10^{-1}$ | 0.1 |
| $10^{-2}$ | 0.01 |
| $10^{-3}$ | 0.001 |

*Notice: the power says how many places the 1 sits from the decimal point. Positive powers are big numbers. Negative powers are small numbers.*

Negative powers are "one over" a positive power, so $10^{-3} = \frac{1}{10^3} = \frac{1}{1000} = 0.001$.

## Big numbers into scientific notation

Take 72,000,000.

1. Move the decimal point until one non-zero digit is in front of it: 7.2.
2. Count the jumps. The point moved 7 places to the left.
3. The number was big, so the power is positive: $7.2 \times 10^7$.

**Why it works.** Moving the point 7 places left divides by $10^7$. Multiplying by $10^7$ puts it back. So $7.2 \times 10^7$ is the same number.

## Small numbers into scientific notation

Take 0.0062.

1. Move the point to get one non-zero digit in front: 6.2.
2. The point moved 3 places to the right.
3. The number was small (less than 1), so the power is negative: $6.2 \times 10^{-3}$.

To go back to an ordinary number, move the point the other way. $3.6 \times 10^4$: move it 4 places right, filling with zeros, to get 36,000. $9.1 \times 10^{-3}$: move it 3 places left to get 0.0091.

## Multiplying and dividing

To multiply, multiply the front numbers and add the powers:

$$(3 \times 10^4) \times (2 \times 10^5) = (3 \times 2) \times 10^{4 + 5} = 6 \times 10^9$$

To divide, divide the front numbers and subtract the powers:

$$\frac{8 \times 10^6}{2 \times 10^2} = \frac{8}{2} \times 10^{6 - 2} = 4 \times 10^4$$

**Why it works.** The order of multiplying does not matter, so you can group the front numbers together and the powers together. Powers of the same number multiply by adding their exponents, and divide by subtracting them.

Sometimes the front number lands outside 1 to 10. Fix it by moving one factor of ten into the power:

$$(4 \times 10^3) \times (5 \times 10^2) = 20 \times 10^5 = 2 \times 10^1 \times 10^5 = 2 \times 10^6$$

## Adding and subtracting

Adding needs the **same** power first, just as you can only add apples to apples:

$$3 \times 10^4 + 5 \times 10^3 = 30 \times 10^3 + 5 \times 10^3 = 35 \times 10^3 = 3.5 \times 10^4$$

Calculators often show scientific notation with an E, so $6.02 \times 10^{23}$ appears as 6.02E23.^[n_e_notation]

:::example
title: Light travels about $3.0 \times 10^5$ km each second. The Sun is about $1.5 \times 10^8$ km away. How many seconds does sunlight take to reach the Earth? (Divide the distance by the distance covered each second.)

1. Write the division: $\dfrac{1.5 \times 10^8}{3.0 \times 10^5}$.
   why: The number of seconds is how many times $3.0 \times 10^5$ km fits into the whole distance.
   uses: []

2. Divide the front numbers: $\dfrac{1.5}{3.0} = 0.5$.
   why: Front numbers and powers of ten can be handled separately.
   uses: []

3. Subtract the powers: $10^{8 - 5} = 10^3$. So far: $0.5 \times 10^3$.
   why: Dividing powers of the same number subtracts their exponents.
   uses: [calculus:negative-fractional-exponents]

4. Fix the front number: $0.5 = 5 \times 10^{-1}$, so $0.5 \times 10^3 = 5 \times 10^{-1} \times 10^3 = 5 \times 10^2$.
   why: The front number must be at least 1. Moving one factor of ten into the power fixes it.
   uses: []

5. $5 \times 10^2$ is **500 seconds**, a little over 8 minutes.
   why: Turning it back into an ordinary number makes the size easy to feel. The sunlight you see left the Sun about 8 minutes ago.
   uses: []
:::

:::practice
q: Work out $(6 \times 10^{-3}) \times (4 \times 10^{7})$ and give the answer in scientific notation.
answer: Front numbers: $6 \times 4 = 24$. Powers: $10^{-3 + 7} = 10^4$. So $24 \times 10^4 = 2.4 \times 10^1 \times 10^4 =$ **$2.4 \times 10^5$**.
:::

:::problems
q: Write 5000 in scientific notation.
answer: The point moves 3 places left to give 5: **$5 \times 10^3$**.

q: Write 72,000,000 in scientific notation.
answer: The point moves 7 places left to give 7.2: **$7.2 \times 10^7$**.

q: Write 0.003 in scientific notation.
answer: The point moves 3 places right to give 3. Small number, negative power: **$3 \times 10^{-3}$**.

q: Write 0.000081 in scientific notation.
answer: The point moves 5 places right to give 8.1: **$8.1 \times 10^{-5}$**.

q: Write $3.6 \times 10^4$ as an ordinary number.
answer: Move the point 4 places right: **36,000**.

q: Write $9.1 \times 10^{-3}$ as an ordinary number.
answer: Move the point 3 places left: **0.0091**.

q: Write $2.5 \times 10^{-1}$ as an ordinary number.
answer: Move the point 1 place left: **0.25**.

q: $45 \times 10^6$ is not in scientific notation. Fix it.
answer: $45 = 4.5 \times 10^1$, so $4.5 \times 10^1 \times 10^6 =$ **$4.5 \times 10^7$**.

q: $0.3 \times 10^{-2}$ is not in scientific notation. Fix it.
answer: $0.3 = 3 \times 10^{-1}$, so $3 \times 10^{-1} \times 10^{-2} =$ **$3 \times 10^{-3}$**.

q: Work out $(2 \times 10^3) \times (4 \times 10^5)$.
answer: $2 \times 4 = 8$ and $3 + 5 = 8$: **$8 \times 10^8$**.

q: Work out $(5 \times 10^4) \times (6 \times 10^3)$.
answer: $5 \times 6 = 30$ and $10^{4+3} = 10^7$, so $30 \times 10^7$. Fix: **$3 \times 10^8$**.

q: Work out $(3 \times 10^{-2}) \times (2 \times 10^5)$.
answer: $3 \times 2 = 6$ and $-2 + 5 = 3$: **$6 \times 10^3$**.

q: Work out $\dfrac{9 \times 10^8}{3 \times 10^2}$.
answer: $9 \div 3 = 3$ and $8 - 2 = 6$: **$3 \times 10^6$**.

q: Work out $\dfrac{2 \times 10^3}{8 \times 10^{-2}}$.
answer: $2 \div 8 = 0.25$ and $3 - (-2) = 5$, so $0.25 \times 10^5$. Fix: $0.25 = 2.5 \times 10^{-1}$, giving **$2.5 \times 10^4$**.

q: Work out $3 \times 10^4 + 5 \times 10^3$.
answer: Make the powers match: $30 \times 10^3 + 5 \times 10^3 = 35 \times 10^3 =$ **$3.5 \times 10^4$**. Check: $30{,}000 + 5000 = 35{,}000$.

q: Which is bigger, $4 \times 10^{-3}$ or $9 \times 10^{-4}$?
answer: Compare the powers first. $10^{-3}$ is bigger than $10^{-4}$, so **$4 \times 10^{-3}$** is bigger. As ordinary numbers: 0.004 and 0.0009.

q: The Earth's mass is about $6.0 \times 10^{24}$ kg. The Moon's is about $7.3 \times 10^{22}$ kg. About how many times heavier is the Earth?
answer: Divide: $\dfrac{6.0}{7.3} \approx 0.82$ and $10^{24 - 22} = 10^2$. So $0.82 \times 10^2 = 82$. The Earth is **about 82 times** heavier.

q: Light travels $3.0 \times 10^8$ metres each second. A year is about $3.2 \times 10^7$ seconds. About how far does light travel in a year?
answer: Multiply: $3.0 \times 3.2 = 9.6$ and $10^{8 + 7} = 10^{15}$. **About $9.6 \times 10^{15}$ metres.** This distance is called a light-year.
:::
