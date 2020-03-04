import React, { useState } from "react"
import CarReportingWizard from "../../components/reportingSteps/CarReportingWizard"
import CarFrontPhotoStep from "../../containers/reportingSteps/CarFrontPhotoStep"
import CarRearPhotoStep from "../../components/reportingSteps/CarRearPhotoStep"
import CarPlateConfirmStep from "../../components/reportingSteps/CarPlateConfirmStep"

function getSteps() {
  return [
    <>Enviar foto da&nbsp;frente</>,
    <>Enviar foto da&nbsp;traseira</>,
    <>Enviar localização</>,
    <>Confirmar denúncia</>,
    <>Denúncia feita</>,
  ]
}

export default () => {
  const [activeStep, setActiveStep] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState("left")
  const steps = getSteps()
  const maxSteps = steps.length

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return <CarFrontPhotoStep transitionDirection={transitionDirection} />
      case 1:
        return <CarRearPhotoStep transitionDirection={transitionDirection} />
      case 3:
        return <CarPlateConfirmStep transitionDirection={transitionDirection} />
      default:
        return <></>
    }
  }

  const handleNext = () => {
    setTransitionDirection("left")
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setTransitionDirection("right")
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <CarReportingWizard
      activeStep={activeStep}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      transitionDirection={transitionDirection}
      steps={steps}
    >
      {getStepContent(activeStep)}
    </CarReportingWizard>
  )
}
