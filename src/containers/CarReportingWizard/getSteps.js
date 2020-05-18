import React from "react"

export const getSteps = ({ getPlateConfirmationStepToggle }) => {
  let steps = []

  if (getPlateConfirmationStepToggle) {
    steps = [
      <>Enviar foto da&nbsp;frente</>,
      <>Confirmar placa</>,
      <>Enviar localização</>,
      <>Denúncia realizada</>,
    ]
  } else {
    steps = [
      <>Enviar foto da&nbsp;frente</>,
      <>Enviar localização</>,
      <>Denúncia realizada</>,
    ]
  }

  return [steps, steps.length || null]
}
