import AlertTitle from "@material-ui/lab/AlertTitle"
import Typography from "@material-ui/core/Typography"
import Alert from "@material-ui/lab/Alert"
import React from "react"

const ParkingsAlerts = ({ count, severity }) => {
  const content = {
    danger: {
      title: "Não é possível buscar por denúncias no momento",
      description:
        "Estamos com problemas técnicos. Por favor, tente novamente mais tarde.",
    },
    success: {
      title: "Tudo certo com a placa",
      description: "Nenhuma denúncia foi feita neste site.",
    },
    warning: {
      title: (
        <>
          Existe{count > 1 && "m"} {count}{" "}
          {count > 1 ? "denúncias" : "denúncia"} para esta placa.
        </>
      ),
      description: "Confira os detalhes a seguir:",
    },
  }

  if (typeof severity === "undefined") {
    return <></>
  }

  return (
    <Alert severity={severity}>
      <AlertTitle>{content[severity].title}</AlertTitle>
      <Typography paragraph={true}>{content[severity].description}</Typography>
    </Alert>
  )
}

export default ParkingsAlerts
