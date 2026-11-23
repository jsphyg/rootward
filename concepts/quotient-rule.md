---
id: quotient-rule
title: The quotient rule
prereqs: [product-rule]
big: To find the derivative of one function divided by another, take the bottom times the derivative of the top, minus the top times the derivative of the bottom, all over the bottom squared.
recap: $\left(\dfrac{f}{g}\right)' = \dfrac{f' g - f g'}{g^2}$. The order on top matters, because of the minus sign. A memory line: "low d-high minus high d-low, over low squared".
check:
  q: What is the derivative of $\dfrac{x}{x + 1}$?
  options: ["$\dfrac{1}{(x + 1)^2}$", "$\dfrac{-1}{(x + 1)^2}$", "1"]
  answer: 0
  why: Top $f = x$ with $f' = 1$. Bottom $g = x + 1$ with $g' = 1$. So $\dfrac{1 \cdot (x + 1) - x \cdot 1}{(x + 1)^2} = \dfrac{1}{(x + 1)^2}$. Getting $-1$ on top means the two halves were subtracted in the wrong order. Getting 1 divides the two derivatives, $\frac{1}{1}$, which is not the rule.
---

## The tempting mistake again

As with products, dividing the derivatives does not work. Test it on $\dfrac{x^3}{x}$, which is just $x^2$:

- The truth: $x^2$ has derivative $2x$.
- Dividing derivatives: $\dfrac{(x^3)'}{(x)'} = \dfrac{3x^2}{1} = 3x^2$. Wrong.

*Notice: at $x = 1$, the truth is 2 but the guess is 3. Fractions need a rule of their own.*

## The rule

$$\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right) = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{g(x)^2}$$

Call the top "high" and the bottom "low". Then the rule reads: **low times d-high, minus high times d-low, all over low squared.** Here "d-high" means the derivative of the top.

**Order matters.** The top of the rule has a minus sign, so swapping the two halves flips the sign of the whole answer. Always start with the bottom times the derivative of the top. The bottom of the answer is the original bottom, squared. It is never differentiated.

**Check it on $\dfrac{x^3}{x}$.** High $= x^3$, d-high $= 3x^2$, low $= x$, d-low $= 1$:

$$\frac{3x^2 \cdot x - x^3 \cdot 1}{x^2} = \frac{3x^3 - x^3}{x^2} = \frac{2x^3}{x^2} = 2x$$

That matches.

## Why it works

Call the fraction q, so $q = \dfrac{f}{g}$. Multiply both sides by g:

$$f = q \cdot g$$

Now f is a product, so the [[product-rule|product rule]] applies:

$$f' = q' g + q g'$$

Solve for $q'$. Take $q g'$ from both sides, then divide by g:

$$q' = \frac{f' - q g'}{g}$$

Finally, put $q = \dfrac{f}{g}$ back in, and multiply the top and bottom by g to clear the small fraction:

$$q' = \frac{f' - \dfrac{f}{g} g'}{g} = \frac{f' g - f g'}{g^2}$$

So the quotient rule is the product rule, rearranged.^[n_quotient_proof]

## Simplify first when you can

The quotient rule always works, but it is not always the quickest route.

- $\dfrac{x^3 + x^2}{x}$ simplifies to $x^2 + x$ (for $x \neq 0$). Its derivative is just $2x + 1$.
- $\dfrac{3}{x^2}$ is $3x^{-2}$. The [[power-rule|power rule]] gives $-6x^{-3}$ in one step.

Save the quotient rule for fractions that do not simplify, like $\dfrac{x^2 + 1}{x - 3}$.

:::example
title: Find the derivative of $\dfrac{x^2 + 1}{x - 3}$, and check it at $x = 4$.

1. Name the parts. High $= x^2 + 1$, so d-high $= 2x$. Low $= x - 3$, so d-low $= 1$.
   why: The rule needs all four pieces.
   uses: [power-rule]

2. Top of the answer: low times d-high, minus high times d-low: $(x - 3) \cdot 2x - (x^2 + 1) \cdot 1$.
   why: The order matters because of the minus.
   uses: []

3. Tidy the top: $2x^2 - 6x - x^2 - 1 = x^2 - 6x - 1$.
   why: Expand and collect like terms.
   uses: [expanding]

4. Bottom: low squared, $(x - 3)^2$. So the derivative is $\dfrac{x^2 - 6x - 1}{(x - 3)^2}$.
   why: The bottom is squared, not differentiated.
   uses: []

5. Check at $x = 4$: the formula gives $\dfrac{16 - 24 - 1}{1} = -9$. A tiny step: the original gives 17 at $x = 4$ and about 16.99101 at $x = 4.001$. Rise over run is about $\dfrac{-0.00899}{0.001} \approx -8.99$.
   why: A secant slope over a tiny run should be close to the derivative.
   uses: [derivative]
:::

:::practice
q: Find the derivative of $\dfrac{3x}{x^2 + 1}$.
answer: High $= 3x$, d-high $= 3$. Low $= x^2 + 1$, d-low $= 2x$. Top: $3(x^2 + 1) - 3x \cdot 2x = 3x^2 + 3 - 6x^2 = 3 - 3x^2$. So the derivative is **$\dfrac{3 - 3x^2}{(x^2 + 1)^2}$**.
:::

:::problems
q: Find the derivative of $\dfrac{x}{x + 2}$.
answer: High $x$, d-high 1. Low $x + 2$, d-low 1. Top: $(x + 2) \cdot 1 - x \cdot 1 = 2$. So **$\dfrac{2}{(x + 2)^2}$**.

q: Find the derivative of $\dfrac{1}{x + 5}$.
answer: High 1, d-high 0. Low $x + 5$, d-low 1. Top: $(x + 5) \cdot 0 - 1 \cdot 1 = -1$. So **$\dfrac{-1}{(x + 5)^2}$**.

q: Find the derivative of $\dfrac{x - 1}{x + 1}$.
answer: Top: $(x + 1) \cdot 1 - (x - 1) \cdot 1 = x + 1 - x + 1 = 2$. So **$\dfrac{2}{(x + 1)^2}$**.

q: Find the derivative of $\dfrac{2x + 3}{x - 4}$.
answer: Top: $(x - 4) \cdot 2 - (2x + 3) \cdot 1 = 2x - 8 - 2x - 3 = -11$. So **$\dfrac{-11}{(x - 4)^2}$**.

q: Find the derivative of $\dfrac{x^2}{x + 1}$.
answer: Top: $(x + 1) \cdot 2x - x^2 \cdot 1 = 2x^2 + 2x - x^2 = x^2 + 2x$. So **$\dfrac{x^2 + 2x}{(x + 1)^2}$**.

q: Use the quotient rule on $\dfrac{3}{x^2}$, then check with the power rule.
answer: Top: $x^2 \cdot 0 - 3 \cdot 2x = -6x$. Bottom: $x^4$. So $\frac{-6x}{x^4} =$ **$-\dfrac{6}{x^3}$**. Check: $3x^{-2}$ gives $-6x^{-3}$.

q: Use the quotient rule on $\dfrac{x^2 - 1}{x^2}$, then check by simplifying first.
answer: Top: $x^2 \cdot 2x - (x^2 - 1) \cdot 2x = 2x^3 - 2x^3 + 2x = 2x$. Bottom: $x^4$. So $\frac{2x}{x^4} =$ **$\dfrac{2}{x^3}$**. Check: $1 - x^{-2}$ gives $2x^{-3}$.

q: Find the derivative of $\dfrac{x^3 + x^2}{x}$ the quick way.
answer: Simplify first: $\frac{x^3 + x^2}{x} = x^2 + x$ (for $x \neq 0$). Derivative: **$2x + 1$**.

q: Find the slope of $\dfrac{x}{x^2 + 1}$ at $x = 0$ and at $x = 1$.
answer: Top: $(x^2 + 1) \cdot 1 - x \cdot 2x = 1 - x^2$. So the derivative is $\frac{1 - x^2}{(x^2 + 1)^2}$. At $x = 0$: $\frac{1}{1} =$ **1**. At $x = 1$: $\frac{0}{4} =$ **0**.

q: Where is the slope of $\dfrac{x}{x^2 + 1}$ equal to 0?
answer: From the last problem, the derivative is $\frac{1 - x^2}{(x^2 + 1)^2}$. A fraction is 0 when its top is 0: $1 - x^2 = 0$, so **$x = 1$ or $x = -1$**.

q: $f(1) = 2$, $f'(1) = 3$, $g(1) = 4$ and $g'(1) = -1$. Find the slope of $\dfrac{f}{g}$ at $x = 1$.
answer: $\frac{f'g - fg'}{g^2} = \frac{3 \cdot 4 - 2 \cdot (-1)}{4^2} = \frac{12 + 2}{16} =$ **$\frac{7}{8}$**.

q: Use the quotient rule on $\dfrac{\sqrt{x}}{x}$, then check with the power rule.
answer: High $x^{1/2}$, d-high $\frac{1}{2\sqrt{x}}$. Low x, d-low 1. Top: $x \cdot \frac{1}{2\sqrt{x}} - \sqrt{x} = \frac{\sqrt{x}}{2} - \sqrt{x} = -\frac{\sqrt{x}}{2}$. Over $x^2$: **$-\dfrac{\sqrt{x}}{2x^2}$**. Check: $\frac{\sqrt{x}}{x} = x^{-1/2}$, which gives $-\frac{1}{2}x^{-3/2}$, the same thing.

q: Making x items costs $500 + 2x$ dollars, so the average cost per item is $C(x) = \dfrac{500 + 2x}{x}$. Find $C'(x)$ and its value at $x = 100$.
answer: Top: $x \cdot 2 - (500 + 2x) \cdot 1 = -500$. So $C'(x) = \frac{-500}{x^2}$. At $x = 100$: $\frac{-500}{10000} =$ **$-0.05$ dollars per item**. Each extra item lowers the average cost by about 5 cents.
:::
