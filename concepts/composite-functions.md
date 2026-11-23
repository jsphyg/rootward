---
id: composite-functions
title: Composite functions
prereqs: [functions]
big: A composite function feeds the output of one function into another.
recap: $f(g(x))$ means do {{inner|g}} first, then feed its result into {{outer|f}}.
check:
  q: Let $f(u) = u^2$ and $g(x) = x + 3$. What is $f(g(2))$?
  options: ["25", "7", "13", "5"]
  answer: 0
  why: Do g first: $g(2) = 5$. Then $f(5) = 25$.
---

## Functions in a chain

Sometimes the output of one function becomes the input of another. Write $f(g(x))$: do $g$ first, then $f$.

Take $g(x) = 2x + 1$ (the {{inner|inner function}}) and $f(u) = u^3$ (the {{outer|outer function}}). Then $f(g(x)) = (2x + 1)^3$.

:::widget function-chain

## Spotting the pieces

Looking at an expression like $(3x + 1)^4$, ask: "what is computed first?" That is the inner function, $3x + 1$. "What happens to it afterwards?" Raising to the 4th power, so the outer function is $u^4$.

This skill is what you need to use the [[chain-rule|chain rule]].

:::example
title: Let $g(x) = 2x + 1$ and $f(u) = u^3$. Find $f(g(1))$.

1. Inside first: $g(1) = 2 \cdot 1 + 1 = 3$.
   why: The innermost parentheses always go first.
   uses: [functions]

2. Feed 3 into f: $f(3) = 3^3 = 27$.
   why: The inner output becomes the outer input.
   uses: [functions]
:::

:::practice
q: Let $f(u) = u^2 + 1$ and $g(x) = 3x$. Find $f(g(2))$.
answer: $g(2) = 6$, then $f(6) = 36 + 1 = 37$.
:::
