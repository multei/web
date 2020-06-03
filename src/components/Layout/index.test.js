import React from "react"
import renderer from "react-test-renderer"
import { Layout } from "."
import theme from "../../themes"

describe("<Layout /> component", () => {
  it("should render correctly with light theme", () => {
    const tree = renderer
      .create(<Layout theme={theme("light")}>Test children</Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
