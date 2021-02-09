export function log(string?: string) {
  console.log(string)
}

export function alert(string?: string) {
  window.alert(string)
}

export function alertAll(...string: string[]) {
  window.alert(string?.join())
}

export function logAll(...string: Array<string>) {
  console.log(...string)
}
