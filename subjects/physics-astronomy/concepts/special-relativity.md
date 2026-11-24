---
id: special-relativity
title: Special relativity
prereqs: [relative-motion, em-waves]
big: Light travels at the same speed for everyone, however they move; to make that true, moving clocks must run slow and moving objects must shrink along their motion, by an amount that only matters near the speed of light.
recap: Einstein's two rules: the laws of physics are the same for everyone moving steadily, and light in a vacuum moves at c for every observer. It follows that a clock moving at speed v runs slow by the factor $\gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}}$ (time dilation: $t = \gamma t_0$), and a moving object is shortened along its motion by the same factor (length contraction: $L = \dfrac{L_0}{\gamma}$). Nothing with mass can reach c. At everyday speeds, γ is almost exactly 1.
check:
  q: A spaceship flies past Earth at 0.6c. A clock on the ship ticks off 8 s. How much time passes on Earth's clocks meanwhile, as Earth measures it?
  options: ["10 s", "6.4 s", "8 s", "13.3 s"]
  answer: 0
  why: $\gamma = \frac{1}{\sqrt{1 - 0.36}} = \frac{1}{0.8} = 1.25$, so Earth measures $1.25 \times 8 = 10$ s. The moving clock runs slow, so more time passes on Earth. 6.4 s divides instead of multiplying. 8 s ignores relativity. 13.3 s divides by 0.6 instead of using γ.
---

## A speed everyone agrees on

On the [[relative-motion|relative motion]] page, speeds add up: throw a ball forward at 10 m/s from a train going 30 m/s, and someone on the ground sees it go 40 m/s.

Light does not do this. Shine a torch forward from a fast spaceship, and the ship's crew measure the light at c. Someone watching the ship go by **also** measures that same light at c, not c plus the ship's speed. Experiments have confirmed this again and again. It fits with the [[em-waves|electromagnetic wave]] page: Maxwell's equations give one speed for light, with no mention of who is measuring.

In 1905, Einstein took this seriously. His two rules, or postulates:

1. The laws of physics are the same for everyone moving at a steady velocity.
2. Light in a vacuum travels at $c = 3 \times 10^8$ m/s for every such observer.

Everything else follows, and it is strange.

## Moving clocks run slow

Picture a "light clock": a pulse of light bouncing between two mirrors, one above the other. Each bounce is a tick. On a moving spaceship, an observer on the ground sees the light travel a longer, slanted, zigzag path, because the mirrors move sideways during each bounce. But the light still goes at c. A longer path at the same speed takes more time. So the ground observer sees the ship's clock tick more slowly.

The slowing factor is

$$\gamma = \frac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}}$$

and a time $t_0$ on the moving clock is seen as $t = \gamma t_0$. This is {{time-dilation|time dilation}}.^[n_light_clock]

| Speed | γ |
|---|---|
| a jet, 300 m/s | 1.0000000000005 |
| 0.1c | 1.005 |
| 0.6c | 1.25 |
| 0.8c | 1.67 |
| 0.99c | 7.09 |

*Notice: γ is almost exactly 1 until you get near the speed of light. That is why we never notice it.*

## Moving lengths shrink

A moving object is shorter along its direction of motion, by the same factor:

$$L = \frac{L_0}{\gamma}$$

$L_0$ is its length measured at rest. This is **length contraction**. Widths across the motion are unchanged.

## The speed limit

As v gets close to c, γ grows without limit. It takes more and more energy to speed up, without ever reaching c. Nothing with mass can reach the speed of light.

## It is real

- **Muons**, made by cosmic rays high in the atmosphere, live only about 2.2 microseconds. Even at nearly c, they should only travel about 660 m before decaying, yet many reach the ground, 10 km or more below. Their clocks run slow.
- **Atomic clocks** flown around the world on jets come back slightly out of step with clocks left on the ground, by exactly the predicted amount.
- **GPS satellites** must correct for it, or positions would drift.

:::example
title: Muons are made 10 km up and travel at 0.995c. They live 2.2 µs in their own frame. Without relativity, how far would they get? With it?

1. Without relativity: distance $= vt = 0.995 \times 3 \times 10^8 \times 2.2 \times 10^{-6} \approx 657$ m.
   why: Speed times lifetime.
   uses: [relative-motion]

2. $\gamma = \dfrac{1}{\sqrt{1 - 0.995^2}} = \dfrac{1}{\sqrt{0.009975}} \approx 10.0$.
   why: The time dilation factor.
   uses: [em-waves]

3. Seen from the ground, they live $10 \times 2.2 = 22$ µs, and travel $0.995 \times 3 \times 10^8 \times 22 \times 10^{-6} \approx 6.6$ km.
   why: The muon's clock runs slow as seen from the ground.
   uses: []

4. **About 660 m without relativity, about 6.6 km with it.** Many more muons reach the ground than classical physics predicts, matching relativity.
   why: Real measurements count the muons at different heights.
   uses: []
:::

:::practice
q: Find γ for a speed of 0.8c.
answer: $\dfrac{1}{\sqrt{1 - 0.64}} = \dfrac{1}{0.6} \approx$ **1.67**.
:::

:::problems
q: Find γ at 0.6c.
answer: **1.25.**

q: A ship's clock ticks 8 s at 0.6c. How long does Earth measure?
answer: **10 s.**

q: Find γ at 0.99c.
answer: **About 7.09.**

q: Find γ at 0.1c. Is relativity important here?
answer: **About 1.005**, only half a percent. It matters only for precise work.

q: A spaceship 100 m long at rest flies past at 0.8c. How long does it measure from Earth?
answer: $\dfrac{100}{1.67} =$ **60 m**.

q: An astronaut travels at 0.8c on a round trip that takes 10 years by Earth's clocks. How much does the astronaut age?
answer: $\dfrac{10}{1.67} =$ **6 years.** The astronaut comes home younger than a twin who stayed.

q: A rocket moving at 0.5c shines a light forward. How fast does someone on Earth measure the light?
answer: **c**, not 1.5c.

q: Why can't a spaceship reach the speed of light?
answer: **γ grows without limit as v nears c**, so it would take endless energy.

q: Muons at 0.995c live 2.2 µs in their own frame. How long do they live as seen from Earth?
answer: **About 22 µs.**

q: Does a fast-moving metre stick get thinner as well as shorter?
answer: **No.** Only lengths along the motion shrink.

q: Why don't we notice time dilation in daily life?
answer: **Everyday speeds are tiny compared with c**, so γ is extremely close to 1.

q: Which of Einstein's two rules does a light clock use to show that time slows?
answer: **The second: light moves at c for every observer**, so a longer path takes longer.
:::
