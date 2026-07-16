"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import CheckTemplate from "../../templates/check"

const ConsultarPageContent = () => {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const search = queryString ? `?${queryString}` : ""

  return <CheckTemplate search={search} />
}

const ConsultarPage = () => (
  <React.Suspense
    fallback={
      <p role="status">
        Carregando...
      </p>
    }
  >
    <ConsultarPageContent />
  </React.Suspense>
)

export default ConsultarPage
