import React from "react"
import PropTypes from "prop-types"
import { RecoilRoot } from "recoil"

export const RecoilProviderWrapper = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)

export const RecoilProvider = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
)

RecoilProviderWrapper.displayName = "RecoilProviderWrapper"

RecoilProviderWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}

RecoilProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
