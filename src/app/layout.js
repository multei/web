import React from "react"
import siteMetadata from "../../config/siteMetadata"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.description,
}

const RootLayout = ({ children }) => (
  <html lang={siteMetadata.lang}>
    <body>
      <ClientLayout>{children}</ClientLayout>
    </body>
  </html>
)

export default RootLayout
