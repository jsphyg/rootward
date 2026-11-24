---
id: radioactive-decay
title: Radioactive decay and half-life
prereqs: [nuclear-physics, calculus:exponential-functions]
big: Unstable nuclei break down at random, giving out radiation; you cannot say when one nucleus will decay, but a large number halve in a fixed time, the half-life, so the amount left falls exponentially.
recap: Unstable nuclei decay by giving out alpha particles (helium nuclei: A down 4, Z down 2), beta particles (electrons, as a neutron turns into a proton: Z up 1), or gamma rays (high-energy photons: no change in A or Z). Each nucleus decays at random, but in a large sample, half decays every half-life T: $N = N_0\left(\tfrac{1}{2}\right)^{t/T} = N_0 e^{-\lambda t}$, with decay constant $\lambda = \dfrac{\ln 2}{T}$. Carbon dating uses carbon-14's half-life of 5730 years.
check:
  q: A sample of a radioactive isotope is left for three half-lives. What fraction is left?
  options: ["one eighth", "one third", "one sixth", "none"]
  answer: 0
  why: Each half-life halves what is left: $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$. One third assumes a third goes each time. One sixth multiplies 3 by 2. "None" assumes the sample decays at a steady rate and finishes, but halving never reaches zero.
---

## Unstable nuclei

Most nuclei are stable and last forever. Some have the wrong mix of protons and neutrons, or are simply too big, and sooner or later they break down, giving out radiation. This is {{radioactivity|radioactive decay}}, discovered by Henri Becquerel and Marie Curie in the 1890s.

| Radiation | What it is | Change to the nucleus | Stopped by |
|---|---|---|---|
| alpha (α) | 2 protons + 2 neutrons (a helium nucleus) | A down 4, Z down 2 | a sheet of paper, or skin |
| beta (β) | a fast electron, made when a neutron turns into a proton | A same, Z up 1 | a few mm of aluminium |
| gamma (γ) | a high-energy photon | no change in A or Z | several cm of lead, partly |

*Notice: alpha and beta decay change the element, because they change Z. Gamma just carries away extra energy.*

All three are ionising radiation: they can damage living cells. Alpha is the most damaging if swallowed or breathed in, but the least penetrating from outside.

## Random, but predictable

You cannot say when any one [[nuclear-physics|nucleus]] will decay. It is truly random, like a coin toss. But with billions of nuclei, the randomness averages out. In a fixed time, a fixed **fraction** decays.

The {{half-life|half-life}}, T, is the time for half the nuclei in a sample to decay.

| Time | Fraction left |
|---|---|
| 0 | 1 |
| 1 half-life | $\frac{1}{2}$ |
| 2 half-lives | $\frac{1}{4}$ |
| 3 half-lives | $\frac{1}{8}$ |
| 10 half-lives | about $\frac{1}{1000}$ |

:::widget plot
fn: x >= 0 ? 100*Math.pow(0.5, x/5.73) : NaN
x: -1 25
y: -10 115
points: 5.73,50; 11.46,25
xname: kyr
yname: % left
label: carbon-14
labelat: topleft
caption: Carbon-14 decay, with time in thousands of years (kyr). Every 5730 years, half of what is left decays: 50% after one half-life, 25% after two, 12.5% after three. The curve gets closer and closer to zero but never reaches it.
:::

## The decay equation

Halving every T is an [[calculus:exponential-functions|exponential function]]:

$$N = N_0\left(\tfrac{1}{2}\right)^{t/T}$$

$N_0$ is the starting number and N the number left after time t. The same curve is often written with e:

$$N = N_0 e^{-\lambda t}, \quad \lambda = \frac{\ln 2}{T}$$

λ, the **decay constant**, is the chance per second that any one nucleus decays. The **activity**, decays per second, is $\lambda N$, so it falls by half each half-life too.^[n_decay_rate]

Half-lives range from a fraction of a second to billions of years: iodine-131 has 8 days, carbon-14 has 5730 years, uranium-238 has 4.5 billion years.

## Carbon dating

Living things keep taking in carbon, including a small, steady share of radioactive carbon-14. When they die, intake stops and the carbon-14 decays. Measure how much is left compared with a living sample, and you know how long ago it died. It works back to about 50,000 years.

:::example
title: A piece of ancient wood has 30% of the carbon-14 that living wood has. How old is it? (Half-life 5730 years.)

1. Write $0.3 = \left(\tfrac{1}{2}\right)^{t/5730}$.
   why: N/N₀ is the fraction left.
   uses: [calculus:exponential-functions]

2. Take logs of both sides: $\ln 0.3 = \dfrac{t}{5730}\ln 0.5$.
   why: Logarithms bring the exponent down.
   uses: [calculus:exponential-functions]

3. $t = 5730 \times \dfrac{\ln 0.3}{\ln 0.5} = 5730 \times \dfrac{-1.204}{-0.693} \approx 5730 \times 1.737$.
   why: Rearrange for t.
   uses: []

4. **About 9950 years old.** Check: 30% is between 50% (5730 years) and 25% (11,460 years), as it should be.
   why: A quick sense check with whole half-lives.
   uses: [nuclear-physics]
:::

:::practice
q: Iodine-131 has a half-life of 8 days. What fraction of a sample is left after 24 days?
answer: 24 days is 3 half-lives: **$\frac{1}{8}$**.
:::

:::problems
q: What fraction is left after 3 half-lives?
answer: **One eighth.**

q: 100 g of cobalt-60 (half-life 5.27 years) is stored for 10.54 years. How much is left?
answer: Two half-lives: **25 g**.

q: A sample's activity falls from 800 to 100 decays per second in 6 hours. Find the half-life.
answer: 800 → 400 → 200 → 100 is 3 half-lives in 6 hours: **2 hours**.

q: Find the decay constant for a half-life of 10 s.
answer: $\lambda = \dfrac{0.693}{10} \approx$ **0.0693 per second**.

q: What fraction is left after half a half-life?
answer: $\left(\tfrac{1}{2}\right)^{0.5} \approx$ **0.707**, about 71%.

q: Wood has 25% of the carbon-14 of living wood. How old is it?
answer: Two half-lives: **11,460 years**.

q: Wood has 30% of the carbon-14 of living wood. How old is it?
answer: **About 9950 years.**

q: Uranium-238 (Z = 92) gives out an alpha particle. What are the new A and Z?
answer: **A = 234, Z = 90**: thorium-234.

q: Carbon-14 (Z = 6) gives out a beta particle. What does it become?
answer: **Nitrogen-14** (Z = 7, A = 14).

q: A nucleus gives out a gamma ray. How do A and Z change?
answer: **They don't.** It just loses energy.

q: Which radiation is stopped by paper? Which needs thick lead?
answer: **Alpha is stopped by paper. Gamma needs thick lead** (and even then, some gets through).

q: Can you predict when one particular nucleus will decay?
answer: **No.** Decay is random; only the behaviour of large numbers is predictable.
:::
