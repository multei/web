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
    cy.visit("/denunciar")
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
      "https://multei.com.br/denunciar"
    )
  })
  it("should have site header present on header", () => {
    cy.visit("/")
    cy.get('header[role="banner"] h1 a').contains("Multei!")
  })
})
