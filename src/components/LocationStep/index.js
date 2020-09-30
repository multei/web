import React from "react"
import { Form, H2, Paragraph } from "muy"
import Button from "@material-ui/core/Button"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import FormControl from "@material-ui/core/FormControl"
import EmbedGoogleMap from "../../containers/EmbedGoogleMap"
import Skeleton from "@material-ui/lab/Skeleton"
import Fade from "@material-ui/core/Fade"
import FormHelperText from "@material-ui/core/FormHelperText"
import Divider from "@material-ui/core/Divider"
import { GoogleMaps } from "../GoogleMaps"
import useFeatureToggle from "../../hooks/useFeatureToggle"

const LocationStep = (props) => {
  const {
    checkingGeolocationSupport,
    children,
    currentPosition,
    error,
    hasGeolocationSupport,
    loadingCurrentLocation,
    loadingMap,
    onGetLocationClick,
    onMapLoaded,
    permissionDenied,
    isLocationValid,
  } = props

  const [googleMapsJsToggle] = useFeatureToggle("GOOGLE_MAPS_JS")

  const getButtonLabel = () => {
    if (checkingGeolocationSupport) {
      return <>Carregando&hellip;</>
    }
    if (permissionDenied) {
      return <>Tentar novamente</>
    }
    if (loadingCurrentLocation) {
      return <>Obtendo localização&hellip;</>
    }
    if (loadingMap) {
      return <>Carregando mapa&hellip;</>
    }
    if (currentPosition) {
      return <>Atualizar localização</>
    }
    return <>Permitir uso da localização</>
  }

  return (
    <Form>
      <H2 gutterBottom={true}>Envie a localização da vaga</H2>

      <FormControl component={"fieldset"} error={error}>
        {permissionDenied && (
          <Alert severity={"error"}>
            <AlertTitle>Não é possível saber a localização da vaga</AlertTitle>
            Por favor, dê permissão para uso da localização e tente novamente.
          </Alert>
        )}
        <Divider />
        <Paragraph align="center">
          <Fade in={hasGeolocationSupport}>
            <Button
              disabled={
                checkingGeolocationSupport ||
                !hasGeolocationSupport ||
                loadingCurrentLocation ||
                loadingMap
              }
              onClick={onGetLocationClick}
              variant={"contained"}
            >
              {getButtonLabel()}
            </Button>
          </Fade>
        </Paragraph>
        <FormHelperText>
          Utilizamos seus dados de localização apenas para ajudar os órgãos a
          encontrarem o local da infração.
        </FormHelperText>
      </FormControl>
      <Divider />
      {currentPosition && (
        <div style={{ position: "relative" }}>
          {loadingMap && (
            <Skeleton
              style={{ position: "absolute", zIndex: 2 }}
              variant="rect"
              width={"100%"}
              height={157}
            />
          )}

          <EmbedGoogleMap
            coordinates={`${currentPosition.coords.latitude},${currentPosition.coords.longitude}`}
            onLoad={onMapLoaded}
            style={{ height: 157, width: "100%" }}
          />

          {googleMapsJsToggle && <GoogleMaps />}

          <Paragraph variant={"body2"}>
            Se estiver tudo certo com esta localização, você pode finalizar a
            denúncia.
          </Paragraph>
        </div>
      )}

      {children}

      {!isLocationValid && (
        <Alert severity={"warning"} variant="outlined">
          <AlertTitle>Algo não deu certo!</AlertTitle>
          Por favor, tente novamente.
        </Alert>
      )}
    </Form>
  )
}

export default LocationStep
