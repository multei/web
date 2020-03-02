import React from "react"
import clsx from "clsx"
import makeStyles from "@material-ui/core/styles/makeStyles"

import style from "./index.css.js"

const useStyles = makeStyles(style)

export default ({ alt, height, title, variant, width, ...props }) => {
  const classes = useStyles()
  return (
    <img
      alt={alt}
      className={clsx(classes.root, variant === "cover" && classes.cover)}
      height={height}
      title={title}
      width={width}
      {...props}
    />
  )
}
