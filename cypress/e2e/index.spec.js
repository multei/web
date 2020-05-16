/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("Home page", () => {
  it("should be with correct url", () => {
    cy.visit("/")
    cy.url().should("contain", "/")
  })
  it("should have no detectable accessibility violations on load", () => {
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })
  it("should have canonical URL on meta", () => {
    cy.get("head link[rel=canonical]").should(
      "have.attr",
      "href",
      "https://multei.com.br/"
    )
  })
  it("should have site title present on header", () => {
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})

describe("Parking report page", () => {
  before(() => {
    cy.setFeatureToggle("GET_USER_MEDIA", false)
    cy.setFeatureToggle("PARKING_CHECK", false)
    cy.setFeatureToggle("PARKING_REPORT", true)
  })
  it("should be with correct URL", () => {
    cy.visit("/denunciar")
    cy.url().should("contain", "/denunciar")
  })
  it("should have no detectable accessibility violations on load", () => {
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })
  it("should have canonical URL on meta", () => {
    cy.get("head link[rel=canonical]").should(($el) => {
      expect($el).to.have.length(1)
      const href = $el[0].href
      expect(href).to.match(new RegExp("https://multei.com.br"))
    })
  })
  it("should have site title present on header", () => {
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})
