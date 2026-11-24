---
id: simple-harmonic-motion
title: Oscillation (simple harmonic motion)
prereqs: [hookes-law, newtons-second-law]
big: When a force always pulls an object back toward the middle, in proportion to how far away it is, the object swings back and forth with a fixed period that does not depend on how big the swing is.
recap: Simple harmonic motion happens when the restoring force is proportional to the displacement, $F = -kx$, as for a mass on a spring. The period is $T = 2\pi\sqrt{\dfrac{m}{k}}$, and the frequency is $f = \dfrac{1}{T}$, in hertz. The period does not depend on the amplitude. The object moves fastest through the middle and stops for an instant at each end, where its acceleration is biggest.
check:
  q: A 0.5 kg mass bounces on a spring with $k = 50$ N/m. What is the period?
  options: ["about 0.63 s", "0.1 s", "about 62.8 s", "about 1.59 s"]
  answer: 0
  why: $T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{0.5}{50}} = 2\pi\sqrt{0.01} = 2\pi \times 0.1 \approx 0.63$ s. 0.1 s leaves out the $2\pi$. 62.8 s puts the fraction upside down, $2\pi\sqrt{k/m}$. 1.59 is the frequency in hertz, not the period.
---

## A mass on a spring

Hang a mass on a spring, pull it down a little, and let go. It bobs up and down, again and again, through the point where it was resting. Time ten bobs, then pull it down twice as far and time ten more.

| Pulled down by | Time for 10 bobs | Time for one bob |
|---|---|---|
| 2 cm | 6.3 s | 0.63 s |
| 4 cm | 6.3 s | 0.63 s |
| 6 cm | 6.3 s | 0.63 s |

*Notice: a bigger swing does not take longer. The mass travels further, but it also moves faster, and the two effects cancel exactly.*

## Why it swings

By [[hookes-law|Hooke's law]], the spring always pulls the mass back toward the middle, the resting point, with a force $F = -kx$. The further from the middle, the harder the pull. Using the [[newtons-second-law|second law]]:

$$a = -\frac{k}{m}x$$

The acceleration always points back to the middle and is proportional to the distance from it. Any motion that obeys this rule is called {{shm|simple harmonic motion}} (SHM).

Follow one swing. At the bottom, the spring pulls up hard, so the mass speeds up toward the middle. At the middle, there is no force, but the mass is moving fast, so it overshoots. Past the middle, the spring pulls back, slowing it, until it stops at the top. Then it all happens in reverse.

| Where | Speed | Force and acceleration |
|---|---|---|
| at either end | zero | biggest, pointing to the middle |
| passing the middle | fastest | zero |

## Period and frequency

The {{amplitude|amplitude}} A is the biggest distance from the middle. The {{period|period}} T is the time for one full swing, there and back. The {{frequency|frequency}} f is the number of swings per second, measured in hertz (Hz):

$$f = \frac{1}{T}$$

For a mass on a spring:

$$T = 2\pi\sqrt{\frac{m}{k}}$$

A heavier mass swings more slowly; a stiffer spring swings faster. The amplitude is not in the formula.

## The shape of the motion

Plot the position against time and you get a smooth wave, the shape of a cosine:

:::widget plot
fn: x >= 0 ? 5*Math.cos(Math.PI*x) : NaN
x: -0.3 4.5
y: -7 8
points: 0,5; 1,-5; 2,5
xname: t (s)
yname: x (cm)
label: x = 5 cos(πt)
labelat: topleft
caption: A mass on a spring with amplitude 5 cm and period 2 s. It starts at the top, passes the middle at 0.5 s, reaches the bottom at 1 s and is back at the top at 2 s.
:::

In general, $x = A\cos\left(\dfrac{2\pi t}{T}\right)$. The number $\omega = \sqrt{k/m}$ that appears inside, $\omega = \frac{2\pi}{T}$, is called the angular frequency. The top speed, passing the middle, is $v_{\max} = A\omega$, and the biggest acceleration, at the ends, is $\omega^2 A$.

**Energy.** At the ends, all the energy is in the spring, $\tfrac{1}{2}kA^2$. In the middle, it is all kinetic. It keeps trading back and forth, as on the spring energy page.

:::example
title: A 2 kg mass on a spring with $k = 200$ N/m is pulled 5 cm from the middle and let go. Find the period, the frequency, the top speed and the biggest acceleration.

1. $\omega = \sqrt{\dfrac{k}{m}} = \sqrt{\dfrac{200}{2}} = 10$ rad/s.
   why: This number sets the timing of the whole motion.
   uses: [hookes-law]

2. $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{10} \approx 0.63$ s, so $f = \dfrac{1}{0.63} \approx 1.59$ Hz.
   why: Same as $2\pi\sqrt{m/k}$; frequency is one over the period.
   uses: []

3. Top speed: $v_{\max} = A\omega = 0.05 \times 10 = 0.5$ m/s.
   why: The amplitude must be in metres.
   uses: []

4. Biggest acceleration: $\omega^2 A = 100 \times 0.05 = 5$ m/s². **T ≈ 0.63 s, f ≈ 1.59 Hz, top speed 0.5 m/s, top acceleration 5 m/s².**
   why: Check with forces: at the end the spring pulls $200 \times 0.05 = 10$ N on 2 kg, which is 5 m/s².
   uses: [newtons-second-law]
:::

:::practice
q: A 1 kg mass is on a spring with $k = 100$ N/m. Find the period.
answer: $2\pi\sqrt{0.01} = 2\pi \times 0.1 \approx$ **0.63 s**.
:::

:::problems
q: A swing takes 0.5 s. Find the frequency.
answer: $\dfrac{1}{0.5} =$ **2 Hz**.

q: A mass makes 20 full bobs in 10 s. Find the period and frequency.
answer: **T = 0.5 s, f = 2 Hz.**

q: A 0.5 kg mass on a spring with $k = 50$ N/m. Find the period.
answer: **About 0.63 s.**

q: The mass on a spring is made 4 times bigger. What happens to the period?
answer: $\sqrt{4} = 2$: **it doubles.**

q: The spring is swapped for one 4 times stiffer. What happens to the period?
answer: **It halves.**

q: The amplitude is doubled. What happens to the period?
answer: **Nothing.** The period does not depend on the amplitude.

q: You want a 0.25 kg mass to bob once per second. What spring constant do you need?
answer: $k = \dfrac{4\pi^2 m}{T^2} = 4\pi^2 \times 0.25 \approx$ **9.9 N/m**.

q: An oscillation has amplitude 0.1 m and $\omega = 5$ rad/s. Find the top speed.
answer: $0.1 \times 5 =$ **0.5 m/s**.

q: A spring with $k = 200$ N/m oscillates with amplitude 0.05 m. Find the total energy.
answer: $\tfrac{1}{2} \times 200 \times 0.0025 =$ **0.25 J**.

q: Where in the swing is the mass fastest? Where is its acceleration biggest?
answer: **Fastest passing the middle. Biggest acceleration at the ends**, where the spring is stretched or squashed most.

q: A 250 kg share of a car rests on one spring with $k = 25{,}000$ N/m. Find the bounce frequency.
answer: $\omega = \sqrt{100} = 10$ rad/s. $f = \dfrac{10}{2\pi} \approx$ **1.6 Hz**. Shock absorbers stop this bouncing quickly.

q: For $x = 5\cos(\pi t)$ cm, where is the mass at t = 0.5 s and t = 1 s?
answer: $\cos(0.5\pi) = 0$: **at the middle** at 0.5 s. $\cos\pi = -1$: **at −5 cm**, the other end, at 1 s.
:::
