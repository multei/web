import React from "react"
import ParkingsList from "../containers/ParkingsList"
import CheckParkingForm from "../containers/CheckParkingForm"
import ParkingsAlerts from "../components/ParkingsAlerts"
import { Article, H1 } from "muy"
import { parse } from "query-string"
import SEO from "../components/SEO"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import useFeatureToggle from "../hooks/useFeatureToggle"

const CheckTemplate = ({ location }) => {
  const parsedQueryString = parse(location.search)
  const carPlate = parsedQueryString["car_plate"]
  const [parkingCheckToggle] = useFeatureToggle("PARKING_CHECK")

  const renderUnderConstruction = () => (
    <Alert severity={"info"}>
      <AlertTitle>
        Em breve, você poderá consultar se seu veículo foi denunciado aqui.
      </AlertTitle>
      Nosso time está trabalhando para que este recurso seja liberado o mais
      breve possível.
    </Alert>
  )

  const renderForm = () => (
    <>
      <CheckParkingForm carPlate={carPlate} />
      <ParkingsAlerts />
      <ParkingsList />
    </>
  )

  return (
    <Article>
      <SEO
        title="Consultar denúncias por placa"
        description="Consulte denúncias de estacionamento irregular buscando por placa"
      />
      <H1 gutterBottom={true}>Confira se seu veículo foi denunciado</H1>
      {parkingCheckToggle ? renderForm() : renderUnderConstruction()}
    </Article>
  )
}

export default CheckTemplate
