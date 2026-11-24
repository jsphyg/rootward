---
id: vector-components
title: Breaking a vector into components
prereqs: [vectors, inverse-trig]
big: Any slanted vector can be split into a sideways part and an up-down part, called its components, and those two parts can be put back together to get the size and angle.
recap: A vector of size A at angle θ above the x direction has components $A_x = A\cos\theta$ (across) and $A_y = A\sin\theta$ (up). Going back: $A = \sqrt{A_x^2 + A_y^2}$ and $\theta = \tan^{-1}\!\left(\dfrac{A_y}{A_x}\right)$.
check:
  q: A rope pulls with a force of 10 N at 30° above the horizontal. What is the horizontal component?
  options: ["about 8.66 N", "5 N", "10 N", "about 11.5 N"]
  answer: 0
  why: Horizontal is the side next to the angle, so use cosine: $10\cos 30° \approx 10 \times 0.866 = 8.66$ N. 5 N is $10\sin 30°$, the vertical part. 10 N is the whole force; a slanted pull puts only part of it sideways. 11.5 N divides by cos 30° instead of multiplying, which gives more than the whole force.
---

## The shadow of an arrow

Hold a stick at a slant in sunlight with the sun straight overhead. Its shadow on the ground is shorter than the stick. Now look at it from the side and its "shadow" on a wall shows how high it reaches.

| Stick angle above the ground | Length of stick | Shadow on the ground | Height reached |
|---|---|---|---|
| 0° | 1 m | 1 m | 0 m |
| 30° | 1 m | 0.87 m | 0.5 m |
| 60° | 1 m | 0.5 m | 0.87 m |
| 90° | 1 m | 0 m | 1 m |

*Notice: as the stick tilts up, the ground part shrinks and the height part grows. The two always make a right triangle with the stick.*

Those two shadows are the vector's {{component|components}}: how much of it points across, and how much points up.

## From size and angle to components

Draw a vector of magnitude A at angle θ above the x direction. It is the hypotenuse of a right triangle. The across part is the side next to θ, and the up part is the side opposite θ. From the definitions of cosine and sine:

$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

**Why it works.** $\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}} = \dfrac{A_x}{A}$. Multiply both sides by A and you get $A_x = A\cos\theta$. The same step with sine gives $A_y$.

A 20 m/s velocity at 30°:

$$A_x = 20\cos 30° \approx 17.3 \text{ m/s} \qquad A_y = 20\sin 30° = 10 \text{ m/s}$$

## Signs tell the direction

Measure θ from the positive x direction (to the right), turning counterclockwise. Then the formulas give the signs on their own:

| Angle | Points | $A_x$ | $A_y$ |
|---|---|---|---|
| between 0° and 90° | right and up | + | + |
| between 90° and 180° | left and up | − | + |
| between 180° and 270° | left and down | − | − |
| between 270° and 360° | right and down | + | − |

12 m/s at 120°: $A_x = 12\cos 120° = -6$ and $A_y = 12\sin 120° \approx 10.4$. The minus says "6 to the left".

Often a problem gives the angle some other way, like "30° below the horizontal, to the left". Then it is easier to use the 30° in the triangle and add the signs yourself from a sketch.

## From components back to size and angle

Going the other way uses the [[pythagorean-theorem|Pythagorean theorem]] for the size and [[inverse-trig|inverse tangent]] for the angle:

$$A = \sqrt{A_x^2 + A_y^2} \qquad \theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)$$

For $(6, 8)$: $A = 10$ and $\theta = \tan^{-1}\!\left(\frac{8}{6}\right) \approx 53.1°$.

**Watch the left side.** If $A_x$ is negative, the calculator's angle is off by 180°. For $(-4, 3)$, $\tan^{-1}\!\left(\frac{3}{-4}\right) \approx -36.9°$, which points right and down. But $(-4, 3)$ points left and up. Add 180° to get $143.1°$. A quick sketch always tells you which is right.

:::example
title: A football is kicked at 25 m/s, at 40° above the ground. How fast is it moving forward, and how fast upward, at the start?

1. Sketch it: the 25 m/s velocity is the hypotenuse. Forward is the side next to the 40° angle. Upward is the side across from it.
   why: Naming the sides tells you which function to use for each.
   uses: [vectors]

2. Forward: $v_x = 25\cos 40° \approx 25 \times 0.766 \approx 19.2$ m/s.
   why: The side next to the angle uses cosine.
   uses: [calculus:trig-basics]

3. Upward: $v_y = 25\sin 40° \approx 25 \times 0.643 \approx 16.1$ m/s.
   why: The side across from the angle uses sine.
   uses: []

4. Check: $\sqrt{19.15^2 + 16.07^2} \approx \sqrt{366.7 + 258.2} \approx \sqrt{625} = 25$. **About 19.2 m/s forward and 16.1 m/s upward.**
   why: The components must rebuild the original size.
   uses: [pythagorean-theorem]
:::

:::practice
q: A sled is pulled with 80 N along a rope at 20° above the ground. Find the forward and upward parts of the pull.
answer: Forward: $80\cos 20° \approx$ **75.2 N**. Upward: $80\sin 20° \approx$ **27.4 N**. Check: $\sqrt{75.18^2 + 27.36^2} \approx 80$.
:::

:::problems
q: Find the components of a vector of size 10 at 0°.
answer: $10\cos 0° = 10$, $10\sin 0° = 0$: **(10, 0)**. It points straight along x.

q: Find the components of a vector of size 10 at 90°.
answer: $10\cos 90° = 0$, $10\sin 90° = 10$: **(0, 10)**. Straight up.

q: Find the components of a vector of size 20 at 30°.
answer: $20\cos 30° \approx 17.32$, $20\sin 30° = 10$: **(17.32, 10)**.

q: Find the components of a vector of size 50 at 60°.
answer: $50\cos 60° = 25$, $50\sin 60° \approx 43.30$: **(25, 43.30)**.

q: Find the components of a vector of size 8 at 45°.
answer: $\cos 45° = \sin 45° \approx 0.707$, so both are $\approx 5.66$: **(5.66, 5.66)**.

q: A 100 N force acts at 25° above the horizontal. Find its components.
answer: $100\cos 25° \approx$ **90.6 N** across, $100\sin 25° \approx$ **42.3 N** up.

q: Find the components of 12 m/s at 120°.
answer: $12\cos 120° = -6$, $12\sin 120° \approx 10.39$: **(−6, 10.39)**, 6 left and about 10.4 up.

q: A vector has components (3, 4). Find its size and angle.
answer: $\sqrt{9 + 16} = 5$ and $\tan^{-1}\!\left(\frac{4}{3}\right) \approx 53.1°$: **5 at 53.1°**.

q: A vector has components (5, 5). Find its size and angle.
answer: $\sqrt{50} \approx 7.07$ and $\tan^{-1}(1) = 45°$: **7.07 at 45°**.

q: A vector has components (12, −5). Find its size and angle.
answer: $\sqrt{144 + 25} = 13$. $\tan^{-1}\!\left(\frac{-5}{12}\right) \approx -22.6°$: **13, at 22.6° below the x direction**.

q: A vector has components (−4, 3). Find its size and angle.
answer: Size $\sqrt{16 + 9} = 5$. The calculator gives $\tan^{-1}\!\left(\frac{3}{-4}\right) \approx -36.9°$, but the vector points left and up, so add 180°: **5 at 143.1°**.

q: A plane flies at 200 km/h, heading 30° east of north. How fast is it going north, and how fast east?
answer: North is next to the 30° angle: $200\cos 30° \approx$ **173 km/h north**. East is across from it: $200\sin 30° =$ **100 km/h east**.

q: A box is pushed with 60 N at 30° below the horizontal (pushing down and forward). Find the forward and downward parts.
answer: Forward: $60\cos 30° \approx$ **52 N**. Downward: $60\sin 30° =$ **30 N** (pressing the box into the floor).

q: A vector has an across part of 0 and an up part of −7. Describe it.
answer: Size 7, pointing **straight down** (at 270°, or −90°).
:::
