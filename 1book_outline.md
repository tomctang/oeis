Title: OEIS as a Map of Mathematics: Mechanisms with SageMath 

# Chapter 0. Introduction

Motivation and purposes: 
- Project Euler rewards recognizing mechanisms, not formulas. OEIS exposes those mechanisms.
- To write a book for strong math / CS / physics undergraduates.
- This book treats integer sequences as interfaces between different mathematical mechanisms. 
- A mechanism tour of modern mathematics using OEIS sequences as anchors, implemented computationally in SageMath.
- When white light (SageMath/pure computation) hits the prism (the sequence), it refracts into the spectral bands of mathematics (DE, MAT, GRP, etc.).
- It is effectively a "concrete/conceptual, not technical, Langlands Program" for undergraduates. 

Introduction:
- to introduce my idea about this book, including mathematical mechanisms/topics table (see below) and its explanation. 
- OEIS is not a database — it is a compression of mathematical structures. Each sequence lives simultaneously in multiple mathematical worlds.
- SageMath makes those worlds executable.
- A pedagogical unification manifesto for students with SageMath-driven exploration lab, in which OEIS sequence works as a hub to reveal the unity of mathematical mechanisms/topics. 

Mathematical mechanisms/topics table: 
| Code     | Mechanisms       | Key Points                       |
| -------- | ---------- | ----------------------------- |
| **DE**   | Differential/Difference Eq    | Recurrences, ODE/PDE, Generating Functions        |
| **MAT**  | Matrix/Linear Alg  | Eigenvalues, Matrix Powers, Shift Operator/Markov chains    |
| **GRP**  | Group Theory/Symmetries  | Burnside, Polya Enumeration          |
| **ZETA** | ζ/Zeta/Arithmetic   | Dirichlet series, Euler products, Prime structure      |
| **MOD**  | Modular Forms / Special Functions | modular form, theta, Eisenstein, q-series |
| **GRA**  | Graph Theory / Combinatorics  | Trees, Paths, Graphs, Tilings, Walks            |
| **ALG**  | Alg. Geometry / Finite fields  | Frobenius, Primitive Object, Point Counting           |
| **REP**  | Representation | Group/Algebraic Representation, Characters/Dimensions of modules     |
| **HOM**  | Homology/Counting with Topographic Maps | Betti numbers, Euler characteristics, poset homology |

---

# Chapter 1. Arithmetic Function / Multiplicatives 

Organizing principle for each chapter from 1 to appendix: 
- For each OEIS sequence in the table below, tour every mathematical mechanism related to the sequence by following steps: 
- Step 1, draw Poset and DAG for each integer sequence, explaining base, bridge, and emergence
- Step 2, use SageMath to coding each executable realizations/proof of concepts and mechanisms. 
- Strictly adhere to the “2FIBONACCI NUMBERS.md” style: clear headers, numbered sections, distinct mechanism checks.
- Step 3, narrative that explains e.g. why the sequence exists in different mathematical mechanisms/topics simultaneously. 
- Output ipynb file for each chapter, including both Markdown and sagemath coding cells 

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000005 | d(n)/tau(n)/sigma_0(n), the number of divisors of n | — | — | — | P | E | — | — | — | — |
| A000010 | Euler φ | — | — | — | P | — | — | — | — | — |
| A000203 | σ(n) | — | — | — | P | E | — | — | — | — |
| A001065 | Sum of proper divisors of n | — | — | — | P | E | — | — | — | — |
| A001221 | ω(n) | — | — | — | P | — | — | — | — | — |
| A001222 | Ω(n) | — | — | — | P | — | — | — | — | — |
| A008683 | Möbius μ | — | — | — | P | E | — | — | — | E |
| A000720 | π(n) | — | — | — | P | — | — | — | — | — |
| A002110 | primorials | — | — | — | P | — | — | — | — | — |

Legend and formal rule:
- **P** = primary mechanism (explains/generates the sequence directly)
- **S** = secondary mechanism (standard alternate construction or strong interpretation)
- **E** = emergent mechanism (appears naturally after building a little extra structure), it appears only after lifting the sequence into a higher structure (limit, category, spectrum, asymptotics, cohomology)
- **—** = not used / no clear link in this book

---

# Chapter 2. Linear Recursion / Exponential Sequences

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000045 | Fibonacci | P | P | — | — | S | S | — | S | — |
| A000032 | Lucas | P | P | — | — | S | — | — | — | — |
| A000129 | Pell | P | P | — | — | S | — | — | — | — |
| A001045 | Jacobsthal | P | P | — | — | — | — | — | — | — |
| A000079 | 2^n | P | P | — | — | — | — | — | — | — |
| A000244 | 3^n | P | P | — | — | — | — | — | — | — |
| A000302 | 4^n | P | P | — | — | — | — | — | — | — |
| A000142 | n! | S | S | P | — | — | — | — | S | — |

---

# Chapter 3. Partitions / q-series / Modular forms and shadows

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000041 | partitions | — | — | — | E | P | — | — | — | — |
| A000009 | distinct partitions | — | — | — | E | P | — | — | — | — |
| A000219 | planar partitions | — | — | — | E | P | P | — | — | E |
| A000123 | binary partitions | P | — | — | — | E | — | — | — | — |
| A002033 | perfect partitions | — | — | — | E | P | — | — | — | — |

---

# Chapter 4. Catalan / Path / Tree

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000108 | Catalan | S | — | — | — | — | P | — | — | E |
| A001006 | Motzkin | S | — | — | — | — | P | — | — | — |
| A001003 | Schröder | S | — | — | — | — | P | — | — | — |
| A006318 | large Schröder | S | — | — | — | — | P | — | — | — |
| A001699 | binary trees | — | — | P | — | — | P | — | — | S |
| A000081 | rooted trees | — | — | P | — | — | P | — | — | S |
| A000055 | unlabeled trees | — | — | P | — | — | P | — | — | S |

---

# Chapter 5. Group Actions/ Representation / Classification(Single-Dominant Mechanism)

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000001 | groups | — | — | P | — | — | — | P | P | — |
| A000688 | abelian groups | — | — | P | P | — | — | P | P | — |
| A001034 | simple groups | — | — | P | — | — | — | P | P | — |
| A002106 | transitive perm groups | — | — | P | — | — | P | — | P | — |

---

# Chapter 6. Automata / 2-adic / Computational structure

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A001285 | Thue–Morse | P | P | — | — | — | P | — | — | — |
| A010060 | Thue–Morse | P | P | — | — | — | P | — | — | — |
| A000002 | Kolakoski | P | — | — | — | — | P | — | — | — |
| A001511 | ruler function | P | — | — | — | — | P | — | — | — |

---

# Chapter 7. Dual-Mechanism Interference Sequences
A sequence exhibits dual-mechanism interference if:
two mechanisms are both primary,
neither can be removed without changing the sequence,
and each modifies the expression of the other.

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000594 | Ramanujan τ | — | — | — | — | P | — | S | S | — |
| A003484 | Hurwitz–Radon | — | P | S | — | — | — | S | E | — |
| A004011 | D₄ 根系 | — | P | S | — | S | — | P | S | E |

---

# Chapter 8. Group Theory / Polya / Necklace /Anchor

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000029 | 二色 necklace（翻转同一） | — | — | P | — | — | P | — | — | — |
| A000031 | necklace（旋转同一） | — | — | P | — | — | P | — | — | — |
| A000048 | necklace（多色） | — | — | P | — | — | P | — | — | — |
| A000085 | 自反置换 | — | — | P | — | — | S | — | E | — |

---

# Chapter 9. Mechanism Phase Transitions (Census Sequences)
A sequence exhibits a mechanism phase transition (regime shift) if:
its governing mechanism changes when size grows,
or when constraints are added/removed,
producing new dominant structures.

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000088 | 无标号图 | — | — | P | — | — | P | — | — | P |
| A001349 | 连通图 | — | — | P | — | — | P | — | — | P |
| A003094 | 连通平面图 | — | — | P | — | — | P | E | — | P |
| A000105 | polyominoes | — | — | S | — | — | P | — | — | — |
| A000112 | posets | — | — | S | — | — | P | — | — | P |
| A000798 | quasi-orders / topologies | — | — | S | — | — | P | — | — | P |

---

# Chapter 10. Algebraic Combinatorics（Pascal / Stirling / Eulerian）

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A007318 | Pascal 三角 | S | E | — | — | — | P | — | — | — |
| A008275 | Stirling 数（一类） | S | S | — | — | — | P | — | E | — |
| A008277 | Stirling 数（二类） | S | S | — | — | — | P | — | E | — |
| A008292 | Eulerian 数 | S | S | — | — | — | P | — | E | — |

---

# Chapter 11. Sieve / Primality Structure / ZETA 

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000043 | Mersenne 数 | — | — | — | P | E | — | — | — | — |
| A001358 | 半素数 | — | — | — | P | — | — | — | — | — |
| A002808 | 合数 | — | — | — | P | — | — | — | — | — |
| A018252 | 非素数 | — | — | — | P | — | — | — | — | — |
| A002110 | primorials | — | — | — | P | — | — | — | — | — |

---

# Appendix. Fundamentals & Analytic Anchors and Limits of the Mechanism View

| OEIS | Name | DE | MAT | GRP | ZETA | MOD | GRA | ALG | REP | HOM |
|---|---|---|---|---|---|---|---|---|---|---|
| A000004 | All 0 | — | — | — | — | — | — | — | — | — |
| A000007 | 0^n | P | — | — | — | — | — | — | — | — |
| A000012 | All 1 | P | — | — | — | — | — | — | — | — |
| A000027 | Natural number | P | — | — | — | — | — | — | — | — |
| A001057 | Integer | P | — | — | — | — | — | — | — | — |
| A000796 | π Decimal expansion | P | — | — | — | — | — | — | — | — |
| A001113 | e | P | — | — | — | — | — | — | — | — |
| A001333 | √2 | — | — | — | — | — | — | P | — | — |
| A002530 | √3 | — | — | — | — | — | — | P | — | — |



##############################################################################
# FIBONACCI NUMBERS: F_0=0, F_1=1, F_n = F_{n-1} + F_{n-2}
##############################################################################

print("="*70)
print("FIBONACCI NUMBERS")
print("="*70)

# --- 1. Direct Computation ---
print("\n1. First 20 Fibonacci numbers:")
fibs = [fibonacci(n) for n in range(20)]
print(fibs)

# --- 2. ODE / RECURRENCE RELATION ---
print("\n2. ODE CONNECTION: y'' = y' + y")
print("   Characteristic equation: λ² = λ + 1")
print("   Solutions: λ = (1 ± √5)/2 (golden ratio φ and conjugate)")

phi = (1 + sqrt(5))/2
psi = (1 - sqrt(5))/2

print(f"\n   Golden ratio φ = {phi.n(digits=10)}")
print(f"   Conjugate ψ = {psi.n(digits=10)}")

def fibonacci_binet(n):
    """Binet's formula: F_n = (φ^n - ψ^n)/√5"""
    phi = (1 + sqrt(5))/2
    psi = (1 - sqrt(5))/2
    return ((phi^n - psi^n)/sqrt(5)).simplify_full()

print("\n   Via Binet's formula (closed form from ODE):")
fibs_binet = [fibonacci_binet(n) for n in range(10)]
print(f"   {fibs_binet}")

# Verify it matches
print(f"   Match? {all(fibonacci_binet(n) == fibonacci(n) for n in range(15))}")

# --- 3. MATRIX POWERS ---
print("\n3. MATRIX: Powers of [[1,1],[1,0]]")

F = matrix([[1, 1], [1, 0]])
print(f"   Fibonacci matrix F = ")
print(F)

print("\n   Powers of F:")
for n in range(1, 8):
    Fn = F^n
    print(f"   F^{n} = {Fn.list()}, F_{n} = {Fn[0,1]}, F_{n+1} = {Fn[0,0]}")

# Eigenvalues are φ and ψ
print("\n   Eigenvalues of F:")
eigenvals = F.eigenvalues()
print(f"   {[e.n(digits=10) for e in eigenvals]}")
print(f"   These are φ and ψ!")

# Diagonalization: F = PDP^(-1)
print("\n   Diagonalization F = PDP⁻¹:")
P, D = F.eigenmatrix_right()
print(f"   P = {P}")
print(f"   D = {D}")
print(f"   Verify: F = PDP⁻¹? {F == P*D*P^(-1)}")

# --- 4. GENERATING FUNCTION ---
print("\n4. GENERATING FUNCTION: F(x) = x/(1-x-x²)")

R.<x> = PowerSeriesRing(QQ, default_prec=20)
F_gen = x/(1 - x - x^2)
print(f"   F(x) = {F_gen}")
print(f"   Coefficients: {F_gen.list()}")

# Verify partial fractions (from ODE eigenvalues)
print("\n   Partial fraction decomposition (using φ, ψ):")
print(f"   F(x) = 1/√5 * [1/(1-φx) - 1/(1-ψx)]")
x = var('x')

phi = (1 + sqrt(5))/2
psi = (1 - sqrt(5))/2

F_partial = (1/sqrt(5)) * ( 1/(1 - phi*x) - 1/(1 - psi*x) )
print(F_partial.series(x, 15))  # expand as a power series about x=0 up to x^14

# --- 5. CONTINUED FRACTIONS ---
print("\n5. CONTINUED FRACTIONS: φ = [1; 1, 1, 1, 1, ...]")

cf = continued_fraction(phi)
print(f"   Golden ratio as continued fraction: {cf}")
print(f"   First 15 convergents:")

for i in range(15):
    conv = cf.convergent(i)
    print(f"   p_{i}/q_{i} = {conv} = {conv.numerator()}/{conv.denominator()}", end="")
    if i > 0:
        print(f" → Ratio of F_{i+1}/F_{i}")
    else:
        print()

# --- 6. GROUP THEORY / WORD STRUCTURES ---
print("\n6. GROUP THEORY: Fibonacci counts in free monoid")
print("   Words of length n using {a, b} with no consecutive b's")

def count_no_consecutive_b(n, memo={0: 1, 1: 2}):
    """Count binary strings of length n with no consecutive 1's (or b's)"""
    if n in memo:
        return memo[n]
    # Either ends in 'a' (0) or 'b' (1)
    # If ends in 'a': previous n-1 can be anything
    # If ends in 'b': previous must end in 'a', so n-2 positions
    result = count_no_consecutive_b(n-1, memo) + count_no_consecutive_b(n-2, memo)
    memo[n] = result
    return result

print(f"   Counts: {[count_no_consecutive_b(n) for n in range(12)]}")
print(f"   These are F_{n+2}!")

# --- 7. TILINGS ---
print("\n7. TILINGS: Ways to tile 1×n board with 1×1 and 1×2 tiles")

def count_tilings(n, memo={0: 1, 1: 1}):
    """Count ways to tile 1×n board"""
    if n in memo:
        return memo[n]
    # Either place 1×1 tile (leaving n-1) or 1×2 tile (leaving n-2)
    result = count_tilings(n-1, memo) + count_tilings(n-2, memo)
    memo[n] = result
    return result

tilings = [count_tilings(n) for n in range(15)]
print(f"   Tiling counts: {tilings}")
print(f"   These are Fibonacci numbers!")

# --- 8. MODULAR ARITHMETIC (Pisano Periods) ---
print("\n8. MODULAR ARITHMETIC: Fibonacci mod m (Pisano periods)")

def pisano_period(m):
    """Find period of Fibonacci sequence mod m"""
    prev, curr = 0, 1
    for i in range(m * m):
        prev, curr = curr, (prev + curr) % m
        if prev == 0 and curr == 1:
            return i + 1
    return -1

print("   Pisano periods π(m) for small m:")
for m in range(2, 13):
    period = pisano_period(m)
    fib_mod = [fibonacci(n) % m for n in range(period)]
    print(f"   π({m:2d}) = {period:3d}, sequence mod {m}: {fib_mod[:min(12, period)]}") 
