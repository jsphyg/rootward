---
id: linear-approximation
title: Linear approximation
prereqs: [linear-functions, power-rule]
big: Zoom in close enough on a smooth curve and it looks like a straight line, its tangent line. So near a point you know, the tangent line gives quick, good estimates of the function.
recap: Near $x = a$, $f(x) \approx f(a) + f'(a)(x - a)$. In words, the new value is about the old value plus the rate times the change. The estimate is excellent close to a and gets worse further away.
check:
  q: $f(4) = 2$ and $f'(4) = \tfrac{1}{4}$. What is the best quick estimate of $f(4.2)$?
  options: ["2.05", "2.2", "2.25", "1.95"]
  answer: 0
  why: Old value plus rate times change: $2 + \tfrac{1}{4} \cdot 0.2 = 2 + 0.05 = 2.05$. 2.2 adds the change 0.2 without multiplying by the rate. 2.25 adds the rate itself. 1.95 subtracts when x went up.
---

## Curves look straight up close

The Earth is round, but a field looks flat. A curve is the same. Zoom in close enough around one point, and a smooth curve looks like a straight line. That line is the {{tangent|tangent line}} at that point.

:::widget tangent-zoom

*Notice: zoomed out, the curve and the line clearly part ways. Each zoom step shrinks the window to a third, but shrinks the gap to about a ninth. Up close they are almost the same.*

So near a point we know well, we can swap the curve for its tangent line. Lines are easy to work with. This swap is called **linear approximation**.

## The tangent line formula

The tangent line at $x = a$ passes through the point $(a, f(a))$ and has slope $f'(a)$. A line with slope m through a point $(a, k)$ rises m for each step of 1 to the right. After a step of $x - a$, it has risen $m(x - a)$. So:

$$L(x) = f(a) + f'(a)(x - a)$$

This is the same kind of rule as $y = mx + b$ from the [[linear-functions|lines]] page, just written to start from the point we know.^[n_point_slope] And near a:

$$f(x) \approx f(a) + f'(a)(x - a)$$

**In words: new value ≈ old value + rate × change.** If you know where you are and how fast you are changing, you can say roughly where you will be a short step later.

## Square roots without a calculator

Estimate $\sqrt{4.1}$.

The nearest easy point is $a = 4$, where $\sqrt{4} = 2$. The [[power-rule|power rule]] gives the rate: $\sqrt{x} = x^{1/2}$, so its derivative is $\tfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{x}}$. At $x = 4$ that is $\tfrac{1}{4}$.

$$\sqrt{4.1} \approx 2 + \tfrac{1}{4}(0.1) = 2.025$$

The true value is 2.02485. The estimate is off by about 0.00015.

How does it hold up further away?

| x | estimate $2 + \tfrac{1}{4}(x - 4)$ | true $\sqrt{x}$ | error |
|---|---|---|---|
| 4.1 | 2.025 | 2.02485 | 0.00015 |
| 4.5 | 2.125 | 2.12132 | 0.0037 |
| 5 | 2.25 | 2.23607 | 0.014 |
| 9 | 3.25 | 3 | 0.25 |

*Notice: ten times closer gives roughly a hundred times less error. Close to the point, the estimate is very good. Far away it is poor.*

**Too high or too low?** Every estimate in the table is a bit too high. The square root curve bends downward, so it sags below its tangent line. A curve that bends upward, like $x^2$, sits above its tangent line, and the estimates come out a bit too low.

## Small changes

Rearrange the formula and it says something useful on its own:

$$\text{change in } f \approx f'(a) \times \text{change in } x$$

This is how engineers and scientists estimate how much a small error in a measurement matters.^[n_differential]

:::example
title: A metal cube is measured to have sides of 5 cm, but the measurement could be off by 0.1 cm. About how far off could the volume be?

1. Write the volume: $V = s^3$.
   why: A cube's volume is its side cubed.
   uses: []

2. Find the rate: $V'(s) = 3s^2$, so $V'(5) = 75$.
   why: The power rule. Each extra cm of side adds about 75 cm³ of volume, when the side is near 5.
   uses: [power-rule]

3. Change in volume ≈ rate × change in side $= 75 \times 0.1 = 7.5$ cm³.
   why: Small changes multiply by the rate.
   uses: []

4. Compare with the volume itself: $5^3 = 125$ cm³. So the volume could be off by about 7.5 cm³, which is 6%.
   why: A 2% error in the side becomes about a 6% error in the volume, because the side is used three times.
   uses: []

5. Check exactly: $5.1^3 = 132.651$, which is 7.651 more than 125. The estimate, 7.5, is close.
   why: The true change is a little bigger because the curve $s^3$ bends upward.
   uses: []
:::

:::practice
q: Use the tangent line at $x = 9$ to estimate $\sqrt{9.2}$.
answer: $\sqrt{9} = 3$ and the rate there is $\dfrac{1}{2\sqrt{9}} = \dfrac{1}{6}$. So $\sqrt{9.2} \approx 3 + \dfrac{1}{6}(0.2) \approx$ **3.0333**. (True value: 3.03315.)
:::

:::problems
q: $f(5) = 3$ and $f'(5) = -2$. Estimate $f(5.2)$.
answer: $3 + (-2)(0.2) =$ **2.6**.

q: Find the tangent line to $f(x) = x^2$ at $x = 3$, and use it to estimate $3.1^2$.
answer: $f(3) = 9$ and $f'(3) = 6$, so **$L(x) = 9 + 6(x - 3)$**. Then $3.1^2 \approx 9 + 6(0.1) =$ **9.6**. (True value: 9.61. The estimate is low, because $x^2$ bends upward.)

q: Estimate $\sqrt{24}$ using $a = 25$.
answer: $\sqrt{25} = 5$ and the rate is $\dfrac{1}{2 \cdot 5} = \dfrac{1}{10}$. The change is $-1$. So $\sqrt{24} \approx 5 - 0.1 =$ **4.9**. (True value: 4.899.)

q: Estimate $\sqrt[3]{8.3}$ using $a = 8$.
answer: $\sqrt[3]{x} = x^{1/3}$, with derivative $\tfrac{1}{3}x^{-2/3}$. At $x = 8$: $8^{-2/3} = \tfrac{1}{4}$, so the rate is $\tfrac{1}{12}$. So $\sqrt[3]{8.3} \approx 2 + \dfrac{0.3}{12} =$ **2.025**. (True value: 2.0247.)

q: Estimate $2.01^3$ using $a = 2$.
answer: $f(x) = x^3$, $f(2) = 8$, $f'(2) = 12$. So $2.01^3 \approx 8 + 12(0.01) =$ **8.12**. (True value: 8.1206.)

q: Estimate $\dfrac{1}{1.02}$ using $a = 1$.
answer: $f(x) = x^{-1}$, $f(1) = 1$, $f'(x) = -x^{-2}$ so $f'(1) = -1$. So $\dfrac{1}{1.02} \approx 1 - 0.02 =$ **0.98**. (True value: 0.98039.)

q: Find the tangent line to $f(x) = \dfrac{1}{x}$ at $x = 2$, and estimate $\dfrac{1}{2.1}$.
answer: $f(2) = \tfrac{1}{2}$ and $f'(2) = -\tfrac{1}{4}$. So **$L(x) = \tfrac{1}{2} - \tfrac{1}{4}(x - 2)$**. Then $\dfrac{1}{2.1} \approx 0.5 - 0.025 =$ **0.475**. (True value: 0.47619.)

q: Show that $(1 + h)^n \approx 1 + nh$ when h is small, and use it to estimate $1.01^{10}$.
answer: Let $f(x) = x^n$ at $a = 1$: $f(1) = 1$ and $f'(1) = n$. So $(1 + h)^n \approx 1 + nh$. Then $1.01^{10} \approx 1 + 10(0.01) =$ **1.1**. (True value: 1.1046.)

q: Estimate $0.98^5$.
answer: Using $(1 + h)^n \approx 1 + nh$ with $h = -0.02$: $1 + 5(-0.02) =$ **0.9**. (True value: 0.9039.)

q: A circle's radius grows from 10 cm to 10.1 cm. About how much does its area grow?
answer: $A = \pi r^2$, so the rate is $2\pi r = 20\pi$. Change ≈ $20\pi \times 0.1 = 2\pi \approx$ **6.28 cm²**. (True value: about 6.31 cm².)

q: A square's side is measured as 20 cm, give or take 0.5 cm. About how far off could its area be?
answer: $A = s^2$, rate $2s = 40$. Change ≈ $40 \times 0.5 =$ **20 cm²**, out of 400 cm².

q: Will the tangent line at $x = 4$ give estimates of $\sqrt{x}$ that are too high or too low? Why?
answer: **Too high.** The square root curve bends downward, so it lies below its tangent line on both sides of the point.

q: Use the tangent line to $\sqrt{x}$ at $x = 4$ to estimate $\sqrt{100}$. What goes wrong?
answer: $2 + \tfrac{1}{4}(96) = 26$, but $\sqrt{100} = 10$. **The point 100 is far from 4**, and the curve has bent far away from its tangent line. Linear approximation only works for small changes. Use $a = 81$ or $a = 100$ instead.
:::
