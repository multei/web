import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an array", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Array)
  })
})
