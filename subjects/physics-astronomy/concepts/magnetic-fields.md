---
id: magnetic-fields
title: Magnets and magnetic fields
prereqs: [current]
big: Magnets have north and south poles that attract opposites and repel likes, and the space around them holds a magnetic field; electric currents make magnetic fields too, which shows electricity and magnetism are linked.
recap: Every magnet has a north and a south pole; like poles repel, opposite poles attract, and poles always come in pairs. Field lines run from north to south outside a magnet, and a compass needle lines up with them. Moving charge makes a magnetic field: around a straight wire, the field lines are circles, with strength $B = \dfrac{\mu_0 I}{2\pi r}$, measured in teslas (T). A coil of wire carrying current, an electromagnet, acts like a bar magnet.
check:
  q: You snap a bar magnet in half. What do you get?
  options: ["Two smaller magnets, each with a north and a south pole", "A separate north pole and a separate south pole", "Two pieces that are no longer magnets", "One magnet and one ordinary piece of iron"]
  answer: 0
  why: Magnetic poles always come in pairs. Each half gets a new pole at the break, so each is a complete magnet with its own north and south. No one has ever found a lone north or south pole. The pieces stay magnetic, and both halves are alike.
---

## Poles

A magnet's pull is strongest at its two ends, its **poles**. Hang a bar magnet so it can turn freely and one end swings to point north: that end is its **north pole**. The other is its south pole.

| Bring together | Result |
|---|---|
| north and south | attract |
| north and north | repel |
| south and south | repel |
| either pole and an iron nail | attract (the nail becomes a magnet for a while) |

*Notice: this is like electric charge, likes repel and opposites attract. But unlike charge, poles never come alone.*

## Magnetic fields

Like electric charges, magnets fill the space around them with a field, a {{magnetic-field|magnetic field}}. Sprinkle iron filings around a bar magnet and they line up along curved lines from one pole to the other.

- Outside the magnet, field lines run from **north to south**.
- A small compass needle points along the field lines.
- Where lines bunch together, near the poles, the field is strongest.

The strength of a magnetic field is written B, measured in {{tesla|teslas}}, T. A fridge magnet is about 0.005 T; a hospital MRI scanner is 1.5 to 3 T.

## The Earth is a magnet

A compass works because the Earth has a magnetic field, as if a giant bar magnet lay inside it. The compass's north pole points to the Earth's geographic north. Since opposites attract, the Earth's magnetic pole up there is actually a **south** pole.^[n_earth_field]

## Currents make magnetic fields

In 1820, Hans Christian Ørsted noticed a compass needle jump when he switched on a nearby [[current|current]]. That was the first sign that electricity and magnetism are linked. **Moving charge makes a magnetic field.**

Around a long straight wire, the field lines are circles centred on the wire. The **right-hand grip rule** gives the direction: point your right thumb along the conventional current, and your fingers curl the way the field goes round. The field's strength is

$$B = \frac{\mu_0 I}{2\pi r}$$

where r is the distance from the wire and $\mu_0 = 4\pi \times 10^{-7}$ T·m/A is a constant.

Wind the wire into a coil and the fields of all the loops add up. The coil acts like a bar magnet, with a north and a south pole. Put an iron core inside and the field gets hundreds of times stronger. This is an **electromagnet**, which can be switched on and off. Scrapyard cranes, doorbells, loudspeakers and electric motors all use them.

In fact, all magnetism comes from moving charge. In a permanent magnet, it is the electrons in the atoms, spinning and orbiting, all lined up together.

:::example
title: A long straight wire carries 10 A. How strong is its magnetic field 5 cm away? Compare it with the Earth's field, about $5 \times 10^{-5}$ T.

1. Convert: $r = 5$ cm $= 0.05$ m.
   why: The formula uses metres.
   uses: []

2. $B = \dfrac{\mu_0 I}{2\pi r} = \dfrac{4\pi \times 10^{-7} \times 10}{2\pi \times 0.05}$.
   why: The field of a long straight wire.
   uses: [current]

3. The π cancels: $B = \dfrac{2 \times 10^{-7} \times 10}{0.05} = \dfrac{2 \times 10^{-6}}{0.05} = 4 \times 10^{-5}$ T.
   why: $\dfrac{4\pi}{2\pi} = 2$.
   uses: []

4. **$4 \times 10^{-5}$ T, about the same as the Earth's field.** That is why Ørsted's compass jumped.
   why: Comparing with something familiar.
   uses: []
:::

:::practice
q: A wire carries 100 A. Find the magnetic field 1 cm from it.
answer: $\dfrac{2 \times 10^{-7} \times 100}{0.01} =$ **0.002 T**.
:::

:::problems
q: Two north poles are brought close. What happens?
answer: **They repel.**

q: A bar magnet is snapped in half. What do you get?
answer: **Two magnets**, each with a north and a south pole.

q: Which way do field lines run outside a bar magnet?
answer: **From the north pole to the south pole.**

q: A compass is placed near a bar magnet's north pole. Which way does the compass's north end point?
answer: **Away from the magnet's north pole**, along the field lines.

q: Why does an iron nail stick to either pole of a magnet?
answer: **The magnet turns the nail into a magnet for a while**, with the opposite pole nearest, so it is always attracted.

q: A wire carries 10 A. Find the field 5 cm away.
answer: **$4 \times 10^{-5}$ T.**

q: You double the distance from a straight wire. What happens to the field?
answer: **It halves.** (Not a quarter: this field falls as $\frac{1}{r}$.)

q: The current in a wire is tripled. What happens to its field?
answer: **It triples.**

q: What shape are the field lines around a long straight wire?
answer: **Circles centred on the wire.**

q: A current flows straight up a wire. Looking down from above, which way does the field go round?
answer: By the right-hand grip rule: **anticlockwise.**

q: Give two ways to make an electromagnet stronger.
answer: **More current; more turns of wire.** An iron core helps a lot too.

q: The Earth's magnetic pole in the far north attracts the north end of a compass. What kind of pole is it really?
answer: **A south magnetic pole.** Opposites attract.
:::
