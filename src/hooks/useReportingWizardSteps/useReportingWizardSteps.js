import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../components/SuccessStep"

const steps = Object.freeze([
  {
    label: "Enviar foto da frente",
    component: CarFrontPhotoStep
  },
  {
    label:"Confirmar placa",
    component: CarPlateConfirmStep
  },
  {
    label:"Enviar localização",
    component: LocationStep
  },
  {
    label: "Denúncia realizada",
    component:  SuccessStep
  }
])

export const useReportingWizardSteps = () => steps