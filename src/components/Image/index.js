import React from "react"
import "./index.css"

export default ({ alt, ...props }) => (
  <img alt={alt} className="image" {...props} />
)
