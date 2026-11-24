---
id: escape-velocity
title: Escape velocity
prereqs: [orbits, conservation-of-energy]
big: Launch something fast enough and gravity can never pull it back; that speed, the escape velocity, is $\sqrt{2GM/R}$, which is about 11.2 km/s from the Earth's surface.
recap: Far from a planet, gravitational potential energy is $PE = -\dfrac{GMm}{r}$: zero at infinity, negative closer in. To escape, an object needs enough kinetic energy to climb all the way to zero: $\tfrac{1}{2}mv^2 = \dfrac{GMm}{R}$, so $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$. The object's mass cancels. Escape velocity is $\sqrt{2}$ times the speed of a low circular orbit.
check:
  q: A low orbit just above the Earth needs about 7.9 km/s. Roughly what speed is needed to escape the Earth entirely?
  options: ["about 11.2 km/s", "about 15.8 km/s", "7.9 km/s", "about 62 km/s"]
  answer: 0
  why: Orbit speed is $\sqrt{GM/R}$ and escape speed is $\sqrt{2GM/R}$, so escape is $\sqrt{2} \approx 1.41$ times as fast: $1.41 \times 7.9 \approx 11.2$ km/s. 15.8 doubles the speed instead of multiplying by $\sqrt{2}$. 7.9 km/s only keeps you circling. 62 is $7.9^2$, a square instead of a square root.
---

## Throwing a ball very hard

Throw a ball up and it comes back down. Throw it harder and it goes higher before coming back. Is there a speed so fast that it never comes back?

Yes. Gravity weakens as the ball gets further away, by the [[gravitation|inverse-square law]]. So the total energy needed to climb all the way out is **finite**. Give the ball that much kinetic energy and it slows forever but never stops and turns round.

| Launch speed from the ground (no air) | What happens |
|---|---|
| 5 km/s | rises about 1600 km, falls back |
| 7.9 km/s, sideways | circles the Earth in a low orbit |
| 10 km/s, upward | rises about 25,000 km, falls back |
| 11.2 km/s or more | never comes back |

## Energy far from a planet

$PE = mgh$ assumes g stays the same, which is fine near the ground. Far out, g gets weaker, and the gravitational potential energy is instead

$$PE = -\frac{GMm}{r}$$

where r is the distance from the planet's centre.^[n_pe_far]

**Why negative?** Zero is chosen at infinity, where gravity has no pull left. Anywhere closer, you would have to add energy to get out to infinity, so you have less than zero. The PE rises toward zero as r grows, never quite reaching it.

## The escape speed

To escape, the starting kinetic energy must at least pay for the climb from the surface, $-\dfrac{GMm}{R}$, up to zero. By [[conservation-of-energy|conservation of energy]]:

$$\tfrac{1}{2}mv^2 = \frac{GMm}{R}$$

The mass m cancels, so

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

This is the {{escape-velocity|escape velocity}}. Compare it with the circular [[orbits|orbit]] speed at the same radius, $\sqrt{GM/R}$: escape is $\sqrt{2}$ times faster.

| Body | Escape velocity |
|---|---|
| Moon | 2.4 km/s |
| Mars | 5.0 km/s |
| Earth | 11.2 km/s |
| Jupiter | 60 km/s |

*Notice: bigger, denser bodies are harder to escape. The Moon's weak gravity is one reason it has almost no air: gas molecules escape it easily.*

Real rockets do not need to reach 11.2 km/s all at once. They keep firing as they climb. The escape speed is what a single launch with no further push would need.

:::example
title: Find the escape velocity from the Earth's surface. Use $GM = 3.98 \times 10^{14}$ m³/s² and $R = 6.37 \times 10^6$ m.

1. Write $v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$.
   why: The starting kinetic energy must equal the energy needed to climb to infinity.
   uses: [conservation-of-energy]

2. $\dfrac{2GM}{R} = \dfrac{2 \times 3.98 \times 10^{14}}{6.37 \times 10^6} = \dfrac{7.96 \times 10^{14}}{6.37 \times 10^6} \approx 1.25 \times 10^8$ m²/s².
   why: Work out the inside of the root first.
   uses: [scientific-notation]

3. $v = \sqrt{1.25 \times 10^8} \approx 11{,}200$ m/s.
   why: Square root of $1.25 \times 10^8$ is $\sqrt{1.25} \times 10^4$.
   uses: []

4. **About 11.2 km/s**, about $\sqrt{2}$ times the 7.9 km/s needed for a low orbit.
   why: Comparing with the orbit page.
   uses: [orbits]
:::

:::practice
q: Find the escape velocity from the Moon: $GM = 4.9 \times 10^{12}$ m³/s², radius $1.74 \times 10^6$ m.
answer: $\sqrt{\dfrac{2 \times 4.9 \times 10^{12}}{1.74 \times 10^6}} = \sqrt{5.63 \times 10^6} \approx$ **2370 m/s** (2.4 km/s).
:::

:::problems
q: Find the escape velocity from Mars: $GM = 4.28 \times 10^{13}$ m³/s², radius $3.39 \times 10^6$ m.
answer: $\sqrt{\dfrac{8.56 \times 10^{13}}{3.39 \times 10^6}} \approx$ **5030 m/s** (5.0 km/s).

q: Find the escape velocity from Jupiter: $GM = 1.27 \times 10^{17}$ m³/s², radius $6.99 \times 10^7$ m.
answer: $\sqrt{\dfrac{2.54 \times 10^{17}}{6.99 \times 10^7}} \approx$ **60,000 m/s** (60 km/s).

q: Does a heavy rocket need a higher escape velocity than a light one?
answer: **No.** The mass cancels. A heavy rocket needs more **energy** to reach that speed, but the speed is the same.

q: How much kinetic energy does a 1000 kg probe need to escape the Earth from the surface?
answer: $\tfrac{1}{2} \times 1000 \times 11{,}200^2 \approx$ **$6.3 \times 10^{10}$ J**.

q: What is the gravitational PE of a 1 kg mass on the Earth's surface, taking zero at infinity?
answer: $-\dfrac{GM}{R} = -\dfrac{3.98 \times 10^{14}}{6.37 \times 10^6} \approx$ **$-6.2 \times 10^7$ J**.

q: A low orbit needs 7.9 km/s. What is the escape speed from the same height?
answer: $\sqrt{2} \times 7.9 \approx$ **11.2 km/s**.

q: A ball is thrown straight up from the Earth at 5 km/s, with no air. Does it escape?
answer: **No.** 5 km/s is well below 11.2 km/s, so it rises and falls back.

q: A planet has the same mass as the Earth but a quarter of its radius. Compare its escape velocity.
answer: $\sqrt{4} = 2$: **twice the Earth's**, about 22.4 km/s.

q: Why does the Moon have almost no atmosphere?
answer: **Its escape velocity is low**, only 2.4 km/s, so fast-moving gas molecules can leak away into space over time.

q: The Earth orbits the Sun at 29.8 km/s. What speed would it need to escape the Sun from there?
answer: $\sqrt{2} \times 29.8 \approx$ **42 km/s**.

q: How small would the Sun ($GM = 1.33 \times 10^{20}$ m³/s²) have to be squeezed for its escape velocity to reach the speed of light, $3 \times 10^8$ m/s?
answer: Set $c^2 = \dfrac{2GM}{R}$: $R = \dfrac{2 \times 1.33 \times 10^{20}}{9 \times 10^{16}} \approx$ **3000 m**, about 3 km. That is the size a black hole of the Sun's mass would have.

q: Why is it wrong to use $mgh$ to work out the energy to escape the Earth?
answer: **$mgh$ assumes g stays the same.** Far from the Earth, g gets weaker, so you must use $-\dfrac{GMm}{r}$.
:::
