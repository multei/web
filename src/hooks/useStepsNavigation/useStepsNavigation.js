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
    const handleSuccess = ({ data }) => {
      setLoading(false)

      const uuid = data.data.uuid
      const carPlate =
        data.data.parkings.car_front_photo_recognition_data.results[0].plate

      localStorage.setItem(`PARKING_REPORT`, uuid)

      setParkingReportState((oldParkingReportState) => ({
        ...oldParkingReportState,
        carPlate,
        isCarFrontPhotoValid: true,
      }))

      handleDefaultNext()
    }

    const handleError = (error) => {
      setLoading(false)

      localStorage.removeItem(`PARKING_REPORT`)

      setParkingReportState((oldParkingReportState) => ({
        ...oldParkingReportState,
        isCarFrontPhotoValid: false,
      }))
    }

    setLoading(true)
    steps[activeStepIndex]
      .handleNext(parkingReportState)
      .then(handleSuccess)
      .catch(handleError)
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
