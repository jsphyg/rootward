---
id: chain-rule
title: The chain rule
prereqs: [power-rule, composite-functions]
big: To find the derivative of a function inside another function, find the derivative of each layer and multiply them.
recap: $\dfrac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$. Take the derivative of the outer layer, leaving the inside as it is. Then multiply by the derivative of the inside.
check:
  q: What is the derivative of $(2x + 1)^3$?
  options: ["$6(2x + 1)^2$", "$3(2x + 1)^2$", "$12$"]
  answer: 0
  why: Outer layer $u^3$ gives $3u^2$, which is $3(2x + 1)^2$ with the inside put back. Inner layer $2x + 1$ gives 2. Multiply: $3(2x + 1)^2 \cdot 2 = 6(2x + 1)^2$. $3(2x + 1)^2$ forgot to multiply by the inner derivative. 12 changed the inside to its derivative, 2, before cubing, but the inside must be left as it is.
---

## The problem

The [[power-rule|power rule]] works on a bare x. But $(2x + 1)^3$ is a [[composite-functions|composite function]]. The {{inner|inner}} layer $2x + 1$ sits inside the {{outer|outer}} layer "cube it".

The tempting guess is to use the power rule anyway: $3(2x + 1)^2$. Test it. Expand the bracket first, then use the power rule term by term:

$$(2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1$$

$$\text{derivative} = 24x^2 + 24x + 6 = 6(4x^2 + 4x + 1) = 6(2x + 1)^2$$

*Notice: the true answer is $6(2x + 1)^2$. The guess, $3(2x + 1)^2$, is exactly half of it. The missing 2 is the slope of the inner layer, $2x + 1$.*

## Rates multiply

Think of the layers as two gears.

- The inner layer, $u = 2x + 1$, changes **2 times** as fast as x. (Its slope is 2.)
- The outer layer, $y = u^3$, changes **$3u^2$ times** as fast as u. (Its slope, by the power rule.)

So y changes $3u^2 \cdot 2$ times as fast as x. Rates in a chain multiply.^[n_rates]

With numbers: nudge x by a tiny 0.001. Then u moves by $2 \times 0.001 = 0.002$. Then y moves by about $3u^2 \times 0.002$. Each layer scales the nudge by its own slope.

## The rule

$$\frac{d}{dx}\, f(g(x)) = f'(g(x)) \cdot g'(x)$$

In words:

1. Take the derivative of the outer layer, **leaving the inside as it is**.
2. Multiply by the derivative of the inside.

Why leave the inside alone in step 1? The outer layer's slope depends on where it is working, and it is working at the value $u = g(x)$. So its slope is $f'$ at $g(x)$.^[n_leibniz]

This is the same [[derivative|derivative]] as always. The rule only says how to handle layers.

## A recipe

1. Spot the layers. Inner: what you would work out first. Outer: what happens to it last. Call the inner one u.
2. Take the derivative of the outer layer as if u were a plain x.
3. Put $u = g(x)$ back.
4. Multiply by the derivative of the inner layer.

**The two most common slips.**

- Forgetting step 4. If the inside is anything other than a bare x, there is a factor to multiply by.
- Changing the inside in step 2. The bracket stays exactly as it was. Only the outer layer gets differentiated.

:::example
title: Find the derivative of $\sqrt{x^2 + 9}$, and its value at $x = 4$.

1. Spot the layers. Inner: $u = x^2 + 9$. Outer: $\sqrt{u}$, which is $u^{1/2}$.
   why: You would work out $x^2 + 9$ first, then take its square root.
   uses: [composite-functions]

2. Derivative of the outer layer: $\tfrac{1}{2} u^{-1/2}$.
   why: The power rule, treating u like a plain x. Lower $\tfrac{1}{2}$ by one to get $-\tfrac{1}{2}$.
   uses: [power-rule]

3. Put the inside back: $\tfrac{1}{2}(x^2 + 9)^{-1/2}$.
   why: The outer slope is measured at $u = x^2 + 9$, so the inside stays as it is.
   uses: []

4. Derivative of the inner layer: $2x$.
   why: The power rule on $x^2$. The $+9$ is a constant, so it gives 0.
   uses: [power-rule]

5. Multiply and tidy: $\tfrac{1}{2}(x^2 + 9)^{-1/2} \cdot 2x = \dfrac{x}{\sqrt{x^2 + 9}}$.
   why: The chain rule multiplies the two layers' slopes. The $\tfrac{1}{2}$ and the 2 cancel, and a $-\tfrac{1}{2}$ power is one over a square root.
   uses: []

6. At $x = 4$: $\dfrac{4}{\sqrt{16 + 9}} = \dfrac{4}{5}$.
   why: Check with a tiny step: $\sqrt{4.001^2 + 9} \approx 5.0008$, which is 0.0008 above $\sqrt{25} = 5$. Rise over run is $0.0008 \div 0.001 = 0.8$, which is $\tfrac{4}{5}$.
   uses: [derivative]
:::

:::practice
q: Find the derivative of $(x^2 + 1)^5$.
answer: Inner: $u = x^2 + 1$, with derivative $2x$. Outer: $u^5$, with derivative $5u^4$. Multiply, putting the inside back: $5(x^2 + 1)^4 \cdot 2x =$ **$10x(x^2 + 1)^4$**.
:::

:::problems
q: Find the derivative of $(x + 5)^3$.
answer: Outer: $3u^2$. Inner $x + 5$ has derivative 1. **$3(x + 5)^2$**. A slope-1 inside changes nothing.

q: Find the derivative of $(3x + 1)^2$.
answer: Outer: $2u$, so $2(3x + 1)$. Inner derivative: 3. **$6(3x + 1)$**.

q: Check the last answer by expanding $(3x + 1)^2$ first.
answer: $(3x + 1)^2 = 9x^2 + 6x + 1$, with derivative $18x + 6$. And $6(3x + 1) = 18x + 6$. **They match.**

q: Find the derivative of $(2x - 7)^4$.
answer: $4(2x - 7)^3 \cdot 2 =$ **$8(2x - 7)^3$**.

q: Find the derivative of $(5 - x)^3$.
answer: $3(5 - x)^2$ times the inner derivative, $-1$. **$-3(5 - x)^2$**.

q: Find the derivative of $(x^2 + 3)^4$.
answer: $4(x^2 + 3)^3 \cdot 2x =$ **$8x(x^2 + 3)^3$**.

q: Find the derivative of $(x^3 - 1)^2$.
answer: $2(x^3 - 1) \cdot 3x^2 =$ **$6x^2(x^3 - 1)$**.

q: Find the derivative of $2(4x + 1)^5$.
answer: The 2 rides along. $2 \cdot 5(4x + 1)^4 \cdot 4 =$ **$40(4x + 1)^4$**.

q: Find the derivative of $(x^2 + x)^3$.
answer: Inner derivative is $2x + 1$. **$3(x^2 + x)^2(2x + 1)$**.

q: Find the derivative of $\sqrt{2x + 1}$.
answer: Write it as $(2x + 1)^{1/2}$. Outer: $\tfrac{1}{2}(2x + 1)^{-1/2}$. Times 2: $(2x + 1)^{-1/2}$, which is **$\dfrac{1}{\sqrt{2x + 1}}$**.

q: Find the derivative of $\dfrac{1}{x + 2}$.
answer: Write it as $(x + 2)^{-1}$. Outer: $-(x + 2)^{-2}$. Inner derivative 1. **$-\dfrac{1}{(x + 2)^2}$**.

q: Find the derivative of $\dfrac{1}{(3x - 1)^2}$.
answer: Write it as $(3x - 1)^{-2}$. Outer: $-2(3x - 1)^{-3}$. Times 3: $-6(3x - 1)^{-3}$, which is **$-\dfrac{6}{(3x - 1)^3}$**.

q: Find the slope of $y = (2x - 3)^3$ at $x = 2$.
answer: $y' = 3(2x - 3)^2 \cdot 2 = 6(2x - 3)^2$. At $x = 2$: $6 \cdot 1^2 =$ **6**.

q: Find the slope of $y = \sqrt{x^2 + 16}$ at $x = 3$.
answer: Outer $\tfrac{1}{2}u^{-1/2}$, inner derivative $2x$. Together: $\dfrac{x}{\sqrt{x^2 + 16}}$. At $x = 3$: $\dfrac{3}{\sqrt{25}} =$ **$\tfrac{3}{5}$**.

q: Find the derivative of $\sqrt[3]{x^2 + 7}$.
answer: Write it as $(x^2 + 7)^{1/3}$. Outer: $\tfrac{1}{3}(x^2 + 7)^{-2/3}$. Times $2x$: **$\tfrac{2x}{3}(x^2 + 7)^{-2/3}$**.

q: Find the derivative of $(1 + \sqrt{x})^2$.
answer: Inner: $u = 1 + x^{1/2}$, with derivative $\tfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{x}}$. Outer: $2u$. Multiply: $2(1 + \sqrt{x}) \cdot \dfrac{1}{2\sqrt{x}} =$ **$\dfrac{1 + \sqrt{x}}{\sqrt{x}}$**. Check by expanding: $1 + 2\sqrt{x} + x$ has derivative $\dfrac{1}{\sqrt{x}} + 1$, the same thing.
:::
