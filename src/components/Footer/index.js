import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import HorizontalList from "../HorizontalList"
import ListItem from "@material-ui/core/ListItem"
import { Container } from "@material-ui/core"

export default ({ siteTitle }) => {
  return (
    <Hidden smDown>
      <Box component="footer" display="block">
        <Container maxWidth="sm">
          <Typography align="center" paragraph={true} variant="body2">
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
          </Typography>
        </Container>
      </Box>
    </Hidden>
  )
}
