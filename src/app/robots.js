import siteMetadata from "../../config/siteMetadata"

const robots = () => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
})

export default robots
