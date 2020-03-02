/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../themes"
import useMediaQuery from "@material-ui/core/useMediaQuery"

// import "./index.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const dynamicTheme = useMemo(() => theme({ paletteType: "light" }), [
    prefersDarkMode,
  ])

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Main>{children}</Main>
        <Divider />
        <Footer siteTitle={data.site.siteMetadata.title} />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
