---
id: conservation-of-energy
title: Conservation of energy
prereqs: [kinetic-energy, potential-energy]
big: Energy is never made or destroyed, only changed from one form to another, so the total stays the same; this lets you find speeds and heights without tracking forces.
recap: Energy changes form but the total never changes. Without friction, $KE + PE$ stays constant: $\tfrac{1}{2}mv_1^2 + mgh_1 = \tfrac{1}{2}mv_2^2 + mgh_2$. An object dropped from height h reaches $v = \sqrt{2gh}$, whatever its mass. Friction turns some energy into heat, which is still energy, just not useful motion.
check:
  q: A stone is dropped from 5 m. Ignoring air, how fast is it going when it hits the ground?
  options: ["about 9.9 m/s", "98 m/s", "49 m/s", "7.0 m/s"]
  answer: 0
  why: All the PE becomes KE: $mgh = \tfrac{1}{2}mv^2$, so $v^2 = 2gh = 2 \times 9.8 \times 5 = 98$ and $v = \sqrt{98} \approx 9.9$ m/s. 98 is $v^2$, before the square root. 49 is $gh$ without the 2 or the root. 7.0 is $\sqrt{49}$, which leaves out the 2.
---

## Energy changes form

Watch a swing. At the top of each swing it stops for a moment, high up. At the bottom it is low and fast. Then it climbs again and slows down. Height turns into speed, and speed turns back into height, over and over.

| Point on the swing | Height | Speed | Kinetic energy | Potential energy | Total |
|---|---|---|---|---|---|
| top (one side) | highest | 0 | 0 | most | the same |
| halfway down | middle | middle | some | some | the same |
| bottom | lowest | fastest | most | least | the same |

*Notice: the two kinds of energy trade places, but the total stays the same.*

## The law

The {{conservation-energy|law of conservation of energy}}: energy cannot be made or destroyed. It can only change from one form to another, or move from one object to another. The total stays the same.

Energy comes in many forms:

| Form | Example |
|---|---|
| kinetic (motion) | a rolling ball |
| gravitational potential (height) | water behind a dam |
| elastic (stretch) | a drawn bow |
| chemical | food, petrol, a battery |
| {{thermal-energy|thermal}} (heat) | a hot cup of tea |
| electrical, light, sound | a lamp, a speaker |

## Using it to solve problems

When only gravity does work, and friction and air resistance are small, kinetic plus potential energy is constant:

$$\tfrac{1}{2}mv_1^2 + mgh_1 = \tfrac{1}{2}mv_2^2 + mgh_2$$

The mass m is in every term, so it cancels. A heavy ball and a light ball dropped from the same height land at the same speed, just as the [[free-fall|free-fall]] page found.

**For a drop from rest**, all the PE becomes KE: $mgh = \tfrac{1}{2}mv^2$, so

$$v = \sqrt{2gh}$$

**Why this is powerful.** The energy method ignores the shape of the path. A roller coaster can twist and loop, and you still find its speed at any point from its height alone. With forces, you would have to work out every bend.

## Where friction fits

Friction does not destroy energy. It turns motion into heat. Rub your hands and they warm up. A sliding box stops, and the box and floor get very slightly warmer. The total is still the same, but the heat spreads out and cannot easily be turned back into motion.^[n_joule_heat]

So with friction: starting energy = finishing KE + PE + heat made.

:::example
title: A roller-coaster cart starts at rest at the top of a 20 m hill. Ignoring friction, how fast is it at the bottom (0 m), and at the top of the next hill, 8 m high?

1. Starting energy per kilogram: KE is 0, PE is $gh = 9.8 \times 20 = 196$ J per kg.
   why: The mass cancels, so working "per kilogram" keeps numbers simple.
   uses: [potential-energy]

2. At the bottom, all of it is KE: $\tfrac{1}{2}v^2 = 196$, so $v^2 = 392$ and $v \approx 19.8$ m/s.
   why: PE at 0 m is 0, so all the energy is motion.
   uses: [kinetic-energy]

3. At 8 m, PE per kg is $9.8 \times 8 = 78.4$ J, so KE per kg is $196 - 78.4 = 117.6$ J. Then $v^2 = 235.2$, $v \approx 15.3$ m/s.
   why: Total stays 196 J per kg; whatever is not PE is KE.
   uses: []

4. **About 19.8 m/s at the bottom and 15.3 m/s on the 8 m hill.** The track's shape between those points does not matter.
   why: Energy depends only on height and speed.
   uses: []
:::

:::practice
q: A pendulum bob is pulled aside so it is 0.2 m above its lowest point, then let go. How fast is it at the bottom?
answer: $v = \sqrt{2 \times 9.8 \times 0.2} = \sqrt{3.92} \approx$ **1.98 m/s**.
:::

:::problems
q: A ball is dropped from 20 m. How fast does it land, ignoring air?
answer: $\sqrt{2 \times 9.8 \times 20} = \sqrt{392} \approx$ **19.8 m/s**.

q: A ball is thrown straight up at 10 m/s. How high does it go?
answer: $\tfrac{1}{2}v^2 = gh$, so $h = \dfrac{100}{19.6} \approx$ **5.1 m**.

q: How fast must you throw a ball straight up to reach 10 m?
answer: $v^2 = 2 \times 9.8 \times 10 = 196$, so **v = 14 m/s**.

q: A skier starts at rest and slides down a smooth slope that drops 45 m. How fast is the skier at the bottom?
answer: $\sqrt{2 \times 9.8 \times 45} = \sqrt{882} \approx$ **29.7 m/s**.

q: A pendulum swings from 0.45 m above its lowest point. Find its speed at the bottom.
answer: $\sqrt{2 \times 9.8 \times 0.45} = \sqrt{8.82} \approx$ **2.97 m/s**.

q: A cart rolls along at 6 m/s and meets a smooth hill. How high up the hill can it go?
answer: $h = \dfrac{v^2}{2g} = \dfrac{36}{19.6} \approx$ **1.84 m**.

q: A stone is thrown straight down at 5 m/s from 10 m up. How fast does it land?
answer: Per kg: $\tfrac{1}{2} \times 25 + 98 = \tfrac{1}{2}v^2$, so $v^2 = 25 + 196 = 221$ and **v ≈ 14.9 m/s**.

q: The same stone is instead thrown sideways at 5 m/s from 10 m up. How fast does it land?
answer: **Also about 14.9 m/s.** Energy has no direction, so only the starting speed and the drop matter. (The direction it lands at is different.)

q: A heavy ball and a light ball are dropped from the same height. Which lands faster?
answer: **Neither.** Mass cancels from $mgh = \tfrac{1}{2}mv^2$.

q: A 40 kg sled starts at rest at the top of a 10 m hill and reaches the bottom at 12 m/s. How much energy went to heat through friction?
answer: Start: $40 \times 9.8 \times 10 = 3920$ J. End KE: $\tfrac{1}{2} \times 40 \times 144 = 2880$ J. Heat: $3920 - 2880 =$ **1040 J**.

q: A bouncing ball never returns to the height it was dropped from. Has energy been destroyed?
answer: **No.** Each bounce turns some energy into heat and sound, which spread out.

q: A cart on a smooth track goes through 12 m/s at the bottom of a dip. How fast is it at a point 5 m higher?
answer: Per kg: $\tfrac{1}{2} \times 144 = 72$ J at the bottom. At 5 m, PE is 49 J, so KE is 23 J: $v^2 = 46$, **v ≈ 6.78 m/s**.
:::
