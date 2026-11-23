---
id: product-rule
title: The product rule
prereqs: [power-rule]
big: To find the derivative of two functions multiplied together, take the first times the derivative of the second, plus the second times the derivative of the first.
recap: $(f \cdot g)' = f' \cdot g + f \cdot g'$. Each factor takes a turn being differentiated while the other stays as it is, and the two results are added. It is **not** $f' \cdot g'$.
check:
  q: What is the derivative of $x^2(x + 1)$?
  options: ["$3x^2 + 2x$", "$2x$", "$2x(x + 1)$"]
  answer: 0
  why: Let $f = x^2$ and $g = x + 1$, so $f' = 2x$ and $g' = 1$. Then $f'g + fg' = 2x(x + 1) + x^2 \cdot 1 = 2x^2 + 2x + x^2 = 3x^2 + 2x$. Check by expanding first: $x^3 + x^2$ has derivative $3x^2 + 2x$. Getting $2x$ multiplies the two derivatives, $2x \cdot 1$. Getting $2x(x + 1)$ stops after the first half of the rule.
---

## The tempting mistake

It would be nice if the derivative of a product were the product of the derivatives. Test it on $x^2 \cdot (x + 1)$:

- Product of derivatives: $(x^2)' \cdot (x + 1)' = 2x \cdot 1 = 2x$.
- The truth, by expanding first: $x^2(x + 1) = x^3 + x^2$, so the derivative is $3x^2 + 2x$.

*Notice: these do not match. At $x = 1$, the guess gives 2 but the truth is 5. Products need their own rule.*

## The rule

$$\frac{d}{dx}\big(f(x) \cdot g(x)\big) = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$

In words: **the derivative of the first times the second, plus the first times the derivative of the second.** Each factor gets one turn at being differentiated. The other factor waits, unchanged, beside it.

Check it on the example: $f = x^2$, $g = x + 1$.

$$2x \cdot (x + 1) + x^2 \cdot 1 = 2x^2 + 2x + x^2 = 3x^2 + 2x$$

That matches.

## Why it works

Picture the product $f \cdot g$ as the area of a rectangle with sides f and g.

:::widget product-rect

Nudge x by a small step h. Side f grows by a little, call it $\Delta f$. Side g grows by $\Delta g$.^[n_delta] The area grows by three pieces:

- a strip down the side: $g \cdot \Delta f$
- a strip along the top: $f \cdot \Delta g$
- a tiny corner: $\Delta f \cdot \Delta g$

Divide the growth by h, the run, to get a slope:

$$g \cdot \frac{\Delta f}{h} + f \cdot \frac{\Delta g}{h} + \Delta f \cdot \frac{\Delta g}{h}$$

As $h \to 0$, $\dfrac{\Delta f}{h}$ heads to $f'$ and $\dfrac{\Delta g}{h}$ heads to $g'$. The corner term has an extra $\Delta f$ in it, which shrinks to 0. So the slope heads to $g f' + f g'$. That is the rule.

**Why the corner drops out.** It is a small amount times another small amount. Halving the nudge halves each strip but quarters the corner. It vanishes much faster than the strips.

## When to use it

If the product is easy to expand, expanding and then using the [[power-rule|power rule]] works fine. The product rule earns its keep when expanding is messy or impossible, such as a power of x times a square root. It is also the only way when the factors are not polynomials at all, which later pages will need.^[n_three_factors]

:::example
title: Find the derivative of $(x^2 + 1)(x^3 - 4x)$.

1. Name the factors and their derivatives. $f = x^2 + 1$, so $f' = 2x$. $g = x^3 - 4x$, so $g' = 3x^2 - 4$.
   why: The product rule needs all four pieces.
   uses: [power-rule]

2. First half: $f' \cdot g = 2x(x^3 - 4x) = 2x^4 - 8x^2$.
   why: The derivative of the first, times the second as it is.
   uses: [expanding]

3. Second half: $f \cdot g' = (x^2 + 1)(3x^2 - 4) = 3x^4 - 4x^2 + 3x^2 - 4 = 3x^4 - x^2 - 4$.
   why: The first as it is, times the derivative of the second.
   uses: [expanding]

4. Add: $2x^4 - 8x^2 + 3x^4 - x^2 - 4 = 5x^4 - 9x^2 - 4$.
   why: The rule adds the two halves.
   uses: []

5. Check by expanding first: $(x^2 + 1)(x^3 - 4x) = x^5 - 3x^3 - 4x$, whose derivative is $5x^4 - 9x^2 - 4$. It matches.
   why: Two routes to the same answer.
   uses: [power-rule]
:::

:::practice
q: Use the product rule to find the derivative of $x^3(2x - 5)$. Check by expanding.
answer: $f = x^3$, $f' = 3x^2$. $g = 2x - 5$, $g' = 2$. So $3x^2(2x - 5) + x^3 \cdot 2 = 6x^3 - 15x^2 + 2x^3 =$ **$8x^3 - 15x^2$**. Check: $x^3(2x - 5) = 2x^4 - 5x^3$, whose derivative is $8x^3 - 15x^2$.
:::

:::problems
q: Use the product rule on $x(x + 3)$.
answer: $f = x$, $f' = 1$. $g = x + 3$, $g' = 1$. So $1 \cdot (x + 3) + x \cdot 1 =$ **$2x + 3$**. Check: $x^2 + 3x$ gives $2x + 3$.

q: Use the product rule on $x^2(x - 1)$.
answer: $2x(x - 1) + x^2 \cdot 1 = 2x^2 - 2x + x^2 =$ **$3x^2 - 2x$**. Check: $x^3 - x^2$ gives $3x^2 - 2x$.

q: Use the product rule on $(x + 2)(x - 5)$.
answer: $1 \cdot (x - 5) + (x + 2) \cdot 1 =$ **$2x - 3$**. Check: $x^2 - 3x - 10$ gives $2x - 3$.

q: Use the product rule on $(2x + 1)(3x - 4)$.
answer: $2(3x - 4) + (2x + 1) \cdot 3 = 6x - 8 + 6x + 3 =$ **$12x - 5$**. Check: $6x^2 - 5x - 4$ gives $12x - 5$.

q: Use the product rule on $3x^2 \cdot x^4$.
answer: $6x \cdot x^4 + 3x^2 \cdot 4x^3 = 6x^5 + 12x^5 =$ **$18x^5$**. Check: $3x^6$ gives $18x^5$.

q: Use the product rule on $(x^2 + 1)(x^2 - 1)$.
answer: $2x(x^2 - 1) + (x^2 + 1) \cdot 2x = 2x^3 - 2x + 2x^3 + 2x =$ **$4x^3$**. Check: $x^4 - 1$ gives $4x^3$.

q: Use the product rule on $(x^3 - x)(x^2 + 2)$, and find the slope at $x = 1$.
answer: $f = x^3 - x$, $f' = 3x^2 - 1$. $g = x^2 + 2$, $g' = 2x$. At $x = 1$: $f = 0$, $f' = 2$, $g = 3$, $g' = 2$. So the slope is $2 \cdot 3 + 0 \cdot 2 =$ **6**.

q: Find the derivative of $x\sqrt{x}$ with the product rule.
answer: $f = x$, $f' = 1$. $g = \sqrt{x} = x^{1/2}$, $g' = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$. So $1 \cdot \sqrt{x} + x \cdot \frac{1}{2\sqrt{x}} = \sqrt{x} + \frac{\sqrt{x}}{2} =$ **$\frac{3}{2}\sqrt{x}$**. Check: $x\sqrt{x} = x^{3/2}$, which gives $\frac{3}{2}x^{1/2}$.

q: Find the derivative of $\dfrac{1}{x}(x^2 + 3)$ with the product rule.
answer: $f = x^{-1}$, $f' = -x^{-2}$. $g = x^2 + 3$, $g' = 2x$. So $-x^{-2}(x^2 + 3) + x^{-1} \cdot 2x = -1 - \frac{3}{x^2} + 2 =$ **$1 - \frac{3}{x^2}$**. Check: $x + 3x^{-1}$ gives $1 - 3x^{-2}$.

q: $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$ and $g'(2) = 5$. Find the slope of $f \cdot g$ at $x = 2$.
answer: $f'g + fg' = (-1)(4) + (3)(5) = -4 + 15 =$ **11**.

q: $g(1) = 2$ and $g'(1) = -3$. Find the slope of $x^2 g(x)$ at $x = 1$.
answer: $(x^2)' \cdot g + x^2 \cdot g' = 2x \cdot g(x) + x^2 g'(x)$. At $x = 1$: $2 \cdot 2 + 1 \cdot (-3) =$ **1**.

q: Find the slope of $(x^2 + x)(x^3 + 1)$ at $x = 1$.
answer: At $x = 1$: $f = 2$, $f' = 2x + 1 = 3$, $g = 2$, $g' = 3x^2 = 3$. So $3 \cdot 2 + 2 \cdot 3 =$ **12**.

q: A rectangle's width is $3t$ cm and its height is $t^2$ cm after t seconds. How fast is its area growing at time t?
answer: Area $= 3t \cdot t^2$. Product rule: $3 \cdot t^2 + 3t \cdot 2t = 3t^2 + 6t^2 =$ **$9t^2$ square cm per second**. Check: the area is $3t^3$, which gives $9t^2$.

q: A shop's revenue is price times quantity sold. Right now the price is 10 dollars and rising by 0.50 dollars a week, and sales are 200 a week and falling by 4 a week. How fast is revenue changing?
answer: $R = p \cdot q$, so $R' = p'q + pq' = 0.5 \cdot 200 + 10 \cdot (-4) = 100 - 40 =$ **60 dollars a week, rising**.
:::
