import React from "react"
import { RecoilRoot } from "recoil"

// eslint-disable-next-line react/display-name,react/prop-types
export const wrapWithProvider = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)
