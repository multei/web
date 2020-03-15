import React from "react"
import { EmbedGoogleMap } from "muy"

export default ({ coordinates, ...props }) => (
  <EmbedGoogleMap
    apiKey={process.env.GATSBY_EMBED_API_KEY}
    coordinates={coordinates}
    {...props}
  />
)
