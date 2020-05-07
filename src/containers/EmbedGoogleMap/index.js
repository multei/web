import React from "react"
import { EmbedGoogleMap as MuyEmbedGoogleMap } from "muy"

const EmbedGoogleMap = ({ coordinates, ...props }) => (
  <MuyEmbedGoogleMap
    apiKey={process.env. GATSBY_GOOGLE_MAPS_EMBED_API_KEY}
    coordinates={coordinates}
    {...props}
  />
)

export default EmbedGoogleMap
