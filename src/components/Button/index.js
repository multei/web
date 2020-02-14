import React from "react"
import './index.css'

const Button = ({color, ...otherProps}) => (
  <button className={`button ${color}`} type="submit" {...otherProps} />
)

export default Button
