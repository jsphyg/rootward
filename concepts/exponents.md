---
id: exponents
title: Exponents and powers
prereqs: []
big: An exponent is a short way to write "multiply this by itself", and it counts how many times.
recap: An {{exponent|exponent}} says how many times to multiply a thing by itself, so $x^3 = x \cdot x \cdot x$. Multiplying powers of the same base adds the exponents, so $x^2 \cdot x^3 = x^5$.
check:
  q: Which of these is the same as $x^5$?
  options: ["$x^2 \cdot x^3$", "$(x^2)^3$", "$x^2 + x^3$", "$5x$"]
  answer: 0
  why: $x^2 \cdot x^3$ is $(x \cdot x)(x \cdot x \cdot x)$, five x's multiplied, so $x^5$. $(x^2)^3$ is three copies of $x^2$ multiplied, which is six x's. $x^2 + x^3$ is an addition, and adding does not combine powers. $5x$ is $x + x + x + x + x$, five x's added, not multiplied.
---

## Counting multiplications

Look at what happens when you keep multiplying by 2:

| Written out | Short form | Value |
|---|---|---|
| $2$ | $2^1$ | 2 |
| $2 \cdot 2$ | $2^2$ | 4 |
| $2 \cdot 2 \cdot 2$ | $2^3$ | 8 |
| $2 \cdot 2 \cdot 2 \cdot 2$ | $2^4$ | 16 |
| $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$ | $2^5$ | 32 |

*Notice: the small raised number counts the 2's. It does not multiply anything.*

The small raised number is the {{exponent|exponent}}. The number being multiplied is the {{base|base}}. The whole thing, like $2^5$, is called a {{power|power}}. Read $2^5$ as "2 to the power 5" or "2 to the fifth".

Letters work the same way. $x^3$ means $x \cdot x \cdot x$. Two powers have their own names: $x^2$ is "x squared" and $x^3$ is "x cubed".

**The most common slip.** $x^3$ is not $3x$.

- $x^3 = x \cdot x \cdot x$, three x's **multiplied**.
- $3x = x + x + x$, three x's **added**.

Test with $x = 2$. Then $x^3 = 8$, but $3x = 6$.

**What the exponent touches.** An exponent belongs only to the thing just before it. In $3x^2$, only the x is squared, so $3x^2 = 3 \cdot x \cdot x$. The 3 is a {{coeff|coefficient}}. To square the 3 as well, use a bracket: $(3x)^2 = 3x \cdot 3x = 9x^2$.^[n_neg_base]

## Rule 1: multiplying powers adds the exponents

Write $x^2 \cdot x^3$ out in full:

$$x^2 \cdot x^3 = (x \cdot x) \cdot (x \cdot x \cdot x) = x^5$$

There are $2 + 3 = 5$ x's in a row. So:

$$x^a \cdot x^b = x^{a + b}$$

**Why it works.** Each exponent counts x's. Putting the two groups side by side makes one longer row. The count of the combined row is the two counts added.

**Same base only.** $x^2 \cdot y^3$ does not combine, because x's and y's are different things being counted. And this rule is for multiplying, not adding. $x^2 + x^3$ stays as it is.

## Rule 2: dividing powers subtracts the exponents

Write $\dfrac{x^5}{x^2}$ out in full. Then cancel the x's that appear on both top and bottom:

$$\frac{x^5}{x^2} = \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x} = x \cdot x \cdot x = x^3$$

The two x's on the bottom cancel two of the five on top. $5 - 2 = 3$ are left. So:

$$\frac{x^a}{x^b} = x^{a - b}$$

**Why it works.** Each x on the bottom cancels one x on top, because $\dfrac{x}{x} = 1$. So the bottom count is taken away from the top count.^[n_x_not_zero]

## Rule 3: a power of a power multiplies the exponents

Write $(x^2)^3$ out. The outside 3 means three copies of $x^2$, multiplied:

$$(x^2)^3 = x^2 \cdot x^2 \cdot x^2 = (x \cdot x)(x \cdot x)(x \cdot x) = x^6$$

That is 3 groups of 2 x's, so $3 \times 2 = 6$ x's. So:

$$(x^a)^b = x^{a \cdot b}$$

**Why it works.** $b$ copies of a group of $a$ x's is $a \times b$ x's in all.

**Don't mix up Rules 1 and 3.** $x^2 \cdot x^3 = x^5$ (add). $(x^2)^3 = x^6$ (multiply). The bracket is the clue.

## Rule 4: a power of a product goes to every factor

What is $(2x)^3$? Write it out:

$$(2x)^3 = 2x \cdot 2x \cdot 2x = (2 \cdot 2 \cdot 2)(x \cdot x \cdot x) = 8x^3$$

The 2 gets cubed, and so does the x. So:

$$(ab)^n = a^n b^n$$

**Why it works.** Multiplication can be done in any order. So you can gather all the a's together and all the b's together.

**Only for multiplying, never for adding.** $(x + 3)^2$ is **not** $x^2 + 9$. A bracket with a plus inside has to be multiplied out the long way. The [[expanding|expanding brackets]] page shows how.

## The zero exponent: $x^0 = 1$

What could $2^0$ mean? You can't multiply 2 by itself zero times. But read this table from the top down. Each row is the one above it divided by 2:

| Power | Value |
|---|---|
| $2^3$ | 8 |
| $2^2$ | 4 |
| $2^1$ | 2 |
| $2^0$ | 1 |

*Notice: each step down the table divides by 2. Keep the pattern going, and $2^0$ has to be 1.*

Rule 2 gives the same answer. Divide a power by itself:

$$\frac{x^3}{x^3} = x^{3 - 3} = x^0$$

But anything divided by itself is 1. So $x^0 = 1$, for any base except 0.^[n_zero_power]

**Why it works.** Mathematicians *chose* $x^0 = 1$, because it is the only choice that keeps all the rules above true. The same idea, keeping the rules working, also gives meaning to exponents below zero and to fraction exponents like $x^{1/2}$. That is the [[negative-fractional-exponents|next page]].

## The rules on one card

| Rule | In symbols | Example |
|---|---|---|
| Multiply: add exponents | $x^a \cdot x^b = x^{a+b}$ | $x^2 \cdot x^3 = x^5$ |
| Divide: subtract exponents | $x^a / x^b = x^{a-b}$ | $x^5 / x^2 = x^3$ |
| Power of a power: multiply | $(x^a)^b = x^{ab}$ | $(x^2)^3 = x^6$ |
| Power of a product: every factor | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |
| Zero exponent | $x^0 = 1$ | $5^0 = 1$ |

## Check with a number

Exponent work is easy to test. Put $x = 2$ into the start and into your answer. If they give different numbers, something went wrong.

:::example
title: Simplify $\dfrac{(2x^3)^2 \cdot x}{4x^5}$.

1. Square the bracket. Both the 2 and the $x^3$ get squared: $(2x^3)^2 = 2^2 \cdot (x^3)^2 = 4x^6$.
   why: Rule 4 says a power of a product goes to every factor. Then Rule 3 says $(x^3)^2 = x^{3 \cdot 2} = x^6$.
   uses: []

2. Multiply by the x on top: $4x^6 \cdot x = 4x^7$.
   why: A plain x is $x^1$. Rule 1 adds the exponents: $6 + 1 = 7$.
   uses: []

3. The fraction is now $\dfrac{4x^7}{4x^5}$. The 4's cancel, leaving $\dfrac{x^7}{x^5}$.
   why: $\dfrac{4}{4} = 1$. The numbers and the powers of x can be dealt with separately.
   uses: []

4. Divide: $\dfrac{x^7}{x^5} = x^{7 - 5} = x^2$. The answer is $x^2$.
   why: Rule 2 subtracts the exponents.
   uses: []

5. Check with $x = 2$. Top of the start: $(2 \cdot 8)^2 \cdot 2 = 256 \cdot 2 = 512$. Bottom: $4 \cdot 32 = 128$. So the start is $512 / 128 = 4$. The answer is $2^2 = 4$. They match.
   why: A quick number test catches a wrong exponent.
   uses: []
:::

:::practice
q: Simplify $\dfrac{x^2 \cdot (x^3)^4}{x^6}$.
answer: First the power of a power: $(x^3)^4 = x^{12}$. Then multiply: $x^2 \cdot x^{12} = x^{14}$. Then divide: $\dfrac{x^{14}}{x^6} = x^{14 - 6} =$ **$x^8$**. Check with $x = 2$: $4 \cdot 4096 / 64 = 256$, and $2^8 = 256$.
:::

:::problems
q: Work out $3^4$.
answer: $3 \cdot 3 \cdot 3 \cdot 3 = 9 \cdot 9 =$ **81**.

q: Work out $2^5$ and $5^2$. Are they the same?
answer: $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$. $5^2 = 5 \cdot 5 = 25$. **No**, 32 and 25. Swapping the base and exponent changes the answer.

q: Simplify $x^4 \cdot x^5$.
answer: Multiplying adds the exponents: $x^{4+5} =$ **$x^9$**.

q: Simplify $x \cdot x^6$.
answer: A plain x is $x^1$: $x^{1+6} =$ **$x^7$**.

q: Simplify $\dfrac{x^9}{x^3}$.
answer: Dividing subtracts the exponents: $x^{9-3} =$ **$x^6$**. Not $x^3$: dividing does not divide the exponents.

q: Simplify $(x^4)^2$.
answer: Power of a power multiplies: $x^{4 \cdot 2} =$ **$x^8$**.

q: Work out $7^0$ and $(5x)^0$.
answer: Anything (except 0) to the power 0 is 1. **Both are 1.**

q: Simplify $(3x)^2$.
answer: Both factors get squared: $3^2 x^2 =$ **$9x^2$**. Not $3x^2$.

q: Simplify $(2x^2)^3$.
answer: $2^3 \cdot (x^2)^3 = 8x^6$. **$8x^6$**.

q: Simplify $2x^3 \cdot 5x^4$.
answer: Multiply the numbers, then add the exponents: $10x^{3+4} =$ **$10x^7$**.

q: Simplify $\dfrac{12x^8}{4x^2}$.
answer: Divide the numbers, subtract the exponents: $3x^{8-2} =$ **$3x^6$**.

q: Simplify $(2x^3y)^2$.
answer: Every factor gets squared: $2^2 (x^3)^2 y^2 =$ **$4x^6y^2$**.

q: True or false: $x^2 + x^3 = x^5$.
answer: **False.** The add rule is for multiplying, not adding. Test with $x = 2$: $4 + 8 = 12$, but $2^5 = 32$.

q: Simplify $\dfrac{(x^2)^3 \cdot x^4}{x^5}$.
answer: $(x^2)^3 = x^6$. Then $x^6 \cdot x^4 = x^{10}$. Then $\dfrac{x^{10}}{x^5} =$ **$x^5$**. Check with $x = 2$: $64 \cdot 16 / 32 = 32 = 2^5$.

q: Simplify $\dfrac{(3x^2)^2 \cdot 2x}{6x^3}$.
answer: $(3x^2)^2 = 9x^4$. Times $2x$ gives $18x^5$. Divide by $6x^3$: $3x^{5-3} =$ **$3x^2$**. Check with $x = 2$: $144 \cdot 4 / 48 = 12$, and $3 \cdot 4 = 12$.
:::
