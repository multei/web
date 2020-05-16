import "cypress-file-upload"
import "@testing-library/cypress/add-commands"

const setFeatureToggle = (key, value) => {
  cy.log(`Setting ${key} toggle to ${value}`)
  Cypress.env(`GATSBY_TOGGLE_${key}`, value)
  localStorage.setItem(`TOGGLE_${key}`, value)
}

Cypress.Commands.add("setFeatureToggle", setFeatureToggle)

const routePageDataRequests = () => {
  cy.server()
  cy.route({
    method: "GET",
    url: "/page-data/app-data.json",
  }).as("appData")
  cy.route({
    method: "GET",
    url: "/page-data/index/page-data.json",
  }).as("indexPageData")
}

Cypress.Commands.add("routePageDataRequests", routePageDataRequests)
