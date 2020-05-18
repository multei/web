import { isCarFrontPhotoValid } from "./isCarFrontPhotoValid"
import { isCarPlateValid } from "./isCarPlateValid"
import { isCurrentPositionValid } from "./isCurrentPositionValid"

const activeStepHasValidData = ({
  activeStepIndex,
  getPlateConfirmationStepToggle,
  parkingReportState,
}) => {
  if (getPlateConfirmationStepToggle) {
    switch (activeStepIndex) {
      case 0:
        return isCarFrontPhotoValid(parkingReportState)
      case 1:
        return isCarPlateValid(parkingReportState)
      case 2:
        return isCurrentPositionValid(parkingReportState)
      default:
        return true
    }
  } else {
    switch (activeStepIndex) {
      case 0:
        return isCarFrontPhotoValid(parkingReportState)
      case 1:
        return isCurrentPositionValid(parkingReportState)
      default:
        return true
    }
  }
}

export default activeStepHasValidData
