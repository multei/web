import React from "react"
import PropTypes from "prop-types"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Header } from "../Header"
import { NavigationDrawer } from "../../containers/NavigationDrawer"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import { MainContent } from "muy"
import useStandalone from "../../hooks/useStandalone"
import Divider from "@material-ui/core/Divider"
import Footer from "../Footer"

export const Layout = ({
  children,
  showNavigationDrawer,
  siteTitle,
  theme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={siteTitle} />
      {showNavigationDrawer && <NavigationDrawer />}
      <Paper>
        <Container>
          <MainContent mt={useStandalone() ? 7 : 0} pt={3}>
            {children}
          </MainContent>
        </Container>
        <Divider />
        <Footer siteTitle={siteTitle} />
      </Paper>
    </ThemeProvider>
  )
}
