:::problems
q: Is $f(x) = x^3 - 5x$ continuous at $x = 2$? Check the three conditions.
answer: Value: $f(2) = 8 - 10 = -2$. It is a polynomial, so its limit at 2 is found by plugging in: $-2$. They match, so **yes, it is continuous at 2**.

q: Where is $f(x) = \dfrac{1}{x - 4}$ not continuous?
answer: At **$x = 4$**, where the bottom is 0. There is no value there, and the graph blows up.

q: Where is $f(x) = \dfrac{x + 1}{x^2 - 9}$ not continuous?
answer: Where the bottom is 0: $x^2 = 9$, so **$x = 3$ and $x = -3$**. It is continuous everywhere else.

q: Is $\sqrt{x - 2}$ continuous at $x = 6$? Where is it defined?
answer: Value: $\sqrt{6 - 2} = \sqrt{4} = 2$, and roots are continuous where defined, so the limit is also 2. **Yes.** It is defined for $x - 2 \geq 0$, that is **$x \geq 2$**.

q: Let $f(x) = \dfrac{x^2 - 9}{x - 3}$. Which continuity check fails at $x = 3$? How could you fix it?
answer: **Check 1 fails**: $f(3) = \frac{0}{0}$ has no value. The limit exists: $\frac{(x - 3)(x + 3)}{x - 3} = x + 3 \to 6$. So it is a removable hole. **Fix it by defining $f(3) = 6$.**

q: Let $g(x) = 2x$ for $x \neq 1$, and $g(1) = 5$. Is g continuous at 1? Which check fails?
answer: Value: $g(1) = 5$. Limit: $2x \to 2$. Both exist but they differ, so **check 3 fails** and g is **not continuous** at 1. Moving the point to $g(1) = 2$ would fix it.

q: Let $f(x) = x + 1$ for $x < 0$, and $f(x) = x^2$ for $x \geq 0$. Is f continuous at 0?
answer: Left side: $0 + 1 = 1$. Right side: $0^2 = 0$. They disagree, so there is no limit. **Check 2 fails: it is a jump, not continuous.**

q: Let $h(x) = x^2 + 1$ for $x < 1$, and $h(x) = 3x - 1$ for $x \geq 1$. Is h continuous at 1?
answer: Value: $h(1) = 3 - 1 = 2$. Left: $1 + 1 = 2$. Right: $3 - 1 = 2$. All three agree, so **yes, h is continuous at 1**.

q: Let $f(x) = x + k$ for $x < 2$, and $f(x) = kx$ for $x \geq 2$. Find k so that f is continuous at 2.
answer: Value and right side: $2k$. Left side: $2 + k$. Set them equal: $2 + k = 2k$, so **$k = 2$**. Check: both sides give 4.

q: Show that $x^3 - 3x + 1 = 0$ has a solution between $x = 0$ and $x = 1$.
answer: Let $f(x) = x^3 - 3x + 1$, a polynomial, so it is continuous. $f(0) = 1$, which is above 0. $f(1) = 1 - 3 + 1 = -1$, which is below 0. By the intermediate value theorem, **f must equal 0 somewhere between 0 and 1**.

q: $\dfrac{1}{x}$ gives $-1$ at $x = -1$ and $1$ at $x = 1$, yet it never equals 0. Why doesn't this break the intermediate value theorem?
answer: The theorem only applies to a function that is **continuous on the whole stretch**. $\frac{1}{x}$ is not continuous at $x = 0$, which lies between $-1$ and 1. It jumps across 0 by blowing up instead of passing through it.

q: Let $f(x) = ax + 1$ for $x < 1$, $f(x) = 3$ at $x = 1$, and $f(x) = x^2 + b$ for $x > 1$. Find a and b so that f is continuous at 1.
answer: Both sides must head to the value 3. Left: $a + 1 = 3$, so **$a = 2$**. Right: $1 + b = 3$, so **$b = 2$**.
:::
