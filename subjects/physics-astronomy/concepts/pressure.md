---
id: pressure
title: Pressure
prereqs: [force, density]
big: Pressure is force spread over an area; the same push presses much harder through a small area, and in a liquid the pressure grows with depth.
recap: Pressure is $P = \dfrac{F}{A}$, force divided by the area it acts on, in pascals: 1 Pa = 1 N/m². A smaller area gives a bigger pressure. In a fluid, the pressure at depth h is $\rho g h$ more than at the surface, and it pushes equally in all directions. The air above us presses with about 101,000 Pa, called one atmosphere.
check:
  q: A 600 N person stands on two shoes with a total area of 0.03 m² touching the floor. What pressure do they put on the floor?
  options: ["20,000 Pa", "18 Pa", "0.00005 Pa", "600 Pa"]
  answer: 0
  why: $P = \dfrac{F}{A} = \dfrac{600}{0.03} = 20{,}000$ Pa. 18 Pa multiplies force by area. 0.00005 divides area by force, upside down. 600 Pa ignores the area.
---

## Snowshoes and stilettos

Walk on deep snow in ordinary boots and you sink in. Strap on wide snowshoes and you stay on top. Your weight is the same both ways. What changes is the area it is spread over.

| Footwear | Force (your weight) | Area on the ground | Pressure |
|---|---|---|---|
| snowshoes | 600 N | 0.2 m² | 3000 Pa |
| boots | 600 N | 0.03 m² | 20,000 Pa |
| one stiletto heel | 600 N | 0.0001 m² | 6,000,000 Pa |

*Notice: the same force, on a smaller area, presses much harder.*

## The formula

{{pressure|Pressure}} is force per unit area:

$$P = \frac{F}{A}$$

The unit is the {{pascal|pascal}}, Pa. One pascal is one newton spread over one square metre: a very small pressure, about the press of a sheet of paper lying flat. Kilopascals (kPa) are common.

Sharp knives, needles and nails work by making the area tiny, so a modest force gives a huge pressure. Wide tyres, snowshoes and tank tracks do the opposite.

## Pressure in liquids

Dive to the bottom of a pool and your ears hurt. The water above is pressing down on you. A column of water of height h and area A has volume $Ah$, mass $\rho A h$, and weight $\rho A h g$. Spread over the area A:

$$P = \rho g h$$

This is the extra pressure at depth h, using the [[density|density]] ρ of the liquid. It depends only on depth, not on the shape of the container. In a fluid, the pressure pushes **equally in all directions**: up, down and sideways.

| Depth in water | Extra pressure |
|---|---|
| 1 m | 9800 Pa |
| 10 m | 98,000 Pa, about one atmosphere |
| 100 m | about 10 atmospheres |

## The air's pressure

We live at the bottom of an ocean of air. Its weight presses on everything with about 101,000 Pa, one **atmosphere**. We do not feel it because it pushes equally on all sides, and the fluids inside our bodies push back out. Higher up, there is less air above, so the pressure is lower; that is why your ears pop in a plane or on a mountain road.

:::example
title: Find the total pressure on a diver 20 m below the surface of the sea. Seawater's density is 1030 kg/m³ and the air pressure is 101,000 Pa.

1. Pressure from the water: $\rho g h = 1030 \times 9.8 \times 20$.
   why: The weight of the water above, per square metre.
   uses: [density]

2. $1030 \times 9.8 = 10{,}094$, and $\times 20 = 201{,}880$ Pa.
   why: Evaluate step by step.
   uses: []

3. Add the air pushing on the sea's surface: $201{,}880 + 101{,}000 = 302{,}880$ Pa.
   why: The air presses on the water, and the water passes that pressure down.
   uses: [force]

4. **About 303,000 Pa, three atmospheres.**
   why: Every 10 m of water adds about one atmosphere.
   uses: []
:::

:::practice
q: A box weighing 500 N rests on a base of area 0.25 m². What pressure does it put on the floor?
answer: $\dfrac{500}{0.25} =$ **2000 Pa**.
:::

:::problems
q: A 600 N person stands on 0.03 m² of shoe. Find the pressure.
answer: **20,000 Pa.**

q: The same person stands on one foot, 0.015 m². Find the pressure.
answer: **40,000 Pa**, doubled.

q: A 50 N force pushes a drawing pin with a point of area $1 \times 10^{-7}$ m². Find the pressure.
answer: $\dfrac{50}{10^{-7}} =$ **$5 \times 10^8$ Pa**. That is why it goes into wood easily.

q: A pressure of 4000 Pa acts on 0.5 m². Find the force.
answer: $F = PA =$ **2000 N**.

q: Find the extra pressure 5 m down in fresh water.
answer: $1000 \times 9.8 \times 5 =$ **49,000 Pa**.

q: Find the extra pressure at the bottom of a 2 m deep pool.
answer: **19,600 Pa.**

q: A diver is 20 m deep in seawater (1030 kg/m³). Find the total pressure.
answer: **About 303,000 Pa.**

q: At what depth in fresh water is the extra pressure equal to one atmosphere (101,000 Pa)?
answer: $h = \dfrac{101{,}000}{1000 \times 9.8} \approx$ **10.3 m**.

q: Two tanks of water are both 3 m deep, but one is twice as wide. Compare the pressure at their bottoms.
answer: **The same.** Pressure depends on depth, not width.

q: Why do dams get thicker toward the bottom?
answer: **The water pressure is greatest at the bottom**, since it grows with depth.

q: Why does a sharp knife cut better than a blunt one?
answer: **Its edge has a much smaller area**, so the same force gives a much bigger pressure.

q: The air pressure is 101,000 Pa. What force does the air put on a 0.5 m² table top?
answer: $101{,}000 \times 0.5 =$ **50,500 N**. Air presses up from underneath too, so it does not crush the table.
:::
