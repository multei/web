import React from "react"

import Paper from "@material-ui/core/Paper"
import Fab from "@material-ui/core/Fab"

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"

import {
  Fieldset,
  Figure,
  FigureCaption,
  Form,
  H2,
  Image,
  Paragraph,
  PhotoUploadField,
} from "muy"

import Fade from "@material-ui/core/Fade"
import Typography from "@material-ui/core/Typography"

const CarFrontPhotoStep = ({
  isCarFrontPhotoValid,
  onChange,
  onSubmit,
  photoPreviewURL,
}) => (
  <Form onSubmit={onSubmit}>
    <Fieldset>
      <H2 gutterBottom={true}>
        Tire uma foto da&nbsp;frente do&nbsp;carro, com&nbsp;a&nbsp;placa
        visível
      </H2>
      <Paragraph variant="body2">
        A&nbsp;foto precisa mostrar o&nbsp;painel do&nbsp;veículo e&nbsp;provar
        que&nbsp;não&nbsp;há uma credencial visível.
      </Paragraph>
      {!isCarFrontPhotoValid && false && (
        <Alert severity="warning" variant="outlined">
          <AlertTitle>
            Por favor, envie uma foto da parte da frente do veículo.
          </AlertTitle>
        </Alert>
      )}
      <Paragraph>
        <Fab
          aria-label="Adicionar foto da frente"
          color="primary"
          component="label"
          htmlFor="carFrontImageUploadField"
          role={null}
          tabIndex={0}
          variant="extended"
        >
          <AddAPhotoIcon />
          &nbsp;
          {photoPreviewURL ? "Trocar foto" : "Adicionar foto"}
        </Fab>
        <Typography component={"span"} variant={"srOnly"}>
          <PhotoUploadField
            id="carFrontImageUploadField"
            data-test-id="carFrontImageUploadField"
            onChange={onChange}
            name="carFrontImage"
            required={true}
            tabIndex={-1}
            capture={null}
          />
        </Typography>
      </Paragraph>
      <Fade in={Boolean(photoPreviewURL)}>
        <Paper>
          <Figure>
            <Typography component={"div"} variant={"srOnly"}>
              <FigureCaption>Prévia da frente do veículo</FigureCaption>
            </Typography>
            <Image
              alt="Prévia da frente do veículo"
              loading="lazy"
              src={photoPreviewURL}
            />
          </Figure>
        </Paper>
      </Fade>
    </Fieldset>
  </Form>
)

export default CarFrontPhotoStep
