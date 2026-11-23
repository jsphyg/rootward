---
id: composite-functions
title: Composite functions
prereqs: [functions]
big: A composite function runs one function, then feeds its output straight into another.
recap: $f(g(x))$ means do g first, then put its output into f. The function done first is the {{inner|inner function}}. The one done last is the {{outer|outer function}}.
check:
  q: Let $f(x) = x^2$ and $g(x) = x + 3$. What is $f(g(2))$?
  options: ["25", "7", "20", "9"]
  answer: 0
  why: Work from the inside out. $g(2) = 2 + 3 = 5$, then $f(5) = 5^2 = 25$. Getting 7 means f was done first: $f(2) = 4$, then $4 + 3 = 7$. That is $g(f(2))$, the other order. Getting 20 or 9 means the two outputs $f(2) = 4$ and $g(2) = 5$ were multiplied or added, but a composite feeds one into the other.
---

## One machine after another

Here is a two-step process: "add 3, then square the result."

| start with $x$ | 1 | 2 | $-3$ | 0 |
|---|---|---|---|---|
| after adding 3 | 4 | 5 | 0 | 3 |
| after squaring | 16 | 25 | 0 | 9 |

*Notice: the middle row is an output and an input at the same time. The first step makes it, and the second step uses it.*

Each step on its own is a [[functions|function]]. Call them $g(x) = x + 3$ and $f(x) = x^2$. Joining them, so that g's output becomes f's input, makes a new function. It is called a {{composite|composite function}}.

## Writing it: $f(g(x))$

We write the whole process as $f(g(x))$, read "f of g of x". Work it from the inside out:

1. Start with x.
2. Do the inside first: work out $g(x)$.
3. Put that answer into f.

So $f(g(2))$ means: $g(2) = 5$, then $f(5) = 25$.

The function that goes first is the {{inner|inner function}}. Here that is g. The function that goes last is the {{outer|outer function}}. Here that is f.^[n_compose]

:::widget function-chain

## Order matters

Swap the order and you usually get a different function. With $f(x) = x^2$ and $g(x) = x + 3$:

- $f(g(x))$: add 3, then square. At $x = 2$: $5^2 = 25$.
- $g(f(x))$: square, then add 3. At $x = 2$: $4 + 3 = 7$.

**Why it works.** It is like putting on socks and then shoes. The same two steps in the other order give a different result. The inside is always done first, so whichever function is written inside goes first.

## Building the formula

To get one formula for $f(g(x))$, put the **whole** of $g(x)$ in place of the input in f.

With $f(x) = x^2$ and $g(x) = x + 3$:

$$f(g(x)) = f(x + 3) = (x + 3)^2$$

The brackets matter. The whole of $x + 3$ is the input, so the whole of it gets squared. This is the same "a whole expression can be the input" habit from the functions page.

Test it at $x = 2$: $(2 + 3)^2 = 25$, which matches the table.

## Spotting the pieces

Calculus often hands you a formula and asks you to see the layers in it. Ask two questions:

- "What would I work out **first**?" That is the inner function.
- "What happens to that result **afterwards**?" That is the outer function.

It helps to give the middle value its own letter, usually u. Then the outer function is written in terms of u.

| formula | inner (first) | outer (last) |
|---|---|---|
| $(3x + 1)^4$ | $u = 3x + 1$ | $u^4$ |
| $\sqrt{x^2 + 1}$ | $u = x^2 + 1$ | $\sqrt{u}$ |
| $\dfrac{1}{x - 5}$ | $u = x - 5$ | $\dfrac{1}{u}$ |

*Notice: to work out $(3x + 1)^4$ by hand, you would find $3x + 1$ first and raise it to the 4th power last. Your order of work names the layers.*

**Why a new letter?** Writing the outer function as $u^4$ instead of $x^4$ keeps the two layers apart. It says "raise *the middle value* to the 4th power", not "raise x to the 4th power".

This skill, seeing the inner and outer layers, is exactly what the [[chain-rule|chain rule]] needs.

:::example
title: Let $f(u) = u^2 + 1$ and $g(x) = 3x - 2$. Find a formula for $f(g(x))$, then find $f(g(1))$.

1. Find the inner function: g goes first, because it sits inside.
   why: In $f(g(x))$, the inside is always worked out first.
   uses: []

2. Put the whole of $g(x)$ in for u: $f(g(x)) = (3x - 2)^2 + 1$.
   why: f's rule is "square the input, then add 1". Its input is now all of $3x - 2$, so it goes in brackets.
   uses: [functions]

3. Find $g(1)$ first: $3 \cdot 1 - 2 = 1$.
   why: Inside first.
   uses: [functions]

4. Feed it into f: $f(1) = 1^2 + 1 = 2$. So $f(g(1)) = 2$.
   why: The inner output becomes the outer input.
   uses: [functions]

5. Check with the formula: $(3 \cdot 1 - 2)^2 + 1 = 1 + 1 = 2$. They match.
   why: Two routes to the same answer catch a slip.
   uses: []
:::

:::practice
q: Let $f(x) = x^2$ and $g(x) = 2x + 1$. Find $f(g(3))$ and $g(f(3))$. Are they the same?
answer: $f(g(3))$: $g(3) = 7$, then $f(7) =$ **49**. $g(f(3))$: $f(3) = 9$, then $g(9) = 2 \cdot 9 + 1 =$ **19**. They are different, because the order changed.
:::
