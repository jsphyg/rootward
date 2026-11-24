---
id: refraction
title: Refraction
prereqs: [reflection]
big: Light slows down in glass and water, and when it crosses into them at an angle it bends; how much it bends follows Snell's law, and if it cannot get out it reflects back completely.
recap: A material's refractive index is $n = \dfrac{c}{v}$, how many times slower light is in it than in a vacuum. Crossing a boundary at an angle, light bends: Snell's law, $n_1\sin\theta_1 = n_2\sin\theta_2$, angles from the normal. Entering a slower material it bends toward the normal; leaving, away. Going from slow to fast, beyond the critical angle $\sin\theta_c = \dfrac{n_2}{n_1}$, all the light reflects back: total internal reflection. Different colours bend by slightly different amounts, which splits white light into a rainbow.
check:
  q: Light goes from air into glass ($n = 1.5$) at 30° to the normal. At what angle to the normal does it travel in the glass?
  options: ["about 19.5°", "about 48.6°", "45°", "30°"]
  answer: 0
  why: $1 \times \sin 30° = 1.5 \sin\theta_2$, so $\sin\theta_2 = \frac{0.5}{1.5} \approx 0.333$ and $\theta_2 \approx 19.5°$. 48.6° multiplies by 1.5 instead of dividing, bending the wrong way. 45° multiplies the angle itself by 1.5; Snell's law works with the sines. 30° would mean no bending.
---

## The bent straw

Put a straw in a glass of water. It looks broken at the surface. A swimming pool looks shallower than it is. Both happen because light bends when it passes from water into air. This bending is called {{refraction|refraction}}.

## Why light bends

Light travels at $c = 3 \times 10^8$ m/s in a vacuum, and a little slower in air, but much slower in water and glass. The {{refractive-index|refractive index}} n says how many times slower:

$$n = \frac{c}{v}$$

| Material | n | Speed of light |
|---|---|---|
| vacuum (air is almost the same) | 1.00 | $3.00 \times 10^8$ m/s |
| water | 1.33 | $2.26 \times 10^8$ m/s |
| glass | about 1.5 | $2.0 \times 10^8$ m/s |
| diamond | 2.42 | $1.24 \times 10^8$ m/s |

Why does slowing down cause bending? Picture a line of marching soldiers walking at an angle from a road into mud. The soldiers who reach the mud first slow down first, while the others are still on the road at full speed. The whole line swings round. A wave front of light does the same at a boundary.^[n_fermat]

## Snell's law

Measure angles from the [[reflection|normal]], as with reflection.

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

| Going into | Light bends |
|---|---|
| a slower material (bigger n) | toward the normal |
| a faster material (smaller n) | away from the normal |
| straight on, along the normal | not at all |

## Total internal reflection

Going from glass to air, light bends away from the normal. Tilt the ray more and more, and the outgoing ray swings out until it runs along the surface. That happens at the **critical angle** $\theta_c$:

$$\sin\theta_c = \frac{n_2}{n_1}$$

Beyond the critical angle, no light gets out at all: it all reflects back inside. This is {{total-internal-reflection|total internal reflection}}. It is better than any mirror, losing almost no light. **Optical fibres** use it to carry light, and internet data, for kilometres, bouncing along inside thin strands of glass. It also makes diamonds sparkle: their critical angle is small, so light bounces around inside many times before getting out.

## Rainbows

The refractive index is slightly different for each colour: higher for violet than for red. So violet bends a little more. A glass prism spreads white light into its colours. Raindrops do the same, with a reflection inside each drop, to make a rainbow. This spreading is called **dispersion**.

:::example
title: Find the critical angle for light going from glass ($n = 1.5$) into air.

1. Light goes from glass ($n_1 = 1.5$) to air ($n_2 = 1$).
   why: Total internal reflection only happens going from slower to faster.
   uses: [reflection]

2. $\sin\theta_c = \dfrac{n_2}{n_1} = \dfrac{1}{1.5} \approx 0.667$.
   why: At the critical angle, the outgoing ray is at 90°, and $\sin 90° = 1$.
   uses: []

3. $\theta_c = \sin^{-1}(0.667) \approx 41.8°$.
   why: Inverse sine.
   uses: []

4. **About 42°.** Any ray hitting the inside of the glass at more than 42° to the normal is totally reflected. That is why a 45° glass prism can act as a perfect mirror in binoculars.
   why: 45° is more than 42°.
   uses: []
:::

:::practice
q: Find the speed of light in diamond, $n = 2.42$.
answer: $v = \dfrac{3 \times 10^8}{2.42} \approx$ **$1.24 \times 10^8$ m/s**.
:::

:::problems
q: Light goes from air into glass ($n = 1.5$) at 30°. Find the angle in the glass.
answer: **About 19.5°.**

q: Find the speed of light in water ($n = 1.33$).
answer: **About $2.26 \times 10^8$ m/s.**

q: Light travels at $2 \times 10^8$ m/s in a plastic. Find its refractive index.
answer: $\dfrac{3 \times 10^8}{2 \times 10^8} =$ **1.5**.

q: Light goes from water ($n = 1.33$) into air at 30°. Find the angle in air.
answer: $\sin\theta = 1.33 \times 0.5 = 0.665$, so **θ ≈ 41.7°**, bent away from the normal.

q: Light goes from glass ($n = 1.5$) into air at 20°. Find the angle in air.
answer: $\sin\theta = 1.5 \times \sin 20° \approx 0.513$, so **θ ≈ 30.9°**.

q: Find the critical angle for glass ($n = 1.5$) to air.
answer: **About 41.8°.**

q: Find the critical angle for water ($n = 1.33$) to air.
answer: $\sin^{-1}\left(\dfrac{1}{1.33}\right) \approx$ **48.8°**.

q: Find the critical angle for diamond ($n = 2.42$). Why does diamond sparkle so much?
answer: $\sin^{-1}\left(\dfrac{1}{2.42}\right) \approx$ **24.4°**. **The small critical angle traps light inside**, bouncing it around before it escapes in bright flashes.

q: Can total internal reflection happen when light goes from air into water?
answer: **No.** It only happens going from a slower material into a faster one.

q: A ray hits a glass block straight on, along the normal. Does it bend?
answer: **No**, though it does slow down.

q: How does an optical fibre carry light round bends?
answer: **The light keeps hitting the inside of the glass beyond the critical angle**, so it is totally reflected again and again.

q: Why does a prism split white light into colours?
answer: **Each colour has a slightly different refractive index**, so each bends by a different amount. Violet bends most, red least.
:::
