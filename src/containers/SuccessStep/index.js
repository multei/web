import React, { useEffect } from "react"
import SuccessStep from "../../components/SuccessStep"

import { useSetActiveStepState } from "../../hooks/useStepsNavigation/useActiveStepState"
import { useSetParkingReportState } from "../../hooks/useParkingReportState"

export default () => {
  const setActiveStepIndex = useSetActiveStepState()
  const setParkingReportState = useSetParkingReportState()
  const onClick = () => setActiveStepIndex(0)

  useEffect(() => {
    setParkingReportState({
      uuid: null,
      carFrontPhotoPreviewUrl: null,
      carPlate: "",
      currentPosition: null,
      isCarFrontPhotoValid: true,
      isLocationValid: true,
    })
  }, [setParkingReportState])

  return <SuccessStep onClick={onClick} />
}
