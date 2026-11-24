---
id: riemann-sums
title: Area and Riemann sums
prereqs: [graphs]
big: To find the area under a curve, cut it into thin vertical strips and treat each strip as a rectangle. Add up the rectangles. The thinner the strips, the closer the total gets to the true area.
recap: Split the stretch from a to b into n strips, each of width $\frac{b - a}{n}$. In each strip, take a height from the curve (at the left edge, the right edge, or the middle), and multiply height by width. The total is a Riemann sum. It estimates the area under the curve, and more strips give a better estimate. Area below the x-axis counts as negative.
check:
  q: Estimate the area under $y = x$ from 0 to 4 using 4 rectangles with right-edge heights.
  options: ["10", "8", "6"]
  answer: 0
  why: Each strip is 1 wide. The right edges are at 1, 2, 3 and 4, so the heights are 1, 2, 3 and 4. Total: $(1 + 2 + 3 + 4) \cdot 1 = 10$. 8 is the true area, a triangle of base 4 and height 4, which the right-edge rectangles overshoot. 6 uses left-edge heights, 0, 1, 2 and 3.
---

## A question about area

Rectangles and triangles have area formulas. A region with a curved top does not. What is the area under the curve $y = x^2$, from $x = 0$ to $x = 2$, down to the x-axis?

There is no formula to look up. But we can estimate it with shapes we do know.

## Cut it into strips

Slice the region into 4 vertical strips, each 0.5 wide. In each strip, the curved top is not flat, so pretend it is: use a rectangle, with its height taken from the curve.

Which height? There are three common choices:

- **Left edge:** the curve's height at the strip's left side.
- **Right edge:** the height at its right side.
- **Middle:** the height at its centre.

:::widget riemann

With 4 strips and left-edge heights, the heights are $f(0) = 0$, $f(0.5) = 0.25$, $f(1) = 1$ and $f(1.5) = 2.25$. Each rectangle is 0.5 wide, so:

$$\text{total} = (0 + 0.25 + 1 + 2.25) \times 0.5 = 1.75$$

With right-edge heights, $f(0.5)$, $f(1)$, $f(1.5)$ and $f(2)$:

$$\text{total} = (0.25 + 1 + 2.25 + 4) \times 0.5 = 3.75$$

The true area must be between them. (The page on the fundamental theorem shows it is exactly $\tfrac{8}{3} \approx 2.667$.)

## More strips, better answers

| strips, n | left edges | right edges | middles |
|---|---|---|---|
| 4 | 1.75 | 3.75 | 2.625 |
| 10 | 2.28 | 3.08 | 2.66 |
| 100 | 2.6268 | 2.7068 | 2.6666 |
| 1000 | 2.6627 | 2.6707 | 2.6667 |

*Notice: as the strips get thinner, all three columns close in on the same number, about 2.6667. The middle heights get there fastest.*

**Why it works.** Each rectangle gets the strip's area a little wrong, because the curve is not flat across the strip. But a thinner strip has a flatter top, so its error is much smaller. With more and thinner strips, the total error shrinks towards 0.

These totals are called **Riemann sums**, after Bernhard Riemann, who made the idea exact in the 1850s.^[n_sigma]

## The recipe

To estimate the area under $y = f(x)$ from a to b with n rectangles:

1. **Width of each strip:** $w = \dfrac{b - a}{n}$.
2. **Where to measure:** list the left edges, the right edges or the middles of the strips.
3. **Heights:** put each of those x values into f.
4. **Add the heights, then multiply by w.** (Every rectangle has the same width, so you can multiply once at the end.)

**Too high or too low?** If the curve is rising, left-edge rectangles sit under it and come out too low, and right-edge rectangles poke above it and come out too high. If the curve is falling, it is the other way round.

## Area below the axis

If the curve dips below the x-axis, its heights are negative, so those rectangles count as **negative area**. A Riemann sum gives the area above the axis **minus** the area below it. This is called the **signed area**.

For $y = x$ from $-2$ to 2, the triangle below the axis exactly cancels the one above, and the signed area is 0.

## Why this matters

Area turns out to measure far more than space on a page. If the curve is a **speed**, a strip's height times its width is speed × time, which is distance. So the area under a speed graph is the distance travelled. The same goes for any rate: the area under a flow rate is the total amount that flowed.

:::example
title: A car's speed, in metres per second, is read every 2 seconds: 0, 8, 14, 18 and 20. Estimate how far it went in those 8 seconds.

1. There are 4 gaps of 2 seconds each, so each strip is 2 wide.
   why: Readings at 0, 2, 4, 6 and 8 seconds.
   uses: []

2. Left-edge estimate: use the speed at the start of each gap. $(0 + 8 + 14 + 18) \times 2 = 80$ m.
   why: Speed times time is distance, gap by gap.
   uses: []

3. Right-edge estimate: use the speed at the end of each gap. $(8 + 14 + 18 + 20) \times 2 = 120$ m.
   why: The same sum, measured at the other end of each gap.
   uses: []

4. The car was speeding up the whole time, so the left estimate is too low and the right is too high. The truth is between 80 m and 120 m. Their average, 100 m, is a sensible single guess.
   why: For a rising curve, left edges undershoot and right edges overshoot.
   uses: []
:::

:::practice
q: Estimate the area under $y = x^2$ from 0 to 3 with 3 rectangles, using right-edge heights.
answer: Each strip is 1 wide. Right edges at 1, 2, 3: heights 1, 4, 9. Total **$(1 + 4 + 9) \times 1 = 14$**. (The true area is 9, so this overshoots, since the curve is rising.)
:::

:::problems
q: Estimate the area under $y = x$ from 0 to 4 with 4 rectangles, using left-edge heights. Compare with the true area.
answer: Heights 0, 1, 2, 3, width 1: **6**. The true area is a triangle, $\tfrac{1}{2} \cdot 4 \cdot 4 = 8$. Left edges undershoot a rising line.

q: Estimate the area under $y = x^2$ from 0 to 3 with 3 rectangles, using left-edge heights.
answer: Heights $f(0), f(1), f(2) = 0, 1, 4$. Total **5**.

q: Estimate the area under $y = x^2$ from 0 to 2 with 2 rectangles, using middle heights.
answer: Width 1. Middles at 0.5 and 1.5: heights 0.25 and 2.25. Total **2.5**. (True area: about 2.667.)

q: What is the width of each strip when splitting the stretch from 2 to 5 into 6 strips?
answer: $\dfrac{5 - 2}{6} =$ **0.5**.

q: Estimate the area under $y = 4 - x^2$ from 0 to 2 with 4 rectangles, using right-edge heights.
answer: Width 0.5. Right edges at 0.5, 1, 1.5, 2: heights 3.75, 3, 1.75, 0. Sum 8.5, times 0.5: **4.25**.

q: Do the same with left-edge heights. Which estimate is too high?
answer: Left edges at 0, 0.5, 1, 1.5: heights 4, 3.75, 3, 1.75. Sum 12.5, times 0.5: **6.25**. The curve is falling, so **the left estimate is too high** and the right one too low. (True area: $\tfrac{16}{3} \approx 5.33$.)

q: Estimate the area under $y = 4 - x^2$ from 0 to 2 with 4 rectangles, using middle heights.
answer: Middles at 0.25, 0.75, 1.25, 1.75: heights 3.9375, 3.4375, 2.4375, 0.9375. Sum 10.75, times 0.5: **5.375**. Much closer to 5.33 than either edge estimate.

q: Estimate the area under $y = \dfrac{1}{x}$ from 1 to 3 with 2 rectangles, using left and then right edges.
answer: Width 1. Left: $f(1) + f(2) = 1 + 0.5 =$ **1.5**. Right: $f(2) + f(3) = 0.5 + 0.333 \approx$ **0.83**. (True area: about 1.099.)

q: Find the area under $y = 3$ from 1 to 5 with any number of rectangles. Why is every estimate exact?
answer: Every height is 3, and the total width is 4, so every sum gives **12**. The top is flat, so the rectangles fit perfectly.

q: Water flows into a tank at 5, 7, 8 and 6 litres per minute, measured at 0, 2, 4 and 6 minutes. Estimate the water added in the first 6 minutes using left edges.
answer: Three gaps of 2 minutes, with rates 5, 7, 8 at their starts. $(5 + 7 + 8) \times 2 =$ **40 litres**.

q: A runner's speed in m/s, read every 10 seconds, is 3, 4, 5, 5 and 4. Estimate the distance in those 40 seconds using right edges.
answer: Four gaps of 10 s, right-edge speeds 4, 5, 5, 4. $(4 + 5 + 5 + 4) \times 10 =$ **180 m**.

q: Estimate the signed area for $y = x$ from $-2$ to 2 with 4 rectangles, using middle heights.
answer: Width 1. Middles at $-1.5, -0.5, 0.5, 1.5$, heights the same. They add to **0**. The negative area below the axis cancels the positive area above.

q: For a rising curve, will right-edge rectangles give too much area or too little? Explain.
answer: **Too much.** On a rising curve, each strip's right edge is its highest point. So each rectangle reaches up to the strip's highest height, and pokes above the curve everywhere else in the strip.
:::
