import React from "react"
import CarFrontPhotoStep from "../../components/reportingSteps/CarFrontPhotoStep"
import useGlobal from "../../hooks/useGlobal"

export default props => {
  const [globalState, globalActions] = useGlobal()

  const handleChange = event => {
    event.persist()
    globalActions.setLoading(true)

    if (typeof event.target.files[0] === "undefined") {
      globalActions.setLoading(false)
      globalActions.setCurrentParkingReportingData(prev => ({
        ...prev,
        carFrontPhotoPreviewUrl: null,
      }))

      return false
    }

    const file = event.target.files[0]
    globalActions.setCurrentParkingReportingData(prev => ({
      ...prev,
      carFrontPhotoPreviewUrl: URL.createObjectURL(file),
    }))

    globalActions.setLoading(false)
  }
  const handleSubmit = event => {
    event.persist()
    event.preventDefault()
    globalActions.setLoading(true)
  }
  return (
    <CarFrontPhotoStep
      onChange={handleChange}
      onSubmit={handleSubmit}
      photoPreviewURL={globalState.currentReporting.carFrontPhotoPreviewUrl}
      {...props}
    />
  )
}
