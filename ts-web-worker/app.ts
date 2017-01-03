console.log('main');
declare var require;

interface WorkerType {
  new (stringUrl: string): Worker
  prototype: Worker
}

var Worker: WorkerType = require("worker?inline!./workers/fiboworker.js");
var worker = new Worker('');

console.log(worker);
worker.onmessage = function (msg) {
  console.log('worker.onmessage: ' + msg.data);
  document.getElementById('result').innerText = msg.data
};
worker.postMessage(30);

document.getElementById('btn').onclick = () => {
  document.getElementById('result').innerText = 'processing...'
  let input = <HTMLInputElement> document.getElementById('input')
  worker.postMessage(input.value)
}


console.log('main done');