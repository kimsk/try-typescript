var funcs = []
for (var i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
for (var j = 0; j < 3; j++) {
    funcs[j]()
} // 3 3 3, use var i, i is a closure

// IFFE
funcs = []
for (let i = 0; i < 3; i++) {
    funcs.push(function () {
      var local = i
      // capture i with local
      return function() {
        console.log(local)
      }
    }())
}
for (var j = 0; j < 3; j++) {
    funcs[j]()
} // 0 1 2

// let
funcs = []
for (let i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
} // 0 1 2
