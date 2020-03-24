/// <reference types="cypress" />
describe("Car front photo upload step", () => {
  beforeEach(() => {
    cy.visit("/denunciar")
  })
  context("submit button", () => {
    xit("should be disabled when page is loaded", () => {
      cy.findByText("Avançar").as("submitButton")
      cy.get("@submitButton").should("be.disabled")
    })
    xit("should be enabled after file select and disable", () => {
      const fileName = "car-front-example.jpg"
      cy.findByText("Avançar").as("submitButton")
      cy.fixture(fileName).then((fileContent) => {
        cy.get("[data-test-id=carFrontImageUploadField]").upload({
          fileContent,
          fileName,
          mimeType: "application/json",
        })
      })
      cy.get("@submitButton").should("not.be.disabled")
    })
  })
})
