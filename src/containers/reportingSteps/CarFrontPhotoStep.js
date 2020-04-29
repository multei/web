import React from "react"
import CarFrontPhotoStep from "../../components/reportingSteps/CarFrontPhotoStep"
import useGlobal from "../../hooks/useGlobal"

export default (props) => {
  const [globalState, globalActions] = useGlobal()

  const handleFileUpload = (event) => {
    event.persist()
    globalActions.setLoading(true)

    if (typeof event.target.files[0] === "undefined") {
      globalActions.setLoading(false)
      globalActions.setCurrentParkingReportingData({
        ...globalState.currentParkingReportingData,
        carFrontPhotoPreviewUrl: null,
      })
      return false
    }

    const file = event.target.files[0]
    globalActions.setCurrentParkingReportingData({
      ...globalState.currentParkingReportingData,
      carFrontPhotoPreviewUrl: URL.createObjectURL(file),
    })
    console.log(globalState.currentParkingReportingData)

    globalActions.setLoading(false)
  }
  const handleSubmit = (event) => {
    event.persist()
    event.preventDefault()
    globalActions.setLoading(true)
  }
  const { carFrontPhotoPreviewUrl } = globalState.currentParkingReportingData

  return (
    <CarFrontPhotoStep
      onChange={handleFileUpload}
      onSubmit={handleSubmit}
      photoPreviewURL={carFrontPhotoPreviewUrl}
      {...props}
    />
  )
}
