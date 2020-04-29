import React from "react"
import { EmbedGoogleMap as MuyEmbedGoogleMap } from "muy"

const EmbedGoogleMap = ({ coordinates, ...props }) => (
  <MuyEmbedGoogleMap
    apiKey={process.env.GATSBY_EMBED_API_KEY}
    coordinates={coordinates}
    {...props}
  />
)

export default EmbedGoogleMap
