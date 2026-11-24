---
id: hookes-law
title: Springs and Hooke's law
prereqs: [force, proportional-reasoning]
big: A spring stretches in direct proportion to the force pulling it, F = kx, where k says how stiff the spring is; this holds until the spring is stretched too far.
recap: Hooke's law: the force a spring needs (or gives) is $F = kx$, where x is how far it is stretched or squashed from its natural length, and k is the spring constant in N/m. A stiffer spring has a bigger k. The spring pushes or pulls back toward its natural length. Past the elastic limit, the law fails and the spring stays bent.
check:
  q: A spring has a spring constant of 200 N/m. What force stretches it by 5 cm?
  options: ["10 N", "1000 N", "40 N", "0.25 N"]
  answer: 0
  why: Convert first: 5 cm is 0.05 m. $F = kx = 200 \times 0.05 = 10$ N. 1000 N uses 5 instead of 0.05, forgetting to convert centimetres to metres. 40 N divides 200 by 5. 0.25 N divides the stretch by k.
---

## Hanging weights on a spring

Hang a spring from a hook and add weights one at a time. Measure the stretch, the extra length beyond the spring's natural length:

| Force (N) | Stretch (cm) |
|---|---|
| 0 | 0 |
| 2 | 1 |
| 4 | 2 |
| 6 | 3 |
| 8 | 4 |

*Notice: every extra 2 N adds the same 1 cm. Double the force, double the stretch.*

That is [[proportional-reasoning|direct proportion]]. On a graph of force against stretch, it is a straight line through the origin.

## Hooke's law

$$F = kx$$

- F is the force stretching (or squashing) the spring, in newtons.
- x is the stretch or squash, measured from the natural length, in metres.
- k is the {{spring-constant|spring constant}}, in newtons per metre (N/m).

For the spring in the table, 2 N gives 0.01 m, so $k = \dfrac{2}{0.01} = 200$ N/m.

**k measures stiffness.** A big k means a stiff spring, like a car's suspension, which needs a big force for a small stretch. A small k means a floppy spring, like a toy Slinky.

**Why it is linear.** A spring is a coiled wire. Stretching it twists the wire a little along its whole length. For small twists, the wire resists in proportion to how far it is twisted, the way most solid materials do when bent only slightly.

## The spring pulls back

By the third law, the spring pulls back on whatever stretches it, with the same size of force. It always pulls **toward its natural length**:

- Stretched: it pulls back in.
- Squashed: it pushes back out.

That is why it is often written with a minus sign, $F = -kx$, meaning "the spring's force points opposite to the stretch".^[n_hooke_sign] This restoring force is what makes springs bounce, and the page on oscillation builds on it.

## The elastic limit

Stretch a spring too far and it stays longer when you let go. Beyond this {{elastic-limit|elastic limit}}, Hooke's law no longer holds; the graph curves away from a straight line. Spring scales and car suspensions are designed to work well below it.

:::example
title: A spring is 10 cm long. Hanging a 2 kg mass on it stretches it to 14.9 cm. Find the spring constant.

1. The force: the mass hangs still, so the spring pulls up with the mass's weight, $2 \times 9.8 = 19.6$ N.
   why: Balanced forces: spring pull equals weight.
   uses: [force]

2. The stretch: $14.9 - 10 = 4.9$ cm $= 0.049$ m.
   why: x is measured from the natural length, not the total length, and must be in metres.
   uses: []

3. $k = \dfrac{F}{x} = \dfrac{19.6}{0.049} = 400$ N/m.
   why: Rearranging $F = kx$ for k.
   uses: [rearranging-formulas]

4. The spring constant is **400 N/m**: each centimetre of stretch needs 4 N.
   why: Turning k into "newtons per centimetre" makes it easy to picture.
   uses: []
:::

:::practice
q: A spring with $k = 500$ N/m is pulled with 20 N. How far does it stretch?
answer: $x = \dfrac{F}{k} = \dfrac{20}{500} = 0.04$ m, which is **4 cm**.
:::

:::problems
q: A spring has $k = 200$ N/m. What force stretches it by 0.05 m?
answer: $200 \times 0.05 =$ **10 N**.

q: A force of 30 N stretches a spring by 0.15 m. Find k.
answer: $\dfrac{30}{0.15} =$ **200 N/m**.

q: A spring with $k = 500$ N/m is pulled with 20 N. How far does it stretch?
answer: **0.04 m (4 cm).**

q: The force on a spring doubles. What happens to the stretch?
answer: **It doubles**, as long as the spring stays within its elastic limit.

q: A spring is 10 cm long. An 8 N force stretches it to 14 cm. Find k.
answer: Stretch 4 cm $= 0.04$ m. $k = \dfrac{8}{0.04} =$ **200 N/m**.

q: A 2 kg mass hangs on a spring with $k = 400$ N/m. How far does the spring stretch?
answer: Force $19.6$ N. $x = \dfrac{19.6}{400} =$ **0.049 m** (4.9 cm).

q: A spring with $k = 1000$ N/m is squashed by 3 cm. How hard does it push back, and which way?
answer: $1000 \times 0.03 =$ **30 N, outward**, back toward its natural length.

q: A 1000 kg car rests on four springs, each with $k = 50{,}000$ N/m, sharing the weight equally. How far is each squashed?
answer: Each holds $\dfrac{9800}{4} = 2450$ N. $x = \dfrac{2450}{50{,}000} =$ **0.049 m** (about 5 cm).

q: Two identical springs hang side by side and share a load equally. Compared with one spring holding the load, how much do they stretch?
answer: Each carries half the force, so **each stretches half as far.** Together they act like one spring twice as stiff.

q: On a graph of force against stretch for a spring, what does the slope tell you?
answer: **The spring constant k**, since $k = \dfrac{F}{x}$.

q: A spring is stretched so far that it stays longer after you let go. What has happened?
answer: **It went past its elastic limit**, where Hooke's law stops working.

q: Spring A has $k = 100$ N/m and spring B has $k = 400$ N/m. The same 20 N pulls each. Compare their stretches.
answer: A: $0.2$ m. B: $0.05$ m. **The stiffer spring stretches a quarter as far.**
:::
