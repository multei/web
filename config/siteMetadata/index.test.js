const siteMetadata = require(".")

describe("Site metadata", () => {
  describe("Background color", () => {
    it("should be a valid hex string", () => {
      expect(siteMetadata.backgroundColor).toBeHexColor()
    })
  })

  describe("Default meta description", () => {
    it("should not mention pregnant", () => {
      expect(siteMetadata.description).not.toContain("grávidas")
    })
    it("should mention disabled people", () => {
      expect(siteMetadata.description).toContain("pessoas com deficiência")
    })
  })

  describe("Google site verification code", () => {
    it("should be defined", () => {
      expect(siteMetadata.googleSiteVerification).toBeDefined()
    })
  })

  describe("Site name", () => {
    it("should be Multei!", () => {
      expect(siteMetadata.siteName).toBe("Multei!")
    })
  })

  describe("Site default title", () => {
    it("should be a maximum of 60 characters long", () => {
      expect(siteMetadata.title.length).toBeLessThanOrEqual(60)
    })
  })

  describe("Site URL", () => {
    it("should be defined", () => {
      expect(siteMetadata.siteUrl).toEqual("https://multei.com.br")
    })
  })

  describe("Theme color", () => {
    it("should be a valid hex string", () => {
      expect(siteMetadata.themeColor).toBeHexColor()
    })
  })
})
