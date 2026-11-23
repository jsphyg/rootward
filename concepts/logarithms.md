---
id: logarithms
title: Logarithms
prereqs: [exponential-functions, inverse-functions]
big: A logarithm answers the question "what power?". $\log_b x$ is the exponent you put on b to get x. It undoes the exponential function.
recap: $\log_b x = y$ means $b^y = x$. So $\log_2 8 = 3$, because $2^3 = 8$. The {{log|logarithm}} is the inverse of $b^x$. The natural log, $\ln x$, uses base $e \approx 2.718$.
check:
  q: What is $\log_3 81$?
  options: ["4", "27", "9", "243"]
  answer: 0
  why: The question is "3 to what power gives 81?" $3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81$, so the answer is 4. Getting 27 divides 81 by 3. Getting 9 takes the square root. Getting 243 multiplies 81 by 3. A logarithm is none of those. It counts how many 3's multiply to make 81.
---

## The question in reverse

An exponent answers "what do I get?". $2^3 = 8$. Turn that around: "2 to **what power** gives 8?" The answer, 3, is a logarithm.

Powers of 10 show the idea clearly:

| number | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|
| as a power of 10 | $10^0$ | $10^1$ | $10^2$ | $10^3$ | $10^4$ |
| log base 10 | 0 | 1 | 2 | 3 | 4 |

*Notice: the base-10 log of these numbers just counts the zeros. It tells you how many 10's were multiplied together.*

## What the notation means

$$\log_b x = y \quad \text{means exactly the same as} \quad b^y = x$$

Read $\log_b x$ as "log base b of x". The small b is the base. The logarithm is the exponent.

So $\log_2 8 = 3$ because $2^3 = 8$, and $\log_5 25 = 2$ because $5^2 = 25$. It works with [[negative-fractional-exponents|negative exponents]] too: $\log_2 \tfrac{1}{8} = -3$, because $2^{-3} = \tfrac{1}{8}$.

**How to work one out.** Rewrite the log as a power question, then answer the question. $\log_{10} 1000$ asks "10 to what power is 1000?" The answer is 3.

## The undo of an exponential

$b^x$ takes an exponent and gives a number. $\log_b x$ takes the number and gives back the exponent. So the logarithm is the [[inverse-functions|inverse]] of the exponential. Each undoes the other:

$$\log_b\!\left(b^x\right) = x \qquad \text{and} \qquad b^{\log_b x} = x$$

For example, $\log_2(2^5) = 5$, and $2^{\log_2 32} = 2^5 = 32$.

**Only positive inputs.** $b^y$ is always positive. So "b to what power gives 0?" or "gives $-4$?" has no answer. The log of zero or a negative number is not defined.

:::widget plot
fn: Math.log2(x)
x: -1.8 9.8
y: -2.5 3.8
points: 1,0; 2,1; 4,2; 8,3
labels: left
label: y = log₂ x
caption: Doubling the input adds 1 to the output: 1, 2, 4, 8 give 0, 1, 2, 3. The curve rises ever more slowly, and there is nothing at all for x of 0 or less.
:::

## Three rules, borrowed from exponents

A log is an exponent. So every rule for exponents has a matching rule for logs.

| exponent rule | log rule | in words |
|---|---|---|
| $b^m \cdot b^n = b^{m+n}$ | $\log_b(xy) = \log_b x + \log_b y$ | multiplying inside becomes adding outside |
| $\dfrac{b^m}{b^n} = b^{m-n}$ | $\log_b \dfrac{x}{y} = \log_b x - \log_b y$ | dividing inside becomes subtracting outside |
| $(b^m)^n = b^{mn}$ | $\log_b(x^n) = n \log_b x$ | a power inside comes down in front |

**Why the first rule works.** Check it with base 2. $\log_2 8 = 3$ and $\log_2 4 = 2$. Now $8 \cdot 4 = 32 = 2^5$, so $\log_2 32 = 5$. That is $3 + 2$. Multiplying two powers of 2 adds their exponents, and logs are those exponents.

**The most common slips.**

- $\log(x + y)$ is **not** $\log x + \log y$. The rule is for multiplying inside, not adding.
- $\dfrac{\log x}{\log y}$ is **not** $\log \dfrac{x}{y}$. The rule turns a log of a fraction into a subtraction, not a division.

## The natural log

The most important base in calculus is e, about 2.718, the base from the [[exponential-functions|exponential functions]] page. The log with base e has its own name and symbol:

$$\ln x = \log_e x$$

Read it as "natural log of x". So $\ln e = 1$ and $\ln 1 = 0$. On most calculators, the **ln** key is base e and the **log** key is base 10.^[n_change_base]

## Why calculus cares

- **Solving for an exponent.** When the unknown is up in the exponent, a log brings it down. The example below does this.
- **A simple slope.** The slope of $\ln x$ turns out to be just $\dfrac{1}{x}$. A later page shows why.
- **Shrinking huge ranges.** Logs turn multiplying into adding, so they squash numbers from tiny to enormous onto one manageable scale.^[n_scales]

:::example
title: Money grows 5% a year. How long until it doubles?

1. Set it up. 5% growth is a factor of 1.05, so after t years the amount is multiplied by $1.05^t$. Doubling means $1.05^t = 2$.
   why: The starting amount cancels out, so only the growth factor matters.
   uses: [exponential-functions]

2. Take the natural log of both sides: $\ln(1.05^t) = \ln 2$.
   why: The unknown t is stuck in the exponent. A log is the tool that brings exponents down.
   uses: [inverse-functions]

3. Bring the power down in front: $t \ln 1.05 = \ln 2$.
   why: The third log rule: a power inside comes down in front.
   uses: []

4. Divide: $t = \dfrac{\ln 2}{\ln 1.05} \approx \dfrac{0.6931}{0.04879} \approx 14.2$ years.
   why: Divide both sides by $\ln 1.05$ to get t on its own. A calculator gives the two logs.
   uses: []

5. Check: $1.05^{14.2} \approx 2.00$. It doubles in a little over 14 years.
   why: Putting the answer back into the original equation confirms it.
   uses: [exponential-functions]
:::

:::practice
q: Solve $2^x = 40$. First say which two whole numbers x lies between.
answer: $2^5 = 32$ and $2^6 = 64$, so x is between 5 and 6. Take ln of both sides: $x \ln 2 = \ln 40$, so $x = \dfrac{\ln 40}{\ln 2} \approx \dfrac{3.689}{0.6931} \approx$ **5.32**. That is between 5 and 6, as expected.
:::
