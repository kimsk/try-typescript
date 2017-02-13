function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(v: string | T[]): string | T[] {
  return typeof v === 'string'
          ? v.split('').reverse().join('')
          : v.reverse()
}

console.log(reverse('abcdef'))
console.log(reverse([1,2,3,4,5]))
