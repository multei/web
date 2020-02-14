import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import openALPR from "openalpr"
import toBase64 from "openalpr/dist/toBase64"
import Button from "../components/Button"

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
        throw "Vehicle plate not found"
      }
      const vehicleData = getVehicleData(data.results[0]);
      setPlate(vehicleData.plate);
      setVehicleMake(vehicleData.make);
      setVehicleMakeModel(vehicleData.makeModel);
    }).finally(() => {
      setLoading(false)
    })

  }
  return (<Layout>
    <SEO title="Home"/>
    <form onSubmit={handleSubmit}>
      <h2>Tire uma foto da frente do carro, incluindo a placa.</h2>
      <p>A foto precisa mostrar o painel do veículo e provar que não há uma credencial visível.</p>
      <label htmlFor="carFrontImage">Enviar foto da frente</label>
      <input id="carFrontImage"
             accept="image/*"
             onChange={handleFileChange}
             name="carFrontImage"
             required={true}
             type="file"/>
      <button id="submitCarFrontImage" name="submitCarFrontImage" type="submit">Enviar foto da frente</button>
      {loading && <progress />}
    </form>
    <form onSubmit={handleSubmit}>
      <h2>Tire uma foto da traseira do carro, incluindo a placa.</h2>
      <p>Recomendamos que a foto mostre a placa de estacionamento com o símbolo da pessoa com deficiência.</p>
      <label htmlFor="carRearImage">Enviar foto da traseira</label>
      <input id="carRearImage"
             accept="image/*"
             onChange={handleFileChange}
             name="carRearImage"
             required={true}
             type="file"
      />
      <button id="submitCarRearImage" name="submitCarRearImage" type="submit">Enviar foto da traseira</button>
      {loading && <progress />}
    </form>
    <form>
      <h2>Recebemos as fotos com sucesso.</h2>
      <p>Agora você pode complementar sua denúncia com mais informações. Ela continuará anônima.</p>
      <output>Placa: {plate}</output><br />
      <output>Marca: {vehicleMake}</output><br />
      <output>Modelo: {vehicleMakeModel}</output><br />
      <label htmlFor="car-plate">Confirme a placa do carro</label>
      <input id="car-plate"
             aria-required={true}
             defaultValue={plate}
             maxLength={7}
             minLength={7}
             name="car-plate"
             pattern="[A-Z]{3}[0-9][A-Z][0-9]{2}"
             required={true}
      />
      <Button id="submitCarPlate" name="submitCarPlate" type="submit" variant="primary">Confirmar denúncia</Button>
    </form>
  </Layout>);
}

export default ReportPage
