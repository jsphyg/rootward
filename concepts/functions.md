---
id: functions
title: Functions
prereqs: []
big: A function is a rule that takes a number in and gives exactly one number back.
recap: A {{function|function}} turns each {{input|input}} into exactly one {{output|output}}. To find $f(3)$, put 3 in place of every x in the rule. If $f(x) = x^2 + 1$, then $f(3) = 3^2 + 1 = 10$.
check:
  q: If $f(x) = x^2 - 2x$, what is $f(-3)$?
  options: ["15", "3", "$-3$", "$-15$"]
  answer: 0
  why: Put $(-3)$ in place of each x, in brackets. $f(-3) = (-3)^2 - 2(-3) = 9 + 6 = 15$. Getting 3 means $-2(-3)$ was taken as $-6$, but a minus times a minus is a plus. Getting $-3$ means $(-3)^2$ was taken as $-9$, but a negative times a negative is positive. Getting $-15$ is both slips at once.
---

## A rule that turns one number into another

Here is a rule: "double the number, then add 1." Feed it some numbers:

| Put in | 1 | 2 | 3 | 10 | $-4$ |
|---|---|---|---|---|---|
| Get back | 3 | 5 | 7 | 21 | $-7$ |

*Notice: each number you put in gives one answer, and the same number always gives the same answer.*

A rule like this is called a {{function|function}}. The number you put in is the {{input|input}}. The number you get back is the {{output|output}}.

:::widget function-machine

## Writing a function: $f(x)$

Writing the rule in words gets long. So we give the function a name, usually $f$, and call the input $x$:

$$f(x) = 2x + 1$$

Read it as "f of x equals 2x plus 1". It says: whatever x is, the output is $2x + 1$.

- $f$ is the name of the function.
- $x$ stands for the input. It is a {{variable|variable}}: a letter that holds a number.
- $f(3)$ means "the output when the input is 3". Here $f(3) = 2 \cdot 3 + 1 = 7$.

**The most common slip.** $f(x)$ does not mean f times x. The brackets hold the input. They do not multiply anything.^[n_fx]

Other names work too. $g(x)$ and $h(t)$ are functions called g and h. The input letter is only a placeholder. $f(x) = x^2$ and $f(t) = t^2$ are the same rule: "square the input".

## Plugging in

To find an output, replace every x in the rule with the input. This is called plugging in, or {{evaluate|evaluating}} the function.

**Why it works.** The rule describes what happens to "the input", whatever it turns out to be. The x is only a stand-in for it. Plugging in swaps the stand-in for the real number.

Three habits keep plugging in safe.

**1. Put the input in brackets.** This matters most for negative numbers. Take $f(x) = x^2$:

- Right: $f(-3) = (-3)^2 = (-3) \cdot (-3) = 9$.
- Wrong: $f(-3) = -3^2 = -9$. Without the brackets, only the 3 gets squared.

**2. Replace every x.** In $f(x) = x^2 + 4x$ there are two x's, and both get the input. So $f(2) = 2^2 + 4 \cdot 2 = 4 + 8 = 12$.

**3. The input can be a whole expression.** The rule does not care what goes in. If $f(x) = x^2 + 1$, then

$$f(a) = a^2 + 1 \qquad \text{and} \qquad f(2 + h) = (2 + h)^2 + 1$$

The brackets matter here too. The whole input $2 + h$ gets squared, not just the h. The [[derivative|derivative]] is built from inputs like $x + h$, so this habit pays off later.

## Exactly one output

A function gives **one** output for each input, never two. If one input could give two answers, "$f(3)$" would have no single meaning.

Two different inputs may share an output, though. For $f(x) = x^2$, both $f(2)$ and $f(-2)$ are 4. That is allowed. Each input still has only one output.

Here is a table that is **not** a function:

| input | 1 | 2 | 2 | 3 |
|---|---|---|---|---|
| output | 5 | 7 | 9 | 11 |

*Notice: the input 2 gives both 7 and 9. One input, two outputs, so this is not a function.*

The [[graphs|graphs]] page shows a quick way to spot this in a picture.

## Inputs that are not allowed

Some rules break for some inputs. $f(x) = \dfrac{1}{x}$ has no output at $x = 0$, because you cannot divide by zero. The inputs a function accepts are called its {{domain|domain}}. For $\dfrac{1}{x}$, the domain is every number except 0.^[n_domain]

Calculus cares about points like this. A function can head toward a value at an input where it has no output at all. That is the idea behind [[limits|limits]].

## Why functions matter in calculus

Calculus is the study of change: how fast an output changes when its input changes. The function is the thing doing the changing. Every page after this one studies some function.

:::example
title: Let $f(x) = 2x^2 - 3x + 1$. Find $f(-2)$.

1. Replace every x with $(-2)$, in brackets: $f(-2) = 2(-2)^2 - 3(-2) + 1$.
   why: Every x gets the input. The brackets keep the minus sign attached to the 2.
   uses: []

2. Square first: $(-2)^2 = (-2)(-2) = 4$. So the first part is $2 \cdot 4 = 8$.
   why: Powers are worked out before multiplying. The square belongs to the bracket, so it acts on $-2$, not on the 2 in front.
   uses: []

3. The middle part: $-3(-2) = 6$.
   why: A minus times a minus is a plus.
   uses: []

4. Add the parts: $8 + 6 + 1 = 15$. So $f(-2) = 15$.
   why: Each x has now been replaced and worked out, so only adding is left.
   uses: []
:::

:::practice
q: Let $f(x) = 3x^2 - x + 2$. Find $f(-1)$.
answer: $f(-1) = 3(-1)^2 - (-1) + 2$. Square first: $(-1)^2 = 1$, so the first part is $3$. Then $-(-1) = +1$. Add: $3 + 1 + 2 =$ **6**.
:::

:::problems
q: Let $f(x) = 3x + 2$. Find $f(4)$.
answer: Put 4 in place of x: $f(4) = 3 \cdot 4 + 2 = 12 + 2 =$ **14**.

q: Let $f(x) = x^2 + 5$. Find $f(-3)$.
answer: $f(-3) = (-3)^2 + 5 = 9 + 5 =$ **14**. The bracket makes the square act on $-3$, and a negative times a negative is positive.

q: Let $g(t) = 10 - 2t$. Find $g(-4)$.
answer: $g(-4) = 10 - 2(-4) = 10 + 8 =$ **18**. A minus times a minus is a plus.

q: Let $f(x) = x^2 - 3x$. Find $f(-2)$.
answer: Both x's get $(-2)$: $f(-2) = (-2)^2 - 3(-2) = 4 + 6 =$ **10**.

q: Let $f(x) = x^2$. Which two inputs give the output 16?
answer: $4^2 = 16$ and $(-4)^2 = 16$, so the inputs are **4 and $-4$**. Two inputs sharing one output is allowed.

q: Is this table a function? Inputs 1, 2, 3, 1 give outputs 4, 5, 6, 7.
answer: **No.** The input 1 gives both 4 and 7. One input with two outputs is not allowed.

q: Let $f(x) = \dfrac{1}{x - 2}$. Which input has no output?
answer: **$x = 2$.** It makes the bottom $2 - 2 = 0$, and you cannot divide by zero. Every other number is in the domain.

q: Let $f(x) = 2x^2 + 1$. Write $f(a)$ and $f(x + 1)$.
answer: Replace every x with the new input, in brackets. **$f(a) = 2a^2 + 1$** and **$f(x + 1) = 2(x + 1)^2 + 1$**. The whole of $x + 1$ gets squared, not just the 1.
:::
