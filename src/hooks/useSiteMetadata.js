import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
          themeColor
          title
          titleTemplate
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
