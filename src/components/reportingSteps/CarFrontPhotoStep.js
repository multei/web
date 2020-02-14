import React from "react"

const CarFrontPhotoStep = ({isLoading, onChange, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <h2>Tire uma foto da frente do carro, incluindo a placa.</h2>
    <p>A foto precisa mostrar o painel do veículo e provar que não há uma credencial visível.</p>
    <label htmlFor="carFrontImage">Enviar foto da frente</label>
    <input id="carFrontImage"
           accept="image/*"
           onChange={onChange}
           name="carFrontImage"
           required={true}
           type="file"/>
    <button id="submitCarFrontImage" name="submitCarFrontImage" type="submit">Enviar foto da frente</button>
    {isLoading && <progress />}
  </form>
)

export default CarFrontPhotoStep
