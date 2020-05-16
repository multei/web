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
    url: "/socket.io/**",
  }).as("socketIoGet")
  cy.route({
    method: "POST",
    url: "/socket.io/**",
  }).as("socketIoPost")
  cy.route({
    method: "GET",
    url: "/page-data/app-data.json",
  }).as("appData")
  cy.route({
    method: "GET",
    url: "/page-data/index/page-data.json",
  }).as("indexPageData")
  cy.route({
    method: "GET",
    url: "/page-data/dev-404-page/page-data.json",
  }).as("notFoundDevPageData")
  cy.route({
    method: "GET",
    url: "/page-data/404.html/page-data.json",
  }).as("notFoundPageData")
  cy.route({
    method: "GET",
    url: "/page-data/denunciar/page-data.json",
  }).as("reportPageData")
}

Cypress.Commands.add("routePageDataRequests", routePageDataRequests)
