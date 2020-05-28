import React from 'react'
import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"

const steps = Object.freeze([])

export const useReportingWizardSteps = () => [
  {
    label: "Enviar foto da frente",
    component: CarFrontPhotoStep
  }
]
