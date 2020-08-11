import { helloWorldAlert, helloWorldLog } from "../src/index"

jest.spyOn(global.console, "log")
jest.spyOn(window, "alert")

test("log test", () => {
  helloWorldLog()
  expect(console.log).toBeCalled()
})

test("alert test", () => {
  helloWorldAlert()
  expect(window.alert).toBeCalled()
})
