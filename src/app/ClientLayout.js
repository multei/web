"use client"

import React from "react"
import Layout from "../layouts"
import { RecoilProvider } from "../containers/RecoilProviderWrapper"

const ClientLayout = ({ children }) => (
  <RecoilProvider>
    <Layout>{children}</Layout>
  </RecoilProvider>
)

export default ClientLayout
