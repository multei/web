import React from "react"
import renderer from "react-test-renderer"
import { render, screen, createEvent, fireEvent } from "@testing-library/react"
import SuccessStep from "."
import { RecoilRoot } from "recoil"

jest.mock("@material-ui/core/fade")

describe("SuccessStep", () => {
  const mockOnClick = jest.fn()
  const props = {
    onClick: mockOnClick,
  }

  it("should render correctly", () => {
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
