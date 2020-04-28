const { backgroundColor, siteUrl, themeColor } = require(".")

describe("Background color", () => {
  it("should be a valid hex string", () => {
    expect(backgroundColor).toBeHexColor()
  })
})

describe("Theme color", () => {
  it("should be a valid hex string", () => {
    expect(themeColor).toBeHexColor()
  })
})

describe("Site URL", () => {
  it("should be defined", () => {
    expect(siteUrl).toEqual("https://multei.com.br")
  })
})
