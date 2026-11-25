:::problems
q: As $x \to a$, $f(x) \to 4$ and $g(x) \to -2$. Find $\displaystyle\lim_{x \to a} \big(f(x) + g(x)\big)$.
answer: Sum law: $4 + (-2) =$ **2**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} 3f(x)$.
answer: Constant multiple law: $3 \cdot 4 =$ **12**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} f(x)\,g(x)$.
answer: Product law: $4 \cdot (-2) =$ **$-8$**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$.
answer: The bottom heads to $-2$, which is not 0, so the quotient law applies: $\frac{4}{-2} =$ **$-2$**.

q: Same f and g. Find $\displaystyle\lim_{x \to a} \big(f(x)^2 - g(x)\big)$.
answer: Power law: $f(x)^2 \to 4^2 = 16$. Difference law: $16 - (-2) = 16 + 2 =$ **18**.

q: Find $\displaystyle\lim_{x \to 3} (x^2 - 2x + 5)$.
answer: A polynomial, so plug in: $9 - 6 + 5 =$ **8**.

q: Find $\displaystyle\lim_{x \to -2} (x^3 + 4x)$.
answer: Plug in: $(-2)^3 + 4(-2) = -8 - 8 =$ **$-16$**.

q: Find $\displaystyle\lim_{x \to 1} \frac{3x + 1}{x + 1}$.
answer: The bottom heads to 2, not 0. So plug in: $\frac{3 + 1}{1 + 1} = \frac{4}{2} =$ **2**.

q: Find $\displaystyle\lim_{x \to 4} \sqrt{x}\,(x - 1)$.
answer: Root law: $\sqrt{x} \to \sqrt{4} = 2$. And $x - 1 \to 3$. Product law: $2 \cdot 3 =$ **6**.

q: As $x \to a$, $f(x) \to 5$ and $f(x) + g(x) \to 9$. What does $g(x)$ head to?
answer: Write $g(x) = \big(f(x) + g(x)\big) - f(x)$. Difference law: $9 - 5 =$ **4**.

q: Why can't the quotient law be used for $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$? Find the limit another way.
answer: The bottom heads to $2 - 2 = 0$, and the quotient law needs a bottom limit that is not 0. Factor instead: $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \neq 2$. That heads to **4**.

q: Find $\displaystyle\lim_{x \to 3} \frac{x + 1}{x - 3}$, or explain why it does not exist.
answer: The bottom heads to 0, but the top heads to 4, not 0. So this is not a $0 \div 0$ case that algebra can fix. Near 3 the fraction is 4 divided by a tiny number, so it blows up: about $\frac{4}{0.01} = 400$ just right of 3, and $\frac{4}{-0.01} = -400$ just left. **The limit does not exist.**

q: As $x \to 1$, $f(x) \to 2$. Find $\displaystyle\lim_{x \to 1} \frac{f(x)^2 + 3f(x)}{f(x) + 3}$.
answer: Top: $2^2 + 3 \cdot 2 = 4 + 6 = 10$. Bottom: $2 + 3 = 5$, not 0. Quotient law: $\frac{10}{5} =$ **2**.
:::
