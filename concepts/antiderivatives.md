---
id: antiderivatives
title: Antiderivatives
prereqs: [mean-value-theorem, trig-derivatives, exp-log-derivatives]
big: An antiderivative runs the derivative backwards. Given a slope function f, it finds a function F whose derivative is f. There is always a whole family of answers, one for each constant you could add, so we write + C.
recap: F is an antiderivative of f if $F'(x) = f(x)$. All antiderivatives of f differ by a constant, so we write $\int f(x)\,dx = F(x) + C$. The power rule runs backwards: $\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + C$ for $n \neq -1$, and $\int \dfrac{1}{x}\,dx = \ln|x| + C$. Always check by differentiating.
check:
  q: What is $\int 2x\,dx$?
  options: ["$x^2 + C$", "$x^2$", "$2$"]
  answer: 0
  why: The derivative of $x^2$ is $2x$, so $x^2$ is one antiderivative. But so is $x^2 + 5$, or $x^2 - 1$, since a constant has derivative 0. "+ C" stands for all of them at once. Leaving it off gives only one member of the family. 2 is the derivative of $2x$, which goes the wrong way.
---

## Running the derivative backwards

The derivative turns a function into its slope. Often we know the slope and want the function back.

- A car's speedometer tells you its speed at every moment. Where is the car?
- You know how fast water flows into a tank. How much is in it?

Both ask: **which function has this derivative?** That function is called an **antiderivative**.

Try it. Which function has derivative $2x$? From the [[power-rule|power rule]], $x^2$ does. But so do these:

$$x^2 + 1 \qquad x^2 - 7 \qquad x^2 + 100$$

Adding a constant shifts the graph up or down. It does not change the slope anywhere.

:::widget antideriv-family

## The + C

Are there any others, apart from $x^2$ plus a constant? No. The [[mean-value-theorem|mean value theorem]] page showed that **two functions with the same derivative differ by a constant**. So once you have found one antiderivative F, every other one is $F(x) + C$ for some number C.

We write the whole family like this:

$$\int 2x\,dx = x^2 + C$$

Read it as "the antiderivative of 2x is x squared plus C". The long S, $\int$, is the **integral sign**. The $dx$ at the end says x is the variable. This is also called an **indefinite integral**. The integral sign will make more sense on the coming pages about area.^[n_integral_sign]

## The power rule, backwards

The power rule takes $x^n$ to $nx^{n-1}$: bring the power down, then lower it by 1. To undo it, do the opposite steps in reverse order: **raise the power by 1, then divide by the new power**.

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \qquad (n \neq -1)$$

**Check it.** The derivative of $\dfrac{x^{n+1}}{n+1}$ is $\dfrac{(n+1)x^n}{n+1} = x^n$. ✓

**Why not $n = -1$?** Then the new power would be 0, and we would divide by 0. But we already know a function whose derivative is $\dfrac{1}{x}$: the natural log. So:

$$\int \frac{1}{x}\,dx = \ln|x| + C$$

The bars allow negative x too.^[n_abs_log]

## A table to run backwards

Every derivative rule you know gives an antiderivative rule. Just read it right to left:

| derivative | so the antiderivative |
|---|---|
| $(x^{n+1})' = (n+1)x^n$ | $\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + C$ |
| $(\ln x)' = \dfrac{1}{x}$ | $\int \dfrac{1}{x}\,dx = \ln\lvert x\rvert + C$ |
| $(e^x)' = e^x$ | $\int e^x\,dx = e^x + C$ |
| $(\sin x)' = \cos x$ | $\int \cos x\,dx = \sin x + C$ |
| $(\cos x)' = -\sin x$ | $\int \sin x\,dx = -\cos x + C$ |
| $(\tan x)' = \dfrac{1}{\cos^2 x}$ | $\int \dfrac{1}{\cos^2 x}\,dx = \tan x + C$ |

**Watch the sign on sine.** The antiderivative of $\sin x$ is $-\cos x$, because the derivative of $\cos x$ has a minus sign.

**Sums and constant multiples** work just as for derivatives: take each piece separately, and keep the numbers in front. One + C at the end covers all the pieces.

**There is no product rule backwards.** Antiderivatives of products and quotients are much harder, and some cannot be written with ordinary functions at all. The u-substitution page handles one important kind.

## Pinning down C

Often you know one extra fact: a starting value. That fixes C.

**Example.** $f'(x) = 2x$ and $f(1) = 5$. Then $f(x) = x^2 + C$. Put in $x = 1$: $1 + C = 5$, so $C = 4$. The answer is $f(x) = x^2 + 4$, one particular curve from the family.

:::example
title: A ball is thrown up at 20 m/s from the ground. Its speed drops by 10 m/s every second. Find its height after t seconds.

1. Write what we know. The velocity v changes at $-10$ per second: $v'(t) = -10$. At the start, $v(0) = 20$ and the height is $h(0) = 0$.
   why: "Drops by 10 m/s every second" is a rate of change of velocity.
   uses: []

2. Antiderivative for velocity: $v(t) = -10t + C$.
   why: The derivative of $-10t$ is $-10$.
   uses: [power-rule]

3. Use the start: $v(0) = C = 20$. So $v(t) = 20 - 10t$.
   why: The starting speed fixes C.
   uses: []

4. Height has derivative v: $h(t) = \int (20 - 10t)\,dt = 20t - 5t^2 + D$.
   why: Raise each power by 1 and divide by the new power. A new constant, D, since this is a new antiderivative.
   uses: [sum-constant-rules]

5. Use the start: $h(0) = D = 0$. So $h(t) = 20t - 5t^2$.
   why: The ball starts on the ground.
   uses: []

6. Check by differentiating: $h'(t) = 20 - 10t = v(t)$. ✓ This is the same height formula as on the second derivatives page, now built from scratch.
   why: Differentiating should take you back to where you started.
   uses: []
:::

:::practice
q: Find $\int (6x^2 - 4x + 3)\,dx$.
answer: Piece by piece: $6 \cdot \dfrac{x^3}{3} - 4 \cdot \dfrac{x^2}{2} + 3x + C =$ **$2x^3 - 2x^2 + 3x + C$**. Check: the derivative is $6x^2 - 4x + 3$. ✓
:::

:::problems
q: Find $\int 3x^2\,dx$.
answer: **$x^3 + C$**.

q: Find $\int x^4\,dx$.
answer: **$\dfrac{x^5}{5} + C$**.

q: Find $\int (6x + 5)\,dx$.
answer: **$3x^2 + 5x + C$**.

q: Find $\int (x^3 - 4x + 2)\,dx$.
answer: **$\dfrac{x^4}{4} - 2x^2 + 2x + C$**.

q: Find $\int 7\,dx$.
answer: **$7x + C$**. The derivative of $7x$ is 7.

q: Find $\int \sqrt{x}\,dx$.
answer: $\sqrt{x} = x^{1/2}$. Raise the power to $\tfrac{3}{2}$ and divide by it: **$\dfrac{2}{3}x^{3/2} + C$**.

q: Find $\int \dfrac{1}{x^2}\,dx$.
answer: $x^{-2}$. Raise the power to $-1$ and divide by $-1$: **$-x^{-1} + C = -\dfrac{1}{x} + C$**.

q: Find $\int \dfrac{5}{x}\,dx$.
answer: **$5\ln|x| + C$**.

q: Find $\int 4e^x\,dx$.
answer: **$4e^x + C$**.

q: Find $\int (\cos x + 2\sin x)\,dx$.
answer: $\sin x + 2(-\cos x) + C =$ **$\sin x - 2\cos x + C$**.

q: Find $\int (x + 1)^2\,dx$. (Hint: expand first.)
answer: $(x + 1)^2 = x^2 + 2x + 1$, so the answer is **$\dfrac{x^3}{3} + x^2 + x + C$**.

q: $f'(x) = 2x$ and $f(1) = 5$. Find $f(x)$.
answer: $f(x) = x^2 + C$, and $1 + C = 5$, so **$f(x) = x^2 + 4$**.

q: $f'(x) = 3x^2 - 2$ and $f(0) = 1$. Find $f(x)$.
answer: $f(x) = x^3 - 2x + C$, and $f(0) = C = 1$. So **$f(x) = x^3 - 2x + 1$**.

q: $f'(x) = e^x$ and $f(0) = 3$. Find $f(x)$.
answer: $f(x) = e^x + C$, and $e^0 + C = 1 + C = 3$, so **$f(x) = e^x + 2$**.

q: A stone is thrown upward at 15 m/s from a 2 m high wall. Its speed drops by 10 m/s every second. Find its height after t seconds.
answer: $v(t) = 15 - 10t$. Then $h(t) = 15t - 5t^2 + D$, and $h(0) = 2$ gives $D = 2$. So **$h(t) = 2 + 15t - 5t^2$** metres.

q: A student writes $\int x^2\,dx = 2x$. What went wrong?
answer: **They took the derivative instead of the antiderivative.** The correct answer is $\dfrac{x^3}{3} + C$. Check: its derivative is $x^2$. And don't forget the + C.

q: Why does every antiderivative need a + C?
answer: **The derivative of any constant is 0.** So if F works, $F + 5$ and $F - 2$ work too. Without extra information, you cannot tell which one is meant, so + C stands for all of them.
:::
