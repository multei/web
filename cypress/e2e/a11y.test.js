/// <reference types="cypress" />
describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  context("should have no detectable accessibility violations on load", () => {
    it("home page", () => {
      cy.checkA11y()
    })
    it("create report page", () => {
      cy.findByText("Denunciar")
        .click()
        .checkA11y()
    })
  })
})
