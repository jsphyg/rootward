---
id: impulse
title: Impulse
prereqs: [momentum]
big: A force acting for a time gives an impulse, force times time, which equals the change in momentum; stretching out the time makes the force smaller.
recap: Impulse is $J = F\Delta t$, in N·s, and it equals the change in momentum: $F\Delta t = \Delta p$. To stop something, the momentum change is fixed, so a longer stopping time means a smaller force. That is how airbags, crumple zones, helmets and bent knees protect you. On a force-time graph, the impulse is the area under the curve.
check:
  q: A steady 20 N force pushes on a cart for 3 s. What impulse does it give?
  options: ["60 N·s", "6.67 N·s", "23 N·s", "0.15 N·s"]
  answer: 0
  why: $J = F\Delta t = 20 \times 3 = 60$ N·s. 6.67 divides force by time. 23 adds them. 0.15 divides time by force.
---

## Catching an egg

Throw a raw egg at a wall and it smashes. Throw it at a loose bedsheet held up by two people and it survives. Either way the egg stops, so its momentum changes by the same amount. The difference is **time**: the sheet stops it slowly.

From the [[momentum|momentum]] page, $F = \dfrac{\Delta p}{\Delta t}$. Multiply both sides by $\Delta t$:

$$F\Delta t = \Delta p$$

The left side is called the {{impulse|impulse}}, J. Its unit is the newton-second, N·s, which is the same as kg·m/s.

## Same change, longer time, smaller force

To stop a 70 kg person moving at 15 m/s, the momentum change is $70 \times 15 = 1050$ kg·m/s, whatever stops them.

| What stops them | Stopping time | Average force |
|---|---|---|
| hard dashboard | 0.01 s | 105,000 N |
| seatbelt | 0.1 s | 10,500 N |
| airbag and seatbelt | 0.2 s | 5250 N |

*Notice: twenty times the stopping time means one twentieth of the force.*

The same idea explains crumple zones in cars, padded gym mats, bike helmets, and why you bend your knees when you land from a jump.

## The other way round

Sometimes you want a **big** momentum change, as when hitting a ball. Then you want a big force for as long as possible. That is why coaches say "follow through": keeping the bat or racket in contact a little longer gives a bigger impulse and a faster ball.

## Changing forces

Real impacts do not have steady forces. The force rises quickly and falls again. Then $F$ in $F\Delta t$ means the **average** force. On a graph of force against time, the impulse is the **area under the curve**.

:::example
title: A 0.15 kg baseball comes in at 40 m/s and is hit straight back at 50 m/s. The bat touches it for 0.0015 s. Find the impulse and the average force.

1. Take the batted direction as positive. Before: $0.15 \times (-40) = -6$ kg·m/s. After: $0.15 \times 50 = 7.5$ kg·m/s.
   why: Momentum is a vector, so direction gives a sign.
   uses: [momentum]

2. Impulse = change in momentum: $7.5 - (-6) = 13.5$ N·s.
   why: $J = \Delta p$. Reversing direction makes the change bigger than either momentum alone.
   uses: []

3. Average force: $F = \dfrac{J}{\Delta t} = \dfrac{13.5}{0.0015} = 9000$ N.
   why: Rearranging $J = F\Delta t$.
   uses: []

4. **Impulse 13.5 N·s; average force 9000 N**, about the weight of a small car, for a thousandth of a second or so.
   why: Comparing with something familiar shows how big impact forces are.
   uses: []
:::

:::practice
q: A 0.5 kg football at rest is kicked with an average force of 100 N for 0.05 s. How fast does it leave the foot?
answer: $J = 100 \times 0.05 = 5$ N·s $= \Delta p$. $v = \dfrac{5}{0.5} =$ **10 m/s**.
:::

:::problems
q: A 50 N force acts for 0.2 s. Find the impulse.
answer: $50 \times 0.2 =$ **10 N·s**.

q: An impulse of 4 N·s acts on a 2 kg cart at rest. How fast does it go?
answer: $v = \dfrac{4}{2} =$ **2 m/s**.

q: A rocket engine pushes with 5000 N for 10 s. Find the impulse.
answer: **50,000 N·s.**

q: A 70 kg person at 15 m/s is stopped by an airbag in 0.2 s. Find the average force.
answer: $\dfrac{1050}{0.2} =$ **5250 N**.

q: A 1000 kg car at 20 m/s hits a wall. It stops in 0.05 s without a crumple zone, or 0.5 s with one. Find the force each way.
answer: $\Delta p = 20{,}000$ kg·m/s. Without: $\dfrac{20{,}000}{0.05} =$ **400,000 N**. With: **40,000 N**, a tenth as much.

q: A 0.06 kg tennis ball arrives at 20 m/s and leaves the racket the other way at 30 m/s. Contact lasts 0.005 s. Find the impulse and average force.
answer: $\Delta p = 0.06 \times (30 + 20) =$ **3 N·s**. $F = \dfrac{3}{0.005} =$ **600 N**.

q: A 0.045 kg golf ball leaves the club at 70 m/s. Contact lasts 0.0005 s. Find the average force.
answer: $\Delta p = 0.045 \times 70 = 3.15$ N·s. $F = \dfrac{3.15}{0.0005} =$ **6300 N**.

q: On a force-time graph, a kick's force rises from 0 to 400 N and falls back to 0, making a triangle 0.02 s wide. Find the impulse.
answer: Area $= \tfrac{1}{2} \times 0.02 \times 400 =$ **4 N·s**.

q: Why do you bend your knees when you land from a jump?
answer: **It makes the stopping time longer**, so the same momentum change needs a smaller force on your legs.

q: Why does an egg survive landing on a sheet but not on a floor?
answer: **The sheet stretches the stopping time**, so the force on the egg is much smaller, though the momentum change is the same.

q: Why does following through help when hitting a ball?
answer: **Longer contact time gives a bigger impulse**, so a bigger momentum change and a faster ball.

q: A 0.4 kg ball hits a wall at 10 m/s and bounces back at 10 m/s. The wall's average force is 200 N. How long is the ball in contact?
answer: $\Delta p = 0.4 \times 20 = 8$ N·s. $\Delta t = \dfrac{8}{200} =$ **0.04 s**.
:::
