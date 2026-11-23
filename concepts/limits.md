---
id: limits
title: Limits
prereqs: [functions, factoring]
big: A limit is the value a function's output heads toward as the input gets closer and closer to some number.
recap: A {{limit|limit}} asks what $f(x)$ {{approach|approaches}} as x approaches a number a. It is written $\displaystyle\lim_{x \to a} f(x)$. What happens exactly at a does not matter, only what happens near it.
check:
  q: What is $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$?
  options: ["6", "0", "3", "It does not exist"]
  answer: 0
  why: Plugging in 3 gives $0 \div 0$, which means "do more work". Factor the top: $x^2 - 9 = (x - 3)(x + 3)$. Cancel $(x - 3)$ to leave $x + 3$, which heads to $3 + 3 = 6$. "0" and "does not exist" both treat $0 \div 0$ as an answer, but it is only a signal. "3" is where x is heading, not where the output is heading.
---

## A function with a missing point

Take $f(x) = \dfrac{x^2 - 1}{x - 1}$. Try to plug in $x = 1$:

$$f(1) = \frac{1 - 1}{1 - 1} = \frac{0}{0}$$

That has no value. You cannot divide by zero, so $f(1)$ does not exist.^[n_zero] But nothing stops us from trying inputs **near** 1:

| $x$ | 0.9 | 0.99 | 0.999 | 1 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|---|
| $f(x)$ | 1.9 | 1.99 | 1.999 | none | 2.001 | 2.01 | 2.1 |

*Notice: from below and from above, the outputs crowd in on 2. The closer x gets to 1, the closer $f(x)$ gets to 2.*

:::widget limit-zoom

The function never actually reaches 2, because it has no output at $x = 1$. But it is clearly heading there. That target, 2, is called the {{limit|limit}}.

## Writing a limit

We write:

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2$$

Read it as "the limit, as x approaches 1, of $f(x)$ is 2". Here "{{approach|approaches}}" means "gets closer and closer to, without having to arrive".

In plain words: you can make $f(x)$ as close to 2 as you like, by taking x close enough to 1 (but not equal to 1).^[n_epsilon]

## The limit ignores the point itself

A limit only looks at inputs **near** a, never at a itself. So what happens exactly at a cannot change it.

Suppose someone took the function above and added the rule "and $f(1) = 5$". The outputs near 1 are unchanged, so the limit is still 2. The single point at $x = 1$ just sits off on its own.

**Why build it this way?** The interesting cases in calculus are exactly the inputs where plugging in fails, like $0 \div 0$. A tool that ignored the point itself is the only kind that can handle them.

## Both sides must agree

x can approach a from below (numbers less than a) or from above (numbers greater than a). For the limit to exist, both sides must head to the **same** value.

Picture a function that is 0 for every negative x, and 1 for x equal to 0 or more. Its graph jumps at 0. Coming from below, the outputs are all 0. Coming from above, they are all 1. They disagree, so $\displaystyle\lim_{x \to 0}$ of this function does not exist. (Each side on its own does have a value. That is the idea of a one-sided limit.)

## How to find a limit

**Step 1: Try plugging in.** For an ordinary formula, with no division by zero, nearby inputs give nearby outputs. So the limit is just the value. For example:

$$\lim_{x \to 2} (x^2 + 1) = 2^2 + 1 = 5$$

**Step 2: If you get $0 \div 0$, do some algebra.** $0 \div 0$ is not an answer. It is a signal that a factor is hiding on top and bottom. [[factoring|Factor]], cancel the shared factor, then plug in.

For the function above: $x^2 - 1 = (x - 1)(x + 1)$, so

$$\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1 \quad (\text{for } x \neq 1)$$

Then $x + 1$ heads to $1 + 1 = 2$. That matches the table.

**Why cancelling is allowed.** You may only cancel something that is not zero. While x approaches 1, it never equals 1, so $x - 1$ is never zero. The limit never looks at $x = 1$ itself, so cancelling is safe.

**Step 3: If you get a number over 0, like $1 \div 0$, the outputs blow up.** Near $x = 0$, $\dfrac{1}{x}$ gets huge: $\dfrac{1}{0.001} = 1000$. The outputs head to no number at all, so there is no limit in the ordinary sense.

## Why calculus needs limits

The slope of a curve at a single point would be "rise over run" with a run of 0. That is a $0 \div 0$ problem, the same kind as above. Limits are the tool that solves it, and that is how the [[derivative|derivative]] is defined.

:::example
title: Find $\displaystyle\lim_{x \to -3} \frac{x^2 + x - 6}{x + 3}$.

1. Try plugging in $-3$. Top: $(-3)^2 + (-3) - 6 = 9 - 3 - 6 = 0$. Bottom: $-3 + 3 = 0$. So you get $0 \div 0$.
   why: $0 \div 0$ means a shared factor is hiding. It does not mean the limit is missing.
   uses: [functions]

2. Factor the top: $x^2 + x - 6 = (x + 3)(x - 2)$.
   why: Find two numbers that multiply to $-6$ and add to 1. They are 3 and $-2$. And $x + 3$ had to be a factor, because the top is 0 at $x = -3$.
   uses: [factoring]

3. Cancel $(x + 3)$: $\dfrac{(x + 3)(x - 2)}{x + 3} = x - 2$.
   why: Allowed because x only approaches $-3$, so $x + 3$ is never zero.
   uses: []

4. Plug in: $-3 - 2 = -5$. The limit is $-5$.
   why: $x - 2$ is an ordinary formula, so plugging in gives its limit.
   uses: [functions]

5. Check with a nearby input, $x = -2.9$. Top: $8.41 - 2.9 - 6 = -0.49$. Bottom: $0.1$. So $f(-2.9) = -4.9$, close to $-5$.
   why: A quick number test confirms the algebra.
   uses: []
:::

:::practice
q: Find $\displaystyle\lim_{x \to 1} \frac{x^2 + 2x - 3}{x - 1}$.
answer: Plugging in gives $0 \div 0$. Factor: $x^2 + 2x - 3 = (x + 3)(x - 1)$. Cancel $(x - 1)$ to leave $x + 3$. At $x = 1$ that is **4**.
:::

:::problems
q: Find $\displaystyle\lim_{x \to 3} (2x + 1)$.
answer: No division by zero, so plug in: $2 \cdot 3 + 1 =$ **7**.

q: Find $\displaystyle\lim_{x \to -1} (x^2 + 4x)$.
answer: Plug in: $(-1)^2 + 4(-1) = 1 - 4 =$ **$-3$**.

q: Find $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
answer: Plugging in gives $0 \div 0$. Factor: $\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$. Plug in: **4**.

q: Find $\displaystyle\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$.
answer: $0 \div 0$. Factor: $(x - 5)(x + 5)$ on top. Cancel to leave $x + 5$. **10**.

q: Find $\displaystyle\lim_{x \to -4} \frac{x^2 - 16}{x + 4}$.
answer: $0 \div 0$. Factor: $(x - 4)(x + 4)$. Cancel $(x + 4)$ to leave $x - 4$. At $-4$: **$-8$**.

q: Find $\displaystyle\lim_{x \to 0} \frac{x^2 + 3x}{x}$.
answer: $0 \div 0$. Pull out x on top: $\dfrac{x(x + 3)}{x} = x + 3$. At 0: **3**.

q: Find $\displaystyle\lim_{x \to 2} \frac{x^2 + x - 6}{x - 2}$.
answer: $4 + 2 - 6 = 0$ on top, 0 on the bottom. Factor: $(x + 3)(x - 2)$. Cancel to leave $x + 3$. **5**.

q: Find $\displaystyle\lim_{x \to 3} \frac{x^2 - 5x + 6}{x - 3}$.
answer: $9 - 15 + 6 = 0$, so $0 \div 0$. Factor: $(x - 2)(x - 3)$. Cancel to leave $x - 2$. **1**.

q: Find $\displaystyle\lim_{x \to -2} \frac{x^2 - x - 6}{x + 2}$.
answer: $4 + 2 - 6 = 0$, so $0 \div 0$. Factor: $(x - 3)(x + 2)$. Cancel to leave $x - 3$. At $-2$: **$-5$**.

q: Find $\displaystyle\lim_{x \to 0} \frac{x^3 - 2x^2}{x^2}$.
answer: $0 \div 0$. Pull out $x^2$ on top: $\dfrac{x^2(x - 2)}{x^2} = x - 2$. At 0: **$-2$**.

q: Let $f(x) = x + 1$ for every x except 2, and $f(2) = 10$. Find $\displaystyle\lim_{x \to 2} f(x)$.
answer: The limit ignores the point itself. Near 2, $f(x) = x + 1$, which heads to **3**. The value 10 at $x = 2$ does not matter.

q: Find $\displaystyle\lim_{x \to 4} \frac{x + 4}{x - 4}$.
answer: Plugging in gives $8 \div 0$: a number over zero, not $0 \div 0$. Near 4 the outputs blow up (at $x = 4.001$ it is about 8000). **There is no limit.**

q: Find $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x^2 + x - 2}$.
answer: $0 \div 0$. Factor both: $\dfrac{(x - 1)(x + 1)}{(x + 2)(x - 1)} = \dfrac{x + 1}{x + 2}$. At 1: **$\tfrac{2}{3}$**.

q: Find $\displaystyle\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h}$.
answer: $0 \div 0$. Expand the top: $9 + 6h + h^2 - 9 = 6h + h^2 = h(6 + h)$. Cancel h to leave $6 + h$. At $h = 0$: **6**. This is the slope of $x^2$ at $x = 3$, as the derivative page will show.
:::
