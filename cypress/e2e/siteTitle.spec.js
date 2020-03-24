describe("Site title", () => {
  it("should be present on header", () => {
    cy.visit("/")
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})
