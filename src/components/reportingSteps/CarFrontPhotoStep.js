import React from "react"
import Button from "../Button"
import FileInput from "../FileInput"

const CarFrontPhotoStep = ({
  isLoading,
  isValid,
  onChange,
  onSubmit,
  photoPreviewURL,
}) => (
  <form onSubmit={onSubmit}>
    <h2>Tire uma foto da frente do carro, incluindo a placa.</h2>
    <p>
      A foto precisa mostrar o painel do veículo e provar que não há uma
      credencial visível.
    </p>
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
        <img src={photoPreviewURL} />
        {!isValid && (
          <p>Por favor, envie uma foto da parte da frente do veículo.</p>
        )}
      </figure>
    )}
    <Button
      disabled={!isValid}
      id="submitCarFrontImage"
      name="submitCarFrontImage"
      type="submit"
    >
      Enviar foto da frente
    </Button>
    {isLoading && <progress />}
  </form>
)

export default CarFrontPhotoStep
