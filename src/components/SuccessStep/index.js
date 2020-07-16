import React from "react"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Alert from "@material-ui/lab/Alert"
import { Article, H2, Paragraph } from "muy"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import Fade from "@material-ui/core/Fade"
import Divider from "@material-ui/core/Divider"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Button from "@material-ui/core/Button"

const SuccessStep = ({ carPlate, carMake, carMakeModel, onClick }) => (
  <Article>
    <Fade in={true} timeout={0}>
      <Alert>
        <AlertTitle>Recebemos a sua denúncia anônima com sucesso!</AlertTitle>
      </Alert>
    </Fade>
    <Divider />
    <Fade in={true} timeout={1000}>
      <Card>
        <CardContent>
          <H2 gutterBottom={true}>E agora?</H2>
          <Paragraph>
            Iremos analisar o conteúdo da sua denúncia antes de publicá-la.
          </Paragraph>
          <Paragraph variant={"body2"}>
            Se estiver tudo certo, publicaremos sua denúncia em nosso site, e
            depois encaminharemos as informações para o órgão responsável pela
            fiscalização de trânsito da sua cidade.
          </Paragraph>
        </CardContent>
      </Card>
    </Fade>
    <Divider />
    <ExpansionPanel>
      <ExpansionPanelSummary>
        Revisar dados da sua última denúncia
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <dl>
          <dt>Placa</dt>
          <dd>{carPlate}</dd>
          <dt>Marca</dt>
          <dd>{carMake}</dd>
          <dt>Modelo</dt>
          <dd>{carMakeModel} (ou similar)</dd>
        </dl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <Divider />
    <Button color={"primary"} variant={"contained"} onClick={onClick}>
      Fazer outra denúncia
    </Button>
  </Article>
)

export default SuccessStep
