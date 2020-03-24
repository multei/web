describe("Production site URL", () => {
  const expectedUrl = "https://multei.com.br"
  it("should be defined", () => {
    const productionSiteUrl = require("./productionSiteUrl")
    expect(productionSiteUrl).toEqual(expectedUrl)
  })
  it("should be passed to gatsby-plugin-canonical-urls config", () => {
    const { plugins } = require("./index")
    const [config] = plugins.filter(
      (obj) => obj.resolve === "gatsby-plugin-canonical-urls"
    )
    const {
      options: { siteUrl },
    } = config
    expect(siteUrl).toEqual(expectedUrl)
  })
})
