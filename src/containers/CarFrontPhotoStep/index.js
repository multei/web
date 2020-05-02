import React from "react"
// import CarFrontPhotoStep from "../../components/CarFrontPhotoStep"
import useGlobal from "../../hooks/useGlobal"
import TakeCarFrontPhotoStep from "../../components/TakeCarFrontPhotoStep"

export default ({ onSubmit, ...props }) => {
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

    globalActions.setLoading(false)
  }
  const handleSubmit = (event) => {
    event.persist()
    event.preventDefault()
    globalActions.setLoading(true)
    onSubmit()
  }
  const { carFrontPhotoPreviewUrl } = globalState.currentParkingReportingData

  return (
    <TakeCarFrontPhotoStep
      onChange={handleFileUpload}
      onSubmit={handleSubmit}
      photoPreviewURL={carFrontPhotoPreviewUrl}
      {...props}
    />
  )
}
