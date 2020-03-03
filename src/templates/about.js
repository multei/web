import { Link } from "gatsby"
import React from "react"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import HomeCheckParkingForm from "../containers/HomeCheckParkingForm"

const IndexTemplate = () => (
  <Box component="article" display="block">
    <Typography component="h1" variant="srOnly">
      Página inicial
    </Typography>

    <Typography align="center" paragraph={true} variant="body2">
      O Multei! é uma plataforma que permite a realização de denúncias
      de&nbsp;uso indevido das vagas por veículos sem credencial, ideal para
      pessoas com&nbsp;deficiência e&nbsp;acompanhantes que utilizam
      vagas&nbsp;preferenciais.
    </Typography>
    <Typography paragraph={true}>
      <Button
        color="primary"
        component={Link}
        to="/denunciar"
        variant="contained"
      >
        Denuncie agora
      </Button>
    </Typography>
    <Divider />
    <Typography component="h2" variant="h2">
      Confira se seu carro foi multado
    </Typography>
    <HomeCheckParkingForm />
  </Box>
)

export default IndexTemplate
