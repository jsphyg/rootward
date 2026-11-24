---
id: lhopital
title: L'Hôpital's rule
prereqs: [power-rule, trig-derivatives, exp-log-derivatives]
big: When a limit comes out as 0 over 0, or infinity over infinity, you can replace the top and the bottom by their derivatives and try again. Near the point, the ratio of two functions behaves like the ratio of their slopes.
recap: If $f(x) \to 0$ and $g(x) \to 0$ as $x \to a$ (or both head to infinity), then $\displaystyle\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$, as long as the right side exists. Differentiate the top and the bottom separately. This is not the quotient rule. Use it only on 0 over 0 or infinity over infinity, and you may need it more than once.
check:
  q: Use L'Hôpital's rule to find $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
  options: ["4", "0", "2"]
  answer: 0
  why: Plugging in gives $\frac{0}{0}$, so the rule applies. Differentiate top and bottom separately: $\frac{2x}{1}$. At $x = 2$ that is 4. Factoring agrees: $\frac{(x - 2)(x + 2)}{x - 2} = x + 2 \to 4$. 0 is only the top's value. 2 is where x is heading, not the limit.
---

## The trouble with 0 over 0

Many important [[limits|limits]] come out as $\tfrac{0}{0}$ when you plug in. That answer tells you nothing: the true limit could be any number at all. Earlier pages had tricks for these. Factoring works for some, and the squeeze theorem handled $\dfrac{\sin x}{x}$. But each trick only fits certain problems.

L'Hôpital's rule (said "low-pee-tal") handles a huge range of them with one idea.^[n_lhopital_name]

## The idea: compare slopes

Suppose $f(a) = 0$ and $g(a) = 0$. Both curves pass through the point $(a, 0)$. Zoom in close, and each looks like a straight line through that point, with its slope:

- $f(x)$ is about $f'(a) \cdot (x - a)$
- $g(x)$ is about $g'(a) \cdot (x - a)$

Divide. The $(x - a)$ cancels:

$$\frac{f(x)}{g(x)} \approx \frac{f'(a)(x - a)}{g'(a)(x - a)} = \frac{f'(a)}{g'(a)}$$

The closer x gets to a, the better the straight-line picture fits. So the limit of the ratio is the ratio of the slopes.

:::widget plot
fn: Math.abs(x) < 0.0001 ? NaN : Math.sin(x)/x
x: -9 9
y: -0.5 1.4
holes: 0,1
labelat: topleft
label: y = (sin x) / x
caption: At x = 0 the formula gives 0 ÷ 0, so there is a hole. But the curve clearly heads to 1. The top and bottom both pass through 0 with slope 1, so their ratio heads to 1 ÷ 1.
:::

## The rule

If, as $x \to a$, **both** $f(x) \to 0$ and $g(x) \to 0$, then

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

as long as the limit on the right exists. The same is true when both head to infinity instead of 0, and when $x \to \infty$ instead of a number.^[n_lhopital_inf]

**Check it on a limit we already know.** $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$ is $\tfrac{0}{0}$. By factoring, it is $\lim (x + 1) = 2$. By L'Hôpital: $\dfrac{2x}{1} \to 2$. They agree.

## Three warnings

1. **Check the form first.** The rule is only for $\tfrac{0}{0}$ or $\tfrac{\infty}{\infty}$. Used on anything else, it gives wrong answers. $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2}$ is just $\tfrac{1}{2}$ by plugging in. "Applying the rule" anyway gives $\tfrac{1}{1} = 1$, which is wrong.
2. **Top and bottom separately.** Differentiate the top on its own and the bottom on its own. Do **not** use the quotient rule. You are not finding the derivative of the fraction.
3. **It may take more than one round.** If the new limit is still $\tfrac{0}{0}$, apply the rule again.

:::example
title: Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

1. Plug in: the top is $1 - 1 - 0 = 0$ and the bottom is 0. The form is $\tfrac{0}{0}$.
   why: Always check the form before using the rule.
   uses: [limits]

2. Differentiate top and bottom separately: $\dfrac{e^x - 1}{2x}$.
   why: The top's derivative is $e^x - 1$ and the bottom's is $2x$.
   uses: [exp-log-derivatives, power-rule]

3. Plug in again: $\dfrac{1 - 1}{0} = \dfrac{0}{0}$. Still stuck.
   why: One round was not enough.
   uses: []

4. Apply the rule again: $\dfrac{e^x}{2}$.
   why: The top's derivative is $e^x$ and the bottom's is 2.
   uses: [exp-log-derivatives]

5. Plug in: $\dfrac{e^0}{2} = \dfrac{1}{2}$. So the limit is $\tfrac{1}{2}$.
   why: No longer $\tfrac{0}{0}$, so we can stop.
   uses: []

6. Check with a small x. At $x = 0.01$: $\dfrac{e^{0.01} - 1.01}{0.0001} \approx \dfrac{0.0000502}{0.0001} \approx 0.502$. It agrees.
   why: A quick numerical check catches slips.
   uses: []
:::

:::practice
q: Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$.
answer: The form is $\tfrac{0}{0}$. Differentiate top and bottom: $\dfrac{e^x}{1} \to e^0 =$ **1**.
:::

:::problems
q: Find $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$ with L'Hôpital's rule. Check by factoring.
answer: $\tfrac{0}{0}$. $\dfrac{2x}{1} \to$ **6**. Factoring: $\dfrac{(x - 3)(x + 3)}{x - 3} = x + 3 \to 6$.

q: Find $\displaystyle\lim_{x \to 2} \frac{x^3 - 8}{x - 2}$.
answer: $\tfrac{0}{0}$. $\dfrac{3x^2}{1} \to 3 \cdot 4 =$ **12**.

q: Find $\displaystyle\lim_{x \to 1} \frac{\ln x}{x - 1}$.
answer: $\ln 1 = 0$, so $\tfrac{0}{0}$. $\dfrac{1/x}{1} \to$ **1**.

q: Find $\displaystyle\lim_{x \to 0} \frac{\tan x}{x}$.
answer: $\tfrac{0}{0}$. $\dfrac{1/\cos^2 x}{1} \to \dfrac{1}{1} =$ **1**.

q: Find $\displaystyle\lim_{x \to 0} \frac{2^x - 1}{x}$.
answer: $\tfrac{0}{0}$. $\dfrac{2^x \ln 2}{1} \to \ln 2 \approx$ **0.693**.

q: Find $\displaystyle\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$.
answer: $\tfrac{0}{0}$. The top's derivative is $\dfrac{1}{2\sqrt{x}}$, the bottom's is 1. At $x = 4$: **$\dfrac{1}{4}$**.

q: Find $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.
answer: $\tfrac{0}{0}$. Round 1: $\dfrac{\sin x}{2x}$, still $\tfrac{0}{0}$. Round 2: $\dfrac{\cos x}{2} \to$ **$\dfrac{1}{2}$**.

q: Find $\displaystyle\lim_{x \to 0} \frac{x - \sin x}{x^3}$.
answer: Round 1: $\dfrac{1 - \cos x}{3x^2}$, $\tfrac{0}{0}$. Round 2: $\dfrac{\sin x}{6x}$, $\tfrac{0}{0}$. Round 3: $\dfrac{\cos x}{6} \to$ **$\dfrac{1}{6}$**.

q: Find $\displaystyle\lim_{x \to \infty} \frac{\ln x}{x}$.
answer: Both head to infinity. $\dfrac{1/x}{1} = \dfrac{1}{x} \to$ **0**. The log grows far more slowly than x.

q: Find $\displaystyle\lim_{x \to \infty} \frac{x^2}{e^x}$.
answer: $\tfrac{\infty}{\infty}$. Round 1: $\dfrac{2x}{e^x}$, still $\tfrac{\infty}{\infty}$. Round 2: $\dfrac{2}{e^x} \to$ **0**. The exponential wins.

q: Find $\displaystyle\lim_{x \to \infty} \frac{3x^2 + 1}{5x^2 - x}$.
answer: $\tfrac{\infty}{\infty}$. Round 1: $\dfrac{6x}{10x - 1}$, still $\tfrac{\infty}{\infty}$. Round 2: $\dfrac{6}{10} =$ **$\dfrac{3}{5}$**. (Same as comparing the leading terms, $\tfrac{3x^2}{5x^2}$.)

q: A student finds $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2}$ by L'Hôpital's rule and gets 1. What went wrong?
answer: **The form is not $\tfrac{0}{0}$.** Plugging in gives $\tfrac{1}{2}$ directly, and that is the answer. The rule only applies to $\tfrac{0}{0}$ or $\tfrac{\infty}{\infty}$.

q: A student uses the quotient rule on $\dfrac{x^2 - 4}{x - 2}$ to apply L'Hôpital's rule. Why is that wrong?
answer: **L'Hôpital's rule differentiates the top and the bottom separately**: $\dfrac{2x}{1}$. The quotient rule finds the derivative of the whole fraction, which is a different thing and gives the wrong limit.

q: Why is using L'Hôpital's rule on $\dfrac{\sin x}{x}$ a little bit of a cheat?
answer: The rule needs the derivative of $\sin x$. But **that derivative was found using this very limit**, on the trig derivatives page. So using it to prove the limit goes in a circle. It is fine for getting the answer, but the squeeze theorem is the real proof.
:::
