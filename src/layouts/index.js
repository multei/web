import React, { useMemo } from "react"
import PropTypes from "prop-types"

import { Layout as Component } from "../components/Layout"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useSiteMetadata from "../hooks/useSiteMetadata.js"
import factory from "../themes/factory"
import useFeatureToggle from "../hooks/useFeatureToggle"

const Layout = ({ children, ...props }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [showNavigationDrawer] = useFeatureToggle("NAVIGATION_DRAWER")
  const theme = useMemo(factory(prefersDarkMode), [prefersDarkMode])
  const { title } = useSiteMetadata()

  return (
    <Component
      showNavigationDrawer={showNavigationDrawer}
      siteTitle={title}
      theme={theme}
      {...props}
    >
      {children}
    </Component>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
