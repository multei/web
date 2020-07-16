import React from "react"
import renderer from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react"
import SuccessStep from "."
import { RecoilRoot } from "recoil"

describe("SuccessStep", () => {
  const mockOnClick = jest.fn()
  const carPlate = "carPlate"
  const carMake = "carMake"
  const carMakeModel = "carMakeModel"
  const props = {
    carPlate,
    carMake,
    carMakeModel,
    onClick: mockOnClick,
  }

  xit("should render correctly", () => {
    const tree = renderer
      .create(
        <RecoilRoot>
          <SuccessStep {...props} />
        </RecoilRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should render 'Fazer outra denúncia' button", () => {
    render(
      <RecoilRoot>
        <SuccessStep {...props} />
      </RecoilRoot>
    )
    const element = screen.getByText("Fazer outra denúncia", {
      selector: "button span",
    })
    expect(element).toBeTruthy()
  })

  it("should call onClick", () => {
    render(
      <RecoilRoot>
        <SuccessStep {...props} />
      </RecoilRoot>
    )

    const element = screen.getByText("Fazer outra denúncia", {
      selector: "button span",
    })

    fireEvent.click(element)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it("should render the right car data", () => {
    render(
      <RecoilRoot>
        <SuccessStep {...props} />
      </RecoilRoot>
    )
    const carPlateElement = screen.getByText(carPlate)
    const carMakeElement = screen.getByText(carMake)
    const carMakeModelElement = screen.getByText(`${carMakeModel} (ou similar)`)

    expect(carPlateElement).toBeTruthy()
    expect(carMakeElement).toBeTruthy()
    expect(carMakeModelElement).toBeTruthy()
  })
})
