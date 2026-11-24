---
id: tides
title: Tides
prereqs: [gravitation, moon-phases]
big: The Moon pulls harder on the near side of the Earth than on the far side; this difference stretches the oceans into two bulges, one toward the Moon and one away, so most coasts get two high tides a day.
recap: Tides come from the difference in the Moon's gravity across the Earth. The near side is pulled more than the Earth's centre, and the centre more than the far side, so the Earth is stretched along the Earth-Moon line, making two ocean bulges. As the Earth turns, a place passes through both bulges: two high tides about every 24 h 50 min. The Sun adds a tide about half as strong. When Sun and Moon line up (new and full moon), tides are biggest (spring tides); at quarter moons they are smallest (neap tides).
check:
  q: Why are there two high tides a day rather than one?
  options: ["The Moon stretches the Earth, making a bulge on the side facing it and another on the opposite side", "The Sun makes one high tide and the Moon the other", "The Earth's spin throws water out on one side", "The Moon goes round the Earth twice a day"]
  answer: 0
  why: The near side is pulled toward the Moon more than the Earth's centre is, and the centre more than the far side, so the oceans bulge both toward and away from the Moon. The Sun's tide adds to the same two bulges; it does not make a separate one. The spin moves places through the bulges but does not cause them. The Moon orbits once a month, not twice a day.
---

## Two bulges

Most coasts get two high tides and two low tides each day. The Moon causes them, but not simply by "pulling the water up". If that were all, there would be one bulge toward the Moon, and one high tide a day.

The key is that [[gravitation|gravity]] weakens with distance. The Moon pulls on every part of the Earth, but:

| Part of the Earth | Distance from the Moon | Moon's pull |
|---|---|---|
| side facing the Moon | closest | strongest |
| centre | middle | middle |
| far side | furthest | weakest |

*Notice: compared with the centre, the near side is pulled toward the Moon, and the far side is left behind. The Earth gets stretched along the line to the Moon.*

So the oceans pile up in **two** bulges: one facing the Moon, one on the opposite side. As the Earth spins, each coast is carried through both bulges.

The Moon moves along its orbit as the Earth turns, so the Earth takes about 24 hours 50 minutes to bring a place back under the Moon. High tides come about every **12 hours 25 minutes**, a little later each day.

## How big is the stretch?

The difference in pull is tiny. The Moon's gravity at the Earth is about $3.3 \times 10^{-5}$ m/s², and it differs between the centre and the near side by only about $1.1 \times 10^{-6}$ m/s², about a ten-millionth of g. But it acts on whole oceans, and gives tides of about half a metre in open sea. Coastlines and bays funnel the water, and some places get tides over 10 m.

The stretching effect falls off with the **cube** of the distance, faster than gravity itself.^[n_tidal_cube]

## The Sun's part

The Sun pulls on the Earth far harder than the Moon, but it is so far away that the difference across the Earth is smaller. Its tide is about **half** the Moon's.

| Moon phase | Sun and Moon | Tides |
|---|---|---|
| new or full | in line: tides add | {{spring-tide|spring tides}}: biggest range |
| first or last quarter | at right angles: partly cancel | **neap tides**: smallest range |

("Spring" here means "springing up", nothing to do with the season.)

## Tidal locking

Tides work both ways. The Earth's pull stretched the Moon too, and long ago the friction of that stretching slowed the Moon's spin until it matched its orbit. That is why the Moon keeps one face to us, as on the [[moon-phases|Moon phases]] page. The Moon's tides are also slowing the Earth's spin very slightly, and pushing the Moon away by about 3.8 cm a year.

:::example
title: Compare the Sun's tidal effect on the Earth with the Moon's. Sun: $2.0 \times 10^{30}$ kg at $1.5 \times 10^{11}$ m. Moon: $7.35 \times 10^{22}$ kg at $3.84 \times 10^8$ m. Tidal stretching goes as $\dfrac{M}{d^3}$.

1. Mass ratio, Sun to Moon: $\dfrac{2.0 \times 10^{30}}{7.35 \times 10^{22}} \approx 2.7 \times 10^7$.
   why: The Sun is 27 million times more massive.
   uses: [gravitation]

2. Distance ratio, cubed: $\left(\dfrac{3.84 \times 10^8}{1.5 \times 10^{11}}\right)^3 = (0.00256)^3 \approx 1.7 \times 10^{-8}$.
   why: The Sun is about 390 times further, and tides fall as the cube of distance.
   uses: []

3. Multiply: $2.7 \times 10^7 \times 1.7 \times 10^{-8} \approx 0.46$.
   why: Tidal effect goes as mass over distance cubed.
   uses: []

4. **The Sun's tide is about 46% of the Moon's**, about half. That is why spring tides are noticeably bigger than neap tides.
   why: At spring tides the two add; at neap tides they partly cancel.
   uses: [moon-phases]
:::

:::practice
q: High tide is at 9:00 am. Roughly when is the next high tide?
answer: About 12 hours 25 minutes later: **around 9:25 pm**.
:::

:::problems
q: Why are there two high tides a day?
answer: **The Moon stretches the Earth into two bulges**, one facing it and one opposite.

q: At which Moon phases are tides biggest?
answer: **New and full moon** (spring tides).

q: At which phases are tides smallest?
answer: **First and last quarter** (neap tides).

q: High tide today is at 3:00 pm. About when is high tide tomorrow afternoon?
answer: About 50 minutes later: **around 3:50 pm**.

q: Why does the Sun, which pulls much harder on the Earth than the Moon, make smaller tides?
answer: **It is so far away that its pull hardly changes across the Earth**, and tides come from that difference.

q: Find the Moon's gravitational pull at the Earth, using $GM = 4.9 \times 10^{12}$ m³/s² and a distance of $3.84 \times 10^8$ m.
answer: $\dfrac{4.9 \times 10^{12}}{(3.84 \times 10^8)^2} \approx$ **$3.3 \times 10^{-5}$ m/s²**.

q: Why does the Moon always show us the same face?
answer: **Tidal locking**: the Earth's tidal pull slowed the Moon's spin until it matched its orbit.

q: If the Moon were twice as far away, what would happen to its tides?
answer: **They would be 8 times weaker** ($2^3$), since tides go as $\frac{1}{d^3}$.
:::
