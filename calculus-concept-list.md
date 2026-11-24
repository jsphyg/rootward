# Calculus: Concept List

The planned concept web for Calculus 1. Each concept lists its **direct** prerequisites only.

**Status key:** ✅ written to the full standard · ⬜ not started

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
| slope | Slope of a line | graphs | ✅ (rewritten 2026-11-23) |
| linear-functions | Lines and linear functions | slope | ✅ (concepts/linear-functions.md) |
| composite-functions | Composite functions | functions | ✅ (rewritten 2026-11-23) |
| inverse-functions | Inverse functions | composite-functions | ✅ (concepts/inverse-functions.md) |
| trig-basics | Sine, cosine, tangent | graphs | ✅ (concepts/trig-basics.md) |
| exponential-functions | Exponential functions | negative-fractional-exponents, functions | ✅ (concepts/exponential-functions.md) |
| logarithms | Logarithms | exponential-functions, inverse-functions | ✅ (concepts/logarithms.md) |

## Level 1: Limits

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| limits | Limits | functions, factoring | ✅ (rewritten 2026-11-23) |
| one-sided-limits | One-sided limits | limits | ✅ (concepts/one-sided-limits.md) |
| limit-laws | Limit laws | limits | ✅ (concepts/limit-laws.md) |
| continuity | Continuity | limits, graphs | ✅ (concepts/continuity.md) |
| limits-at-infinity | Limits at infinity | limits | ✅ (concepts/limits-at-infinity.md) |
| squeeze-theorem | The squeeze theorem | limit-laws | ✅ (concepts/squeeze-theorem.md) |

## Level 2: Derivatives

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| derivative | The derivative | slope, limits | ✅ (rewritten 2026-11-23) |
| derivative-function | The derivative as a function | derivative | ✅ (concepts/derivative-function.md) |
| power-rule | The power rule | derivative, negative-fractional-exponents | ✅ (rewritten 2026-11-23) |
| sum-constant-rules | Sum and constant-multiple rules | derivative | ✅ (concepts/sum-constant-rules.md) |
| product-rule | The product rule | power-rule | ✅ (concepts/product-rule.md) |
| quotient-rule | The quotient rule | product-rule | ✅ (concepts/quotient-rule.md) |
| chain-rule | The chain rule | power-rule, composite-functions | ✅ (rewritten 2026-11-23) |
| trig-derivatives | Derivatives of trig functions | sum-constant-rules, trig-basics, squeeze-theorem | ✅ (concepts/trig-derivatives.md) |
| exp-log-derivatives | Derivatives of exponentials and logs | sum-constant-rules, logarithms | ✅ (concepts/exp-log-derivatives.md) |
| implicit-differentiation | Implicit differentiation | chain-rule, product-rule, sum-constant-rules | ✅ (concepts/implicit-differentiation.md) |
| higher-derivatives | Second and higher derivatives | derivative-function, power-rule, sum-constant-rules | ✅ (concepts/higher-derivatives.md) |

## Level 3: Using derivatives

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| related-rates | Related rates | implicit-differentiation | ✅ (concepts/related-rates.md) |
| linear-approximation | Linear approximation | linear-functions, power-rule | ✅ (concepts/linear-approximation.md) |
| critical-points | Critical points | derivative-function, power-rule, sum-constant-rules | ✅ (concepts/critical-points.md) |
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

- 44 concepts in total (`expanding` added as a prerequisite of factoring; `negative-fractional-exponents` split out of exponents and added as a prerequisite of the power rule). At 1 to 2 concepts per working session, Calc 1 is a few weeks of steady work.
- Every page's math must be checked before anyone learns from it.
