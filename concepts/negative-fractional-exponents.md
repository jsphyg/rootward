---
id: negative-fractional-exponents
title: Negative and fractional exponents
prereqs: [exponents]
big: A negative exponent means "divide instead of multiply", and a fraction exponent means "take a root".
recap: A negative exponent means one over the power, so $x^{-2} = \dfrac{1}{x^2}$. A fraction exponent is a root, so $x^{1/2} = \sqrt{x}$ and $x^{1/3}$ is the cube root of x.
check:
  q: Which of these is the same as $\dfrac{1}{\sqrt{x}}$?
  options: ["$x^{-1/2}$", "$x^{-2}$", "$-x^{1/2}$", "$x^{1/2}$"]
  answer: 0
  why: $\sqrt{x} = x^{1/2}$, and one over a power makes the exponent negative, so $\dfrac{1}{\sqrt{x}} = x^{-1/2}$. $x^{-2}$ is $\dfrac{1}{x^2}$, one over x squared, not one over the square root. $-x^{1/2}$ is $-\sqrt{x}$, a negative number. A negative exponent does not make the answer negative. $x^{1/2}$ is $\sqrt{x}$ itself, with nothing divided.
---

## Keep the pattern going

On the [[exponents|exponents]] page, each step down this table divided by 2. Keep going past zero:

| Power | Value |
|---|---|
| $2^3$ | 8 |
| $2^2$ | 4 |
| $2^1$ | 2 |
| $2^0$ | 1 |
| $2^{-1}$ | $\frac{1}{2}$ |
| $2^{-2}$ | $\frac{1}{4}$ |
| $2^{-3}$ | $\frac{1}{8}$ |

*Notice: $2^{-3}$ is $\frac{1}{8}$, and $8 = 2^3$. The minus sign put the power on the bottom of a fraction.*

## Negative exponents mean "one over"

The pattern gives the rule:

$$x^{-n} = \frac{1}{x^n}$$

$\dfrac{1}{x^n}$ is called the {{reciprocal|reciprocal}} of $x^n$. So a negative exponent means "the reciprocal of the power".

**Why it works.** Divide $x^2$ by $x^5$ in two ways. Cancelling gives:

$$\frac{x^2}{x^5} = \frac{x \cdot x}{x \cdot x \cdot x \cdot x \cdot x} = \frac{1}{x \cdot x \cdot x} = \frac{1}{x^3}$$

The subtract rule gives $x^{2 - 5} = x^{-3}$. Both are the same division, so $x^{-3}$ must equal $\dfrac{1}{x^3}$. Defining it this way keeps every exponent rule working.^[n_neg_not_zero]

**A negative exponent does not make the answer negative.** $2^{-3} = \frac{1}{8}$, not $-8$. The minus sign says "on the bottom", not "below zero".

## Moving powers between top and bottom

The rule works both ways. A power on the bottom can move to the top by flipping the sign of its exponent:

| Fraction | As a power |
|---|---|
| $\dfrac{1}{x}$ | $x^{-1}$ |
| $\dfrac{1}{x^4}$ | $x^{-4}$ |
| $\dfrac{3}{x^2}$ | $3x^{-2}$ |
| $\dfrac{1}{3x^2}$ | $\dfrac{1}{3}x^{-2}$ |

*Notice: only the power of x moves. A plain number stays where it is. $\dfrac{1}{3x^2}$ is **not** $3x^{-2}$.*

## Fraction exponents mean roots

What could $x^{1/2}$ mean? Use the multiply rule, which adds exponents:

$$x^{1/2} \cdot x^{1/2} = x^{1/2 + 1/2} = x^1 = x$$

So $x^{1/2}$ is the number that, multiplied by itself, gives x. That is the {{square-root|square root}}:

$$x^{1/2} = \sqrt{x}$$

For example, $9^{1/2} = 3$, because $3 \cdot 3 = 9$.

The same reasoning works for other fractions. Three copies of $x^{1/3}$ multiply to $x^1$, so $x^{1/3}$ is the {{cube-root|cube root}}. For example, $8^{1/3} = 2$, because $2 \cdot 2 \cdot 2 = 8$. In general, $x^{1/n}$ is the {{root|nth root}} of x.^[n_even_root]

**Why it works.** Again, no one can "multiply x by itself half a time". The meaning is chosen so the add rule stays true. Once you pick that, $x^{1/2}$ has to be the square root.

## Fractions with a top number other than 1

$x^{3/2}$ is $x^{1/2}$ cubed, by the power-of-a-power rule, because $\frac{1}{2} \times 3 = \frac{3}{2}$:

$$x^{3/2} = \left(x^{1/2}\right)^3 = \left(\sqrt{x}\right)^3$$

So the **bottom** of the fraction is the root, and the **top** is the power. For example:

$$4^{3/2} = \left(\sqrt{4}\right)^3 = 2^3 = 8$$

Taking the root first keeps the numbers small. Doing it the other way also works: $4^3 = 64$, and $\sqrt{64} = 8$.

## Why calculus cares

Many calculus rules, like the [[power-rule|power rule]], only work on a power of x written as $x^n$. Roots and fractions have to be rewritten first. That is the main use of this page.

| Written as | Rewritten as a power of x |
|---|---|
| $\sqrt{x}$ | $x^{1/2}$ |
| $\dfrac{1}{x^3}$ | $x^{-3}$ |
| $\dfrac{1}{\sqrt{x}}$ | $x^{-1/2}$ |
| $x\sqrt{x}$ | $x^{3/2}$ |
| $\sqrt[3]{x^2}$ | $x^{2/3}$ |

*Notice: $x\sqrt{x}$ is $x^1 \cdot x^{1/2}$, and the multiply rule gives $x^{1 + 1/2} = x^{3/2}$.*

:::example
title: Rewrite $\dfrac{2}{\sqrt{x}} + x^2\sqrt{x}$ using only powers of x.

1. Write each root as a fraction exponent: $\sqrt{x} = x^{1/2}$. The expression becomes $\dfrac{2}{x^{1/2}} + x^2 \cdot x^{1/2}$.
   why: A square root is the power $\frac{1}{2}$.
   uses: []

2. Move the power on the bottom up to the top: $\dfrac{2}{x^{1/2}} = 2x^{-1/2}$.
   why: One over a power is the same power with a negative exponent. The 2 is a plain number, so it stays.
   uses: []

3. Combine the second term: $x^2 \cdot x^{1/2} = x^{2 + 1/2} = x^{5/2}$.
   why: Multiplying powers of the same base adds the exponents, and $2 + \frac{1}{2} = \frac{5}{2}$.
   uses: [exponents]

4. The answer is $2x^{-1/2} + x^{5/2}$.
   why: Both terms are now a number times a power of x, the form calculus rules need.
   uses: []

5. Check with $x = 4$. Start: $\dfrac{2}{2} + 16 \cdot 2 = 1 + 32 = 33$. Answer: $2 \cdot \dfrac{1}{2} + \left(\sqrt{4}\right)^5 = 1 + 32 = 33$. They match.
   why: $x = 4$ has a whole-number square root, so the check is easy to do by hand.
   uses: []
:::

:::practice
q: Write $\dfrac{x^3}{\sqrt{x}}$ as a single power of x.
answer: Rewrite the root: $\sqrt{x} = x^{1/2}$. Divide by subtracting exponents: $x^{3 - 1/2} =$ **$x^{5/2}$**. Check with $x = 4$: $\dfrac{64}{2} = 32$, and $4^{5/2} = 2^5 = 32$.
:::
