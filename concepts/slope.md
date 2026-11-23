---
id: slope
title: Slope of a line
prereqs: [functions]
big: Slope says how steep a straight line is: how far it rises for each step to the right.
recap: {{slope|Slope}} = rise ÷ run. Pick two points on a line, then divide the change in height by the change in width.
check:
  q: What is the slope of the line through $(1, 2)$ and $(3, 8)$?
  options: ["3", "6", "$\tfrac{1}{3}$", "2"]
  answer: 0
  why: Rise $= 8 - 2 = 6$. Run $= 3 - 1 = 2$. Slope $= 6 \div 2 = 3$.
---

## Rise over run

Pick two points on a line. The **rise** is how far you go up. The **run** is how far you go across. The {{slope|slope}} is the rise divided by the run.

$$\text{slope} = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

:::widget slope-triangle

## What the number tells you

- Big positive slope: a steep climb.
- Slope 0: perfectly flat.
- Negative slope: the line goes downhill as you move right.

A straight line has one slope everywhere. A curve does not, since it is steeper in some places than others. Measuring the steepness of a curve at a single point is the job of [[derivative|the derivative]].

:::example
title: Find the slope of the line through $(1, 2)$ and $(3, 8)$.

1. Rise: $8 - 2 = 6$.
   why: Subtract the y-values, second minus first.
   uses: []

2. Run: $3 - 1 = 2$.
   why: Subtract the x-values in the same order. Keeping the order matters.
   uses: []

3. Divide: $6 \div 2 = 3$.
   why: Slope is rise over run.
   uses: []
:::

:::practice
q: Find the slope of the line through $(0, 5)$ and $(4, 1)$.
answer: Rise $= 1 - 5 = -4$. Run $= 4 - 0 = 4$. Slope $= -4 \div 4 = -1$. The line goes downhill.
:::
