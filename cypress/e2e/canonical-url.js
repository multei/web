describe("Canonical URL", () => {
  it("should be included on homepage", () => {
    cy.visit("/")
    cy.get("head link[rel=canonical]").should(
      "have.attr",
      "href",
      "https://multei.com.br/"
    )
  })
})
