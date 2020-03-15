import React from "react"
import ParkingsList from "../containers/ParkingsList"
import CheckParkingForm from "../containers/CheckParkingForm"
import Typography from "@material-ui/core/Typography"
import ParkingsAlerts from "../components/ParkingsAlerts"
import { Article } from "muy"

const CheckTemplate = ({ carPlate }) => {
  return (
    <Article>
      <Typography component="h1" variant="h1">
        Confira se seu veículo foi denunciado
      </Typography>
      <CheckParkingForm carPlate={carPlate} />
      <ParkingsAlerts />
      <ParkingsList />
    </Article>
  )
}

export default CheckTemplate
