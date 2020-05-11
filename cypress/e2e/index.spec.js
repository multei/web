/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("Home page", () => {
  before(() => {
    cy.visit("/")
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
  it("should have site header present on header", () => {
    cy.visit("/")
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})

describe("Parking report page", () => {
  before(() => {
    /**
     * @todo: Use or create Cypress command to change environment values
     */
    localStorage.setItem("TOGGLE_PARKING_REPORT", "false")
    Cypress.env("GATSBY_TOGGLE_PARKING_REPORT", "false")
    localStorage.setItem("TOGGLE_GET_USER_MEDIA", "false")
    Cypress.env("GATSBY_TOGGLE_GET_USER_MEDIA", "false")
    cy.reload()
    cy.visit("/denunciar")
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
  it("should have site header present on header", () => {
    cy.visit("/")
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})
