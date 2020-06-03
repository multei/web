import React from "react"
import { CopyrightText as Component } from "../../components/CopyrightText"
import useSiteMetadata from "../../hooks/useSiteMetadata"

export const CopyrightText = () => {
  const { title } = useSiteMetadata()
  return <Component siteTitle={title} />
}
