---
id: relative-motion
title: Relative motion
prereqs: [velocity, vector-addition]
big: A velocity is always measured by someone, and observers moving differently measure different velocities; to switch from one observer to another, add the velocities as vectors.
recap: Velocity depends on the observer, called the frame of reference. The velocity of A relative to the ground is A's velocity relative to B plus B's velocity relative to the ground: $\vec{v}_{A,\text{ground}} = \vec{v}_{A,B} + \vec{v}_{B,\text{ground}}$. In a line, same directions add and opposite directions subtract; at angles, add them as vectors.
check:
  q: You walk toward the front of a train at 1 m/s. The train moves at 20 m/s. How fast are you moving relative to the ground?
  options: ["21 m/s", "19 m/s", "20 m/s", "1 m/s"]
  answer: 0
  why: Your velocity relative to the ground is your velocity relative to the train plus the train's velocity: $1 + 20 = 21$ m/s. 19 m/s is for walking toward the back. 20 m/s leaves out your walking. 1 m/s is your speed as seen by someone sitting on the train.
---

## Who is watching?

You walk toward the front of a train at 1 m/s while the train moves at 20 m/s. How fast are you going?

| Who is watching | What they see you doing |
|---|---|
| a passenger sitting on the train | walking forward at 1 m/s |
| a person standing beside the track | moving forward at 21 m/s |
| a driver in a car alongside, at 20 m/s | moving forward at 1 m/s |

*Notice: there is no single "true" velocity. Each answer is right for the person giving it.*

The point of view you measure from is called a {{frame|frame of reference}}. Usually it is the ground, and we do not say so. But any moving thing can be a frame.

## Adding velocities

To get from one frame to another, add:

$$\vec{v}_{A,\text{ground}} = \vec{v}_{A,B} + \vec{v}_{B,\text{ground}}$$

Read $\vec{v}_{A,B}$ as "the velocity of A, as seen from B". For the train: you relative to the ground = you relative to the train + the train relative to the ground = $1 + 20 = 21$ m/s.

**Why it works.** In one second, the train carries you 20 m along the track, and you walk 1 m along the train. Your total displacement over the ground is 21 m, so your velocity is 21 m/s. Displacements add, so velocities add.

## In a straight line

Choose a positive direction, and give each velocity a sign:

- Walk toward the back of the train at 1 m/s: $-1 + 20 = 19$ m/s.
- Two cars on a road, at 30 m/s and 25 m/s in the same direction: the faster one gains on the slower at $30 - 25 = 5$ m/s.
- Two cars heading toward each other at 25 m/s and 20 m/s: they close the gap at $25 + 20 = 45$ m/s.

The velocity of B as seen by A is $\vec{v}_B - \vec{v}_A$, both measured from the ground. You subtract your own velocity, because you see everything as if you were standing still.

## At an angle

When the velocities are not along one line, add them as [[vector-addition|vectors]]. A boat aims straight across a river at 4 m/s (relative to the water), while the water flows downstream at 3 m/s. Relative to the bank, the boat moves at

$$\sqrt{4^2 + 3^2} = 5 \text{ m/s}$$

at $\tan^{-1}\!\left(\frac{3}{4}\right) \approx 37°$ downstream from straight across.

The same idea explains why a plane's ground speed differs from its airspeed, and why rain seems to slant when you run through it.^[n_galilean]

:::example
title: A boat crosses a river 60 m wide, aiming straight across at 4 m/s through the water. The current flows at 3 m/s. How long does the crossing take, and how far downstream does the boat land?

1. Split the motion into across and downstream. Across: 4 m/s. Downstream: 3 m/s.
   why: The current flows along the river, at right angles to the aim, so the two parts do not affect each other.
   uses: [vector-addition]

2. Time to cross: only the across part gets the boat to the other side. $t = \dfrac{60}{4} = 15$ s.
   why: The current pushes sideways, so it does not speed up or slow down the crossing.
   uses: [velocity]

3. Drift: in those 15 s the current carries the boat $3 \times 15 = 45$ m downstream.
   why: Displacement is velocity times time, for each direction separately.
   uses: []

4. The crossing takes **15 s**, and the boat lands **45 m downstream**. Check: its speed over the ground is 5 m/s, and $5 \times 15 = 75$ m, which is $\sqrt{60^2 + 45^2}$.
   why: Both routes give the same total path, so the answer holds together.
   uses: []
:::

:::practice
q: A plane flies north at 250 km/h through the air. A wind blows from the north at 50 km/h. What is its speed over the ground?
answer: The wind blows toward the south, against the plane: $250 - 50 =$ **200 km/h north**.
:::

:::problems
q: You walk toward the back of a train at 1 m/s. The train moves at 20 m/s. Find your velocity relative to the ground.
answer: $-1 + 20 =$ **19 m/s** forward.

q: A ball is thrown forward at 10 m/s from a train moving at 20 m/s. How fast does it move relative to the ground?
answer: $10 + 20 =$ **30 m/s**.

q: Car A moves at 30 m/s and car B at 25 m/s, in the same direction. How fast does A gain on B?
answer: $30 - 25 =$ **5 m/s**.

q: Two cars drive toward each other at 25 m/s and 20 m/s. How fast does the gap close?
answer: $25 + 20 =$ **45 m/s**.

q: The two cars in the last problem start 900 m apart. When do they meet?
answer: $\dfrac{900}{45} =$ **20 s**.

q: Car A moves east at 20 m/s. Car B moves west at 15 m/s. What is B's velocity as seen from A? (East positive.)
answer: $v_B - v_A = -15 - 20 =$ **−35 m/s**, so 35 m/s west.

q: An escalator moves up at 0.5 m/s. You walk up it at 1 m/s. How fast do you rise? How long for a 30 m escalator?
answer: $1 + 0.5 =$ **1.5 m/s**. $\dfrac{30}{1.5} =$ **20 s**.

q: You walk down an escalator that moves up at 0.5 m/s. You walk at 1 m/s. What is your velocity relative to the ground?
answer: Down positive: $1 - 0.5 =$ **0.5 m/s downward**.

q: A boat moves at 5 m/s in still water. The river flows at 2 m/s. Find its speed going downstream and going upstream.
answer: Downstream: $5 + 2 =$ **7 m/s**. Upstream: $5 - 2 =$ **3 m/s**.

q: A boat aims straight across a river at 4 m/s. The current is 3 m/s. Find the boat's speed relative to the bank.
answer: $\sqrt{16 + 9} =$ **5 m/s**, about 37° downstream from straight across.

q: A river is 60 m wide. A boat aims straight across at 4 m/s, and the current is 3 m/s. How far downstream does it land?
answer: Crossing takes $\frac{60}{4} = 15$ s. Drift: $3 \times 15 =$ **45 m**.

q: Rain falls straight down at 8 m/s. You run at 6 m/s. How fast does the rain hit you, and at what angle from straight down?
answer: Relative to you, the rain also moves backward at 6 m/s. $\sqrt{64 + 36} =$ **10 m/s**, at $\tan^{-1}\!\left(\frac{6}{8}\right) \approx$ **37° from vertical**, slanting toward your front.

q: A passenger on a train sees a ball sitting still on the table. The train moves at 25 m/s. What is the ball's velocity relative to the ground?
answer: $0 + 25 =$ **25 m/s**, the same as the train.
:::
