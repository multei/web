import React from "react"
import { Link as GatsbyLink } from "gatsby"

import image from "../images/undraw_order_a_car_3tww_dark.svg"
import { Container } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import { Article, Figure, H1, Image, Paragraph } from "muy"
import SEO from "../components/SEO"
import useFeatureToggle from "../hooks/useFeatureToggle"

const IndexTemplate = () => {
  const [parkingCheckToggle] = useFeatureToggle("PARKING_CHECK")
  const [parkingReportToggle] = useFeatureToggle("PARKING_REPORT")
  return (
    <Article>
      <SEO title="Denunciar estacionamento irregular" />
      <Container maxWidth="xs">
        <H1 align="center" gutterBottom={true} variant="h2">
          Denuncie quem estaciona em&nbsp;vagas preferenciais
          sem&nbsp;credencial
        </H1>
        <Figure>
          <Image
            alt="Ilustração de uma cidade. Ao fundo, um prédio com o pôr-do-sol atrás. À frente, dois carros andando em direções opostas na mão dupla. Acima de cada carro, um balão com um símbolo de verificação."
            src={image}
          />
        </Figure>
        <Paragraph align="center" variant="body2">
          Encontrou um&nbsp;carro estacionado irregularmente <br />
          em&nbsp;vagas para&nbsp;pessoas&nbsp;com&nbsp;deficiência?
        </Paragraph>
      </Container>
      <Container maxWidth="xs">
        {parkingReportToggle ? (
          <Paragraph align="center">
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
            </Button>
          </Paragraph>
        ) : (
          <Paragraph align={"center"}>
            Em&nbsp;breve, você poderá fazer <br />
            sua&nbsp;denúncia anônima por&nbsp;aqui.
          </Paragraph>
        )}
        {parkingCheckToggle ? (
          <Paragraph align="center" variant="body2">
            Seu veículo foi&nbsp;denunciado?{" "}
            <Link
              color="inherit"
              component={GatsbyLink}
              to="/consultar"
              underline="always"
            >
              Consultar&nbsp;denúncias
            </Link>
          </Paragraph>
        ) : (
          <Paragraph align="center" variant="body2">
            Também será possível consultar veículos denunciados.
          </Paragraph>
        )}
      </Container>
    </Article>
  )
}

export default IndexTemplate
