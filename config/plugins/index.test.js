/**
 * @type {({resolve: string})[]}
 */
const plugins = require(".")

const filterByPluginName = (plugins, pluginName) =>
  plugins.filter((obj) => obj.resolve === pluginName)

describe("Canonical URL", () => {
  it("should be correct", () => {
    const [config] = filterByPluginName(plugins, "gatsby-plugin-canonical-urls")
    const {
      options: { siteUrl },
    } = config
    expect(siteUrl).toEqual("https://multei.com.br")
  })
})

describe("Manifest", () => {
  const [config] = filterByPluginName(plugins, "gatsby-plugin-manifest")
  describe("background color", () => {
    it("should be an hexadecimal color", () => {
      expect(config.options.background_color).toBeHexColor()
    })
  })
  describe("theme color", () => {
    it("should be an hexadecimal color", () => {
      expect(config.options.theme_color).toBeHexColor()
    })
  })
})
