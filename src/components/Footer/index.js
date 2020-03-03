import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"

export default ({ siteTitle }) => {
  return (
    <Hidden smDown>
      <Box component="footer" display="block">
        <Typography align="center" paragraph={true} variant="body2">
          © {new Date().getFullYear()}{" "}
          <Link color="inherit" component={GatsbyLink} to="/" underline="hover">
            {siteTitle}
          </Link>
          &nbsp;
          <Link
            color="inherit"
            component={GatsbyLink}
            to="/ajuda"
            underline="always"
          >
            Ajuda
          </Link>
          &nbsp;
          <Link
            color="inherit"
            component={GatsbyLink}
            to="/"
            underline="always"
          >
            Privacidade
          </Link>
        </Typography>
      </Box>
    </Hidden>
  )
}
