---
id: inclined-planes
title: Slopes and inclined planes
prereqs: [friction]
big: On a slope, split an object's weight into a part that pulls it down the slope and a part that presses it into the slope; then the usual force rules work along each direction.
recap: On a slope at angle θ, the weight mg splits into $mg\sin\theta$ down the slope and $mg\cos\theta$ into the slope. The normal force is $N = mg\cos\theta$. With no friction, the acceleration down the slope is $g\sin\theta$. With sliding friction, $a = g(\sin\theta - \mu_k\cos\theta)$.
check:
  q: A 10 kg box sits on a smooth 30° slope. How big is the part of its weight that pulls it down the slope?
  options: ["49 N", "84.9 N", "98 N", "0 N"]
  answer: 0
  why: The part along the slope is $mg\sin\theta = 98 \times \sin 30° = 98 \times 0.5 = 49$ N. 84.9 N is $mg\cos 30°$, the part pressing into the slope. 98 N is the whole weight, which points straight down, not along the slope. 0 N would mean the box has no reason to slide, which is only true on flat ground.
---

## Steeper means faster

Let a cart roll down smooth ramps of different steepness:

| Ramp angle | Acceleration down the ramp (m/s²) |
|---|---|
| 0° (flat) | 0 |
| 10° | 1.7 |
| 30° | 4.9 |
| 60° | 8.5 |
| 90° (a cliff) | 9.8 |

*Notice: a flat ramp gives no acceleration, and a vertical "ramp" gives free fall. Every slope in between gives part of g.*

## Tilt the axes

On a slope, it is easiest to measure directions **along** the slope and **into** the slope, instead of across and up. The motion is along the slope, so one direction does all the work.

Weight points straight down, which is neither of those. So split it into [[vector-components|components]]. For a slope at angle θ:

$$\text{down the slope: } mg\sin\theta \qquad \text{into the slope: } mg\cos\theta$$

**Why sine and cosine.** The angle between the weight (straight down) and the line straight into the slope is the same as the slope's angle θ. The weight is the hypotenuse. The part into the slope is next to that angle, so it uses cosine. The part along the slope is across from it, so it uses sine. A sense check: at θ = 0, $\sin 0 = 0$, so nothing pulls along a flat floor, and $\cos 0 = 1$, so all the weight presses into it.

## Into the slope: the normal force

The object does not sink into the slope or float off it, so the forces into the slope balance. The [[contact-forces|normal force]] matches the into-the-slope part of the weight:

$$N = mg\cos\theta$$

This is less than the weight. A steeper slope presses less, so friction on it is weaker too.

## Along the slope: the motion

With no friction, the only force along the slope is $mg\sin\theta$. So

$$a = \frac{mg\sin\theta}{m} = g\sin\theta$$

The mass cancels, as it does in free fall.

With sliding friction, friction $\mu_k N = \mu_k mg\cos\theta$ acts up the slope, against the sliding:

$$a = g\sin\theta - \mu_k g\cos\theta = g(\sin\theta - \mu_k\cos\theta)$$

## When does it start to slip?

An object sitting still on a slope is held by static friction. As the slope gets steeper, the pull down the slope grows and the most friction can give shrinks. It slips when $mg\sin\theta = \mu_s mg\cos\theta$, which simplifies to

$$\tan\theta = \mu_s$$

So a box on a slope with $\mu_s = 0.5$ starts to slip at $\tan^{-1}(0.5) \approx 26.6°$, whatever its mass.

:::example
title: A box slides down a 30° slope. The coefficient of kinetic friction is 0.2. Find its acceleration.

1. Along the slope, the weight pulls down with $mg\sin 30° = 0.5\,mg$.
   why: This is the part of gravity that drives the sliding.
   uses: [vector-components]

2. Normal force: $N = mg\cos 30° \approx 0.866\,mg$. Friction: $\mu_k N = 0.2 \times 0.866\,mg \approx 0.173\,mg$, up the slope.
   why: Friction depends on the normal force, which is less than the weight on a slope.
   uses: [friction]

3. Net force down the slope: $0.5\,mg - 0.173\,mg = 0.327\,mg$.
   why: The two forces along the slope point opposite ways.
   uses: []

4. $a = \dfrac{0.327\,mg}{m} = 0.327 \times 9.8 \approx$ **3.2 m/s²** down the slope. The mass was never needed.
   why: Newton's second law; m cancels, as it does whenever weight and friction are the only forces.
   uses: [newtons-second-law]
:::

:::practice
q: A cart rolls down a smooth 30° ramp. Find its acceleration.
answer: $a = g\sin 30° = 9.8 \times 0.5 =$ **4.9 m/s²**.
:::

:::problems
q: A 10 kg box is on a 30° slope. Find the parts of its weight along the slope and into the slope.
answer: Along: $98\sin 30° =$ **49 N**. Into: $98\cos 30° \approx$ **84.9 N**.

q: Find the normal force on a 5 kg block on a 20° slope.
answer: $N = 5 \times 9.8 \times \cos 20° \approx$ **46.0 N**.

q: A cart rolls down a smooth 10° ramp. Find its acceleration.
answer: $9.8\sin 10° \approx$ **1.70 m/s²**.

q: A cart rolls down a smooth 30° ramp. Find its acceleration.
answer: **4.9 m/s².**

q: What is the acceleration on a smooth ramp at 0°, and at 90°?
answer: **0 and 9.8 m/s².** Flat ground and free fall.

q: A 4 kg box sits still on a 25° slope. How big is the static friction force, and which way does it act?
answer: It balances the pull down the slope: $4 \times 9.8 \times \sin 25° \approx$ **16.6 N, up the slope**.

q: A box sits on a slope with $\mu_s = 0.5$. At what angle does it start to slip?
answer: $\tan\theta = 0.5$, so **θ ≈ 26.6°**.

q: A box slides down a 30° slope with $\mu_k = 0.2$. Find its acceleration.
answer: $9.8(0.5 - 0.2 \times 0.866) \approx$ **3.2 m/s²**.

q: At what angle does a box with $\mu_k = 0.3$ slide down at a steady speed?
answer: Steady means $\sin\theta = \mu_k\cos\theta$, so $\tan\theta = 0.3$: **θ ≈ 16.7°**.

q: How hard must you push a 10 kg box up a smooth 20° slope (pushing along the slope) to move it at a steady speed?
answer: Balance the pull down the slope: $98\sin 20° \approx$ **33.5 N**.

q: The same push, but now the 30° slope has $\mu_k = 0.2$ and the box moves up at a steady speed. How hard must you push?
answer: Friction now acts down the slope too: $98\sin 30° + 0.2 \times 98\cos 30° = 49 + 17.0 \approx$ **66 N**.

q: A skier starts from rest and slides 50 m down a smooth 30° slope. How fast are they going at the bottom?
answer: $a = 4.9$ m/s². $v^2 = 2 \times 4.9 \times 50 = 490$, so **v ≈ 22.1 m/s**.
:::
