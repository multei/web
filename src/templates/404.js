import React from "react"
import Typography from "@material-ui/core/Typography"
import { Article } from "muy"

const NotFoundTemplate = () => (
  <Article>
    <Typography component="h1" variant="h1">
      NOT FOUND
    </Typography>
    <Typography paragraph={true}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </Article>
)

export default NotFoundTemplate
