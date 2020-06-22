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
      isCarFrontPhotoValid: true,
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

  it("should show the warning when the photo is invalid", () => {
    props.isCarFrontPhotoValid = false

    render(<CarFrontPhotoStep {...props} />)

    const element = screen.getByText(
      "Por favor, envie uma foto da parte da frente do veículo."
    )
    expect(element).toBeTruthy()
  })
})
