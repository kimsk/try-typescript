function getAllBooks() {
    var books = [
        { name: 'book1', author: 'karlkim' },
        { name: 'book2', author: 'karlkim' },
        { x: 'x' }
    ];
    // test
    return books;
}
var s = getAllBooks();
s.forEach(function (x) { return console.log('obj', x); });
// enum
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
})(Category || (Category = {}));
;
var cat = Category.Biography;
console.log(Category[cat]); // Biography
console.log(cat); // 0
// array
var strArray = ['1', '2', '3'];
var anyArray = [42, 'banana', 12, 34, 5];
// tuple
var myTuple = [25, 'w'];
// string literals
var strLitArray = ['1', '1', '3'];
function add(x, y) {
    return x + y;
}
// arrow function
function Book() {
    var _this = this;
    this.publishDate = 2016;
    setTimeout(function () { console.log(_this.publishDate); }, 1000);
}
Book();
// function type
var fn;
fn = function () { return 'test'; };
fn(5);
// rest
function testRest(name, n) {
    if (n === void 0) { n = 10; }
    var ids = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ids[_i - 2] = arguments[_i];
    }
    console.log(ids);
}
testRest('name', 1, 2, 3, 4);
function test(v) {
    console.log(v);
}
test('test');
test(2);
var maybeADuck = {
    walk: function () { return console.log('walk'); },
    swim: function () { return console.log('swim'); },
    quack: function () { return console.log('quack'); }
};
function duck(d) {
    d.walk();
    d.swim();
    d.quack();
}
duck(maybeADuck);
var sg = function (n) { return n.toString(); };
console.log(sg(10));
var duckSg = {
    test: 'test',
    walk: function () { return console.log('walk'); },
    swim: function () { return console.log('swim'); },
    quack: function () { return console.log('quack'); },
    sg: sg
};
console.log(duckSg.sg(42));
duckSg.walk();
// class types
var DuckImpl = (function () {
    function DuckImpl() {
        this.swim = function () { return console.log('swim'); };
        this.quack = function () { return console.log('quack'); };
        this.sg = sg;
    }
    DuckImpl.prototype.walk = function () { console.log('walk'); };
    return DuckImpl;
}());
var ddd = new DuckImpl();
ddd.swim();
/// <reference path='namespace.ts;/>
Membership.AddMember('hello');
var m = require('./modules');
m.f1();
var defaultModule_1 = require('./defaultModule');
var aa = new defaultModule_1.default();
aa.name = 'name';
//# sourceMappingURL=app.js.map