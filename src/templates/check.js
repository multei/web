import React from "react"
import ParkingsList from "../containers/ParkingsList"
import CheckParkingForm from "../containers/CheckParkingForm"
import ParkingsAlerts from "../components/ParkingsAlerts"
import { Article, H1 } from "muy"
import { SEO } from "metax"
import { parse } from "query-string"

const CheckTemplate = ({ location }) => {
  const parsedQueryString = parse(location.search)
  const carPlate = parsedQueryString["car_plate"]
  return (
    <Article>
      <SEO
        title="Consultar denúncias por placa"
        description="Consulte denúncias de estacionamento irregular buscando por placa"
      />
      <H1 gutterBottom={true}>Confira se seu veículo foi denunciado</H1>
      <CheckParkingForm carPlate={carPlate} />
      <ParkingsAlerts />
      <ParkingsList />
    </Article>
  )
}

export default CheckTemplate
