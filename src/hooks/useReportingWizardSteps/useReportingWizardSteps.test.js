import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an array", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Array)
  })

  xit("should have at least one step with label and render properties", () => {
    const steps = useReportingWizardSteps()
    expect(steps.length).toBeGreaterThan(0)
    steps.every((step) => {
      expect(step.label).toBeDefined()
      expect(step.render).toBeDefined()
    })
  })
})
