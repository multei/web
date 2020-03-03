import React, { useState } from "react"
import CarReportingWizard from "../../components/reportingSteps/CarReportingWizard"
import CarFrontPhotoStep from "../../containers/reportingSteps/CarFrontPhotoStep"
import CarRearPhotoStep from "../../components/reportingSteps/CarRearPhotoStep"

function getSteps() {
  return [
    <>Enviar foto da&nbsp;frente</>,
    <>Enviar foto da&nbsp;traseira</>,
    <>Enviar localização</>,
    <>Confirmar denúncia</>,
    <>Denúncia feita</>,
  ]
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <CarFrontPhotoStep />
    case 1:
      return <CarRearPhotoStep />
    default:
      return <></>
  }
}

export default () => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <CarReportingWizard
      activeStep={activeStep}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      steps={steps}
    >
      {getStepContent(activeStep)}
    </CarReportingWizard>
  )
}
