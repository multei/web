import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { PageHeader, SiteTitle } from "muy"
import useStandalone from "../../hooks/useStandalone"
import makeStyles from "@material-ui/core/styles/makeStyles"

const pixels = 1
const statusBarHeight = 20 * pixels

const useStyles = makeStyles({
  root: {
    paddingTop: `${statusBarHeight}px`,
    top: `${statusBarHeight * -1}px`,
  },
})

const Header = ({ siteTitle }) => {
  const standalone = useStandalone()
  const classes = useStyles()
  return (
    <AppBar
      classes={standalone && classes}
      component={PageHeader}
      position={standalone ? "fixed" : "static"}
    >
      <Toolbar>
        <SiteTitle>{siteTitle}</SiteTitle>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
