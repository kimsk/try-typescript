/*
https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
An object is deemed iterable if it has an implementation for the Symbol.iterator property. Some built-in types like Array, Map, Set, String, Int32Array, Uint32Array, etc. have their Symbol.iterator property already implemented. Symbol.iterator function on an object is responsible for returning the list of values to iterate on.

*/

// ES6 only
class Fib2 implements Iterable<number> {
  [Symbol.iterator]() {
    let f0 = 0
    let f1 = 1
    return {
      next(): IteratorResult<number>{
        let curr = f0
        f0 = f1
        f1 = curr + f1
        return {
          done: false,
          value: curr
        }
      }
    }
  }
}

let fib2 = new Fib2()

for(let i of fib2) {
  console.log(i)
  if(i > 100) break
}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144