
function MyClassDecorator(value: string) {
  return function (target: Function) {
      console.log('my class decorator', target, value);
  }
}

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in 
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args)); // pre
        let result = originalMethod.apply(this, args);               // run and store the result
        console.log("The return value is: " + result);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}

@MyClassDecorator("my metadata")
class MyClass { }

var myClass = new MyClass();
console.log('test value'); // outputs “my metadata”

class C {
    @log
    foo(n: number) {
        return n * 2;
    }
}

let c  = new C();
console.log(c.foo(5));

