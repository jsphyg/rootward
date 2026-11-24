---
id: contact-forces
title: Normal force and tension
prereqs: [newtons-third-law, weight]
big: When things touch, a surface pushes straight back on whatever presses on it (the normal force), and a rope pulls along its length (tension); each one grows to whatever size the situation needs.
recap: The normal force is a surface's push, straight out from the surface. On a flat floor with nothing else pushing up or down, it equals the weight. Tension is the pull of a rope or cable, along its length, and is the same all along a light rope. Neither has a fixed size: work it out from the other forces and the acceleration.
check:
  q: A 10 kg box rests on a flat floor. What is the normal force on it?
  options: ["98 N upward", "10 N upward", "98 N downward", "0 N"]
  answer: 0
  why: The box is still, so the forces balance: the floor pushes up as hard as gravity pulls down, $10 \times 9.8 = 98$ N. 10 N mixes up the mass with a force. 98 N downward is the box's weight, not the floor's push. 0 N would leave the weight unbalanced, and the box would fall through the floor.
---

## How a floor knows how hard to push

Stand on a floor and it pushes you up with exactly your weight. Put a cat on it and it pushes the cat up with exactly the cat's weight. How does the floor "know"?

The floor squashes very slightly, like a very stiff spring. The harder something presses, the more it squashes, and the harder it pushes back. It settles where its push matches the press.

| What rests on the floor | Weight | Floor's push |
|---|---|---|
| a 4 kg cat | 39 N | 39 N |
| a 60 kg person | 588 N | 588 N |
| a 500 kg piano | 4900 N | 4900 N |

*Notice: the floor's push is not a fixed amount. It matches whatever is needed.*

## The normal force

This push is called the {{normal-force|normal force}}, written N or $F_N$. "Normal" here is an old maths word for "at right angles". The normal force always points straight out of the surface, at right angles to it.

The normal force is **not** always equal to the weight. Work it out from all the forces:

- Press down on a 10 kg box with 20 N: the floor must hold up the weight **and** your push, so $N = 98 + 20 = 118$ N.
- Pull up on the box with 30 N (not enough to lift it): the floor holds the rest, $N = 98 - 30 = 68$ N.
- In a lift speeding up, the floor must push harder than your weight to accelerate you. That is why you feel heavier.

The box also pushes down on the floor with the same size of force. That is the [[newtons-third-law|third-law]] partner of the normal force.

## Tension

{{tension|Tension}} is the pull of a rope, string, chain or cable. It always pulls along the rope, away from the object it is attached to. A rope can only pull, never push.

For a light rope (one whose own mass is small), the tension is the same all along it. A pulley changes the direction of the rope, but not the size of the tension.

Like the normal force, tension is whatever size is needed, up to the rope's breaking point. A lamp hanging still has tension equal to its weight. Lifting the lamp with an upward acceleration needs more.

## Lifts and scales

A bathroom scale measures the normal force on your feet, not your weight directly. In a lift:

| Lift is | Normal force on a 60 kg person | Scale shows |
|---|---|---|
| still or moving steadily | 588 N | your true weight |
| speeding up going up (2 m/s²) | $588 + 60 \times 2 = 708$ N | more |
| slowing down going up (2 m/s² down) | $588 - 120 = 468$ N | less |
| falling freely (cable cut) | 0 | nothing: you feel weightless |

**Why.** With up as positive, the second law says $N - mg = ma$, so $N = mg + ma$. An upward acceleration adds to the normal force; a downward one takes away.

:::example
title: A 60 kg person stands on a scale in a lift that speeds up going upward at 2 m/s². What does the scale read?

1. Free-body diagram of the person: weight $60 \times 9.8 = 588$ N down, normal force N up.
   why: These are the only two forces on the person.
   uses: [weight]

2. The net force is $N - 588$ (up positive), and it must equal $ma = 60 \times 2 = 120$ N.
   why: The person accelerates up with the lift, so the second law applies.
   uses: [newtons-second-law]

3. $N - 588 = 120$, so $N = 708$ N.
   why: Rearrange to find the unknown force.
   uses: []

4. The scale reads **708 N**, more than the person's 588 N weight. They feel heavier.
   why: A scale shows the normal force. Their weight has not changed.
   uses: []
:::

:::practice
q: A rope lifts a 20 kg bucket upward with an acceleration of 0.5 m/s². Find the tension.
answer: $T - 196 = 20 \times 0.5 = 10$, so **T = 206 N**.
:::

:::problems
q: A 10 kg box rests on a flat floor. Find the normal force.
answer: **98 N, upward.**

q: You press down on a 10 kg box with 20 N. Find the normal force from the floor.
answer: $98 + 20 =$ **118 N**.

q: You pull up on a 10 kg box with 30 N, but it does not leave the floor. Find the normal force.
answer: $98 - 30 =$ **68 N**.

q: A 5 kg lamp hangs still from a cable. Find the tension.
answer: $5 \times 9.8 =$ **49 N**.

q: A rope lifts a 20 kg bucket at a steady speed. Find the tension.
answer: Balanced forces: **196 N**.

q: A rope lifts a 20 kg bucket with an upward acceleration of 0.5 m/s². Find the tension.
answer: **206 N.**

q: A 40 kg sign hangs from two vertical ropes that share the load equally. Find the tension in each.
answer: Weight 392 N, split two ways: **196 N each.**

q: A rope can hold at most 500 N. What is the largest mass it can hold still?
answer: $\dfrac{500}{9.8} \approx$ **51 kg**.

q: What is the third-law partner of the floor's normal force on a box?
answer: **The box pushing down on the floor**, with the same size of force.

q: A 60 kg person is in a lift speeding up going upward at 2 m/s². What does the scale read?
answer: $588 + 120 =$ **708 N**.

q: The same lift accelerates at 2 m/s² downward. What does the scale read?
answer: $588 - 120 =$ **468 N**.

q: The lift's cable snaps and it falls freely. What does the scale read, and why?
answer: **0 N.** Person and scale both fall with acceleration g, so the scale does not need to push at all: $N = mg - mg = 0$.
:::
