import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import List from "@material-ui/core/List"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
})

const HorizontalList = props => {
  const classes = useStyles()
  return <List classes={classes} {...props} />
}

export default HorizontalList
