jest.mock("../templates/help", () => () => null)
jest.mock("../templates/check", () => () => null)
jest.mock("../templates/reporting", () => () => null)
jest.mock("../templates/privacy", () => () => null)
jest.mock("../templates/about", () => () => null)
jest.mock("../templates/terms", () => () => null)
jest.mock("../templates", () => () => null)

import AjudaPage from "./ajuda"
import ConsultarPage from "./consultar"
import DenunciarPage from "./denunciar"
import PrivacidadePage from "./privacidade"
import SobrePage from "./sobre"
import TermosPage from "./termos"
import IndexPage from "./index"

describe("Gatsby page default exports", () => {
  it.each([
    ["AjudaPage", AjudaPage],
    ["ConsultarPage", ConsultarPage],
    ["DenunciarPage", DenunciarPage],
    ["PrivacidadePage", PrivacidadePage],
    ["SobrePage", SobrePage],
    ["TermosPage", TermosPage],
    ["IndexPage", IndexPage],
  ])("%s is a named function (Fast Refresh / eslint-loader)", (name, page) => {
    expect(typeof page).toBe("function")
    expect(page.name).toBe(name)
  })
})
