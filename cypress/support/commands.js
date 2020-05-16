import "cypress-file-upload"
import "@testing-library/cypress/add-commands"

const setFeatureToggle = (key, value) => {
  cy.log(`Setting ${key} toggle to ${value}`)
  Cypress.env(`GATSBY_TOGGLE_${key}`, value)
  localStorage.setItem(`TOGGLE_${key}`, value)
}

Cypress.Commands.add("setFeatureToggle", setFeatureToggle)
