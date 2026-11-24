---
id: u-substitution
title: Substitution (u-sub)
prereqs: [ftc, chain-rule]
big: Substitution runs the chain rule backwards. When an integral contains a function inside another function, along with the inside's derivative, rename the inside as u. The integral turns into a simple one in u.
recap: Pick u to be an inner expression whose derivative also appears. Write $du = u'(x)\,dx$. Rewrite the whole integral in terms of u, integrate, then put x back. For a definite integral, change the limits to u-values instead, and there is no need to put x back. Check by differentiating.
check:
  q: What is $\int 2x(x^2 + 1)^3\,dx$?
  options: ["$\dfrac{(x^2 + 1)^4}{4} + C$", "$\dfrac{2x(x^2 + 1)^4}{4} + C$", "$\dfrac{x^2(x^2 + 1)^4}{4} + C$"]
  answer: 0
  why: Let $u = x^2 + 1$. Then $du = 2x\,dx$, which is exactly the rest of the integral. So it becomes $\int u^3\,du = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C$. Differentiating checks it: $\frac{4(x^2 + 1)^3 \cdot 2x}{4} = 2x(x^2 + 1)^3$. The second option keeps the $2x$, but the substitution has already used it up. The third integrates the $2x$ separately, as if it were a product of two separate integrals.
---

## The chain rule, read backwards

The [[chain-rule|chain rule]] says that for a function inside another:

$$\frac{d}{dx}\Big(F\big(g(x)\big)\Big) = F'\big(g(x)\big) \cdot g'(x)$$

Read it backwards, as an antiderivative:

$$\int F'\big(g(x)\big) \cdot g'(x)\,dx = F\big(g(x)\big) + C$$

So an integral shaped like **(outer function of the inside) × (derivative of the inside)** has an easy antiderivative. The job is to spot that shape. Substitution is a tidy way to do it.

## The method

Take $\int 2x(x^2 + 1)^5\,dx$. Expanding $(x^2 + 1)^5$ would take ages. Instead:

1. **Pick u.** Choose the inside: $u = x^2 + 1$.
2. **Find du.** Its derivative is $\dfrac{du}{dx} = 2x$. Write this as $du = 2x\,dx$.^[n_du]
3. **Rewrite everything in u.** The $(x^2 + 1)^5$ becomes $u^5$, and the $2x\,dx$ becomes $du$:
$$\int 2x(x^2 + 1)^5\,dx = \int u^5\,du$$
4. **Integrate:** $\dfrac{u^6}{6} + C$.
5. **Put x back:** $\dfrac{(x^2 + 1)^6}{6} + C$.

**Check by differentiating.** By the chain rule: $\dfrac{6(x^2 + 1)^5 \cdot 2x}{6} = 2x(x^2 + 1)^5$. ✓

## How to choose u

Look for an expression **inside** something (a bracket raised to a power, under a square root, in an exponent, inside sin or cos) whose derivative also appears outside, give or take a constant number.

| integral | good choice of u | because |
|---|---|---|
| $\int 3x^2(x^3 - 1)^4\,dx$ | $x^3 - 1$ | $du = 3x^2\,dx$ is right there |
| $\int x e^{x^2}\,dx$ | $x^2$ | $du = 2x\,dx$, and x is there (only the 2 is missing) |
| $\int \cos x \sin^2 x\,dx$ | $\sin x$ | $du = \cos x\,dx$ is right there |
| $\int \dfrac{2x}{x^2 + 1}\,dx$ | $x^2 + 1$ | $du = 2x\,dx$ is on top |

## Fixing a missing number

$\int x(x^2 + 1)^5\,dx$ has x, but not $2x$. That is fine. With $u = x^2 + 1$, $du = 2x\,dx$, so $x\,dx = \tfrac{1}{2}du$:

$$\int x(x^2 + 1)^5\,dx = \frac{1}{2}\int u^5\,du = \frac{u^6}{12} + C = \frac{(x^2 + 1)^6}{12} + C$$

**Only constant numbers can be fixed this way.** If a factor with x in it is missing, the substitution does not work. For example, $\int e^{x^2}\,dx$ has no x outside the exponent at all, and no substitution rescues it.^[n_no_formula]

## Definite integrals: change the limits

For a definite integral, there is a shortcut. When you switch to u, switch the limits to u-values too. Then you never need to put x back.

**Example.** $\displaystyle\int_0^1 2x\,e^{x^2}\,dx$. Let $u = x^2$, so $du = 2x\,dx$.

- When $x = 0$, $u = 0$. When $x = 1$, $u = 1$.

$$\int_0^1 2x\,e^{x^2}\,dx = \int_0^1 e^u\,du = \big[e^u\big]_0^1 = e - 1 \approx 1.718$$

The [[ftc|fundamental theorem]] does the last step, as always.

:::example
title: Find $\displaystyle\int_0^2 x\sqrt{x^2 + 5}\,dx$.

1. Pick $u = x^2 + 5$, the expression under the root.
   why: Its derivative, 2x, matches the x outside, apart from a 2.
   uses: [chain-rule]

2. Then $du = 2x\,dx$, so $x\,dx = \tfrac{1}{2}du$.
   why: Fix the missing constant by halving.
   uses: []

3. Change the limits: $x = 0$ gives $u = 5$, and $x = 2$ gives $u = 9$.
   why: Put each x limit into the formula for u.
   uses: []

4. Rewrite: $\displaystyle\frac{1}{2}\int_5^9 \sqrt{u}\,du = \frac{1}{2}\int_5^9 u^{1/2}\,du$.
   why: Everything is now in terms of u.
   uses: []

5. Integrate: $\dfrac{1}{2}\left[\dfrac{2}{3}u^{3/2}\right]_5^9 = \dfrac{1}{3}\left(9^{3/2} - 5^{3/2}\right)$.
   why: Raise the power by 1 and divide by it.
   uses: [antiderivatives]

6. Work it out: $9^{3/2} = 27$, and $5^{3/2} = 5\sqrt{5} \approx 11.18$. So the answer is $\dfrac{27 - 5\sqrt{5}}{3} \approx 5.27$.
   why: $9^{3/2} = (\sqrt{9})^3 = 27$.
   uses: [ftc]
:::

:::practice
q: Find $\int 3x^2(x^3 - 1)^2\,dx$.
answer: $u = x^3 - 1$, $du = 3x^2\,dx$. So $\int u^2\,du = \dfrac{u^3}{3} + C =$ **$\dfrac{(x^3 - 1)^3}{3} + C$**.
:::

:::problems
q: Find $\int 2x(x^2 + 3)^4\,dx$.
answer: $u = x^2 + 3$: **$\dfrac{(x^2 + 3)^5}{5} + C$**.

q: Find $\int (2x + 1)^7\,dx$.
answer: $u = 2x + 1$, $du = 2\,dx$, so $dx = \tfrac{1}{2}du$. **$\dfrac{(2x + 1)^8}{16} + C$**.

q: Find $\int x\sqrt{x^2 + 1}\,dx$.
answer: $u = x^2 + 1$, $x\,dx = \tfrac{1}{2}du$. $\tfrac{1}{2} \cdot \tfrac{2}{3}u^{3/2} =$ **$\tfrac{1}{3}(x^2 + 1)^{3/2} + C$**.

q: Find $\int \cos(3x)\,dx$.
answer: $u = 3x$, $dx = \tfrac{1}{3}du$. **$\dfrac{\sin(3x)}{3} + C$**.

q: Find $\int e^{5x}\,dx$.
answer: $u = 5x$, $dx = \tfrac{1}{5}du$. **$\dfrac{e^{5x}}{5} + C$**.

q: Find $\int x e^{x^2}\,dx$.
answer: $u = x^2$, $x\,dx = \tfrac{1}{2}du$. **$\dfrac{e^{x^2}}{2} + C$**.

q: Find $\int \sin x \cos x\,dx$.
answer: $u = \sin x$, $du = \cos x\,dx$. $\int u\,du =$ **$\dfrac{\sin^2 x}{2} + C$**.

q: Find $\int \dfrac{2x}{x^2 + 1}\,dx$.
answer: $u = x^2 + 1$, $du = 2x\,dx$. $\int \dfrac{1}{u}\,du = \ln|u| + C =$ **$\ln(x^2 + 1) + C$**. ($x^2 + 1$ is always positive, so the bars can go.)

q: Find $\int \dfrac{\ln x}{x}\,dx$.
answer: $u = \ln x$, $du = \dfrac{1}{x}\,dx$. $\int u\,du =$ **$\dfrac{(\ln x)^2}{2} + C$**.

q: Find $\displaystyle\int_0^1 2x(x^2 + 1)^3\,dx$.
answer: $u = x^2 + 1$, limits 1 to 2. $\left[\dfrac{u^4}{4}\right]_1^2 = \dfrac{16 - 1}{4} =$ **$\dfrac{15}{4}$**.

q: Find $\displaystyle\int_0^{\pi/2} \sin x \cos x\,dx$.
answer: $u = \sin x$, limits $\sin 0 = 0$ to $\sin\tfrac{\pi}{2} = 1$. $\left[\dfrac{u^2}{2}\right]_0^1 =$ **$\dfrac{1}{2}$**.

q: Find $\displaystyle\int_0^1 \frac{x}{x^2 + 1}\,dx$.
answer: $u = x^2 + 1$, limits 1 to 2, $x\,dx = \tfrac{1}{2}du$. $\tfrac{1}{2}\big[\ln u\big]_1^2 =$ **$\tfrac{1}{2}\ln 2 \approx 0.347$**.

q: Find $\displaystyle\int_0^3 \sqrt{x + 1}\,dx$.
answer: $u = x + 1$, $du = dx$, limits 1 to 4. $\left[\tfrac{2}{3}u^{3/2}\right]_1^4 = \tfrac{2}{3}(8 - 1) =$ **$\dfrac{14}{3}$**.

q: Check your answer to $\int 2x(x^2 + 3)^4\,dx$ by differentiating.
answer: $\dfrac{d}{dx}\dfrac{(x^2 + 3)^5}{5} = \dfrac{5(x^2 + 3)^4 \cdot 2x}{5} = 2x(x^2 + 3)^4$. ✓ **It matches.**

q: Why does substitution not work on $\int e^{x^2}\,dx$?
answer: The natural choice is $u = x^2$, with $du = 2x\,dx$. But **there is no x outside the exponent** to turn into du. A missing constant can be fixed, but a missing x cannot.

q: A student does $\displaystyle\int_0^1 2x(x^2 + 1)^3\,dx$ with $u = x^2 + 1$ but keeps the limits 0 and 1. What answer do they get, and why is it wrong?
answer: $\left[\dfrac{u^4}{4}\right]_0^1 = \dfrac{1}{4}$, but the right answer is $\dfrac{15}{4}$. **The limits 0 and 1 are x-values.** In terms of u they become 1 and 2. Change the limits, or put x back before using the old ones.
:::
