# FIBONACCI NUMBERS: F_0=0, F_1=1, F_n = F_{n-1} + F_{n-2}

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
