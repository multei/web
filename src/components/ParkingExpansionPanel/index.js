import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import EmbedMap from "../../containers/EmbedGoogleMap"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import React from "react"
import Link from "@material-ui/core/Link"
import { Image } from "muy"

export default ({
  car_front_photo_height,
  car_front_photo_uri,
  car_front_photo_width,
  car_plate,
  coordinates,
  created_at,
  uuid,
}) => (
  <ExpansionPanel id={`parking-${uuid}`} key={uuid}>
    <ExpansionPanelSummary>
      <header>
        <Typography>{car_plate}</Typography>
        <Typography>Data e hora da denúncia: {created_at}</Typography>
        <Link>Expandir para mais detalhes</Link>
      </header>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <GridList cellHeight={289} cols={3}>
        {coordinates && (
          <GridListTile cols={3}>
            <EmbedMap
              coordinates={`${coordinates.x},${coordinates.y}`}
              height={450}
              variant="cover"
              width={600}
            />
          </GridListTile>
        )}
        <GridListTile cols={3}>
          <Image
            height={car_front_photo_height}
            loading="lazy"
            src={car_front_photo_uri}
            variant="cover"
            width={car_front_photo_width}
          />
          <GridListTileBar title="Foto da frente" />
        </GridListTile>
      </GridList>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)
