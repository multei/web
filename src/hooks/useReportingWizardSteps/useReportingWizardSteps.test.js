import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an array", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Array)
  })

  xit("should return array with at least one object", () => {
    const steps = useReportingWizardSteps()
    expect(steps.length > 0).toBeTrue()
  })

  xit("should return an array of objects with label and render properties", () => {
    const steps = useReportingWizardSteps()
    expect(
      steps.every(
        (step) => step.label !== undefined && step.render !== undefined
      )
    ).toBeTrue()
  })
})
