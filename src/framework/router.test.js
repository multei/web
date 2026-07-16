import React from "react"
import { render } from "@testing-library/react"
import { RouterLink, getPath, navigateTo } from "./router"

describe("framework router", () => {
  it("renders links using href", () => {
    const { getByText } = render(<RouterLink href="/sobre">Sobre</RouterLink>)

    expect(getByText("Sobre").getAttribute("href")).toBe("/sobre")
  })

  it("resolves route paths", () => {
    expect(getPath("/consultar")).toBe("/consultar")
  })

  it("navigates in browser environments", () => {
    const assign = jest.fn()
    const location = window.location
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { assign },
    })

    navigateTo("/consultar?car_plate=")

    expect(assign).toHaveBeenCalledWith("/consultar?car_plate=")

    Object.defineProperty(window, "location", {
      configurable: true,
      value: location,
    })
  })
})
