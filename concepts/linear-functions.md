---
id: linear-functions
title: Lines and linear functions
prereqs: [slope]
big: A linear function is a function whose graph is a straight line. Its rule is $y = mx + b$, where m is the slope and b is the height where the line crosses the y-axis.
recap: A {{linear|linear function}} has the rule $f(x) = mx + b$. m is the slope: how far the line rises for each step right. b is the {{intercept|y-intercept}}: the output when $x = 0$, where the line crosses the y-axis.
check:
  q: For the line $y = 3x - 2$, what are the slope and the y-intercept?
  options: ["Slope 3, crosses the y-axis at $-2$", "Slope $-2$, crosses the y-axis at 3", "Slope 3, crosses the y-axis at 2", "Slope 3, crosses the x-axis at $-2$"]
  answer: 0
  why: In $y = mx + b$, the number multiplying x is the slope, so $m = 3$. The number on its own is b, including its sign, so $b = -2$. That is the height at $x = 0$: $3 \cdot 0 - 2 = -2$. The second option swaps m and b. The third drops the minus sign. The fourth mixes up the axes: b is where the line meets the y-axis, not the x-axis.
---

## Same change, every step

Compare two rules, stepping x up by 1 each time:

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $2x + 1$ | 1 | 3 | 5 | 7 | 9 |
| $x^2$ | 0 | 1 | 4 | 9 | 16 |

*Notice: $2x + 1$ goes up by exactly 2 every step. $x^2$ goes up by 1, then 3, then 5, then 7. Only the steady one makes a straight line.*

A function that changes by the same amount for every step is called a {{linear|linear function}}.^[n_linear] Its graph is a straight line, and that steady change per step is its [[slope|slope]].

## The rule $y = mx + b$

Every linear function can be written as

$$f(x) = mx + b \qquad \text{or} \qquad y = mx + b$$

Each letter has a job.

- **m is the slope.** Each step of 1 to the right adds another m to the output.
- **b is the starting height.** At $x = 0$ the rule gives $m \cdot 0 + b = b$. So the line crosses the y-axis at the point $(0, b)$. This height is called the {{intercept|y-intercept}}.

**Why m is the slope.** Go from x to $x + 1$. The output goes from $mx + b$ to $m(x + 1) + b = mx + m + b$. The difference is exactly m, wherever you start. A rise of m for a run of 1 is a slope of m.

:::widget line-builder

## Drawing a line from its rule

You only need two facts from the rule.

1. Start at $(0, b)$ on the y-axis.
2. From there, step 1 right and m up (or down, if m is negative). Mark that point.
3. Join the two points and extend the line both ways.

For $y = 2x + 1$: start at $(0, 1)$, step to $(1, 3)$, and draw the line through them.

## Special lines

- **Flat lines.** If $m = 0$, the rule is just $y = b$. Every input gives the same output, so the line is level. For example, $y = 4$ is a flat line at height 4.
- **Lines through the origin.** If $b = 0$, the rule is $y = mx$, and the line passes through $(0, 0)$.
- **Vertical lines** cannot be written as $y = mx + b$. They are written like $x = 3$. They are not functions at all, because one input has many outputs.

## Finding the rule from two points

If you know two points on a line, you can find its rule in two moves.

1. Find m: the slope between the two points.
2. Find b: put one point's x and y into $y = mx + b$, then solve for b.

**Why step 2 works.** Every point on the line fits the rule. So putting in a real point gives a true equation, with b as the only unknown.^[n_point_slope]

## Lines as rates

Linear functions describe anything that starts at some amount and then changes at a steady rate.

A taxi charges 3 dollars to get in, plus 2 dollars per kilometre. The fare for x km is

$$f(x) = 2x + 3$$

- m = 2 is the rate: dollars per kilometre.
- b = 3 is the starting amount: the fare before you have gone anywhere.

A 10 km ride costs $2 \cdot 10 + 3 = 23$ dollars.

## Why lines matter in calculus

Curves are hard to work with. Lines are easy. The big idea of calculus is that if you zoom in far enough on a smooth curve, it looks like a straight line. That line is the tangent line, and its slope is the derivative. So lines keep coming back, even on pages about curves.

:::example
title: Find the rule for the line through $(1, 5)$ and $(3, 11)$.

1. Find the slope: $m = \dfrac{11 - 5}{3 - 1} = \dfrac{6}{2} = 3$.
   why: Rise over run between the two points.
   uses: [slope]

2. Put the slope into the rule: $y = 3x + b$.
   why: m is now known. Only b is left to find.
   uses: []

3. Put in the point $(1, 5)$: $5 = 3 \cdot 1 + b$, so $5 = 3 + b$.
   why: The point is on the line, so its x and y must fit the rule.
   uses: [functions]

4. Solve for b: $b = 5 - 3 = 2$. The rule is $y = 3x + 2$.
   why: Take 3 from both sides.
   uses: []

5. Check with the other point, $(3, 11)$: $3 \cdot 3 + 2 = 9 + 2 = 11$. It fits.
   why: Both points must fit the rule. Testing the point you did not use catches a slip.
   uses: []
:::

:::practice
q: Find the rule for the line through $(2, 1)$ and $(6, -7)$.
answer: Slope: $m = \dfrac{-7 - 1}{6 - 2} = \dfrac{-8}{4} = -2$. Put in $(2, 1)$: $1 = -2 \cdot 2 + b = -4 + b$, so $b = 5$. The rule is **$y = -2x + 5$**. Check $(6, -7)$: $-12 + 5 = -7$. It fits.
:::

:::problems
q: Give the slope and y-intercept of $y = 5x + 1$.
answer: The number times x is the slope: **$m = 5$**. The number on its own is **$b = 1$**.

q: Give the slope and y-intercept of $y = -x + 4$.
answer: $-x$ means $-1 \cdot x$, so **$m = -1$**. And **$b = 4$**.

q: Give the slope and y-intercept of $y = 7 - 2x$.
answer: Reorder it as $y = -2x + 7$. The minus belongs to the 2, so **$m = -2$** and **$b = 7$**.

q: Give the slope and y-intercept of $y = 3x$ and of $y = 6$.
answer: $y = 3x$ is $3x + 0$: **slope 3, intercept 0**, so it passes through the origin. $y = 6$ is $0x + 6$: **slope 0, intercept 6**, a flat line.

q: Let $f(x) = 4x - 3$. Find $f(2)$ and $f(0)$.
answer: $f(2) = 8 - 3 =$ **5**. $f(0) = 0 - 3 =$ **$-3$**, which is the y-intercept.

q: Write the rule for the line with slope 2 that crosses the y-axis at $-5$.
answer: $m = 2$ and $b = -5$, so **$y = 2x - 5$**.

q: Find the rule for the line through $(0, 3)$ and $(2, 11)$.
answer: Slope: $\dfrac{11 - 3}{2 - 0} = \dfrac{8}{2} = 4$. The point $(0, 3)$ is on the y-axis, so $b = 3$. The rule is **$y = 4x + 3$**. Check: $4 \cdot 2 + 3 = 11$.

q: Find the rule for the line through $(1, 2)$ and $(3, 8)$.
answer: Slope: $\dfrac{8 - 2}{3 - 1} = 3$. Put in $(1, 2)$: $2 = 3 + b$, so $b = -1$. The rule is **$y = 3x - 1$**. Check $(3, 8)$: $9 - 1 = 8$.

q: Find the rule for the line through $(-1, 7)$ and $(2, -2)$.
answer: Slope: $\dfrac{-2 - 7}{2 - (-1)} = \dfrac{-9}{3} = -3$. Put in $(-1, 7)$: $7 = -3(-1) + b = 3 + b$, so $b = 4$. The rule is **$y = -3x + 4$**. Check $(2, -2)$: $-6 + 4 = -2$.

q: Find the rule for the line through $(2, 4)$ and $(6, 6)$.
answer: Slope: $\dfrac{6 - 4}{6 - 2} = \dfrac{2}{4} = \tfrac{1}{2}$. Put in $(2, 4)$: $4 = \tfrac{1}{2} \cdot 2 + b = 1 + b$, so $b = 3$. The rule is **$y = \tfrac{1}{2}x + 3$**. Check $(6, 6)$: $3 + 3 = 6$.

q: Find the rule for the line through $(-4, -1)$ and $(2, 2)$.
answer: Slope: $\dfrac{2 - (-1)}{2 - (-4)} = \dfrac{3}{6} = \tfrac{1}{2}$. Put in $(2, 2)$: $2 = 1 + b$, so $b = 1$. The rule is **$y = \tfrac{1}{2}x + 1$**. Check $(-4, -1)$: $-2 + 1 = -1$.

q: Where does the line $y = 2x - 6$ cross the x-axis?
answer: On the x-axis, $y = 0$. So $0 = 2x - 6$. Add 6: $2x = 6$. Halve: $x = 3$. It crosses at **$(3, 0)$**.

q: A plumber charges 50 dollars to come out, plus 30 dollars per hour. Write the cost for h hours, and find the cost of a 3.5 hour job.
answer: Start amount 50, rate 30 per hour: **$C(h) = 30h + 50$**. For 3.5 hours: $30 \cdot 3.5 + 50 = 105 + 50 =$ **155 dollars**.

q: A phone plan costs 40 dollars for 100 minutes and 55 dollars for 200 minutes. It is a linear function of the minutes x. Find its rule.
answer: Slope: $\dfrac{55 - 40}{200 - 100} = \dfrac{15}{100} = 0.15$ dollars per minute. Put in $(100, 40)$: $40 = 0.15 \cdot 100 + b = 15 + b$, so $b = 25$. The rule is **$f(x) = 0.15x + 25$**: a 25 dollar base fee plus 15 cents a minute. Check: $0.15 \cdot 200 + 25 = 55$.
:::
