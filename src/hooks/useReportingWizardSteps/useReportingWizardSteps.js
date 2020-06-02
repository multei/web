import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import { CarPhotoInstructionsStep } from "../../components/CarPhotoInstructionsStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../components/SuccessStep"
import useFeatureToggle from "../useFeatureToggle"

const steps = Object.freeze([
  {
    label: "Instruções",
    component: CarPhotoInstructionsStep,
    featureToggle: "CAR_REPORT_PHOTO_INSTRUCTIONS",
  },
  {
    label: "Enviar foto da frente",
    component: CarFrontPhotoStep,
  },
  {
    label: "Confirmar placa",
    component: CarPlateConfirmStep,
    featureToggle: "PLATE_CONFIRMATION_STEP",
  },
  {
    label: "Enviar localização",
    component: LocationStep,
  },
  {
    label: "Denúncia realizada",
    component: SuccessStep,
  },
])

export const useReportingWizardSteps = () => {
  let toReturn = []

  steps.forEach((step) => {
    if (isEnabled(step)) {
      toReturn.push(step)
    }
  })

  return toReturn
}

const isEnabled = (step) => {
  const [featureToggle] = useFeatureToggle(step.featureToggle)

  return step.featureToggle ? featureToggle : true
}
