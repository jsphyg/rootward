---
id: trig-derivatives
title: Derivatives of trig functions
prereqs: [sum-constant-rules, trig-basics, squeeze-theorem]
big: The slope of the sine wave at any point is the cosine of that point. The slope of the cosine wave is minus the sine. Both only work when angles are in radians.
recap: $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$ and $(\tan x)' = \dfrac{1}{\cos^2 x}$, with x in radians. They rest on one limit, $\displaystyle\lim_{h \to 0} \frac{\sin h}{h} = 1$, which the squeeze theorem proves.
check:
  q: What is the derivative of $\cos x$?
  options: ["$-\sin x$", "$\sin x$", "$-\cos x$"]
  answer: 0
  why: The derivative of cosine is minus sine. Check at $x = \tfrac{\pi}{2}$: the cosine wave crosses 0 going down there, so its slope must be negative, and $-\sin\tfrac{\pi}{2} = -1$. Plain $\sin x$ forgets the minus sign, which would make the wave rise where it falls. $-\cos x$ is what you get from differentiating twice, not once.
---

## Reading slopes off the wave

Look at the sine wave and ask how steep it is at a few places.

- At $x = 0$ it is climbing steeply, at about the slope of a 45° line: slope 1.
- At $x = \tfrac{\pi}{2}$ it reaches its peak and is flat for an instant: slope 0.
- At $x = \pi$ it is falling as steeply as it ever does: slope $-1$.

Now compare those slopes with the cosine:

| $x$ | 0 | $\tfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|
| slope of $\sin x$ | 1 | 0 | $-1$ |
| $\cos x$ | 1 | 0 | $-1$ |

*Notice: the slopes of the sine wave are exactly the values of the cosine wave.*

:::widget sine-slope

That is the first rule on this page:

$$\frac{d}{dx}\sin x = \cos x$$

The rest of the page explains why, and finds the rules for cosine and tangent.

## The key limit: $\dfrac{\sin h}{h}$ heads to 1

At $x = 0$, the slope of sine is a [[derivative|derivative]] like any other. Since $\sin 0 = 0$:

$$\text{slope at } 0 = \lim_{h \to 0} \frac{\sin(0 + h) - \sin 0}{h} = \lim_{h \to 0} \frac{\sin h}{h}$$

Plug in 0 and you get $\tfrac{0}{0}$, which tells you nothing. So try small values of h, in radians:

| $h$ | 0.5 | 0.1 | 0.01 | 0.001 |
|---|---|---|---|---|
| $\sin h$ | 0.4794 | 0.09983 | 0.0099998 | 0.00099999983 |
| $\dfrac{\sin h}{h}$ | 0.9589 | 0.99833 | 0.999983 | 0.99999983 |

*Notice: for a small angle, $\sin h$ is almost the same as h. Their ratio creeps up to 1.*

A table only suggests a limit. The [[squeeze-theorem|squeeze theorem]] proves it. On the {{unit-circle|unit circle}}, take a small angle h and compare three shapes:

:::widget sin-squeeze

1. **The small triangle** has corners at the centre, at $(1, 0)$, and at the point $(\cos h, \sin h)$. Its base is 1 and its height is $\sin h$, so its area is $\tfrac{1}{2}\sin h$.
2. **The slice** of the circle between those two radii. The whole circle has area π and a full turn is $2\pi$ radians. So a slice of angle h is $\tfrac{h}{2\pi}$ of the circle, with area $\tfrac{h}{2\pi} \cdot \pi = \tfrac{1}{2}h$.
3. **The tall triangle** has its base along the x-axis from 0 to 1, and its tall side straight up at $x = 1$, reaching the line through the centre at angle h. Its height is opposite over adjacent with an adjacent side of 1, which is $\tan h$. So its area is $\tfrac{1}{2}\tan h$.

Each shape fits inside the next, so:

$$\tfrac{1}{2}\sin h \leq \tfrac{1}{2}h \leq \tfrac{1}{2}\tan h$$

Double everything, then divide each part by $\sin h$. For a small positive angle, $\sin h$ is positive, so the inequalities stay the right way round:

$$1 \leq \frac{h}{\sin h} \leq \frac{1}{\cos h}$$

Now turn every part upside down. Flipping positive numbers reverses the order (2 is bigger than 1, but $\tfrac{1}{2}$ is smaller than 1):

$$\cos h \leq \frac{\sin h}{h} \leq 1$$

As $h \to 0$, $\cos h \to \cos 0 = 1$, and the upper bound is already 1. Both bounds head to 1, so the squeeze gives:

$$\lim_{h \to 0} \frac{\sin h}{h} = 1$$

**Negative h works too.** Swapping h for $-h$ flips the sign of $\sin h$ and of h, so the ratio stays the same.

**Why radians matter here.** Step 2 used the fact that an angle in radians is a distance walked around the circle. In degrees, the slice would have a different area, and the limit would not be 1.

So the slope of sine at 0 is exactly 1.

## Why the slope of sine is cosine everywhere

Picture the point $(\cos x, \sin x)$ on the unit circle. Its height is $\sin x$. Now nudge the angle by a tiny amount h. The point slides a distance h along the circle.

Two facts about that tiny slide:

- **It is almost straight.** For a tiny angle, the curved arc and the straight line are nearly the same length. That is what $\dfrac{\sin h}{h} \to 1$ says.
- **It runs at right angles to the radius.** A circle's edge always crosses its radius at a right angle.

So the slide makes a tiny right triangle. Its long side is h, and it sits at right angles to the big triangle from the centre (long side 1, across $\cos x$, up $\sin x$). Turning a triangle a quarter turn swaps its "across" and "up" sides. So the tiny triangle has:

- up: $h \cos x$
- across: $-h \sin x$ (a step to the left, while $\sin x$ is positive)

The height, $\sin x$, rises by about $h\cos x$. Divide by the run h: the slope of sine is $\cos x$. The distance across, $\cos x$, changes by about $-h \sin x$. Divide by h: the slope of cosine is $-\sin x$.^[n_trig_proof]

$$\frac{d}{dx}\sin x = \cos x \qquad\qquad \frac{d}{dx}\cos x = -\sin x$$

**Check with numbers.** At $x = 1$, the slope of sine from a tiny step is $\dfrac{\sin 1.001 - \sin 1}{0.001} \approx 0.5399$, and $\cos 1 \approx 0.5403$. They agree to three places, and they get closer as the step shrinks.

**A sense check for the minus sign.** Just after $x = 0$, the point moves up and to the left. Its across value, $\cos x$, starts to fall. A falling curve has a negative slope, and $-\sin x$ is negative there.

## The tangent

Tangent is sine divided by cosine, so its derivative comes from these two:

$$\frac{d}{dx}\tan x = \frac{1}{\cos^2 x}$$

Proving it takes the quotient rule, a rule for dividing one function by another.^[n_tan_proof] For now, check it with numbers. At $x = \tfrac{\pi}{4}$, $\cos x = \tfrac{\sqrt{2}}{2}$, so $\cos^2 x = \tfrac{1}{2}$ and the formula gives 2. A tiny step gives $\dfrac{\tan(\tfrac{\pi}{4} + 0.001) - 1}{0.001} \approx 2.002$.

*Notice: $\cos^2 x$ is never negative, so the slope of tangent is always positive. The tangent graph rises everywhere it is defined.*

## Degrees spoil it

These rules need x in radians. In degrees, sine moves much more slowly per unit. From 0° to 1°, sine only rises from 0 to about 0.01745. That is $\tfrac{\pi}{180}$, so in degrees the rule would be $\tfrac{\pi}{180}\cos x$, with that clumsy number in every formula.^[n_radian_why] Calculus always uses radians for this reason.

## Combining with the other rules

The sum and constant-multiple rules work on trig functions just as on anything else. Take each piece in turn, keep the numbers in front, and keep the plus and minus signs.

:::example
title: Find the slope of $f(x) = 2\sin x + \cos x$ at $x = \tfrac{\pi}{3}$.

1. Differentiate each piece: $(2\sin x)' = 2\cos x$ and $(\cos x)' = -\sin x$.
   why: The constant 2 stays in front, and the rules for sine and cosine do the rest.
   uses: [sum-constant-rules]

2. Add the pieces: $f'(x) = 2\cos x - \sin x$.
   why: The derivative of a sum is the sum of the derivatives.
   uses: [sum-constant-rules]

3. Plug in $x = \tfrac{\pi}{3}$: $\cos\tfrac{\pi}{3} = \tfrac{1}{2}$ and $\sin\tfrac{\pi}{3} = \tfrac{\sqrt{3}}{2}$.
   why: $\tfrac{\pi}{3}$ is 60°, one of the exact values.
   uses: [trig-basics]

4. Work it out: $f'(\tfrac{\pi}{3}) = 2 \cdot \tfrac{1}{2} - \tfrac{\sqrt{3}}{2} = 1 - \tfrac{\sqrt{3}}{2} \approx 1 - 0.866 = 0.134$.
   why: Arithmetic.
   uses: []

5. Check with a tiny step: $\dfrac{f(\tfrac{\pi}{3} + 0.001) - f(\tfrac{\pi}{3})}{0.001} \approx 0.133$. It matches, give or take the size of the step.
   why: The rules should agree with the slope you measure.
   uses: [derivative]
:::

:::practice
q: Find the derivative of $\sin x - 4\cos x$, and its slope at $x = 0$.
answer: $(\sin x)' - 4(\cos x)' = \cos x - 4(-\sin x) =$ **$\cos x + 4\sin x$**. At $x = 0$: $\cos 0 + 4\sin 0 = 1 + 0 =$ **1**.
:::

:::problems
q: What is the slope of $y = \sin x$ at $x = 0$?
answer: $\cos 0 =$ **1**.

q: What is the slope of $y = \sin x$ at $x = \pi$? Is the wave rising or falling there?
answer: $\cos \pi =$ **$-1$**. The wave is **falling**, as steeply as it ever does.

q: What is the slope of $y = \cos x$ at $x = \tfrac{\pi}{2}$?
answer: $-\sin\tfrac{\pi}{2} =$ **$-1$**.

q: What is the slope of $y = \cos x$ at $x = \tfrac{\pi}{6}$?
answer: $-\sin\tfrac{\pi}{6} = -\tfrac{1}{2}$. So the slope is **$-\tfrac{1}{2}$**.

q: What is the slope of $y = \sin x$ at $x = \tfrac{\pi}{4}$?
answer: $\cos\tfrac{\pi}{4} =$ **$\tfrac{\sqrt{2}}{2} \approx 0.707$**.

q: Find the derivative of $5\sin x$.
answer: The 5 stays in front: **$5\cos x$**.

q: Find the derivative of $3\cos x - 2\sin x$.
answer: $3(-\sin x) - 2\cos x =$ **$-3\sin x - 2\cos x$**.

q: Find the derivative of $x + \sin x$. For which x between 0 and $2\pi$ is its slope 0?
answer: The derivative is **$1 + \cos x$**. It is 0 when $\cos x = -1$, which happens at **$x = \pi$**, the far left of the unit circle.

q: Find the derivative of $4\tan x$, and its slope at $x = 0$.
answer: $\dfrac{4}{\cos^2 x}$. At $x = 0$, $\cos 0 = 1$, so the slope is **4**.

q: What is the slope of $y = \tan x$ at $x = \tfrac{\pi}{3}$?
answer: $\cos\tfrac{\pi}{3} = \tfrac{1}{2}$, so $\cos^2\tfrac{\pi}{3} = \tfrac{1}{4}$. The slope is $\dfrac{1}{1/4} =$ **4**.

q: Between 0 and $2\pi$, where is the sine wave flat (slope 0)?
answer: Where $\cos x = 0$: **$x = \tfrac{\pi}{2}$** (the peak) and **$x = \tfrac{3\pi}{2}$** (the low point).

q: Between 0 and $2\pi$, where is the cosine wave rising?
answer: Where its slope $-\sin x$ is positive, so where $\sin x$ is negative. That is the bottom half of the unit circle: **$\pi < x < 2\pi$**.

q: Start with $\sin x$ and take the derivative four times in a row. What do you get each time?
answer: **$\cos x$, then $-\sin x$, then $-\cos x$, then $\sin x$.** After four steps you are back where you started.

q: A weight bobs on a spring. Its height is $3\sin t$ cm after t seconds. How fast is it moving at $t = 0$ and at $t = \pi$?
answer: The rate is $3\cos t$ cm per second. At $t = 0$: $3\cos 0 =$ **3 cm/s, upward**. At $t = \pi$: $3\cos\pi =$ **$-3$ cm/s, downward**.

q: Use a calculator in radian mode to find $\dfrac{\sin 0.2}{0.2}$. Is it close to 1?
answer: $\sin 0.2 \approx 0.19867$, so the ratio is about **0.9933**. Yes, close to 1, and smaller values of h get closer still.

q: The squeeze gave $\cos h \leq \dfrac{\sin h}{h} \leq 1$. At $h = 0.1$, between which two numbers must $\dfrac{\sin 0.1}{0.1}$ lie?
answer: $\cos 0.1 \approx 0.995$. So the ratio is **between about 0.995 and 1**. (It is about 0.9983.)

q: In degrees, sine rises from $\sin 0° = 0$ to $\sin 1° \approx 0.01745$. What is its slope per degree near 0°, and why does calculus avoid this?
answer: About **0.01745 per degree**, which is $\tfrac{\pi}{180}$. In degrees, every trig derivative would carry this extra factor. In radians it is exactly 1, so the rules stay clean.

q: Use $\sin^2 x + \cos^2 x = 1$ to show that $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$.
answer: Divide both sides of $\sin^2 x + \cos^2 x = 1$ by $\cos^2 x$: $\dfrac{\sin^2 x}{\cos^2 x} + 1 = \dfrac{1}{\cos^2 x}$. The first part is $\tan^2 x$, so **$1 + \tan^2 x = \dfrac{1}{\cos^2 x}$**. The slope of tangent can be written either way.
:::
