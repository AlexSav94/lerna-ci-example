export function log(string?: string) {
  console.log(string)
}

export function alert(string?: string) {
  window.alert(string)
}

export function logAll(...string: Array<string>) {
  console.log(...string)
}
