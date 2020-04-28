const { siteUrl } = require(".")

describe("Site URL", () => {
  it("should be defined", () => {
    expect(siteUrl).toEqual("https://multei.com.br")
  })
})
