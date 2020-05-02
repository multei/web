import React from "react"
import CarReportingWizard from "../containers/CarReportingWizard"
import { SEO } from "metax"
import useFeatureToggle from "../hooks/useFeatureToggle"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"

const ReportingTemplate = () => {
  const [parkingReportToggle] = useFeatureToggle("PARKING_REPORT")
  return (
    <>
      <SEO
        title="Fazer denúncia anônima"
        description={
          "Envie uma foto do veículo estacionado irregularmente e informe sua localização para realizar a denúncia."
        }
      />
      {parkingReportToggle ? (
        <CarReportingWizard />
      ) : (
        <Alert severity={"info"}>
          <AlertTitle>
            Em breve, você poderá realizar sua denúncia por aqui.
          </AlertTitle>
          Nosso time está trabalhando para que este recurso seja liberado o mais
          breve possível.
        </Alert>
      )}
    </>
  )
}

export default ReportingTemplate
