---
id: graphs
title: Graphs of functions
prereqs: [functions]
big: A graph is a picture of a function. Each input and its output make one point, and all the points together make a line or curve.
recap: The {{graph|graph}} of f is every point $(x, f(x))$. Go across to an input x, then up to the curve. That height is the output $f(x)$.
check:
  q: The graph of f passes through the point $(2, 5)$. What does that tell you?
  options: ["$f(2) = 5$", "$f(5) = 2$", "The slope of the graph is $\tfrac{5}{2}$"]
  answer: 0
  why: A point is written (across, up), which is (input, output). So $(2, 5)$ says the input 2 gives the output 5, which is $f(2) = 5$. Reading it as $f(5) = 2$ swaps the order. One point says nothing about steepness, so it cannot give a slope.
---

## Two number lines make a grid

A graph sits on a grid made from two number lines. One runs across, called the x-{{axis|axis}}. The other runs up, called the y-axis. They cross at 0 on both, at a spot called the {{origin|origin}}.

Every spot on the grid has an address of two numbers, written $(x, y)$. These are its {{coordinates|coordinates}}.

- The first number says how far **across**: right if positive, left if negative.
- The second number says how far **up**: up if positive, down if negative.

So $(3, 2)$ means 3 right, then 2 up. $(-1, -4)$ means 1 left, then 4 down.

**Order matters.** $(3, 2)$ and $(2, 3)$ are different points. Across always comes first. A memory trick: walk to the ladder before you climb it.^[n_descartes]

## From a table to a picture

Take $f(x) = x^2$. Make a table of inputs and outputs. Then turn each pair into a point:

| $x$ | $-2$ | $-1$ | 0 | 1 | 2 |
|---|---|---|---|---|---|
| $f(x)$ | 4 | 1 | 0 | 1 | 4 |
| point | $(-2, 4)$ | $(-1, 1)$ | $(0, 0)$ | $(1, 1)$ | $(2, 4)$ |

Plot the five points and join them with a smooth curve.^[n_join] You get a U shape, called a {{parabola|parabola}}. That curve is the graph of $f(x) = x^2$.

:::widget graph-point

So the {{graph|graph}} of a function is all the points $(x, f(x))$. Each point is one input paired with its output. The height of a point on the graph **is** the output. That is why people often write $y = x^2$ in place of $f(x) = x^2$: on a graph, the output is the y-coordinate.

## Reading a graph

A graph turns questions about a rule into questions about heights.

- **What is $f(a)$?** Go across to a on the x-axis. Go straight up (or down) to the curve. The height there is $f(a)$.
- **Which inputs give the output 4?** Find 4 on the y-axis. Go straight across until you meet the curve, then straight down to read the input. For $x^2$ you meet the curve twice, at $x = -2$ and $x = 2$.
- **Is a point on the graph?** The point $(a, b)$ is on the graph exactly when $f(a) = b$. Plug in a and compare.

**Why it works.** Every point on the graph was placed by going across to an input and then up to its output. Reading the graph retraces that trip, in either direction.

## One input, one point above it

A function gives one output for each input. On a graph, that means one point above each x, never two stacked on top of each other.

This gives the **vertical line test**. Picture a vertical line sliding across the picture. If it ever crosses the curve twice, the picture is not the graph of a function.

:::widget vertical-line

A circle fails. A vertical line near the middle crosses it at the top and at the bottom, so one input would have two outputs. The parabola passes, because every vertical line crosses it once.

A *horizontal* line crossing twice is fine. It only means two inputs share an output, like $f(-2) = f(2) = 4$.

## Gaps and holes

Some inputs have no output, because they are not in the function's domain. The graph has nothing above those inputs.

When just one point is missing, the graph shows an **open circle** there. The curve runs right up to it, but the point itself is not on the graph. A filled dot means the point is there.

Take $f(x) = \dfrac{x^2 - 1}{x - 1}$. At $x = 1$ it gives $0 \div 0$, so there is no output. At every other input it gives the same answer as $x + 1$. Try $x = 3$: $\dfrac{9 - 1}{3 - 1} = \dfrac{8}{2} = 4$, and $3 + 1 = 4$. So the graph is the straight line $y = x + 1$ with one hole, at $(1, 2)$.

:::widget plot
fn: x + 1
x: -2.5 3.5
y: -1.5 4.5
holes: 1,2
label: y = (x² − 1) ÷ (x − 1)
caption: The open circle at (1, 2) is a missing point. The line heads straight for it but never lands on it.
:::

What happens near a hole like this is the subject of [[limits|limits]].

## What calculus reads from a graph

Two questions about graphs drive most of calculus.

- **How steep is it?** The steepness of a line is its [[slope|slope]]. A curve is steeper in some places than others. The derivative measures its steepness at one point.
- **How much area is under it?** That is the integral, the second half of calculus.

:::example
title: Sketch the graph of $f(x) = x^2 - 2x$ for x from $-1$ to 3.

1. Choose some inputs: $x = -1, 0, 1, 2, 3$.
   why: Whole numbers are quick to work out, and five points are enough to see the shape.
   uses: []

2. Plug each one in. For example, $f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3$. The others are $f(0) = 0$, $f(1) = -1$, $f(2) = 0$ and $f(3) = 3$.
   why: Each output is the height of the graph above that input.
   uses: [functions]

3. Write each pair as a point: $(-1, 3)$, $(0, 0)$, $(1, -1)$, $(2, 0)$, $(3, 3)$.
   why: A point is (input, output), across first.
   uses: []

4. Plot the points. For $(1, -1)$, go 1 right, then 1 down.
   why: A negative output means below the x-axis.
   uses: []

5. Join them with a smooth curve. It is a U shape, like $x^2$, but shifted. Its lowest point is $(1, -1)$, and it crosses the x-axis at $x = 0$ and $x = 2$.
   why: Points on the x-axis have height 0, so those are the inputs where $f(x) = 0$. Check: $f(0) = 0 - 0 = 0$ and $f(2) = 4 - 4 = 0$.
   uses: []
:::

:::widget plot
fn: x*x - 2*x
x: -1.6 3.6
y: -1.8 4.2
points: -1,3; 0,0; 1,-1; 2,0; 3,3
label: y = x² − 2x
caption: Five plotted points, joined smoothly. The lowest point, (1, −1), sits exactly halfway between the two places the curve crosses the x-axis.
:::

:::practice
q: Which of these points are on the graph of $f(x) = x^2 - 1$? $(2, 3)$, $(-2, 3)$, $(3, 9)$.
answer: Plug in each input and compare with the height. $f(2) = 4 - 1 = 3$, so $(2, 3)$ **is** on it. $f(-2) = 4 - 1 = 3$, so $(-2, 3)$ **is** on it. $f(3) = 9 - 1 = 8$, not 9, so $(3, 9)$ is **not** on it.
:::
