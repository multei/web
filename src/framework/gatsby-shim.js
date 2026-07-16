import React from "react"

export const Link = React.forwardRef(({ to, ...props }, ref) => (
  <a href={to} ref={ref} {...props} />
))

Link.displayName = "Link"

export const navigate = (to) => {
  if (typeof window !== "undefined") {
    window.location.assign(to)
  }
}

export const withPrefix = (path) => path

export const graphql = () => {}

export const StaticQuery = () => null

export const useStaticQuery = () => ({})
