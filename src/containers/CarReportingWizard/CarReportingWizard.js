import React from "react"
import CarReportingWizard from "../../components/CarReportingWizard"
import { renderStepContent } from "./renderStepContent"
import useFeatureToggle from "../../hooks/useFeatureToggle"
import { useParkingReportValue } from "../../hooks/useParkingReportState"
import { useStepsNavigation } from "../../hooks/useStepsNavigation"
import activeStepHasValidData from "../../validators/activeStepHasValidData"
import { useReportingWizardSteps } from "../../hooks/useReportingWizardSteps"

export default () => {
  const [getPlateConfirmationStepToggle] = useFeatureToggle(
    "PLATE_CONFIRMATION_STEP"
  )

  const steps = useReportingWizardSteps()
  const maxSteps = steps.length()

  const {
    activeStepIndex,
    handleBack,
    handleNext,
    isFirstStep,
    isInvalidStep,
    isLastStep,
    nextButtonLabel,
    transitionDirection,
  } = useStepsNavigation(maxSteps)

  const parkingReportState = useParkingReportValue()

  const nextButtonDisabled = () =>
    !activeStepHasValidData({
      activeStepIndex,
      getPlateConfirmationStepToggle,
      parkingReportState,
    })

  return (
    <CarReportingWizard
      activeStep={activeStepIndex}
      backButtonDisabled={isFirstStep || isInvalidStep}
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      nextButtonDisabled={nextButtonDisabled()}
      nextButtonLabel={nextButtonLabel}
      showBackButton={!isFirstStep && !isLastStep}
      showMobileStepper={!isLastStep}
      showNextButton={!isLastStep}
      transitionDirection={transitionDirection}
      steps={steps}
    >
      {renderStepContent({
        getPlateConfirmationStepToggle,
        stepIndex: activeStepIndex,
      })}
    </CarReportingWizard>
  )
}
