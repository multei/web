import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { PageHeader, SiteTitle } from "muy"
import useStandalone from "../../hooks/useStandalone"

const Header = ({ siteTitle }) => (
  <AppBar
    component={PageHeader}
    position={useStandalone() ? "fixed" : "static"}
  >
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
