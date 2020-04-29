import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import Button from "@material-ui/core/Button"
import React from "react"

const BackButton = ({ disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    <KeyboardArrowLeft /> Voltar
  </Button>
)

export default BackButton
