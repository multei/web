import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import EmbedGoogleMap from "."

describe("<EmbedGoogleMap /> container", () => {
  const originalEnv = process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY

  beforeEach(() => {
    process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY = "test-api-key"
  })

  afterEach(() => {
    process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY = originalEnv
  })

  it("should render", () => {
    const tree = renderer.create(<EmbedGoogleMap />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should embed the map for the given coordinates", () => {
    const { container } = render(<EmbedGoogleMap coordinates="-23.55,-46.63" />)
    const iframe = container.querySelector("iframe")

    expect(iframe).toBeTruthy()
    expect(iframe.getAttribute("src")).toBe(
      "https://www.google.com/maps/embed/v1/place?q=-23.55,-46.63&key=test-api-key"
    )
  })

  it("should not pass a boolean className when variant is omitted", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    render(<EmbedGoogleMap coordinates="-23.55,-46.63" />)

    const propTypeWarnings = consoleError.mock.calls.filter((args) =>
      args.some(
        (arg) =>
          typeof arg === "string" &&
          arg.includes("Invalid prop `className` of type `boolean`")
      )
    )

    expect(propTypeWarnings).toHaveLength(0)
    consoleError.mockRestore()
  })

  it("should apply cover styling when variant is cover", () => {
    const { container } = render(
      <EmbedGoogleMap coordinates="-23.55,-46.63" variant="cover" />
    )
    const iframe = container.querySelector("iframe")

    expect(iframe.className).toMatch(/cover/)
  })

  it("should forward string className without PropTypes warning", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    const { container } = render(
      <EmbedGoogleMap
        className="custom-map"
        coordinates="-23.55,-46.63"
        variant="cover"
      />
    )
    const iframe = container.querySelector("iframe")

    expect(iframe.className).toMatch(/cover/)
    expect(iframe.className).toMatch(/custom-map/)

    const propTypeWarnings = consoleError.mock.calls.filter((args) =>
      args.some(
        (arg) =>
          typeof arg === "string" &&
          arg.includes("Invalid prop `className` of type `boolean`")
      )
    )
    expect(propTypeWarnings).toHaveLength(0)
    consoleError.mockRestore()
  })
})
