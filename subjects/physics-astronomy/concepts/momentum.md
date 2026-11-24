---
id: momentum
title: Momentum
prereqs: [newtons-second-law]
big: Momentum is mass times velocity, a measure of how hard a moving object is to stop; a force changes momentum at a rate equal to the force.
recap: Momentum is $p = mv$, in kg·m/s. It is a vector, pointing the way the object moves, so direction matters: take one direction as positive. Newton's second law can be written $F = \dfrac{\Delta p}{\Delta t}$: the net force equals the rate of change of momentum. A bounce changes momentum more than a stop, because the direction reverses.
check:
  q: A 0.5 kg ball moves at 4 m/s. What is its momentum?
  options: ["2 kg·m/s", "8 kg·m/s", "4 kg·m/s", "0.125 kg·m/s"]
  answer: 0
  why: $p = mv = 0.5 \times 4 = 2$ kg·m/s. 8 multiplies the mass by the speed squared. 4 is the kinetic energy in joules, $\tfrac{1}{2}mv^2$. 0.125 divides the mass by the speed.
---

## Hard to stop

Which is harder to stop: a bicycle rolling at walking pace, or a lorry rolling at walking pace? The lorry. Which is harder to stop: a cricket ball tossed gently, or the same ball bowled fast? The fast one. Both mass and speed make something hard to stop. {{momentum|Momentum}} combines them.

| Object | Mass | Velocity | Momentum |
|---|---|---|---|
| bowled cricket ball | 0.16 kg | 40 m/s | 6.4 kg·m/s |
| walking person | 70 kg | 1.5 m/s | 105 kg·m/s |
| car | 1000 kg | 20 m/s | 20,000 kg·m/s |
| lorry, slow | 10,000 kg | 2 m/s | 20,000 kg·m/s |

*Notice: a slow lorry can have as much momentum as a fast car.*

## The formula

$$p = mv$$

The unit is kg·m/s. Momentum is a [[vectors|vector]]: it points the same way as the velocity. In one dimension, pick a positive direction. Something moving the other way has negative momentum.

## Momentum and kinetic energy

Both depend on mass and speed, but differently:

| | Momentum | Kinetic energy |
|---|---|---|
| formula | $mv$ | $\tfrac{1}{2}mv^2$ |
| double the speed | 2 times | 4 times |
| has a direction? | yes | no |

## Force changes momentum

Newton's [[newtons-second-law|second law]] says $F = ma$, and acceleration is change in velocity over time. So

$$F = m\frac{\Delta v}{\Delta t} = \frac{\Delta (mv)}{\Delta t} = \frac{\Delta p}{\Delta t}$$

The net force on an object equals how fast its momentum changes. This is how Newton himself stated his second law.^[n_newton_momentum]

## Bounces change momentum most

A ball hits a wall. If it stops dead, its momentum drops to zero. If it bounces back at the same speed, its momentum goes from $+mv$ to $-mv$: a change of $2mv$, twice as much. So a bounce needs twice the force from the wall, over the same time.

:::example
title: A 0.2 kg ball hits a wall at 5 m/s and bounces straight back at 5 m/s. Find its change in momentum.

1. Choose toward the wall as positive. Before: $p = 0.2 \times 5 = +1$ kg·m/s.
   why: Momentum is a vector, so pick a direction first.
   uses: [vectors]

2. After: moving away, so $p = 0.2 \times (-5) = -1$ kg·m/s.
   why: The opposite direction gets a minus sign.
   uses: []

3. Change: $\Delta p = -1 - (+1) = -2$ kg·m/s.
   why: Change is after minus before.
   uses: []

4. **2 kg·m/s, pointing away from the wall.** If the ball had just stopped, the change would have been only 1 kg·m/s.
   why: The minus sign says the change points away from the wall, which is the way the wall pushed.
   uses: [newtons-second-law]
:::

:::practice
q: A 60 kg runner moves at 5 m/s. What is the runner's momentum?
answer: $60 \times 5 =$ **300 kg·m/s**.
:::

:::problems
q: Find the momentum of a 2 kg object at 3 m/s.
answer: **6 kg·m/s.**

q: Find the momentum of a 1500 kg car at 20 m/s.
answer: **30,000 kg·m/s.**

q: Find the momentum of a 0.15 kg ball at 40 m/s.
answer: **6 kg·m/s.**

q: A 0.05 kg ball has 1.5 kg·m/s of momentum. How fast is it going?
answer: $v = \dfrac{1.5}{0.05} =$ **30 m/s**.

q: An object moving at 4 m/s has 120 kg·m/s of momentum. Find its mass.
answer: $\dfrac{120}{4} =$ **30 kg**.

q: An object's speed doubles. What happens to its momentum? Its kinetic energy?
answer: **Momentum doubles; kinetic energy goes up 4 times.**

q: A 2 kg cart moves right at 3 m/s and a 3 kg cart moves left at 2 m/s. Find their total momentum.
answer: Right positive: $6 + (-6) =$ **0**.

q: A 0.2 kg ball at 5 m/s hits a wall and stops. Find the change in momentum.
answer: **1 kg·m/s**, pointing away from the wall.

q: A 0.1 kg ball hits the floor at 6 m/s and bounces up at 4 m/s. Find the change in momentum.
answer: Down positive: $0.1 \times (-4) - 0.1 \times 6 = -0.4 - 0.6 = -1$, so **1 kg·m/s upward**.

q: A 1000 kg car speeds up from 0 to 20 m/s in 10 s. Find the net force using momentum.
answer: $\Delta p = 20{,}000$ kg·m/s. $F = \dfrac{20{,}000}{10} =$ **2000 N**, the same as $ma = 1000 \times 2$.

q: A 1000 kg car at 20 m/s and a 10,000 kg lorry at 2 m/s. Which has more momentum? Which has more kinetic energy?
answer: **Equal momentum** (20,000 kg·m/s each). **The car has 10 times the kinetic energy:** 200,000 J against 20,000 J.

q: Show that kg·m/s is the same unit as N·s.
answer: $1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$, so $1\text{ N} \cdot \text{s} = 1\text{ kg} \cdot \text{m/s}$. **They match.**
:::
