class Fib3 implements IterableIterator<number> {
  protected f0 = 0
  protected f1 = 1
  next(): IteratorResult<number>{
    let curr = this.f0
    this.f0 = this.f1
    this.f1 = curr + this.f1
    return {
      done: false,
      value: curr
    }
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this
  }
}

let fib3 = new Fib3()

// Iterator
console.log(fib3.next())//{ done: false, value: 0 }
console.log(fib3.next())//{ done: false, value: 1 }
console.log(fib3.next())//{ done: false, value: 1 }
console.log(fib3.next())//{ done: false, value: 2 }
console.log(fib3.next())//{ done: false, value: 3 }
console.log(fib3.next())//{ done: false, value: 5 }
console.log(fib3.next())//{ done: false, value: 8 }
console.log(fib3.next())//{ done: false, value: 13 }

// Iterable
for(let i of fib3) {
  console.log(i)
  if(i > 100) break
}
// 21
// 34
// 55
// 89
// 144