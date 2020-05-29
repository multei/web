import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import CarFrontPhotoStep from "."

describe("CarFrontPhotoStep", () => {
  let props
  
  beforeEach(() => {
    props = {
      onChange: () => {},
      onSubmit: () => {},
      photoPreviewURL: null,
    }

  })

  it("renders correctly", () => {
    const tree = renderer.create(<CarFrontPhotoStep {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should not show the photo preview", () => {
    render( <CarFrontPhotoStep {...props} />)

    const element = screen.getByTestId("previewFade")
    expect(element.style).toHaveProperty('visibility', 'hidden')
  })

  it("should show the photo preview", () => {
    props.photoPreviewURL = 'someURL'
    render( <CarFrontPhotoStep {...props} />)

    const element = screen.getByTestId("previewFade")
    expect(element.style).not.toHaveProperty('visibility', 'hidden')
  })
})
