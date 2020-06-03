import React from "react"
import renderer from "react-test-renderer"
import TakeCarFrontPhotoStep from "."

describe("Take car front photo step", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<TakeCarFrontPhotoStep />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
