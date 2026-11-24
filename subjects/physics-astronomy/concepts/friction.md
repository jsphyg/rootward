---
id: friction
title: Friction
prereqs: [contact-forces]
big: Friction is the grip between two surfaces that resists sliding; it grows with how hard the surfaces are pressed together, and it is stronger before something starts sliding than while it slides.
recap: Friction acts along a surface, against sliding. Sliding (kinetic) friction is $f = \mu_k N$, where N is the normal force and $\mu_k$ is a number for that pair of surfaces. Before sliding starts, static friction matches the push, up to a maximum of $\mu_s N$. Usually $\mu_s$ is bigger than $\mu_k$, so starting is harder than keeping going.
check:
  q: A 10 kg crate slides across a floor. The coefficient of kinetic friction is 0.3. How big is the friction force?
  options: ["29.4 N", "3 N", "98 N", "0.3 N"]
  answer: 0
  why: On a flat floor the normal force equals the weight, $10 \times 9.8 = 98$ N, and $f = \mu_k N = 0.3 \times 98 = 29.4$ N. 3 N multiplies by the mass instead of the normal force. 98 N is the normal force itself. 0.3 N treats the coefficient as a force.
---

## Pushing a heavy box

A 20 kg box sits on a floor. Push it sideways, gently at first, then harder:

| Your push (N) | What the box does | Friction force (N) |
|---|---|---|
| 10 | stays still | 10 |
| 30 | stays still | 30 |
| 49 | just starts to slide | 49 |
| once sliding | keeps sliding with only 39 N of push | 39 |

*Notice: while the box stays still, friction matches your push exactly. It has a limit, though. Once the box breaks free, less push keeps it going.*

## Why surfaces grip

Even smooth-looking surfaces are rough up close, covered in tiny bumps. Where bumps touch, they catch and stick to each other. Pressing the surfaces together harder squashes more bumps into contact, so the grip grows. That is why friction depends on the [[contact-forces|normal force]], how hard the surfaces press.

## Sliding friction

Once an object slides, the {{friction|friction}} force is

$$f_k = \mu_k N$$

The number $\mu_k$ (the Greek letter mu, with k for kinetic, meaning "moving") is the {{coefficient-friction|coefficient of friction}}. It has no units. It depends on the two surfaces:

| Surfaces | $\mu_s$ (static, about) | $\mu_k$ (sliding, about) |
|---|---|---|
| rubber on dry concrete | 1.0 | 0.8 |
| wood on wood | 0.5 | 0.3 |
| steel on ice | 0.1 | 0.03 |

*Notice: static is bigger than sliding in every row. Rubber on concrete grips about 30 times better than steel on ice.*

Sliding friction points against the direction of sliding, whatever the speed.

## Static friction

Before anything slides, {{static-friction|static friction}} holds it in place. It is not a fixed size. It matches whatever force is trying to make the surfaces slide, up to a maximum:

$$f_s \le \mu_s N$$

If the push is bigger than $\mu_s N$, the object starts to slide, and kinetic friction takes over. For the 20 kg box, $N = 196$ N; with $\mu_s = 0.25$ the most static friction can give is 49 N, and with $\mu_k = 0.2$ sliding friction is $39.2$ N. That is the table above.

**Why starting is harder.** When surfaces sit still, the bumps settle into each other and hold more tightly. Once sliding, they skip across the tops and catch less.

## Friction is useful

Friction is not only a nuisance. You walk because static friction stops your foot slipping backward; the ground's grip pushes you forward. Car tyres, brakes, knots and screws all rely on friction. On ice, where friction is tiny, walking and braking both become hard.

:::example
title: A 15 kg box is pulled across a floor with a horizontal force of 60 N. The coefficient of kinetic friction is 0.3. Find its acceleration.

1. Normal force: the floor is flat and nothing else pushes up or down, so $N = mg = 15 \times 9.8 = 147$ N.
   why: Friction depends on the normal force, so find it first.
   uses: [contact-forces]

2. Friction: $f_k = \mu_k N = 0.3 \times 147 = 44.1$ N, backward.
   why: The box is sliding, so kinetic friction applies, against the motion.
   uses: []

3. Net force: $60 - 44.1 = 15.9$ N forward.
   why: The pull and friction act along the same line in opposite directions.
   uses: [force]

4. Acceleration: $a = \dfrac{15.9}{15} \approx$ **1.06 m/s²**.
   why: Newton's second law, using the net force.
   uses: [newtons-second-law]
:::

:::practice
q: How hard must you push a 20 kg box to keep it sliding at a steady speed, if $\mu_k = 0.25$?
answer: Steady speed means balanced forces, so the push equals friction: $0.25 \times 20 \times 9.8 =$ **49 N**.
:::

:::problems
q: A 10 kg crate slides on a floor with $\mu_k = 0.3$. Find the friction force.
answer: $0.3 \times 98 =$ **29.4 N**.

q: The same crate is pushed with 50 N. Find its acceleration.
answer: Net $50 - 29.4 = 20.6$ N. $a = \dfrac{20.6}{10} =$ **2.06 m/s²**.

q: A box presses on a floor with a normal force of 200 N, and $\mu_s = 0.4$. What is the most static friction can give?
answer: $0.4 \times 200 =$ **80 N**.

q: You push that box with 60 N. Does it move? How big is the friction force?
answer: 60 N is below 80 N, so **it stays still**, and static friction is **60 N**, matching the push.

q: You push it with 90 N. Does it move?
answer: **Yes.** 90 N is more than the 80 N static friction can hold.

q: How hard must you push a 20 kg box to keep it sliding steadily, with $\mu_k = 0.25$?
answer: **49 N.**

q: A 50 kg crate slides with a friction force of 98 N. Find $\mu_k$.
answer: $N = 490$ N. $\mu_k = \dfrac{98}{490} =$ **0.2**.

q: Why is it easier to keep a heavy box sliding than to start it moving?
answer: **$\mu_k$ is smaller than $\mu_s$**, so sliding friction is less than the most static friction can give.

q: You stack a second box on top of the first. What happens to the friction force when you slide them?
answer: **It increases.** The normal force goes up, and friction is proportional to it.

q: When you walk, which way does friction from the ground act on your foot?
answer: **Forward.** Your foot pushes back on the ground, and friction stops it slipping back, pushing you forward.

q: A car skids with locked wheels on a road with $\mu_k = 0.7$. Find its deceleration.
answer: $f = \mu_k mg$, so $a = \dfrac{\mu_k mg}{m} = \mu_k g = 0.7 \times 9.8 \approx$ **6.86 m/s²**. The mass cancels.

q: That car was moving at 20 m/s. How far does it skid?
answer: $0 = 400 - 2 \times 6.86 \times s$, so $s = \dfrac{400}{13.72} \approx$ **29.2 m**.

q: A hockey puck slides at 10 m/s on ice with $\mu_k = 0.05$. How far does it go before stopping?
answer: $a = 0.05 \times 9.8 = 0.49$ m/s². $s = \dfrac{100}{2 \times 0.49} \approx$ **102 m**.

q: A 30 kg sled is pulled across snow with a horizontal 50 N force. $\mu_k = 0.1$. Find its acceleration.
answer: Friction $0.1 \times 30 \times 9.8 = 29.4$ N. Net $50 - 29.4 = 20.6$ N. $a = \dfrac{20.6}{30} \approx$ **0.69 m/s²**.
:::
