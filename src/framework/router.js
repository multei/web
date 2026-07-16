import React from "react"

export const RouterLink = React.forwardRef(({ to, href, ...props }, ref) => (
  <a href={href ?? to} ref={ref} {...props} />
))

RouterLink.displayName = "RouterLink"

export const getPath = (path) => path

export const navigateTo = (path) => {
  if (typeof window === "undefined") {
    return
  }

  window.location.assign(path)
}
