import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { Link as GatsbyLink } from "gatsby"

import lightImage from "../images/undraw_order_a_car_3tww_light.svg"
import darkImage from "../images/undraw_order_a_car_3tww_dark.svg"
import Image from "../components/ui/Image"
import { Container } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Figure from "../components/ui/Figure"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

const AboutTemplate = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  return (
    <Box component="article">
      <Container maxWidth="xs">
        <Typography component="h1" align="center" variant="h2">
          Denuncie quem estaciona em&nbsp;vagas preferenciais
          sem&nbsp;credencial
        </Typography>
        <Figure>
          <Image
            alt="Ilustração de uma cidade. Ao fundo, um prédio com o pôr-do-sol atrás. À frente, dois carros andando em direções opostas na mão dupla. Acima de cada carro, um balão com um símbolo de verificação."
            src={prefersDarkMode ? darkImage : lightImage}
          />
        </Figure>
        <Typography align="center" paragraph={true} variant="body2">
          Encontrou um&nbsp;carro estacionado irregularmente <wbr />
          em&nbsp;vagas para&nbsp;pessoas&nbsp;com&nbsp;deficiência?
        </Typography>
      </Container>
      <Container maxWidth="xs">
        <Typography align="center" paragraph={true}>
          <Button
            id="reportNowButton"
            component={GatsbyLink}
            color="primary"
            data-testid="reportNowButton"
            size="large"
            to="/denunciar"
            variant="contained"
          >
            Fazer denúncia anônima
          </Button>{" "}
        </Typography>
        <Typography align="center" paragraph={true} variant="body2">
          Seu veículo foi&nbsp;denunciado?{" "}
          <Link
            color="inherit"
            component={GatsbyLink}
            to="/consultar"
            underline="always"
          >
            Consultar&nbsp;denúncias
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default AboutTemplate
