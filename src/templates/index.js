import { Link } from "gatsby"
import React from "react"

const IndexTemplate = props => (
  <article>
    <h1>Denuncie estacionamento irregular</h1>
    <Link className="button" to="/fazer-denuncia">
      Denunciar
    </Link>
  </article>
)

export default IndexTemplate
