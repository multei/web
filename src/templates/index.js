import { Link } from "gatsby"
import React from "react"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CheckParkingForm from "../containers/CheckParkingForm"
import ParkingsList from "../containers/ParkingsList"

const IndexTemplate = props => (
  <article>
    <Typography component="h1" variant="srOnly">
      Página inicial
    </Typography>
    <Typography component="h2">Confira se seu carro foi multado</Typography>
    <CheckParkingForm />
    <ParkingsList />
    <Divider />
    <Typography component="h2">
      Encontrou um carro estacionado de forma irregular?
    </Typography>
    <Button
      color="primary"
      component={Link}
      to="/fazer-denuncia"
      variant="contained"
    >
      Denuncie agora
    </Button>
  </article>
)

export default IndexTemplate
