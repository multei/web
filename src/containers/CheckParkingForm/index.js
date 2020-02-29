import React, { useReducer, useState } from "react"
import axios from "axios"
import CheckParkingForm from "../../components/CheckParkingForm"
import useGlobal from "../../hooks/useGlobal"

export default () => {
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
    }
  }

  const [globalState, globalActions] = useGlobal()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [carPlate, setCarPlate] = useState("")

  const handleCarPlateChange = event => {
    setCarPlate(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    dispatch({ type: "api_request" })

    const baseURL = process.env.GATSBY_MULTEI_API_BASEURL
    if (typeof baseURL === "undefined") {
      throw new Error(
        "Can not make requests to API. API base URL is not defined."
      )
    }
    const instance = axios.create({
      baseURL: `${baseURL}/v1`,
    })
    try {
      const result = await instance.get(`/parkings/${carPlate}`)
      dispatch({ type: "api_success" })

      const { data } = result.data
      globalActions.setParkingsData(data.parkings)
    } catch (error) {
      const parkingNotFound = error.response.status === 404
      if (parkingNotFound) {
        dispatch({ type: "not_found_error" })
      } else {
        dispatch({ type: "api_error" })
      }
      globalActions.setParkingsData({ data: [] })
    }
  }

  return (
    <CheckParkingForm
      carPlate={carPlate}
      loading={state.loading}
      onCarPlateChange={handleCarPlateChange}
      onSubmit={handleSubmit}
    />
  )
}
