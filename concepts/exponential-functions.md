---
id: exponential-functions
title: Exponential functions
prereqs: [negative-fractional-exponents, functions]
big: An exponential function has x in the exponent, like $2^x$. It grows or shrinks by the same factor at every step, not by the same amount.
recap: An {{exponential|exponential function}} looks like $f(x) = a \cdot b^x$. Start at a, then multiply by b for every step of 1 in x. If b is bigger than 1 it grows. If b is between 0 and 1 it shrinks. The most important base is $e \approx 2.718$.
check:
  q: If $f(x) = 3 \cdot 2^x$, what is $f(3)$?
  options: ["24", "216", "18", "27"]
  answer: 0
  why: The exponent belongs only to the 2, so work it out first. $2^3 = 8$, then $3 \cdot 8 = 24$. Getting 216 means $3 \cdot 2$ was done first, giving $6^3$. Getting 18 treats $2^x$ as $2x$, which is $2 \cdot 3 = 6$. Getting 27 swaps the base and the exponent, giving $3 \cdot 3^2$.
---

## Adding versus multiplying

Compare two rules, stepping x up by 1 each time:

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $2x + 1$ | 1 | 3 | 5 | 7 | 9 | 11 |
| $2^x$ | 1 | 2 | 4 | 8 | 16 | 32 |

*Notice: the first rule **adds** 2 at every step. The second **multiplies** by 2 at every step. It starts slower, then races ahead.*

A function that multiplies by the same number at every step is an {{exponential|exponential function}}. The variable x sits up in the [[exponents|exponent]], counting how many times you have multiplied.

## The general form

$$f(x) = a \cdot b^x$$

- **a is the starting value.** At $x = 0$, $b^0 = 1$, so $f(0) = a$.
- **b is the growth factor.** Each step of 1 in x multiplies the output by b.

**Why it works.** Going from x to $x + 1$ adds one more b to the row of b's being multiplied: $b^{x+1} = b^x \cdot b$. So the output is multiplied by b once more. The [[exponents|exponent rule]] $b^{x+1} = b^x \cdot b^1$ says exactly this.

**The most common slip.** $2^x$ is not $x^2$.

- $x^2$: the base changes and the exponent stays at 2. At $x = 10$ it is 100.
- $2^x$: the base stays at 2 and the exponent changes. At $x = 10$ it is 1024.

Sooner or later, an exponential with a base above 1 overtakes every power of x.

## Growth and decay

:::widget exp-slider

- **If b is bigger than 1, the function grows.** $2^x$ doubles at every step.
- **If b is between 0 and 1, the function shrinks.** This is called decay. $\left(\tfrac{1}{2}\right)^x$ halves at every step.
- **b must be positive.**^[n_base_positive]

A medicine dose of 80 mg that halves every hour leaves $80 \cdot \left(\tfrac{1}{2}\right)^t$ mg after t hours. After 3 hours that is $80 \cdot \tfrac{1}{8} = 10$ mg.

**Percentages become growth factors.** Growing by 5% means keeping all of the old amount (100%) and adding 5% more: 105% of it, or 1.05 times it. So 1000 dollars growing 5% a year becomes $1000 \cdot 1.05^t$. Shrinking by 15% leaves 85%, a factor of 0.85.

## Any input at all

x does not have to be a whole number. [[negative-fractional-exponents|Negative and fractional exponents]] give the in-between and below-zero values:

| $x$ | $-2$ | $-1$ | 0 | $\tfrac{1}{2}$ | 1 |
|---|---|---|---|---|---|
| $2^x$ | $\tfrac{1}{4}$ | $\tfrac{1}{2}$ | 1 | $\sqrt{2} \approx 1.414$ | 2 |

So the graph is one smooth curve. It has a shape worth remembering:

- It is always above the x-axis. Multiplying positive numbers never gives zero or a negative.
- It crosses the y-axis at a (here 1).
- Going left, it creeps toward 0 but never reaches it. Each step left halves it again.

## The special number e

One base matters more than any other in calculus. It is called e, and it is about 2.718.

It appears when growth happens in smaller and smaller pieces. Put 1 dollar in a bank paying 100% interest a year. Paid once a year, you get 2 dollars. Paid in n smaller pieces through the year, you get $\left(1 + \tfrac{1}{n}\right)^n$:

| payments per year, n | 1 | 2 | 12 | 365 | 1,000,000 |
|---|---|---|---|---|---|
| dollars after a year | 2 | 2.25 | 2.613 | 2.7146 | 2.71828 |

*Notice: more payments help less and less. The total closes in on one number, 2.71828…, and that number is e.*^[n_e]

**Why e matters.** The function $e^x$ has a special property: at every point, its slope equals its own height. A later page proves this. It makes $e^x$ the natural choice whenever something grows at a rate that matches its size.

## Why calculus cares

Many things change at a rate that depends on how much there already is. More bacteria make more bacteria. More money earns more interest. More radioactive atoms give more decays. All of these follow exponential functions, and calculus is the tool for their rates of change.

:::example
title: A colony of 500 bacteria doubles every 3 hours. Write a formula, then find the size after 12 hours.

1. Find the starting value and growth factor: $a = 500$, and the factor is 2 for every 3 hours.
   why: The start is the amount at time 0. "Doubles" means multiply by 2.
   uses: []

2. Count the doublings in t hours: $\dfrac{t}{3}$. So $P(t) = 500 \cdot 2^{t/3}$.
   why: The exponent counts how many times you multiply by 2. One doubling takes 3 hours.
   uses: [exponents]

3. Check the formula at $t = 3$: $500 \cdot 2^1 = 1000$. That is one doubling, as it should be.
   why: A quick test that the exponent counts correctly.
   uses: [functions]

4. Plug in $t = 12$: $P(12) = 500 \cdot 2^{12/3} = 500 \cdot 2^4$.
   why: 12 hours is 4 doublings.
   uses: [functions]

5. Work it out: $2^4 = 16$, and $500 \cdot 16 = 8000$ bacteria.
   why: Do the power first, then multiply by the starting value.
   uses: [exponents]
:::

:::practice
q: A car worth 20,000 dollars loses 15% of its value every year. Write a formula for its value, and find the value after 2 years.
answer: Losing 15% leaves 85%, so the factor is 0.85: $V(t) = 20000 \cdot 0.85^t$. After 2 years: $0.85^2 = 0.7225$, and $20000 \cdot 0.7225 =$ **14,450 dollars**.
:::

:::problems
q: Let $f(x) = 2^x$. Find $f(0)$, $f(3)$ and $f(-1)$.
answer: **$f(0) = 1$**, **$f(3) = 8$**, **$f(-1) = \tfrac{1}{2}$**.

q: Let $f(x) = 5 \cdot 3^x$. Find $f(2)$.
answer: Power first: $3^2 = 9$. Then $5 \cdot 9 =$ **45**.

q: Let $f(x) = 100 \cdot \left(\tfrac{1}{2}\right)^x$. Find $f(3)$.
answer: $\left(\tfrac{1}{2}\right)^3 = \tfrac{1}{8}$, and $100 \cdot \tfrac{1}{8} =$ **12.5**.

q: Growth or decay? $4 \cdot 0.9^x$ and $0.5 \cdot 1.2^x$.
answer: **$4 \cdot 0.9^x$ decays**, because $0.9$ is between 0 and 1. **$0.5 \cdot 1.2^x$ grows**, because 1.2 is bigger than 1. The number in front only sets the start.

q: Write the growth factor for: growing 10% a step; shrinking 25% a step.
answer: Growing 10% keeps 100% and adds 10%: **1.1**. Shrinking 25% leaves 75%: **0.75**.

q: Let $f(x) = 4^x$. Find $f\!\left(\tfrac{1}{2}\right)$ and $f(-2)$.
answer: $4^{1/2} = \sqrt{4} =$ **2**. $4^{-2} = \dfrac{1}{16}$, so **$\tfrac{1}{16}$**.

q: An exponential $f(x) = a \cdot b^x$ has $f(0) = 3$ and $f(1) = 6$. Find a, b and $f(4)$.
answer: $f(0) = a$, so $a = 3$. One step multiplies by b, and $6 \div 3 = 2$, so $b = 2$. Then $f(4) = 3 \cdot 2^4 = 3 \cdot 16 =$ **48**.

q: 2000 dollars grows 3% a year. Write a formula, and find the amount after 2 years.
answer: Factor 1.03: **$A(t) = 2000 \cdot 1.03^t$**. $1.03^2 = 1.0609$, so $A(2) = 2000 \cdot 1.0609 =$ **2121.80 dollars**.

q: 200 bacteria triple every 4 hours. Write a formula, and find the number after 8 hours.
answer: In t hours there are $\dfrac{t}{4}$ triplings: **$P(t) = 200 \cdot 3^{t/4}$**. At $t = 8$: $3^{8/4} = 3^2 = 9$, so $200 \cdot 9 =$ **1800**.

q: 160 g of a substance halves every 5 years. How much is left after 15 years?
answer: In t years there are $\dfrac{t}{5}$ halvings: $160 \cdot \left(\tfrac{1}{2}\right)^{t/5}$. At $t = 15$ that is 3 halvings: $160 \cdot \tfrac{1}{8} =$ **20 g**.
:::
