import React from "react"
import Typography from "@material-ui/core/Typography"
import { Article } from "muy"
import { SEO } from "metax"

const NotFoundTemplate = () => (
  <Article>
    <SEO title="Página não encontrada" />
    <Typography component="h1" variant="h1">
      NOT FOUND
    </Typography>
    <Typography paragraph={true}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </Article>
)

export default NotFoundTemplate
