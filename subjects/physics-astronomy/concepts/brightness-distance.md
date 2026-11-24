---
id: brightness-distance
title: Brightness and the inverse-square law
prereqs: [proportional-reasoning, astronomical-distances]
big: How bright a star looks depends on how much light it really gives out and how far away it is; its light spreads over a bigger and bigger sphere, so the brightness falls with the square of the distance.
recap: A star's luminosity L is the total power it gives out, in watts. Its apparent brightness b is the power reaching each square metre here: $b = \dfrac{L}{4\pi d^2}$. Twice as far, a quarter as bright. So a faint star could be weak and close, or powerful and far. If you know L, measuring b gives the distance; objects of known luminosity, called standard candles, are how astronomers measure the far universe.
check:
  q: A star is moved three times further away. How bright does it look now?
  options: ["one ninth as bright", "one third as bright", "the same", "nine times as bright"]
  answer: 0
  why: Brightness goes as $\frac{1}{d^2}$, so three times the distance gives $\frac{1}{3^2} = \frac{1}{9}$. One third forgets to square. The same would mean brightness ignores distance. Nine times has it the wrong way up.
---

## Bright and close, or powerful and far?

A car's headlights on a dark road look dazzling up close and faint a kilometre away, though they give out the same light. Stars are the same. Looking at a star, we see only how bright it **looks**. That depends on two things.

| Term | Means | Unit |
|---|---|---|
| {{luminosity|luminosity}}, L | the total power the star gives out | watts |
| apparent brightness, b | the power reaching each square metre here | W/m² |

The Sun's luminosity is $3.85 \times 10^{26}$ W. Some stars are a million times more luminous; some, a ten-thousandth as much.

## Spreading light

A star's light spreads out evenly in every direction. At a distance d, it is spread over a sphere of area $4\pi d^2$. So

$$b = \frac{L}{4\pi d^2}$$

This is the same inverse-square law as for gravity, with the same reason: the same total spread over a sphere whose area grows as $d^2$. It is [[proportional-reasoning|proportional reasoning]] again:

| Distance | Brightness |
|---|---|
| d | b |
| 2d | b/4 |
| 3d | b/9 |
| 10d | b/100 |

## Using it to measure distance

If you know how luminous an object really is, measuring how bright it looks tells you how far away it is:

$$d = \sqrt{\frac{L}{4\pi b}}$$

Objects of known luminosity are called **standard candles**. Some kinds of pulsing star, and one kind of exploding star, have known luminosities. Spotting them in distant galaxies gives those galaxies' distances, far beyond the reach of parallax.

:::example
title: Find the Sun's brightness at the Earth, 1 AU ($1.496 \times 10^{11}$ m) away. The Sun's luminosity is $3.85 \times 10^{26}$ W.

1. Area of the sphere at 1 AU: $4\pi \times (1.496 \times 10^{11})^2 \approx 2.81 \times 10^{23}$ m².
   why: The light is spread over a sphere of radius 1 AU.
   uses: [astronomical-distances]

2. $b = \dfrac{3.85 \times 10^{26}}{2.81 \times 10^{23}}$.
   why: Luminosity divided by area.
   uses: [proportional-reasoning]

3. $b \approx 1370$ W/m².
   why: Divide.
   uses: []

4. **About 1370 W/m²**, called the solar constant. A square metre facing the Sun in space gets about as much power as a small electric heater.
   why: A useful everyday comparison.
   uses: []
:::

:::practice
q: Mars is 1.52 AU from the Sun. How bright is the sunlight there, compared with at Earth?
answer: $\dfrac{1}{1.52^2} \approx 0.43$, so **about 43%**, roughly 590 W/m².
:::

:::problems
q: A star is moved 3 times further away. How bright does it look?
answer: **One ninth as bright.**

q: Two identical stars: one is 10 times further away. How do their brightnesses compare?
answer: **The far one is 100 times fainter.**

q: Find the Sun's brightness at the Earth.
answer: **About 1370 W/m².**

q: Jupiter is 5.2 AU from the Sun. How bright is sunlight there compared with at Earth?
answer: $\dfrac{1}{5.2^2} \approx$ **1/27**, about 3.7%.

q: A star is 100 times more luminous than the Sun, and looks equally bright as a Sun-like star at 10 pc. How far away is it?
answer: Brightness goes as $\frac{L}{d^2}$: $d^2$ must be 100 times bigger, so **d = 100 pc**.

q: Two stars look equally bright, but one is 4 times as far away. Compare their luminosities.
answer: **The far one is 16 times more luminous.**

q: Find how bright the Sun would look from Proxima Centauri, $4.0 \times 10^{16}$ m away.
answer: $\dfrac{3.85 \times 10^{26}}{4\pi \times (4.0 \times 10^{16})^2} \approx$ **$1.9 \times 10^{-8}$ W/m²**, about 70 billion times fainter than at Earth.

q: Why can't you tell how far away a star is just from how bright it looks?
answer: **A faint star could be weak and close, or powerful and far.** You also need its luminosity.

q: What is a standard candle?
answer: **An object whose luminosity is known**, so its brightness reveals its distance.

q: What is the difference between luminosity and apparent brightness?
answer: **Luminosity is the total power the star gives out; apparent brightness is how much reaches each square metre here.**
:::
