import { sum, concat } from "../src/index"

test("sum test", () => {
  expect(sum(3, 3)).toBe(6)
})

test("concat test", () => {
  expect(concat("test", " string")).toBe("test string")
})
