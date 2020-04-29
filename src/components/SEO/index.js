import React from "react"
import { SEO as MetaxSEO } from "metax"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const SEO = (props) => <MetaxSEO siteMetadata={useSiteMetadata()} {...props} />

export default SEO
