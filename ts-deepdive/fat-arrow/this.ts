import * as _ from 'underscore'

let arr = [1,2,3,4,5]

function O (val:number) {
  this.i = val
  this.f = v => {
    console.log(this.i)
  }

  this.f2 = function (v) {
    console.log(this.i)
  }
}

let o = new O(10)

_.each(arr, o.f)

_.each(arr, o.f, {}) // 10 : o.f already bound to o, passing context won't affect

_.each(arr, o.f2, {i: 2}) // 2 : context works

