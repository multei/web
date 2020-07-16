import React from "react"
import SuccessStep from "../../components/SuccessStep"

import { useSetActiveStepState } from "../../hooks/useStepsNavigation/useActiveStepState"
import { useParkingReportState } from "../../hooks/useParkingReportState"

export default () => {
  const setActiveStepIndex = useSetActiveStepState()
  const [parkingReportState, setParkingReportState] = useParkingReportState()
  const { carPlate, carMake, carMakeModel } = parkingReportState

  const onClick = () => {
    setActiveStepIndex(0)
    setParkingReportState({
      uuid: null,
      carFrontPhotoPreviewUrl: null,
      carPlate: "",
      currentPosition: null,
      isCarFrontPhotoValid: true,
      isLocationValid: true,
    })
  }

  const props = {
    carPlate,
    carMake,
    carMakeModel,
    onClick,
  }
  return <SuccessStep {...props} />
}
