---
id: inverse-functions
title: Inverse functions
prereqs: [composite-functions]
big: An inverse function undoes another function. It takes each output back to the input it came from.
recap: The {{inverse|inverse}} of f, written $f^{-1}$, undoes f. If $f(3) = 7$, then $f^{-1}(7) = 3$. Doing f and then $f^{-1}$ gets you back where you started: $f^{-1}(f(x)) = x$.
check:
  q: Let $f(x) = 2x + 6$. What is $f^{-1}(10)$?
  options: ["2", "26", "$\tfrac{1}{26}$", "$-1$"]
  answer: 0
  why: Undo f's steps in reverse order. f doubles, then adds 6. So take away 6, then halve: $(10 - 6) \div 2 = 2$. Check: $f(2) = 10$. Getting 26 means f was used, not undone. Getting $\tfrac{1}{26}$ means $f^{-1}$ was read as "one over f", which it is not. Getting $-1$ means the steps were undone in the wrong order: halve first, then take away 6.
---

## Running a function backwards

Here is $f(x) = 2x + 6$, in words "double, then add 6":

| input $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| output $f(x)$ | 6 | 8 | 10 | 12 |

Now ask the backwards question. The output was 10. What was the input? Read the table from bottom to top: it was 2.

*Notice: going forwards, the table turns inputs into outputs. Going backwards, it turns outputs back into inputs. That backwards rule is a function too.*

The function that undoes f is called its {{inverse|inverse}}. It is written $f^{-1}$ and read "f inverse". Here $f^{-1}(10) = 2$, because $f(2) = 10$.

:::widget undo-machine

## The most common slip

$f^{-1}$ does **not** mean $\dfrac{1}{f}$. The small $-1$ here is not an exponent. It is a label that means "the undo of f".^[n_inverse_notation]

For $f(x) = 2x + 6$: $f^{-1}(10) = 2$, but $\dfrac{1}{f(10)} = \dfrac{1}{26}$. Very different.

## Undo in reverse order

f does two things: first double, then add 6. To undo it, undo each step, **last step first**:

1. Undo "add 6": take away 6.
2. Undo "double": halve.

So $f^{-1}$ is "take away 6, then halve".

**Why reverse order?** Think of putting on socks and then shoes. To undo that, you take off the shoes first. The last thing done is on top, so it has to come off first. This is the same idea as the order of a [[composite-functions|composite function]], run backwards.

## Finding the formula

Writing the steps as algebra gives the same answer.

1. Write $y = 2x + 6$, where y is the output.
2. Solve for x: take 6 from both sides to get $y - 6 = 2x$. Halve both sides to get $x = \dfrac{y - 6}{2}$.
3. This says how to get the input back from the output. So $f^{-1}(y) = \dfrac{y - 6}{2}$.

It is usual to call the input of any function x, so this is written $f^{-1}(x) = \dfrac{x - 6}{2}$. Only the letter changed, not the rule.^[n_swap]

## Checking an inverse

An inverse and its function cancel each other out, in either order:

$$f^{-1}(f(x)) = x \qquad \text{and} \qquad f(f^{-1}(x)) = x$$

Check it for our pair. Put $f(x) = 2x + 6$ into $f^{-1}$:

$$f^{-1}(2x + 6) = \frac{(2x + 6) - 6}{2} = \frac{2x}{2} = x$$

It comes back to x. That is the test every inverse must pass.

## When there is no inverse

Some functions cannot be undone. Take $f(x) = x^2$. Both $f(3)$ and $f(-3)$ are 9. So if the output is 9, the input could have been 3 **or** $-3$. A function must give one answer, so there is no single "undo".

A function has an inverse only when every output comes from just **one** input. Such a function is called {{one-to-one|one-to-one}}.

There is a common fix: only allow some of the inputs. If $x^2$ only takes inputs of 0 or more, then each output comes from one input. Its inverse is the square root, $\sqrt{x}$. That is why $\sqrt{9}$ means 3, not $-3$.

## Why inverses matter in calculus

Many important functions are defined as the undo of another one.

- The square root undoes squaring.
- The logarithm undoes the exponential function.
- The inverse trig functions undo sine, cosine and tangent.

Each of these gets its own derivative later. Knowing they are inverses is what lets us find them.^[n_mirror]

:::example
title: Find the inverse of $f(x) = x^3 + 2$, and check it at $x = 3$.

1. Say what f does, in order: first cube, then add 2.
   why: To undo a function, you need its steps in order.
   uses: [composite-functions]

2. Undo the steps, last step first: take away 2, then take the cube root.
   why: The last thing done must be undone first.
   uses: []

3. Write it as a formula: $f^{-1}(x) = \sqrt[3]{x - 2}$.
   why: The {{cube-root|cube root}} undoes cubing. The bracket under the root shows the 2 is taken away first.
   uses: []

4. Check at $x = 3$. Forwards: $f(3) = 27 + 2 = 29$. Backwards: $f^{-1}(29) = \sqrt[3]{29 - 2} = \sqrt[3]{27} = 3$. Back where we started.
   why: An inverse must bring every input back to itself.
   uses: [functions]

5. f is one-to-one, so this inverse works for every input.
   why: Cubing never sends two different numbers to the same answer. For example, $2^3 = 8$ but $(-2)^3 = -8$.
   uses: []
:::

:::practice
q: Find the inverse of $f(x) = \dfrac{x + 4}{3}$. Check it with $x = 5$.
answer: f adds 4, then divides by 3. Undo in reverse: multiply by 3, then take away 4. So **$f^{-1}(x) = 3x - 4$**. Check: $f(5) = \dfrac{9}{3} = 3$, and $f^{-1}(3) = 9 - 4 = 5$. Back to 5.
:::
