// http://stackoverflow.com/questions/33288998/do-es6-arrow-functions-have-their-own-arguments-or-not
var b = function (a, b, c) {
  return (x, y, z) => {
    console.log(x, y, z)
    console.log(arguments) // arguments are not x,y,z but a,b,c
  }
}
b(1, 2, 3)(4, 5, 6)

// Any reference to arguments, super, this, or new.target within an ArrowFunction must resolve to a binding in a lexically enclosing environment.

// { '0': 1, '1': 2, '2': 3 }
// because fat-arrow captures (a, b, c)