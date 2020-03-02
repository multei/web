import React from "react"
import FileInput from "../FileInput"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const CarFrontPhotoStep = ({
  isLoading,
  isValid,
  onChange,
  onSubmit,
  photoPreviewURL,
}) => (
  <form onSubmit={onSubmit}>
    <Typography component="h2" variant="h2">
      Tire uma foto da frente do carro, incluindo a placa.
    </Typography>
    <Typography paragraph={true}>
      A foto precisa mostrar o painel do veículo e provar que não há uma
      credencial visível.
    </Typography>
    <label htmlFor="carFrontImageUploadField">Foto da frente</label>
    <FileInput
      id="carFrontImageUploadField"
      accept="image/*"
      data-test-id="carFrontImageUploadField"
      onChange={onChange}
      name="carFrontImage"
      required={true}
    />
    {photoPreviewURL && (
      <figure>
        <figcaption>Prévia da parte da frente do veículo</figcaption>
        <img alt="Prévia da frente do veículo" src={photoPreviewURL} />
        {!isValid && (
          <p>Por favor, envie uma foto da parte da frente do veículo.</p>
        )}
      </figure>
    )}
    <Button
      disabled={!isValid}
      id="submitCarFrontImage"
      name="submitCarFrontImage"
      variant="contained"
      type="submit"
    >
      Enviar foto da frente
    </Button>
    {isLoading && <progress />}
  </form>
)

export default CarFrontPhotoStep
