---
id: quadratic-formula
title: The quadratic formula
prereqs: [rearranging-formulas, calculus:factoring]
big: The quadratic formula solves any equation of the form $ax^2 + bx + c = 0$, even when factoring does not work.
recap: For $ax^2 + bx + c = 0$, the solutions are $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. The ± gives two answers, one with + and one with −. The part under the root, $b^2 - 4ac$, tells you how many: positive means two, zero means one, negative means none.
check:
  q: Solve $x^2 + 2x - 8 = 0$.
  options: ["$x = 2$ or $x = -4$", "$x = -2$ or $x = 4$", "$x = 2$ only", "$x = 8$ or $x = -1$"]
  answer: 0
  why: Here $a = 1$, $b = 2$, $c = -8$. $b^2 - 4ac = 4 + 32 = 36$, and $\sqrt{36} = 6$. So $x = \dfrac{-2 \pm 6}{2}$, which gives 2 and −4. Check: $4 + 4 - 8 = 0$. "−2 or 4" forgets the minus in $-b$. "2 only" forgets the ±. "8 or −1" mixes up which number is which.
---

## When factoring runs out

The [[calculus:factoring|factoring]] page solves equations like $x^2 + 5x + 6 = 0$ by finding two numbers that multiply to 6 and add to 5. That works when the answers are tidy.

Try $x^2 + 4x - 3 = 0$. You need two numbers that multiply to −3 and add to 4. No whole numbers do it. The answers turn out to be about 0.65 and −4.65. Guessing will never find them.

The quadratic formula always works.

## Standard form

A {{quadratic|quadratic equation}} has an $x^2$ and nothing higher. First, move everything to one side so the other side is 0:

$$ax^2 + bx + c = 0$$

Then read off a, b and c, **with their signs**:

| Equation | a | b | c |
|---|---|---|---|
| $3x^2 + 5x - 2 = 0$ | 3 | 5 | −2 |
| $x^2 - 7 = 0$ | 1 | 0 | −7 |
| $2x^2 = 3x + 4$, which becomes $2x^2 - 3x - 4 = 0$ | 2 | −3 | −4 |

*Notice: a missing term means that letter is 0. A lone $x^2$ means a = 1.*

## The formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The ± sign means "do it twice": once with + and once with −. That gives the two answers.

Solve $x^2 - 2x - 15 = 0$. Here $a = 1$, $b = -2$, $c = -15$.

1. $b^2 - 4ac = (-2)^2 - 4(1)(-15) = 4 + 60 = 64$.
2. $\sqrt{64} = 8$.
3. $x = \dfrac{-(-2) \pm 8}{2(1)} = \dfrac{2 \pm 8}{2}$.
4. With +: $\dfrac{10}{2} = 5$. With −: $\dfrac{-6}{2} = -3$.

Check $x = 5$: $25 - 10 - 15 = 0$. It works.

Work out $b^2 - 4ac$ first, on its own. Most mistakes come from signs, and doing this part separately keeps them under control.

## How many answers?

The part under the square root, $b^2 - 4ac$, is called the {{discriminant|discriminant}}. It decides how many answers there are:

| $b^2 - 4ac$ | Answers | Example |
|---|---|---|
| positive | two | $x^2 - 2x - 15 = 0$ gives 5 and −3 |
| zero | one | $x^2 - 6x + 9 = 0$ gives 3 |
| negative | none (no real number works) | $x^2 + x + 1 = 0$ |

**Why.** When it is zero, $\pm 0$ adds and subtracts nothing, so both answers are the same. When it is negative, there is no ordinary number whose square is negative, so the root cannot be taken.^[n_complex]

## Where the formula comes from

The formula comes from turning the left side into a perfect square, a trick called {{completing-square|completing the square}}. Start with $ax^2 + bx + c = 0$.

1. Divide by a: $x^2 + \dfrac{b}{a}x = -\dfrac{c}{a}$.
2. Add $\left(\dfrac{b}{2a}\right)^2$ to both sides. The left side becomes a perfect square: $\left(x + \dfrac{b}{2a}\right)^2 = \dfrac{b^2 - 4ac}{4a^2}$.
3. Take the square root of both sides, which gives a ±: $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{b^2 - 4ac}}{2a}$.
4. Subtract $\dfrac{b}{2a}$: $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

So the formula is just the same rearranging moves, done once for every quadratic at the same time.

:::example
title: A ball is thrown straight up. Its height in metres after t seconds is $h = 20t - 5t^2$. When is it 15 m high?

1. Set h = 15 and move everything to one side: $5t^2 - 20t + 15 = 0$.
   why: The formula needs the form $at^2 + bt + c = 0$.
   uses: [rearranging-formulas]

2. Read off $a = 5$, $b = -20$, $c = 15$. Then $b^2 - 4ac = 400 - 300 = 100$.
   why: Working out the discriminant first keeps the signs tidy. It is positive, so there are two answers.
   uses: []

3. $t = \dfrac{20 \pm \sqrt{100}}{10} = \dfrac{20 \pm 10}{10}$, so $t = 3$ or $t = 1$.
   why: $-b = -(-20) = 20$ and $2a = 10$.
   uses: []

4. Check $t = 1$: $20 - 5 = 15$. Check $t = 3$: $60 - 45 = 15$. Both work. The ball is 15 m up **at 1 second (going up) and at 3 seconds (coming down)**.
   why: Two answers often both mean something in physics. Here they are the trip up and the trip down.
   uses: []
:::

:::practice
q: Solve $2x^2 + 3x - 2 = 0$.
answer: $a = 2$, $b = 3$, $c = -2$. $b^2 - 4ac = 9 + 16 = 25$, root 5. $x = \dfrac{-3 \pm 5}{4}$, so **$x = \tfrac{1}{2}$ or $x = -2$**. Check $\tfrac{1}{2}$: $2 \cdot \tfrac{1}{4} + \tfrac{3}{2} - 2 = 0$.
:::

:::problems
q: Find a, b and c for $3x^2 + 5x - 2 = 0$.
answer: **$a = 3$, $b = 5$, $c = -2$.**

q: Find a, b and c for $x^2 - 7 = 0$.
answer: There is no x term, so **$a = 1$, $b = 0$, $c = -7$.**

q: Put $2x^2 = 3x + 4$ in standard form.
answer: Subtract $3x$ and 4 from both sides: **$2x^2 - 3x - 4 = 0$**.

q: Solve $x^2 + 5x + 6 = 0$ with the formula.
answer: $b^2 - 4ac = 25 - 24 = 1$. $x = \dfrac{-5 \pm 1}{2}$: **$x = -2$ or $x = -3$**. (Factoring gives $(x + 2)(x + 3)$, the same.)

q: Solve $x^2 - 2x - 15 = 0$.
answer: $4 + 60 = 64$, root 8. $x = \dfrac{2 \pm 8}{2}$: **$x = 5$ or $x = -3$**.

q: Solve $3x^2 - 2x - 1 = 0$.
answer: $4 + 12 = 16$, root 4. $x = \dfrac{2 \pm 4}{6}$: **$x = 1$ or $x = -\tfrac{1}{3}$**.

q: Solve $x^2 - 6x + 9 = 0$.
answer: $36 - 36 = 0$, so one answer: $x = \dfrac{6}{2} =$ **3**.

q: Solve $4x^2 - 12x + 9 = 0$.
answer: $144 - 144 = 0$, one answer: $x = \dfrac{12}{8} =$ **1.5**.

q: How many solutions does $x^2 + x + 1 = 0$ have?
answer: $1 - 4 = -3$, negative: **none**.

q: How many solutions does $2x^2 - 4x + 5 = 0$ have?
answer: $16 - 40 = -24$, negative: **none**.

q: Solve $x^2 - 5 = 0$ with the formula.
answer: $a = 1$, $b = 0$, $c = -5$. $0 + 20 = 20$. $x = \dfrac{0 \pm \sqrt{20}}{2}$: **$x \approx 2.24$ or $x \approx -2.24$** (exactly $\pm\sqrt{5}$).

q: Solve $x^2 + 4x - 3 = 0$, to 2 decimal places.
answer: $16 + 12 = 28$, $\sqrt{28} \approx 5.292$. $x = \dfrac{-4 \pm 5.292}{2}$: **$x \approx 0.65$ or $x \approx -4.65$**.

q: A ball's height is $h = 20t - 5t^2$. When does it land (h = 0) after being thrown?
answer: $5t^2 - 20t = 0$, so $a = 5$, $b = -20$, $c = 0$. $400 - 0 = 400$, root 20. $t = \dfrac{20 \pm 20}{10}$: 0 or 4. t = 0 is the throw, so it lands at **t = 4 s**.

q: A ball thrown from a 15 m cliff has height $h = 15 + 10t - 5t^2$. When does it hit the ground?
answer: $5t^2 - 10t - 15 = 0$. $100 + 300 = 400$, root 20. $t = \dfrac{10 \pm 20}{10}$: 3 or −1. Time cannot be before the throw, so **t = 3 s**.

q: A rectangle is 3 cm longer than it is wide, and its area is 40 cm². Find its width and length.
answer: $w(w + 3) = 40$, so $w^2 + 3w - 40 = 0$. $9 + 160 = 169$, root 13. $w = \dfrac{-3 \pm 13}{2}$: 5 or −8. A width cannot be negative: **5 cm wide, 8 cm long**.
:::
