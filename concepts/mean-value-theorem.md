---
id: mean-value-theorem
title: The mean value theorem
prereqs: [continuity, power-rule, sum-constant-rules]
big: If you average 60 km/h on a trip, then at some moment your speedometer read exactly 60. For a smooth function, the slope at some point always equals the average slope over the whole stretch.
recap: If f is continuous from a to b, and has a derivative everywhere between them, then at some c between a and b, $f'(c) = \dfrac{f(b) - f(a)}{b - a}$. The tangent at c is parallel to the line joining the ends. One big consequence: if $f'(x) = 0$ everywhere, f is constant.
check:
  q: f is smooth, $f(1) = 3$ and $f(5) = 11$. What does the mean value theorem say?
  options: ["$f'(c) = 2$ for some c between 1 and 5", "$f'(c) = 8$ for some c between 1 and 5", "$f'(x) = 2$ for every x between 1 and 5"]
  answer: 0
  why: The average slope is $\frac{11 - 3}{5 - 1} = \frac{8}{4} = 2$. The theorem promises at least one point where the slope equals that. 8 is the total rise, not divided by the run. And the theorem only promises one point, not every point: the slope can be different elsewhere.
---

## A speeding ticket without a radar

A motorway has two cameras 60 km apart. A car passes the first at 2:00 and the second at 2:30. It covered 60 km in half an hour: an average of 120 km/h. The limit is 100 km/h.

The driver says: "You never caught me going over 100." But the police can prove that, at some moment, the car was going **exactly** 120 km/h. If it had stayed below 120 the whole time, it could not have averaged 120.

That is the mean value theorem, in everyday clothes.^[n_average_speed]

## The theorem

Let f be a function on the stretch from a to b. Suppose:

1. f is [[continuity|continuous]] from a to b, including the ends: no jumps or gaps, and
2. f has a derivative at every point strictly between a and b: no sharp corners.

Then there is at least one point c between a and b where

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

The right side is the **average slope**: the slope of the straight line joining the two ends. The left side is the **slope at one point**. So the theorem says: somewhere, the tangent line is parallel to the line joining the ends.

:::widget mvt-tangent

## Finding c

For $f(x) = x^3$ from 0 to 2:

- The average slope is $\dfrac{8 - 0}{2 - 0} = 4$.
- The slope at x is $f'(x) = 3x^2$. Set $3c^2 = 4$, so $c^2 = \tfrac{4}{3}$ and $c = \tfrac{2}{\sqrt{3}} \approx 1.155$.

It lies between 0 and 2, as promised. That is where the widget's lines turn parallel.

**The theorem does not say where c is, or how many there are.** It only promises at least one. Sometimes you can solve for c, as here. Often you cannot, and the theorem is still useful just knowing c exists.

## Why it is true

Start with the special case where both ends are at the same height, $f(a) = f(b)$. Then the average slope is 0, and the claim is that the curve is flat somewhere in between.

The curve starts and ends at the same height. If it goes up at all, it must come back down, so it has a highest point in between. If it goes down at all, it has a lowest point. Either way there is a peak or a valley, and at a smooth peak or valley the slope is 0. (If it never goes up or down, it is flat everywhere.) This special case is called **Rolle's theorem**.^[n_rolle]

For the general case, tilt the picture. Subtract the straight line joining the ends from f. What is left starts and ends at height 0, so by Rolle's theorem it is flat somewhere. Where it is flat, f has exactly the slope of the line.

## Both conditions matter

**A corner breaks it.** $f(x) = |x|$ from $-1$ to 1 starts and ends at height 1, so the average slope is 0. But the slope is $-1$ on the left and $+1$ on the right. It is never 0. There is no contradiction: $|x|$ has no derivative at 0, so condition 2 fails.

**A jump breaks it.** A function that is 0 up to $x = 1$ and then jumps to 1 has an average slope of $\tfrac{1}{2}$ from 0 to 2. But wherever it has a slope, the slope is 0. Condition 1 fails.

## What it is good for

The theorem connects the slope at single points to change over a whole stretch. That gives facts that seem obvious but need proof:

- **Zero slope everywhere means constant.** If $f'(x) = 0$ for every x, then for any two inputs, the average slope between them is some $f'(c) = 0$. So $f(b) = f(a)$, every time. f never changes.
- **Same slope means same shape.** If two functions have the same derivative everywhere, their difference has derivative 0, so it is constant. The two graphs are the same curve, shifted up or down. This fact is the foundation of the antiderivatives page.
- **Positive slope means increasing.** If $f' > 0$ everywhere, the average slope between any two points is positive, so f really does go up. This is what makes the sign charts on earlier pages work.

:::example
title: Find the c promised by the mean value theorem for $f(x) = x^2 - 4x$ from 1 to 5.

1. Check the conditions. f is a polynomial, so it is continuous everywhere and has a derivative everywhere.
   why: Polynomials have no jumps and no corners.
   uses: [continuity]

2. Average slope: $f(1) = 1 - 4 = -3$ and $f(5) = 25 - 20 = 5$. So $\dfrac{5 - (-3)}{5 - 1} = \dfrac{8}{4} = 2$.
   why: This is the slope of the line joining the two ends.
   uses: []

3. Slope at a point: $f'(x) = 2x - 4$.
   why: The power rule on each term.
   uses: [power-rule, sum-constant-rules]

4. Set them equal: $2c - 4 = 2$, so $c = 3$.
   why: The theorem says some c has $f'(c)$ equal to the average slope.
   uses: []

5. Check that c is inside: 3 is between 1 and 5. Yes.
   why: The theorem only promises a c strictly between the ends.
   uses: []
:::

:::practice
q: Find the c promised by the mean value theorem for $f(x) = x^2$ from 0 to 4.
answer: Average slope: $\dfrac{16 - 0}{4 - 0} = 4$. $f'(c) = 2c = 4$, so **$c = 2$**.
:::

:::problems
q: Find c for $f(x) = x^3$ from 0 to 3.
answer: Average slope $\dfrac{27 - 0}{3} = 9$. $3c^2 = 9$, so $c^2 = 3$ and **$c = \sqrt{3} \approx 1.73$** (the positive root, since c must be between 0 and 3).

q: Find c for $f(x) = 3x + 2$ from 0 to 10. What is special here?
answer: Average slope $\dfrac{32 - 2}{10} = 3$, and $f'(x) = 3$ everywhere. **Every c between 0 and 10 works.** A straight line has the same slope at every point.

q: Find c for $f(x) = \dfrac{1}{x}$ from 1 to 4.
answer: Average slope $\dfrac{\tfrac{1}{4} - 1}{3} = -\dfrac{1}{4}$. $f'(x) = -\dfrac{1}{x^2}$, so $-\dfrac{1}{c^2} = -\dfrac{1}{4}$, giving **$c = 2$**.

q: Find c for $f(x) = \sqrt{x}$ from 0 to 4.
answer: Average slope $\dfrac{2 - 0}{4} = \dfrac{1}{2}$. $f'(x) = \dfrac{1}{2\sqrt{x}}$, so $\dfrac{1}{2\sqrt{c}} = \dfrac{1}{2}$, giving $\sqrt{c} = 1$ and **$c = 1$**.

q: Check Rolle's theorem for $f(x) = x^2 - 2x$ from 0 to 2, and find c.
answer: $f(0) = 0$ and $f(2) = 0$: the ends are level. $f'(x) = 2x - 2 = 0$ at **$c = 1$**, which is between 0 and 2. That is the bottom of the parabola.

q: Find c for $f(x) = x^3 - x$ from $-2$ to 2.
answer: $f(-2) = -6$ and $f(2) = 6$, so the average slope is $\dfrac{12}{4} = 3$. $3c^2 - 1 = 3$, so $c^2 = \dfrac{4}{3}$ and **$c = \pm\dfrac{2}{\sqrt{3}} \approx \pm 1.15$**. Both are inside, so this time there are two.

q: A car drives 150 km in 1.5 hours. What can you say for certain about its speed?
answer: Its average speed is $\dfrac{150}{1.5} = 100$ km/h. So **at some moment it was going exactly 100 km/h**.

q: Two speed cameras are 60 km apart. A car passes them 30 minutes apart, on a road with a 100 km/h limit. Can the police prove it sped?
answer: **Yes.** Its average was $\dfrac{60}{0.5} = 120$ km/h. By the mean value theorem, at some moment its speed was exactly 120 km/h, over the limit.

q: $f(x) = |x|$ has $f(-1) = f(1)$, but its slope is never 0. Why does this not break Rolle's theorem?
answer: **$|x|$ has no derivative at 0**, where it has a sharp corner. Rolle's theorem needs a derivative at every point in between, so it does not apply.

q: $f'(x) = 0$ for every x, and $f(2) = 5$. What is $f(7)$?
answer: **5.** By the mean value theorem, $f(7) - f(2) = f'(c) \cdot 5 = 0$ for some c. A function with zero slope everywhere is constant.

q: $f'(x) = 3$ for every x, and $f(0) = 1$. Explain why $f(x) = 3x + 1$.
answer: Let $g(x) = f(x) - (3x + 1)$. Then $g'(x) = 3 - 3 = 0$ everywhere, so g is constant. $g(0) = 1 - 1 = 0$, so **g is always 0**, and $f(x) = 3x + 1$.

q: $f(1) = 2$, and $f'(x) \leq 4$ for every x. What is the largest $f(3)$ could be?
answer: $f(3) - f(1) = f'(c)(3 - 1) = 2f'(c) \leq 8$ for some c. So $f(3) \leq 2 + 8 =$ **10**.

q: A function is 0 for $x < 1$ and 1 for $x \geq 1$. From 0 to 2 its average slope is $\tfrac{1}{2}$, but its slope is never $\tfrac{1}{2}$. Which condition fails?
answer: **Continuity.** The function jumps at $x = 1$. The mean value theorem needs a function with no jumps on the whole stretch.
:::
