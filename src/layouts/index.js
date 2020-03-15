/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react"
import PropTypes from "prop-types"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"

import Header from "../components/Header"
import Footer from "../components/Footer"

import ThemeProvider from "@material-ui/styles/ThemeProvider"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useSiteTitle from "../hooks/useSiteTitle"
import factory from "../themes/factory"
import { LinearProgress } from "@material-ui/core"
import useGlobal from "../hooks/useGlobal"
import { MainContent } from "muy"

const Layout = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const dynamicTheme = useMemo(factory(prefersDarkMode), [prefersDarkMode])
  const siteTitle = useSiteTitle()

  const [globalState] = useGlobal()

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      {globalState.loading && <LinearProgress />}
      <Header siteTitle={siteTitle} />
      <Container>
        <MainContent>{children}</MainContent>
        <Divider />
        <Footer siteTitle={siteTitle} />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
