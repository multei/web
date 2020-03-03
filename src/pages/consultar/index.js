import React from "react"
import SEO from "../../components/seo"
import CheckTemplate from "../../templates/check"
import { parse } from "query-string"

export default ({ location }) => {
  const parsedQueryString = parse(location.search)
  return (
    <>
      <SEO
        title="Consultar denúncias por placa"
        description="Consulte denúncias de estacionamento irregular buscando por placa"
      />
      <CheckTemplate carPlate={parsedQueryString["car_plate"]} />
    </>
  )
}
