---
id: power-rule
title: The power rule
prereqs: [derivative, negative-fractional-exponents]
big: To differentiate x to a power, bring the power down in front and lower it by one.
recap: $\dfrac{d}{dx} x^n = n x^{n-1}$. Bring the {{exponent|exponent}} down in front and subtract 1 from it. This works for any exponent, including negative and fraction ones.
check:
  q: What is the derivative of $x^6$?
  options: ["$6x^5$", "$x^5$", "$6x^6$", "$5x^6$"]
  answer: 0
  why: Bring the 6 down and lower the exponent by one: $6x^5$.
---

## The rule

Working out the [[derivative|derivative]] from the limit definition every time is slow. For powers of x there is a shortcut:

$$\frac{d}{dx}\, x^n = n \cdot x^{n-1}$$

In words: bring the {{exponent|exponent}} down in front, then reduce the exponent by 1.

| function | $x^2$ | $x^3$ | $x^5$ | $x$ | $7$ |
|---|---|---|---|---|---|
| derivative | $2x$ | $3x^2$ | $5x^4$ | $1$ | $0$ |

The first column matches what the definition gave for $x^2$ on the derivative page. A plain number like 7 never changes, so its slope is 0.

## Any power at all

The rule also works when the power is negative or a fraction. First write the function as a power of x, using [[negative-fractional-exponents|negative and fractional exponents]]. Then use the rule as usual.

| function | as a power | derivative |
|---|---|---|
| $\dfrac{1}{x}$ | $x^{-1}$ | $-1 \cdot x^{-2} = -\dfrac{1}{x^2}$ |
| $\sqrt{x}$ | $x^{1/2}$ | $\tfrac{1}{2} x^{-1/2} = \dfrac{1}{2\sqrt{x}}$ |

*Notice: lowering $-1$ by one gives $-2$, not 0. Lowering $\tfrac{1}{2}$ by one gives $-\tfrac{1}{2}$.*

## Two helper rules

- A {{coeff|coefficient}} just rides along: $\dfrac{d}{dx}(3x^4) = 3 \cdot 4x^3 = 12x^3$.
- Add and subtract term by term: $\dfrac{d}{dx}(x^3 + x^2) = 3x^2 + 2x$.

The power rule only handles a bare x. Something like $(3x + 1)^4$ needs the [[chain-rule|chain rule]] too.

:::example
title: Find the derivative of $f(x) = 3x^4 + 2x$.

1. Treat the two terms separately.
   why: Derivatives add term by term.
   uses: [derivative]

2. First term: $3x^4 \to 3 \cdot 4x^3 = 12x^3$.
   why: Bring down the 4, lower the exponent to 3, keep the coefficient 3.
   uses: []

3. Second term: $2x \to 2 \cdot 1 = 2$.
   why: $x$ is $x^1$, so its derivative is $1 \cdot x^0 = 1$.
   uses: [exponents]

4. Add: $f'(x) = 12x^3 + 2$.
   why: The derivative of a sum is the sum of the derivatives.
   uses: []
:::

:::practice
q: Differentiate $5x^3 - x^2$.
answer: $15x^2 - 2x$.
:::
