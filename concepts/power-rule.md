---
id: power-rule
title: The power rule
prereqs: [derivative, negative-fractional-exponents]
big: To find the derivative of x to a power, bring the power down in front, then lower the power by one.
recap: $\dfrac{d}{dx} x^n = n x^{n-1}$. Bring the {{exponent|exponent}} down to multiply in front, then subtract 1 from it. This works for any power, including negative and fraction powers.
check:
  q: What is the derivative of $x^6$?
  options: ["$6x^5$", "$6x^6$", "$x^5$", "$5x^5$"]
  answer: 0
  why: Bring the 6 down in front, then lower the exponent from 6 to 5. That gives $6x^5$. $6x^6$ forgot to lower the exponent. $x^5$ forgot to bring the 6 down. $5x^5$ brought down the new exponent instead of the old one.
---

## A pattern

Working a [[derivative|derivative]] out from the limit every time is slow. So look at some answers side by side. Each one can be found with the definition, the way $x^2$ was:

| function | $x$ | $x^2$ | $x^3$ | $x^4$ |
|---|---|---|---|---|
| derivative | $1$ | $2x$ | $3x^2$ | $4x^3$ |

*Notice: the old exponent always ends up in front, and the new exponent is one less than the old one.*

## The rule

$$\frac{d}{dx}\, x^n = n \cdot x^{n-1}$$

The symbol $\dfrac{d}{dx}$ means "the derivative of what follows, as x changes".^[n_notation] In words:

1. Bring the exponent down in front, to multiply.
2. Lower the exponent by 1.

So $x^7$ becomes $7x^6$, and $x^{10}$ becomes $10x^9$.

## Why it works

Take $x^3$. The definition needs $(x + h)^3$, which [[expanding|expands]] to

$$(x + h)^3 = x^3 + 3x^2 h + 3x h^2 + h^3$$

Take away $x^3$ to get the rise, then divide by the run h:

$$\frac{3x^2 h + 3x h^2 + h^3}{h} = 3x^2 + 3xh + h^2$$

As h heads to 0, the terms with an h vanish. Only $3x^2$ is left. That is the rule's answer.

The same thing happens for any whole number n. $(x + h)^n$ is n brackets multiplied together. Every term with two or more h's still has an h after dividing, so it vanishes. The terms that matter have exactly one h: pick h from one bracket and x from all the others. There are n brackets to pick from, so there are n such terms, each equal to $x^{n-1} h$. Together they make $n x^{n-1} h$. Divide by h, and $n x^{n-1}$ is what survives.

## Two special cases

- **A plain x.** $x = x^1$, so its derivative is $1 \cdot x^0 = 1$. That makes sense: the line $y = x$ has slope 1 everywhere.
- **A plain number.** $7 = 7x^0$, so its derivative is $7 \cdot 0 \cdot x^{-1} = 0$. That makes sense too: $y = 7$ is a flat line, and a flat line has slope 0.

## Any power at all

The rule also works when the power is negative or a fraction.^[n_any_power] First rewrite the function as a power of x, using [[negative-fractional-exponents|negative and fractional exponents]]. Then use the rule as usual.

| function | as a power | derivative | tidied up |
|---|---|---|---|
| $\dfrac{1}{x}$ | $x^{-1}$ | $-1 \cdot x^{-2}$ | $-\dfrac{1}{x^2}$ |
| $\dfrac{1}{x^3}$ | $x^{-3}$ | $-3x^{-4}$ | $-\dfrac{3}{x^4}$ |
| $\sqrt{x}$ | $x^{1/2}$ | $\tfrac{1}{2} x^{-1/2}$ | $\dfrac{1}{2\sqrt{x}}$ |

*Notice: lowering $-1$ by one gives $-2$, not 0. Lowering $\tfrac{1}{2}$ by one gives $-\tfrac{1}{2}$.*

## A number in front, and sums

- **A number in front rides along.** $\dfrac{d}{dx}(3x^4) = 3 \cdot 4x^3 = 12x^3$. Why: multiplying a function by 3 makes every rise 3 times as big, while the run stays the same. So every slope is 3 times as big.
- **Sums go term by term.** $\dfrac{d}{dx}(x^3 + x^2) = 3x^2 + 2x$. Why: the rise of a sum is the sum of the rises, so the slopes add too.

## What the rule does not cover

The power rule needs a **bare x** raised to a **fixed number**.

- $(3x + 1)^4$ has a bracket in place of the bare x. That needs the [[chain-rule|chain rule]].
- $2^x$ has x in the exponent. That is a different kind of function, with its own rule.

:::example
title: Find the derivative of $f(x) = 4x^3 - \dfrac{2}{x} + 5$.

1. Rewrite every term as a power of x: $f(x) = 4x^3 - 2x^{-1} + 5$.
   why: The power rule only works on powers, so $\dfrac{1}{x}$ must become $x^{-1}$ first.
   uses: [negative-fractional-exponents]

2. First term: $4x^3$ becomes $4 \cdot 3x^2 = 12x^2$.
   why: Bring the 3 down, lower it to 2. The 4 in front rides along.
   uses: []

3. Second term: $-2x^{-1}$ becomes $-2 \cdot (-1)x^{-2} = 2x^{-2}$.
   why: Bring the $-1$ down and lower it to $-2$. A minus times a minus is a plus.
   uses: []

4. Third term: the plain number 5 becomes 0.
   why: A constant never changes, so its slope is 0.
   uses: []

5. Add the pieces and tidy up: $f'(x) = 12x^2 + \dfrac{2}{x^2}$.
   why: Sums go term by term. $x^{-2}$ is $\dfrac{1}{x^2}$.
   uses: [negative-fractional-exponents]

6. Check at $x = 1$. The rule says $f'(1) = 12 + 2 = 14$. A tiny step: $f(1) = 7$ and $f(1.001) \approx 7.01401$. Rise over run is $0.01401 \div 0.001 \approx 14.01$. Close to 14.
   why: A quick secant slope confirms the answer.
   uses: [derivative]
:::

:::practice
q: Find the derivative of $x^4 + 6\sqrt{x}$.
answer: Rewrite: $x^4 + 6x^{1/2}$. Then $4x^3 + 6 \cdot \tfrac{1}{2} x^{-1/2} = 4x^3 + 3x^{-1/2}$, which is **$4x^3 + \dfrac{3}{\sqrt{x}}$**.
:::

:::problems
q: Find the derivative of $x^5$.
answer: **$5x^4$**.

q: Find the derivative of $x^9$.
answer: **$9x^8$**.

q: Find the derivatives of $x$ and of $12$.
answer: $x = x^1$ gives $1 \cdot x^0 =$ **1**. A plain number gives **0**.

q: Find the derivative of $4x^3$.
answer: The 4 rides along: $4 \cdot 3x^2 =$ **$12x^2$**.

q: Find the derivative of $-2x^5$.
answer: $-2 \cdot 5x^4 =$ **$-10x^4$**.

q: Find the derivative of $x^3 + x^2 + x$.
answer: Term by term: **$3x^2 + 2x + 1$**.

q: Find the derivative of $3x^4 - 5x^2 + 7$.
answer: $12x^3 - 10x + 0$: **$12x^3 - 10x$**.

q: Find the derivative of $\dfrac{1}{x^2}$.
answer: Rewrite: $x^{-2}$. Then $-2x^{-3}$, which is **$-\dfrac{2}{x^3}$**.

q: Find the derivative of $\dfrac{6}{x}$.
answer: Rewrite: $6x^{-1}$. Then $6 \cdot (-1)x^{-2}$, which is **$-\dfrac{6}{x^2}$**.

q: Find the derivative of $\sqrt{x}$.
answer: Rewrite: $x^{1/2}$. Then $\tfrac{1}{2}x^{-1/2}$, which is **$\dfrac{1}{2\sqrt{x}}$**.

q: Find the derivative of $x^{2/3}$.
answer: Bring down $\tfrac{2}{3}$, lower the power by 1: $\tfrac{2}{3} - 1 = -\tfrac{1}{3}$. **$\tfrac{2}{3}x^{-1/3}$**.

q: Find the derivative of $\dfrac{4}{\sqrt{x}}$.
answer: Rewrite: $4x^{-1/2}$. Then $4 \cdot \left(-\tfrac{1}{2}\right)x^{-3/2} =$ **$-2x^{-3/2}$**.

q: Find the derivative of $x^2\sqrt{x}$.
answer: Rewrite: $x^2 \cdot x^{1/2} = x^{5/2}$. Then **$\tfrac{5}{2}x^{3/2}$**.

q: Find the derivative of $(x + 1)^2$ by expanding first.
answer: The power rule needs a bare x, so expand: $x^2 + 2x + 1$. Then **$2x + 2$**.

q: Find the derivative of $\dfrac{x^3 + 4}{x}$.
answer: Split the fraction: $\dfrac{x^3}{x} + \dfrac{4}{x} = x^2 + 4x^{-1}$. Then $2x - 4x^{-2}$, which is **$2x - \dfrac{4}{x^2}$**.

q: Find the slope of $y = x^3 - 3x$ at $x = 2$.
answer: $y' = 3x^2 - 3$. At $x = 2$: $12 - 3 =$ **9**.

q: Where is the slope of $y = x^2 - 6x$ equal to zero?
answer: $y' = 2x - 6$. Set it to 0: $2x = 6$, so **$x = 3$**. That is the bottom of the U.
:::
