/// <reference types="cypress" />
describe("Car report journey", () => {
  beforeEach(() => {
    cy.visit("/denunciar")
  })
  context("car front photo upload step", () => {
    context("next button", () => {
      it("should be disabled when page is loaded", () => {
        cy.findByText("Avançar").should("be.disabled")
      })
    })
  })

  // context("submit button", () => {

  //
  //   })
  //   it("should be enabled after file select and disable", () => {
  //     const fileName = "car-front-example.jpg"
  //     cy.findByText("Avançar").as("submitButton")
  //     cy.fixture(fileName).then((fileContent) => {
  //       cy.get("[data-test-id=carFrontImageUploadField]").upload({
  //         fileContent,
  //         fileName,
  //         mimeType: "application/json",
  //       })
  //     })
  //     cy.get("@submitButton").should("not.be.disabled")
  //   })
  // })
})
