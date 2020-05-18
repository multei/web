import { useState } from "react"

export const useStepsNavigation = (maxSteps) => {
  const lastStepIndex = maxSteps - 1
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState("left")

  const handleBack = () => {
    setTransitionDirection("right")
    if (activeStepIndex > 0) {
      setActiveStepIndex((prevActiveStepIndex) => prevActiveStepIndex - 1)
    }
  }

  const handleNext = () => {
    setTransitionDirection("left")
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
