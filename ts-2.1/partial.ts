type A = {
    a: number
    b: number
    c: string
}

let a = { a: 10, b: 20, c: 'test'}

type PartialA = Partial<A>

let b: PartialA = { a: 20 } 
console.log(a, b)