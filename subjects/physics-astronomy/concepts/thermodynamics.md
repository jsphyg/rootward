---
id: thermodynamics
title: The laws of thermodynamics
prereqs: [specific-heat, conservation-of-energy, ideal-gas-law]
big: Heat and work are both ways of moving energy; the total is always kept (first law), but heat flows only from hot to cold on its own, so no engine can turn all its heat into work (second law).
recap: First law: $\Delta U = Q - W$. The change in a system's internal energy equals the heat put in minus the work it does. Second law: heat flows by itself only from hotter to colder, and no heat engine can turn all its heat into work. Its efficiency (work out ÷ heat in) can be at most $1 - \dfrac{T_{\text{cold}}}{T_{\text{hot}}}$, in kelvin. Third law: absolute zero can never quite be reached.
check:
  q: An engine runs between a hot side at 327°C and a cold side at 27°C. What is the highest efficiency it could possibly have?
  options: ["50%", "about 92%", "100%, if it is well built", "200%"]
  answer: 0
  why: In kelvin, the temperatures are 600 K and 300 K: $1 - \frac{300}{600} = 0.5$, so 50%. About 92% uses Celsius, $1 - \frac{27}{327}$, but the limit needs kelvin. 100% is impossible by the second law, however good the engine. More than 100% would make energy from nothing.
---

## Heat and work

You can warm your hands two ways: hold them near a fire (heat), or rub them together (work). Either way, their internal energy goes up. Pump up a bike tyre and the pump gets warm: the work you do squeezing the air raises its temperature.

Heat and work are both ways of moving energy into or out of something. The laws of {{thermodynamics|thermodynamics}} ("heat movement") describe how.

## The four laws in plain words

| Law | In plain words |
|---|---|
| zeroth | two things each at the same temperature as a third are at the same temperature as each other, which is why thermometers work |
| first | energy is kept: heat in, minus work out, is the gain in internal energy |
| second | heat flows by itself only from hot to cold, so no engine is 100% efficient |
| third | you can get closer and closer to absolute zero, but never reach it |

## The first law

$$\Delta U = Q - W$$

ΔU is the change in internal energy, the total [[temperature|thermal energy]] of the particles. Q is the heat put **in**. W is the work done **by** the system, like a gas pushing a piston out. This is just [[conservation-of-energy|conservation of energy]], with heat counted as energy.

| What happens | Q | W | ΔU | Result |
|---|---|---|---|---|
| heat a gas in a sealed can | + | 0 | + | it gets hotter |
| gas pushes a piston out, no heat | 0 | + | − | it cools (as a spray can does) |
| squeeze a gas quickly | 0 | − | + | it warms (the bike pump) |

## The second law and engines

A **heat engine** (a car engine, a power station) takes heat from something hot, turns part of it into work, and dumps the rest into something cold, usually the air or a river.

$$\text{efficiency} = \frac{\text{work out}}{\text{heat in}}$$

The second law says the dumped heat can never be zero. The best possible efficiency, for a perfect engine, depends only on the two temperatures in kelvin:

$$\text{maximum efficiency} = 1 - \frac{T_{\text{cold}}}{T_{\text{hot}}}$$

That is why power stations run their steam as hot as they can. Real engines do worse than this limit, because of friction and other losses: cars manage about 25 to 35%.

**Running it backwards.** A fridge or heat pump moves heat from cold to hot, the "wrong" way. It can, but only by using work, from its electric motor.

**Entropy.** The second law is often stated with {{entropy|entropy}}, a measure of how spread out energy is. Left alone, energy spreads out, and entropy goes up. Hot coffee cools to room temperature; room-temperature coffee never heats itself up by taking heat from the room.^[n_entropy]

:::example
title: An engine takes in 1000 J of heat from its hot side, and does 300 J of work. How much heat does it dump, and what is its efficiency? Its hot side is at 800 K and its cold side at 300 K. How does it compare with the best possible?

1. Heat dumped: $1000 - 300 = 700$ J.
   why: Energy is kept: what goes in comes out as work or dumped heat.
   uses: [conservation-of-energy]

2. Efficiency: $\dfrac{300}{1000} = 0.3$, or 30%.
   why: Useful work divided by heat in.
   uses: []

3. Best possible: $1 - \dfrac{300}{800} = 1 - 0.375 = 0.625$, or 62.5%.
   why: The second law limit, using kelvin.
   uses: [ideal-gas-law]

4. **700 J dumped; 30% efficient, about half the 62.5% limit**, which is typical for a real engine.
   why: Comparing shows how much is lost to friction and other waste.
   uses: []
:::

:::practice
q: A gas is given 500 J of heat and does 200 J of work pushing a piston. Find the change in its internal energy.
answer: $\Delta U = 500 - 200 =$ **+300 J**.
:::

:::problems
q: A gas gets 500 J of heat and does 200 J of work. Find ΔU.
answer: **+300 J.**

q: A gas is squeezed with 400 J of work, with no heat in or out. Find ΔU. Does it warm or cool?
answer: The gas does $-400$ J of work, so $\Delta U = 0 - (-400) =$ **+400 J. It warms.**

q: A gas expands, doing 100 J of work, and loses 50 J of heat. Find ΔU.
answer: $\Delta U = -50 - 100 =$ **−150 J**.

q: A sealed can of gas is heated with 600 J. Its volume cannot change. Find ΔU.
answer: No work is done, so **ΔU = +600 J**.

q: An engine takes in 1000 J and does 300 J of work. Find the heat dumped and the efficiency.
answer: **700 J; 30%.**

q: Find the maximum efficiency of an engine working between 800 K and 300 K.
answer: **62.5%.**

q: A power station's steam is at 600°C and its cooling water at 30°C. Find the maximum efficiency.
answer: Kelvin: 873 K and 303 K. $1 - \dfrac{303}{873} \approx$ **65%**.

q: A car engine is 25% efficient. It burns fuel giving 80,000 J. How much useful work does it do, and how much is wasted?
answer: **20,000 J of work; 60,000 J wasted** as heat.

q: An inventor claims an engine that turns all its heat into work. Which law does this break?
answer: **The second law.**

q: An inventor claims a machine that gives out more energy than it takes in. Which law does this break?
answer: **The first law** (conservation of energy).

q: Why does a fridge need to be plugged in?
answer: **Moving heat from cold to hot takes work**; heat only flows from hot to cold by itself.

q: Why does a bicycle pump get warm when you pump up a tyre?
answer: **You do work squeezing the air**, which raises its internal energy, so it warms.
:::
