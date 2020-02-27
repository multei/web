import React, { useState } from "react"

import SEO from "../../components/seo"
import CarFrontPhotoStep from "../../components/reportingSteps/CarFrontPhotoStep"

const ReportPage = () => {
  const [fileData, setFileData] = useState(null)
  const [formIsValid, setFormValidity] = useState(null)
  const [loading, setLoading] = useState(null)
  const [photoPreviewURL, setPhotoPreviewURL] = useState(null)

  const [plate, setPlate] = useState(null)
  const [vehicleMake, setVehicleMake] = useState(null)
  const [vehicleMakeModel, setVehicleMakeModel] = useState(null)

  async function handleFileChange(event) {
    console.log("Changed")
    event.persist()
    setLoading(true)

    if (typeof event.target.files[0] === "undefined") {
      setFileData(null)
      setFormValidity(false)
      setLoading(false)
      setPhotoPreviewURL(null)
      return false
    }

    const file = event.target.files[0]

    setFormValidity(true)
    setLoading(false)
    setPhotoPreviewURL(URL.createObjectURL(file))
  }
  const getVehicleData = result => ({
    plate: result.plate,
    make: result["vehicle"].make[0].name,
    makeModel: result["vehicle"]["make_model"][0].name,
  })

  const handleSubmit = event => {
    if (typeof event === "undefined") {
      return null
    }

    setLoading(true)
    event.preventDefault()
    event.persist()
  }
  return (
    <>
      <SEO title="Home" />
      <CarFrontPhotoStep
        isLoading={loading}
        isValid={formIsValid}
        onChange={handleFileChange}
        onSubmit={handleSubmit}
        photoPreviewURL={photoPreviewURL}
      />
    </>
  )
}

export default ReportPage
