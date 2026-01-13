---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
kernelspec:
  display_name: SageMath 10.4
  language: sage
  name: sagemath
---

# Lecture: Algebra review

$\newcommand{\NN}{\mathbb{N}}
\newcommand{\ZZ}{\mathbb{Z}}
\newcommand{\QQ}{\mathbb{Q}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\CC}{\mathbb{C}}$

## What is algebra?

A founding principle of algebra is that, in order to understand a 
given object, we will not analyse it as an isolated individual, but
study **how it fits into the overall picture**:

1. What is its [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure)?
   i.e. what are its basic operations and their properties (axioms)?

2. How does it relate to other objects?

Thus, for 1., rather than looking separately at real numbers, complex
numbers, etc., we will study sets endowed with an addition and a
multiplication, with the appropriate properties (associativity, etc.),
and determine the general theorems which follow from them. This
approach is very similar in nature to object oriented programming: one
defines abstract classes (=algebraic structures), which are populated
with generic methods (=theorems) that are valid as soon as the
specifications (=axioms) are met. All that remains is to implement the
basic operations (=define addition and multiplication) to use the
generic methods on (=apply the general theorems to) the object
studied.

For 2. we will study the *morphisms* between objects --
i.e. structure-preserving functions -- and how they are composed. Here
we come close to functional programming.

Another strong idea is that **the more structure there is, the more
rigid an object is and the more the algorithms for computing with it
are efficient**.

Example: dictionaries and databases

All this means is that programming and doing algebra are not so far
apart.

**Adage of Computer Algebra:** Divide and conquer

## Common algebraic structures

### Examples

What do you know as:

#### Sets endowed with operations?

- actual $(\RR,+,*,0,1,-,/,<)$
- natural integers $(\NN,+,-, *,0,1, //, =, \gt, \lt)$
- relative integers $(\ZZ,+,-, *, //)$ (// integer division)
- rationals $\QQ$ $(\QQ, +, -, *, /)$ (/ only if not divided by 0)
- complex $(\CC,+,*,0,1,-,/)$
- vectors in $\RR^3$: $(\RR^3, +, -, 0, =)$
- matrices $(M_n(\RR), +, -, *, 0, Id)$ where $0$ is the null matrix, * is the matrix product
- $E$ the set of rational languages $(., +, *, \cup, \cap, \setminus)$ (not all languages are necessarily closed by $\cup, \cap, \setminus$)

#### Operations

- set operations: $\cup$, etc.
- equality: $=$, $\neq$
- addition: + and any derivatives: -, 0
- multiplication * and any derivatives: / division, neutral element 1
- root/exponentiation
- scalar product
- comparisons: $<$ and derivatives: $\leq$,  $>$ 

#### Properties / axioms

Let us denote by $E$ the set on which we put the structure.

- internal law / "stability" through operation: $\forall a, b \in E, \qquad a + b \in E$
- closing properties

Property of arithmetic operations:
- neutral element$e$: $\forall a \in E, \; a+e = e+a = a$
- existence of the symmetrical: $\forall a \in E, \exists b \in E, a+b = b+a = e$ (where $e$ is the neutral element)
- commutativity: $a + b = b + a, \qquad \forall a\in E, b\in E$
- associativity: $\forall a, b, c \in E \qquad a + (b + c) = (a + b) + c$
- distributivity of multiplication over addition: $\forall a, b, c \in E \qquad a(b+c) = ab + ac$

Properties of comparison operations:
- Symmetry: $\forall a, b \in E, \; a = b \qquad \longleftrightarrow \qquad b=a$
- Antisymmetry: $\forall a, b \in E, (a \leq b \wedge b \leq a) \Rightarrow a = b$
- Reflexivity: $\forall x \in E, \; x = x$
- Transitivity: $\forall a, b, c \in E, \; a = b \wedge b = c \Rightarrow a = c$ 
- $a-b \gt 0 \leftrightarrow a \gt b$
- $a \gt b \leftrightarrow b \lt a$
- (optional) Total: $\forall a, b \in E, \qquad a \leq b \lor b \leq a$

### Single-operation algebraic structures 

Let's start at the beginning. What's the common point between
integers, real numbers, symmetries of a geometrical figure, the
Rubicks Cube, or a pile of T-shirts in a wardrobe?

In all cases, there is an underlying **monoid**. What is a monoid?

:::{admonition} Definition

A monoid is a **set, with an associative internal **internal binary
operation internal** $.$ **** with **neutral element** $e$.

- binary operation: function $E\times E -> E$
- associative: $(a . b) . c = a . (b . c) \forall a,b
- neutral element: $a . e = e . a = a \forall a$

:::

:::{admonition} Examples

- $(M_n(\RR), +, 0)$
- $(\NN, +, 0)$
- $(\ZZ, +, 0)$
- $(\ZZ, -, 0)$ : non-associative: $1 - (2 - 4) \neq (1 - 2) - 4$
- $(\QQ, *, 1)$
- $(\RR, *, 1)$
- $(E,\cup, \emptyset)$ where $E$ is a set of stable sets by union
- $(E,\cap, U)$ where $E$ is a set of sets included in some universe
  $U$, with $E$ stable by intersection
- (B the set of Booleans, $\lor$, $\bot$)
- $(\mathcal{F}, \circ, id)$ where $\mathcal{F}$ is the set of
  functions and $\circ$ is the composition of functions
- $(\NN, max, 0)$ (Exercise: prove that max is associative)
- $(\NN \cup \{+\infty\}, min, +\infty)$

:::

### Example: fast exponentiation

Objective: compute quickly $a^4=a*a*a*a$

Naive method: $a^4= ((a*a)*a)*a$
Quick method: $a^4= (a*a)*(a*a)$
Algorithm: $a = a*a; a = a*a$ 

Generalisation: $a^n$ is calculated in $log_2(n)$ operations

### Example: Map-Reduce paradigm

Objective:
- We have a large dataset $E$; so large that it does not fit on a
  single machine.
- We have an operation on this dataset that can be expressed as follows:
    - Map: Apply a function $f$ to all the elements  
    - Reduce: an associative operation that combines all the results

- What we want to calculate: `reduce( f(x) for x in E )`

Silly application: count the number of elements of $E$:
- Map: f: x -> 1
- Reduce: + 

In general: compute statistics: mean, ...

Application: do a search: is e in $E$
- Map: f: x -> x==e?
- Reduce: or

More complex searches

What does this have to do with associativity?

It is a way to divide and conquer:

If $E$ is the concatenation of $E1$ and $E2$ then:

`reduce( reduce(f(x) for x in E1), reduce(f(x) for x in E2) )`

With commutativity, we can cut $E$ in half in any way we like.

### Example: functional programming and monads

### Example: colouring the faces of a cube

:::{admonition} Problem
In how many different ways can you colour the faces of a cube?
:::

Let's move on to symmetries: you have long known that, to solve a
problem efficiently, it is good to study and exploit symmetries:
i.e. the set of transformations that do not change the problem.

When you have two symmetries, you can compose them; the result is
always a symmetry. The composition is associative. Doing nothing is a
symmetry. The set of symmetries with composition is therefore a
monoid.

In fact, we have more than that: the application of a symmetry is a
reversible operation: it can be inversed.

We have a **group**: a monoid where every element has an inverse.

We have algorithms that allow us to calculate with very large groups,
even of size factorial(1000).

For a given problem, we will consider all its symmetries

### Example: The Rubicks cube

Which set, equipped with which operation underpins the Rubicks cube?

What's interesting is not so much the possible configurations of the
Rubicks cube, but the transformations that can be applied on it:
rotating a face, rotating the cube, and above all composing these
transformations. What is studied is the set of all the transformations
that can be obtained by composition of elementary transformations; the
operation is the composition. The neutral element is to do nothing.

Again, this is a group.

### Example: Management of stacks of T-Shirts

Basic operations: take the i-th T-Shirt and put it on top (this is not
reversible!)

Monoid of all operations obtained by composition.

It has good order-theoretical properties (it is so-called R-trivial).
This yields theorems and algorithms to analyse the evolution of the
system. With nice combinatorics.

### Semi-Rings, Rings, Fields


TODO: explain the construction of the usual sets by equivalence/quotient relations:
the smallest set that ... we want such a property; we proceed like this ...

$(\NN, +,*)$: associativity of + and *, commutativity of + and *,
distributivity of + over *, 0 neutral element of +, 1 neutral element
of *.

It is a **semi-ring**.

$(\ZZ, +,*)$: as $\NN$, but with opposites (inverse for subtraction)

It is a **ring**.

$(\QQ, +, *)$: why rationals were invented: it is the smallest
containing set $\ZZ$ and stable by division: existence of inverse for
everyone except $0$.

It is a **field**.

$(\RR,+,*)$: **complete field**: property of limits of Cauchy
sequences; here we go to the analysis side. Less useful for us. But
there are other complete fields that are very relevant for exact
calculation ($p$-adic numbers). And then there are very few real
numbers that can be represented on a machine.

$(\CC,+,*)$ **algebraically closed field**: we want to have the roots
of any number. More generally: every polynomial has a root. Same
defect as for $\RR$.

In practice, we will calculate with smaller fields, obtained by
extensions of $\QQ$ to add just the elements we need for our
calculation. For example $\QQ[\sqrt(2)]$.

### Example: finite fields $GF(p)$:

Let's take $p=5$ (or more generally a prime number). We will construct
the integers modulo $p$ and endow it with a field structure.

Consider the equivalence relation $x\sim y$ if $y-x \mod p =0$. For
$x\in \ZZ$, we denote by $\overline x= \{y, y-x \mod p = 0\}$ the
equivalence class of $x$.

Example: $\overline{4} = \{ ... -1, 4, 9, 14, ... \}$

Let $E=\ZZ/p\ZZ$ be the set of the equivalence classes:

$$E=\{\overline{0},\overline{1},\overline{2},\overline{3},\overline{4}\}$$

We define the operations + and * on $E$ as

$$\overline{x} + \overline{y} = \overline{x+y}$$
$$\overline{x} * \overline{y} = \overline{x*y}$$

and the same for the other operations (-, ...)
 
Miracle: the result does not depend on the choice of representatives
$x$ and $y$. The operations are well defined. In addition, all the
properties of $\ZZ$ (associativity, etc.) remain valid. The result is
a ring.

Example: (without using bars to lighten the notations)

| + | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

| * | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 2 | 3 | 4 |
| 2 | 0 | 2 | 4 | 1 | 3 |
| 3 | 0 | 3 | 1 | 4 | 2 |
| 4 | 0 | 4 | 3 | 2 | 1 |

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
|1/x| ND| 1 | 3 | 2 | 4 |

It can be seen that all elements except $0$ admit an inverse. As a
result, $E$ is a field. And it's finite.

Because they are finite, these fields and their generalisations can be
represented very naturally on a computer. They will play an essential
role in error correcting codes, cryptography, etc., as well as for
computing in general.

### Vector spaces

### Examples of sets with operations in Sage

```{code-cell} ipython3
ZZ
```

```{code-cell} ipython3
K = GF(5)
```

```{code-cell} ipython3
K
```

```{code-cell} ipython3
K.category()
```

### General algebra: zoology of mathematics

[Algebraic structures in SageMath](https://github.com/OpenDreamKit/OpenDreamKit/raw/master/ReportingPeriod2/ReviewPresentations/Pictures/sage-category-graph.pdf)

## Universal algebra

**Adage:** treat all algebraic structures uniformly

### Substructures

How to define them?

How to describe them?

### Free objects

## Linear algebra

## Motivation

Consider the following vectors:
$$(0, 0, 3, 1, 4), (3, 1, 4, 2, 1), (4, 3, 2, 1, 3)$$

We wish to determine whether the following vectors are linear
combinations of the previous ones:

$$ u = (1,2,4,1,0) \qquad v = (2,1,4,0,1)$$

We will continue in Sage. Look at the worksheet included in the assignment.

# A little bit of manual linear algebra in Sage

```{code-cell} ipython3
K = GF(5)
```

```{code-cell} ipython3
K.cardinality()
```

```{code-cell} ipython3
K.category().axioms()
```

```{code-cell} ipython3
%display latex
```

Let us define a matrix, seen as a collection of row vectors:

```{code-cell} ipython3
M = matrix(K, [[0,0,3,1,4], [3,1,4,2,1], [4,3,2,1,3]]); M
```

```{code-cell} ipython3
v0 = M[0]
v1 = M[1]
v2 = M[2]
```

And let's take two vectors:

```{code-cell} ipython3
u = vector(K, [1, 2, 4, 1, 0])
v = vector(K, [2, 1, 4, 0, 1])
```

**Problem:**
Is $u$ in the vector subspace generated by v0,v1,v2? 

In other words: can we find $a0,a1,a2$ so that:

$$ u = a0 v0 + a1 v1 + a2 v2 $$

```{code-cell} ipython3
M
```

```{code-cell} ipython3
u
```

Find $a0,a1,a2$ so that:
- 1 = a0*0 + a1 *3 + a2 * 4
- ...
- ...

+++

Let's put our matrix into **echelon form**

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[0], M[1] = M[1], M[0]
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[0] = M[0] / M[0,0]
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[2,0]
```

```{code-cell} ipython3
M[2] = M[2] - 4 * M[0]
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[1] = M[1] / K(3)
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[0] = M[0] - 3 *M[1]
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
u
```

```{code-cell} ipython3
M[0] + 4 * M[1]
```

a0 M[0] + a1 M[1] + a2 M[2]  =  u

Equations:
-   a0      = 1
- 2*a0      = 2
- 3*a0+3*a1 = 4

```{code-cell} ipython3
M[1] = M[1] / K(3)
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[0] = M[0] * K(3)
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
M[0] = M[0] - 3 * M[1]
```

```{code-cell} ipython3
M
```

```{code-cell} ipython3
u
```

a0 M[0] + a1 M[1] + a2 M[2]  =  u

Equations:
-   a0 = 1
- 2*a0 = 2
-   a1 = 4
- 3a0+2a1=1
- 3a0+3a1=0

```{code-cell} ipython3
K(3*1 + 2*4)
```

```{code-cell} ipython3
u - (1 * M[0] + 4 * M[1])
```

$M$ is said to be in reduced echelon form

```{code-cell} ipython3
M
```

Notion of a good matrix: in reduced echelon form
Algorithm to obtain a matrix in echelon form
from any matrix.

```{code-cell} ipython3

```

## Example: planes in space $\RR^3$

## Echelon form of a matrix


# Summary

## SageMath

Free software for mathematical calculation based on Python

## Algebra

**Adage**: understanding an object by studying how it fits into the
panorama:

1. What is its [algebraic
   structure](https://fr.wikipedia.org/wiki/Structure_alg%C3%A9brique)?
   i.e. what are its basic operations and their properties (axioms)?
2. How does it relate to other objects?

## General Algebra

Zoology of algebraic structures in maths: monoids, groups, rings,
fields, vector spaces, ...

## Universal Algebra

**Adage:** treat all algebraic structures uniformly

## Linear algebra

## Computer Algebra

**Adages**:
- Divide and conquer
- Elimination methods
- Evaluation methods and changes of representation