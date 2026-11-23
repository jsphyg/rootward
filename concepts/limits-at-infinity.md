---
id: limits-at-infinity
title: Limits at infinity
prereqs: [limits]
big: A limit at infinity asks where a function's output settles as x gets bigger and bigger, without end.
recap: $\displaystyle\lim_{x \to \infty} f(x) = L$ means $f(x)$ gets as close to L as you like once x is large enough. The line $y = L$ is then a {{asymptote|horizontal asymptote}}. For a fraction of polynomials, divide every term by the highest power of x on the bottom.
check:
  q: What is $\displaystyle\lim_{x \to \infty} \frac{3x^2 + 1}{x^2 - 5}$?
  options: ["3", "It grows without end", "0", "$-\tfrac{1}{5}$"]
  answer: 0
  why: For huge x, the $x^2$ terms swamp the plain numbers, so the fraction acts like $\frac{3x^2}{x^2} = 3$. "Grows without end" looks only at the top, but the bottom grows just as fast. 0 would need the bottom to grow faster. $-\tfrac{1}{5}$ is what you get by plugging in $x = 0$, which has nothing to do with large x.
---

## Settling down far out

Feed $\dfrac{1}{x}$ bigger and bigger inputs:

| $x$ | 10 | 100 | 1000 | 1,000,000 |
|---|---|---|---|---|
| $\dfrac{1}{x}$ | 0.1 | 0.01 | 0.001 | 0.000001 |

*Notice: the outputs shrink toward 0. They never reach it, but they get as close as you like.*

Now try $\dfrac{2x + 1}{x}$:

| $x$ | 10 | 100 | 1000 | 1,000,000 |
|---|---|---|---|---|
| $\dfrac{2x + 1}{x}$ | 2.1 | 2.01 | 2.001 | 2.000001 |

These settle on 2. We write

$$\lim_{x \to \infty} \frac{1}{x} = 0 \qquad \lim_{x \to \infty} \frac{2x + 1}{x} = 2$$

Read $x \to \infty$ as "as x grows without end". The symbol $\infty$ is not a number you can plug in. It is short for "keep going bigger, forever".^[n_neg_inf]

:::widget plot
fn: x > 0.15 ? (2*x + 1)/x : NaN
x: -0.6 10.5
y: -0.6 4.6
caption: The graph of (2x + 1)/x. Far to the right, the curve flattens out just above the height 2. It gets ever closer to that level but never touches it.
:::

The level the graph settles toward is called a {{asymptote|horizontal asymptote}}. Here it is the line $y = 2$.

## The key fact

$$\lim_{x \to \infty} \frac{c}{x^n} = 0 \quad \text{for any number c and any power } n > 0$$

**Why it works.** A fixed number divided by a huge number is tiny. And $x^n$ gets huge as x does, so $\dfrac{c}{x^n}$ shrinks toward 0.

Every other limit at infinity on this page comes down to this one fact.

## Fractions of polynomials

Take $\dfrac{3x^2 + 1}{x^2 - 5}$. Plugging in "infinity" makes no sense, and both top and bottom grow without end. So rewrite it.

**Method: divide every term by the highest power of x on the bottom.** Here that is $x^2$:

$$\frac{3x^2 + 1}{x^2 - 5} = \frac{\dfrac{3x^2}{x^2} + \dfrac{1}{x^2}}{\dfrac{x^2}{x^2} - \dfrac{5}{x^2}} = \frac{3 + \dfrac{1}{x^2}}{1 - \dfrac{5}{x^2}}$$

As x grows, $\dfrac{1}{x^2}$ and $\dfrac{5}{x^2}$ shrink to 0 by the key fact. What is left is $\dfrac{3 + 0}{1 - 0} = 3$.

**Why the method works.** Dividing top and bottom by the same thing does not change the fraction's value. It just rewrites it so that every piece either stays fixed or shrinks to 0.

**The shortcut behind it.** For huge x, the highest-power terms swamp everything else. At $x = 1000$, $3x^2$ is 3,000,000, and the $+1$ hardly matters. So compare the highest powers on top and bottom:

| highest powers | limit | example |
|---|---|---|
| same on top and bottom | ratio of the numbers in front | $\dfrac{3x^2 + 1}{x^2 - 5} \to 3$ |
| bigger on the bottom | 0 | $\dfrac{5x + 2}{x^2 + 1} \to 0$ |
| bigger on top | no limit: it grows without end | $\dfrac{x^3}{x^2 + 1}$ |

## Exponentials far out

A shrinking exponential heads to 0. $\left(\tfrac{1}{2}\right)^x$ halves at every step, so $\displaystyle\lim_{x \to \infty} \left(\tfrac{1}{2}\right)^x = 0$. The same goes for $2^{-x}$, which is the same function, and for $e^{-x}$.

A growing exponential like $2^x$ has no limit at infinity. It grows without end, and faster than any power of x.

## Why calculus cares

Limits at infinity describe the **long run**: where a cooling cup of coffee ends up, the top speed a falling object approaches, or the level a population levels off at. They also appear inside other ideas. The number e on the [[exponential-functions|exponential functions]] page is the limit of $\left(1 + \tfrac{1}{n}\right)^n$ as n grows without end.

:::example
title: Find $\displaystyle\lim_{x \to \infty} \frac{4x^3 - x}{2x^3 + 5x^2}$.

1. Find the highest power of x on the bottom: $x^3$.
   why: Dividing by it turns every term into a constant or something that shrinks to 0.
   uses: []

2. Divide every term on top and bottom by $x^3$: $\dfrac{4 - \dfrac{1}{x^2}}{2 + \dfrac{5}{x}}$.
   why: $\dfrac{4x^3}{x^3} = 4$, $\dfrac{x}{x^3} = \dfrac{1}{x^2}$, $\dfrac{2x^3}{x^3} = 2$ and $\dfrac{5x^2}{x^3} = \dfrac{5}{x}$. Dividing top and bottom by the same thing keeps the value the same.
   uses: [exponents]

3. Let x grow: $\dfrac{1}{x^2} \to 0$ and $\dfrac{5}{x} \to 0$.
   why: The key fact: a fixed number over a growing power of x shrinks to 0.
   uses: []

4. What is left is $\dfrac{4 - 0}{2 + 0} = 2$.
   why: The limit laws let us take the limit of each piece.
   uses: [limits]

5. Check with the shortcut: the highest powers are both $x^3$, and the numbers in front are 4 and 2. Their ratio is 2.
   why: Two methods agreeing is a good sign.
   uses: []
:::

:::practice
q: Find $\displaystyle\lim_{x \to \infty} \frac{5x + 2}{x^2 + 1}$.
answer: Divide every term by $x^2$: $\dfrac{\frac{5}{x} + \frac{2}{x^2}}{1 + \frac{1}{x^2}}$. As x grows, the top heads to $0 + 0 = 0$ and the bottom to 1. So the limit is **0**. The bottom's higher power wins.
:::
