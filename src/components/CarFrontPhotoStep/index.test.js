import React from "react"
import renderer from "react-test-renderer"
import CarFrontPhotoStep from "."

describe("CarFrontPhotoStep", () => {
  it("renders correctly", () => {
    const props = {
        onChange: () => {},
        onSubmit: () => {},
        photoPreviewURL: null,
      }  

    const tree = renderer
      .create(<CarFrontPhotoStep {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})