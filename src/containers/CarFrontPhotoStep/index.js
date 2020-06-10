import React from "react"
import CarFrontPhotoStep from "../../components/CarFrontPhotoStep"
import TakeCarFrontPhotoStep from "../../components/TakeCarFrontPhotoStep"
import useFeatureToggle from "../../hooks/useFeatureToggle"
import { useSetLoadingState } from "../../hooks/useLoadingState"
import { useParkingReportState } from "../../hooks/useParkingReportState"

export default ({ onSubmit, ...props }) => {
  const setLoading = useSetLoadingState()

  const [parkingReportState, setParkingReportState] = useParkingReportState()

  const handleFileUpload = (event) => {
    event.persist()
    setLoading(true)

    const file = event.target.files[0]

    setParkingReportState((oldParkingReportState) => ({
      ...oldParkingReportState,
      carFrontPhotoPreviewUrl: file
        ? URL.createObjectURL(file)
        : oldParkingReportState.carFrontPhotoPreviewUrl,
    }))

    setLoading(false)
  }
  const handleSubmit = (event) => {
    event.persist()
    event.preventDefault()
    setLoading(true)
    onSubmit()
  }
  const { carFrontPhotoPreviewUrl } = parkingReportState

  props = {
    onChange: handleFileUpload,
    onSubmit: handleSubmit,
    photoPreviewURL: carFrontPhotoPreviewUrl,
    ...props,
  }

  const [getUserMediaToggle] = useFeatureToggle("GET_USER_MEDIA")

  return getUserMediaToggle ? (
    <TakeCarFrontPhotoStep {...props} />
  ) : (
    <CarFrontPhotoStep {...props} />
  )
}
