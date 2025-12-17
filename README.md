# OEIS as a Map of Mathematics

**A mechanism‑first research program for integer sequences, executable mathematics, and AI‑assisted mathematical cartography.**

This repository accompanies the book ***OEIS as a Map of Mathematics: Mechanisms with SageMath***.
It is not a collection of solved problems. It is a **research workflow**.

The core idea is simple:

> **An integer sequence is not an object. It is an interface.**

Each nontrivial sequence simultaneously reflects multiple mathematical mechanisms—recurrences, spectra, symmetries, generating functions, group actions, modularity. This repository formalizes how to *recover* those mechanisms systematically and verify them computationally.

---

## 1. What This Repository Is

This repository is:

* a **mechanism‑first framework** for analyzing OEIS sequences
* a **reproducible pipeline** for mathematical structure discovery
* an **AI‑assisted authoring system** for a research‑level book
* a bridge between **OEIS ↔ SageMath ↔ modern mathematics**

It treats OEIS as a *map*, not a lookup table.

---

## 2. What This Repository Is Not

This repository is **not**:

* a dump of OEIS entries
* a solved‑problems archive
* a proof encyclopedia
* a traditional textbook

If you are looking for answers, this repo will frustrate you.
If you are looking for **structure**, it will reward you.

---

## 3. Organizing Principle: Mechanisms, Not Topics

Traditional mathematics is organized by fields. This project is organized by **mechanisms**.

Examples of mechanisms:

* **DE** — recurrences, differential / difference equations, generating functions
* **MAT** — matrices, linear operators, spectra
* **GRP** — group actions, symmetry, Burnside / Polya counting
* **ZETA** — Dirichlet series, Euler products, prime factorization
* **MOD** — modular forms, q‑series, special functions
* **GRA** — graphs, trees, tilings, paths
* **ALG** — algebraic geometry, finite fields, Frobenius
* **REP** — representation theory, characters, dimensions
* **HOM** — homology, Euler characteristics, poset topology

Each sequence is analyzed via a **Base → Bridge → Emergence** pipeline.

---

## 4. The Base → Bridge → Emergence Schema

Every sequence analysis follows the same rigid structure:

### Base

* Minimal definition only
* Often combinatorial or recursive
* No interpretation inflation

### Bridge

* Structural lifts (matrices, groups, generating functions)
* Must be *forced* by the base
* Each bridge is verified computationally

### Emergence

* Properties invisible at the base level
* Asymptotics, spectra, modularity, universality
* Cannot be used to redefine the base

This structure is recorded as a **Directed Acyclic Graph (DAG)** of mechanisms.

If a connection cannot be placed on the DAG, it does not belong.

---

## 5. Why SageMath Is Mandatory

SageMath is not used for illustration. It is used for **falsification**.

Every claimed equivalence must survive executable verification:

* recurrences vs closed forms
* matrices vs generating functions
* combinatorial models vs algebraic encodings

The formatting and verification standard is fixed by one reference file:

* **`0FIBONACCI NUMBERS.md`** — the canonical template

All new sequence analyses must conform to its discipline.

---

## 6. AI Agent Workflow (Core Research Artifact)

This project explicitly decomposes mathematical reasoning into **orthogonal agents**.
These agents are *not narrative voices*. They are **roles in a research pipeline**.

### 6.1 Sequence Cartographer

**Function:** structural identification

**Responsibilities:**

* identify active mechanisms for a given OEIS sequence
* classify mechanisms as primary / secondary / emergent
* construct the Base → Bridge → Emergence DAG
* justify *why* the sequence appears across fields

**Constraints:**

* no exposition
* no proofs
* no computation

Output: **mechanism DAG + structural outline**

---

### 6.2 Architect / Referee

**Function:** intellectual quality control

**Responsibilities:**

* enforce global coherence of the book
* reject false or weak mechanism claims
* prevent scope creep and redundancy
* decide dominant vs subordinate mechanisms

**Constraints:**

* no code
* no long prose

Output: **structural approval or rejection**

---

### 6.3 SageMath Engineer

**Function:** executable mathematics

**Responsibilities:**

* translate each mechanism into SageMath code
* verify equivalence of independent constructions
* compute invariants worth exposing

**Hard rules:**

* no narrative text
* no LaTeX inside code comments
* every section ends with a verification check
* follow `0FIBONACCI NUMBERS.md` formatting strictly

Output: **copy‑pasteable SageMath blocks**

---

### 6.4 Mathematical Expositor

**Function:** human‑level explanation

**Responsibilities:**

* explain what each mechanism is doing
* explain why the lift is inevitable
* explain what insight is gained

**Audience:** strong undergraduates / early graduate level

**Constraints:**

* no heavy proofs
* no historical padding

Output: **concise conceptual prose**

---

## 7. Why This Agent Design Matters

This separation is not cosmetic. It prevents three common failures:

1. **Pattern hallucination** — claiming structure without verification
2. **Narrative inflation** — explaining without mechanism
3. **Proof tunnel vision** — correctness without insight

By isolating roles, the workflow becomes:

* scalable
* auditable
* partially automatable

This is essential for a project that spans hundreds of sequences.

---

## 8. Relation to the Book

* The **book** is the compiled artifact: clean, human‑readable, mechanism‑dense.
* This **repository** is the source tree: DAGs, code, agents, and verification.

Readers should not need to know the agent system.
Researchers and contributors should.

---

## 9. Extending the Project

To add a new sequence:

1. Run the **Cartographer** pass
2. Submit a mechanism DAG
3. Pass **Architect** review
4. Implement SageMath verification
5. Write expository synthesis

Anything less is rejected.

---

## 10. Status and Scope

This project is intentionally open‑ended.

OEIS is not finite. Neither is mathematics.

What *is* finite is the set of mechanisms.
This project is an attempt to map them.

---

**OEIS is the map.**
**SageMath is the instrument.**
**Mechanisms are the terrain.**
