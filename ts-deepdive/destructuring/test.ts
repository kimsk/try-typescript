// rename
let o = { 'hello world': 20 }

let { 'hello world': helloWorld } = o
console.log(o, helloWorld)

// ignore
let arr = [1,2,3]
let [a,,b] = arr
console.log(a,b)

// swap
let x = 1
let y = 2; // need semin-colon before [ or (

[x, y] = [y, x]
console.log(x, y) // 2,1

// function destructuring
function f([a,b,c]:number[]){
  console.log(a,b,c)
}

f(arr)

// ignore
function f2([a,,c]:number[]){
  console.log(a,c)
}

f2(arr)
