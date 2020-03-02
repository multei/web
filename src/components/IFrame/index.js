import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import objectFitCover from "../../themes/styles/objectFitCover"
import clsx from "clsx"

const useStyles = makeStyles({
  root: {
    border: 0,
    margin: "0 0 var(--default-margin-bottom)",
    padding: 0,
  },
  cover: objectFitCover,
})

export default ({ variant, ...props }) => {
  const classes = useStyles()
  return (
    <iframe
      className={clsx(classes.root, variant === "cover" && classes.cover)}
      frameBorder="0"
      {...props}
    />
  )
}
