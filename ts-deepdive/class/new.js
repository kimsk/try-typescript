function C (x) {
  /* when function is called with new
  *  this is an empty object
  */
  // var this = {}
  this.x = x

  /* when function is called with new
  *  this is return
  */
  // return this
}

C.prototype.f = function () { console.log('C.f') }

/* when function is called with new
* c.__proto__ = C.prototype
*/
var c = new C(10)
console.log(c, c.__proto__ === C.prototype)
c.f()

var d = new C(12)

d.c = new C(10)
console.dir(d)
