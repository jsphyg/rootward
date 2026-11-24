---
id: buoyancy
title: Buoyancy (why things float)
prereqs: [pressure, weight]
big: A fluid pushes up on anything in it with a force equal to the weight of the fluid it pushes aside; an object floats if that upward push can match its weight, which happens when it is less dense than the fluid.
recap: Archimedes' principle: the upward buoyant force (upthrust) equals the weight of fluid displaced, $F_b = \rho_{\text{fluid}} V_{\text{displaced}}\, g$. An object less dense than the fluid floats, sinking until it displaces its own weight of fluid; the fraction under the surface is $\dfrac{\rho_{\text{object}}}{\rho_{\text{fluid}}}$. An object denser than the fluid sinks, but still feels the upthrust, so it seems lighter.
check:
  q: A 0.002 m³ block is held completely under water. How big is the buoyant force on it?
  options: ["19.6 N", "2 N", "0.0196 N", "It depends on what the block is made of"]
  answer: 0
  why: It displaces 0.002 m³ of water, with mass $1000 \times 0.002 = 2$ kg and weight $2 \times 9.8 = 19.6$ N. That is the upthrust. 2 N leaves out g. 0.0196 N forgets the water's density. The material does not matter for the upthrust, only the volume of water pushed aside; the material decides whether the block then floats or sinks.
---

## Lighter in water

Lift a friend in a swimming pool and they feel light. Push a beach ball under water and it fights to come back up. Water pushes up on things in it. This push is called the {{buoyancy|buoyant force}}, or upthrust.

## Where the push comes from

[[pressure|Pressure]] in water grows with depth. Picture a box under water. The water presses on its bottom harder than on its top, because the bottom is deeper. The sideways pushes cancel, but the extra push from below is left over. That is the upthrust.

Work it out and the result is neat. The upthrust is exactly the weight of the water that would fill the space the object takes up: the weight of the **displaced** water. This is {{archimedes|Archimedes' principle}}:

$$F_b = \rho_{\text{fluid}}\, V_{\text{displaced}}\, g$$

**A quick way to see it.** Imagine a blob of water inside the pool, the same shape as the object. It just sits there, so the water around it must push up on it with exactly its own weight. Swap the blob for the object, and the surrounding water pushes the same way.

## Float or sink?

Compare the upthrust when fully under with the object's [[weight|weight]]:

| Object's density, compared with the fluid | Result |
|---|---|
| less | upthrust beats weight: it rises and floats, partly out of the fluid |
| equal | they balance: it hangs at any depth, like a fish |
| more | weight wins: it sinks, but feels lighter |

*Notice: floating depends on density, not on weight. A huge log floats; a tiny pebble sinks.*

A floating object settles so it displaces **its own weight** of fluid. The fraction under the surface is the ratio of densities. Ice, at 920 kg/m³ in water at 1000 kg/m³, floats with 92% under: the "tip of the iceberg" really is just the tip.

A steel ship floats because its hull is mostly air inside. The ship as a whole, steel plus air, is less dense than water.

## In air

Air is a fluid too, so everything feels a tiny upthrust from it. A helium balloon rises because helium is less dense than air, so the upthrust on the balloon beats its weight.

:::example
title: A 0.5 m³ log has a density of 600 kg/m³. Does it float in water? If so, how much of it is under the surface?

1. Compare densities: 600 is less than 1000, so **it floats**.
   why: Less dense than the fluid means the upthrust can match the weight.
   uses: []

2. The log's weight: $600 \times 0.5 \times 9.8 = 2940$ N.
   why: Mass is density times volume.
   uses: [weight]

3. Floating, it must displace 2940 N of water: $V = \dfrac{2940}{1000 \times 9.8} = 0.3$ m³.
   why: A floating object displaces its own weight of fluid.
   uses: [pressure]

4. **0.3 m³ of the 0.5 m³, which is 60%, is under water.** That matches $\dfrac{600}{1000}$.
   why: The fraction under is the ratio of densities.
   uses: []
:::

:::practice
q: A stone of volume 0.001 m³ is under water. Find the upthrust on it.
answer: $1000 \times 0.001 \times 9.8 =$ **9.8 N**.
:::

:::problems
q: A 0.002 m³ block is held under water. Find the upthrust.
answer: **19.6 N.**

q: A 5 kg rock of volume 0.002 m³ sits on the bottom of a pond. Find its weight, the upthrust, and the force needed to lift it in the water.
answer: Weight **49 N**. Upthrust **19.6 N**. Lifting force $49 - 19.6 =$ **29.4 N**.

q: Will a block of density 800 kg/m³ float in water?
answer: **Yes**, with 80% of it under the surface.

q: Will an iron bolt (7900 kg/m³) float in mercury (13,600 kg/m³)?
answer: **Yes.** Iron is less dense than mercury.

q: Ice (920 kg/m³) floats in seawater (1030 kg/m³). What fraction is under?
answer: $\dfrac{920}{1030} \approx$ **89%**.

q: A 0.5 m³ log of density 600 kg/m³ floats. How much of it is under water?
answer: **0.3 m³ (60%).**

q: A floating boat weighs 20,000 N. What volume of water does it displace?
answer: $\dfrac{20{,}000}{1000 \times 9.8} \approx$ **2.04 m³**.

q: A floating cube has 70% of its volume under water. Find its density.
answer: **700 kg/m³.**

q: A rock weighs 30 N in air and 20 N when hung in water. Find the upthrust, its volume, and its density.
answer: Upthrust **10 N**. Volume $\dfrac{10}{1000 \times 9.8} \approx$ **0.00102 m³**. Mass $\dfrac{30}{9.8} \approx 3.06$ kg, so density $\approx$ **3000 kg/m³**.

q: How does a steel ship float, when steel is denser than water?
answer: **The hull is full of air**, so the ship's average density is less than water's.

q: Why does a helium balloon rise?
answer: **Helium is less dense than air**, so the air's upthrust is bigger than the balloon's weight.

q: A ship sails from the sea into a freshwater river. Does it float higher or lower?
answer: **Lower.** Fresh water is less dense, so the ship must displace more of it to equal its weight.
:::
