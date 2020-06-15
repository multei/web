import React from "react"
import { render, screen } from "@testing-library/react"
import { CarPhotoInstructionsStep } from "./CarPhotoInstructionsStep"

describe("CarPhotoInstructionsStep tests", () => {
  it("should render instruction message", () => {
    render(<CarPhotoInstructionsStep />)
    const element = screen.getByText(
      `A foto deve mostrar o veículo por inteiro, deixando visível a placa e o painel do veículo, provando que não há credencial devidamente exposta. Você pode enquadrar evidências de que a vaga é reservada a pessoas com deficiência para facilitar o processo de denúncia.`
    )
    expect(element).toBeTruthy()
  })

  it("should render instruction image", () => {
    render(<CarPhotoInstructionsStep />)
    const element = screen.getByAltText(`Foto de exemplo do carro`)
    expect(element).toBeTruthy()
  })
})
