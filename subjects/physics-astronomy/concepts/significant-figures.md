---
id: significant-figures
title: Significant figures and precision
prereqs: [scientific-notation]
big: The digits you write in a measurement say how precisely you know it, so an answer should never claim more digits than the measurements behind it.
recap: Significant figures are the digits that carry real information. Leading zeros (as in 0.006) never count. Trailing zeros count only when there is a decimal point (5.00 has 3). When you multiply or divide, round the answer to the fewest significant figures of any measurement you used.
check:
  q: How many significant figures does 0.0250 have?
  options: ["3", "4", "2", "5"]
  answer: 0
  why: The leading zeros, 0.0, only place the decimal point, so they do not count. The 2 and 5 count. The last 0 comes after the decimal point at the end, so it says "measured to this digit" and counts. That is 3. 4 counts a leading zero. 2 drops the trailing zero. 5 counts every digit.
---

## Two rulers, two answers

Measure a pencil with a ruler marked only in centimetres. You can say it is about 14.6 cm: 14 marks, plus a guess of 0.6 more. Measure it with a ruler marked in millimetres and you might say 14.63 cm.

| Ruler | Reading | Digits you trust |
|---|---|---|
| centimetre marks | 14.6 cm | 1, 4 and a guessed 6 |
| millimetre marks | 14.63 cm | 1, 4, 6 and a guessed 3 |

*Notice: the better ruler earns one more digit. The number of digits tells you how good the measurement was.*

The digits that carry real information are called {{sig-fig|significant figures}}. A measurement's {{precision|precision}} is how fine its last digit is.

So 14.6 and 14.60 are **not** the same measurement. The second one claims you measured to a hundredth of a centimetre.

## Counting significant figures

| Rule | Example | Count |
|---|---|---|
| Non-zero digits always count. | 482 | 3 |
| Zeros between non-zero digits count. | 3.07 | 3 |
| Zeros at the front never count. | 0.0062 | 2 |
| Zeros at the end count when there is a decimal point. | 5.00 | 3 |
| Zeros at the end of a whole number are unclear. | 1500 | 2, 3 or 4 |

**Why the front zeros never count.** 0.0062 metres is the same length as 6.2 millimetres. Changing the unit removes the zeros, so they were only placing the decimal point. They say nothing about how carefully you measured.

**Why end zeros after a decimal point count.** Nobody needs to write 5.00. Writing it on purpose says "I measured, and the next two digits really were zero".

Scientific notation clears up the unclear case. $1.5 \times 10^3$ has 2 significant figures, and $1.500 \times 10^3$ has 4. In scientific notation, every digit in the front number counts.

## Rounding to a number of significant figures

To round to 3 significant figures, find the third one, then look at the digit after it. If that digit is 5 or more, round up. Otherwise, leave it.

- 2.718 to 3 significant figures: the first three are 2, 7, 1. The next digit is 8, so round up: **2.72**.
- 86,240 to 2 significant figures: the second is 6, the next is 2, so it stays: 86,000, best written $8.6 \times 10^4$.
- 0.004567 to 2 significant figures: the significant digits start at 4. The second is 5, the next is 6, so round up: **0.0046**.

## Multiplying and dividing

An answer can be no more precise than the roughest measurement in it. For multiplying and dividing, the rule is:

**Round the answer to the fewest significant figures of any number you used.**

$$4.2 \times 3.15 = 13.23 \;\Longrightarrow\; 13$$

4.2 has 2 significant figures and 3.15 has 3. The fewest is 2, so the answer is 13.

**Why it works.** 4.2 could really be anything from 4.15 to 4.25. Try both ends: $4.15 \times 3.15 \approx 13.07$ and $4.25 \times 3.15 \approx 13.39$. The answer is only certain to about 13. The extra digits in 13.23 are noise.

## Adding and subtracting

For adding and subtracting, the rule is about decimal places instead:

**Round the answer to the fewest decimal places of any number you used.**

$$12.11 + 0.3 = 12.41 \;\Longrightarrow\; 12.4$$

0.3 is only known to the tenths place, so the sum is too.

Keep all the digits while you work and round only the final answer. Rounding at each step lets small errors pile up. Counted numbers, like "3 apples", and defined numbers, like 100 cm in a metre, are exact and never limit your answer.^[n_exact_numbers]

:::example
title: A sprinter runs 100.0 m in 9.58 s. Find the average speed (distance divided by time) to the right number of significant figures.

1. Divide: $\dfrac{100.0}{9.58} = 10.4384\ldots$ metres per second.
   why: Speed is distance divided by time. Keep every digit for now.
   uses: [scientific-notation]

2. Count significant figures. 100.0 has 4 (the zeros are between digits or after the decimal point). 9.58 has 3.
   why: The answer can only be as precise as the least precise measurement.
   uses: []

3. The fewest is 3, so round to 3 significant figures. The third digit is 4, and the next digit is 3, so it stays.
   why: For dividing, the answer gets the fewest significant figures of the numbers used.
   uses: []

4. The speed is **10.4 m/s**.
   why: Writing 10.4384 would claim precision the stopwatch never had.
   uses: []
:::

:::practice
q: A box is 2.5 m long and 1.25 m wide. Find its floor area (length times width) to the right number of significant figures.
answer: $2.5 \times 1.25 = 3.125$. 2.5 has 2 significant figures and 1.25 has 3, so round to 2: **3.1 m²**.
:::

:::problems
q: How many significant figures does 482 have?
answer: All non-zero: **3**.

q: How many significant figures does 3.07 have?
answer: The zero is between two non-zero digits, so it counts: **3**.

q: How many significant figures does 0.0062 have?
answer: The front zeros do not count: **2** (the 6 and the 2).

q: How many significant figures does 5.00 have?
answer: The end zeros come after a decimal point, so they count: **3**.

q: How many significant figures does 0.0400 have?
answer: The front zeros do not count. The 4 counts, and the two end zeros come after the decimal point, so they count: **3**.

q: How many significant figures does $1.20 \times 10^3$ have?
answer: In scientific notation every digit of the front number counts: **3**.

q: Round 3.14159 to 3 significant figures.
answer: The first three are 3, 1, 4. The next digit is 1, less than 5, so it stays: **3.14**.

q: Round 0.004567 to 2 significant figures.
answer: The significant digits start at the 4. The first two are 4 and 5, and the next is 6, so round up: **0.0046**.

q: Round 86,240 to 2 significant figures.
answer: The first two are 8 and 6. The next is 2, so it stays: 86,000, best written **$8.6 \times 10^4$** so the count is clear.

q: Round 0.9996 to 3 significant figures.
answer: The first three are 9, 9, 9 and the next is 6, so round up. That carries all the way: **1.00** (three significant figures: 1, 0, 0).

q: Work out $4.2 \times 3.15$ to the right number of significant figures.
answer: $4.2 \times 3.15 = 13.23$. The fewest significant figures is 2 (from 4.2): **13**.

q: Work out $9.80 \times 2.0$ to the right number of significant figures.
answer: $9.80 \times 2.0 = 19.6$. The fewest is 2 (from 2.0), so it rounds to 20. Write it as **$2.0 \times 10^1$**, because "20" on its own does not show 2 significant figures.

q: Work out $\dfrac{12.0}{3.0}$ to the right number of significant figures.
answer: $12.0 \div 3.0 = 4$. The fewest is 2 (from 3.0), so write **4.0**.

q: Work out $12.11 + 0.3$ to the right precision.
answer: $12.41$. 0.3 has only one decimal place, so round to one: **12.4**.

q: Work out $100.5 - 2.25$ to the right precision.
answer: $98.25$. 100.5 has one decimal place, so round to one. The next digit is 5, so round up: **98.3**.

q: A runner covers 100.0 m in 12.3 s. Find the average speed to the right number of significant figures.
answer: $100.0 \div 12.3 = 8.1300\ldots$. 12.3 has 3 significant figures, so round to 3: **8.13 m/s**.

q: Why would a scientist write a length as 2.50 m instead of 2.5 m?
answer: **2.50 says the length was measured to the nearest hundredth of a metre (centimetre) and the last digit really was 0.** 2.5 only claims the nearest tenth.
:::
