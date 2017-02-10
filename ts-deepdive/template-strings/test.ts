function test (literals, ...placeholders) {
  console.log(literals, placeholders)
}

let l1 = 'Hello'
let l2 = 'Hi'
test `one two three ${l1}/${l2} World!`
// [ 'one two three ', '/', ' World!' ] [ 'Hello', 'Hi' ]
