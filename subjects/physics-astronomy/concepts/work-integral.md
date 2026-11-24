---
id: work-integral
title: (calc) Work done by a changing force
prereqs: [work, calculus:definite-integral]
big: When a force changes as an object moves, the work it does is the area under the force-position graph, which is the integral of the force over the distance.
recap: For a force that changes with position, $W = \displaystyle\int_a^b F(x)\,dx$, the area under the graph of F against x from a to b. A steady force gives back $W = Fd$. A spring, $F = kx$, gives $W = \tfrac{1}{2}kx^2$ from 0 to x, and $\tfrac{1}{2}k(x_2^2 - x_1^2)$ between two stretches.
check:
  q: A force $F = 3x^2$ newtons pushes an object from x = 0 to x = 2 m. How much work does it do?
  options: ["8 J", "24 J", "12 J"]
  answer: 0
  why: $W = \displaystyle\int_0^2 3x^2\,dx = \big[x^3\big]_0^2 = 8 - 0 = 8$ J. 24 J uses the final force, 12 N, over the whole 2 m, as if it were steady. 12 J treats the graph as a straight line and takes the triangle's area, but $3x^2$ curves.
---

## When Fd stops working

$W = Fd$ needs a steady force. Many forces change as things move: a spring pulls harder the more it stretches, and gravity weakens with distance from a planet. What then?

Cut the motion into many tiny steps. Over each tiny step, the force hardly changes, so the work is about $F \times \text{(small step)}$. Add up all the steps. That is exactly what a [[calculus:definite-integral|definite integral]] does:

$$W = \int_a^b F(x)\,dx$$

## The area under the graph

On a graph of force against position, each small piece $F \times \text{step}$ is a thin strip of area. So the work is **the area under the force graph**.

| Force | Graph shape | Work from area |
|---|---|---|
| steady 10 N over 5 m | flat line | rectangle: $10 \times 5 = 50$ J |
| spring, rising to 20 N over 0.1 m | straight line from 0 | triangle: $\tfrac{1}{2} \times 0.1 \times 20 = 1$ J |
| $F = 3x^2$ from 0 to 2 m | curve | needs an integral: 8 J |

*Notice: rectangles and triangles you can do by hand. Curves need calculus.*

:::widget plot
fn: x >= 0 ? 3*x*x : NaN
x: -0.3 2.6
y: -1.5 16
points: 2,12
xname: x (m)
yname: F (N)
label: F = 3x²
labelat: topleft
caption: The area under this curve from 0 to 2 is 8 J. It is less than the 12 J triangle, because the curve sags below the straight line.
:::

## The spring, again

For a spring, $F = kx$. Stretching it from 0 to x:

$$W = \int_0^x kx\,dx = \Big[\tfrac{1}{2}kx^2\Big]_0^x = \tfrac{1}{2}kx^2$$

That is the [[spring-energy|spring energy]] formula, now found by calculus. Between two stretches $x_1$ and $x_2$, it is $\tfrac{1}{2}k(x_2^2 - x_1^2)$, **not** $\tfrac{1}{2}k(x_2 - x_1)^2$. The further stretch is harder, because the spring is already pulling hard.

:::example
title: A spring with $k = 200$ N/m is already stretched 0.1 m. How much work does it take to stretch it further, to 0.3 m?

1. Set up the integral: $W = \displaystyle\int_{0.1}^{0.3} 200x\,dx$.
   why: The force at each point is $kx$, and the work is its integral over the distance moved.
   uses: [calculus:definite-integral]

2. Antiderivative: $100x^2$.
   why: The antiderivative of $200x$ is $200 \times \tfrac{x^2}{2}$.
   uses: [calculus:definite-integral]

3. Evaluate: $100 \times 0.3^2 - 100 \times 0.1^2 = 9 - 1 = 8$ J.
   why: Top limit minus bottom limit.
   uses: []

4. **8 J.** Using $\tfrac{1}{2}k(0.2)^2$ would give only 4 J, half the true answer, because it pretends the spring starts slack.
   why: Checking against the tempting wrong method shows why the limits matter.
   uses: [work]
:::

:::practice
q: A force $F = 4x$ newtons acts from x = 0 to x = 3 m. Find the work.
answer: $\displaystyle\int_0^3 4x\,dx = \big[2x^2\big]_0^3 =$ **18 J**.
:::

:::problems
q: $F = 6x$ from x = 0 to 2 m. Find the work.
answer: $\big[3x^2\big]_0^2 =$ **12 J**.

q: A steady force F = 10 N acts from x = 0 to 5 m. Find the work with an integral, and check it.
answer: $\big[10x\big]_0^5 =$ **50 J**, the same as $Fd$.

q: $F = 2x + 1$ from x = 0 to 3 m. Find the work.
answer: $\big[x^2 + x\big]_0^3 = 9 + 3 =$ **12 J**.

q: $F = 3x^2$ from x = 1 to 2 m. Find the work.
answer: $\big[x^3\big]_1^2 = 8 - 1 =$ **7 J**.

q: A spring with $k = 500$ N/m is stretched from 0 to 0.2 m. Find the work.
answer: $\tfrac{1}{2} \times 500 \times 0.04 =$ **10 J**.

q: The same spring is stretched from 0.2 m to 0.4 m. Find the work.
answer: $\tfrac{1}{2} \times 500 \times (0.16 - 0.04) =$ **30 J**, three times as much as the first 0.2 m.

q: A force $F = \dfrac{12}{x^2}$ newtons acts from x = 1 to 3 m. Find the work.
answer: $\displaystyle\int_1^3 12x^{-2}\,dx = \Big[-\dfrac{12}{x}\Big]_1^3 = -4 + 12 =$ **8 J**.

q: $F = 5\sqrt{x}$ from x = 0 to 4 m. Find the work.
answer: $\Big[\tfrac{10}{3}x^{3/2}\Big]_0^4 = \tfrac{10}{3} \times 8 \approx$ **26.7 J**.

q: $F = 100e^{-x}$ newtons from x = 0 to 2 m. Find the work.
answer: $\big[-100e^{-x}\big]_0^2 = 100(1 - e^{-2}) \approx$ **86.5 J**.

q: A force rises steadily from 0 to 20 N over the first 4 m, then stays at 20 N for 2 m more. Find the total work from the graph.
answer: Triangle $\tfrac{1}{2} \times 4 \times 20 = 40$ J, plus rectangle $20 \times 2 = 40$ J: **80 J**.

q: Why does $\tfrac{1}{2}k(x_2 - x_1)^2$ give the wrong work for stretching a spring from $x_1$ to $x_2$?
answer: **It pretends the spring starts slack.** The spring is already pulling with $kx_1$ at the start, so the true work, $\tfrac{1}{2}k(x_2^2 - x_1^2)$, is bigger.
:::
