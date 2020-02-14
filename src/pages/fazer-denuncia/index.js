import React, { useState } from "react"

import SEO from "../../components/seo"
import openALPR from "openalpr"
import toBase64 from "openalpr/dist/toBase64"
import CarFrontPhotoStep from "../../components/reportingSteps/CarFrontPhotoStep"

const ReportPage = () => {
  const [fileData, setFileData] = useState(null)
  const [plate, setPlate] = useState(null)
  const [vehicleMake, setVehicleMake] = useState(null)
  const [vehicleMakeModel, setVehicleMakeModel] = useState(null)
  const [loading, setLoading] = useState(null)
  async function handleFileChange(event) {
    event.persist();
    setLoading(true)
    if(typeof event.target.files[0] === "undefined") {
      return false;
    }
    const file = event.target.files[0];
    const base64FileData = await toBase64(file)
    setFileData(base64FileData);
    setLoading(false)
  }
  const getVehicleData = (result) => ({
    plate: result.plate,
    make: result["vehicle"].make[0].name,
    makeModel: result["vehicle"]["make_model"][0].name
  });
  const handleSubmit = (event) => {

    if(typeof event === "undefined") {
      return null;
    }

    setLoading(true);
    event.preventDefault();
    event.persist();
    const instance = openALPR.create({secretKey: process.env.GATSBY_OPENALPR_API_SECRET});

    instance.recognize(fileData).then(data => {
      if(data.results.length === 0) {
        throw new Error("Vehicle plate not found")
      }
      const vehicleData = getVehicleData(data.results[0]);
      setPlate(vehicleData.plate);
      setVehicleMake(vehicleData.make);
      setVehicleMakeModel(vehicleData.makeModel);
    }).finally(() => {
      setLoading(false)
    })
  }
  return (<>
    <SEO title="Home"/>
    <CarFrontPhotoStep isLoading={loading} onChange={handleFileChange} onSubmit={handleSubmit} />
  </>);
}

export default ReportPage
