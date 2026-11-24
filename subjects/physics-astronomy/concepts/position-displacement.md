---
id: position-displacement
title: Position, distance and displacement
prereqs: [vectors, units]
big: Position says where something is, measured from a chosen zero point; displacement is how far and which way its position changed, while distance is how much ground it covered.
recap: Position x is measured from a chosen zero, with + for one direction and − for the other. Displacement is the change in position, $\Delta x = x_{\text{end}} - x_{\text{start}}$; it is a vector, can be negative, and ignores the path. Distance is the total length travelled, a scalar that is never negative.
check:
  q: A car starts at x = 2 m, drives to x = 10 m, then backs up to x = 6 m. What is its displacement?
  options: ["4 m", "12 m", "6 m", "−4 m"]
  answer: 0
  why: Displacement is end minus start: $6 - 2 = 4$ m. 12 m is the distance, $8 + 4$, which counts every metre driven. 6 m is the end position, not the change. −4 m is start minus end, the wrong way round.
---

## Where is it?

To say where something is, you need a starting mark. Put a zero on a straight road at a lamp post, and call east positive. Then:

| Thing | Where it is | Position x |
|---|---|---|
| a bench | 5 m east of the post | +5 m |
| a tree | 3 m west of the post | −3 m |
| the post itself | right there | 0 m |

*Notice: the minus sign does not mean "less than nothing". It means "on the other side of zero".*

The zero point is called the {{origin|origin}}. You choose it, and you choose which way is positive. Different choices give different positions for the same bench, but as long as you stick with one choice, every answer comes out the same.

## Displacement: the change in position

{{displacement|Displacement}} is how far, and which way, something's position changed. It is end minus start:

$$\Delta x = x_{\text{end}} - x_{\text{start}}$$

The symbol Δ is the Greek capital letter delta. In physics it means "change in". So $\Delta x$ is said "delta x" and means "change in x".

Walk from the tree (−3 m) to the bench (+5 m): $\Delta x = 5 - (-3) = 8$ m. Walk back from the bench to the tree: $\Delta x = -3 - 5 = -8$ m. The size is the same. The sign says which way.

Displacement is a [[vectors|vector]]. On a straight line, the sign is its direction.

## Distance: the ground covered

Distance is the total length of the path. It is a scalar, so it has no direction and is never negative.

| Trip | Distance | Displacement |
|---|---|---|
| walk 5 m east | 5 m | +5 m |
| walk 5 m east, then 2 m west | 7 m | +3 m |
| walk 800 m to a shop and back | 1600 m | 0 m |

*Notice: distance adds up every step. Displacement only compares the start and the end.*

**Why have both?** They answer different questions. Distance tells you how far your feet walked, which is what tires you out. Displacement tells you where you ended up compared with where you began, which is what the laws of motion care about.

The size of a displacement can never be more than the distance. The straight line from start to end is the shortest possible path.

## Displacement in two directions

On a flat field, use two numbers, x (east) and y (north). The displacement is a vector with two parts, and its size comes from the Pythagorean theorem.

Walk 3 m east and 4 m north: the displacement is $(3, 4)$ m, which is 5 m long. The distance walked is $3 + 4 = 7$ m.

:::example
title: A lift starts at the 2nd floor, 6 m above the ground. It goes up to the 7th floor (21 m), then down to the 4th floor (12 m). Find the distance it travels and its displacement. Take up as positive.

1. Distance going up: $21 - 6 = 15$ m.
   why: Distance adds up the length of each part of the trip.
   uses: []

2. Distance going down: $21 - 12 = 9$ m. Total distance: $15 + 9 = 24$ m.
   why: Distance is never negative, so the downward part also adds.
   uses: []

3. Displacement: end minus start, $12 - 6 = +6$ m.
   why: Displacement ignores the path and compares only where it started and where it stopped.
   uses: [units]

4. The lift travelled **24 m**, and its displacement is **6 m upward**.
   why: The plus sign means up, because we chose up as positive.
   uses: []
:::

:::practice
q: You walk 5 m right, then 2 m left. Find your distance and your displacement.
answer: Distance: $5 + 2 =$ **7 m**. Displacement, with right as positive: $+5 - 2 =$ **+3 m**, 3 m to the right.
:::

:::problems
q: An object moves from x = 3 m to x = 8 m. Find its displacement.
answer: $8 - 3 =$ **+5 m**.

q: An object moves from x = 8 m to x = 3 m. Find its displacement.
answer: $3 - 8 =$ **−5 m**. Same size, opposite direction.

q: An object moves from x = −4 m to x = 6 m. Find its displacement.
answer: $6 - (-4) =$ **+10 m**.

q: An object moves from x = −2 m to x = −9 m. Find its displacement.
answer: $-9 - (-2) =$ **−7 m**.

q: The origin is a tree and east is positive. You stand 5 m west of the tree. What is your position?
answer: West is the negative direction: **x = −5 m**.

q: A car starts at x = 2 m, drives to x = 10 m, then backs up to x = 6 m. Find the distance it travels.
answer: $8 + 4 =$ **12 m**.

q: You walk 800 m to a shop and back home. Find the distance and the displacement.
answer: **Distance 1600 m. Displacement 0 m.** You ended where you began.

q: A ball moves from x = 3 m to x = 8 m. Someone moves the origin 10 m, so the same points are now x = 13 m and x = 18 m. Does the displacement change?
answer: $18 - 13 = 5$ m, the same as $8 - 3$. **No.** Moving the origin changes positions but not changes in position.

q: Can the size of a displacement ever be bigger than the distance travelled?
answer: **No.** A straight line is the shortest path, so the distance is always at least as big as the size of the displacement.

q: An ant walks 3 m east, then 4 m north. Find the distance and the size of the displacement.
answer: Distance $3 + 4 =$ **7 m**. Displacement $\sqrt{9 + 16} =$ **5 m**, about 53° north of east.

q: A point moves from (1, 2) m to (4, 6) m. Find its displacement as a vector, and its size.
answer: $(4 - 1,\ 6 - 2) =$ **(3, 4) m**, with size **5 m**.

q: A swimmer swims 4 lengths of a 50 m pool, ending at the same end they started from. Find the distance and displacement.
answer: **Distance 200 m. Displacement 0 m.**

q: A runner does 3 lengths of a 100 m straight track, starting at one end. Find the distance and displacement.
answer: Distance $3 \times 100 =$ **300 m**. After 3 lengths the runner is at the far end: displacement **100 m**, toward the far end.
:::
