import React from "react"
import TextField from "@material-ui/core/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  input: {
    textTransform: "uppercase",
  },
})

const CarPlateField = ({ required, ...props }) => {
  const classes = useStyles()
  return (
    <TextField
      inputProps={{
        "aria-required": required,
        maxLength: 7,
        minLength: 7,
        pattern: "[a-zA-Z]{3}[0-9]([a-zA-Z]|[0-9])[0-9]{2}",
      }}
      InputProps={{
        classes: classes,
      }}
      required={required}
      {...props}
    />
  )
}

export default CarPlateField
