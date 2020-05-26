import { Component } from "react"
import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an array", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Array)
  })

  it("should have at least one step with label and render properties", () => {
    const steps = useReportingWizardSteps()
    expect(steps.length).toBeGreaterThan(0)
    steps.every((step) => {
      expect(step.label).toBeDefined()
      expect(step.render).toBeDefined()
    })
  })

  xit("render property should be Component instance", () => {
    const steps = useReportingWizardSteps()
    steps.every((step) => {
      expect(step.render).toBeInstanceOf(Component)
    })
  })
})
