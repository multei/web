import React, { useEffect, useReducer, useState } from "react"
import CheckParkingForm from "../../components/CheckParkingForm"
import useGlobal from "../../hooks/useGlobal"
import { getParkingsByCarPlate } from "../../services/parkings"

export default ({ carPlate }) => {
  const initialState = {
    carPlate: "",
    loading: false,
    success: null,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "api_request":
        return {
          loading: true,
        }
      case "api_success":
        return {
          loading: false,
          success: true,
        }
      case "api_error":
        return {
          loading: false,
          success: false,
        }
      case "not_found_error":
        return {
          loading: false,
          success: true,
        }
      default:
        break
    }
  }

  const [, globalActions] = useGlobal()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [stateCarPlate, setCarPlate] = useState(carPlate)

  useEffect(() => {
    window.history.pushState(
      { carPlate },
      null,
      `/consultar?car_plate=${carPlate}`
    )
  })

  const handleCarPlateChange = event => {
    setCarPlate(event.target.value)
  }

  const handleApiResponse = response => {
    dispatch({ type: "api_success" })

    const { data } = response.data
    globalActions.setParkingsData(data.parkings)
  }

  const handleApiError = error => {
    const isNotFoundError =
      typeof error.response !== "undefined" && error.response.status === 404
    if (isNotFoundError) {
      dispatch({ type: "not_found_error" })
      globalActions.setParkingsData([])
      return
    }
    dispatch({ type: "api_error" })
    globalActions.setParkingsData(null)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    dispatch({ type: "api_request" })

    try {
      const response = await getParkingsByCarPlate(stateCarPlate)
      handleApiResponse(response)
    } catch (error) {
      handleApiError(error)
    }
  }

  return (
    <CheckParkingForm
      carPlate={stateCarPlate}
      loading={state.loading}
      onCarPlateChange={handleCarPlateChange}
      onSubmit={handleSubmit}
    />
  )
}
