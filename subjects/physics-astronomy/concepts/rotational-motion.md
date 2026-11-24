---
id: rotational-motion
title: Angular speed and angular acceleration
prereqs: [circular-motion]
big: Spinning things are described by how fast their angle changes, the angular speed, in radians per second; every point on a spinning wheel shares it, and a point's ordinary speed is its distance from the centre times the angular speed.
recap: Angles in physics are measured in radians: angle = arc length ÷ radius, and one full turn is $2\pi$ rad. Angular speed is $\omega = \dfrac{\Delta\theta}{\Delta t}$, in rad/s. A point at distance r from the centre moves at $v = r\omega$. Angular acceleration α is how fast ω changes, and the constant-acceleration equations carry over: $\omega = \omega_0 + \alpha t$ and $\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$.
check:
  q: A wheel turns twice every second. What is its angular speed?
  options: ["about 12.6 rad/s", "2 rad/s", "720 rad/s", "about 6.28 rad/s"]
  answer: 0
  why: Each turn is $2\pi$ rad, so 2 turns per second is $4\pi \approx 12.6$ rad/s. 2 rad/s counts turns, not radians. 720 counts degrees. 6.28 rad/s is one turn per second.
---

## Same spin, different speeds

A merry-go-round turns once every 10 seconds. A child near the middle and a child at the edge both go round once in those 10 s. But the child at the edge travels a much bigger circle, so moves much faster.

| Rider | Distance from centre | Circle travelled per turn | Speed |
|---|---|---|---|
| near the middle | 0.5 m | 3.1 m | 0.31 m/s |
| halfway | 1 m | 6.3 m | 0.63 m/s |
| at the edge | 2 m | 12.6 m | 1.26 m/s |

*Notice: everyone turns at the same rate, but speed grows in proportion to distance from the centre.*

So for spinning things, the useful measure is **how fast the angle changes**, which is the same for every point.

## Radians

Physics measures angles in {{radian|radians}}. An angle in radians is the arc length divided by the radius:

$$\theta = \frac{\text{arc}}{r}$$

A full circle has an arc of $2\pi r$, so a full turn is $2\pi$ radians, about 6.28. Half a turn is π, and a right angle is $\frac{\pi}{2}$. One radian is about 57°.

Radians make the formulas simple: an arc is just $r\theta$.

## Angular speed

The {{angular-velocity|angular speed}} ω (the Greek letter omega) is the angle turned per second:

$$\omega = \frac{\Delta\theta}{\Delta t}$$

in radians per second. Engines and drills often give revolutions per minute (rpm). To convert, multiply by $2\pi$ and divide by 60.

**Linking to ordinary speed.** In a time t, a point at radius r sweeps an angle $\omega t$, so it travels an arc $r\omega t$. Its speed is

$$v = r\omega$$

The centripetal acceleration from the [[circular-motion|circular motion]] page becomes $a = \dfrac{v^2}{r} = \omega^2 r$.

## Speeding up a spin

If the spin rate changes, the {{angular-acceleration|angular acceleration}} α (alpha) is the change in ω per second, in rad/s². For a steady α, the motion equations work with angles in place of distances:

| Straight line | Spinning |
|---|---|
| position x | angle θ |
| velocity v | angular speed ω |
| acceleration a | angular acceleration α |
| $v = u + at$ | $\omega = \omega_0 + \alpha t$ |
| $s = ut + \tfrac{1}{2}at^2$ | $\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ |

:::example
title: A bicycle wheel of radius 0.35 m spins at 20 rad/s. How fast is the bike moving, and how many revolutions per minute is that?

1. Speed of the rim: $v = r\omega = 0.35 \times 20 = 7$ m/s.
   why: The rim rolls along the road, so the bike moves at the rim's speed.
   uses: [circular-motion]

2. Turns per second: $\dfrac{20}{2\pi} \approx 3.18$.
   why: Each turn is $2\pi$ radians.
   uses: []

3. Turns per minute: $3.18 \times 60 \approx 191$.
   why: Sixty seconds in a minute.
   uses: []

4. **7 m/s (about 25 km/h), at about 191 rpm.**
   why: Both are useful: one for the bike, one for the wheel.
   uses: []
:::

:::practice
q: A fan blade's tip is 0.3 m from the centre. The fan spins at 50 rad/s. How fast is the tip moving?
answer: $v = 0.3 \times 50 =$ **15 m/s**.
:::

:::problems
q: Convert 90° to radians.
answer: A quarter turn: $\dfrac{2\pi}{4} =$ **$\dfrac{\pi}{2}$ ≈ 1.57 rad**.

q: An arc of 6 m lies on a circle of radius 3 m. What angle does it make?
answer: $\dfrac{6}{3} =$ **2 rad**.

q: An engine turns at 3000 rpm. Find ω.
answer: $\dfrac{3000 \times 2\pi}{60} = 100\pi \approx$ **314 rad/s**.

q: A disc of radius 0.1 m spins at 314 rad/s. How fast is its edge moving?
answer: $0.1 \times 314 \approx$ **31.4 m/s**.

q: Find the angular speed of a clock's second hand.
answer: $\dfrac{2\pi}{60} \approx$ **0.105 rad/s**.

q: The Earth turns once a day. Find its angular speed, and the speed of a point on the equator (radius $6.37 \times 10^6$ m).
answer: $\omega = \dfrac{2\pi}{86{,}400} \approx$ **$7.27 \times 10^{-5}$ rad/s**. $v = 6.37 \times 10^6 \times 7.27 \times 10^{-5} \approx$ **463 m/s**.

q: A car's wheels have a radius of 0.3 m. The car goes at 30 m/s. Find the wheels' angular speed.
answer: $\omega = \dfrac{30}{0.3} =$ **100 rad/s**.

q: Two points on a spinning record are 0.05 m and 0.15 m from the centre. Compare their angular speeds and their speeds.
answer: **Same angular speed; the outer point is 3 times faster.**

q: A fan starts from rest and reaches 30 rad/s in 5 s. Find α and the angle turned.
answer: $\alpha = \dfrac{30}{5} =$ **6 rad/s²**. $\theta = \tfrac{1}{2} \times 6 \times 25 =$ **75 rad**, about 12 turns.

q: A wheel slows from 40 rad/s to rest in 8 s. Find α and the angle turned while stopping.
answer: $\alpha = \dfrac{-40}{8} =$ **−5 rad/s²**. $\theta = 40 \times 8 - \tfrac{1}{2} \times 5 \times 64 =$ **160 rad**.

q: A point 0.5 m from the centre spins at 10 rad/s. Find its centripetal acceleration.
answer: $\omega^2 r = 100 \times 0.5 =$ **50 m/s²**.

q: A merry-go-round turns once every 10 s. Find ω, and the speed of a rider 2 m out.
answer: $\omega = \dfrac{2\pi}{10} \approx$ **0.63 rad/s**. $v = 2 \times 0.63 \approx$ **1.26 m/s**.
:::
