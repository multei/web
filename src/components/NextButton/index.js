import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import Button from "@material-ui/core/Button"
import React from "react"

const NextButton = ({ children, onClick }) => (
  <Button color="primary" onClick={onClick} variant="contained">
    {children} <KeyboardArrowRight />
  </Button>
)

export default NextButton
