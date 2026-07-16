import React from "react"
import { render } from "@testing-library/react"
import SEO from "."

jest.mock("../../hooks/useSiteMetadata", () => () => ({
  description: "Site default description",
  title: "Multei!",
  titleTemplate: "%s | Multei!",
}))

const mockMetaxSEO = jest.fn(() => null)

jest.mock("metax", () => ({
  SEO: (props) => {
    mockMetaxSEO(props)
    return null
  },
}))

describe("<SEO />", () => {
  beforeEach(() => {
    mockMetaxSEO.mockClear()
  })

  it("defaults description and title from site metadata", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    render(<SEO />)

    expect(mockMetaxSEO).toHaveBeenCalledWith(
      expect.objectContaining({
        description: "Site default description",
        title: "Multei!",
      })
    )

    const descriptionWarnings = consoleError.mock.calls.filter((args) =>
      args.some(
        (arg) =>
          typeof arg === "string" &&
          arg.includes("prop `description` is marked as required")
      )
    )
    expect(descriptionWarnings).toHaveLength(0)
    consoleError.mockRestore()
  })

  it("prefers explicit description and title props", () => {
    render(
      <SEO
        description="Page-specific description"
        title="Denunciar estacionamento irregular"
      />
    )

    expect(mockMetaxSEO).toHaveBeenCalledWith(
      expect.objectContaining({
        description: "Page-specific description",
        title: "Denunciar estacionamento irregular",
      })
    )
  })
})
