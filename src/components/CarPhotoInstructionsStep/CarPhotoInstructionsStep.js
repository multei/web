import React from "react"
import { Paragraph, Image } from "muy"
import carPhotoModel from "../../images/car_model.png"

export const CarPhotoInstructionsStep = () => (
  <div>
    <Paragraph variant="body2">
      A foto deve mostrar o veículo por inteiro, deixando visível a placa e o
      painel do veículo, provando que não há credencial devidamente exposta.
      Você pode enquadrar evidências de que a vaga é reservada a pessoas com
      deficiência para facilitar o processo de denúncia.
    </Paragraph>
    <Image alt="Foto de exemplo do carro" src={carPhotoModel} />
  </div>
)
