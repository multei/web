/**
 * @type {({resolve: string})[]}
 */
const plugins = require(".")

describe("Canonical URL", function () {
  it("should be correct", () => {
    const [config] = plugins.filter(
      (obj) => obj.resolve === "gatsby-plugin-canonical-urls"
    )
    const {
      options: { siteUrl },
    } = config
    expect(siteUrl).toEqual("https://multei.com.br")
  })
})
