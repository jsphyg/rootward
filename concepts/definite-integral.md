---
id: definite-integral
title: The definite integral
prereqs: [riemann-sums, limits]
big: The definite integral is the exact signed area under a curve between two inputs. It is what Riemann sums head to as the strips get infinitely thin. It is written $\int_a^b f(x)\,dx$.
recap: $\displaystyle\int_a^b f(x)\,dx$ is the limit of the Riemann sums for f from a to b, as the number of strips grows without end. It equals the area above the x-axis minus the area below it. Useful facts: $\int_a^a f\,dx = 0$, swapping a and b flips the sign, integrals over touching stretches add, and sums and constant multiples split apart.
check:
  q: What is $\displaystyle\int_0^4 x\,dx$?
  options: ["8", "16", "4"]
  answer: 0
  why: The region under $y = x$ from 0 to 4 is a triangle with base 4 and height 4. Its area is $\frac{1}{2} \cdot 4 \cdot 4 = 8$. 16 forgets the half: it is the whole square. 4 is the height at the end, not an area.
---

## From estimate to exact

The [[riemann-sums|Riemann sums]] page estimated areas with rectangles. More, thinner rectangles gave better estimates, and the estimates closed in on one number. That number is the exact area.

So we define it as a [[limits|limit]]:

$$\int_a^b f(x)\,dx \;=\; \lim_{n \to \infty} \big(\text{Riemann sum with } n \text{ strips}\big)$$

This is called the **definite integral** of f from a to b.^[n_integrable]

## Reading the symbol

$$\int_a^b f(x)\,dx$$

- $\int$ is a stretched S, for "sum".
- **a** at the bottom and **b** at the top are the **limits of integration**: where the area starts and stops. (A different use of the word "limit". Here it just means an end.)
- $f(x)$ is the height of each strip.
- $dx$ stands for the width of a strip, which has become infinitely thin.

Read the whole thing as "the integral from a to b of f of x, dx". It is a sum of height × width, over thinner and thinner strips.

**The answer is a number.** A definite integral, with its limits a and b, works out to a single number: an area. (You may also meet the symbol $\int$ written with no a and b. That means something different, covered on the antiderivatives page. The page on the fundamental theorem shows why the two share a symbol.)

## Signed area

Strips below the x-axis have negative heights, so they count as negative area. The definite integral gives:

$$\text{area above the axis} \;-\; \text{area below the axis}$$

:::widget integral-shade

## Integrals you can find with geometry

When the region is a shape you know, you can read off the integral directly.

- **A constant.** $\displaystyle\int_1^5 3\,dx$ is a rectangle, 4 wide and 3 tall: **12**.
- **A line.** $\displaystyle\int_0^4 x\,dx$ is a triangle with base 4 and height 4: **8**.
- **A circle.** $y = \sqrt{4 - x^2}$ is the top half of a circle of radius 2. So $\displaystyle\int_{-2}^{2} \sqrt{4 - x^2}\,dx$ is half the circle's area: $\tfrac{1}{2} \cdot \pi \cdot 2^2 = $ **$2\pi$**.

:::widget plot
fn: Math.sqrt(Math.max(0, 4 - x*x))
x: -2.6 2.6
y: -0.6 2.6
labelat: topleft
label: y = √(4 − x²)
caption: The top half of a circle of radius 2. The integral from −2 to 2 is the area of this half circle, 2π ≈ 6.28.
:::

Most curves are not shapes like these. The next page, on the fundamental theorem, gives a way to find any of them exactly.

## Rules that follow from area

Each of these makes sense if you picture the area.

| rule | why |
|---|---|
| $\displaystyle\int_a^a f(x)\,dx = 0$ | A region with no width has no area. |
| $\displaystyle\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$ | Going right to left flips the sign of every strip's width. |
| $\displaystyle\int_a^b f\,dx + \int_b^c f\,dx = \int_a^c f\,dx$ | Two areas side by side add up to the whole. |
| $\displaystyle\int_a^b k f(x)\,dx = k\int_a^b f(x)\,dx$ | Stretching every height by k stretches the area by k. |
| $\displaystyle\int_a^b (f + g)\,dx = \int_a^b f\,dx + \int_a^b g\,dx$ | Stacking one height on another adds the areas. |

## What an integral measures

Area is the picture. But because each strip is height × width, an integral adds up **rate × time**, or more generally **amount per unit × units**:

- Speed × time adds up to **distance**.
- Flow rate × time adds up to **total volume**.
- Power × time adds up to **energy used**.

So an integral is the tool for "add up lots of tiny pieces of something that keeps changing".

:::example
title: Find $\displaystyle\int_{-1}^{3} (x - 1)\,dx$ using geometry.

1. Sketch $y = x - 1$. It is a line crossing the x-axis at $x = 1$.
   why: Where it crosses decides which parts count as positive and which as negative.
   uses: [graphs]

2. From $-1$ to 1, the line is below the axis. At $x = -1$ its height is $-2$. That part is a triangle with base 2 and height 2, area 2, counted as **$-2$**.
   why: Area below the axis counts as negative.
   uses: []

3. From 1 to 3, the line is above the axis. At $x = 3$ its height is 2. Another triangle, base 2 and height 2: **$+2$**.
   why: Area above the axis counts as positive.
   uses: []

4. Add: $-2 + 2 = 0$. So $\displaystyle\int_{-1}^{3} (x - 1)\,dx = 0$.
   why: The definite integral is the signed area, so the two triangles cancel.
   uses: []
:::

:::practice
q: Find $\displaystyle\int_0^3 (2x + 1)\,dx$ using geometry.
answer: The region is a trapezoid. Its heights are $f(0) = 1$ and $f(3) = 7$, and its width is 3. Area $= \dfrac{1 + 7}{2} \times 3 =$ **12**.
:::

:::problems
q: Find $\displaystyle\int_0^5 3\,dx$.
answer: A rectangle, 5 by 3: **15**.

q: Find $\displaystyle\int_{-1}^{2} (-3)\,dx$.
answer: A rectangle 3 wide, but below the axis, height $-3$: **$-9$**.

q: Find $\displaystyle\int_1^3 x\,dx$.
answer: A trapezoid with heights 1 and 3 and width 2: $\dfrac{1 + 3}{2} \times 2 =$ **4**.

q: Find $\displaystyle\int_{-2}^{2} x\,dx$.
answer: A triangle of area 2 below the axis and one of area 2 above. They cancel: **0**.

q: Find $\displaystyle\int_{-3}^{3} \sqrt{9 - x^2}\,dx$.
answer: The top half of a circle of radius 3: $\tfrac{1}{2}\pi \cdot 9 =$ **$\dfrac{9\pi}{2} \approx 14.14$**.

q: Find $\displaystyle\int_0^2 \sqrt{4 - x^2}\,dx$.
answer: A quarter of a circle of radius 2: $\tfrac{1}{4}\pi \cdot 4 =$ **$\pi \approx 3.14$**.

q: Find $\displaystyle\int_0^4 |x - 2|\,dx$.
answer: A V shape touching 0 at $x = 2$. Two triangles, each with base 2 and height 2, area 2 each: **4**.

q: Find $\displaystyle\int_2^2 x^3\,dx$.
answer: **0**. The stretch has no width.

q: $\displaystyle\int_0^3 f(x)\,dx = 5$ and $\displaystyle\int_3^7 f(x)\,dx = 2$. Find $\displaystyle\int_0^7 f(x)\,dx$.
answer: The two stretches join: $5 + 2 =$ **7**.

q: $\displaystyle\int_1^5 f(x)\,dx = 6$. Find $\displaystyle\int_5^1 f(x)\,dx$.
answer: Swapping the limits flips the sign: **$-6$**.

q: $\displaystyle\int_0^2 f(x)\,dx = 4$ and $\displaystyle\int_0^2 g(x)\,dx = 1$. Find $\displaystyle\int_0^2 \big(3f(x) - 2g(x)\big)\,dx$.
answer: $3 \cdot 4 - 2 \cdot 1 =$ **10**.

q: $\displaystyle\int_0^{10} f(x)\,dx = 8$ and $\displaystyle\int_0^{4} f(x)\,dx = 3$. Find $\displaystyle\int_4^{10} f(x)\,dx$.
answer: The whole is the two parts added: $3 + \text{?} = 8$. So it is **5**.

q: A car drives at a steady 60 km/h for 2.5 hours. Write the distance as an integral and find it.
answer: $\displaystyle\int_0^{2.5} 60\,dt$, a rectangle 2.5 by 60: **150 km**.

q: A tank fills at a rate that rises steadily from 0 to 10 litres per minute over 4 minutes. How much water flows in?
answer: The rate is a line from 0 up to 10. The integral is a triangle with base 4 and height 10: $\tfrac{1}{2} \cdot 4 \cdot 10 =$ **20 litres**.

q: Does $\displaystyle\int_0^4 x\,dx$ depend on x? Is $\displaystyle\int_0^4 t\,dt$ any different?
answer: **No to both.** The answer is a single number, 8. The letter inside is only a placeholder for "the input along the strip". Calling it t instead of x describes exactly the same area.
:::
