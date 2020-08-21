import { log, logAll } from "@-asap-/string-alert"

export function helloWorldLog() {
  log("hello world, people")
}
export function helloWorldLogAll() {
  logAll("hello world", "people")
}

export * from "./HelloWord"
