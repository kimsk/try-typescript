interface A {
  a: number
  s: string
}

interface B {
  a: number
  s: string
  x: { a: number, s: string }
}

function f (a: A) {
  console.log(a.s)
}

f({ a: 10, s: '5'})

let a = { a: 20, s: '20' }
let b: B = { a: 5, s: '5', x: a }
f(b)

