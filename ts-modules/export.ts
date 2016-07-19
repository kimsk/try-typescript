import "babel-polyfill";

export const bar = 'bar';
const foo = { a: 'foo' };

export default foo;

export interface ITest {
  a: string;
  b: number;
}

export class Test {
  test(i:ITest){
    console.log(i)
  }
}


async function main() {
 await ping();
}

async function ping() {
  while(true){
    await delay(1000);
    console.log('ping..');
  }
}

function delay(ms: number) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

main();

