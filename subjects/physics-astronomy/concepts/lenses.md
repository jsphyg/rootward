---
id: lenses
title: Lenses and images
prereqs: [refraction]
big: A lens bends light by refraction so that rays from each point of an object meet again, making an image; one equation tells you where the image forms and how big it is.
recap: A converging (convex) lens brings parallel rays together at its focal point; a diverging (concave) lens spreads them as if from a focal point in front. The lens equation, $\dfrac{1}{f} = \dfrac{1}{d_o} + \dfrac{1}{d_i}$, links the focal length f, object distance $d_o$ and image distance $d_i$. Magnification is $m = -\dfrac{d_i}{d_o}$. A positive $d_i$ means a real image on the far side (upside down); a negative $d_i$ means a virtual image on the same side as the object (upright).
check:
  q: An object is 30 cm from a converging lens with a focal length of 10 cm. Where does the image form?
  options: ["15 cm from the lens", "20 cm from the lens", "7.5 cm from the lens", "40 cm from the lens"]
  answer: 0
  why: $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{30} = \dfrac{3}{30} - \dfrac{1}{30} = \dfrac{2}{30}$, so $d_i = 15$ cm. 20 cm subtracts the distances, $30 - 10$. 7.5 cm adds the fractions instead of subtracting. 40 cm adds the distances.
---

## Bending light on purpose

A magnifying glass makes small print look big. Held in sunlight, it focuses the rays to a burning bright spot. Your eye, cameras, glasses and telescopes all use lenses to make images.

A lens is a piece of glass or plastic with curved faces. Each ray bends by [[refraction|refraction]] as it enters and again as it leaves. The shape is chosen so the bending is just right.

| Lens | Shape | Parallel rays |
|---|---|---|
| converging (convex) | thicker in the middle | meet at the focal point, behind the lens |
| diverging (concave) | thinner in the middle | spread out, as if from a focal point in front |

The distance from the lens to the focal point is the **focal length**, f. A fatter, more curved lens bends more and has a shorter focal length.

## Where the image forms

Light spreads out from every point of an object. A converging lens catches those spreading rays and brings them together again at one point on the other side. All those meeting points together make the image.

The **lens equation** says where:

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

$d_o$ is the object's distance from the lens and $d_i$ is the image's. For a diverging lens, f is negative.

| Object distance (f = 10 cm) | Image distance | Image |
|---|---|---|
| very far | 10 cm | tiny, real, upside down, at the focal point |
| 30 cm | 15 cm | real, upside down, half size |
| 20 cm | 20 cm | real, upside down, same size |
| 15 cm | 30 cm | real, upside down, twice the size |
| 10 cm | no image (rays leave parallel) | |
| 5 cm | −10 cm | virtual, upright, twice the size: a magnifying glass |

*Notice: as the object moves in toward the focal point, the image moves out and grows. Inside the focal point, the lens becomes a magnifier.*

## Real and virtual images

A **real** image forms where light actually meets. You can catch it on a screen, as a projector or camera does. It is upside down. In the equation, $d_i$ comes out positive.

A **virtual** image is where the light only seems to come from, as with a magnifying glass or a mirror. You cannot catch it on a screen. In the equation, $d_i$ comes out negative.

## Magnification

$$m = -\frac{d_i}{d_o}$$

The size of m tells you how many times bigger the image is. A minus sign means the image is upside down.

Opticians measure lens strength in **dioptres**: the power is $\dfrac{1}{f}$ with f in metres. A 0.25 m lens has a power of 4 dioptres.

## Lenses at work

- **The eye**: the cornea and lens form a real, upside-down image on the retina. The brain turns it the right way up.
- **Glasses**: short-sighted eyes focus too strongly, so they get diverging lenses; long-sighted eyes get converging lenses.
- **Refracting telescopes**: a long-focus objective lens makes a real image of a distant object; a short-focus eyepiece magnifies it. The magnification is $\dfrac{f_{\text{objective}}}{f_{\text{eyepiece}}}$.

:::example
title: A magnifying glass has a focal length of 10 cm. You hold it 5 cm from a stamp. Where is the image and how much is it magnified?

1. Lens equation: $\dfrac{1}{d_i} = \dfrac{1}{f} - \dfrac{1}{d_o} = \dfrac{1}{10} - \dfrac{1}{5}$.
   why: Rearrange the lens equation for the image distance.
   uses: [refraction]

2. $\dfrac{1}{10} - \dfrac{2}{10} = -\dfrac{1}{10}$, so $d_i = -10$ cm.
   why: Negative means the image is on the same side as the stamp: virtual.
   uses: []

3. Magnification: $m = -\dfrac{-10}{5} = +2$.
   why: Positive m means upright.
   uses: []

4. **A virtual, upright image 10 cm from the lens, twice the size.** That is how a magnifier works: hold it closer than its focal length.
   why: Objects inside the focal point give magnified virtual images.
   uses: []
:::

:::practice
q: An object is 20 cm from a converging lens of focal length 10 cm. Find the image distance and magnification.
answer: $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{20} = \dfrac{1}{20}$, so **$d_i = 20$ cm**, and **m = −1**: real, upside down, same size.
:::

:::problems
q: An object is 30 cm from a lens with f = 10 cm. Find the image distance and magnification.
answer: **15 cm; m = −0.5** (real, upside down, half size).

q: An object is 15 cm from a lens with f = 10 cm. Find the image.
answer: $\dfrac{1}{d_i} = \dfrac{1}{10} - \dfrac{1}{15} = \dfrac{1}{30}$: **30 cm, m = −2** (twice the size, upside down).

q: A camera lens has f = 50 mm. It photographs a person 5 m away. How far behind the lens must the sensor be?
answer: $\dfrac{1}{d_i} = 20 - 0.2 = 19.8$ per metre, so **$d_i \approx 0.0505$ m (50.5 mm)**, just beyond the focal length.

q: A diverging lens has f = −20 cm. An object is 20 cm away. Find the image.
answer: $\dfrac{1}{d_i} = -\dfrac{1}{20} - \dfrac{1}{20} = -\dfrac{1}{10}$: **−10 cm, m = +0.5** (virtual, upright, half size).

q: Find the power of a lens with f = 0.25 m.
answer: **4 dioptres.**

q: A lens has a power of −2 dioptres. What kind is it, and what is its focal length?
answer: **Diverging; f = −0.5 m.**

q: An object sits exactly at the focal point of a converging lens. Where is the image?
answer: **Nowhere**: the rays leave parallel, so the image is "at infinity".

q: Is the image on a cinema screen real or virtual? Upright or upside down?
answer: **Real**, and **upside down** compared with the film, which is why the film is loaded upside down.

q: A telescope has an objective of focal length 1000 mm and an eyepiece of 25 mm. Find its magnification.
answer: $\dfrac{1000}{25} =$ **40 times**.

q: A short-sighted person sees close things clearly but distant things blurred. What kind of lens corrects this?
answer: **A diverging lens**, which spreads the rays a little before they reach the eye.

q: Why must you hold a magnifying glass closer than its focal length to a page?
answer: **Only objects inside the focal point give an upright, magnified, virtual image.** Further away, you get an upside-down real image instead.

q: What kind of image does the eye's lens form on the retina?
answer: **Real, upside down and smaller than the object.** The brain flips it.
:::
