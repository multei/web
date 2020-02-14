import React from "react"

const CarRearPhotoStep = ({isLoading, onChange, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <h2>Tire uma foto da traseira do carro, incluindo a placa.</h2>
    <p>Recomendamos que a foto mostre a placa de estacionamento com o símbolo da pessoa com deficiência.</p>
    <label htmlFor="carRearImage">Enviar foto da traseira</label>
    <input id="carRearImage"
           accept="image/*"
           onChange={onChange}
           name="carRearImage"
           required={true}
           type="file"
    />
    <button id="submitCarRearImage" name="submitCarRearImage" type="submit">Enviar foto da traseira</button>
    {isLoading && <progress />}
  </form>
)
