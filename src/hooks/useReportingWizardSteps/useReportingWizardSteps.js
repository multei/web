import React from 'react'
import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"

export const useReportingWizardSteps = () => [
  {
      label: "Enviar foto da frente",
      component: CarFrontPhotoStep
  }
]
