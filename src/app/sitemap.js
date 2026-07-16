import siteMetadata from "../../config/siteMetadata"

const pages = [
  "",
  "/ajuda",
  "/consultar",
  "/denunciar",
  "/privacidade",
  "/sobre",
  "/termos",
]

const sitemap = () =>
  pages.map((path) => ({
    url: `${siteMetadata.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }))

export default sitemap
