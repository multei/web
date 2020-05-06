import React, { useState } from "react"
import CarReportingWizard from "../../components/CarReportingWizard"
import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../components/SuccessStep"
import useGlobal from "../../hooks/useGlobal"
import useFeatureToggle from "../../hooks/useFeatureToggle"

function getSteps(getPlateConfirmationStepToggle) {
  return getPlateConfirmationStepToggle ? [
    <>Enviar foto da&nbsp;frente</>,
    <>Confirmar placa</>,
    <>Enviar localização</>,
    <>Denúncia realizada</>,
  ] : 
  [
    <>Enviar foto da&nbsp;frente</>,
    <>Enviar localização</>,
    <>Denúncia realizada</>,
  ]
}


export default () => {
  const [activeStep, setActiveStep] = useState(0)
  const [globalState] = useGlobal()
  const [transitionDirection, setTransitionDirection] = useState("left")

  const [getPlateConfirmationStepToggle] = useFeatureToggle("PLATE_CONFIRMATION_STEP")
  
  const steps = getSteps(getPlateConfirmationStepToggle)
  const maxSteps = steps.length

  const getStepContent = (stepIndex) => {
    if(getPlateConfirmationStepToggle)
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
    else
      switch (stepIndex) {
        case 0:
          return <CarFrontPhotoStep />
        case 1:
          return <LocationStep />
        case 2:
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
    if(getPlateConfirmationStepToggle)
      switch (activeStep) {
        case 0:
          return !globalState.currentParkingReportingData.carFrontPhotoPreviewUrl
        case 1:
          return !(globalState.currentParkingReportingData.carPlate.length === 7)
        case 2:
          return !globalState.currentPosition
        default:
          return false
      }
    else
      switch (activeStep) {
        case 0:
          return !globalState.currentParkingReportingData.carFrontPhotoPreviewUrl
        case 1:
          return !globalState.currentPosition
        default:
          return false
      }
  }
  
  const lastStep = maxSteps - 1
  const nextButtonLabel = activeStep === lastStep - 1 ? "Finalizar" : "Avançar"

  return (
    <CarReportingWizard
      activeStep={activeStep}
      backButtonDisabled={activeStep < 1}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      nextButtonDisabled={nextButtonDisabled()}
      nextButtonLabel={nextButtonLabel}
      showBackButton={activeStep > 0 && activeStep < lastStep}
      showMobileStepper={activeStep < lastStep}
      showNextButton={activeStep < lastStep}
      transitionDirection={transitionDirection}
      steps={steps}
    >
      {getStepContent(activeStep)}
    </CarReportingWizard>
  )
}
