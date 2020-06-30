import { useState } from "react"
import { useParkingReportState } from "../../hooks/useParkingReportState"
import { useSetLoadingState } from "../../hooks/useLoadingState"

export const useStepsNavigation = (steps, maxSteps) => {
  const lastStepIndex = maxSteps - 1
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState("left")
  const [parkingReportState, setParkingReportState] = useParkingReportState()
  const setLoading = useSetLoadingState()

  const handleBack = () => {
    setTransitionDirection("right")
    if (activeStepIndex > 0) {
      setActiveStepIndex((prevActiveStepIndex) => prevActiveStepIndex - 1)
    }
  }

  const handleNext = async () => {
    setTransitionDirection("left")
    if (steps[activeStepIndex].handleNext) await handleStepNext()
    else handleDefaultNext()
  }

  const handleStepNext = async () => {
    setLoading(true)
    const { success, newParkingReportState } = await steps[
      activeStepIndex
    ].handleNext(parkingReportState)

    setParkingReportState((oldParkingReportState) => ({
      ...oldParkingReportState,
      ...newParkingReportState,
    }))

    if (success) handleDefaultNext()
    setLoading(false)
  }

  const handleDefaultNext = () => {
    if (activeStepIndex < maxSteps) {
      setActiveStepIndex((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const isFirstStep = activeStepIndex === 0
  const isInvalidStep = activeStepIndex < 0
  const isLastStep = activeStepIndex === lastStepIndex

  const nextButtonLabel =
    activeStepIndex === lastStepIndex - 1 ? "Finalizar" : "Avançar"

  return {
    activeStepIndex,
    handleBack,
    handleNext,
    isFirstStep,
    isInvalidStep,
    isLastStep,
    maxSteps,
    nextButtonLabel,
    transitionDirection,
  }
}
