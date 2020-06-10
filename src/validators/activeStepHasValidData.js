const activeStepHasValidData = ({
  activeStepIndex,
  steps,
  parkingReportState,
}) => {
  const step = steps[activeStepIndex]
  const validator = step.validator
  return validator ? validator(parkingReportState) : true
}

export default activeStepHasValidData
