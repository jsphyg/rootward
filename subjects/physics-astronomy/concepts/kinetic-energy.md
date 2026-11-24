---
id: kinetic-energy
title: Kinetic energy
prereqs: [work, constant-acceleration]
big: A moving object carries energy because of its motion, $\tfrac{1}{2}mv^2$, and the net work done on it equals exactly how much this energy changes.
recap: Kinetic energy is $KE = \tfrac{1}{2}mv^2$, in joules. Double the mass and it doubles; double the speed and it goes up four times. The work-energy theorem says the net work done on an object equals its change in kinetic energy: $W_{\text{net}} = KE_{\text{after}} - KE_{\text{before}}$.
check:
  q: A 2 kg ball rolls at 3 m/s. What is its kinetic energy?
  options: ["9 J", "6 J", "18 J", "3 J"]
  answer: 0
  why: $KE = \tfrac{1}{2} \times 2 \times 3^2 = \tfrac{1}{2} \times 2 \times 9 = 9$ J. 6 J multiplies mass by speed without squaring. 18 J forgets the half. 3 J forgets to square the speed.
---

## Moving things can do work

A moving hammer drives a nail in. A moving car crumples a wall. A moving ball knocks over pins. Anything that moves can push on something else and move it, so it can do [[work|work]]. That ability is energy, and the energy of motion is called {{kinetic-energy|kinetic energy}}.

| Object | Mass | Speed | Kinetic energy |
|---|---|---|---|
| tennis ball, served | 0.06 kg | 50 m/s | 75 J |
| person jogging | 70 kg | 3 m/s | 315 J |
| car in town | 1000 kg | 10 m/s | 50,000 J |
| same car on a highway | 1000 kg | 30 m/s | 450,000 J |

*Notice: three times the speed gives nine times the energy. Speed matters far more than mass.*

## The formula

$$KE = \tfrac{1}{2}mv^2$$

m is the mass in kilograms and v is the speed in metres per second. The answer is in joules, the same unit as work.

**Where it comes from.** Start an object of mass m from rest and push it with a steady net force F over a distance d. The work done is $W = Fd$. The force gives an acceleration $a = \dfrac{F}{m}$, and from the [[constant-acceleration|constant-acceleration]] equations, starting from rest, $v^2 = 2ad$. So $d = \dfrac{v^2}{2a}$, and

$$W = Fd = ma \times \frac{v^2}{2a} = \tfrac{1}{2}mv^2$$

The work you put in is stored as motion. That stored amount is the kinetic energy.

## Why speed counts twice

Doubling the speed makes the kinetic energy **four** times bigger, because v is squared. That is why speed is so dangerous on roads: a car at twice the speed needs four times the braking distance, because the brakes must remove four times the energy.

| Change | Effect on KE |
|---|---|
| double the mass | 2 times |
| double the speed | 4 times |
| triple the speed | 9 times |
| half the speed | a quarter |

## The work-energy theorem

The same reasoning works when the object is already moving. The **net work** done on an object equals its change in kinetic energy:

$$W_{\text{net}} = KE_{\text{after}} - KE_{\text{before}}$$

Positive net work speeds it up. Negative net work, such as from brakes or friction, slows it down. Zero net work leaves the speed the same, as with the string whirling a ball in a circle.

:::example
title: A 1200 kg car speeds up from 10 m/s to 20 m/s. How much net work was done on it?

1. Kinetic energy before: $\tfrac{1}{2} \times 1200 \times 10^2 = 600 \times 100 = 60{,}000$ J.
   why: Use $\tfrac{1}{2}mv^2$ with the starting speed.
   uses: []

2. Kinetic energy after: $\tfrac{1}{2} \times 1200 \times 20^2 = 600 \times 400 = 240{,}000$ J.
   why: Same formula with the final speed.
   uses: []

3. Net work = change in kinetic energy: $240{,}000 - 60{,}000 = 180{,}000$ J.
   why: The work-energy theorem.
   uses: [work]

4. **180,000 J (180 kJ).** Doubling the speed took three times the car's starting energy, not just the same again, because the energy went up fourfold.
   why: Comparing the numbers shows the effect of squaring.
   uses: []
:::

:::practice
q: A 1000 kg car moves at 20 m/s. What is its kinetic energy?
answer: $\tfrac{1}{2} \times 1000 \times 20^2 = 500 \times 400 =$ **200,000 J** (200 kJ).
:::

:::problems
q: Find the kinetic energy of a 2 kg ball at 3 m/s.
answer: $\tfrac{1}{2} \times 2 \times 9 =$ **9 J**.

q: Find the kinetic energy of a 0.06 kg tennis ball at 50 m/s.
answer: $\tfrac{1}{2} \times 0.06 \times 2500 =$ **75 J**.

q: A 70 kg runner sprints at 8 m/s. Find the kinetic energy.
answer: $\tfrac{1}{2} \times 70 \times 64 =$ **2240 J**.

q: An object's speed doubles. What happens to its kinetic energy?
answer: **It becomes 4 times as big.**

q: An object's mass doubles at the same speed. What happens to its kinetic energy?
answer: **It doubles.**

q: An 8 kg object has 400 J of kinetic energy. How fast is it going?
answer: $400 = \tfrac{1}{2} \times 8 \times v^2 = 4v^2$, so $v^2 = 100$ and **v = 10 m/s**.

q: A 4 kg object has 50 J of kinetic energy. How fast is it going?
answer: $50 = 2v^2$, so $v^2 = 25$ and **v = 5 m/s**.

q: A 0.01 kg bullet flies at 400 m/s. A 1 kg ball rolls at 4 m/s. Which has more kinetic energy?
answer: Bullet: $\tfrac{1}{2} \times 0.01 \times 160{,}000 = 800$ J. Ball: $\tfrac{1}{2} \times 1 \times 16 = 8$ J. **The bullet, by 100 times.**

q: A net force of 12 N pushes a 3 kg cart from rest over 6 m. How fast is it going at the end?
answer: Net work $12 \times 6 = 72$ J, all becoming KE: $72 = \tfrac{1}{2} \times 3 \times v^2$, so $v^2 = 48$ and **v ≈ 6.93 m/s**.

q: A 2 kg object slows from 5 m/s to 3 m/s. How much net work was done on it?
answer: $\tfrac{1}{2} \times 2 \times 9 - \tfrac{1}{2} \times 2 \times 25 = 9 - 25 =$ **−16 J**. Negative, because it slowed down.

q: A 1500 kg car at 20 m/s brakes with a steady 6000 N force. How far does it go before stopping?
answer: KE $= \tfrac{1}{2} \times 1500 \times 400 = 300{,}000$ J. The brakes do $-6000 \times d$ of work, which must remove it all: $d = \dfrac{300{,}000}{6000} =$ **50 m**.

q: The same car is going 40 m/s. How far does it take to stop with the same braking force?
answer: Twice the speed, four times the energy: **200 m**.

q: Show that $\tfrac{1}{2}mv^2$ comes out in joules.
answer: $\text{kg} \times (\text{m/s})^2 = \text{kg} \cdot \text{m}^2/\text{s}^2$, which is **1 J**, as on the work page.
:::
