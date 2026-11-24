---
id: redshift
title: Redshift and blueshift
prereqs: [doppler-effect, spectra]
big: When a star or galaxy moves away from us, the lines in its spectrum shift to longer, redder wavelengths; moving toward us, they shift blue. The size of the shift gives the speed along our line of sight.
recap: The Doppler effect for light shifts every spectral line by the same fraction. The redshift is $z = \dfrac{\Delta\lambda}{\lambda}$, and for speeds well below light's, $v \approx cz$. A redshift (longer wavelength) means moving away; a blueshift (shorter) means moving toward us. Only motion along the line of sight shows up. Redshifts are used to find star speeds, detect unseen companions and planets, and measure the expansion of the universe.
check:
  q: A hydrogen line normally at 656.3 nm is seen in a star at 660.0 nm. What is the star doing?
  options: ["Moving away at about 1700 km/s", "Moving toward us at about 1700 km/s", "Moving away at about 3.7 km/s", "It is very hot"]
  answer: 0
  why: The line moved to a longer wavelength, so the star is moving away. $z = \frac{3.7}{656.3} \approx 0.0056$, and $v \approx cz \approx 3 \times 10^5 \times 0.0056 \approx 1700$ km/s. "Toward us" has the direction backwards. 3.7 km/s uses the shift in nm as a speed. Temperature changes which lines appear, not where they sit.
---

## Shifted fingerprints

The [[spectra|spectra]] page showed that each element makes lines at exact wavelengths. In a star's spectrum, astronomers spot the familiar pattern of hydrogen, calcium or iron lines. But often the whole pattern is shifted a little, every line by the same fraction. That shift is the [[doppler-effect|Doppler effect]].

| Line | Normal wavelength | Seen in a receding galaxy |
|---|---|---|
| hydrogen, blue-green | 486.1 nm | 491.0 nm |
| hydrogen, red | 656.3 nm | 662.9 nm |

*Notice: both lines are shifted by about 1%. The pattern is the same; it has just slid to longer wavelengths.*

## Measuring the shift

The **redshift** z is the fractional change in wavelength:

$$z = \frac{\Delta\lambda}{\lambda} = \frac{\lambda_{\text{seen}} - \lambda_{\text{normal}}}{\lambda_{\text{normal}}}$$

For speeds well below the speed of light,

$$v \approx cz$$

| Shift | Means |
|---|---|
| to longer wavelengths (z positive): **redshift** | moving away |
| to shorter wavelengths (z negative): **blueshift** | moving toward us |

The shift only reveals motion **along the line of sight**, toward or away. Sideways motion causes no shift.

## What redshifts reveal

- **Star speeds.** Most nearby stars move at tens of km/s relative to the Sun.
- **Hidden companions.** A star orbiting an unseen partner swings toward and away from us, so its lines shift back and forth. This reveals binary stars and planets.
- **Spinning galaxies.** One side of a galaxy is redshifted and the other blueshifted, giving how fast it turns.
- **The expanding universe.** Nearly every distant galaxy is redshifted, and the further away, the bigger the shift. The last part of this book explores what that means.

:::example
title: A hydrogen line at 656.3 nm is seen in a galaxy at 662.9 nm. Find its redshift and speed.

1. $\Delta\lambda = 662.9 - 656.3 = 6.6$ nm.
   why: Seen minus normal.
   uses: [spectra]

2. $z = \dfrac{6.6}{656.3} \approx 0.0101$.
   why: Fractional change.
   uses: []

3. $v \approx cz = 3 \times 10^5 \text{ km/s} \times 0.0101 \approx 3000$ km/s.
   why: For small z, the speed is c times z.
   uses: [doppler-effect]

4. **z ≈ 0.01; moving away at about 3000 km/s.**
   why: Positive z is a redshift.
   uses: []
:::

:::practice
q: A line at 500.0 nm is seen at 500.5 nm. Find z and the speed.
answer: $z = \dfrac{0.5}{500} = 0.001$; $v \approx 300$ **km/s, moving away**.
:::

:::problems
q: A line at 656.3 nm is seen at 660.0 nm. Find the speed and direction.
answer: **About 1700 km/s, away.**

q: A line at 656.3 nm is seen at 655.0 nm. What is the star doing?
answer: $z = \dfrac{-1.3}{656.3} \approx -0.002$: **moving toward us at about 590 km/s.**

q: A galaxy has z = 0.02. Find its speed.
answer: **About 6000 km/s, away.**

q: A galaxy moves away at 15,000 km/s. Find z.
answer: $\dfrac{15{,}000}{300{,}000} =$ **0.05**.

q: A galaxy has z = 0.01. Where would the 486.1 nm line appear?
answer: $486.1 \times 1.01 \approx$ **491.0 nm**.

q: A star moves across the sky, neither toward nor away from us. Is its light shifted?
answer: **No.** Only line-of-sight motion causes a Doppler shift.

q: A star's lines shift back and forth every 10 days. What could cause this?
answer: **An unseen companion**, star or planet, making it swing toward and away from us.

q: Why do astronomers look at spectral lines, rather than colour, to measure redshift?
answer: **Lines are at exactly known wavelengths**, so even tiny shifts can be measured precisely.

q: Nearly every distant galaxy is redshifted. What does that suggest?
answer: **They are moving away from us: the universe is expanding.**
:::
