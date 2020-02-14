import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './index.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
