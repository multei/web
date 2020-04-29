import React from "react"
import CarReportingWizard from "../containers/reportingSteps/CarReportingWizard"
import { SEO } from "metax"

const ReportingTemplate = () => {
  return (
    <>
      <SEO
        title="Fazer denúncia anônima"
        description={
          "Envie uma foto do veículo estacionado irregularmente e informe sua localização para realizar a denúncia."
        }
      />
      <CarReportingWizard />
    </>
  )
}

export default ReportingTemplate
