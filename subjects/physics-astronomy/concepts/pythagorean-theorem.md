---
id: pythagorean-theorem
title: The Pythagorean theorem
prereqs: []
big: In any right triangle, the square of the longest side equals the sum of the squares of the other two sides, so you can find any side from the other two.
recap: In a right triangle with short sides a and b and longest side c (the hypotenuse, across from the right angle), $a^2 + b^2 = c^2$. For example, sides 3 and 4 give $9 + 16 = 25$, so $c = 5$. To find a short side, subtract: $a^2 = c^2 - b^2$.
check:
  q: A right triangle has short sides 6 and 8. How long is the longest side?
  options: ["10", "14", "100", "about 5.3"]
  answer: 0
  why: $6^2 + 8^2 = 36 + 64 = 100$, and $\sqrt{100} = 10$. 14 adds the sides without squaring. 100 is $c^2$; it forgets the square root. About 5.3 is $\sqrt{64 - 36}$, which subtracts when it should add.
---

## Squares on the sides

A {{right-angle|right angle}} is a square corner, 90°. A triangle with one is a right triangle. Its longest side, across from the right angle, is the {{hypotenuse|hypotenuse}}. Call the two shorter sides a and b, and the hypotenuse c.

Square each side and look:

| a | b | c | $a^2$ | $b^2$ | $c^2$ |
|---|---|---|---|---|---|
| 3 | 4 | 5 | 9 | 16 | 25 |
| 5 | 12 | 13 | 25 | 144 | 169 |
| 6 | 8 | 10 | 36 | 64 | 100 |

*Notice: in every row, $a^2 + b^2$ is exactly $c^2$. 9 + 16 = 25, 25 + 144 = 169, 36 + 64 = 100.*

This is the {{pythagoras|Pythagorean theorem}}:

$$a^2 + b^2 = c^2$$

It works for every right triangle, and only for right triangles.

## Why it is true

Draw a big square with sides of length $a + b$. Fit four copies of the triangle inside it, in two different ways:

- **Way 1.** Put one triangle in each corner, each with its right angle in the corner. The gap in the middle is a tilted square with sides c. The gap's area is $c^2$.
- **Way 2.** Pair the triangles into two rectangles, a by b, in opposite corners. The gaps left are a square of side a and a square of side b. The gaps' area is $a^2 + b^2$.

Both ways use the same big square and the same four triangles. So the leftover area must be the same: $c^2 = a^2 + b^2$.

## Finding the longest side

Add the squares, then take the square root. Short sides 5 and 12:

$$c^2 = 25 + 144 = 169 \quad\Longrightarrow\quad c = \sqrt{169} = 13$$

Do not skip the square root. 169 is $c^2$, not c.

## Finding a shorter side

If you know the hypotenuse and one short side, rearrange to subtract. Hypotenuse 10 and one side 6:

$$a^2 = c^2 - b^2 = 100 - 36 = 64 \quad\Longrightarrow\quad a = 8$$

A quick sense check: the hypotenuse is always the longest side. If your "short side" comes out longer than c, you added instead of subtracting.

## Distance between two points

On a grid, the straight-line distance between two points is the hypotenuse of a right triangle. The across distance and the up distance are the short sides.

From (1, 2) to (4, 6): across is $4 - 1 = 3$, up is $6 - 2 = 4$. The distance is $\sqrt{3^2 + 4^2} = 5$.

Physics uses this all the time. Walk 3 km east and then 4 km north, and you end up 5 km from where you started, in a straight line.^[n_3d_pythagoras]

:::example
title: A 5 m ladder leans against a wall. Its foot is 1.4 m from the wall. How high up the wall does it reach?

1. Picture the right triangle: the wall and the ground meet at a right angle. The ladder is the hypotenuse, c = 5. The ground side is 1.4.
   why: The ladder is across from the right angle, so it is the longest side.
   uses: []

2. Use $a^2 = c^2 - b^2$: $a^2 = 25 - 1.96 = 23.04$.
   why: We know the hypotenuse and want a short side, so subtract.
   uses: []

3. $a = \sqrt{23.04} = 4.8$. The ladder reaches **4.8 m** up the wall.
   why: Take the square root to get the side, not its square.
   uses: []

4. Check: $1.4^2 + 4.8^2 = 1.96 + 23.04 = 25 = 5^2$.
   why: Putting the answer back into $a^2 + b^2 = c^2$ confirms it.
   uses: []
:::

:::practice
q: A right triangle has a hypotenuse of 13 and one short side of 5. Find the other side.
answer: $a^2 = 169 - 25 = 144$, so **$a = 12$**.
:::

:::problems
q: Short sides 3 and 4. Find the hypotenuse.
answer: $9 + 16 = 25$: **5**.

q: Short sides 5 and 12. Find the hypotenuse.
answer: $25 + 144 = 169$: **13**.

q: Short sides 8 and 15. Find the hypotenuse.
answer: $64 + 225 = 289$: **17**.

q: Short sides 1 and 1. Find the hypotenuse.
answer: $1 + 1 = 2$: **$\sqrt{2} \approx 1.41$**.

q: Hypotenuse 10, one short side 6. Find the other.
answer: $100 - 36 = 64$: **8**.

q: Hypotenuse 13, one short side 5. Find the other.
answer: $169 - 25 = 144$: **12**.

q: Hypotenuse 7, one short side 3. Find the other.
answer: $49 - 9 = 40$: **$\sqrt{40} \approx 6.32$**.

q: Is a triangle with sides 7, 24 and 25 a right triangle?
answer: $49 + 576 = 625 = 25^2$. **Yes.**

q: Is a triangle with sides 4, 5 and 6 a right triangle?
answer: $16 + 25 = 41$, but $6^2 = 36$. **No.**

q: Find the distance between (1, 2) and (4, 6).
answer: Across 3, up 4: $\sqrt{9 + 16} =$ **5**.

q: Find the distance between (−2, 1) and (4, −7).
answer: Across $4 - (-2) = 6$, down $1 - (-7) = 8$: $\sqrt{36 + 64} =$ **10**.

q: A square has sides of 10 cm. How long is its diagonal?
answer: The diagonal splits it into two right triangles with sides 10 and 10: $\sqrt{200} \approx$ **14.1 cm**.

q: A screen is 48 cm wide and 36 cm tall. How long is its diagonal?
answer: $48^2 + 36^2 = 2304 + 1296 = 3600$: **60 cm**.

q: A 5 m ladder has its foot 3 m from a wall. How high does it reach?
answer: $25 - 9 = 16$: **4 m**.

q: You walk 3 km east, then 4 km north. How far are you from your start, in a straight line?
answer: East and north are at right angles: $\sqrt{9 + 16} =$ **5 km**.
:::
