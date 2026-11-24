---
id: systems-of-equations
title: Two equations, two unknowns
prereqs: [rearranging-formulas]
big: One equation cannot pin down two unknowns, but two equations together usually can, by combining them until only one unknown is left.
recap: To solve two equations with two unknowns, get rid of one unknown. Substitution: rearrange one equation for one letter and put that into the other equation. Elimination: add or subtract the equations (after multiplying if needed) so one letter cancels. Then check the answer in both equations.
check:
  q: Solve $x + y = 10$ and $x - y = 2$.
  options: ["$x = 6$, $y = 4$", "$x = 4$, $y = 6$", "$x = 8$, $y = 2$", "$x = 5$, $y = 5$"]
  answer: 0
  why: Add the equations: the y's cancel, giving $2x = 12$, so $x = 6$. Then $6 + y = 10$ gives $y = 4$. Check: $6 - 4 = 2$. "4 and 6" swaps x and y, so $x - y$ would be −2. "8 and 2" and "5 and 5" fit the first equation but not the second.
---

## One equation is not enough

"Two numbers add to 10." What are they? Many pairs work:

| x | y | $x + y$ | $x - y$ |
|---|---|---|---|
| 5 | 5 | 10 | 0 |
| 6 | 4 | 10 | 2 |
| 7 | 3 | 10 | 4 |
| 8 | 2 | 10 | 6 |

*Notice: every row fits "add to 10", but only one row also fits "differ by 2".*

Add a second fact, "and they differ by 2", and only one pair is left: 6 and 4. Two unknowns need two equations. Together they are called a {{system|system of equations}}.

The plan is always the same: **combine the two equations to get rid of one unknown.** Then you have one equation with one unknown, which you already know how to solve.

## Method 1: substitution

Solve $y = x + 1$ and $2x + y = 10$.

1. The first equation already says what y is: $x + 1$.
2. {{substitute|Substitute}} it into the second, replacing y: $2x + (x + 1) = 10$.
3. Now there is only x: $3x + 1 = 10$, so $3x = 9$ and $x = 3$.
4. Put x back into the easy equation: $y = 3 + 1 = 4$.

**Why it works.** Both equations are about the same x and y. If y equals $x + 1$, then anywhere you see y you can write $x + 1$ instead. It is the same number with a different name.

Substitution is best when one equation already has a letter on its own, or nearly.

## Method 2: elimination

Solve $3x + 2y = 16$ and $x + 2y = 8$.

Both have $2y$. Subtract the second equation from the first, left side from left side and right from right:

$$(3x + 2y) - (x + 2y) = 16 - 8 \quad\Longrightarrow\quad 2x = 8 \quad\Longrightarrow\quad x = 4$$

Then $4 + 2y = 8$ gives $y = 2$.

**Why it works.** Equal things minus equal things are still equal. The y's were chosen to match, so they cancel and only x is left.

Sometimes nothing matches yet. Multiply first. To solve $3x + 2y = 7$ and $2x - 3y = -4$, multiply the first by 3 and the second by 2:

$$9x + 6y = 21 \qquad 4x - 6y = -8$$

Now the y's are $+6y$ and $-6y$. Add the equations: $13x = 13$, so $x = 1$. Then $3 + 2y = 7$, so $y = 2$.

## Always check in both

Put your answer into **both** original equations. For $x = 1$, $y = 2$: $3 + 4 = 7$ and $2 - 6 = -4$. Both work. Checking only one equation can miss a mistake, because many wrong pairs fit one equation.

Once in a while there is no answer at all. $x + y = 5$ and $2x + 2y = 12$ cannot both be true: doubling the first gives $2x + 2y = 10$, not 12.^[n_no_solution]

:::example
title: An object speeds up steadily, so its speed is $v = u + at$. At t = 2 s its speed is 10 m/s. At t = 5 s it is 19 m/s. Find the starting speed u and the speed-up per second a.

1. Write one equation for each moment: $u + 2a = 10$ and $u + 5a = 19$.
   why: Each measurement gives one equation. Two unknowns need two of them.
   uses: [rearranging-formulas]

2. Subtract the first from the second: $(u + 5a) - (u + 2a) = 19 - 10$, so $3a = 9$.
   why: Both equations have one u, so subtracting cancels it.
   uses: []

3. Divide by 3: $a = 3$ m/s each second.
   why: Undo the multiply by 3.
   uses: []

4. Put a into the first equation: $u + 6 = 10$, so $u = 4$ m/s.
   why: Any of the two equations works. Pick the simpler one.
   uses: []

5. Check in the second: $4 + 5 \times 3 = 19$. It works. **Starting speed 4 m/s, speeding up by 3 m/s every second.**
   why: Checking in the equation you did not use catches slips.
   uses: []
:::

:::practice
q: Solve $y = 2x$ and $x + y = 12$.
answer: Substitute: $x + 2x = 12$, so $3x = 12$ and $x = 4$. Then $y = 8$. **$x = 4$, $y = 8$.** Check: $4 + 8 = 12$.
:::

:::problems
q: Solve $x + y = 7$ and $y = 3$.
answer: Put $y = 3$ in: $x + 3 = 7$. **$x = 4$, $y = 3$.**

q: Solve $y = 2x$ and $x + y = 12$.
answer: $x + 2x = 12$, $x = 4$, $y = 8$. **$x = 4$, $y = 8$.**

q: Solve $y = x + 1$ and $2x + y = 10$.
answer: $2x + x + 1 = 10$, $3x = 9$, $x = 3$, $y = 4$. **$x = 3$, $y = 4$.**

q: Solve $x + y = 10$ and $x - y = 4$.
answer: Add: $2x = 14$, $x = 7$. Then $y = 3$. **$x = 7$, $y = 3$.**

q: Solve $2x + y = 11$ and $x - y = 1$.
answer: Add: $3x = 12$, $x = 4$. Then $4 - y = 1$, $y = 3$. **$x = 4$, $y = 3$.** Check: $8 + 3 = 11$.

q: Solve $3x + 2y = 16$ and $x + 2y = 8$.
answer: Subtract: $2x = 8$, $x = 4$. Then $4 + 2y = 8$, $y = 2$. **$x = 4$, $y = 2$.**

q: Solve $2x + 3y = 12$ and $x - y = 1$.
answer: From the second, $x = y + 1$. Substitute: $2(y + 1) + 3y = 12$, $5y + 2 = 12$, $y = 2$. Then $x = 3$. **$x = 3$, $y = 2$.**

q: Solve $4x - y = 5$ and $2x + 3y = 13$.
answer: From the first, $y = 4x - 5$. Substitute: $2x + 3(4x - 5) = 13$, $14x - 15 = 13$, $x = 2$. Then $y = 3$. **$x = 2$, $y = 3$.** Check: $4 + 9 = 13$.

q: Solve $3x + 2y = 7$ and $2x - 3y = -4$.
answer: Multiply by 3 and 2: $9x + 6y = 21$ and $4x - 6y = -8$. Add: $13x = 13$, $x = 1$. Then $y = 2$. **$x = 1$, $y = 2$.**

q: Solve $5x + 2y = 1$ and $3x + 4y = 9$.
answer: Double the first: $10x + 4y = 2$. Subtract the second: $7x = -7$, $x = -1$. Then $-5 + 2y = 1$, $y = 3$. **$x = -1$, $y = 3$.** Check: $-3 + 12 = 9$.

q: Solve $\dfrac{x}{2} + y = 5$ and $x - y = 1$.
answer: Add: $\dfrac{3x}{2} = 6$, $x = 4$. Then $y = 3$. **$x = 4$, $y = 3$.** Check: $2 + 3 = 5$.

q: Two numbers add to 30 and differ by 8. Find them.
answer: $x + y = 30$, $x - y = 8$. Add: $2x = 38$, $x = 19$, $y = 11$. **19 and 11.**

q: Adult tickets cost 10 dollars and child tickets 5 dollars. A group buys 20 tickets for 140 dollars. How many of each?
answer: $a + c = 20$ and $10a + 5c = 140$. From the first, $c = 20 - a$. Then $10a + 100 - 5a = 140$, $5a = 40$, $a = 8$. **8 adults and 12 children.** Check: $80 + 60 = 140$.

q: A boat goes 12 km/h downstream (boat plus current) and 8 km/h upstream (boat minus current). Find the boat's speed in still water and the current's speed.
answer: $b + c = 12$, $b - c = 8$. Add: $2b = 20$. **Boat 10 km/h, current 2 km/h.**

q: Show that $x + y = 5$ and $2x + 2y = 12$ have no solution.
answer: Double the first: $2x + 2y = 10$. The second says the same thing equals 12. **10 cannot equal 12, so no pair works.** On a graph they are two parallel lines.
:::
