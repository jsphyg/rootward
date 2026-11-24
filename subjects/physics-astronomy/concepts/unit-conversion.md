---
id: unit-conversion
title: Converting units
prereqs: [units, rearranging-formulas]
big: To change units, multiply by a fraction that equals 1, such as 1000 m over 1 km, and let the old unit cancel.
recap: A conversion factor is a fraction worth exactly 1, like $\dfrac{1000\ \text{m}}{1\ \text{km}}$. Multiply by it, arranged so the unit you want to get rid of cancels. To go from km/h to m/s, multiply by $\dfrac{1000\ \text{m}}{1\ \text{km}}$ and by $\dfrac{1\ \text{h}}{3600\ \text{s}}$, which is the same as dividing by 3.6.
check:
  q: Convert 72 km/h to m/s.
  options: ["20 m/s", "259.2 m/s", "72,000 m/s", "1.2 m/s"]
  answer: 0
  why: $72\ \tfrac{\text{km}}{\text{h}} \times \tfrac{1000\ \text{m}}{1\ \text{km}} \times \tfrac{1\ \text{h}}{3600\ \text{s}} = \tfrac{72{,}000}{3600} = 20$ m/s. 259.2 multiplies by 3.6 instead of dividing. 72,000 changes km to m but forgets the hours. 1.2 divides by 60, as if an hour were 60 seconds.
---

## Same length, different numbers

A football pitch is about 100 m long. That is 0.1 km, or 10,000 cm. The length did not change. Only the unit and the number did.

| Unit | Number |
|---|---|
| km | 0.1 |
| m | 100 |
| cm | 10,000 |

*Notice: a smaller unit needs a bigger number. Centimetres are tiny, so it takes a lot of them.*

## Multiply by 1

Since 1 km and 1000 m are the same length, this fraction is worth exactly 1:

$$\frac{1000\ \text{m}}{1\ \text{km}} = 1$$

A fraction like this is a {{conversion-factor|conversion factor}}. Multiplying by 1 never changes a value. So you can multiply by a conversion factor as often as you like, and the measurement stays the same. Only its unit changes.

Convert 3.5 km to metres:

$$3.5\ \cancel{\text{km}} \times \frac{1000\ \text{m}}{1\ \cancel{\text{km}}} = 3500\ \text{m}$$

**Why it works.** km on top and km on the bottom cancel, like the same letter on the top and bottom of a fraction. What is left is metres.

## Which way up?

Every conversion factor can be flipped. $\dfrac{1\ \text{km}}{1000\ \text{m}}$ is also worth 1. Pick the way up that puts the old unit on the **bottom**, so it cancels.

Convert 250 cm to metres. Centimetres must cancel, so cm goes on the bottom:

$$250\ \cancel{\text{cm}} \times \frac{1\ \text{m}}{100\ \cancel{\text{cm}}} = 2.5\ \text{m}$$

If you put it the wrong way up, the units do not cancel. You would get $\text{cm}^2/\text{m}$, a sign of a mistake.

## Chains of conversions

You can multiply by several factors in a row. Convert 2 hours to seconds:

$$2\ \cancel{\text{h}} \times \frac{60\ \cancel{\text{min}}}{1\ \cancel{\text{h}}} \times \frac{60\ \text{s}}{1\ \cancel{\text{min}}} = 7200\ \text{s}$$

Speeds need two changes, one for distance and one for time. To turn km/h into m/s:

$$1\ \frac{\cancel{\text{km}}}{\cancel{\text{h}}} \times \frac{1000\ \text{m}}{1\ \cancel{\text{km}}} \times \frac{1\ \cancel{\text{h}}}{3600\ \text{s}} = \frac{1000}{3600}\ \frac{\text{m}}{\text{s}} = \frac{1}{3.6}\ \text{m/s}$$

So **divide km/h by 3.6 to get m/s**, and multiply m/s by 3.6 to get km/h.

## Squared and cubed units

A square metre is a square 1 m on each side. Each side is 100 cm, so:

$$1\ \text{m}^2 = 100\ \text{cm} \times 100\ \text{cm} = 10{,}000\ \text{cm}^2$$

*Notice: the factor is squared too. A square metre is 10,000 square centimetres, not 100.*

In the same way, $1\ \text{m}^3 = 100^3\ \text{cm}^3 = 1{,}000{,}000\ \text{cm}^3$. Since a litre is $1000\ \text{cm}^3$, a cubic metre holds 1000 litres.

:::example
title: A car travels 150 km in 2 hours 30 minutes. What is its average speed in m/s?

1. Convert the distance: $150\ \cancel{\text{km}} \times \dfrac{1000\ \text{m}}{1\ \cancel{\text{km}}} = 150{,}000\ \text{m}$.
   why: The answer must be in metres, so km has to cancel.
   uses: [units]

2. Convert the time: 2 h 30 min is 2.5 h, and $2.5\ \cancel{\text{h}} \times \dfrac{3600\ \text{s}}{1\ \cancel{\text{h}}} = 9000\ \text{s}$.
   why: 30 minutes is half an hour. An hour is $60 \times 60 = 3600$ seconds.
   uses: []

3. Divide distance by time: $v = \dfrac{d}{t} = \dfrac{150{,}000\ \text{m}}{9000\ \text{s}} \approx 16.7\ \text{m/s}$.
   why: Speed is distance divided by time.
   uses: [rearranging-formulas]

4. Check another way: $\dfrac{150\ \text{km}}{2.5\ \text{h}} = 60$ km/h, and $60 \div 3.6 \approx 16.7$. The speed is **about 16.7 m/s**.
   why: Two routes to the same answer catch slips.
   uses: []
:::

:::practice
q: Convert 15 m/s to km/h.
answer: Multiply by 3.6: $15 \times 3.6 =$ **54 km/h**. In full: $15\ \tfrac{\text{m}}{\text{s}} \times \tfrac{1\ \text{km}}{1000\ \text{m}} \times \tfrac{3600\ \text{s}}{1\ \text{h}} = \tfrac{54{,}000}{1000} = 54$.
:::

:::problems
q: Convert 3.5 km to metres.
answer: $3.5 \times 1000 =$ **3500 m**.

q: Convert 250 cm to metres.
answer: $250 \times \dfrac{1\ \text{m}}{100\ \text{cm}} =$ **2.5 m**.

q: Convert 1500 g to kilograms.
answer: $1500 \times \dfrac{1\ \text{kg}}{1000\ \text{g}} =$ **1.5 kg**.

q: Convert 5 m to millimetres.
answer: $5 \times \dfrac{1000\ \text{mm}}{1\ \text{m}} =$ **5000 mm**.

q: Convert 45 minutes to hours.
answer: $45 \times \dfrac{1\ \text{h}}{60\ \text{min}} =$ **0.75 h**.

q: Convert 2 hours to seconds.
answer: $2 \times 60 \times 60 =$ **7200 s**.

q: Convert 90 km/h to m/s.
answer: Divide by 3.6: $90 \div 3.6 =$ **25 m/s**. In full: $\tfrac{90 \times 1000\ \text{m}}{3600\ \text{s}} = 25$.

q: Convert 15 m/s to km/h.
answer: Multiply by 3.6: **54 km/h**.

q: Convert $2\ \text{m}^2$ to square centimetres.
answer: $1\ \text{m}^2 = 100 \times 100 = 10{,}000\ \text{cm}^2$, so **$20{,}000\ \text{cm}^2$** ($2 \times 10^4$).

q: How many litres fit in $1\ \text{m}^3$? (1 litre is $1000\ \text{cm}^3$.)
answer: $1\ \text{m}^3 = 100^3 = 10^6\ \text{cm}^3$. Divide by 1000: **1000 litres**.

q: An inch is 2.54 cm. How many centimetres are in 12 inches (one foot)?
answer: $12 \times 2.54 =$ **30.48 cm**.

q: A mile is about 1609 m. Convert 60 miles per hour to m/s.
answer: $60 \times 1609 = 96{,}540$ m each hour. Divide by 3600 s: $96{,}540 \div 3600 \approx$ **26.8 m/s**.

q: Light travels at $3.0 \times 10^8$ m/s. What is that in km/h?
answer: Multiply by 3.6: $3.0 \times 3.6 = 10.8$, so $10.8 \times 10^8 =$ **$1.08 \times 10^9$ km/h**, about a billion km/h.

q: How many seconds are in a year of 365 days?
answer: $365 \times 24 \times 60 \times 60 = 31{,}536{,}000$, about **$3.15 \times 10^7$ s**.

q: A snail moves at 1 mm/s. How many metres does it cover in an hour?
answer: In an hour: $1\ \tfrac{\text{mm}}{\text{s}} \times 3600\ \text{s} = 3600$ mm. Convert: $3600 \div 1000 =$ **3.6 m**.

q: A runner covers 400 m in 50 s. What is the speed in km/h?
answer: $v = \dfrac{d}{t} = \dfrac{400\ \text{m}}{50\ \text{s}} = 8$ m/s. Multiply by 3.6: **28.8 km/h**.
:::
