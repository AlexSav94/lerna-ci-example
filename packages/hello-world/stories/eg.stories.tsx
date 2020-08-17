import * as React from "react"
import { HelloWorld } from "../src/HelloWord"

export default {
  title: "Example",
  decorators: [(StoryFn: Function) => <StoryFn />],
}

export const BasicUsage = () => {
  return (
    <>
      <HelloWorld />
    </>
  )
}
