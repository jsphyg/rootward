---
id: functions
title: Functions
prereqs: []
big: A function is a rule: put a number in, get exactly one number out.
recap: A {{function|function}} takes an {{input|input}} and gives one {{output|output}}. For $f(x) = x^2$, putting in 3 gives $f(3) = 9$.
check:
  q: If $f(x) = x^2 + 1$, what is $f(3)$?
  options: ["10", "7", "9", "4"]
  answer: 0
  why: Replace x with 3: $3^2 + 1 = 9 + 1 = 10$.
---

## The idea

A {{function|function}} is a rule. You give it an {{input|input}}, and it hands back exactly one {{output|output}}.^[n_vert] We write the rule as $f(x) = x^2$, read "f of x equals x squared".

| input $x$ | 1 | 2 | 3 | $-2$ |
|---|---|---|---|---|
| output $f(x)$ | 1 | 4 | 9 | 4 |

:::widget function-machine

## Graphs

Each input and its output make a point $(x, f(x))$. Plot all of them and you get the graph. For $x^2$ it is a U-shaped curve. Later pages study how steep that curve is at different points.

:::example
title: Let $f(x) = x^2 + 1$. Find $f(3)$.

1. Write the rule: $f(x) = x^2 + 1$.
   why: Always start from the rule itself.
   uses: []

2. Replace every x with 3: $f(3) = 3^2 + 1$.
   why: The input goes everywhere x was.
   uses: []

3. Compute: $9 + 1 = 10$.
   why: Square first, then add.
   uses: []
:::

:::practice
q: If $f(x) = 2x - 5$, find $f(4)$.
answer: $f(4) = 2 \cdot 4 - 5 = 3$.
:::
