function getAllBooks(){
    let books = [
        { name: 'book1', author: 'karlkim'},
        { name: 'book2', author: 'karlkim'},
        { x: 'x'}
    ];
    // test
    return books;
}

let s = getAllBooks();
s.forEach(x => console.log('obj', x));

// enum
enum Category { Biography, Poetry, Fiction };
let cat = Category.Biography;
console.log(Category[cat]); // Biography
console.log(cat); // 0

// array
let strArray: string[] = ['1', '2', '3'];
let anyArray : (number|string)[]= [42, 'banana', 12, 34, 5];

// tuple
let myTuple: [number, string] = [25, 'w'];

// string literals
let strLitArray: ('1'|'2'|'3')[] = ['1', '1', '3'];


function add(x:number, y:number):number{
    return x + y;
}

// arrow function
function Book(){
    this.publishDate = 2016;
    setTimeout(() => { console.log(this.publishDate);}, 1000);
}

Book();

// function type
let fn:(n:number) => string;

fn = () => { return 'test' };
fn(5);

// rest
function testRest(name:string, n:number = 10,...ids:number[]){
    console.log(ids);
}
testRest('name', 1,2,3,4);

// function overload
function test(str:string):void;
function test(num:number):void;
function test(v:any){
    console.log(v);
}

test('test');
test(2);

// interfaces 
// duck typing
import {Duck} from './interface';

let maybeADuck = {
    walk: () => console.log('walk'),
    swim: () => console.log('swim'),
    quack: () => console.log('quack')
}

function duck(d:Duck){
    d.walk();
    d.swim();
    d.quack();
}

duck(maybeADuck);

// interfaces for function types
interface StringGenerator{
    (n:number): string;
}

let sg:StringGenerator = (n:number) => n.toString();
console.log(sg(10));

// extending interfaces
interface SG {
    sg:StringGenerator;
}
interface DuckSg extends Duck, SG {
    test:string;
}

let duckSg:DuckSg = {
    test: 'test',
    walk: () => console.log('walk'),
    swim: () => console.log('swim'),
    quack: () => console.log('quack'),
    sg: sg
}

console.log(duckSg.sg(42));
duckSg.walk();

// class types
class DuckImpl implements DuckSg {
    test: 'test'
    walk(){ console.log('walk') }
    swim = () => console.log('swim')
    quack = () => console.log('quack')
    sg = sg
    name: 'name'
}

let ddd = new DuckImpl();
ddd.swim();

/// <reference path='namespace.ts;/>
Membership.AddMember('hello');

import * as m from './modules';
m.f1();

import C from './defaultModule';
let aa = new C();
aa.name = 'name';