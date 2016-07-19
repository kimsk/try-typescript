import * as foobar from './export';
import foo from './export';
import { default as foo2 } from './export';
import { bar } from './export';

console.log(foobar);
console.log(foo);
console.log(foo2);
console.log(foo.a);
console.log(bar);

function test(str:string){
  console.log(str);
}

test('1..');

let t = new foobar.Test();
t.test({a: '10', b: 10});