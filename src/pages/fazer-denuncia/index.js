import React, { useState } from "react"

import SEO from "../../components/seo"
import openALPR from "openalpr"
import toBase64 from "openalpr/dist/toBase64"
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
    const base64FileData = await toBase64(file)

    setFileData(base64FileData)
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
    const instance = openALPR.create({
      secretKey: process.env.GATSBY_OPENALPR_API_SECRET,
    })

    instance
      .recognize(fileData)
      .then(data => {
        if (data.results.length === 0) {
          throw new Error("Vehicle plate not found")
        }
        const vehicleData = getVehicleData(data.results[0])
        setPlate(vehicleData.plate)
        setVehicleMake(vehicleData.make)
        setVehicleMakeModel(vehicleData.makeModel)
      })
      .finally(() => {
        setLoading(false)
      })
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
