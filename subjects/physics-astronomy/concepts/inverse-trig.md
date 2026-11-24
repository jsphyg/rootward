---
id: inverse-trig
title: Finding an angle (inverse sine, cosine, tangent)
prereqs: [calculus:trig-basics, calculus:inverse-functions]
big: Sine, cosine and tangent turn an angle into a ratio of sides; their inverses run backwards, turning a ratio of sides into the angle.
recap: If you know two sides of a right triangle, an inverse trig function gives the angle. Opposite and adjacent: $\theta = \tan^{-1}\!\left(\dfrac{\text{opp}}{\text{adj}}\right)$. Opposite and hypotenuse: $\sin^{-1}$. Adjacent and hypotenuse: $\cos^{-1}$. The $-1$ means "inverse", not "one over".
check:
  q: In a right triangle, the side opposite angle θ is 3 and the hypotenuse is 6. What is θ?
  options: ["30°", "60°", "0.5°", "26.6°"]
  answer: 0
  why: Opposite and hypotenuse means sine: $\sin\theta = \frac{3}{6} = 0.5$, so $\theta = \sin^{-1}(0.5) = 30°$. 60° comes from using cosine, which needs the adjacent side. 0.5 is the ratio, not the angle; the inverse step was skipped. 26.6° is $\tan^{-1}(0.5)$, which treats 6 as the adjacent side.
---

## Running sine backwards

[[calculus:trig-basics|Sine, cosine and tangent]] take an angle and give a ratio:

| Angle θ | $\tan\theta$ |
|---|---|
| 0° | 0 |
| 30° | 0.577 |
| 45° | 1 |
| 60° | 1.732 |

*Notice: each angle gives one ratio. Read the table from right to left and each ratio gives back its angle.*

Physics often has the opposite problem. You know the sides, and you want the angle. A ramp rises 1 m over 10 m along the ground. How steep is it, in degrees? You know $\tan\theta = 0.1$. You need the θ that gives 0.1.

## The inverse functions

An [[calculus:inverse-functions|inverse function]] undoes a function. The inverse of tangent is written $\tan^{-1}$, and it answers "which angle has this tangent?"

$$\tan 45° = 1 \quad\Longleftrightarrow\quad \tan^{-1}(1) = 45°$$

Sine and cosine have inverses too, $\sin^{-1}$ and $\cos^{-1}$. They are also called arctan, arcsin and arccos.^[n_arc_names] On a calculator they are usually the second function of the tan, sin and cos keys.

**The $-1$ is not a power.** $\tan^{-1}(1)$ does **not** mean $\dfrac{1}{\tan 1}$. It means the angle whose tangent is 1. The notation is the same one used for any inverse function, like $f^{-1}$.

## Which one to use

Pick the function that matches the two sides you know, just as you would going forwards:

| You know | Use | Because |
|---|---|---|
| opposite and adjacent | $\theta = \tan^{-1}\!\left(\dfrac{\text{opp}}{\text{adj}}\right)$ | tangent is opposite over adjacent |
| opposite and hypotenuse | $\theta = \sin^{-1}\!\left(\dfrac{\text{opp}}{\text{hyp}}\right)$ | sine is opposite over hypotenuse |
| adjacent and hypotenuse | $\theta = \cos^{-1}\!\left(\dfrac{\text{adj}}{\text{hyp}}\right)$ | cosine is adjacent over hypotenuse |

For the ramp: $\theta = \tan^{-1}(0.1) \approx 5.7°$.

## Degrees or radians

A calculator gives the angle in whichever unit it is set to. In degree mode, $\sin^{-1}(1) = 90$. In radian mode, the same key gives $1.571$, which is $\frac{\pi}{2}$. Both are right; they are the same angle in different units. Most physics problems about slopes and directions use degrees, so check the mode first.

## Ratios that cannot happen

Sine and cosine are a side divided by the hypotenuse, and the hypotenuse is the longest side. So a sine or cosine can never be bigger than 1 (or less than −1). If you get $\sin^{-1}(1.5)$, the calculator shows an error, and you have made a mistake earlier, probably dividing the wrong way up. Tangent has no such limit.

Each inverse key gives one angle, even though other angles share the same ratio. For a right triangle, the angle it gives is the one you want.^[n_inverse_range]

:::example
title: You walk 3 km east, then 4 km north. In what direction, measured from east, is your end point from your start?

1. Draw it: east is the adjacent side (3), north is the opposite side (4), and the angle θ is at the start, measured up from east.
   why: Naming the sides relative to the angle tells you which function to use.
   uses: [calculus:trig-basics]

2. Opposite and adjacent are known, so use tangent: $\tan\theta = \dfrac{4}{3} \approx 1.333$.
   why: Tangent is opposite over adjacent.
   uses: []

3. Run it backwards: $\theta = \tan^{-1}(1.333) \approx 53.1°$.
   why: The inverse tangent gives the angle whose tangent is 1.333.
   uses: [calculus:inverse-functions]

4. The end point is **about 53° north of east**. Sense check: north (4) is longer than east (3), so the direction should be more than halfway to north, more than 45°. It is.
   why: A quick picture catches an answer that is on the wrong side of 45°.
   uses: []
:::

:::practice
q: A ramp rises 1 m over 10 m measured along the ground. What angle does it make with the ground?
answer: Opposite 1, adjacent 10: $\theta = \tan^{-1}(0.1) \approx$ **5.7°**.
:::

:::problems
q: Find θ if $\sin\theta = 0.5$.
answer: $\theta = \sin^{-1}(0.5) =$ **30°**.

q: Find θ if $\cos\theta = 0.5$.
answer: $\theta = \cos^{-1}(0.5) =$ **60°**.

q: Find θ if $\tan\theta = 1$.
answer: $\theta = \tan^{-1}(1) =$ **45°**. The opposite and adjacent sides are equal.

q: Find θ if $\tan\theta = 2$.
answer: $\tan^{-1}(2) \approx$ **63.4°**.

q: Find θ if $\sin\theta = 0.8$.
answer: $\sin^{-1}(0.8) \approx$ **53.1°**.

q: Find θ if $\cos\theta = 0.25$.
answer: $\cos^{-1}(0.25) \approx$ **75.5°**.

q: The opposite side is 3 and the adjacent side is 4. Find θ.
answer: $\tan^{-1}(0.75) \approx$ **36.9°**.

q: The opposite side is 5 and the hypotenuse is 13. Find θ.
answer: $\sin^{-1}\!\left(\frac{5}{13}\right) \approx$ **22.6°**.

q: The adjacent side is 12 and the hypotenuse is 13. Find θ.
answer: $\cos^{-1}\!\left(\frac{12}{13}\right) \approx$ **22.6°**. The same triangle as the last problem (5, 12, 13), so the same angle.

q: The opposite and adjacent sides are both 7. Find θ.
answer: $\tan^{-1}(1) =$ **45°**.

q: A 5 m ladder stands with its foot 1.5 m from a wall. What angle does it make with the ground?
answer: Adjacent (ground) 1.5, hypotenuse 5: $\cos^{-1}(0.3) \approx$ **72.5°**.

q: A student says $\tan^{-1}(1)$ means $\dfrac{1}{\tan 1}$. Are they right?
answer: **No.** $\tan^{-1}(1)$ is the angle whose tangent is 1, which is 45°. The $-1$ means inverse, not "one over".

q: What is $\sin^{-1}(1)$ in degrees, and in radians?
answer: **90°**, which is **$\frac{\pi}{2} \approx 1.571$ radians**.

q: Why does $\sin^{-1}(1.5)$ give an error?
answer: **Sine is opposite over hypotenuse, and the hypotenuse is the longest side, so a sine can never be more than 1.** No angle has a sine of 1.5.

q: A kite flies on a straight 50 m string, 30 m above the ground. What angle does the string make with the ground?
answer: Opposite (height) 30, hypotenuse (string) 50: $\sin^{-1}(0.6) \approx$ **36.9°**.

q: A plane climbs 300 m while flying 2000 m along the ground. What is its climb angle?
answer: $\tan^{-1}\!\left(\frac{300}{2000}\right) = \tan^{-1}(0.15) \approx$ **8.5°**.
:::
