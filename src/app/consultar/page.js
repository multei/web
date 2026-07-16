"use client"

import React from "react"
import CheckTemplate from "../../templates/check"

const ConsultarPage = () => {
  const search =
    typeof window === "undefined" ? "" : window.location.search ?? ""

  return <CheckTemplate search={search} />
}

export default ConsultarPage
