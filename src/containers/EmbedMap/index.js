import React from "react"
import EmbedMap from "../../components/EmbedMap"

export default ({ coordinates, ...props }) => (
  <EmbedMap
    apiKey={process.env.GATSBY_EMBED_API_KEY}
    coordinates={coordinates}
    {...props}
  />
)
