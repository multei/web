/// <reference types="cypress" />
describe("Car report journey", () => {
  beforeEach(() => {
    cy.visit("/denunciar")
  })
  context("car front photo upload step", () => {
    context("next button", () => {
      xit("should be disabled when page is loaded", () => {
        cy.findByText("Avançar").should("be.disabled")
      })
      xit("should be enabled after file select and disable", () => {})
    })
    context("car front photo upload", () => {
      xit("should happen with success", () => {
        const fileName = "car-front-example.jpg"
        cy.findByText("Avançar").as("submitButton")
        cy.fixture(fileName).then((fileContent) => {
          cy.get("[data-test-id=carFrontImageUploadField]").upload({
            fileContent,
            fileName,
            mimeType: "application/json",
          })
        })
      })
    })
    context("next button after file upload", () => {
      xit("should not be disabled", () => {
        cy.get("@submitButton").should("not.be.disabled")
      })
    })
  })
})
