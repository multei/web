import React from "react"
import ParkingExpansionPanel from "../ParkingExpansionPanel"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"

export default ({ parkings }) => {
  if (parkings === null || typeof parkings[Symbol.iterator] !== "function") {
    return (
      <Alert>
        Tudo certo com a placa. Nenhuma denúncia foi feita neste site.
      </Alert>
    )
  }

  return (
    <>
      <Alert severity="warning">
        <AlertTitle>
          Existe{parkings.length > 1 && "m"} {parkings.length}{" "}
          {parkings.length > 1 ? "denúncias" : "denúncia"} para esta placa.
        </AlertTitle>
        Confira os detalhes a seguir:
      </Alert>
      {parkings.map(ParkingExpansionPanel)}
    </>
  )
}
