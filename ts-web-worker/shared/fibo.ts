export default function fibo (n:number) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}