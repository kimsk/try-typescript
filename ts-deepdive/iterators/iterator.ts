// ES5 needs below code
// interface Iterator<T> {
//     next(value?: any): IteratorResult<T>;
//     return?(value?: any): IteratorResult<T>;
//     throw?(e?: any): IteratorResult<T>;
// }

// interface IteratorResult<T> {
//   done: boolean
//   value: T
// }

class Fib implements Iterator<number> {
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
}

let fib = new Fib()

console.log(fib.next())//{ done: false, value: 0 }
console.log(fib.next())//{ done: false, value: 1 }
console.log(fib.next())//{ done: false, value: 1 }
console.log(fib.next())//{ done: false, value: 2 }
console.log(fib.next())//{ done: false, value: 3 }
console.log(fib.next())//{ done: false, value: 5 }
console.log(fib.next())//{ done: false, value: 8 }
console.log(fib.next())//{ done: false, value: 13 }
