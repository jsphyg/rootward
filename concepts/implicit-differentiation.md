---
id: implicit-differentiation
title: Implicit differentiation
prereqs: [chain-rule, product-rule, sum-constant-rules]
big: Some curves are given by an equation that mixes x and y, like a circle. You can still find their slope. Take the derivative of both sides, treat y as a function of x, and solve for the slope.
recap: To find $\frac{dy}{dx}$ when x and y are tangled in one equation, differentiate every term with respect to x. Each time you differentiate something with y in it, the chain rule adds a factor of $\frac{dy}{dx}$. Then collect the $\frac{dy}{dx}$ terms and solve. For the circle $x^2 + y^2 = 25$, this gives $\frac{dy}{dx} = -\frac{x}{y}$.
check:
  q: Here y depends on x. What is the derivative of $y^2$ with respect to x?
  options: ["$2y \dfrac{dy}{dx}$", "$2y$", "$2x$"]
  answer: 0
  why: $y^2$ is a layered function: the inner layer is y, which depends on x, and the outer layer squares it. The chain rule gives the outer derivative, 2y, times the inner derivative, $\frac{dy}{dx}$. Plain $2y$ forgets the inner layer. $2x$ treats y as if it were x.
---

## A curve that is not a function

The circle of radius 5 around the origin is all the points where

$$x^2 + y^2 = 25$$

It is a perfectly good curve, and at every point it has a tangent line. But it fails the vertical line test: at $x = 3$, both $(3, 4)$ and $(3, -4)$ are on it. So it is not one function $y = f(x)$, and we cannot simply take the derivative of a formula.

What is the slope of the circle at $(3, 4)$?

:::widget circle-tangent

## The idea: leave y where it is

Near the point $(3, 4)$, the top of the circle **is** a function of x. We just have not written its formula. So treat y as an unknown function of x, and take the derivative of both sides of the equation as they stand.

A note on symbols. $\dfrac{dy}{dx}$ means the derivative of y with respect to x: the slope we want. $\dfrac{d}{dx}$ in front of something means "take its derivative with respect to x."

Go term by term:

- $\dfrac{d}{dx}(x^2) = 2x$, as usual.
- $\dfrac{d}{dx}(y^2)$ is a layered function. The inner layer is y, which depends on x. The outer layer squares it. So by the [[chain-rule|chain rule]], it is $2y \cdot \dfrac{dy}{dx}$.
- $\dfrac{d}{dx}(25) = 0$, since 25 is a constant.

Both sides were equal for every point on the curve, so their derivatives are equal too:

$$2x + 2y\frac{dy}{dx} = 0$$

Now solve for the slope:

$$\frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y}$$

At $(3, 4)$, the slope is $-\dfrac{3}{4}$.

**Check it two ways.**

- **Geometry.** The radius to $(3, 4)$ has slope $\tfrac{4}{3}$. A tangent to a circle is at right angles to the radius, and a line at right angles has the slope flipped and negated: $-\tfrac{3}{4}$.
- **The formula.** The top half of the circle is $y = \sqrt{25 - x^2}$. The chain rule gives $\dfrac{dy}{dx} = \dfrac{-2x}{2\sqrt{25 - x^2}} = \dfrac{-x}{\sqrt{25 - x^2}}$. At $x = 3$ that is $\dfrac{-3}{4}$.

*Notice: we got the answer without ever solving for y. And the formula $-\tfrac{x}{y}$ works on the bottom half of the circle too, where the square root formula would need a minus sign.*

This method is called **implicit differentiation**. The equation describes y "implicitly", without a formula of the form y = something.^[n_implicit]

## The one rule to remember

**Every time you take the derivative of something with y in it, multiply by $\dfrac{dy}{dx}$.**

That is just the chain rule, with y as the inner layer. A few examples:

| term | derivative with respect to x |
|---|---|
| $y$ | $\dfrac{dy}{dx}$ |
| $y^3$ | $3y^2 \dfrac{dy}{dx}$ |
| $5y^2$ | $10y \dfrac{dy}{dx}$ |
| $x^3$ | $3x^2$ (no y, so no extra factor) |

**When x and y are multiplied**, use the [[product-rule|product rule]]. For $xy$: the derivative of x is 1, and the derivative of y is $\dfrac{dy}{dx}$. So

$$\frac{d}{dx}(xy) = 1 \cdot y + x\frac{dy}{dx}$$

## The method

1. Take the derivative of every term on both sides, with respect to x. Attach $\dfrac{dy}{dx}$ to each piece that came from a y.
2. Move every term with $\dfrac{dy}{dx}$ to one side, and everything else to the other.
3. Pull $\dfrac{dy}{dx}$ out as a common factor.
4. Divide to get $\dfrac{dy}{dx}$ on its own.
5. If you want the slope at a point, plug in both its x and its y.

**The two most common slips.**

- Forgetting the $\dfrac{dy}{dx}$ on a y term. Writing $(y^2)' = 2y$ is the same mistake as forgetting the inner derivative in the chain rule.
- Plugging in only x. The answer usually has y in it too, so you need the whole point.

:::example
title: Find the slope of $x^2 + xy + y^2 = 7$ at the point $(1, 2)$.

1. Check the point is on the curve: $1 + 2 + 4 = 7$. Yes.
   why: A slope at a point only makes sense if the point is on the curve.
   uses: []

2. Differentiate term by term: $2x + \left(y + x\dfrac{dy}{dx}\right) + 2y\dfrac{dy}{dx} = 0$.
   why: $x^2$ as usual. $xy$ by the product rule. $y^2$ by the chain rule. 7 is a constant.
   uses: [product-rule, chain-rule]

3. Collect the $\dfrac{dy}{dx}$ terms on the left: $x\dfrac{dy}{dx} + 2y\dfrac{dy}{dx} = -2x - y$.
   why: Move everything without $\dfrac{dy}{dx}$ across, changing its sign.
   uses: []

4. Factor and divide: $\dfrac{dy}{dx}(x + 2y) = -(2x + y)$, so $\dfrac{dy}{dx} = -\dfrac{2x + y}{x + 2y}$.
   why: $\dfrac{dy}{dx}$ is a common factor on the left.
   uses: []

5. Plug in $(1, 2)$: $-\dfrac{2 + 2}{1 + 4} = -\dfrac{4}{5}$.
   why: The slope formula needs both x and y.
   uses: []

6. Check with numbers. Solving the equation for y at $x = 1.001$ gives $y \approx 1.99920$. So the slope is about $\dfrac{1.99920 - 2}{0.001} = -0.80$. It matches.
   why: A tiny step along the curve should give the same slope.
   uses: []
:::

:::practice
q: Find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 9$, and the slope at $(1, 2)$.
answer: $3x^2 + 3y^2\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} =$ **$-\dfrac{x^2}{y^2}$**. At $(1, 2)$: $-\dfrac{1}{4}$. (The point is on the curve: $1 + 8 = 9$.)
:::

:::problems
q: Find the slope of the circle $x^2 + y^2 = 100$ at $(6, 8)$.
answer: $\dfrac{dy}{dx} = -\dfrac{x}{y} = -\dfrac{6}{8} =$ **$-\dfrac{3}{4}$**.

q: Find the slope of $x^2 + y^2 = 25$ at $(-3, 4)$. What happens at $(5, 0)$?
answer: $-\dfrac{x}{y} = -\dfrac{-3}{4} =$ **$\dfrac{3}{4}$**. At $(5, 0)$ the formula divides by 0: the tangent there is **vertical**, so it has no slope.

q: At which points is the circle $x^2 + y^2 = 25$ flat (slope 0)?
answer: $-\dfrac{x}{y} = 0$ when $x = 0$. On the circle that gives **$(0, 5)$ and $(0, -5)$**, the very top and bottom.

q: Find $\dfrac{dy}{dx}$ for $y^2 = x$, and the slope at $(4, 2)$. Check with $y = \sqrt{x}$.
answer: $2y\dfrac{dy}{dx} = 1$, so $\dfrac{dy}{dx} = \dfrac{1}{2y}$. At $(4, 2)$: **$\dfrac{1}{4}$**. Check: $y = x^{1/2}$ gives $\dfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{4}} = \dfrac{1}{4}$.

q: Find the slope of $x^2 - y^2 = 16$ at $(5, 3)$.
answer: $2x - 2y\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = \dfrac{x}{y} =$ **$\dfrac{5}{3}$**. (Check the point: $25 - 9 = 16$.)

q: Find the slope of $x^2 + 4y^2 = 8$ at $(2, 1)$.
answer: $2x + 8y\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = -\dfrac{x}{4y} = -\dfrac{2}{4} =$ **$-\dfrac{1}{2}$**.

q: Find the slope of $y^3 = x^2$ at $(8, 4)$.
answer: $3y^2\dfrac{dy}{dx} = 2x$, so $\dfrac{dy}{dx} = \dfrac{2x}{3y^2} = \dfrac{16}{48} =$ **$\dfrac{1}{3}$**. (Check the point: $4^3 = 64 = 8^2$.)

q: Find the slope of $y^4 + x = 17$ at $(1, 2)$.
answer: $4y^3\dfrac{dy}{dx} + 1 = 0$, so $\dfrac{dy}{dx} = -\dfrac{1}{4y^3} = -\dfrac{1}{32}$. The slope is **$-\dfrac{1}{32}$**.

q: Find the slope of $y^2 + 2y = x$ at $(3, 1)$.
answer: $(2y + 2)\dfrac{dy}{dx} = 1$, so $\dfrac{dy}{dx} = \dfrac{1}{2y + 2} =$ **$\dfrac{1}{4}$**.

q: Find the slope of $xy = 12$ at $(3, 4)$. Check with $y = \dfrac{12}{x}$.
answer: Product rule: $y + x\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = -\dfrac{y}{x} =$ **$-\dfrac{4}{3}$**. Check: $y = 12x^{-1}$ gives $-12x^{-2} = -\dfrac{12}{9} = -\dfrac{4}{3}$.

q: Find the slope of $x^2 y = 8$ at $(2, 2)$.
answer: Product rule: $2xy + x^2\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = -\dfrac{2y}{x} =$ **$-2$**.

q: Find the slope of $x + y + xy = 5$ at $(1, 2)$.
answer: $1 + \dfrac{dy}{dx} + y + x\dfrac{dy}{dx} = 0$. Collect: $\dfrac{dy}{dx}(1 + x) = -(1 + y)$, so $\dfrac{dy}{dx} = -\dfrac{1 + y}{1 + x} =$ **$-\dfrac{3}{2}$**.

q: Find the slope of $(x + y)^2 = 9$ at $(1, 2)$.
answer: Chain rule: $2(x + y)\left(1 + \dfrac{dy}{dx}\right) = 0$. Since $x + y = 3$, not 0, the bracket must be 0: **$\dfrac{dy}{dx} = -1$**. That makes sense: near $(1, 2)$ the curve is the line $x + y = 3$.

q: Find the slope of $x^3 + y^3 = 6xy$ at $(3, 3)$.
answer: $3x^2 + 3y^2\dfrac{dy}{dx} = 6y + 6x\dfrac{dy}{dx}$. Collect: $\dfrac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$. At $(3, 3)$: $\dfrac{dy}{dx}(27 - 18) = 18 - 27$, so **$\dfrac{dy}{dx} = -1$**.

q: Find $\dfrac{dy}{dx}$ for any circle $x^2 + y^2 = r^2$, where r is a fixed radius.
answer: $2x + 2y\dfrac{dy}{dx} = 0$, since $r^2$ is a constant. So **$\dfrac{dy}{dx} = -\dfrac{x}{y}$**, the same for every circle centred at the origin.

q: A student writes the derivative of $x^2 + y^2 = 25$ as $2x + 2y = 0$. What went wrong, and what is the right answer?
answer: They forgot the chain rule on $y^2$. The derivative of $y^2$ is $2y\dfrac{dy}{dx}$, not $2y$. The correct line is **$2x + 2y\dfrac{dy}{dx} = 0$**, giving $\dfrac{dy}{dx} = -\dfrac{x}{y}$. Their version has no slope in it at all.
:::
