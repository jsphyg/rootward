---
id: expanding
title: Expanding brackets
prereqs: [exponents]
big: Expanding means multiplying out brackets, so that things multiplied together become things added together.
recap: Multiply every term in one bracket by every term in the other, then add the results. For example, $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.
check:
  q: What is $(x + 3)^2$ multiplied out?
  options: ["$x^2 + 6x + 9$", "$x^2 + 9$", "$x^2 + 3x + 9$", "$2x + 6$"]
  answer: 0
  why: $(x + 3)^2$ means $(x + 3)(x + 3)$. Every term times every term gives $x^2 + 3x + 3x + 9 = x^2 + 6x + 9$. Squaring each part separately gives $x^2 + 9$, which misses the two middle terms. $x^2 + 3x + 9$ counts only one middle term. $2x + 6$ doubles the bracket instead of squaring it.
---

## One number times a bracket

What is $3(x + 2)$? It means three copies of $(x + 2)$ added up:

$$3(x + 2) = (x + 2) + (x + 2) + (x + 2) = 3x + 6$$

There are three x's and three 2's. So the 3 multiplies **each** thing inside the bracket:

$$3(x + 2) = 3 \cdot x + 3 \cdot 2 = 3x + 6$$

Doing this is called **expanding**. The rule has a name, the {{distributive|distributive property}}: the number outside is shared out, or *distributed*, to every {{term|term}} inside.

**Watch the signs.** A minus sign outside multiplies everything inside too:

$$-2(x - 5) = -2 \cdot x + (-2)(-5) = -2x + 10$$

A negative times a negative is positive, so the last term is $+10$. Writing $-10$ here is the most common slip.

## A letter or power times a bracket

The same rule works when the thing outside has an x in it. Use {{exponent|exponents}} to tidy up.

| Expression | Each term times what is outside | Expanded |
|---|---|---|
| $x(x + 4)$ | $x \cdot x + x \cdot 4$ | $x^2 + 4x$ |
| $x^2(x + 4)$ | $x^2 \cdot x + x^2 \cdot 4$ | $x^3 + 4x^2$ |

*Notice: $x \cdot x = x^2$ and $x^2 \cdot x = x^3$. Multiplying powers of x adds the exponents.*

## Two brackets

Now try $(x + 2)(x + 3)$. Think of it as the area of a rectangle with width $x + 3$ and height $x + 2$. Cut it into four smaller rectangles:

| | $x$ | $+3$ |
|---|---|---|
| **$x$** | $x^2$ | $3x$ |
| **$+2$** | $2x$ | $6$ |

*Notice: each box is one term from the left times one term from the top. There are 2 × 2 = 4 boxes.*

Add the four boxes:

$$(x + 2)(x + 3) = x^2 + 3x + 2x + 6$$

The rule: **multiply every term in one bracket by every term in the other.** Two terms times two terms always gives four pieces.^[n_foil]

## Tidy up: combine like terms

The answer above has two terms with a plain x in them, $3x$ and $2x$. These are {{like-terms|like terms}}, so you can add them: $3x + 2x = 5x$.

$$(x + 2)(x + 3) = x^2 + 5x + 6$$

Only terms with the same power of x combine. $x^2$ and $5x$ cannot be added together, just as 2 apples and 5 pears do not make 7 of anything.

## Squaring a bracket

$(x + 3)^2$ means $(x + 3)(x + 3)$. Expand it like any two brackets:

$$(x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$$

It is **not** $x^2 + 9$. You can check with a number. Put in $x = 1$. Then $(1 + 3)^2 = 16$, and $1 + 6 + 9 = 16$. But $1 + 9 = 10$, which is wrong.

## Why it works

Multiplication spreads across addition. Picture the rectangle again. Its total area is width times height, $(x + 3)(x + 2)$. It is also the sum of the four small boxes inside it. Both ways measure the same area, so they must be equal. Expanding is just adding up the boxes.

## Check with a number

Expanding is easy to test. Pick a simple value, like $x = 1$. Work out the original and your answer. If they give different numbers, something went wrong. (If they match, you are very likely right.)

:::example
title: Expand $(x - 4)(x + 5)$.

1. Multiply the first term of the first bracket, $x$, by each term of the second: $x \cdot x = x^2$ and $x \cdot 5 = 5x$.
   why: Every term in one bracket must multiply every term in the other.
   uses: [exponents]

2. Multiply the second term, $-4$, by each term of the second bracket: $-4 \cdot x = -4x$ and $-4 \cdot 5 = -20$.
   why: The minus sign belongs to the 4, so it comes along into both products.
   uses: []

3. Add all four pieces: $x^2 + 5x - 4x - 20$.
   why: The expanded form is the sum of every product.
   uses: []

4. Combine like terms: $5x - 4x = x$. The answer is $x^2 + x - 20$.
   why: $5x$ and $-4x$ both have a plain x, so they add.
   uses: []

5. Check with $x = 1$. Original: $(1 - 4)(1 + 5) = (-3)(6) = -18$. Answer: $1 + 1 - 20 = -18$. They match.
   why: A quick number test catches sign slips.
   uses: []
:::

:::practice
q: Expand $(2x - 1)(x + 3)$.
answer: Every term times every term. $2x \cdot x = 2x^2$, $2x \cdot 3 = 6x$, $-1 \cdot x = -x$, $-1 \cdot 3 = -3$. Add them: $2x^2 + 6x - x - 3$. Combine like terms: **$2x^2 + 5x - 3$**. Check with $x = 1$: $(2 - 1)(1 + 3) = 4$, and $2 + 5 - 3 = 4$.
:::

:::problems
q: Expand $4(x + 3)$.
answer: The 4 multiplies each term: **$4x + 12$**.

q: Expand $5(2x - 1)$.
answer: $5 \cdot 2x = 10x$ and $5 \cdot (-1) = -5$: **$10x - 5$**.

q: Expand $-3(x - 4)$.
answer: $-3 \cdot x = -3x$ and $(-3)(-4) = +12$: **$-3x + 12$**.

q: Expand $x(x + 7)$.
answer: $x \cdot x = x^2$ and $x \cdot 7 = 7x$: **$x^2 + 7x$**.

q: Expand $2x(3x - 5)$.
answer: $2x \cdot 3x = 6x^2$ and $2x \cdot (-5) = -10x$: **$6x^2 - 10x$**.

q: Expand $x^2(x - 3)$.
answer: $x^2 \cdot x = x^3$ and $x^2 \cdot (-3) = -3x^2$: **$x^3 - 3x^2$**.

q: Expand $(x + 1)(x + 4)$.
answer: $x^2 + 4x + x + 4$. Combine like terms: **$x^2 + 5x + 4$**. Check with $x = 1$: $2 \cdot 5 = 10$ and $1 + 5 + 4 = 10$.

q: Expand $(x + 5)(x - 2)$.
answer: $x^2 - 2x + 5x - 10$. Combine: **$x^2 + 3x - 10$**. Check with $x = 1$: $6 \cdot (-1) = -6$ and $1 + 3 - 10 = -6$.

q: Expand $(x - 3)(x - 6)$.
answer: $x^2 - 6x - 3x + 18$. The last term is $(-3)(-6) = +18$. Combine: **$x^2 - 9x + 18$**.

q: Expand $(x - 7)(x + 7)$.
answer: $x^2 + 7x - 7x - 49$. The middle terms cancel: **$x^2 - 49$**.

q: Expand $(x + 4)^2$.
answer: $(x + 4)(x + 4) = x^2 + 4x + 4x + 16 =$ **$x^2 + 8x + 16$**. Not $x^2 + 16$.

q: Expand $(x - 5)^2$.
answer: $(x - 5)(x - 5) = x^2 - 5x - 5x + 25 =$ **$x^2 - 10x + 25$**. The last term is $(-5)(-5) = +25$.

q: Expand $(3x + 2)(x - 4)$.
answer: $3x \cdot x = 3x^2$, $3x \cdot (-4) = -12x$, $2 \cdot x = 2x$, $2 \cdot (-4) = -8$. Add and combine: **$3x^2 - 10x - 8$**. Check with $x = 1$: $5 \cdot (-3) = -15$ and $3 - 10 - 8 = -15$.

q: Expand $(2x - 3)(2x + 3)$.
answer: $4x^2 + 6x - 6x - 9$. The middle terms cancel: **$4x^2 - 9$**.

q: Expand $(2x + 1)^2$.
answer: $(2x + 1)(2x + 1) = 4x^2 + 2x + 2x + 1 =$ **$4x^2 + 4x + 1$**.

q: Expand $2(x + 3)(x - 1)$.
answer: Do the two brackets first: $x^2 - x + 3x - 3 = x^2 + 2x - 3$. Then double every term: **$2x^2 + 4x - 6$**.

q: Expand $(x + 1)(x^2 - x + 1)$.
answer: Every term times every term gives six pieces. $x$ times the second bracket: $x^3 - x^2 + x$. Then 1 times it: $x^2 - x + 1$. Add: $x^3 - x^2 + x + x^2 - x + 1$. Everything cancels but **$x^3 + 1$**.

q: Expand and simplify $(x + h)^2 - x^2$. (You will meet this on the derivative page.)
answer: $(x + h)^2 = x^2 + 2xh + h^2$. Take away $x^2$: **$2xh + h^2$**.
:::
