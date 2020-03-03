import { graphql, useStaticQuery } from "gatsby"

const useSiteTitle = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data.site.siteMetadata.title
}

export default useSiteTitle
