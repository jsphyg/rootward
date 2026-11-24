---
id: rearranging-formulas
title: Solving equations and rearranging formulas
prereqs: []
big: To find an unknown, undo what was done to it, one step at a time, and always do the same thing to both sides.
recap: To solve for a letter, undo each thing done to it, last step first, doing the same to both sides. For example, $v = \dfrac{d}{t}$ becomes $d = vt$ (multiply both sides by t), and then $t = \dfrac{d}{v}$ (divide both sides by v).
check:
  q: Solve $v = \dfrac{d}{t}$ for t.
  options: ["$t = \dfrac{d}{v}$", "$t = \dfrac{v}{d}$", "$t = vd$", "$t = d - v$"]
  answer: 0
  why: Multiply both sides by t to get $vt = d$, then divide both sides by v to get $t = \dfrac{d}{v}$. Check with numbers: 100 metres in 20 seconds is 5 metres per second, and $\frac{100}{5} = 20$. $\dfrac{v}{d}$ is upside down. $vd$ multiplies when it should divide. $d - v$ undoes a division with a subtraction.
---

## A number puzzle

"I think of a number. I multiply it by 3, then add 5. I get 20. What was my number?"

You can find it by running the steps backwards:

| Forward (what was done) | Backward (undo it) |
|---|---|
| start with the number | start with 20 |
| multiply by 3 | subtract 5: $20 - 5 = 15$ |
| add 5, giving 20 | divide by 3: $15 \div 3 = 5$ |

*Notice: the backward column undoes the steps in the opposite order. The last thing done (add 5) is the first thing undone.*

The number was 5. Check: $5 \times 3 = 15$, and $15 + 5 = 20$.

## Writing it as an equation

Call the unknown number x. The puzzle becomes an {{equation|equation}}:

$$3x + 5 = 20$$

An equation is like a balanced scale. The two sides weigh the same. If you take 5 off one side, you must take 5 off the other, or it tips. So every move is done to **both** sides:

$$3x + 5 - 5 = 20 - 5 \quad\Longrightarrow\quad 3x = 15$$

$$\frac{3x}{3} = \frac{15}{3} \quad\Longrightarrow\quad x = 5$$

**Why it works.** The two sides are the same number. Doing the same thing to the same number gives the same answer. So after each move, the two sides are still equal, and the equation is still true.

## Undo pairs

Each operation has an {{inverse-op|undo}} that cancels it:

| Operation | Undo it with |
|---|---|
| add 5 | subtract 5 |
| subtract 5 | add 5 |
| multiply by 3 | divide by 3 |
| divide by 3 | multiply by 3 |
| square | take the square root |

**Undo in reverse order.** You put on socks, then shoes. To take them off, you remove the shoes first. Equations work the same way. Find the last thing done to the unknown and undo it first.

Brackets change the order. In $3(x + 1) = 18$, the "add 1" happens first, inside the brackets, and the "times 3" happens last. So undo the times 3 first: $x + 1 = 6$, then $x = 5$.

## The same moves work with letters

Physics is full of {{formula|formulas}}: equations that connect quantities. Speed is distance divided by time:

$$v = \frac{d}{t}$$

Here v is speed, d is distance and t is time. Each letter is a {{variable|variable}}, a stand-in for a number. Because letters stand for numbers, the same moves work.

To get d on its own, notice that d is divided by t. Undo it: multiply both sides by t.

$$v \cdot t = \frac{d}{t} \cdot t \quad\Longrightarrow\quad d = vt$$

To get t on its own, start from $d = vt$. Now t is multiplied by v. Undo it: divide both sides by v.

$$\frac{d}{v} = \frac{vt}{v} \quad\Longrightarrow\quad t = \frac{d}{v}$$

*Notice: one formula gives three. If you know any two of speed, distance and time, you can find the third.*

## Squares and square roots

Some formulas have a square. The energy of a moving object is $E = \frac{1}{2}mv^2$, where m is its mass and v its speed. To solve for v:

1. Undo the $\frac{1}{2}$ by multiplying both sides by 2: $2E = mv^2$.
2. Undo the times m by dividing both sides by m: $\dfrac{2E}{m} = v^2$.
3. Undo the square by taking the square root of both sides: $v = \sqrt{\dfrac{2E}{m}}$.

A square root really has two answers, one positive and one negative.^[n_two_roots] A speed or a length is never negative, so in physics we usually keep the positive one.

## Check by putting numbers in

After you rearrange, pick easy numbers and test. If 100 metres takes 20 seconds, the speed is $\frac{100}{20} = 5$. Then $t = \frac{d}{v}$ should give back 20: $\frac{100}{5} = 20$. It does. If your rearranged formula gave a different number, there is a mistake.

:::example
title: Solve $v = u + at$ for t. (It gives the speed v of an object that starts at speed u and speeds up by a each second.)

1. Find what is done to t. It is multiplied by a, then u is added.
   why: Undo steps go in reverse order, so you need to know the order first.
   uses: []

2. Undo the last step, the "add u": subtract u from both sides. $v - u = at$.
   why: Subtracting undoes adding, and doing it to both sides keeps the equation true.
   uses: []

3. Undo the "times a": divide both sides by a. $\dfrac{v - u}{a} = t$.
   why: Dividing undoes multiplying. The whole left side, $v - u$, is divided by a, so it goes on top of the fraction.
   uses: []

4. So $t = \dfrac{v - u}{a}$. Check with $u = 2$, $a = 3$, $t = 4$: then $v = 2 + 3 \cdot 4 = 14$, and $\dfrac{14 - 2}{3} = \dfrac{12}{3} = 4$. It gives back t.
   why: Testing with numbers catches mistakes like dividing only v by a.
   uses: []
:::

:::practice
q: Solve $F = ma$ for a.
answer: a is multiplied by m, so divide both sides by m: **$a = \dfrac{F}{m}$**. Check: $F = 12$, $m = 3$ gives $a = 4$, and $3 \times 4 = 12$.
:::

:::problems
q: Solve $x + 7 = 12$.
answer: Subtract 7 from both sides: **$x = 5$**. Check: $5 + 7 = 12$.

q: Solve $4x = 28$.
answer: Divide both sides by 4: **$x = 7$**.

q: Solve $\dfrac{x}{5} = 3$.
answer: Multiply both sides by 5: **$x = 15$**.

q: Solve $2x + 3 = 11$.
answer: Subtract 3: $2x = 8$. Divide by 2: **$x = 4$**. Check: $2 \cdot 4 + 3 = 11$.

q: Solve $5x - 4 = 21$.
answer: Add 4: $5x = 25$. Divide by 5: **$x = 5$**.

q: Solve $\dfrac{x - 2}{3} = 4$.
answer: The division by 3 was done last, so undo it first. Multiply by 3: $x - 2 = 12$. Add 2: **$x = 14$**. Check: $\frac{14 - 2}{3} = 4$.

q: Solve $3(x + 1) = 18$.
answer: The "times 3" was done last. Divide by 3: $x + 1 = 6$. Subtract 1: **$x = 5$**.

q: Solve $x^2 = 49$, where x is positive.
answer: Take the square root of both sides: **$x = 7$**.

q: Solve $2x^2 = 50$, where x is positive.
answer: Divide by 2: $x^2 = 25$. Square root: **$x = 5$**. Check: $2 \cdot 25 = 50$.

q: Solve $d = vt$ for v.
answer: v is multiplied by t, so divide both sides by t: **$v = \dfrac{d}{t}$**.

q: Solve $P = \dfrac{W}{t}$ for W.
answer: W is divided by t, so multiply both sides by t: **$W = Pt$**.

q: Solve $P = \dfrac{W}{t}$ for t.
answer: Multiply both sides by t: $Pt = W$. Divide both sides by P: **$t = \dfrac{W}{P}$**. Check: $W = 60$, $t = 3$ gives $P = 20$, and $\frac{60}{20} = 3$.

q: Solve $F = ma$ for m.
answer: Divide both sides by a: **$m = \dfrac{F}{a}$**.

q: Solve $y = mx + b$ for x.
answer: Subtract b: $y - b = mx$. Divide by m: **$x = \dfrac{y - b}{m}$**.

q: Solve $A = \pi r^2$ for r, where r is positive.
answer: Divide by $\pi$: $\dfrac{A}{\pi} = r^2$. Square root: **$r = \sqrt{\dfrac{A}{\pi}}$**.

q: Solve $E = \frac{1}{2}mv^2$ for m.
answer: Multiply by 2: $2E = mv^2$. Divide by $v^2$: **$m = \dfrac{2E}{v^2}$**. Check: $m = 4$, $v = 3$ gives $E = \frac{1}{2} \cdot 4 \cdot 9 = 18$, and $\frac{2 \cdot 18}{9} = 4$.

q: Solve $v^2 = u^2 + 2as$ for s.
answer: Subtract $u^2$: $v^2 - u^2 = 2as$. Divide by $2a$: **$s = \dfrac{v^2 - u^2}{2a}$**.

q: A car drives 150 km at a steady 60 km per hour. How long does the trip take? Use $v = \dfrac{d}{t}$.
answer: Rearrange for time: $t = \dfrac{d}{v} = \dfrac{150}{60} = 2.5$. **2.5 hours**, which is 2 hours 30 minutes.
:::
