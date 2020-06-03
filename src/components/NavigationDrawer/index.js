import React from "react"
import PropTypes from "prop-types"

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { CopyrightText } from "../../containers/CopyrightText"
import { Link } from "gatsby"

export const NavigationDrawer = ({ onClose, open }) => (
  <Drawer anchor={"left"} onClose={onClose} open={open}>
    <Toolbar>
      <IconButton onClick={onClose}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <List>
      <ListItem component={Link} onClick={onClose} to={"/"}>
        <ListItemText primaryTypographyProps={{ color: "textPrimary" }}>
          Página inicial
        </ListItemText>
      </ListItem>
      {/*<ListItem component={Link} onClick={onClose} to={"/ajuda"}>*/}
      {/*  <ListItemText primaryTypographyProps={{ color: "textPrimary" }}>*/}
      {/*    Perguntas frequentes*/}
      {/*  </ListItemText>*/}
      {/*</ListItem>*/}
      <ListItem component={Link} onClick={onClose} to={"/privacidade"}>
        <ListItemText primaryTypographyProps={{ color: "textPrimary" }}>
          Privacidade
        </ListItemText>
      </ListItem>
      <ListItem component={Link} onClick={onClose} to={"/termos"}>
        <ListItemText primaryTypographyProps={{ color: "textPrimary" }}>
          Termos de uso
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <CopyrightText />
        </ListItemText>
      </ListItem>
    </List>
  </Drawer>
)

NavigationDrawer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
