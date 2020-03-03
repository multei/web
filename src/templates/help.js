import React from "react"
import Box from "@material-ui/core/Box"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import { ExpansionPanelDetails } from "@material-ui/core"

const HelpTemplate = () => (
  <Box component="article" display="block">
    <Typography component="h1" variant="h1">
      Ajuda
    </Typography>
    <Typography component="h2" variant="h2">
      Tire suas dúvidas
    </Typography>
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
  </Box>
)

export default HelpTemplate
