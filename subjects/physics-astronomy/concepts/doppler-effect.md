---
id: doppler-effect
title: The Doppler effect
prereqs: [sound]
big: When a source of waves moves toward you, the waves bunch up and you hear a higher frequency; when it moves away, they spread out and the frequency drops. The same happens to light from moving stars and galaxies.
recap: A moving source squashes the waves ahead of it and stretches those behind. For sound from a source moving at $v_s$, the frequency you hear is $f' = f\dfrac{v}{v - v_s}$ when it approaches and $f' = f\dfrac{v}{v + v_s}$ when it moves away, where v is the speed of sound. For light, a receding source is redshifted and an approaching one blueshifted, with $\dfrac{\Delta\lambda}{\lambda} \approx \dfrac{v}{c}$ for speeds well below light's.
check:
  q: An ambulance's siren sounds at 700 Hz. It drives toward you at 20 m/s, and sound travels at 340 m/s. What frequency do you hear?
  options: ["about 744 Hz", "about 661 Hz", "720 Hz", "700 Hz"]
  answer: 0
  why: Approaching: $f' = 700 \times \frac{340}{340 - 20} = 700 \times \frac{340}{320} \approx 744$ Hz. 661 Hz is what you hear once it has passed and is moving away. 720 Hz just adds the speed to the frequency, which mixes up different units. 700 Hz is what the crew in the ambulance hear.
---

## The passing siren

An ambulance races past you. As it comes toward you, the siren sounds high. The moment it passes, the pitch drops: "neee-oooow". The driver hears a steady note the whole time.

| Ambulance | What you hear |
|---|---|
| coming toward you | higher than the true note |
| right beside you | the true note |
| moving away | lower than the true note |

*Notice: the change depends on the motion toward or away from you, not on how loud or close it is.*

This is the {{doppler|Doppler effect}}.

## Why it happens

The siren sends out one crest, then moves forward a little before sending the next. So ahead of the ambulance, the crests are packed closer together: a shorter wavelength. Behind it, they are spread further apart.

[[sound|Sound]] still travels at the same speed through the air. Shorter waves at the same speed reach your ear more often, so you hear a higher frequency. Longer waves arrive less often, so the pitch is lower.

## The formulas

For a source moving at speed $v_s$, with sound speed v:

$$\text{approaching: } f' = f\frac{v}{v - v_s} \qquad \text{moving away: } f' = f\frac{v}{v + v_s}$$

**Why these.** In one period T, the source sends one wave and moves forward $v_sT$. So the wavelength ahead is shortened from $vT$ to $(v - v_s)T$. Your ear gets $f' = \dfrac{v}{\text{wavelength}} = \dfrac{v}{(v - v_s)T} = f\dfrac{v}{v - v_s}$.

If instead **you** move toward a still source at speed $v_o$, you run into the crests more often: $f' = f\dfrac{v + v_o}{v}$. Moving away, use $v - v_o$.

## Light and the expanding universe

Light shows the same effect. A star or galaxy moving away has its light stretched to longer wavelengths, toward the red end of the spectrum: a **redshift**. One moving toward us shows a **blueshift**. For speeds well below the speed of light c:

$$\frac{\Delta\lambda}{\lambda} \approx \frac{v}{c}$$

Astronomers find the redshift of known lines in a star's light (the colours a given element always gives out) and read off its speed. In the 1920s, they found that almost every distant galaxy is redshifted, and the further away, the bigger the shift. That was the first evidence that the universe is expanding.

Police radar guns and weather radar use the Doppler effect too, with radio waves.

:::example
title: A car's horn sounds at 400 Hz. The car moves at 30 m/s, and sound travels at 343 m/s. What do you hear as it comes toward you, and as it goes away?

1. Approaching: $f' = 400 \times \dfrac{343}{343 - 30} = 400 \times \dfrac{343}{313}$.
   why: An approaching source shortens the waves, so divide by $v - v_s$.
   uses: [sound]

2. $f' \approx 400 \times 1.096 \approx 438$ Hz.
   why: Evaluate.
   uses: []

3. Moving away: $f' = 400 \times \dfrac{343}{373} \approx 400 \times 0.920 \approx 368$ Hz.
   why: A receding source stretches the waves, so divide by $v + v_s$.
   uses: []

4. **About 438 Hz coming, 368 Hz going.** The drop as it passes is 70 Hz, about a musical third.
   why: Comparing the two gives the change you hear.
   uses: []
:::

:::practice
q: A train whistle at 500 Hz moves away from you at 25 m/s. Sound travels at 343 m/s. What frequency do you hear?
answer: $500 \times \dfrac{343}{368} \approx$ **466 Hz**.
:::

:::problems
q: A 700 Hz siren approaches at 20 m/s (sound at 340 m/s). What do you hear?
answer: **About 744 Hz.**

q: The same siren moves away at 20 m/s. What do you hear?
answer: $700 \times \dfrac{340}{360} \approx$ **661 Hz**.

q: A car horn at 400 Hz approaches at 30 m/s (sound at 343 m/s). What do you hear?
answer: **About 438 Hz.**

q: You cycle at 20 m/s toward a still 500 Hz siren. What do you hear?
answer: $500 \times \dfrac{343 + 20}{343} \approx$ **529 Hz**.

q: A car horn at 400 Hz approaches at 30 m/s. What is the wavelength in front of the car?
answer: $\dfrac{343 - 30}{400} \approx$ **0.78 m**, instead of 0.86 m for a still car.

q: Does the driver of the ambulance hear the siren change pitch?
answer: **No.** The siren is not moving relative to the driver.

q: What happens to the wavelength ahead of a source moving at the speed of sound?
answer: **It shrinks to zero**: all the crests pile up into one strong shock wave, heard as a sonic boom.

q: A line in a galaxy's light that should be at 656.3 nm is seen at 662.9 nm. Is the galaxy coming or going, and how fast?
answer: Longer wavelength, so **moving away**. $v = c\dfrac{6.6}{656.3} \approx 3 \times 10^8 \times 0.0101 \approx$ **3000 km/s**.

q: A star's light is shifted to shorter wavelengths. What does that tell you?
answer: **It is moving toward us** (a blueshift).

q: Almost every distant galaxy is redshifted. What does that suggest?
answer: **They are moving away from us: the universe is expanding.**

q: A bat flies toward a wall, squeaking. Is the echo it hears higher or lower than its squeak?
answer: **Higher.** The bat is a moving source on the way out, and a moving listener on the way back, both toward the wall.

q: A source's speed doubles (still well below the speed of sound). Does the shift in pitch roughly double?
answer: **Yes, roughly.** For slow sources, the change in frequency is about $f\dfrac{v_s}{v}$, proportional to the speed.
:::
