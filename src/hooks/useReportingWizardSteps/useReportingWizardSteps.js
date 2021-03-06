import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import { CarPhotoInstructionsStep } from "../../components/CarPhotoInstructionsStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../containers/SuccessStep"

import { isCarFrontPhotoValid } from "../../validators/isCarFrontPhotoValid"
import { isCarPlateValid } from "../../validators/isCarPlateValid"
import { isCurrentPositionValid } from "../../validators/isCurrentPositionValid"

import { handleCarFrontPhoto, handleLocationStep } from "./handleNext"

export const useReportingWizardSteps = ({ toggles }) => {
  let result = []

  const steps = Object.freeze([
    {
      label: "Instruções",
      component: CarPhotoInstructionsStep,
      featureToggle: "CAR_REPORT_PHOTO_INSTRUCTIONS",
    },
    {
      label: "Enviar foto da frente",
      component: CarFrontPhotoStep,
      validator: isCarFrontPhotoValid,
      handleNext: handleCarFrontPhoto,
    },
    {
      label: "Confirmar placa",
      component: CarPlateConfirmStep,
      featureToggle: "PLATE_CONFIRMATION_STEP",
      validator: isCarPlateValid,
    },
    {
      label: "Enviar localização",
      component: LocationStep,
      validator: isCurrentPositionValid,
      handleNext: handleLocationStep,
    },
    {
      label: "Denúncia realizada",
      component: SuccessStep,
    },
  ])

  steps.forEach((step) => {
    if (step.featureToggle ? toggles[step.featureToggle] : true) {
      result = [...result, step]
    }
  })

  return result
}
