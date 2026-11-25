:::problems
q: Let $f(x) = 2x$ for $x < 4$, and $f(x) = x + 5$ for $x \geq 4$. Find $\displaystyle\lim_{x \to 4^-} f(x)$.
answer: From the left, $x < 4$, so use $2x$. It heads to $2 \cdot 4 =$ **8**.

q: For the same f, find $\displaystyle\lim_{x \to 4^+} f(x)$ and $f(4)$. Does $\displaystyle\lim_{x \to 4} f(x)$ exist?
answer: From the right, use $x + 5$, which heads to $4 + 5 = 9$. Also $f(4) = 9$, because $x = 4$ uses the second rule. The left limit is 8 and the right limit is 9. They disagree, so **the limit at 4 does not exist**.

q: What does $x \to 5^-$ mean? Give three inputs that fit it.
answer: x approaches 5 from the left, staying **below** 5. For example 4.9, 4.99, 4.999. The minus does not mean the inputs are negative.

q: Let $f(x) = x^2$ for $x < -1$, and $f(x) = 3x + 4$ for $x \geq -1$. Find both one-sided limits at $-1$. Does the limit exist?
answer: Left: $(-1)^2 = 1$. Right: $3(-1) + 4 = -3 + 4 = 1$. Both are 1, so **$\displaystyle\lim_{x \to -1} f(x) = 1$**.

q: A function has $f(x) = 1$ for every $x \neq 0$, and $f(0) = 7$. Find $\displaystyle\lim_{x \to 0^-} f(x)$, $\displaystyle\lim_{x \to 0^+} f(x)$, and $\displaystyle\lim_{x \to 0} f(x)$.
answer: On both sides, every input near 0 (but not 0) gives 1. So **all three limits are 1**. The value $f(0) = 7$ does not matter, because limits never look at the point itself.

q: Find $\displaystyle\lim_{x \to 0^+} \sqrt{x}$. Why is there no left-hand limit at 0?
answer: As x shrinks toward 0 from above, $\sqrt{x}$ shrinks toward **0**. For example $\sqrt{0.0001} = 0.01$. There is no left-hand limit because $\sqrt{x}$ has no real output for negative x, so there are no inputs on the left to look at.

q: Describe $\displaystyle\lim_{x \to 0^+} \frac{1}{x}$ and $\displaystyle\lim_{x \to 0^-} \frac{1}{x}$.
answer: From the right: $\frac{1}{0.01} = 100$, $\frac{1}{0.001} = 1000$. The outputs grow without end: **$+\infty$**. From the left: $\frac{1}{-0.01} = -100$, $\frac{1}{-0.001} = -1000$. They fall without end: **$-\infty$**. Neither is a real number, so neither limit exists as a number.

q: Describe $\displaystyle\lim_{x \to 3^-} \frac{1}{x - 3}$ and $\displaystyle\lim_{x \to 3^+} \frac{1}{x - 3}$.
answer: From the left, $x - 3$ is a tiny **negative** number. At $x = 2.99$: $\frac{1}{-0.01} = -100$. So the left limit is **$-\infty$**. From the right, $x - 3$ is tiny and positive. At $x = 3.01$: $\frac{1}{0.01} = 100$. So the right limit is **$+\infty$**.

q: Rounding down to a whole number is written $\lfloor x \rfloor$. So $\lfloor 2.7 \rfloor = 2$ and $\lfloor 3 \rfloor = 3$. Find $\displaystyle\lim_{x \to 3^-} \lfloor x \rfloor$ and $\displaystyle\lim_{x \to 3^+} \lfloor x \rfloor$.
answer: Just below 3, inputs like 2.99 round down to 2, so the left limit is **2**. Just above 3, inputs like 3.01 round down to 3, so the right limit is **3**. The graph is a staircase that jumps at every whole number.

q: A letter costs 1 dollar to post if it weighs up to 1 ounce, and 1.50 dollars if it weighs more than 1 ounce, up to 2 ounces. Let $C(w)$ be the cost for weight w. Find the one-sided limits of C at $w = 1$.
answer: Just under 1 ounce, the cost is 1 dollar, so $\displaystyle\lim_{w \to 1^-} C(w) =$ **1**. Just over 1 ounce, it is 1.50 dollars, so $\displaystyle\lim_{w \to 1^+} C(w) =$ **1.50**. The cost jumps, so there is no two-sided limit at 1.

q: Find $\displaystyle\lim_{x \to 1^-} \frac{x^2 - 1}{x - 1}$ and $\displaystyle\lim_{x \to 1^+} \frac{x^2 - 1}{x - 1}$.
answer: Factor: $\frac{(x - 1)(x + 1)}{x - 1} = x + 1$ for $x \neq 1$. This holds on both sides, so both one-sided limits are $1 + 1 =$ **2**. A hole, unlike a jump, has matching one-sided limits.

q: Let $f(x) = x + k$ for $x < 2$, and $f(x) = x^2$ for $x \geq 2$. Find the number k that makes $\displaystyle\lim_{x \to 2} f(x)$ exist.
answer: Left limit: $2 + k$. Right limit: $2^2 = 4$. For the limit to exist they must be equal: $2 + k = 4$, so **$k = 2$**. Check: with $k = 2$, both sides head to 4.
:::
