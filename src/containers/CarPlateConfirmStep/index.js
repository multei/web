import React from "react"
import CarPlateConfirmStep from "../../components/CarPlateConfirmStep"
import { useParkingReportState } from "../../hooks/useParkingReportState"

export default () => {
  const [parkingReportState, setParkingReportState] = useParkingReportState()

  const handleChange = ({ target: { value } }) => {
    setParkingReportState((oldParkingReportState) => ({
      ...oldParkingReportState,
      carPlate: value,
    }))
  }

  const { carPlate } = parkingReportState

  return <CarPlateConfirmStep carPlate={carPlate} onChange={handleChange} />
}
