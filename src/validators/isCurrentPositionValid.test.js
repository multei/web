import { isCurrentPositionValid } from "./isCurrentPositionValid"

describe("Current position validator", () => {
  it("should invalidate when currentPosition is undefined", () => {
    const actual = isCurrentPositionValid({})
    expect(actual).toBe(false)
  })
  it("should invalidate when currentPosition is null", () => {
    const actual = isCurrentPositionValid({ currentPosition: null })
    expect(actual).toBe(false)
  })
  it("should invalidate when is undefined", () => {
    const actual = isCurrentPositionValid({ currentPosition: {} })
    expect(actual).toBe(false)
  })
  it("should invalidate when there is no coords' properties", () => {
    const actual = isCurrentPositionValid({ currentPosition: { coords: {} } })
    expect(actual).toBe(false)
  })
  it("should invalidate when coords property is null", () => {
    const actual = isCurrentPositionValid({ currentPosition: { coords: null } })
    expect(actual).toBe(false)
  })
  it("should invalidate when latitude and longitude are null", () => {
    const actual = isCurrentPositionValid({
      currentPosition: {
        coords: {
          latitude: null,
          longitude: null,
        },
      },
    })
    expect(actual).toBe(false)
  })
})
