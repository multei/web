import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import openALPR from "openalpr"
import toBase64 from "openalpr/dist/toBase64"

const ReportPage = () => {
  const [fileData, setFileData] = useState(null)
  const [plate, setPlate] = useState(null)
  const [vehicleMake, setVehicleMake] = useState(null)
  const [vehicleMakeModel, setVehicleMakeModel] = useState(null)
  async function handleFileChange(event) {
    event.persist();
    if(typeof event.target.files[0] === "undefined") {
      return false;
    }
    const file = event.target.files[0];
    const base64FileData = await toBase64(file)
    setFileData(base64FileData);
  }
  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
      event.persist();
      const instance = openALPR.create({secretKey: process.env.GATSBY_OPENALPR_API_SECRET});
      instance.recognize(fileData).then(data => {
        if(data.results.length === 0) {
          return false
        }
        setPlate(data.results[0].plate);
        setVehicleMake(data.results[0].vehicle.make[0].name);
        setVehicleMakeModel(data.results[0].vehicle.make_model[0].name);
      })
    }
  }
  return (<Layout>
    <SEO title="Home"/>
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="image">Enviar foto</label>
      <input id="image" accept="image/*" onChange={handleFileChange} name="image" type="file"/>
      <button id="submit" name="submit" type="submit">Enviar</button>
      <hr />
      <output>Placa: {plate}</output><br />
      <output>Marca: {vehicleMake}</output><br />
      <output>Modelo: {vehicleMakeModel}</output><br />
    </form>
  </Layout>);
}

export default ReportPage
