import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Hidden from "@material-ui/core/Hidden"
import HorizontalList from "../HorizontalList"
import ListItem from "@material-ui/core/ListItem"
import Container from "@material-ui/core/Container"

export default ({ siteTitle }) => {
  return (
    <Hidden smDown>
      <Box component="footer" display="block">
        <Container maxWidth="sm">
          <HorizontalList>
            <ListItem>
              <Link
                color="inherit"
                component={GatsbyLink}
                to="/"
                underline="always"
              >
                © {new Date().getFullYear()} {siteTitle}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="inherit"
                component={GatsbyLink}
                to="/ajuda"
                underline="always"
              >
                Ajuda
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="inherit"
                component={GatsbyLink}
                to="/privacidade"
                underline="always"
              >
                Privacidade
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="inherit"
                component={GatsbyLink}
                to="/termos"
                underline="always"
              >
                Termos de&nbsp;uso
              </Link>
            </ListItem>
          </HorizontalList>
        </Container>
      </Box>
    </Hidden>
  )
}
