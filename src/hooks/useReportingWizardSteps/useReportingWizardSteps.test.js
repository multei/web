import React from "react"
import { useReportingWizardSteps } from "./useReportingWizardSteps"

describe("Reporting wizard steps", () => {
  it("should return an array", () => {
    const steps = useReportingWizardSteps()
    expect(steps).toBeInstanceOf(Array)
  })

  it('should have at least one step with "label" and "component" properties', () => {
    const steps = useReportingWizardSteps()
    expect(steps.length).toBeGreaterThan(0)
    steps.every((step) => {
      expect(step.label).toBeDefined()
      expect(step.component).toBeDefined()
    })
  })

  it("component property should be Component instance", () => {
    const steps = useReportingWizardSteps()
    steps.every((step) => {
      const componentElement = <step.component />
      expect(React.isValidElement(componentElement)).toBe(true)
    })
  })
})