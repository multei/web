import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    marginBottom: `${theme.spacing(3)}px`,
    marginLeft: `${theme.spacing(5)}px`,
    marginRight: `${theme.spacing(5)}px`,
    marginTop: `${theme.spacing(1.75)}px`,
    padding: 0,
  },
}))

const Figure = props => {
  const classes = useStyles()
  return <figure className={classes.root} {...props} />
}

export default Figure
