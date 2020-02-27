import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./index.css"
import AppBar from "@material-ui/core/AppBar"
import Link from "@material-ui/core/Link"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const Header = ({ siteTitle }) => (
  <AppBar component="header" position="static">
    <Toolbar className="container">
      <Typography component="h1" variant="h6">
        <Link component={GatsbyLink} to="/">
          {siteTitle}
        </Link>
      </Typography>
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
