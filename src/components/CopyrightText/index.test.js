import React from "react"
import renderer from "react-test-renderer"
import { CopyrightText } from "."

describe("Header", () => {
  it("renders correctly with site title", () => {
    const tree = renderer
      .create(<CopyrightText siteTitle="Test site name" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
