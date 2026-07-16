import siteMetadata from "../../config/siteMetadata"

const manifest = () => ({
  name: siteMetadata.title,
  short_name: siteMetadata.siteName,
  description: siteMetadata.description,
  start_url: siteMetadata.startUrl,
  display: siteMetadata.display,
  background_color: siteMetadata.backgroundColor,
  theme_color: siteMetadata.themeColor,
  icons: [
    {
      src: "/icon.png",
      sizes: "192x192",
      type: "image/png",
    },
  ],
})

export default manifest
