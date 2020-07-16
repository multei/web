import React from "react"
import SuccessStep from "../../components/SuccessStep"

import { useActiveStepState } from "../../hooks/useStepsNavigation/useActiveStepState"

export default () => {
  const [activeStepIndex, setActiveStepIndex] = useActiveStepState()
  const onClick = () => setActiveStepIndex(0)

  return <SuccessStep onClick={onClick} />
}
