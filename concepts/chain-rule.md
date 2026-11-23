---
id: chain-rule
title: The chain rule
prereqs: [power-rule, composite-functions]
big: To differentiate a function inside another function, multiply the two rates of change.
recap: $\dfrac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$. Differentiate the outside, keep the inside as it is, then multiply by the derivative of the inside.
check:
  q: What is the derivative of $(2x + 1)^3$?
  options: ["$6(2x + 1)^2$", "$3(2x + 1)^2$", "$6x + 3$", "$2(2x + 1)^3$"]
  answer: 0
  why: Outer: $3u^2$, with $u = 2x + 1$. Inner: 2. Multiply: $3(2x + 1)^2 \cdot 2 = 6(2x + 1)^2$.
---

## The problem

The [[power-rule|power rule]] works on a bare x. But $(3x + 1)^4$ is a [[composite-functions|composite function]]: the {{inner|inner}} part $3x + 1$ sits inside the {{outer|outer}} part $u^4$. The power rule alone does not cover that.

## The rule

$$\frac{d}{dx}\, f(g(x)) = f'(g(x)) \cdot g'(x)$$

In words: take the derivative of the outside, **keep the inside as it is**, then multiply by the derivative of the inside.

Why multiply? Each layer changes at its own rate, and rates in a chain multiply.^[n_rates] If $u = 3x + 1$ changes 3 times as fast as x, and $u^4$ changes $4u^3$ times as fast as u, then $u^4$ changes $4u^3 \cdot 3$ times as fast as x.

This is the same [[derivative|derivative]] you already know. The rule only tells you how to handle layers.

:::example
title: Find $\dfrac{d}{dx}(3x + 1)^4$.

1. Split it up. Inner: $g(x) = 3x + 1$. Outer: $f(u) = u^4$.
   why: Ask what is computed first. That is the inner function.
   uses: [composite-functions]

2. Differentiate the outer: $f'(u) = 4u^3$.
   why: Power rule on the outer layer.
   uses: [power-rule]

3. Differentiate the inner: $g'(x) = 3$.
   why: Power rule again: $3x$ gives 3, and the $+1$ vanishes.
   uses: [power-rule]

4. Multiply, putting the inside back: $4(3x + 1)^3 \cdot 3$.
   why: Outer derivative, kept inside, times inner derivative. This is the chain rule step.
   uses: []

5. Tidy: $12(3x + 1)^3$.
   why: Check: at $x = 0$ the slope is 12, and a tiny step h changes $(3h + 1)^4$ by about $12h$.
   uses: [derivative]
:::

:::practice
q: Differentiate $(x^2 + 1)^5$.
answer: Outer: $5u^4$. Inner: $2x$. Multiply: $5(x^2 + 1)^4 \cdot 2x = 10x(x^2 + 1)^4$.
:::
