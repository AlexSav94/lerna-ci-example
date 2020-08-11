import { log, alert } from "../src/index"

jest.spyOn(global.console, "log")
jest.spyOn(window, "alert")

test("log test", () => {
  log("123")
  expect(console.log).toBeCalled()
})

test("alert test", () => {
  alert("123")
  expect(window.alert).toBeCalled()
})
