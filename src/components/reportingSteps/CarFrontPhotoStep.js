import React from "react"
import FileInput from "../ui/FileInput"
import Typography from "@material-ui/core/Typography"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Figure from "../ui/Figure"
import Fab from "@material-ui/core/Fab"
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto"
import Image from "../ui/Image"

const CarFrontPhotoStep = ({
  isCarFrontPhotoValid,
  onChange,
  onSubmit,
  photoPreviewURL,
}) => (
  <form onSubmit={onSubmit}>
    <Typography component="h2" variant="h2">
      Tire uma foto da frente do carro, com a placa visível
    </Typography>
    <Typography paragraph={true} variant="body2">
      A foto precisa mostrar o painel do veículo e provar que não há uma
      credencial visível.
    </Typography>
    {!isCarFrontPhotoValid && false && (
      <Alert severity="warning" variant="outlined">
        <AlertTitle>
          Por favor, envie uma foto da parte da frente do veículo.
        </AlertTitle>
      </Alert>
    )}
    {photoPreviewURL && (
      <Figure>
        <figcaption>Prévia da parte da frente do veículo</figcaption>
        <Image
          alt="Prévia da frente do veículo"
          loading="lazy"
          src={photoPreviewURL}
        />
      </Figure>
    )}
    <Typography paragraph={true}>
      <Fab
        aria-label="adicionar foto da frente"
        color="primary"
        component="label"
        htmlFor="carFrontImageUploadField"
        tabIndex={0}
        variant="extended"
      >
        <AddAPhotoIcon />
        Adicionar foto
      </Fab>
      <Typography variant="srOnly">
        <FileInput
          id="carFrontImageUploadField"
          accept="image/*"
          data-test-id="carFrontImageUploadField"
          onChange={onChange}
          name="carFrontImage"
          required={true}
          tabIndex={-1}
        />
      </Typography>
    </Typography>
  </form>
)

export default CarFrontPhotoStep
