import { helloWorldLog } from "../src/index"

jest.spyOn(global.console, "log")

test("log test", () => {
  helloWorldLog()
  expect(console.log).toBeCalled()
})
