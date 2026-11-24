---
id: circular-motion
title: Circular motion and centripetal force
prereqs: [newtons-second-law]
big: An object going around a circle at a steady speed is always accelerating toward the centre, by $v^2/r$, so something must pull it inward with a net force of $mv^2/r$.
recap: Moving in a circle of radius r at a steady speed v, an object accelerates toward the centre with $a = \dfrac{v^2}{r}$. That needs a net inward force $F = \dfrac{mv^2}{r}$, called the centripetal force. It is not a new kind of force; tension, friction, gravity or a normal force provides it. For one lap in time T, $v = \dfrac{2\pi r}{T}$.
check:
  q: A 1000 kg car drives around a curve of radius 50 m at a steady 10 m/s. What net force does it need?
  options: ["2000 N toward the centre", "200 N toward the centre", "2000 N away from the centre", "No net force, because its speed is steady"]
  answer: 0
  why: $F = \dfrac{mv^2}{r} = \dfrac{1000 \times 100}{50} = 2000$ N, toward the centre. 200 N forgets to square the speed. The force points in, not out: the feeling of being thrown outward is your body's inertia. A steady speed is not a steady velocity, because the direction keeps changing.
---

## Let go of the string

Swing a ball on a string in a circle, then let go. Which way does the ball fly?

It flies off in a **straight line**, along the direction it was moving at that instant, not outward from the centre. That is Newton's first law: with the string gone, nothing changes its velocity.

So while the string is attached, the string's pull is the only thing bending the path into a circle. The pull points along the string, toward the centre.

## Acceleration toward the centre

At a steady speed, why is there any acceleration? Because velocity is a vector, and its direction keeps turning. Every moment, the velocity gets a small nudge toward the centre.

The size of that acceleration, called {{centripetal|centripetal}} ("centre-seeking") acceleration, is

$$a = \frac{v^2}{r}$$

**Why $v^2$ over r.** Two things set how fast the velocity turns. A faster object has more velocity to turn, **and** it goes around the bend in less time, so it must turn more quickly: two factors of v. A bigger circle bends more gently, so the turning is slower: divide by r.^[n_centripetal_proof]

| Change | Effect on the acceleration |
|---|---|
| double the speed | 4 times as big |
| double the radius (same speed) | half as big |

*Notice: speed matters most, because it is squared. That is why fast corners are dangerous.*

## The force needed

By the [[newtons-second-law|second law]], an acceleration needs a net force in the same direction:

$$F = \frac{mv^2}{r} \quad \text{toward the centre}$$

This is not a special new force. It is a job, and a real force has to do it:

| Situation | What pulls toward the centre |
|---|---|
| ball whirled on a string | tension in the string |
| car turning on a flat road | friction from the tyres |
| Moon going around the Earth | the Earth's gravity |
| clothes in a spinning washing machine | the drum's normal force |

If the real force cannot supply $\frac{mv^2}{r}$, the object cannot follow the circle. A car going too fast for the tyres' grip slides outward, in a wider path.

**The "outward force" you feel** in a turning car is your body's inertia trying to go straight while the car turns under you. There is no real force pushing you out; the door pushes you in.

## Speed, radius and time for one lap

One lap is a distance $2\pi r$ (the circumference). If a lap takes time T, called the {{period|period}}:

$$v = \frac{2\pi r}{T}$$

:::example
title: A 1200 kg car drives around a flat curve of radius 40 m at 15 m/s. What friction force does it need? What is the smallest coefficient of static friction that will hold it?

1. Needed inward force: $F = \dfrac{mv^2}{r} = \dfrac{1200 \times 15^2}{40} = \dfrac{1200 \times 225}{40} = 6750$ N.
   why: Circular motion at speed v and radius r needs this net force toward the centre.
   uses: [newtons-second-law]

2. On a flat road, only sideways friction from the tyres can point toward the centre, so friction must be 6750 N.
   why: The weight and the road's normal force are vertical and cancel each other.
   uses: [force]

3. The most static friction can give is $\mu_s N = \mu_s \times 1200 \times 9.8 = 11{,}760\,\mu_s$ N.
   why: On flat ground the normal force equals the weight.
   uses: [weight]

4. Need $11{,}760\,\mu_s \ge 6750$, so $\mu_s \ge 0.57$. **6750 N of friction, and $\mu_s$ of at least about 0.57.** Dry tarmac manages that; ice does not.
   why: The tyres do not skid as long as the needed friction is within the static limit.
   uses: []
:::

:::practice
q: A 0.5 kg ball on a 0.8 m string is whirled in a horizontal circle at 4 m/s. Find the tension (ignore gravity).
answer: $a = \dfrac{16}{0.8} = 20$ m/s². $T = 0.5 \times 20 =$ **10 N**.
:::

:::problems
q: Find the centripetal acceleration at 10 m/s on a circle of radius 50 m.
answer: $\dfrac{100}{50} =$ **2 m/s²**.

q: A 1000 kg car goes around a curve of radius 50 m at 10 m/s. Find the needed net force.
answer: $1000 \times 2 =$ **2000 N toward the centre**.

q: The speed doubles on the same curve. What happens to the needed force?
answer: **It becomes 4 times as big.**

q: The radius doubles at the same speed. What happens to the needed force?
answer: **It halves.**

q: A ball on a string is moving in a circle and the string breaks. Which way does it go?
answer: **In a straight line along the direction it was moving** (along the tangent), not straight outward.

q: An object goes around a circle of radius 2 m once every 4 s. Find its speed and acceleration.
answer: $v = \dfrac{2\pi \times 2}{4} = \pi \approx$ **3.14 m/s**. $a = \dfrac{\pi^2}{2} \approx$ **4.93 m/s²**.

q: A 0.5 kg ball on a 0.8 m string moves at 4 m/s in a horizontal circle. Find the tension.
answer: **10 N.**

q: What is the fastest a car can take a flat curve of radius 50 m if $\mu_s = 0.8$?
answer: Friction can give at most $0.8mg$. Set $\dfrac{mv^2}{50} = 0.8mg$: $v^2 = 0.8 \times 9.8 \times 50 = 392$, **v ≈ 19.8 m/s** (about 71 km/h). The mass cancels.

q: Why do you feel pushed outward when a car turns sharply?
answer: **Inertia.** Your body tends to keep going straight; the car turns under you, and the door pushes you inward.

q: The Earth goes around the Sun at about 30 km/s, at a distance of $1.5 \times 10^{11}$ m. Find its centripetal acceleration.
answer: $\dfrac{(3 \times 10^4)^2}{1.5 \times 10^{11}} = \dfrac{9 \times 10^8}{1.5 \times 10^{11}} =$ **0.006 m/s²**. Small, but enough to keep the Earth on its curve.

q: A washing machine drum of radius 0.25 m spins 20 times a second. Find the speed of the drum's edge and the acceleration of clothes on it.
answer: $v = 2\pi \times 0.25 \times 20 \approx$ **31.4 m/s**. $a = \dfrac{31.4^2}{0.25} \approx$ **3950 m/s²**, about 400 times g. That flings water out through the holes.

q: The Moon is $3.84 \times 10^8$ m from the Earth and takes 27.3 days per orbit. Find its speed and acceleration.
answer: $T = 27.3 \times 86{,}400 \approx 2.36 \times 10^6$ s. $v = \dfrac{2\pi \times 3.84 \times 10^8}{2.36 \times 10^6} \approx$ **1020 m/s**. $a = \dfrac{v^2}{r} \approx$ **0.0027 m/s²**.
:::
