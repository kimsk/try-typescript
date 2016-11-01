// enum
enum Color {Red, Green, Blue};
// { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
// js
let Color2 = {};
Color2[Color2["Red"] = 0] = "Red";
Color2[Color2["Green"] = 1] = "Green";
Color2[Color2["Blue"] = 2] = "Blue";

console.log(Color, Color[0], Color['Red']);
console.log(Color2);

const a = 0
// a = 10

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        a++;
        return b;
    }
}

var g = f();
console.log(g()); // returns '11'
console.log(g());