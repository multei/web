import { Link } from "gatsby"
import React from "react"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CheckParkingForm from "../containers/CheckParkingForm"
import ParkingsList from "../containers/ParkingsList"
import Box from "@material-ui/core/Box"

const IndexTemplate = props => (
  <Box component="article" display="block">
    <Typography component="h2" variant="h2">
      Encontrou um carro estacionado de forma irregular?
    </Typography>
    <Typography paragraph={true}>
      <Button
        color="primary"
        component={Link}
        to="/fazer-denuncia"
        variant="contained"
      >
        Denuncie agora
      </Button>
    </Typography>
    <Divider />
    <Typography component="h1" variant="srOnly">
      Página inicial
    </Typography>

    <Typography component="h2" variant="h2">
      Confira se seu carro foi multado
    </Typography>
    <CheckParkingForm />

    <ParkingsList />
  </Box>
)

export default IndexTemplate
