import React from "react"
import ParkingExpansionPanel from "../ParkingExpansionPanel"
import Skeleton from "@material-ui/lab/Skeleton"

export default ({ parkings, variant }) => {
  if (variant === "loading") {
    return <Skeleton variant="text" />
  }

  if (parkings === null || typeof parkings[Symbol.iterator] !== "function") {
    return <></>
  }

  return <>{parkings.map(ParkingExpansionPanel)}</>
}
