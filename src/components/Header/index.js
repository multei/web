import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import SiteTitle from "../SiteTitle"

const Header = ({ siteTitle }) => (
  <AppBar component="header" position="static">
    <Toolbar>
      <SiteTitle>{siteTitle}</SiteTitle>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
