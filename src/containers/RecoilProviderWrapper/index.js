import React from "react"
import PropTypes from "prop-types"
import { RecoilRoot } from "recoil"

export const RecoilProviderWrapper = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)

RecoilProviderWrapper.displayName = "RecoilProviderWrapper"

RecoilProviderWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}
