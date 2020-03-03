import React from "react"
import clsx from "clsx"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  root: {
    borderStyle: "none",
    borderWidth: 0,
    margin: `0 0 ${theme.spacing(3)}px`,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(
      1.25
    )}px`,
  },
  borderNone: {
    padding: 0,
  },
  borderSolid: {
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    borderWidth: "1px",
  },
}))

export default ({ variant, ...props }) => {
  const classes = useStyles()
  return (
    <fieldset
      className={clsx(
        classes.root,
        variant === "borderNone" && classes.borderNone,
        variant === "borderSolid" && classes.borderSolid
      )}
      {...props}
    />
  )
}
