import * as _ from 'underscore'

let arr = [1,2,3,4,5]

function O (val:number) {
  this.i = val
  this.f = v => {
    //console.log(arguments)
    //The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5.
  }

  this.f2 = function (v) {
    console.log(arguments)
  }
}

let o = new O(10)

_.each(arr, o.f)

_.each(arr, o.f, {}) // 10 : o.f already bound to o, passing context won't affect

_.each(arr, o.f2, {i: 2}) // 2 : context works


