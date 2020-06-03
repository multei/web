import React from "react"
import { NavigationDrawer as Component } from "../../components/NavigationDrawer"
import { useMenuToggle } from "../../hooks/useMenuToggle"

export const NavigationDrawer = (props) => {
  const [open, toggleOpen] = useMenuToggle("navigationDrawerState")
  return <Component onClose={toggleOpen(false)} open={open} {...props} />
}
