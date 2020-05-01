import React, { useState } from "react"
import CarReportingWizard from "../../components/CarReportingWizard"
import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../components/SuccessStep"
import useGlobal from "../../hooks/useGlobal"

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
  const [globalState] = useGlobal()
  const [transitionDirection, setTransitionDirection] = useState("left")

  const steps = getSteps()
  const maxSteps = steps.length

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <CarFrontPhotoStep />
      case 1:
        return <CarPlateConfirmStep />
      case 2:
        return <LocationStep />
      case 3:
        return <SuccessStep />
      default:
        throw new Error("Invalid step index")
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
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }

  const nextButtonDisabled = () => {
    switch (activeStep) {
      case 0:
        return !globalState.currentParkingReportingData.carFrontPhotoPreviewUrl
      case 1:
        return !(globalState.currentParkingReportingData.carPlate.length === 7)
      case 2:
        return !globalState.currentParkingReportingData.currentPosition
      default:
        return false
    }
  }

  const nextButtonLabel = activeStep === 2 ? "Finalizar" : "Avançar"

  return (
    <CarReportingWizard
      activeStep={activeStep}
      backButtonDisabled={activeStep < 1}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      nextButtonDisabled={nextButtonDisabled()}
      nextButtonLabel={nextButtonLabel}
      showBackButton={activeStep > 0 && activeStep < 3}
      showMobileStepper={activeStep < 3}
      showNextButton={activeStep < 3}
      transitionDirection={transitionDirection}
      steps={steps}
    >
      {getStepContent(activeStep)}
    </CarReportingWizard>
  )
}
