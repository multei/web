import React from "react"
import { Paragraph } from "muy"

export const CopyrightText = ({ siteTitle }) => (
  <Paragraph>
    <small>
      © {new Date().getFullYear()} <strong>{siteTitle}</strong>
    </small>
  </Paragraph>
)
