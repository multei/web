import React, { useState } from "react"
import CarPlateConfirmStep from "../../components/reportingSteps/CarPlateConfirmStep"
import useGlobal from "../../hooks/useGlobal"

export default () => {
  const [globalState, globalActions] = useGlobal()
  const [carPlate, setCarPlate] = useState(
    globalState.currentParkingReportingData.carPlate
  )

  const handleChange = (event) => {
    setCarPlate(event.target.value)
    globalActions.setCurrentParkingReportingData({
      carPlate: event.target.value,
    })
  }

  return <CarPlateConfirmStep carPlate={carPlate} onChange={handleChange} />
}
