:::problems
q: Find $\displaystyle\lim_{x \to \infty} \frac{7}{x}$.
answer: A fixed number over a number growing without end shrinks to **0**. At $x = 7000$ it is already 0.001.

q: Find $\displaystyle\lim_{x \to \infty} \frac{1}{x^2}$.
answer: $x^2$ grows without end, so $\frac{1}{x^2}$ shrinks to **0**.

q: Find $\displaystyle\lim_{x \to \infty} \left(3 + \frac{2}{x}\right)$.
answer: $\frac{2}{x} \to 0$, so the sum heads to $3 + 0 =$ **3**.

q: Find $\displaystyle\lim_{x \to \infty} \frac{6x - 1}{2x + 5}$.
answer: Divide every term by x: $\frac{6 - \frac{1}{x}}{2 + \frac{5}{x}} \to \frac{6}{2} =$ **3**.

q: Find $\displaystyle\lim_{x \to \infty} \frac{x^2 + 4}{2x^2 - x}$.
answer: Divide by $x^2$: $\frac{1 + \frac{4}{x^2}}{2 - \frac{1}{x}} \to$ **$\frac{1}{2}$**.

q: Find $\displaystyle\lim_{x \to \infty} \frac{x + 1}{x^2 + 3}$.
answer: Divide by $x^2$: $\frac{\frac{1}{x} + \frac{1}{x^2}}{1 + \frac{3}{x^2}} \to \frac{0}{1} =$ **0**. The bottom has the higher power.

q: Find $\displaystyle\lim_{x \to \infty} \frac{5 - 3x^2}{x^2 + x}$.
answer: Divide by $x^2$: $\frac{\frac{5}{x^2} - 3}{1 + \frac{1}{x}} \to \frac{-3}{1} =$ **$-3$**.

q: Does $\displaystyle\lim_{x \to \infty} \frac{x^3}{x^2 + 1}$ exist?
answer: The top has the higher power. Dividing by $x^2$ gives $\frac{x}{1 + \frac{1}{x^2}}$, and the top x grows without end while the bottom heads to 1. **No limit: it grows without end.**

q: Find $\displaystyle\lim_{x \to -\infty} \frac{2x + 3}{5x - 1}$.
answer: Divide by x: $\frac{2 + \frac{3}{x}}{5 - \frac{1}{x}}$. As x falls without end, $\frac{3}{x}$ and $\frac{1}{x}$ still shrink to 0. So the limit is **$\frac{2}{5}$**.

q: Find $\displaystyle\lim_{x \to \infty} \left(\tfrac{1}{2}\right)^x$ and $\displaystyle\lim_{x \to \infty} 2^{-x}$.
answer: Both are the same function: $2^{-x} = \frac{1}{2^x} = \left(\frac{1}{2}\right)^x$. It halves at every step, so it heads to **0**.

q: What is the horizontal asymptote of $y = \dfrac{8x^2 - 3}{4x^2 + x}$?
answer: Same highest power on top and bottom, so the limit is the ratio of the numbers in front: $\frac{8}{4} = 2$. The asymptote is **$y = 2$**.

q: Find $\displaystyle\lim_{x \to \infty} \frac{\sqrt{x^2 + 1}}{x}$.
answer: For positive x, $x = \sqrt{x^2}$. So $\frac{\sqrt{x^2 + 1}}{\sqrt{x^2}} = \sqrt{\frac{x^2 + 1}{x^2}} = \sqrt{1 + \frac{1}{x^2}}$. As x grows this heads to $\sqrt{1} =$ **1**.

q: A cup of coffee cools so that its temperature after t minutes is $T(t) = 20 + 70 \cdot 0.9^t$ degrees. What temperature does it settle toward?
answer: $0.9^t$ is a shrinking exponential, so it heads to 0. Then $T(t) \to 20 + 70 \cdot 0 =$ **20 degrees**, the room temperature.
:::
