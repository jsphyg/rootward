---
id: optimization
title: Optimization
prereqs: [increasing-decreasing]
big: Optimization means finding the best possible value: the biggest area, the least material, the most profit. Write the thing you want to make best as a function of one variable, then find its highest or lowest point using derivatives.
recap: To find the largest or smallest value of f on a closed interval, check the critical points inside it and both endpoints, and compare the values. For a word problem, write the quantity to optimize as a function of one variable, using the problem's limits to get rid of the others. Then find its critical points, check them, and answer the question that was asked.
check:
  q: To find the largest value of f on the closed interval from a to b, which inputs must you check?
  options: ["The critical points inside the interval, and both endpoints", "Only the critical points", "Only the endpoints"]
  answer: 0
  why: The largest value happens either at a turning point inside the interval or at one of its ends. A critical point finds the turning points but misses an end where the graph is still climbing. The endpoints alone miss a peak in the middle. So check both kinds, and compare.
---

## The best pen

You have 100 metres of fence to make a rectangular pen. Which shape holds the most?

:::widget fence-pen

Try a few. A 10 by 40 pen holds 400 m². A 20 by 30 pen holds 600 m². A 25 by 25 square holds 625 m². Can we be sure nothing beats the square?

**Write the area as a function of one variable.** Call the width x. Two widths and two lengths use 100 m, so one width plus one length is 50 m, and the length is $50 - x$. The area is

$$A(x) = x(50 - x) = 50x - x^2$$

**Find the critical point.** $A'(x) = 50 - 2x$, which is 0 at $x = 25$.

**Check it.** For $x < 25$, $A' > 0$, so the area is still growing. For $x > 25$, $A' < 0$, so it is shrinking. So $x = 25$ is the peak, the most area possible. The best pen is a 25 by 25 square, holding 625 m².

## Highest and lowest overall

The [[critical-points|critical points]] page found **local** peaks and valleys: highest or lowest compared with their neighbours. Optimization wants the **absolute** best: the highest or lowest value of all.

On a closed interval, from a to b including both ends, the best value can only be in one of two places:

- at a critical point inside the interval, where the graph turns, or
- at an **endpoint**, where the interval stops even though the graph may still be climbing.^[n_evt]

So the method is short:

1. Find the critical points inside the interval.
2. Work out f at each of them, and at both endpoints.
3. The biggest value is the absolute maximum. The smallest is the absolute minimum.

**Example.** Find the largest and smallest values of $f(x) = x^2 - 4x + 1$ for $0 \leq x \leq 5$. $f'(x) = 2x - 4$, so the only critical point is $x = 2$. Then:

| x | 0 (endpoint) | 2 (critical point) | 5 (endpoint) |
|---|---|---|---|
| f(x) | 1 | $-3$ | 6 |

The largest value is **6**, at the endpoint $x = 5$. The smallest is **$-3$**, at $x = 2$.

*Notice: the largest value was at an endpoint, not at a critical point. Skipping the endpoints would have missed it.*

## Word problems

Most optimization problems arrive in words. The method:

1. **Draw a picture**, and name the quantities.
2. **Say what to optimize**: the quantity you want biggest or smallest.
3. **Write it as a formula.** It will often have two variables.
4. **Use the limit in the problem** (the fixed amount of fence, the fixed volume) to write one variable in terms of the other. Now the formula has one variable.
5. **Find the allowed inputs.** Lengths cannot be negative, for example.
6. **Find the critical points**, and check which gives the best value, using the sign of the derivative or the endpoints.
7. **Answer the question asked.** If it asks for the dimensions, give the dimensions, not just the area.

:::example
title: A square sheet of card is 12 cm wide. You cut a square of side x from each corner and fold up the sides to make an open box. Which x gives the biggest box?

1. Picture it. The base is a square of side $12 - 2x$, since a cut of x comes off each end. The height is x.
   why: Folding up the flaps makes the corners' cut size the box's height.
   uses: []

2. Volume: $V = x(12 - 2x)^2$. Expand: $(12 - 2x)^2 = 144 - 48x + 4x^2$, so $V = 4x^3 - 48x^2 + 144x$.
   why: The volume of a box is base area times height. Expanding makes it easy to take the derivative.
   uses: []

3. Allowed inputs: $0 < x < 6$. A cut of 6 or more would use up the whole sheet.
   why: The base side $12 - 2x$ must stay positive.
   uses: []

4. Derivative: $V'(x) = 12x^2 - 96x + 144 = 12(x^2 - 8x + 12) = 12(x - 2)(x - 6)$. Inside the allowed range, the only critical point is $x = 2$.
   why: $x = 6$ is not allowed, since it leaves no base.
   uses: [critical-points]

5. Check: at $x = 1$, $V' = 12(-1)(-5) > 0$. At $x = 3$, $V' = 12(1)(-3) < 0$. So the volume rises, then falls: $x = 2$ is the peak.
   why: + then − means a maximum.
   uses: [increasing-decreasing]

6. Answer: cut **2 cm squares** from the corners. The box is 8 by 8 by 2, with volume $V = 2 \cdot 8^2 = 128$ cm³.
   why: The question asked for x, and the volume shows what it achieves.
   uses: []
:::

:::practice
q: Two numbers add up to 20. What is the largest their product can be?
answer: Call them x and $20 - x$. Product $P = x(20 - x) = 20x - x^2$. $P' = 20 - 2x = 0$ at $x = 10$, and $P'$ goes + to −, so it is a maximum. Both numbers are 10, and the largest product is **100**.
:::

:::problems
q: Find the largest and smallest values of $f(x) = x^3 - 3x$ for $0 \leq x \leq 2$.
answer: $f'(x) = 3x^2 - 3$, zero at $x = \pm 1$. Only $x = 1$ is inside. $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. **Largest 2** (at $x = 2$), **smallest $-2$** (at $x = 1$).

q: Find the largest and smallest values of $f(x) = x^3 - 12x$ for $-3 \leq x \leq 3$.
answer: Critical points $x = \pm 2$. $f(-3) = 9$, $f(-2) = 16$, $f(2) = -16$, $f(3) = -9$. **Largest 16** at $x = -2$, **smallest $-16$** at $x = 2$.

q: Find the largest value of $f(x) = 2x + 1$ for $0 \leq x \leq 3$.
answer: $f'(x) = 2$, never 0, so there are no critical points. Check the endpoints: $f(0) = 1$, $f(3) = 7$. **Largest 7**, at the endpoint $x = 3$.

q: A farmer has 120 m of fence to make a rectangular field along a straight river. The river side needs no fence. What is the largest area?
answer: Let x be each side at right angles to the river. The side along the river is $120 - 2x$. $A = x(120 - 2x) = 120x - 2x^2$. $A' = 120 - 4x = 0$ at $x = 30$. So the field is 30 m by 60 m, with area **1,800 m²**.

q: A rectangle has area 64 cm². What is the smallest its perimeter can be?
answer: Sides x and $\dfrac{64}{x}$. $P = 2x + \dfrac{128}{x}$. $P' = 2 - \dfrac{128}{x^2} = 0$ when $x^2 = 64$, so $x = 8$. $P'$ goes − to +, a minimum. The rectangle is an 8 by 8 square, with perimeter **32 cm**.

q: What is the smallest value of $x + \dfrac{1}{x}$ for positive x?
answer: $f'(x) = 1 - \dfrac{1}{x^2} = 0$ at $x = 1$ (the positive one). $f'$ goes − to +. The smallest value is $1 + 1 =$ **2**.

q: A company's profit is $P(x) = -2x^2 + 80x - 500$ dollars when it sells x items. How many should it sell, and what is the best profit?
answer: $P'(x) = -4x + 80 = 0$ at $x = 20$. $P'$ goes from + to −, so it is a maximum. Sell **20 items**, for a profit of $-800 + 1600 - 500 =$ **300 dollars**.

q: At a price of p dollars, a shop sells $100 - 2p$ items a day. Which price brings in the most money?
answer: Revenue $R = p(100 - 2p) = 100p - 2p^2$. $R' = 100 - 4p = 0$ at $p = 25$. Charge **25 dollars**, selling 50 items, for **1,250 dollars** a day.

q: A box with a square base and no lid must hold 32 cm³. What size uses the least card?
answer: Base side x, height h. Volume $x^2 h = 32$, so $h = \dfrac{32}{x^2}$. Card used: base plus four sides, $S = x^2 + 4xh = x^2 + \dfrac{128}{x}$. $S' = 2x - \dfrac{128}{x^2} = 0$ when $x^3 = 64$, so $x = 4$ and $h = 2$. The box is **4 by 4 by 2 cm**, using 48 cm² of card.

q: A can (a cylinder with a top and a bottom) must hold 1,000 cm³. Which radius uses the least metal?
answer: Volume $\pi r^2 h = 1000$, so $h = \dfrac{1000}{\pi r^2}$. Metal: $S = 2\pi r^2 + 2\pi r h = 2\pi r^2 + \dfrac{2000}{r}$. $S' = 4\pi r - \dfrac{2000}{r^2} = 0$ when $r^3 = \dfrac{500}{\pi}$, so **$r \approx 5.42$ cm**. Then $h \approx 10.84$ cm, exactly twice the radius: the best can is as tall as it is wide.

q: Which point on the curve $y = x^2$ is closest to the point $(0, 2)$?
answer: The squared distance from $(x, x^2)$ to $(0, 2)$ is $D = x^2 + (x^2 - 2)^2 = x^4 - 3x^2 + 4$. (The smallest distance and the smallest squared distance happen at the same place.) $D' = 4x^3 - 6x = 2x(2x^2 - 3)$, zero at $x = 0$ and $x = \pm\sqrt{1.5} \approx \pm 1.22$. $D(0) = 4$, $D(\pm\sqrt{1.5}) = 2.25 - 4.5 + 4 = 1.75$. The closest points are **$(\pm 1.22, 1.5)$**, at distance $\sqrt{1.75} \approx 1.32$.

q: A ball's height is $h(t) = 20t - 5t^2$ metres, for $0 \leq t \leq 4$ seconds. When is it highest, and when is it lowest?
answer: $h'(t) = 20 - 10t$, zero at $t = 2$. $h(0) = 0$, $h(2) = 20$, $h(4) = 0$. **Highest at $t = 2$** (20 m). **Lowest at both endpoints**, $t = 0$ and $t = 4$, when it is on the ground.

q: A student finds the critical point of a profit function and reports it as the best. What else should they have checked?
answer: **That it really is a maximum**, not a minimum or a pause (using the sign of the derivative on each side), and **the endpoints** of the allowed inputs, where the best value can also be.
:::
