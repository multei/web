import React from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Image from "../Image"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Typography from "@material-ui/core/Typography"

const renderParking = parking => {
  const {
    car_front_photo_uri,
    car_plate,
    car_rear_photo_uri,
    created_at,
    uuid,
  } = parking
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary id={`parking-${uuid}`} key={uuid}>
        <Typography>{car_plate}</Typography>
        <p>Data e hora da denúncia: {created_at}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <GridList>
          <GridListTile>
            <Image loading="lazy" src={car_front_photo_uri} />
            <GridListTileBar title="Foto da frente" />
          </GridListTile>
          <GridListTile>
            <Image loading="lazy" src={car_rear_photo_uri} />
            <GridListTileBar title="Foto da traseira" />
          </GridListTile>
        </GridList>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ({ parkings }) => {
  if (parkings === null || typeof parkings[Symbol.iterator] !== "function") {
    return <></>
  }

  return <>{parkings.map(renderParking)}</>
}
