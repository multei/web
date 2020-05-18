import React from "react"
import ParkingsList from "../../components/ParkingsList"
import { useReportedParkingsValue } from "../../hooks/useReportedParkingsState"

export default () => {
  const reportedParkings = useReportedParkingsValue()
  return <ParkingsList parkings={reportedParkings} />
}
