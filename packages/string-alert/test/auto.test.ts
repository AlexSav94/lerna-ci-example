import { log } from "../src/index"

jest.spyOn(global.console, "log")

test("log test", () => {
  log("123")
  expect(console.log).toBeCalled()
})
