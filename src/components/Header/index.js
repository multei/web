import React from "react"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"

import { PageHeader, SiteTitle } from "muy"
import useStandalone from "../../hooks/useStandalone"
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"
import useFeatureToggle from "../../hooks/useFeatureToggle"

const pixels = 1
const statusBarHeight = 20 * pixels

const useStyles = makeStyles({
  root: {
    paddingTop: `${statusBarHeight}px`,
    top: `${statusBarHeight * -1}px`,
  },
})

export const Header = ({ onMenuButtonClick, siteTitle }) => {
  const classes = useStyles()
  const [navigationDrawer] = useFeatureToggle("NAVIGATION_DRAWER")
  const standalone = useStandalone()

  return (
    <AppBar
      classes={standalone ? classes : {}}
      component={PageHeader}
      position={standalone ? "fixed" : "static"}
    >
      <Toolbar>
        {navigationDrawer && (
          <IconButton
            aria-label={"Menu"}
            color={"inherit"}
            edge={"start"}
            onClick={onMenuButtonClick}
          >
            <MenuIcon />
          </IconButton>
        )}
        <SiteTitle>{siteTitle}</SiteTitle>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  onMenuButtonClick: PropTypes.func,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
