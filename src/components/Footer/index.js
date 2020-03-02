import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

export default ({ siteTitle }) => {
  return (
    <Box component="footer" display="block">
      <Typography paragraph={true}>
        © {new Date().getFullYear()}{" "}
        <Link component={GatsbyLink} to="/">
          {siteTitle}
        </Link>
      </Typography>
    </Box>
  )
}
