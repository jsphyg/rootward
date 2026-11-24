---
id: hubble-law
title: The expanding universe (Hubble's law)
prereqs: [galaxies, redshift]
big: Distant galaxies are all moving away from us, and the further away they are, the faster they recede, in direct proportion; this is because space itself is expanding, and running the expansion backwards gives the universe an age of about 14 billion years.
recap: Hubble's law: a galaxy's recession speed is proportional to its distance, $v = H_0 d$. The Hubble constant $H_0$ is about 70 km/s per megaparsec (Mpc, a million parsecs). Galaxies are not flying through space away from us; space between them is stretching, carrying them apart, and every galaxy sees the same pattern, so there is no centre. The stretching also stretches light, which causes the redshift. Since $v = H_0 d$, every galaxy took the same time, $\dfrac{1}{H_0}$, to reach its distance, about 14 billion years. Hubble's law also gives distances: measure a galaxy's redshift, and $d = \dfrac{v}{H_0}$.
check:
  q: A galaxy recedes at 7000 km/s. With $H_0$ = 70 km/s/Mpc, how far away is it?
  options: ["100 Mpc", "490,000 Mpc", "0.01 Mpc", "7000 Mpc"]
  answer: 0
  why: $d = \dfrac{v}{H_0} = \dfrac{7000}{70} = 100$ Mpc. 490,000 multiplies instead of dividing. 0.01 divides the wrong way round. 7000 uses the speed as the distance.
---

## Everything is running away

In the 1910s, Vesto Slipher measured the spectra of spiral "nebulae" and found something odd: most were strongly [[redshift|redshifted]], moving away from us at hundreds of km/s. Then, in 1929, Edwin Hubble combined these speeds with his new [[galaxies|galaxy distances]]. The further away a galaxy was, the faster it was receding.

$$v = H_0\, d$$

| Symbol | Means | Unit |
|---|---|---|
| v | the speed the galaxy moves away from us, from its redshift | km/s |
| d | its distance | Mpc (megaparsecs: 1 Mpc = 1 million pc, about 3.26 million light-years) |
| $H_0$ | the {{hubble-constant|Hubble constant}}, about 70 | km/s per Mpc |

So a galaxy 1 Mpc away recedes at about 70 km/s; one 100 Mpc away, at about 7000 km/s. Georges Lemaître, a Belgian physicist and priest, had predicted this pattern from Einstein's equations in 1927.

:::widget plot
fn: x >= 0 ? 0.07*x : NaN
x: 0 120
y: -0.5 9
points: 50,3.5; 100,7
xname: Mpc
yname: 1000 km/s
label: v = H₀ d
labelat: topleft
caption: Hubble's law, with speed in thousands of km/s. Recession speed rises in a straight line with distance: twice as far, twice as fast. A galaxy 50 Mpc away recedes at 3500 km/s; one 100 Mpc away, at 7000 km/s. The slope of the line is the Hubble constant.
:::

## Space is stretching

It is tempting to picture an explosion with us at the centre. But that is not what is happening. Space itself is expanding, carrying the galaxies apart.

Picture a loaf of raisin bread rising in the oven. Every raisin moves away from every other. A raisin 1 cm from yours becomes 2 cm away in an hour: it moved 1 cm/h. One 3 cm away becomes 6 cm away: it moved 3 cm/h. Three times as far, three times as fast: Hubble's law. And every raisin sees exactly the same thing. **There is no centre.**

| Wrong picture | Right picture |
|---|---|
| galaxies flying through space away from us | space between galaxies stretching |
| we are at the centre | every galaxy sees all others receding; no centre |
| redshift from a Doppler shift through space | redshift from light's wavelength being stretched with space |

Galaxies close together, like those in the Local Group, are held by gravity and do not move apart. Andromeda is even approaching. The expansion wins only over large distances.

## The age of the universe

If every galaxy has been moving away at a steady speed, how long since they were all together? Time = distance ÷ speed:

$$t = \frac{d}{v} = \frac{d}{H_0\, d} = \frac{1}{H_0}$$

The distance cancels: every galaxy gives the same answer. With $H_0 = 70$ km/s/Mpc, $\frac{1}{H_0}$ is about **14 billion years**. The careful answer, allowing for how the expansion has changed, is 13.8 billion years. Not long ago, the universe was very different: the subject of the next page.

*Notice: measurements of $H_0$ by different methods disagree slightly, giving about 67 or about 73. This "Hubble tension" may be a measuring problem, or a sign of new physics.*

## A cosmic yardstick

Hubble's law turns a redshift into a distance. With $v \approx cz$ for small redshifts, $d = \dfrac{cz}{H_0}$. Astronomers now map millions of galaxies this way.

:::example
title: Show that $\frac{1}{H_0}$, with $H_0$ = 70 km/s/Mpc, is about 14 billion years.

1. Convert 1 Mpc to km: $10^6 \times 3.086 \times 10^{13}$ km $= 3.086 \times 10^{19}$ km.
   why: One parsec is $3.086 \times 10^{13}$ km.
   uses: [parallax]

2. $H_0 = \dfrac{70 \text{ km/s}}{3.086 \times 10^{19} \text{ km}} \approx 2.27 \times 10^{-18}$ per second.
   why: The km cancel, leaving a rate per second.
   uses: [unit-conversion]

3. $\dfrac{1}{H_0} \approx 4.4 \times 10^{17}$ s.
   why: Take the reciprocal.
   uses: []

4. **About 14 billion years** ($4.4 \times 10^{17}$ s ÷ $3.16 \times 10^7$ s per year).
   why: Converting seconds to years.
   uses: []
:::

:::practice
q: A galaxy is 50 Mpc away. How fast is it receding?
answer: $70 \times 50 =$ **3500 km/s**.
:::

:::problems
q: A galaxy is 100 Mpc away. Find its recession speed.
answer: **7000 km/s.**

q: A galaxy recedes at 10,500 km/s. Find its distance.
answer: $\dfrac{10{,}500}{70} =$ **150 Mpc**.

q: A galaxy has z = 0.02. Find its speed and distance.
answer: $v = 0.02 \times 300{,}000 = 6000$ km/s; $d = \dfrac{6000}{70} \approx$ **86 Mpc**.

q: A galaxy has z = 0.01. How far away is it in light-years?
answer: $d \approx 43$ Mpc, about **140 million light-years**.

q: A galaxy recedes at 15,000 km/s. Find z, and where the 656.3 nm line appears.
answer: $z = 0.05$; the line is at $656.3 \times 1.05 \approx$ **689 nm**.

q: If $H_0$ were 35 km/s/Mpc, what would $\frac{1}{H_0}$ be?
answer: **About 28 billion years**, twice as long: half the speed for each distance.

q: In the raisin bread, a raisin 5 cm away moves away at 5 cm/h. How fast does one 10 cm away move?
answer: **10 cm/h.**

q: Galaxies all move away from us. Does that mean we are at the centre?
answer: **No.** In a uniformly expanding space, every galaxy sees all others receding.

q: Why is Andromeda approaching us, despite Hubble's law?
answer: **It is close, and gravity within the Local Group beats the expansion.**

q: What causes the redshift of distant galaxies?
answer: **The stretching of space**, which stretches the light travelling through it.

q: Why does $\frac{1}{H_0}$ estimate the age of the universe?
answer: **Distance ÷ speed is the same for every galaxy**: the time since they were all together.
:::
