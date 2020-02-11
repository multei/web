import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Denunciar estacionamento irregular" />
    <h1>Denuncie estacionamento irregular</h1>
    <Link to="/fazer-denuncia">Denunciar</Link>
  </Layout>
)

export default IndexPage
