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

  const handleApiResponse = response => {
    dispatch({ type: "api_success" })

    const { data } = response.data
    globalActions.setParkingsData(data.parkings)
  }

  const handleApiError = error => {
    globalActions.setParkingsData({ data: [] })
    const isNotFoundError =
      typeof error.response !== "undefined" && error.response.status === 404
    if (isNotFoundError) {
      dispatch({ type: "not_found_error" })
      return
    }
    dispatch({ type: "api_error" })
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
      const response = await instance.get(`/parkings/${carPlate}`)
      handleApiResponse(response)
    } catch (error) {
      handleApiError(error)
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
