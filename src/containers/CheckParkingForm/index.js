import React, { useEffect, useReducer, useState } from "react"
import CheckParkingForm from "../../components/CheckParkingForm"
import { getParkingsByCarPlate } from "../../services/parkings"
import { useSetReportedParkingsState } from "../../hooks/useReportedParkingsState"
import useLoadingState from "../../hooks/useLoadingState"
import { getHealthCheckResponse } from "../../services/healthcheck"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

export default ({ carPlate }) => {
  const [loading, setLoading] = useLoadingState()
  const [apiError, setApiError] = useState(false)

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

  const [state, dispatch] = useReducer(reducer, initialState)
  const [stateCarPlate, setCarPlate] = useState(carPlate)
  const setReportedParkingsState = useSetReportedParkingsState()

  useEffect(() => {
    window.history.pushState(
      { carPlate },
      null,
      `/consultar?car_plate=${carPlate}`
    )
  })

  const handleCarPlateChange = (event) => {
    setCarPlate(event.target.value)
  }

  const handleApiResponse = (response) => {
    dispatch({ type: "api_success" })

    const {
      data: { parkings },
    } = response.data
    setReportedParkingsState(parkings)
  }

  const handleApiError = (error) => {
    const isNotFoundError =
      typeof error.response !== "undefined" && error.response.status === 404
    if (isNotFoundError) {
      dispatch({ type: "not_found_error" })
      setReportedParkingsState([])
      return
    }
    dispatch({ type: "api_error" })
    setReportedParkingsState(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    dispatch({ type: "api_request" })

    try {
      const response = await getParkingsByCarPlate(stateCarPlate)
      handleApiResponse(response)
    } catch (error) {
      handleApiError(error)
    }
  }

  const handleHealthCheck = () => {
    getHealthCheckResponse()
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setApiError(true)
      })
  }

  useEffect(() => {
    handleHealthCheck()
  }, [])

  return (
    <>
      {apiError ? (
        <Alert severity={"error"}>
          <AlertTitle>
            Ops! Não é possível consultar denúncias agora.
          </AlertTitle>
          Nosso sistema de consulta de denúncias parece estar fora do ar.
          <br />
          Você pode{" "}
          <Button color="inherit" component={Link} onClick={handleHealthCheck}>
            tentar novamente
          </Button>{" "}
          em alguns instantes.
        </Alert>
      ) : (
        <CheckParkingForm
          // carPlate={stateCarPlate}
          loading={loading}
          // onCarPlateChange={handleCarPlateChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  )
}
