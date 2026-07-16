import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import Footer from "."

const isFooterLinkRefWarning = (args) =>
  args.some(
    (arg) =>
      typeof arg === "string" &&
      (arg.includes(
        "Invalid prop `component` supplied to `ForwardRef(Link)`"
      ) ||
        arg.includes("`ref` is not a prop") ||
        arg.includes("Function components cannot be given refs"))
  )

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer siteTitle="Test site title" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders help, privacy, and terms links without ref warnings", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    const { getByText } = render(<Footer siteTitle="Test site title" />)

    expect(getByText("Ajuda").closest("a")).toHaveAttribute("href", "/ajuda")
    expect(getByText("Privacidade").closest("a")).toHaveAttribute(
      "href",
      "/privacidade"
    )
    expect(getByText("Termos de uso").closest("a")).toHaveAttribute(
      "href",
      "/termos"
    )

    const linkRefWarnings = consoleError.mock.calls.filter(
      isFooterLinkRefWarning
    )
    expect(linkRefWarnings).toHaveLength(0)
    consoleError.mockRestore()
  })
})
