---
id: gravitation
title: Newton's law of gravitation
prereqs: [weight, proportional-reasoning]
big: Every mass pulls every other mass, with a force that grows with both masses and falls with the square of the distance between them.
recap: Newton's law of gravitation: $F = \dfrac{Gm_1m_2}{r^2}$, where r is the distance between the centres and $G = 6.67 \times 10^{-11}$ N·m²/kg². Double either mass and the force doubles; double the distance and it drops to a quarter (an inverse-square law). The pull is equal on both objects. At a planet's surface it gives $g = \dfrac{GM}{R^2}$.
check:
  q: Two moons pull on each other with some force. If the distance between them tripled, what would the force become?
  options: ["one ninth as big", "one third as big", "9 times as big", "one sixth as big"]
  answer: 0
  why: The force goes as $\frac{1}{r^2}$, so 3 times the distance gives $\frac{1}{3^2} = \frac{1}{9}$ of the force. One third forgets to square. 9 times has it the wrong way up: further apart means weaker. One sixth doubles the 3 instead of squaring it.
---

## The apple and the Moon

An apple falls to the ground. The Moon circles the Earth. Newton's great idea was that these are the same thing: the Earth's gravity pulls on both. The apple starts still, so it falls straight down. The Moon is moving sideways fast, so it keeps falling around the Earth instead of into it.

But the pull on the Moon is much weaker. The Moon is about 60 times further from the Earth's centre than the apple is, and its acceleration toward the Earth is about $60^2 = 3600$ times smaller than g.^[n_moon_test]

| Object | Distance from Earth's centre | Acceleration toward Earth |
|---|---|---|
| apple | 1 Earth radius | 9.8 m/s² |
| Moon | about 60 Earth radii | 0.0027 m/s², about 9.8 ÷ 3600 |

*Notice: 60 times further away, 3600 times weaker pull. The pull falls with the square of the distance.*

## The law

Every mass attracts every other mass. The force between two masses $m_1$ and $m_2$, with centres a distance r apart, is

$$F = \frac{Gm_1m_2}{r^2}$$

G is the {{gravitational-constant|gravitational constant}}, $6.67 \times 10^{-11}$ N·m²/kg².^[n_cavendish] It is tiny, which is why you do not feel a pull toward the person beside you. Gravity only becomes strong when at least one mass is huge, like a planet.

## Reading the law

The law is all [[proportional-reasoning|proportional reasoning]]:

| Change | Effect on the force |
|---|---|
| double one mass | 2 times |
| double both masses | 4 times |
| double the distance | a quarter |
| triple the distance | a ninth |
| half the distance | 4 times |

This is an {{inverse-square|inverse-square law}}: the force goes as $\frac{1}{r^2}$.

**Why the square?** Picture gravity's pull spreading out evenly in all directions from a planet. At distance r, it is spread over the surface of a sphere, whose area is $4\pi r^2$. Double the distance and the same pull is spread over four times the area, so it is a quarter as strong at each spot.

**Equal on both.** The Earth pulls you down with your [[weight|weight]], and you pull the Earth up with exactly the same force, a third-law pair. You accelerate a lot and the Earth hardly at all, because its mass is enormous.

## Where g comes from

Your weight is the Earth's gravity on you: $mg = \dfrac{GMm}{R^2}$, with M the Earth's mass and R its radius. Your mass cancels:

$$g = \frac{GM}{R^2}$$

:::example
title: Use the law of gravitation to find g at the Earth's surface. The Earth's mass is $5.97 \times 10^{24}$ kg and its radius is $6.37 \times 10^6$ m.

1. Write $g = \dfrac{GM}{R^2}$.
   why: Weight equals the gravitational force, and the mass m cancels.
   uses: [weight]

2. Top: $GM = 6.67 \times 10^{-11} \times 5.97 \times 10^{24} \approx 3.98 \times 10^{14}$.
   why: Multiply the number parts and add the powers of ten.
   uses: [scientific-notation]

3. Bottom: $R^2 = (6.37 \times 10^6)^2 \approx 4.06 \times 10^{13}$.
   why: Square the number part, double the power.
   uses: [scientific-notation]

4. $g = \dfrac{3.98 \times 10^{14}}{4.06 \times 10^{13}} \approx$ **9.8 m/s²**, the value we have used all along, now found from the Earth's size and mass.
   why: Dividing powers of ten: subtract them.
   uses: []
:::

:::practice
q: Two 1000 kg masses sit 1 m apart. Find the gravitational force between them.
answer: $\dfrac{6.67 \times 10^{-11} \times 1000 \times 1000}{1^2} =$ **$6.67 \times 10^{-5}$ N**, far too small to notice.
:::

:::problems
q: The distance between two objects doubles. What happens to the force?
answer: **It drops to a quarter.**

q: One mass is tripled and the distance is doubled. What happens to the force?
answer: $\dfrac{3}{4}$: **it becomes three quarters as big.**

q: Find the force between two 1000 kg masses 1 m apart.
answer: **$6.67 \times 10^{-5}$ N.**

q: Find the force between two 60 kg people 1 m apart.
answer: $6.67 \times 10^{-11} \times 3600 \approx$ **$2.4 \times 10^{-7}$ N**.

q: Find the force between the Earth ($5.97 \times 10^{24}$ kg) and the Moon ($7.35 \times 10^{22}$ kg), $3.84 \times 10^8$ m apart.
answer: $\dfrac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 7.35 \times 10^{22}}{(3.84 \times 10^8)^2} \approx$ **$2.0 \times 10^{20}$ N**.

q: A 70 kg person weighs 686 N on the ground. What would they weigh at twice the distance from the Earth's centre?
answer: **About 171.5 N**, a quarter.

q: Find g on the Moon: mass $7.35 \times 10^{22}$ kg, radius $1.74 \times 10^6$ m.
answer: $\dfrac{6.67 \times 10^{-11} \times 7.35 \times 10^{22}}{(1.74 \times 10^6)^2} \approx$ **1.6 m/s²**, about a sixth of Earth's.

q: Find g on Mars: mass $6.42 \times 10^{23}$ kg, radius $3.39 \times 10^6$ m.
answer: **About 3.7 m/s².**

q: The space station orbits 400 km up, at $6.77 \times 10^6$ m from the Earth's centre. Find g there.
answer: $9.8 \times \left(\dfrac{6.37}{6.77}\right)^2 \approx$ **8.7 m/s²**, still almost 90% of the surface value.

q: The Earth pulls a falling apple down with 1 N. How hard does the apple pull the Earth?
answer: **1 N, upward.** The forces are a third-law pair.

q: Why does a heavy ball fall with the same acceleration as a light one, even though gravity pulls it harder?
answer: **Twice the mass gets twice the pull, but is twice as hard to accelerate.** The mass cancels in $g = \dfrac{GM}{R^2}$.

q: A planet has twice the Earth's mass and twice its radius. Find g there.
answer: $\dfrac{2}{2^2} = \dfrac{1}{2}$ of Earth's: **4.9 m/s²**.
:::
