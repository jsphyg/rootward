---
id: limits
title: Limits
prereqs: [functions, factoring]
big: A limit is the value a function heads toward as its input gets closer to a number.
recap: A {{limit|limit}} asks what the output {{approach|approaches}} as the input approaches a number. It does not matter what happens exactly at that number.
check:
  q: What is $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$?
  options: ["6", "0", "3", "It does not exist"]
  answer: 0
  why: Factor the top: $(x - 3)(x + 3)$. Cancel $(x - 3)$ and you have $x + 3$. At $x = 3$ that is 6.
---

## Sneaking up on a value

Take $f(x) = \dfrac{x^2 - 1}{x - 1}$. At $x = 1$ it becomes $0 \div 0$, which has no value.^[n_zero] But look at what happens as x gets close to 1:

| $x$ | 0.9 | 0.99 | 0.999 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|
| $f(x)$ | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |

The outputs {{approach|approach}} 2 from both sides. We write this as:

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2$$

## The algebra shortcut

When plugging in gives $0 \div 0$, try [[factoring|factoring]]. Here $x^2 - 1 = (x - 1)(x + 1)$. The $(x - 1)$ cancels, leaving $x + 1$. At $x = 1$ that is 2, matching the table.

Why this matters: the [[derivative|derivative]] is built from exactly this kind of $0 \div 0$ situation.

:::example
title: Find $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.

1. Try plugging in 2: you get $0 \div 0$.
   why: That tells you to try another route. It does not mean the limit is missing.
   uses: [functions]

2. Factor the top: $x^2 - 4 = (x - 2)(x + 2)$.
   why: A difference of two squares.
   uses: [factoring]

3. Cancel $(x - 2)$: what remains is $x + 2$.
   why: Allowed because x only approaches 2 and is never exactly 2.
   uses: []

4. Plug in 2: $2 + 2 = 4$.
   why: The limit is 4.
   uses: [functions]
:::

:::practice
q: Find $\displaystyle\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$.
answer: Factor: $(x - 5)(x + 5)$ over $(x - 5)$ leaves $x + 5$. At 5 that is **10**.
:::
