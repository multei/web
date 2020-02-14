import React from "react"
import './index.css'

const Button = ({variant, ...otherProps}) => (
  <button className={`button ${variant}`} type="submit" {...otherProps} />
)

export default Button
