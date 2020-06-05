import React from "react"

export const renderStepContent = ({
  steps,
  stepIndex,
}) => {
  const step = steps[stepIndex]
  const Component = step.component
  return <Component />
}
