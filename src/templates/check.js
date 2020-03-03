import React from "react"
import ParkingsList from "../containers/ParkingsList"
import CheckParkingForm from "../containers/CheckParkingForm"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ParkingsAlerts from "../components/ParkingsAlerts"

const CheckTemplate = ({ carPlate }) => {
  return (
    <Box component="article" display="block">
      <Typography component="h1" variant="h1">
        Confira se seu veículo foi denunciado
      </Typography>
      <CheckParkingForm carPlate={carPlate} />
      <ParkingsAlerts />
      <ParkingsList />
    </Box>
  )
}

export default CheckTemplate
