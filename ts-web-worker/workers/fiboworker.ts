import fibo from '../shared/fibo'
declare var self;

self.onmessage = function (msg: { data: number }) {
  console.log('fiboworker : call fibo('+msg.data+')')
  let result = fibo(msg.data)
  for(let i = 0; i < 50000000; i++){

  }
  self.postMessage(result)
};
