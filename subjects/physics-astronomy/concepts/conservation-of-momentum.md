---
id: conservation-of-momentum
title: Conservation of momentum
prereqs: [momentum, newtons-third-law]
big: When objects push on each other with no outside force, the total momentum of the group stays the same; what one gains, the other loses.
recap: With no net outside force, the total momentum of a group of objects stays the same: total before = total after. It follows from the third law: the objects push on each other with equal and opposite forces for the same time, so their momentum changes cancel. If everything starts at rest, the total is zero, so the pieces fly apart with momenta that are equal and opposite.
check:
  q: Two skaters stand still on ice, 60 kg and 40 kg. They push apart. The 60 kg skater moves off at 2 m/s. What does the 40 kg skater do?
  options: ["3 m/s the other way", "2 m/s the other way", "1.33 m/s the other way", "3 m/s the same way"]
  answer: 0
  why: The total momentum starts at 0, so it stays 0: $60 \times 2 = 120$, and the other skater needs $-120$: $v = \dfrac{120}{40} = 3$ m/s the opposite way. 2 m/s assumes equal speeds, but the lighter skater moves faster. 1.33 m/s divides the wrong way round, $\frac{40 \times 2}{60}$. "The same way" would make the total 240, not 0.
---

## Pushing apart

Two skaters face each other on smooth ice and push. Both slide off backwards. The lighter one slides faster.

| Skater | Mass | Velocity after | Momentum after |
|---|---|---|---|
| A | 60 kg | +2 m/s | +120 kg·m/s |
| B | 40 kg | −3 m/s | −120 kg·m/s |
| total | | | 0 |

*Notice: they started still, with zero total momentum, and they still have zero total. The two momenta are equal in size and opposite in direction.*

## Why it happens

While they push, A pushes B and B pushes A. By the [[newtons-third-law|third law]], the two forces are equal and opposite. They also last the same time, because the push starts and stops for both at once. So the impulses are equal and opposite, and so are the changes in momentum. Whatever A gains, B loses.

This gives the {{conservation-momentum|law of conservation of momentum}}:

$$\text{total momentum before} = \text{total momentum after}$$

as long as **no net outside force** acts on the group. Forces between the objects inside the group always cancel.

## When it applies

- **Explosions and pushes apart**: a gun and bullet, a cannon, skaters, a firework.
- **Collisions**: cars, balls, billiard balls, covered on the next page.
- **Rockets**: a rocket pushes gas backward, and the gas pushes the rocket forward. It needs nothing to push against, so it works in empty space.

Outside forces such as friction spoil it a little, but during a quick push or crash they are usually small next to the forces between the objects.

:::example
title: A 4 kg rifle fires a 0.01 kg bullet at 400 m/s. How fast does the rifle recoil?

1. Before firing, everything is at rest, so the total momentum is 0.
   why: Nothing is moving yet.
   uses: [momentum]

2. After: bullet $0.01 \times 400 = 4$ kg·m/s forward. The rifle must have $-4$ kg·m/s, so the total stays 0.
   why: Conservation of momentum, with no outside force during the shot.
   uses: [newtons-third-law]

3. Rifle speed: $v = \dfrac{-4}{4} = -1$ m/s.
   why: Momentum divided by mass gives velocity.
   uses: []

4. **1 m/s backward.** The rifle is 400 times heavier than the bullet, so it moves 400 times slower.
   why: Equal momenta mean speed is inversely proportional to mass.
   uses: []
:::

:::practice
q: A 50 kg person steps off a 100 kg boat that was at rest, moving toward the dock at 2 m/s. What does the boat do?
answer: Person: $50 \times 2 = 100$ kg·m/s toward the dock. Boat: $-100$, so $v = \dfrac{-100}{100}$: **1 m/s away from the dock**.
:::

:::problems
q: Skaters of 60 kg and 40 kg push apart from rest. The 60 kg one moves at 2 m/s. Find the other's velocity.
answer: **3 m/s the opposite way.**

q: A 500 kg cannon fires a 5 kg ball at 100 m/s. Find the cannon's recoil speed.
answer: $\dfrac{5 \times 100}{500} =$ **1 m/s**.

q: An 80 kg astronaut floating still throws a 2 kg wrench at 8 m/s. How fast does the astronaut drift?
answer: $\dfrac{2 \times 8}{80} =$ **0.2 m/s**, the opposite way.

q: A spring between two carts at rest is released. The 1 kg cart moves at 3 m/s. How fast does the 3 kg cart move?
answer: $\dfrac{1 \times 3}{3} =$ **1 m/s**, the opposite way.

q: A firework at rest bursts into two pieces: 0.3 kg at 20 m/s and 0.2 kg. Find the speed of the 0.2 kg piece.
answer: $\dfrac{0.3 \times 20}{0.2} =$ **30 m/s**, the opposite way.

q: A 5 kg fish swimming at 1 m/s swallows a 1 kg fish at rest. How fast does the big fish go just after?
answer: $\dfrac{5 \times 1}{6} \approx$ **0.83 m/s**.

q: A 4 kg cart moving at 3 m/s has a 2 kg brick dropped straight down onto it. Find the new speed.
answer: The brick had no sideways momentum: $\dfrac{4 \times 3}{6} =$ **2 m/s**.

q: A 2 kg ball moving at 3 m/s hits a 1 kg ball at rest. Afterwards the 2 kg ball moves at 1 m/s the same way. Find the 1 kg ball's velocity.
answer: Before: 6. After: $2 + 1 \times v = 6$, so **v = 4 m/s**.

q: How can a rocket speed up in empty space, with nothing to push against?
answer: **It pushes gas out backward.** The gas pushes the rocket forward, and the total momentum of rocket plus gas stays the same.

q: A ball falls toward the ground, speeding up. Its momentum grows. Does this break the law?
answer: **No.** Gravity is an outside force on the ball. If you include the Earth in the group, the Earth moves up toward the ball by a tiny amount, and the total stays the same.

q: Two people on a frictionless ice rink pull on a rope between them. Who moves faster?
answer: **The lighter person.** Equal and opposite momenta mean the smaller mass gets the bigger speed.

q: A 70 kg person jumps from a 30 kg canoe at rest, landing on the bank at 3 m/s. Find the canoe's speed.
answer: $\dfrac{70 \times 3}{30} =$ **7 m/s** away from the bank. (In real life, water drag slows it quickly.)
:::
