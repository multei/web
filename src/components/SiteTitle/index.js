import React from "react"

import Link from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  h1: {
    fontSize: "1rem",
    margin: 0,
  },
}))

/**
 * @todo Migrate SiteTitle to muy library
 * @param children
 * @return {*}
 */
export default ({ children }) => {
  const classes = useStyles()
  return (
    <Typography classes={classes} component="h1" variant="h1">
      <Link color="inherit" component={GatsbyLink} to="/" underline="hover">
        {children}
      </Link>
    </Typography>
  )
}
