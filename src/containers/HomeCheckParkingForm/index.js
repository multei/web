import React from "react"
import { navigate } from "gatsby"
import CheckParkingForm from "../../components/CheckParkingForm"
import { withPrefix } from "../../../.cache/gatsby-browser-entry"

const checkPath = "/consultar"

const handleSubmit = (event) => {
  event.preventDefault()
  navigate(`${checkPath}?car_plate=`)
}

const HomeCheckParkingForm = (props) => (
  <CheckParkingForm
    formProps={{
      action: withPrefix(checkPath),
    }}
    onSubmit={handleSubmit}
  />
)

export default HomeCheckParkingForm
