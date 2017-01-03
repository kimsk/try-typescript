import fibo from '../shared/fibo'
declare var self;

self.onmessage = function (msg: { data: number }) {
  console.log('fiboworker : call fibo('+msg.data+')')
  let result = fibo(msg.data)
  setTimeout(() => self.postMessage(result), 2000)
};
