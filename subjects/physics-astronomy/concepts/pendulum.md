---
id: pendulum
title: The pendulum
prereqs: [simple-harmonic-motion, weight]
big: A pendulum making small swings is in simple harmonic motion, with a period that depends only on its length and on g, not on its mass or how wide it swings.
recap: For small swings, a pendulum's period is $T = 2\pi\sqrt{\dfrac{L}{g}}$, where L is the length from the pivot to the centre of the bob. The mass and (for small swings) the size of the swing do not matter. Four times the length gives twice the period. Timing a pendulum is a simple way to measure g.
check:
  q: What is the period of a pendulum 1 m long, on Earth?
  options: ["about 2.0 s", "about 6.28 s", "about 0.32 s", "about 0.5 s"]
  answer: 0
  why: $T = 2\pi\sqrt{\frac{L}{g}} = 2\pi\sqrt{\frac{1}{9.8}} \approx 2\pi \times 0.319 \approx 2.0$ s. 6.28 s leaves out g. 0.32 s leaves out the $2\pi$. 0.5 is the frequency in hertz, one swing per 2 seconds.
---

## Galileo's chandelier

The story goes that young Galileo, bored in church, watched a hanging lamp swing. Timing it against his pulse, he noticed that the swings took the same time whether they were wide or narrow. Try it with a weight on a string:

| What you change | Period |
|---|---|
| a heavier weight, same string | the same |
| a wider swing (still small) | the same |
| a string 4 times longer | twice as long |

*Notice: only the length matters.*

## Why a pendulum is SHM

Pull the bob aside by a small distance x along its arc. Gravity pulls it back toward the bottom. Only the part of the [[weight|weight]] along the arc pulls it back, and for a small swing that part is about

$$F \approx -\frac{mg}{L}x$$

That is just like a spring, $F = -kx$, with $\frac{mg}{L}$ playing the part of k. So the motion is [[simple-harmonic-motion|simple harmonic]], and the period is

$$T = 2\pi\sqrt{\frac{m}{mg/L}} = 2\pi\sqrt{\frac{L}{g}}$$

**The mass cancels.** A heavier bob is pulled back harder, but is also harder to accelerate, just as heavy and light objects fall together.

**"Small" swings.** The formula is very accurate for swings of about 15° or less. Wider swings take a little longer.^[n_pendulum_wide]

## Keeping time

Because its period is so steady, the pendulum ran the world's clocks for nearly 300 years. A pendulum with a period of exactly 2 s, ticking once each way, is about 1 m long. A clock gains or loses time if its pendulum's length changes, for example when a metal rod expands in summer heat.

## Measuring g

Rearranging the formula gives

$$g = \frac{4\pi^2 L}{T^2}$$

Measure L with a ruler and time several swings with a stopwatch, and you can find g to within about 1%.

:::example
title: A clock needs a pendulum with a period of exactly 2 s. How long should it be?

1. Start with $T = 2\pi\sqrt{\dfrac{L}{g}}$ and rearrange for L. Square both sides: $T^2 = 4\pi^2\dfrac{L}{g}$.
   why: Squaring removes the square root.
   uses: [rearranging-formulas]

2. So $L = \dfrac{gT^2}{4\pi^2}$.
   why: Multiply by g and divide by $4\pi^2$.
   uses: []

3. $L = \dfrac{9.8 \times 4}{4\pi^2} = \dfrac{39.2}{39.48} \approx 0.993$ m.
   why: Put in T = 2 s and g = 9.8 m/s².
   uses: [weight]

4. **About 0.99 m**, just under a metre, measured to the centre of the bob.
   why: L is the length to the bob's centre of gravity.
   uses: []
:::

:::practice
q: Find the period of a pendulum 0.25 m long.
answer: $2\pi\sqrt{\dfrac{0.25}{9.8}} \approx$ **1.0 s**.
:::

:::problems
q: Find the period of a 1 m pendulum.
answer: **About 2.0 s.**

q: A playground swing has a 2.5 m chain. Find its period.
answer: $2\pi\sqrt{\dfrac{2.5}{9.8}} \approx$ **3.2 s**.

q: A pendulum's length is made 4 times longer. What happens to its period?
answer: **It doubles.**

q: A pendulum's bob is swapped for one twice as heavy. What happens to its period?
answer: **Nothing.** The mass cancels.

q: A pendulum needs a period of 3 s. How long should it be?
answer: $L = \dfrac{9.8 \times 9}{4\pi^2} \approx$ **2.23 m**.

q: Find the frequency of a 1 m pendulum.
answer: $\dfrac{1}{2.0} \approx$ **0.5 Hz**.

q: A 1 m pendulum is taken to the Moon, where g = 1.6 m/s². Find its period there.
answer: $2\pi\sqrt{\dfrac{1}{1.6}} \approx$ **5.0 s**, much slower.

q: A student times 10 swings of a 0.5 m pendulum at 14.2 s. Find g.
answer: $T = 1.42$ s. $g = \dfrac{4\pi^2 \times 0.5}{1.42^2} \approx$ **9.79 m/s²**.

q: Why is it better to time 10 swings than 1?
answer: **Your reaction time error is spread over 10 swings**, so it is ten times smaller per swing.

q: A pendulum clock's metal rod gets longer on a hot day. Does the clock run fast or slow?
answer: **Slow.** A longer pendulum has a longer period, so it ticks less often.

q: A 1 m pendulum is pulled aside so its bob rises 5 cm. How fast does it pass the bottom?
answer: By energy: $v = \sqrt{2 \times 9.8 \times 0.05} \approx$ **0.99 m/s**.

q: Explain in one sentence why the mass of the bob does not affect the period.
answer: **A heavier bob is pulled back harder by gravity, but is also harder to speed up, by exactly the same factor.**
:::
