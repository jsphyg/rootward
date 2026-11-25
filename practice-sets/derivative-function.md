:::problems
q: For $f(x) = x^2$, $f'(x) = 2x$. Find $f'(0)$ and $f'(5)$.
answer: $f'(0) = 2 \cdot 0 =$ **0**, so the curve is flat at the bottom of the U. $f'(5) = 2 \cdot 5 =$ **10**, steeply uphill.

q: A function has $f'(3) = -2$. What does that tell you about the graph of f at $x = 3$?
answer: At $x = 3$ the graph is **falling**, with slope $-2$: it drops 2 for every 1 step right, right there.

q: Find $f'(x)$ for $f(x) = 5x - 1$. Why does the answer have no x in it?
answer: **$f'(x) = 5$.** The graph is a straight line with slope 5, and a line has the same slope everywhere. So the slope does not depend on x.

q: Find $f'(x)$ for $f(x) = 7$.
answer: **$f'(x) = 0$.** The graph is a flat line, so its slope is 0 everywhere. By the definition: $\frac{7 - 7}{h} = 0$.

q: Use the limit definition to find $f'(x)$ for $f(x) = x^2 + x$.
answer: $f(x + h) - f(x) = (x^2 + 2xh + h^2 + x + h) - (x^2 + x) = 2xh + h^2 + h$. Divide by h: $2x + h + 1$. Let $h \to 0$: **$f'(x) = 2x + 1$**.

q: Use the limit definition to find $f'(x)$ for $f(x) = 4 - x^2$.
answer: $f(x + h) - f(x) = 4 - (x^2 + 2xh + h^2) - 4 + x^2 = -2xh - h^2$. Divide by h: $-2x - h$. Let $h \to 0$: **$f'(x) = -2x$**.

q: For $f(x) = x^2 - 4x$, $f'(x) = 2x - 4$. For which x is f rising?
answer: Rising means $f'(x) > 0$: $2x - 4 > 0$, so **$x > 2$**.

q: The graph of f has a peak at $x = 1$ and a valley at $x = 4$. What are $f'(1)$ and $f'(4)$?
answer: At a peak or a valley the curve is flat for an instant, so **$f'(1) = 0$ and $f'(4) = 0$**.

q: Use the limit definition to find $f'(x)$ for $f(x) = x^3$.
answer: $(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$. Take away $x^3$: $3x^2h + 3xh^2 + h^3$. Divide by h: $3x^2 + 3xh + h^2$. Let $h \to 0$: **$f'(x) = 3x^2$**.

q: For $f(x) = x^3$, where is the slope equal to 12?
answer: $f'(x) = 3x^2 = 12$, so $x^2 = 4$ and **$x = 2$ or $x = -2$**. The curve is equally steep at both, since $x^3$ is symmetric about the origin.

q: Explain why $f(x) = |x|$ has no derivative at $x = 0$.
answer: Left of 0, $|x| = -x$, a line with slope $-1$. Right of 0, $|x| = x$, with slope $+1$. At 0 the slopes from the two sides disagree, so **there is no single slope: no derivative** at the corner.

q: A dropped ball has fallen $s(t) = 5t^2$ metres after t seconds. Find $s'(t)$ and the ball's speed at $t = 3$.
answer: $s(t + h) - s(t) = 5(2th + h^2) = 10th + 5h^2$. Divide by h and let $h \to 0$: $s'(t) = 10t$. At $t = 3$: **30 metres per second**.

q: Use the limit definition to find $f'(x)$ for $f(x) = \dfrac{1}{x}$.
answer: $\frac{1}{x + h} - \frac{1}{x} = \frac{x - (x + h)}{x(x + h)} = \frac{-h}{x(x + h)}$. Divide by h: $\frac{-1}{x(x + h)}$. Let $h \to 0$: **$f'(x) = -\frac{1}{x^2}$**. Check at $x = 1$: the slope from 1 to 1.001 is $\frac{0.999 - 1}{0.001} \approx -1$, and $-\frac{1}{1^2} = -1$.
:::
