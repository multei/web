import React from "react"
import { Article, H1, Paragraph } from "muy"
import SEO from "../components/SEO"

const NotFoundTemplate = () => (
  <Article>
    <SEO title="Página não encontrada" />
    <H1 gutterBottom={true}>Página não encontrada</H1>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </Article>
)

export default NotFoundTemplate
