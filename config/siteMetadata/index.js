require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  applicationName: "Multei!",
  backgroundColor: "#f6f4f3",
  description:
    "Aqui você pode fazer sua denúncia contra estacionamento irregular em vagas de pessoas com deficiência, grávidas e pessoas idosas.",
  display: "standalone",
  lang: "pt-br",
  icon: "src/images/icon.png",
  googleSiteVerification: process.env.GATSBY_GOOGLE_SITE_VERIFICATION || "",
  siteName: "Multei!",
  siteUrl: "https://multei.com.br",
  startUrl: "/",
  statusBarStyle: "black-translucent",
  themeColor: "#623CEA",
  title: "Multei!",
  titleTemplate: "%s | Multei!",
}

module.exports = siteMetadata
