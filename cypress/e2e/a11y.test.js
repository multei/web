/// <reference types="cypress" />
describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  context("should have no detectable accessibility violations on load", () => {
    xit("home page", () => {
      cy.checkA11y()
    })
    xit("create report page", () => {
      cy.findByText("Denuncie agora")
        .click()
        .checkA11y()
    })
  })
})
