export function sum(a: number, b: number) {
  return a + b
}

export function concat(a: string, b: string) {
  return a.concat(b)
}

export function sumAll(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0)
}