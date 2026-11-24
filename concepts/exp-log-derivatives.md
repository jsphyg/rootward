---
id: exp-log-derivatives
title: Derivatives of exponentials and logs
prereqs: [sum-constant-rules, logarithms]
big: The function $e^x$ is its own derivative. Its slope at every point equals its height. The natural log has the simplest slope of all, $\frac{1}{x}$.
recap: $(e^x)' = e^x$ and $(\ln x)' = \dfrac{1}{x}$. For any other base, $(b^x)' = b^x \ln b$ and $(\log_b x)' = \dfrac{1}{x \ln b}$. The extra $\ln b$ is why calculus prefers base e, where $\ln e = 1$.
check:
  q: What is the slope of $y = \ln x$ at $x = 5$?
  options: ["$\tfrac{1}{5}$", "$\ln 5$", "5", "$e^5$"]
  answer: 0
  why: The derivative of $\ln x$ is $\tfrac{1}{x}$, so at $x = 5$ the slope is $\tfrac{1}{5}$. $\ln 5$ is the height of the curve there, not its slope. 5 and $e^5$ come from mixing up $\ln x$ with $e^x$, whose slope equals its height.
---

## Growth that feeds itself

An {{exponential|exponential function}} grows by the same factor at every step. So the bigger it gets, the faster it grows. That suggests its slope is tied to its height. Test this on $2^x$ with tiny steps of $h = 0.001$:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| height $2^x$ | 1 | 2 | 4 | 8 |
| slope (about) | 0.693 | 1.387 | 2.774 | 5.547 |
| slope ÷ height | 0.693 | 0.693 | 0.693 | 0.693 |

*Notice: the slope is always the height times the same number, about 0.693.*

**Why it works.** Write out the slope of $b^x$ as a [[derivative|derivative]]. Then split $b^{x+h}$ into $b^x \cdot b^h$:

$$\frac{b^{x+h} - b^x}{h} = \frac{b^x \cdot b^h - b^x}{h} = b^x \cdot \frac{b^h - 1}{h}$$

The first part is the height. The second part does not involve x at all. So as $h \to 0$, the slope is the height times a fixed number. That number is the limit of $\dfrac{b^h - 1}{h}$, and it depends only on the base b.

## The base that makes the number 1

Work out that fixed number for a few bases:

| $h$ | 0.1 | 0.01 | 0.001 |
|---|---|---|---|
| base 2: $\dfrac{2^h - 1}{h}$ | 0.718 | 0.696 | 0.693 |
| base 3: $\dfrac{3^h - 1}{h}$ | 1.161 | 1.105 | 1.099 |
| base e: $\dfrac{e^h - 1}{h}$ | 1.052 | 1.005 | 1.0005 |

*Notice: for base 2 the number is a bit under 1. For base 3 it is a bit over. Somewhere between them is a base where it is exactly 1. That base is e, about 2.718.*^[n_e_slope]

:::widget exp-slope

For base e, the slope is the height times 1. So:

$$\frac{d}{dx} e^x = e^x$$

**The slope of $e^x$ at every point equals its height.** At $x = 0$ the height is 1 and so is the slope. At $x = 2$ the height is about 7.39, and the curve climbs at 7.39 units up for each unit across. No other function (apart from multiples of it, like $5e^x$) does this.

## Any other base

The fixed number for base 2 was about 0.693. For base 3 it was about 1.099. Look up $\ln 2 \approx 0.6931$ and $\ln 3 \approx 1.0986$. They match. For any base, the fixed number is $\ln b$:

$$\frac{d}{dx} b^x = b^x \ln b$$

**Why it is $\ln b$.** Since $\ln b$ is the power you put on e to get b, we can write $b = e^{\ln b}$. Then $b^h = e^{h \ln b}$. Call $u = h\ln b$, so $h = \dfrac{u}{\ln b}$:

$$\frac{b^h - 1}{h} = \frac{e^u - 1}{u} \cdot \ln b$$

As $h \to 0$, u also heads to 0, and $\dfrac{e^u - 1}{u}$ heads to 1. That leaves $\ln b$.

**Decay too.** If b is between 0 and 1, then $\ln b$ is negative. So the slope is negative: the curve falls, as a decaying amount should.

## The slope of the natural log

$\ln x$ is the [[inverse-functions|inverse]] of $e^x$. Its graph is the graph of $e^x$, mirrored across the line $y = x$.

Mirroring across $y = x$ swaps across and up. So it swaps rise and run, and turns a slope m into a slope $\dfrac{1}{m}$.

- On $y = e^x$, at the point $(a, e^a)$, the slope is $e^a$.
- The mirror point on $y = \ln x$ is $(e^a, a)$. Its slope is $\dfrac{1}{e^a}$.
- At that point, x is $e^a$. So the slope is $\dfrac{1}{x}$.

$$\frac{d}{dx} \ln x = \frac{1}{x}$$

This only makes sense for $x > 0$, since $\ln x$ only exists there.

**Check with numbers.** At $x = 2$: $\dfrac{\ln 2.001 - \ln 2}{0.001} \approx 0.49988$. The rule gives $\tfrac{1}{2}$.

*Notice: the log climbs ever more slowly. At $x = 100$ its slope is only 0.01. It keeps rising forever, but more and more gently.*

## Logs with other bases

A log in any base is a natural log divided by a fixed number:

$$\log_b x = \frac{\ln x}{\ln b}$$

**Why.** Call $y = \log_b x$, so $b^y = x$. Take the natural log of both sides: $\ln(b^y) = \ln x$. A power inside comes down in front, so $y \ln b = \ln x$. Divide by $\ln b$.

So $\log_b x$ is $\dfrac{1}{\ln b}$ times $\ln x$, and the constant stays in front:

$$\frac{d}{dx} \log_b x = \frac{1}{x \ln b}$$

## Combining with the other rules

The sum and constant-multiple rules work here as everywhere. The {{log|log}} rules help too. They can turn a hard-looking log into easy pieces before you take the derivative.

:::example
title: Find the slope of $f(x) = 3e^x - 2\ln x$ at $x = 1$.

1. Differentiate each piece: $(3e^x)' = 3e^x$ and $(2\ln x)' = \dfrac{2}{x}$.
   why: Constants stay in front, and the rules for $e^x$ and $\ln x$ do the rest.
   uses: [sum-constant-rules]

2. Combine: $f'(x) = 3e^x - \dfrac{2}{x}$.
   why: The derivative of a difference is the difference of the derivatives.
   uses: [sum-constant-rules]

3. Plug in $x = 1$: $f'(1) = 3e - 2 \approx 3(2.718) - 2 = 6.155$.
   why: $e^1 = e$.
   uses: []

4. Check with a tiny step: $\dfrac{f(1.001) - f(1)}{0.001} \approx 6.160$. It matches, give or take the size of the step.
   why: The rules should agree with the slope you measure.
   uses: [derivative]
:::

:::practice
q: Find the derivative of $\ln(x^4)$. (Hint: use a log rule first.)
answer: $\ln(x^4) = 4\ln x$, because a power inside comes down in front. So the derivative is $4 \cdot \dfrac{1}{x} =$ **$\dfrac{4}{x}$**.
:::

:::problems
q: Find the derivative of $4e^x$.
answer: **$4e^x$**. The 4 stays in front, and $e^x$ is its own derivative.

q: What is the slope of $y = e^x$ at $x = 0$? At $x = \ln 5$?
answer: The slope equals the height. At $x = 0$: $e^0 =$ **1**. At $x = \ln 5$: $e^{\ln 5} =$ **5**.

q: What is the slope of $y = \ln x$ at $x = 4$? At $x = \tfrac{1}{2}$?
answer: The slope is $\tfrac{1}{x}$. At $x = 4$: **$\tfrac{1}{4}$**. At $x = \tfrac{1}{2}$: **2**.

q: Find the derivative of $e^x - 3\ln x$.
answer: **$e^x - \dfrac{3}{x}$**.

q: Find the derivative of $2^x$, and its slope at $x = 3$.
answer: $(2^x)' = 2^x \ln 2$. At $x = 3$: $8\ln 2 \approx$ **5.545**. (The table at the top of the page measured about 5.547 with a small step.)

q: Find the slope of $10^x$ at $x = 0$.
answer: $(10^x)' = 10^x \ln 10$. At $x = 0$: $1 \cdot \ln 10 \approx$ **2.303**.

q: Find the derivative of $(0.5)^x$. Is the curve rising or falling?
answer: $(0.5)^x \ln 0.5 \approx$ **$-0.693 \cdot (0.5)^x$**. The slope is always negative, so the curve is **falling**: it halves with every step.

q: Find the slope of $\log_2 x$ at $x = 1$.
answer: $\dfrac{1}{x \ln 2}$ at $x = 1$ is $\dfrac{1}{\ln 2} \approx$ **1.443**.

q: Find the slope of $\log_{10} x$ at $x = 10$.
answer: $\dfrac{1}{10 \ln 10} \approx \dfrac{1}{23.03} \approx$ **0.0434**.

q: Find the derivative of $\ln(x^3)$.
answer: $\ln(x^3) = 3\ln x$, so the derivative is **$\dfrac{3}{x}$**.

q: Find the derivative of $\ln(5x)$. Why is it the same as the derivative of $\ln x$?
answer: $\ln(5x) = \ln 5 + \ln x$. $\ln 5$ is a constant, with slope 0. So the derivative is **$\dfrac{1}{x}$**. The graph of $\ln(5x)$ is the graph of $\ln x$ shifted up by $\ln 5$, and shifting up does not change any slope.

q: Find the derivative of $\ln\sqrt{x}$.
answer: $\ln\sqrt{x} = \ln(x^{1/2}) = \tfrac{1}{2}\ln x$. So the derivative is **$\dfrac{1}{2x}$**.

q: Find the derivative of $e^{x+2}$. (Hint: split it with an exponent rule.)
answer: $e^{x+2} = e^2 \cdot e^x$, and $e^2$ is a constant. So the derivative is $e^2 \cdot e^x =$ **$e^{x+2}$**.

q: Find the derivative of $e^{2x}$. (Hint: write it as $(e^2)^x$.)
answer: Its base is $e^2$, so its derivative is $(e^2)^x \ln(e^2) = e^{2x} \cdot 2 =$ **$2e^{2x}$**. It grows twice as fast as its own height.

q: Where is the slope of $e^x - x$ equal to 0?
answer: The derivative is $e^x - 1$. It is 0 when $e^x = 1$, which is at **$x = 0$**.

q: Where does $y = \ln x$ have a slope of $\tfrac{1}{3}$?
answer: $\tfrac{1}{x} = \tfrac{1}{3}$ at **$x = 3$**.

q: 1,000 dollars grows 5% a year, so after t years it is $1000 \cdot 1.05^t$ dollars. How fast is it growing at $t = 0$, and at $t = 10$?
answer: The rate is $1000 \cdot 1.05^t \ln 1.05$ dollars per year, and $\ln 1.05 \approx 0.0488$. At $t = 0$: about **48.79 dollars a year**. At $t = 10$: $1.05^{10} \approx 1.629$, so about **79.47 dollars a year**. The bigger the pot, the faster it grows.

q: Is $5e^x$ also equal to its own derivative?
answer: **Yes.** The derivative is $5e^x$, the same function. Any number times $e^x$ has this property.
:::
