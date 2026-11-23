# Calculus: Concept List

The planned concept web for Calculus 1. Each concept lists its **direct** prerequisites only.

**Status key:** ✅ built in the prototype · ⬜ not started

---

## Level 0: Foundations (review topics)

These are the "you were supposed to already know this" topics. They are what make the format work, so they get full pages too.

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| exponents | Exponents and powers | none | ✅ (concepts/exponents.md) |
| negative-fractional-exponents | Negative and fractional exponents | exponents | ✅ (concepts/negative-fractional-exponents.md) |
| expanding | Expanding brackets | exponents | ✅ (concepts/expanding.md) |
| factoring | Factoring | expanding | ✅ (concepts/factoring.md) |
| functions | Functions | none | ✅ (concepts/functions.md, rewritten 2026-11-23) |
| graphs | Graphs of functions | functions | ✅ (concepts/graphs.md) |
| slope | Slope of a line | functions | ✅ |
| linear-functions | Lines and linear functions | slope | ⬜ |
| composite-functions | Composite functions | functions | ✅ |
| inverse-functions | Inverse functions | composite-functions | ⬜ |
| trig-basics | Sine, cosine, tangent | functions | ⬜ |
| exponential-functions | Exponential functions | exponents, functions | ⬜ |
| logarithms | Logarithms | exponential-functions, inverse-functions | ⬜ |

## Level 1: Limits

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| limits | Limits | functions, factoring | ✅ |
| one-sided-limits | One-sided limits | limits | ⬜ |
| limit-laws | Limit laws | limits | ⬜ |
| continuity | Continuity | limits, graphs | ⬜ |
| limits-at-infinity | Limits at infinity | limits | ⬜ |
| squeeze-theorem | The squeeze theorem | limit-laws | ⬜ |

## Level 2: Derivatives

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| derivative | The derivative | slope, limits | ✅ |
| derivative-function | The derivative as a function | derivative, graphs | ⬜ |
| power-rule | The power rule | derivative, negative-fractional-exponents | ✅ (prototype page needs the new link) |
| sum-constant-rules | Sum and constant-multiple rules | derivative | ⬜ (currently inside power rule) |
| product-rule | The product rule | power-rule | ⬜ |
| quotient-rule | The quotient rule | product-rule | ⬜ |
| chain-rule | The chain rule | power-rule, composite-functions | ✅ |
| trig-derivatives | Derivatives of trig functions | derivative, trig-basics, squeeze-theorem | ⬜ |
| exp-log-derivatives | Derivatives of exponentials and logs | derivative, logarithms | ⬜ |
| implicit-differentiation | Implicit differentiation | chain-rule | ⬜ |
| higher-derivatives | Second and higher derivatives | derivative-function | ⬜ |

## Level 3: Using derivatives

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| related-rates | Related rates | implicit-differentiation | ⬜ |
| linear-approximation | Linear approximation | derivative, linear-functions | ⬜ |
| critical-points | Critical points | derivative-function | ⬜ |
| increasing-decreasing | Increasing and decreasing | critical-points | ⬜ |
| concavity | Concavity and inflection points | higher-derivatives, increasing-decreasing | ⬜ |
| optimization | Optimization | increasing-decreasing | ⬜ |
| mean-value-theorem | The mean value theorem | derivative, continuity | ⬜ |
| lhopital | L'Hôpital's rule | derivative | ⬜ |

## Level 4: Integrals

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| antiderivatives | Antiderivatives | power-rule | ⬜ |
| riemann-sums | Area and Riemann sums | graphs | ⬜ |
| definite-integral | The definite integral | riemann-sums, limits | ⬜ |
| ftc | The fundamental theorem of calculus | definite-integral, antiderivatives | ⬜ |
| u-substitution | Substitution (u-sub) | ftc, chain-rule | ⬜ |
| area-between-curves | Area between curves | definite-integral | ⬜ |

---

## Learning paths

- **Calc 1, start to finish:** every concept above, foundations first.
- **Fast path to derivatives:** functions → slope → limits → derivative → power rule → composite functions → chain rule. (This is the prototype.)
- **I just need integrals:** power rule → antiderivatives → Riemann sums → definite integral → FTC → u-substitution. Foundations are pulled in only when a check question shows a gap.

---

## Notes

- The prototype's limits page uses factoring, so `factoring` is now listed as one of its prerequisites. The prototype page needs that link added.
- 44 concepts in total (`expanding` added as a prerequisite of factoring; `negative-fractional-exponents` split out of exponents and added as a prerequisite of the power rule). At 1 to 2 concepts per working session, Calc 1 is a few weeks of steady work.
- Every page's math must be checked before anyone learns from it.
