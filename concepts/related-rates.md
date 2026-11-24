---
id: related-rates
title: Related rates
prereqs: [implicit-differentiation]
big: When two quantities are tied together by an equation and both change over time, their rates of change are tied together too. Take the derivative of the equation with respect to time, and one rate gives you the other.
recap: Write an equation linking the quantities. Take the derivative of both sides with respect to time t. Each quantity that changes picks up its own rate, such as $\frac{dr}{dt}$, by the chain rule. Only then plug in the numbers for the moment you care about, and solve for the rate you want.
check:
  q: A circle's radius grows at 1 cm per second. How fast is its area $A = \pi r^2$ growing when $r = 3$ cm?
  options: ["$6\pi$ cm² per second", "$2\pi$ cm² per second", "$9\pi$ cm² per second"]
  answer: 0
  why: Take the derivative with respect to time: $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$. Plug in $r = 3$ and $\frac{dr}{dt} = 1$: $2\pi \cdot 3 \cdot 1 = 6\pi$. $2\pi$ forgets the radius. $9\pi$ is the area itself, not how fast it is growing.
---

## A ripple on a pond

Drop a stone in a pond. A circular ripple spreads out, its radius growing at a steady 2 cm every second. How fast is the area inside the ripple growing?

The area and the radius are linked by

$$A = \pi r^2$$

Both change as time passes. So think of each as a function of time t, and take the derivative of both sides **with respect to t**. The right side is a layered function: r depends on t, and then gets squared. By the [[chain-rule|chain rule]]:

$$\frac{dA}{dt} = 2\pi r \cdot \frac{dr}{dt}$$

This links the two rates. We know $\dfrac{dr}{dt} = 2$. When the radius is 10 cm:

$$\frac{dA}{dt} = 2\pi \cdot 10 \cdot 2 = 40\pi \approx 126 \text{ cm}^2 \text{ per second}$$

*Notice: the radius grows at the same speed all the time, but the area does not. When $r = 20$ it grows twice as fast, $80\pi$. A bigger ripple has a longer edge, so each step outward sweeps up more water.*

## The idea

This is the same move as [[implicit-differentiation|implicit differentiation]], with time as the variable instead of x. Every quantity that changes picks up its own rate when you take the derivative:

| quantity | its derivative with respect to t |
|---|---|
| $r^2$ | $2r\dfrac{dr}{dt}$ |
| $x^2 + y^2$ | $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt}$ |
| $\ell w$ | $\dfrac{d\ell}{dt} w + \ell \dfrac{dw}{dt}$ |

$\dfrac{dr}{dt}$ is read "the rate of change of r": how many units r changes by each second (or each minute, or whatever time is measured in). A positive rate means growing. A negative rate means shrinking.

## The method

1. **Draw a picture**, and give a letter to each quantity that changes.
2. **Write down what you know**, as rates. "Air goes in at 100 cm³ a minute" means $\dfrac{dV}{dt} = 100$. Write down the rate you want, too.
3. **Write an equation** that links the quantities. It comes from geometry: Pythagoras, an area, a volume.
4. **Take the derivative** of both sides with respect to t.
5. **Now plug in** the numbers for the moment in the question, and solve for the rate you want.

**The most common slip: plugging in too early.** If you put $r = 10$ into $A = \pi r^2$ first, you get $A = 100\pi$, a constant. Its derivative is 0, which says the area is not growing at all. The numbers describe one instant. The equation must hold at every instant, so differentiate first, then plug in.

## A sliding ladder

A 10 m ladder leans against a wall. Its foot slides away from the wall at 1 m per second. How fast does the top slide down?

:::widget ladder-slide

:::example
title: How fast is the top of the ladder falling when the foot is 6 m from the wall?

1. Name the quantities. Let x be the distance from the wall to the foot, and y the height of the top. We know $\dfrac{dx}{dt} = 1$, and want $\dfrac{dy}{dt}$.
   why: Both distances change as the ladder slides. The ladder's length, 10, does not.
   uses: []

2. Link them: the wall, the floor and the ladder make a right triangle, so $x^2 + y^2 = 100$.
   why: Pythagoras, with the ladder as the longest side.
   uses: []

3. Take the derivative with respect to t: $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$.
   why: Each changing quantity picks up its own rate. 100 is a constant, so its derivative is 0.
   uses: [implicit-differentiation]

4. Find y at this moment: $6^2 + y^2 = 100$, so $y^2 = 64$ and $y = 8$.
   why: The rate equation needs both x and y.
   uses: []

5. Plug in and solve: $2 \cdot 6 \cdot 1 + 2 \cdot 8 \cdot \dfrac{dy}{dt} = 0$, so $16\dfrac{dy}{dt} = -12$ and $\dfrac{dy}{dt} = -0.75$.
   why: Only now do the numbers go in.
   uses: []

6. Read the answer. The top slides **down** at 0.75 m per second. The minus sign means y is shrinking.
   why: A negative rate means the quantity is getting smaller.
   uses: []
:::

*Notice: the foot moves at a steady 1 m/s, but the top speeds up as it falls. When the foot is 8 m out, the top falls at $\tfrac{8}{6} \approx 1.33$ m/s. Near the floor, it falls faster and faster.*^[n_ladder]

:::practice
q: A square's side grows at 3 cm per second. How fast is its area growing when the side is 5 cm?
answer: $A = s^2$, so $\dfrac{dA}{dt} = 2s\dfrac{ds}{dt} = 2 \cdot 5 \cdot 3 =$ **30 cm² per second**.
:::

:::problems
q: A cube's edge grows at 0.5 cm per second. How fast is its volume growing when the edge is 4 cm?
answer: $V = s^3$, so $\dfrac{dV}{dt} = 3s^2\dfrac{ds}{dt} = 3 \cdot 16 \cdot 0.5 =$ **24 cm³ per second**.

q: A circle's radius grows at 3 cm per second. How fast is its area growing when $r = 5$ cm?
answer: $\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt} = 2\pi \cdot 5 \cdot 3 =$ **$30\pi \approx 94.2$ cm² per second**.

q: A circle's area grows at 10 cm² per second. How fast is its radius growing when $r = 5$ cm?
answer: $10 = 2\pi \cdot 5 \cdot \dfrac{dr}{dt}$, so $\dfrac{dr}{dt} = \dfrac{10}{10\pi} =$ **$\dfrac{1}{\pi} \approx 0.32$ cm per second**.

q: A sphere's radius grows at 2 cm per second. How fast is its surface area, $4\pi r^2$, growing when $r = 3$ cm?
answer: $\dfrac{dS}{dt} = 8\pi r\dfrac{dr}{dt} = 8\pi \cdot 3 \cdot 2 =$ **$48\pi \approx 150.8$ cm² per second**.

q: Air is pumped into a round balloon at 100 cm³ per second. Its volume is $V = \tfrac{4}{3}\pi r^3$. How fast is the radius growing when $r = 10$ cm?
answer: $\dfrac{dV}{dt} = 4\pi r^2\dfrac{dr}{dt}$. So $100 = 4\pi \cdot 100 \cdot \dfrac{dr}{dt}$, giving $\dfrac{dr}{dt} = \dfrac{1}{4\pi} \approx$ **0.08 cm per second**. A big balloon's radius grows slowly, because each new layer of air is spread over a large surface.

q: A 13 m ladder leans against a wall. Its foot slides out at 2 m per second. How fast does the top fall when the foot is 5 m from the wall?
answer: $x^2 + y^2 = 169$. When $x = 5$, $y = 12$. Then $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$ gives $5 \cdot 2 + 12\dfrac{dy}{dt} = 0$, so $\dfrac{dy}{dt} = -\dfrac{10}{12}$. The top falls at **$\dfrac{5}{6} \approx 0.83$ m per second**.

q: The top of a 5 m ladder slides down a wall at 1 m per second. How fast does the foot move out when the top is 3 m high?
answer: $x^2 + y^2 = 25$. When $y = 3$, $x = 4$. $\dfrac{dy}{dt} = -1$ (falling). Then $4\dfrac{dx}{dt} + 3(-1) = 0$, so **$\dfrac{dx}{dt} = \dfrac{3}{4}$ m per second**, outward.

q: A rectangle's length grows at 2 cm per second while its width shrinks at 1 cm per second. When it is 10 cm long and 6 cm wide, is its area growing or shrinking, and how fast?
answer: $A = \ell w$, so by the product rule $\dfrac{dA}{dt} = \dfrac{d\ell}{dt} w + \ell\dfrac{dw}{dt} = 2 \cdot 6 + 10 \cdot (-1) = 2$. The area is **growing at 2 cm² per second**.

q: Two cars leave the same spot. One drives north at 60 km/h, the other east at 80 km/h. How fast is the distance between them growing after 1 hour?
answer: After 1 hour, $x = 80$ and $y = 60$, so the distance is $z = \sqrt{6400 + 3600} = 100$. From $z^2 = x^2 + y^2$: $2z\dfrac{dz}{dt} = 2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt}$. So $100\dfrac{dz}{dt} = 80 \cdot 80 + 60 \cdot 60 = 10{,}000$, giving **100 km/h**.

q: A point moves along the curve $y = x^2$, with x increasing at 3 units per second. How fast is y increasing when $x = 2$?
answer: $\dfrac{dy}{dt} = 2x\dfrac{dx}{dt} = 2 \cdot 2 \cdot 3 =$ **12 units per second**.

q: A 2 m tall person walks away from a 6 m tall lamp post at 1.5 m per second. How fast does their shadow grow?
answer: Let x be the distance from the post and s the shadow's length. The light ray makes two similar triangles: $\dfrac{6}{x + s} = \dfrac{2}{s}$. Cross-multiply: $6s = 2x + 2s$, so $s = \dfrac{x}{2}$. Then $\dfrac{ds}{dt} = \dfrac{1}{2} \cdot 1.5 =$ **0.75 m per second**, at every moment.

q: Water pours into a cone-shaped tank, point down, at 2 m³ per minute. The tank's radius is always half its depth, so the water's volume is $V = \dfrac{\pi h^3}{12}$ when it is h metres deep. How fast is the water rising when it is 4 m deep?
answer: $\dfrac{dV}{dt} = \dfrac{3\pi h^2}{12}\dfrac{dh}{dt} = \dfrac{\pi h^2}{4}\dfrac{dh}{dt}$. So $2 = \dfrac{\pi \cdot 16}{4}\dfrac{dh}{dt} = 4\pi\dfrac{dh}{dt}$, giving $\dfrac{dh}{dt} = \dfrac{1}{2\pi} \approx$ **0.16 m per minute**.

q: A student wants the area's rate for a ripple when $r = 10$. They write $A = \pi \cdot 10^2 = 100\pi$, then take the derivative and get 0. What went wrong?
answer: **They plugged in the number too early.** $r = 10$ is true at one instant only. Putting it in first turns A into a constant, whose derivative is always 0. Take the derivative of $A = \pi r^2$ first, giving $\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}$, and only then put $r = 10$ in.
:::
