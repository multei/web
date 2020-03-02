import React from "react"
import IFrame from "../IFrame"

export default ({ apiKey, coordinates, ...props }) => (
  <IFrame
    allowFullScreen={true}
    src={`https://www.google.com/maps/embed/v1/place?q=${coordinates}&key=${apiKey}`}
    {...props}
  />
)
