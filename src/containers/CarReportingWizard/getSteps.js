import React from "react"

export const getSteps = ({ getPlateConfirmationStepToggle, carReportPhotoInstructions }) => {
  let steps = [];
  steps.push(<>Enviar foto da&nbsp;frente</>)

  if (getPlateConfirmationStepToggle)
    steps.push(<>Confirmar placa</>)

  if (carReportPhotoInstructions)
    steps.push(<>Instruções</>)

  steps.push(<>Enviar localização</>)
  steps.push(<>Denúncia realizada</>)

  return [steps, steps.length || null]
}
