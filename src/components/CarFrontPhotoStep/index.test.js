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

  it("should render correctly", () => {
    const tree = renderer.create(<CarFrontPhotoStep {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should hide the photo preview while no car front photo is uploaded", () => {
    render(<CarFrontPhotoStep {...props} />)

    const element = screen.getByTestId("previewFade")
    expect(element.style).toHaveProperty("visibility", "hidden")
  })

  it("should show the photo preview when a car front photo is uploaded", () => {
    props.photoPreviewURL = "someURL"
    render(<CarFrontPhotoStep {...props} />)

    const element = screen.getByTestId("previewFade")
    expect(element.style).not.toHaveProperty("visibility", "hidden")
  })
})
