import React from "react"
import CheckParkingForm from "../../components/CheckParkingForm"
import { getPath, navigateTo } from "../../framework/router"

const checkPath = "/consultar"

const handleSubmit = (event) => {
  event.preventDefault()
  navigateTo(`${checkPath}?car_plate=`)
}

const HomeCheckParkingForm = (props) => (
  <CheckParkingForm
    formProps={{
      action: getPath(checkPath),
    }}
    onSubmit={handleSubmit}
  />
)

export default HomeCheckParkingForm
