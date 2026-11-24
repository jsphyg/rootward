# Physics and Astronomy: Concept List

Approved by Joe on 2026-11-24 (all 123 pages; first counted as 124 by mistake). Writing starts at the beginning, Part A first.

The planned concept web for an introductory physics and astronomy course, with the math it needs. Each concept lists its **direct** prerequisites only. No loops.

- `calculus:<id>` means an existing page in the Calculus subject. It is reused, not rewritten.
- Physics is taught with algebra first. Pages marked (calc) show the calculus version and are optional side trips; nothing else depends on them.

**Status key:** ✅ written · ⬜ not started

---

## Part A: The math toolkit

Reused from Calculus: exponents, negative and fractional exponents, factoring, functions, graphs, slope, linear functions, inverse functions, sine/cosine/tangent, exponential functions, logarithms, derivatives, integrals.

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| rearranging-formulas | Solving equations and rearranging formulas | none | ✅ |
| scientific-notation | Scientific notation | calculus:negative-fractional-exponents | ✅ |
| significant-figures | Significant figures and precision | scientific-notation | ✅ |
| units | Units and the SI system (metres, kilograms, seconds, prefixes) | scientific-notation | ✅ |
| unit-conversion | Converting units | units, rearranging-formulas | ✅ |
| proportional-reasoning | Proportion and scaling (direct, inverse, inverse-square) | rearranging-formulas, calculus:exponents | ✅ |
| quadratic-formula | The quadratic formula | rearranging-formulas, calculus:factoring | ✅ |
| systems-of-equations | Two equations, two unknowns | rearranging-formulas | ✅ |
| pythagorean-theorem | The Pythagorean theorem | none | ✅ |
| inverse-trig | Finding an angle (inverse sine, cosine, tangent) | calculus:trig-basics, calculus:inverse-functions | ✅ |
| vectors | Vectors: size and direction | pythagorean-theorem | ✅ |
| vector-components | Breaking a vector into components | vectors, inverse-trig | ✅ |
| vector-addition | Adding vectors | vector-components | ✅ |

## Part B: Physics

### Level 1: Motion

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| position-displacement | Position, distance and displacement | vectors, units | ✅ |
| velocity | Speed and velocity | position-displacement, calculus:slope | ✅ |
| acceleration | Acceleration | velocity | ✅ |
| motion-graphs | Reading motion graphs | acceleration | ✅ |
| constant-acceleration | The constant-acceleration equations | motion-graphs, quadratic-formula | ✅ |
| free-fall | Free fall | constant-acceleration | ✅ |
| relative-motion | Relative motion | velocity, vector-addition | ✅ |
| projectile-motion | Projectile motion | free-fall, vector-components | ✅ |
| motion-calculus | (calc) Velocity and acceleration as derivatives | acceleration, calculus:higher-derivatives, calculus:antiderivatives | ✅ |

### Level 2: Forces

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| force | Forces and free-body diagrams | vector-addition | ✅ |
| newtons-first-law | Newton's first law (inertia) | force | ✅ |
| newtons-second-law | Newton's second law, F = ma | newtons-first-law, acceleration | ✅ |
| newtons-third-law | Newton's third law | force | ✅ |
| weight | Mass and weight | newtons-second-law, free-fall | ✅ |
| contact-forces | Normal force and tension | newtons-third-law, weight | ✅ |
| friction | Friction | contact-forces | ✅ |
| inclined-planes | Slopes and inclined planes | friction | ✅ |
| connected-objects | Connected objects and pulleys | contact-forces, systems-of-equations | ✅ |
| circular-motion | Circular motion and centripetal force | newtons-second-law | ✅ |
| hookes-law | Springs and Hooke's law | force, proportional-reasoning | ✅ |

### Level 3: Energy and momentum

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| work | Work | force, position-displacement | ✅ |
| kinetic-energy | Kinetic energy | work, constant-acceleration | ✅ |
| potential-energy | Gravitational potential energy | work, weight | ✅ |
| conservation-of-energy | Conservation of energy | kinetic-energy, potential-energy | ✅ |
| spring-energy | Energy stored in a spring | potential-energy, hookes-law | ✅ |
| power | Power | work | ✅ |
| work-integral | (calc) Work done by a changing force | work, calculus:definite-integral | ✅ |
| momentum | Momentum | newtons-second-law | ✅ |
| impulse | Impulse | momentum | ✅ |
| conservation-of-momentum | Conservation of momentum | momentum, newtons-third-law | ✅ |
| collisions | Elastic and inelastic collisions | conservation-of-momentum, kinetic-energy, systems-of-equations | ✅ |

### Level 4: Rotation and gravity

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| torque | Torque (turning force) | force | ✅ |
| equilibrium | Balance and static equilibrium | torque, newtons-first-law | ✅ |
| rotational-motion | Angular speed and angular acceleration | circular-motion | ✅ |
| angular-momentum | Angular momentum | rotational-motion, momentum, torque | ✅ |
| gravitation | Newton's law of gravitation | weight, proportional-reasoning | ✅ |
| orbits | Circular orbits | gravitation, circular-motion | ✅ |
| keplers-laws | Kepler's laws of planetary motion | orbits | ✅ |
| escape-velocity | Escape velocity | orbits, conservation-of-energy | ✅ |

### Level 5: Oscillations and waves

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| simple-harmonic-motion | Oscillation (simple harmonic motion) | hookes-law, newtons-second-law | ✅ |
| pendulum | The pendulum | simple-harmonic-motion, weight | ✅ |
| waves | Waves: wavelength, frequency, speed | simple-harmonic-motion | ✅ |
| sound | Sound | waves | ✅ |
| doppler-effect | The Doppler effect | sound | ✅ |
| interference | Superposition and interference | waves | ✅ |

### Level 6: Matter and heat

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| density | Density | units | ✅ |
| pressure | Pressure | force, density | ✅ |
| buoyancy | Buoyancy (why things float) | pressure, weight | ✅ |
| temperature | Temperature and thermal energy | kinetic-energy | ✅ |
| specific-heat | Heating things up (specific heat) | temperature | ✅ |
| heat-transfer | Conduction, convection and radiation | temperature | ✅ |
| ideal-gas-law | The ideal gas law | temperature, pressure | ✅ |
| thermodynamics | The laws of thermodynamics | specific-heat, conservation-of-energy, ideal-gas-law | ✅ |

### Level 7: Electricity and magnetism

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| electric-charge | Electric charge | force | ✅ |
| coulombs-law | Coulomb's law | electric-charge, proportional-reasoning | ✅ |
| electric-field | Electric fields | coulombs-law | ✅ |
| voltage | Electric potential (voltage) | electric-field, potential-energy | ✅ |
| current | Electric current | electric-charge | ✅ |
| ohms-law | Resistance and Ohm's law | current, voltage | ✅ |
| circuits | Series and parallel circuits | ohms-law, systems-of-equations | ✅ |
| electric-power | Electric power | ohms-law, power | ✅ |
| magnetic-fields | Magnets and magnetic fields | current | ✅ |
| magnetic-force | Magnetic force on moving charges | magnetic-fields, circular-motion | ✅ |
| induction | Electromagnetic induction | magnetic-fields, voltage | ✅ |
| em-waves | Light as an electromagnetic wave | induction, waves | ✅ |
| em-spectrum | The electromagnetic spectrum | em-waves | ✅ |

### Level 8: Light and optics

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| reflection | Reflection and mirrors | em-waves | ✅ |
| refraction | Refraction | reflection | ✅ |
| lenses | Lenses and images | refraction | ✅ |
| diffraction | Diffraction and gratings | interference, em-waves | ✅ |

### Level 9: Modern physics

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| photons | Light as particles (photons) | em-spectrum | ✅ |
| energy-levels | Atoms and energy levels | photons | ✅ |
| spectra | Emission and absorption spectra | energy-levels, diffraction | ✅ |
| blackbody-radiation | Glowing hot things (blackbody radiation) | photons, temperature | ✅ |
| special-relativity | Special relativity | relative-motion, em-waves | ✅ |
| mass-energy | E = mc² | special-relativity, conservation-of-energy | ✅ |
| general-relativity | Gravity as curved spacetime | special-relativity, gravitation | ✅ |
| nuclear-physics | The atomic nucleus | energy-levels, mass-energy | ✅ |
| radioactive-decay | Radioactive decay and half-life | nuclear-physics, calculus:exponential-functions | ✅ |
| fusion-fission | Fusion and fission | nuclear-physics | ✅ |

## Part C: Astronomy

### Level 10: The sky and the solar system

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| angular-size | Angles in the sky (angular size) | calculus:trig-basics | ✅ |
| sky-motions | Day, year and the turning sky | angular-size | ✅ |
| seasons | The seasons | sky-motions | ✅ |
| moon-phases | Phases of the Moon | sky-motions | ✅ |
| eclipses | Eclipses | moon-phases | ✅ |
| tides | Tides | gravitation, moon-phases | ✅ |
| planets | The planets and the solar system | keplers-laws | ✅ |
| solar-system-formation | How the solar system formed | planets, angular-momentum | ✅ |
| telescopes | Telescopes | lenses, em-spectrum | ✅ |
| astronomical-distances | Distances in space (AU, light-year, parsec) | unit-conversion, velocity | ✅ |
| parallax | Measuring distance by parallax | angular-size, astronomical-distances | ✅ |

### Level 11: Stars

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| brightness-distance | Brightness and the inverse-square law | proportional-reasoning, astronomical-distances | ✅ |
| magnitudes | The magnitude scale | brightness-distance, calculus:logarithms | ✅ |
| stellar-spectra | What starlight tells us (temperature and makeup) | spectra, blackbody-radiation | ✅ |
| redshift | Redshift and blueshift | doppler-effect, spectra | ✅ |
| binary-stars | Weighing stars with binary orbits | keplers-laws, redshift | ✅ |
| hr-diagram | The Hertzsprung–Russell diagram | magnitudes, stellar-spectra | ✅ |
| the-sun | The Sun: how a star shines | fusion-fission, blackbody-radiation | ✅ |
| star-formation | How stars form | hr-diagram, the-sun | ✅ |
| stellar-evolution | The life of a star | star-formation | ✅ |
| stellar-remnants | White dwarfs, neutron stars and supernovae | stellar-evolution, escape-velocity | ✅ |
| black-holes | Black holes | stellar-remnants, general-relativity | ✅ |
| exoplanets | Planets around other stars | redshift, planets | ✅ |

### Level 12: Galaxies and the universe

| id | Concept | Prerequisites | Status |
|---|---|---|---|
| milky-way | The Milky Way | stellar-evolution, orbits | ✅ |
| dark-matter | Dark matter | milky-way | ✅ |
| galaxies | Other galaxies | milky-way | ✅ |
| hubble-law | The expanding universe (Hubble's law) | galaxies, redshift | ✅ |
| big-bang | The Big Bang | hubble-law | ✅ |
| cmb | The cosmic microwave background | big-bang | ✅ |
| dark-energy | Dark energy | big-bang | ✅ |

---

## Learning paths

- **The whole course:** every page above, Part A first.
- **Math toolkit only:** Part A, for anyone who needs the math for physics.
- **Astronomy fast path:** units → scientific notation → gravitation → orbits → Kepler's laws → spectra → stars → galaxies. Earlier pages are pulled in only when a check question shows a gap.

## Notes

- Physics and math pages get textbook-style practice sets. Descriptive astronomy pages (seasons, Moon phases, galaxies) get short sets, since there is less to calculate.
- Every page's math and facts are checked before anyone learns from it.
