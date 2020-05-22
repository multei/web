import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an object", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Object)
  })
})
