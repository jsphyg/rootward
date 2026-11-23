---
id: slope
title: Slope of a line
prereqs: [graphs]
big: Slope says how steep a straight line is. It is how far the line rises for each one step to the right.
recap: {{slope|Slope}} = rise ÷ run. Pick two points on the line. Divide the change in height by the change across: $\dfrac{y_2 - y_1}{x_2 - x_1}$. A slope of 3 means the line goes up 3 for every 1 step right.
check:
  q: What is the slope of the line through $(1, 2)$ and $(3, 8)$?
  options: ["3", "$\tfrac{1}{3}$", "6", "$-3$"]
  answer: 0
  why: Rise $= 8 - 2 = 6$. Run $= 3 - 1 = 2$. Slope $= 6 \div 2 = 3$. Getting $\tfrac{1}{3}$ means run was divided by rise, which is upside down. Getting 6 means the rise was never divided by the run. Getting $-3$ means the two subtractions were done in different orders: $(8 - 2) \div (1 - 3)$.
---

## Same climb at every step

Walk along the line $y = 3x + 1$ one step at a time and watch the height:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $y$ | 1 | 4 | 7 | 10 |
| change in $y$ | | $+3$ | $+3$ | $+3$ |

*Notice: every step of 1 to the right, the line climbs exactly 3. It never speeds up or slows down. That is what makes it straight.*

That steady climb per step is the line's {{slope|slope}}. This line has slope 3.

## Rise over run

You rarely get to take steps of exactly 1. So pick any two points on the line and measure:

- The **rise** is how far up you go from the first point to the second: the change in y.
- The **run** is how far across you go: the change in x.

Then divide:

$$\text{slope} = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

The small numbers just label the points. $(x_1, y_1)$ is the first point and $(x_2, y_2)$ is the second.^[n_delta]

:::widget slope-triangle

**Why divide?** Dividing shares the rise out over the run. A rise of 6 over a run of 2 is a rise of 3 for each single step. That "per one step" number is the slope.

## Any two points give the same slope

Take the line through $(1, 2)$ and $(3, 8)$ from the figure, and try a different pair of points on it. From $(0, -1)$ to $(3, 8)$, the rise is $8 - (-1) = 9$ and the run is $3 - 0 = 3$. The slope is $9 \div 3 = 3$ again.

**Why it works.** A straight line climbs the same amount at every step. A pair of points further apart has a bigger rise, but also a bigger run, by the same factor. The two grow together, so their ratio stays the same.

## Keep the order the same

You can subtract in either order, as long as the top and bottom use the **same** order.

- Second minus first: $\dfrac{8 - 2}{3 - 1} = \dfrac{6}{2} = 3$.
- First minus second: $\dfrac{2 - 8}{1 - 3} = \dfrac{-6}{-2} = 3$.
- Mixed: $\dfrac{8 - 2}{1 - 3} = \dfrac{6}{-2} = -3$. Wrong sign.

## What the number tells you

:::widget slope-slider

- **Positive slope:** the line goes uphill as you move right.
- **Negative slope:** the line goes downhill.
- **Slope 0:** perfectly flat. The rise is 0.
- **Bigger number, steeper line.** A slope of $-3$ is just as steep as 3, only downhill.

A vertical line has no slope at all. Its run is 0, and you cannot divide by zero.^[n_vertical]

## Slope is a rate

When x and y measure real things, the slope tells you how fast one changes compared with the other. This is called a {{rate|rate of change}}.

Say a car has gone 30 km after 1 hour and 150 km after 3 hours. Then the rise is $150 - 30 = 120$ km and the run is $3 - 1 = 2$ hours. The slope is $120 \div 2 = 60$ km per hour. That is the car's speed.

The units of a slope are always "y units per x unit". That is why the word *per* keeps showing up.

## Lines versus curves

A straight line has one slope everywhere. A curve does not. It is steeper in some places than others. Measuring the slope of a curve at one single point is the job of [[derivative|the derivative]], and it starts from exactly this rise-over-run idea.

:::example
title: Find the slope of the line through $(-2, 7)$ and $(4, -5)$. Then say what it means.

1. Rise: $y_2 - y_1 = -5 - 7 = -12$.
   why: Subtract the heights, second point minus first.
   uses: [graphs]

2. Run: $x_2 - x_1 = 4 - (-2) = 4 + 2 = 6$.
   why: Subtract the across values in the same order. Taking away a negative adds.
   uses: [graphs]

3. Divide: $\dfrac{-12}{6} = -2$.
   why: Slope is rise over run.
   uses: []

4. Meaning: the line goes **down** 2 for every 1 step right.
   why: The slope is the rise per single step, and a negative rise is a fall.
   uses: []

5. Check with the other order: $\dfrac{7 - (-5)}{-2 - 4} = \dfrac{12}{-6} = -2$. Same answer.
   why: Both orders must agree, so this catches a sign slip.
   uses: []
:::

:::practice
q: Find the slope of the line through $(-1, -3)$ and $(3, 5)$.
answer: Rise $= 5 - (-3) = 8$. Run $= 3 - (-1) = 4$. Slope $= 8 \div 4 =$ **2**. The line goes up 2 for every step right.
:::
