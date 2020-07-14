import React from "react"
import renderer from "react-test-renderer"
import EmbedGoogleMap from "."

describe("<EmbedGoogleMap /> container", () => {
  it("should render", () => {
    const tree = renderer.create(<EmbedGoogleMap />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
