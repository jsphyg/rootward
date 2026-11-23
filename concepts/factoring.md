---
id: factoring
title: Factoring
prereqs: [expanding]
big: Factoring rewrites an expression as things multiplied together. It is multiplying out, run backwards.
recap: Factoring turns a sum into a product, like $x^2 - 4 = (x - 2)(x + 2)$. To check a factoring, multiply it back out and see if you get the original.
check:
  q: Which of these is the same as $x^2 - 16$?
  options: ["$(x - 4)(x + 4)$", "$(x - 4)^2$", "$(x - 8)(x + 8)$", "It cannot be factored"]
  answer: 0
  why: $16 = 4^2$, so this is a difference of two squares, $a^2 - b^2 = (a - b)(a + b)$. Multiply back to check. $(x - 4)(x + 4) = x^2 + 4x - 4x - 16 = x^2 - 16$. The middle terms cancel. $(x - 4)^2$ gives $x^2 - 8x + 16$, and $(x - 8)(x + 8)$ gives $x^2 - 64$. It can be factored, because there is a minus sign between two squares.
---

## Multiplying out, then going back

[[expanding|Expanding]] multiplies out brackets. Here are four expanded:

| Multiplied together | Multiplied out |
|---|---|
| $3(x + 2)$ | $3x + 6$ |
| $x^2(x + 4)$ | $x^3 + 4x^2$ |
| $(x - 2)(x + 2)$ | $x^2 - 4$ |
| $(x + 2)(x + 3)$ | $x^2 + 5x + 6$ |

*Notice: the left column is things multiplied. The right column is things added.*

Multiplying out goes from left to right. **{{factor|Factoring}}** goes from right to left. You start with an {{expression|expression}} that is a sum, like $x^2 - 4$, and find what was multiplied to make it, $(x - 2)(x + 2)$. Each piece being multiplied is called a *factor*. The whole result is called the factored form.

It works the same way with plain numbers. $12 = 3 \times 4$, so 3 and 4 are factors of 12.

## Why bother?

A {{product|product}} (things multiplied) is easier to work with than a sum (things added), for two reasons.

- **Factors can cancel in a fraction.** In $\dfrac{(x - 2)(x + 2)}{x - 2}$, the $(x - 2)$ on top and bottom cancel, leaving $x + 2$. You cannot cancel pieces of a sum like that. This is the main tool on the [[limits|limits]] page.
- **A product is zero only when one factor is zero.** $(x - 2)(x + 2) = 0$ means $x = 2$ or $x = -2$. That makes equations easy to solve.

There are three patterns to learn. Try them in this order.

## Pattern 1: pull out a common factor

Look for something every {{term|term}} shares. Pull it out front.

Example: $6x + 9$. Both terms contain a 3, because $6x = 3 \cdot 2x$ and $9 = 3 \cdot 3$. So:

$$6x + 9 = 3(2x + 3)$$

With powers, it works the same. In $x^3 + 4x^2$, both terms contain $x^2$, because $x^3 = x^2 \cdot x$. So:

$$x^3 + 4x^2 = x^2(x + 4)$$

Take the biggest thing every term shares. Pulling out only $x$ would leave $x(x^2 + 4x)$, which still has an $x$ in common inside.

**Why it works.** Multiplying out $3(2x + 3)$ gives $3 \cdot 2x + 3 \cdot 3 = 6x + 9$. Pulling out a common factor is that same step, undone. Always do this pattern first, because it makes what is left smaller and easier.

## Pattern 2: difference of two squares

Watch what happens when you multiply $(x - 2)(x + 2)$ out:

$$(x - 2)(x + 2) = x^2 + 2x - 2x - 4 = x^2 - 4$$

The two middle terms, $+2x$ and $-2x$, cancel. Only the two squares are left, with a minus sign between them.

That gives the rule. A **{{diff-squares|difference of two squares}}** factors like this:

$$a^2 - b^2 = (a - b)(a + b)$$

To use it, write each part as something squared.

| Expression | As squares | Factored |
|---|---|---|
| $x^2 - 9$ | $x^2 - 3^2$ | $(x - 3)(x + 3)$ |
| $x^2 - 25$ | $x^2 - 5^2$ | $(x - 5)(x + 5)$ |
| $4x^2 - 1$ | $(2x)^2 - 1^2$ | $(2x - 1)(2x + 1)$ |

*Notice: the number in each bracket is the {{square-root|square root}} of the number in the expression. It is 3 for 9, not half of 9.*

**Why it works.** Multiply out $(a - b)(a + b)$. You get $a^2 + ab - ab - b^2$. The $+ab$ and $-ab$ cancel, leaving $a^2 - b^2$. One bracket has a minus and one has a plus, and that is exactly what makes the middle terms cancel.

**It only works with a minus.** $x^2 + 4$ is a *sum* of squares. It does not factor this way.^[n_sum_squares] Check it: $(x - 2)(x + 2)$ gives $x^2 - 4$, not $x^2 + 4$.

## Pattern 3: $x^2 + bx + c$

This is a {{trinomial|trinomial}}: three terms, starting with a plain $x^2$.^[n_leading] Multiply out $(x + 2)(x + 3)$ to see where the numbers come from:

$$(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$$

The 2 and the 3 **add** to make the middle number, 5. They **multiply** to make the last number, 6.

So to factor $x^2 + bx + c$:

1. Find two numbers that **multiply to $c$** and **add to $b$**.
2. Call them $p$ and $q$. The answer is $(x + p)(x + q)$.

Example: $x^2 + 5x + 6$. Pairs that multiply to 6 are 1 and 6, or 2 and 3. Only 2 and 3 add to 5. So $x^2 + 5x + 6 = (x + 2)(x + 3)$.

**Negative numbers.** The signs of $b$ and $c$ tell you the signs of the pair:

| Last number $c$ | Middle number $b$ | The pair is | Example |
|---|---|---|---|
| positive | positive | both positive | $x^2 + 5x + 6 = (x + 2)(x + 3)$ |
| positive | negative | both negative | $x^2 - 5x + 4 = (x - 1)(x - 4)$ |
| negative | either | one of each sign | $x^2 - x - 6 = (x - 3)(x + 2)$ |

In the last example, $-3 \times 2 = -6$ and $-3 + 2 = -1$. Both match.

If no pair of whole numbers works, the expression may not factor with whole numbers. $x^2 + x + 1$ is one of these.

**Why it works.** Multiply out $(x + p)(x + q)$. You get $x^2 + qx + px + pq$, which is $x^2 + (p + q)x + pq$. So the middle number is always $p + q$ and the last number is always $p \times q$. Finding $p$ and $q$ just runs this backwards.

## Always check by multiplying back

Factoring is a guess you can test. Multiply your answer out. If you get the original expression, you are right. If not, try again. This one habit catches almost every mistake.

:::example
title: Factor $2x^2 + 2x - 12$ completely.

1. Pull out the common factor 2: $2(x^2 + x - 6)$.
   why: Every term is a multiple of 2. Pattern 1 always goes first, because it leaves a simpler expression inside.
   uses: []

2. Inside, look for two numbers that multiply to $-6$ and add to $+1$.
   why: The inside is $x^2 + bx + c$ with $b = 1$ and $c = -6$ (Pattern 3).
   uses: []

3. The last number is negative, so the pair has one of each sign. Try $+3$ and $-2$: $3 \times (-2) = -6$ and $3 + (-2) = 1$. Both match.
   why: A negative times a positive is negative. The bigger number gets the plus sign because the sum, $+1$, is positive.
   uses: []

4. Write the answer: $2(x + 3)(x - 2)$.
   why: The pair goes into the brackets, and the 2 from step 1 stays out front.
   uses: []

5. Check by multiplying back: $(x + 3)(x - 2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$. Times 2 gives $2x^2 + 2x - 12$. It matches.
   why: Multiplying back is the test that the factoring is right.
   uses: [expanding]
:::

:::practice
q: Factor $x^3 - 9x$ completely.
answer: First pull out the common factor $x$: $x(x^2 - 9)$. The inside is a difference of two squares, $x^2 - 3^2$. So the answer is $x(x - 3)(x + 3)$. Check: $(x - 3)(x + 3) = x^2 - 9$, and $x(x^2 - 9) = x^3 - 9x$.
:::
