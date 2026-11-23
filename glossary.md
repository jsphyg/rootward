# Calculus glossary

Terms (`{{id|text}}` pop-ups) and footnotes (`^[id]`). Each entry has a title, a definition, and an optional `concept:` link to the full page.

---

## Terms

### factor
- title: Factor
- def: One of the things being multiplied. In $3 \times 4 = 12$, 3 and 4 are factors. In $(x - 2)(x + 2)$, each bracket is a factor. "To factor" means to rewrite something as factors multiplied together.
- concept: factoring

### product
- title: Product
- def: The result of multiplying. $(x - 2)(x + 2)$ is a product of two factors.

### expression
- title: Expression
- def: A piece of math made of numbers, letters and operations, with no equals sign. $x^2 + 5x + 6$ is an expression.

### term
- title: Term
- def: One piece of a sum, separated from the others by + or −. $x^2 + 5x + 6$ has three terms: $x^2$, $5x$ and $6$.

### diff-squares
- title: Difference of two squares
- def: One square minus another, like $x^2 - 9$. It always factors as $a^2 - b^2 = (a - b)(a + b)$.
- concept: factoring

### square-root
- title: Square root
- def: The number that, multiplied by itself, gives a given number. The square root of 9 is 3, because $3 \times 3 = 9$.

### distributive
- title: Distributive property
- def: The rule that a number times a bracket multiplies each thing inside: $a(b + c) = ab + ac$.
- concept: expanding

### like-terms
- title: Like terms
- def: Terms with the same letter raised to the same power, like $3x$ and $2x$. They can be added: $3x + 2x = 5x$. $x^2$ and $x$ are not like terms.

### trinomial
- title: Trinomial
- def: An expression with three terms, like $x^2 + 5x + 6$.
- concept: factoring

### base
- title: Base
- def: The number or letter being multiplied by itself. In $2^5$ the base is 2.
- concept: exponents

### power
- title: Power
- def: A base with an exponent, like $2^5$ or $x^3$. "2 to the power 5" means $2^5 = 32$.
- concept: exponents

### reciprocal
- title: Reciprocal
- def: One divided by a number. The reciprocal of 4 is $\frac{1}{4}$. The reciprocal of $x^3$ is $\frac{1}{x^3}$.

### cube-root
- title: Cube root
- def: The number that, multiplied by itself three times, gives a given number. The cube root of 8 is 2, because $2 \cdot 2 \cdot 2 = 8$. Written $\sqrt[3]{8}$ or $8^{1/3}$.

### root
- title: nth root
- def: The number that, multiplied by itself n times, gives a given number. The square root is the 2nd root and the cube root is the 3rd. The nth root of x is written $\sqrt[n]{x}$ or $x^{1/n}$.
- concept: negative-fractional-exponents

---

## Ported from the prototype (unchanged)

These entries already exist in `engine-prototype.html`. They are copied here so the glossary is complete. Changes: `exponent` now links to the `exponents` page, and its definition was reworded. The prototype footnotes are at the end of the Footnotes section (n_zero onward).

### function
- title: Function
- def: A rule that turns each input into exactly one output.
- concept: functions

### input
- title: Input
- def: The number you feed into a function. For f(x), the input is x.

### output
- title: Output
- def: What the function gives back. For f(x), the output is the value of f(x).

### variable
- title: Variable
- def: A letter that stands for a number, such as x. In $f(x) = 2x + 1$, x is the variable: it holds whatever input you choose.

### evaluate
- title: Evaluate
- def: To work out a function's output for a given input, by putting the input in place of x. "Evaluate $f(x) = 2x + 1$ at 3" means find $f(3) = 7$.
- concept: functions

### domain
- title: Domain
- def: All the inputs a function accepts. $\frac{1}{x}$ accepts every number except 0, because you cannot divide by zero.
- concept: functions

### graph
- title: Graph
- def: The picture of a function: every point $(x, f(x))$, drawn on a grid. The height above each input is its output.
- concept: graphs

### axis
- title: Axis
- def: One of the two number lines that make a graph's grid. The x-axis runs across. The y-axis runs up. Plural: axes.
- concept: graphs

### origin
- title: Origin
- def: The point where the two axes cross, $(0, 0)$.
- concept: graphs

### coordinates
- title: Coordinates
- def: The two numbers that give a point's address, written $(x, y)$: first how far across, then how far up.
- concept: graphs

### parabola
- title: Parabola
- def: The U-shaped curve you get from graphing $x^2$, or any function like $ax^2 + bx + c$ with a not zero.
- concept: graphs

### slope
- title: Slope
- def: How steep a line is: rise divided by run.
- concept: slope

### secant
- title: Secant line
- def: A straight line through two points on a curve.

### tangent
- title: Tangent line
- def: A straight line that just touches a curve at one point and points the same way the curve does there.

### approach
- title: Approaches
- def: Gets closer and closer to, without having to reach it.

### exponent
- title: Exponent
- def: The small raised number that counts how many times the base is multiplied. In $x^5$ the exponent is 5: five x's multiplied together.
- concept: exponents

### coeff
- title: Coefficient
- def: The number multiplied onto a variable. In 3x⁴ the coefficient is 3.

### inner
- title: Inner function
- def: The function that goes first. In (3x+1)⁴ the inner function is 3x+1.
- concept: composite-functions

### outer
- title: Outer function
- def: The function that goes last. In (3x+1)⁴ the outer function is "raise to the 4th power".
- concept: composite-functions

### limit
- title: Limit
- def: The value a function approaches as its input approaches some number.
- concept: limits

### derivative
- title: Derivative
- def: The slope of a curve at one point, written f′(x).
- concept: derivative

---

## Footnotes

### n_foil
- title: Note: FOIL
- def: Some books call two-bracket expanding FOIL: First, Outer, Inner, Last. It names the four multiplications. It only works for two terms times two terms, while "every term times every term" always works.

### n_sum_squares
- title: Note: can $x^2 + 4$ ever be factored?
- def: Not with ordinary (real) numbers. With imaginary numbers, where $i^2 = -1$, it becomes $(x - 2i)(x + 2i)$. Calculus 1 does not need this.

### n_leading
- title: Note: when $x^2$ has a number in front
- def: Expressions like $2x^2 + 7x + 3$ need a longer method, because the first term is not a plain $x^2$. First check whether a common factor removes the number. If not, one way is to try brackets like $(2x + \_)(x + \_)$ and multiply back to test. Here, $(2x + 1)(x + 3)$ works.

### n_neg_base
- title: Note: minus signs and exponents
- def: The same rule applies to a minus sign. $-3^2$ means $-(3^2) = -9$, because the exponent touches only the 3. $(-3)^2 = (-3)(-3) = 9$. Calculators follow this rule too, so use brackets when you mean the negative number.

### n_x_not_zero
- title: Note: x cannot be 0 here
- def: The divide rule needs $x \neq 0$, because you cannot divide by zero. The same is true any time a power of x sits on the bottom of a fraction.

### n_zero_power
- title: Note: what about $0^0$?
- def: The pattern argument divides by the base, which fails when the base is 0. So $0^0$ is left undefined in most of algebra. Some areas of math set it to 1 for convenience. Calculus 1 does not need it.

### n_neg_not_zero
- title: Note: x cannot be 0 here
- def: $x^{-n} = \frac{1}{x^n}$ puts x on the bottom of a fraction, so it needs $x \neq 0$. $0^{-1}$ would be $\frac{1}{0}$, which has no meaning.

### n_even_root
- title: Note: roots of negative numbers
- def: An odd root of a negative number is fine. $(-8)^{1/3} = -2$, because $(-2)^3 = -8$. An even root, like a square root, of a negative number is not a real number, because any real number times itself is zero or positive. That is why pages that use $x^{1/2}$ assume $x \geq 0$.

### n_zero
- title: Note: why 0/0 is not an answer
- def: Dividing by zero has no meaning, so the function is simply undefined at that point. The limit asks what it is heading toward, not what it is there.

### n_fx
- title: Note: other ways to write a function
- def: The $f(x)$ way of writing was made popular by Leonhard Euler in the 1700s. You will also see $y = 2x + 1$, where y names the output, and $x \mapsto 2x + 1$, read "x goes to 2x + 1". All three describe the same rule.

### n_domain
- title: Note: the other common gap
- def: Square roots. $\sqrt{x}$ has no ordinary (real) output when x is negative, because no real number times itself is negative. So its domain is $x \geq 0$. When a book gives a function without naming its domain, it means every input the rule works for.

### n_descartes
- title: Note: why it is called the Cartesian plane
- def: The x-y grid is named after René Descartes, who published the idea of describing curves with pairs of numbers in 1637. Pierre de Fermat worked out the same idea at about the same time.

### n_join
- title: Note: is joining the dots safe?
- def: Only if the function behaves smoothly between the points you plotted. Most functions in Calculus 1 do. Some jump or have gaps, and a few dots can hide that. Plotting more points, or knowing the rule well, is the safeguard.

### n_h
- title: Note: why the letter h?
- def: It is just a name for "a small step". Some books write Δx (read "delta x") instead. Same idea.

### n_notation
- title: Note: other notation
- def: You will also see this written dy/dx. Read it as "the rate y changes as x changes". f′(x) and dy/dx mean the same thing.

### n_rates
- title: Note: why multiply?
- def: If a bike goes 3 km per hour faster for each hour of effort, and a car goes 4 km per hour faster for each km per hour of bike speed, the car gains 3 × 4 = 12 km per hour per hour of effort. Rates of change in a chain multiply.
