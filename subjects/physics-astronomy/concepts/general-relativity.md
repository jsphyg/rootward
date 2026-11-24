---
id: general-relativity
title: Gravity as curved spacetime
prereqs: [special-relativity, gravitation]
big: Einstein's general relativity says gravity is not a pull but the bending of space and time by mass; objects follow the straightest possible paths through curved spacetime, which explains orbits, bent starlight, slowed clocks and black holes.
recap: The equivalence principle: being in a gravitational field feels exactly like being accelerated, and free fall feels exactly like floating in space. From this, Einstein concluded that mass curves spacetime, and freely falling objects follow the straightest paths through it. Predictions confirmed: light bends near the Sun, clocks run slower deeper in gravity, Mercury's orbit slowly turns, gravitational waves ripple out from colliding black holes, and black holes exist, with a horizon at $R_s = \dfrac{2GM}{c^2}$.
check:
  q: An astronaut wakes in a windowless room and feels their normal weight. Which of these could explain it?
  options: ["Either the room is resting on Earth, or it is a rocket in deep space accelerating at 9.8 m/s²", "Only resting on Earth, since only gravity gives weight", "Only an accelerating rocket, since there is no gravity indoors", "Neither; weight cannot be felt in a closed room"]
  answer: 0
  why: This is Einstein's equivalence principle: no experiment inside a small closed room can tell the difference between gravity and steady acceleration. Saying only gravity gives weight ignores what acceleration feels like. Gravity reaches indoors, so "no gravity indoors" is wrong. Weight is felt as the floor pushing up, in any room.
---

## The happiest thought

In 1907, Einstein had what he called "the happiest thought of my life": a person falling freely, say from a roof, would not feel their own weight. In free fall, gravity seems to vanish. Astronauts in [[orbits|orbit]] float for exactly this reason.

And the reverse: in a rocket far from any planet, accelerating at 9.8 m/s², you would feel pressed into the floor exactly as on Earth. Drop a ball and it "falls".

| Inside a closed room | Feels like |
|---|---|
| resting on Earth | normal weight |
| rocket in deep space accelerating at 9.8 m/s² | exactly the same |
| falling freely toward Earth | weightless |
| drifting in deep space | exactly the same |

*Notice: from inside, you cannot tell gravity from acceleration. This is the **equivalence principle**.*

## Curved spacetime

Einstein spent eight years turning this idea into a theory, finished in 1915. Its picture: [[gravitation|gravity]] is not a force pulling across space. Instead, mass and energy **curve** space and time, together called **spacetime**. Objects with no forces on them follow the straightest possible paths through this curved spacetime. Those paths look to us like orbits and falls.

A common picture is a heavy ball on a stretched rubber sheet: it makes a dip, and marbles rolled past curve around it. (This is only an analogy. The real curving is in four dimensions, including time.)

In weak gravity, general relativity gives back Newton's law almost exactly. It differs where gravity is strong or speeds are high.^[n_einstein_field]

## What it predicts, and what we see

| Prediction | Seen |
|---|---|
| light bends passing a massive body | starlight near the Sun shifted by 1.75 arcseconds during the 1919 eclipse; galaxies act as "gravitational lenses" |
| clocks run slower deeper in gravity | measured with atomic clocks at different heights; GPS must correct for it |
| Mercury's oval orbit slowly turns | an extra 43 arcseconds per century, which Newton's law could not explain |
| spacetime ripples, gravitational waves | first detected in 2015, from two black holes merging over a billion light-years away |
| black holes | stars seen orbiting an invisible 4-million-Sun mass at our galaxy's centre; the first black hole image, 2019 |

## Black holes

Squeeze a mass into a small enough space and nothing, not even light, can escape. From the [[escape-velocity|escape velocity]] idea, this happens inside a radius of

$$R_s = \frac{2GM}{c^2}$$

the **Schwarzschild radius**. Its edge is the **event horizon**: anything that crosses it can never come back out. For the Sun, $R_s$ is about 3 km; for the Earth, about 9 mm.

:::example
title: Find the Schwarzschild radius of a star of 10 solar masses. The Sun's $GM$ is $1.33 \times 10^{20}$ m³/s².

1. The star's $GM = 10 \times 1.33 \times 10^{20} = 1.33 \times 10^{21}$ m³/s².
   why: GM is proportional to the mass.
   uses: [gravitation]

2. $R_s = \dfrac{2GM}{c^2} = \dfrac{2 \times 1.33 \times 10^{21}}{9 \times 10^{16}}$.
   why: The black hole radius formula.
   uses: [special-relativity]

3. $R_s \approx 2.96 \times 10^4$ m.
   why: Divide.
   uses: []

4. **About 30 km.** A star of ten Suns squeezed into a ball the size of a city.
   why: Ten times the Sun's mass gives ten times the Sun's 3 km.
   uses: []
:::

:::practice
q: Find the Schwarzschild radius of the Earth, with $GM = 3.98 \times 10^{14}$ m³/s².
answer: $\dfrac{2 \times 3.98 \times 10^{14}}{9 \times 10^{16}} \approx$ **0.0088 m**, about 9 mm: the Earth squeezed to the size of a marble.
:::

:::problems
q: You are in a closed lift falling freely. What do you feel?
answer: **Weightless.** You, the lift and everything in it fall together.

q: You are in a closed rocket in deep space, accelerating at 9.8 m/s². What do you feel?
answer: **Your normal weight**, exactly as on Earth.

q: State the equivalence principle in one sentence.
answer: **Being in a gravitational field cannot be told apart from being accelerated, in a small closed room.**

q: Find the Sun's Schwarzschild radius ($GM = 1.33 \times 10^{20}$).
answer: **About 3 km.**

q: Find the Schwarzschild radius of a 10-solar-mass black hole.
answer: **About 30 km.**

q: The black hole at our galaxy's centre is about 4 million solar masses. Find its Schwarzschild radius.
answer: $4 \times 10^6 \times 3$ km $\approx$ **$1.2 \times 10^7$ km**, about 8% of the Earth-Sun distance.

q: How did the 1919 solar eclipse test general relativity?
answer: **Stars near the darkened Sun appeared slightly shifted**, because their light was bent by the Sun's gravity, by the amount Einstein predicted.

q: Do clocks run faster at the top of a mountain or at sea level?
answer: **On the mountain**, where gravity is a little weaker. The difference is tiny but measurable.

q: GPS clocks drift by about 38 microseconds a day without relativity corrections. Light travels how far in that time?
answer: $38 \times 10^{-6} \times 3 \times 10^8 \approx$ **11 km**, the size of the position error that would build up each day.

q: What are gravitational waves, and when were they first detected?
answer: **Ripples in spacetime, sent out by accelerating masses**, first detected in **2015** from two merging black holes.

q: What is an event horizon?
answer: **The edge of a black hole**, beyond which nothing, not even light, can escape.

q: Does general relativity replace Newton's law of gravitation?
answer: **It includes it.** In weak gravity and at low speeds, the two agree almost exactly; general relativity is needed where gravity is strong or precision is extreme.
:::
