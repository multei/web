import React from "react"
import renderer from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react"
import SuccessStep from "."
import { RecoilRoot } from "recoil"

describe("SuccessStep", () => {
  const mockOnClick = jest.fn()
  const props = {
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
})
