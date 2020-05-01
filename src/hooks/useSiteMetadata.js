import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          applicationName
          description
          lang
          statusBarStyle
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
