import React from "react"
import Typography from "@material-ui/core/Typography"

const CarRearPhotoStep = ({ isLoading, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Typography component="h2" variant="h2">
      Tire uma foto da traseira do carro, incluindo a placa.
    </Typography>
    <p>
      Recomendamos que a foto mostre a placa de estacionamento com o símbolo da
      pessoa com deficiência.
    </p>
    <label htmlFor="carRearImage">Enviar foto da traseira</label>
    <input
      id="carRearImage"
      accept="image/*"
      onChange={onChange}
      name="carRearImage"
      required={true}
      type="file"
    />
    <button id="submitCarRearImage" name="submitCarRearImage" type="submit">
      Enviar foto da traseira
    </button>
    {isLoading && <progress />}
  </form>
)
