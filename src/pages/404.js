import React from "react"

import SEO from "../components/seo"
import NotFoundTemplate from "../templates/404"

const NotFoundPage = props => (
  <>
    <SEO title="Página não encontrada" />
    <NotFoundTemplate {...props} />
  </>
)

export default NotFoundPage
