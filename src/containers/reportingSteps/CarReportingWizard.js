import React, { useState } from "react"
import CarReportingWizard from "../../components/reportingSteps/CarReportingWizard"
import CarFrontPhotoStep from "../../containers/reportingSteps/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/reportingSteps/CarPlateConfirmStep"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import LocationStep from "../../containers/reportingSteps/LocationStep"
import SuccessStep from "../../components/reportingSteps/SuccessStep"

function getSteps() {
  return [
    <>Enviar foto da&nbsp;frente</>,
    <>Confirmar placa</>,
    <>Enviar localização</>,
    <>Denúncia realizada</>,
  ]
}

export default () => {
  const [activeStep, setActiveStep] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState("left")
  const steps = getSteps()
  const maxSteps = steps.length

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <CarFrontPhotoStep transitionDirection={transitionDirection} />
      case 1:
        return <CarPlateConfirmStep transitionDirection={transitionDirection} />
      case 2:
        return <LocationStep transitionDirection={transitionDirection} />
      case 3:
        return <SuccessStep transitionDirection={transitionDirection} />
      default:
        return (
          <Alert>
            <AlertTitle>Etapa inválida</AlertTitle>
          </Alert>
        )
    }
  }

  const handleNext = () => {
    setTransitionDirection("left")
    if (activeStep < maxSteps) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setTransitionDirection("right")
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const nextButtonLabel = activeStep === 2 ? "Finalizar" : "Avançar"

  return (
    <CarReportingWizard
      activeStep={activeStep}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      nextButtonLabel={nextButtonLabel}
      showMobileStepper={activeStep < 3}
      transitionDirection={transitionDirection}
      steps={steps}
    >
      {getStepContent(activeStep)}
    </CarReportingWizard>
  )
}
