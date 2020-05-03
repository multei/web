import React from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import { ExpansionPanelDetails } from "@material-ui/core"
import { Article, H1, H2 } from "muy"
import SEO from "../components/SEO"

const HelpTemplate = () => (
  <Article>
    <SEO title={"Ajuda"} description={"Tire suas dúvidas sobre o Multei!"} />
    <H1>Ajuda</H1>
    <H2 gutterBottom={true}>Tire suas dúvidas</H2>
    <ExpansionPanel>
      <ExpansionPanelSummary>
        Sou uma pessoa com deficiência. Como faço para ter minha credencial?
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>A</ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary>
        Quais são as penalidades para quem estaciona em vaga sem credencial?
      </ExpansionPanelSummary>
    </ExpansionPanel>
  </Article>
)

export default HelpTemplate
