import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Link from "@material-ui/core/Link"
import ListItem from "@material-ui/core/ListItem"
import Container from "@material-ui/core/Container"
import { HorizontalList, PageFooter } from "muy"
import { CopyrightText } from "../CopyrightText"

export default ({ siteTitle }) => {
  return (
    <PageFooter display={{ xs: "none", sm: "none", md: "block" }}>
      <Container maxWidth="sm">
        <HorizontalList>
          <ListItem>
            <CopyrightText siteTitle={siteTitle} />
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
    </PageFooter>
  )
}
