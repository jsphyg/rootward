---
id: area-between-curves
title: Area between curves
prereqs: [ftc]
big: The area between two curves is the integral of the top curve minus the bottom curve. Each thin strip stretches from the lower curve up to the higher one, so its height is top minus bottom.
recap: If $f(x) \geq g(x)$ from a to b, the area between them is $\displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx$. Find where the curves cross to get a and b. If they swap places, split the integral where they cross, so that each piece is top minus bottom.
check:
  q: What is the area between $y = x$ and $y = x^2$, from $x = 0$ to $x = 1$?
  options: ["$\tfrac{1}{6}$", "$\tfrac{1}{2}$", "$\tfrac{5}{6}$"]
  answer: 0
  why: Between 0 and 1, the line is above the parabola (try $x = \tfrac{1}{2}$: $\tfrac{1}{2}$ against $\tfrac{1}{4}$). So the area is $\int_0^1 (x - x^2)\,dx = \tfrac{1}{2} - \tfrac{1}{3} = \tfrac{1}{6}$. $\tfrac{1}{2}$ is the area under the line alone. $\tfrac{5}{6}$ adds the two areas instead of subtracting.
---

## Top minus bottom

A [[definite-integral|definite integral]] measures area down to the x-axis. Often we want the area **between** two curves instead.

Picture the region sliced into thin vertical strips. Each strip runs from the lower curve up to the upper one. So its height is not just one function's value, but the gap:

$$\text{strip height} = \text{top} - \text{bottom}$$

Adding up the strips is an integral, as always:

$$\text{area} = \int_a^b \big(\text{top} - \text{bottom}\big)\,dx$$

:::widget between-curves

**Another way to see it.** The area under the top curve, minus the area under the bottom curve, leaves exactly the region between them. That is the same integral, split in two.

**It works below the axis too.** If both curves dip below the x-axis, top minus bottom is still the true gap, which is never negative. The formula needs no change.

## Finding the limits

Often the problem does not give a and b. The region is closed off where the curves **cross**. To find those points, set the two formulas equal and solve.

**Example.** The line $y = x + 2$ and the parabola $y = x^2$. Set $x^2 = x + 2$, so $x^2 - x - 2 = 0$, which factors as $(x - 2)(x + 1) = 0$. They cross at $x = -1$ and $x = 2$.

**Which is on top?** Test any x in between. At $x = 0$: the line gives 2, the parabola 0. The line is on top.

$$\text{area} = \int_{-1}^{2} \big((x + 2) - x^2\big)\,dx = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$$

At $x = 2$: $2 + 4 - \tfrac{8}{3} = \tfrac{10}{3}$. At $x = -1$: $\tfrac{1}{2} - 2 + \tfrac{1}{3} = -\tfrac{7}{6}$. Subtract: $\tfrac{10}{3} + \tfrac{7}{6} = \tfrac{27}{6} = \tfrac{9}{2}$.

The area between them is $\tfrac{9}{2} = 4.5$.

## When the curves swap places

If the curves cross **inside** the stretch, the one on top changes. Then top minus bottom changes sign, and a single integral lets the pieces cancel.

**Example.** $y = x$ and $y = x^3$ from $-1$ to 1. They cross at $-1$, 0 and 1. From 0 to 1 the line is on top. From $-1$ to 0 the cubic is on top.

- One integral of $(x - x^3)$ from $-1$ to 1 gives $0$. That is not the area. The two loops cancelled.
- Split at 0 instead. Each loop has area $\int_0^1 (x - x^3)\,dx = \tfrac{1}{2} - \tfrac{1}{4} = \tfrac{1}{4}$. The total area is $\tfrac{1}{2}$.

**The method:**

1. Find where the curves cross.
2. On each stretch between crossings, find which curve is on top by testing one x.
3. Integrate top minus bottom on each stretch.
4. Add the pieces.

:::example
title: Find the area enclosed by $y = x^2$ and $y = 2 - x^2$.

1. Find the crossings: $x^2 = 2 - x^2$, so $2x^2 = 2$ and $x = \pm 1$.
   why: The region is closed off where the curves meet.
   uses: []

2. Find the top curve. At $x = 0$: $2 - 0 = 2$ against $0$. So $2 - x^2$ is on top.
   why: Test one point between the crossings.
   uses: []

3. Top minus bottom: $(2 - x^2) - x^2 = 2 - 2x^2$.
   why: That is the height of each strip.
   uses: []

4. Integrate: $\displaystyle\int_{-1}^{1} (2 - 2x^2)\,dx = \left[2x - \frac{2x^3}{3}\right]_{-1}^{1}$.
   why: The fundamental theorem.
   uses: [ftc]

5. Work it out: at 1, $2 - \tfrac{2}{3} = \tfrac{4}{3}$. At $-1$, $-2 + \tfrac{2}{3} = -\tfrac{4}{3}$. Subtract: $\tfrac{4}{3} + \tfrac{4}{3} = \tfrac{8}{3}$.
   why: Top limit minus bottom limit.
   uses: []
:::

:::practice
q: Find the area between $y = 2x$ and $y = x^2$.
answer: They cross where $x^2 = 2x$: $x = 0$ and $x = 2$. At $x = 1$, $2x = 2$ is above $x^2 = 1$. Area $= \displaystyle\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} =$ **$\dfrac{4}{3}$**.
:::

:::problems
q: Find the area between $y = 4 - x^2$ and the x-axis.
answer: It crosses the axis at $x = \pm 2$. $\displaystyle\int_{-2}^{2} (4 - x^2)\,dx = \left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \frac{16}{3} + \frac{16}{3} =$ **$\dfrac{32}{3}$**.

q: Find the area between $y = x^2$ and $y = 4$.
answer: They cross at $x = \pm 2$, with $y = 4$ on top. $\displaystyle\int_{-2}^{2} (4 - x^2)\,dx =$ **$\dfrac{32}{3}$**. (The same integral as the last problem, just shifted up.)

q: Find the area between $y = \sqrt{x}$ and $y = x$.
answer: They cross at $x = 0$ and $x = 1$. At $x = \tfrac{1}{4}$, $\sqrt{x} = \tfrac{1}{2}$ is above $\tfrac{1}{4}$. $\displaystyle\int_0^1 (\sqrt{x} - x)\,dx = \frac{2}{3} - \frac{1}{2} =$ **$\dfrac{1}{6}$**.

q: Find the area between $y = x$ and $y = x^3$ from 0 to 1.
answer: The line is on top. $\displaystyle\int_0^1 (x - x^3)\,dx = \frac{1}{2} - \frac{1}{4} =$ **$\dfrac{1}{4}$**.

q: Find the total area between $y = x$ and $y = x^3$ from $-1$ to 1.
answer: They swap at 0, so split. Each half has area $\tfrac{1}{4}$, total **$\dfrac{1}{2}$**. (One integral over the whole stretch would wrongly give 0.)

q: Find the area between $y = e^x$ and $y = 1$, from $x = 0$ to $x = 1$.
answer: $e^x \geq 1$ there. $\displaystyle\int_0^1 (e^x - 1)\,dx = \big[e^x - x\big]_0^1 = (e - 1) - 1 =$ **$e - 2 \approx 0.718$**.

q: Find the area between $y = \sin x$ and the x-axis, from 0 to $\pi$.
answer: $\sin x \geq 0$ there. $\big[-\cos x\big]_0^{\pi} =$ **2**.

q: Find the area between $y = x^2 - 4$ and the x-axis.
answer: The curve is below the axis between $-2$ and 2, so the top is $y = 0$. $\displaystyle\int_{-2}^{2} \big(0 - (x^2 - 4)\big)\,dx = \int_{-2}^{2} (4 - x^2)\,dx =$ **$\dfrac{32}{3}$**.

q: Find the area between $y = x^2$ and $y = x + 6$.
answer: $x^2 = x + 6$ gives $(x - 3)(x + 2) = 0$, so $x = -2$ and $x = 3$. The line is on top. $\left[\dfrac{x^2}{2} + 6x - \dfrac{x^3}{3}\right]_{-2}^{3} = \left(\dfrac{9}{2} + 18 - 9\right) - \left(2 - 12 + \dfrac{8}{3}\right) = \dfrac{27}{2} + \dfrac{22}{3} =$ **$\dfrac{125}{6} \approx 20.83$**.

q: Find the area between $y = x^2$ and $y = x^4$.
answer: They cross at $x = 0$ and $x = \pm 1$. Between $-1$ and 1, $x^2 \geq x^4$. $\displaystyle\int_{-1}^{1} (x^2 - x^4)\,dx = 2\left(\frac{1}{3} - \frac{1}{5}\right) =$ **$\dfrac{4}{15}$**.

q: Find the area between $y = \dfrac{1}{x}$ and $y = 0$, from $x = 1$ to $x = e$.
answer: $\big[\ln x\big]_1^e =$ **1**.

q: A student finds the area between $y = x$ and $y = x^2$ from 0 to 1 by working out $\displaystyle\int_0^1 (x^2 - x)\,dx = -\tfrac{1}{6}$. What went wrong?
answer: **They did bottom minus top.** The line is on top between 0 and 1. The area is $\int_0^1 (x - x^2)\,dx = \tfrac{1}{6}$. An area can never be negative.

q: Why can a single integral of (top − bottom) give the wrong area if the curves cross in the middle?
answer: **After the crossing, the "top" curve is really underneath**, so top minus bottom turns negative there. The negative piece cancels part of the positive piece. Splitting at the crossing keeps every piece positive.
:::
