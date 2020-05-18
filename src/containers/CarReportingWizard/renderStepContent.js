import React from "react"
import CarFrontPhotoStep from "../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "../../containers/CarPlateConfirmStep"
import LocationStep from "../../containers/LocationStep"
import SuccessStep from "../../components/SuccessStep"

export const renderStepContent = ({
  getPlateConfirmationStepToggle,
  stepIndex,
}) => {
  if (getPlateConfirmationStepToggle) {
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
  } else {
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
}
