:::problems
q: For x near 0, $3 - x^2 \leq f(x) \leq 3 + x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$.
answer: Both bounds head to $3 - 0 = 3$ and $3 + 0 = 3$. Squeeze: **3**.

q: For x near 0, $-x^2 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$.
answer: Both bounds head to 0. Squeeze: **0**.

q: For x near 0, $1 \leq f(x) \leq 3$. Can the squeeze theorem find $\displaystyle\lim_{x \to 0} f(x)$?
answer: **No.** The bounds head to 1 and 3, which are different. f could head to anything from 1 to 3, or wobble with no limit at all.

q: For x near 1, $2x - 1 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 1} f(x)$, and check the bounds are in the right order.
answer: Lower: $2 - 1 = 1$. Upper: $1^2 = 1$. Squeeze: **1**. Order check: $x^2 - (2x - 1) = (x - 1)^2 \geq 0$, so the lower bound is never above the upper one.

q: For x near 3, $6x - 9 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 3} f(x)$.
answer: Lower: $18 - 9 = 9$. Upper: $3^2 = 9$. Squeeze: **9**. (The order holds because $x^2 - 6x + 9 = (x - 3)^2 \geq 0$.)

q: $w(x)$ always stays between $-1$ and 1. Find $\displaystyle\lim_{x \to 0} x^2 \, w(x)$.
answer: Multiply $-1 \leq w(x) \leq 1$ by $x^2 \geq 0$: $-x^2 \leq x^2 w(x) \leq x^2$. Both bounds head to 0, so the limit is **0**.

q: $w(x)$ always stays between $-2$ and 2. Find $\displaystyle\lim_{x \to 0} x^4 \, w(x)$.
answer: Multiply by $x^4 \geq 0$: $-2x^4 \leq x^4 w(x) \leq 2x^4$. Both bounds head to 0, so the limit is **0**.

q: Why can't the product law be used on $x^2 \, w(x)$ when w has no limit at 0?
answer: The product law says "if **both** pieces have limits, the product heads to the product of the limits". Here $w(x)$ has no limit, so the law's condition fails. The squeeze is needed instead.

q: For x near 0, $0 \leq f(x) \leq x^2$. Find $\displaystyle\lim_{x \to 0} f(x)$ and $\displaystyle\lim_{x \to 0} \big(f(x) + 5\big)$.
answer: Bounds: 0 and $x^2 \to 0$, so $f(x) \to$ **0**. Then by the sum law, $f(x) + 5 \to 0 + 5 =$ **5**.

q: $w(x)$ always stays between $-1$ and 1. Find $\displaystyle\lim_{x \to \infty} \frac{w(x)}{x}$.
answer: For positive x, divide $-1 \leq w(x) \leq 1$ by x: $-\frac{1}{x} \leq \frac{w(x)}{x} \leq \frac{1}{x}$. As x grows without end, both bounds shrink to 0. Squeeze: **0**.

q: A function w stays between $-1$ and 1. Does $\displaystyle\lim_{x \to 0} \big(x + 2\big) w(x)$ have to exist?
answer: **No.** Near 0, $x + 2$ is close to 2, not 0. The bounds $-(x + 2)$ and $x + 2$ head to $-2$ and 2, which differ. If w keeps jumping between $-1$ and 1, the product keeps jumping between about $-2$ and 2, with no limit.
:::
