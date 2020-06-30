import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import LocationStep from "."

describe("LocationStep", () => {
  let props

  beforeEach(() => {
    props = {
      permissionDenied: false,
      isLocationValid: true,
    }
  })

  it("should render correctly", () => {
    const tree = renderer.create(<LocationStep {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should render warning panel", () => {
    props.isLocationValid = false
    render(<LocationStep {...props} />)

    const element = screen.getByText("Algo não deu certo!")
    expect(element).toBeTruthy()
  })

  it("should render error panel", () => {
    props.permissionDenied = true
    render(<LocationStep {...props} />)

    const element = screen.getByText(
      "Não é possível saber a localização da vaga"
    )
    expect(element).toBeTruthy()
  })
})
