import React from "react"
import { Header as Component } from "../../components/Header"
import { useMenuToggle } from "../../hooks/useMenuToggle"

export const Header = (props) => {
  const [, toggleOpen] = useMenuToggle("navigationDrawerState")
  return <Component onMenuButtonClick={toggleOpen(true)} {...props} />
}
