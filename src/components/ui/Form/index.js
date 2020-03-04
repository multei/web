import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 0 ${theme.spacing(3)}px`,
    padding: 0,
  },
}))

const Form = props => {
  const classes = useStyles()
  return <form className={classes.root} {...props} />
}

export default Form
