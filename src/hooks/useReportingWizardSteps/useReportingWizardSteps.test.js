import React from "react"
import { useReportingWizardSteps } from "./useReportingWizardSteps"
import CarFrontPhotoStep from "./../../containers/CarFrontPhotoStep"
import CarPlateConfirmStep from "./../../containers/CarPlateConfirmStep"
import LocationStep from "./../../containers/LocationStep"
import { CarPhotoInstructionsStep } from "./../../components/CarPhotoInstructionsStep"
import SuccessStep from "./../../containers/SuccessStep"

describe("Reporting wizard steps", () => {
  const props = {
    toggles: {
      CAR_REPORT_PHOTO_INSTRUCTIONS: true,
      PLATE_CONFIRMATION_STEP: true,
    },
  }

  it("should return an array", () => {
    const steps = useReportingWizardSteps(props)
    expect(steps).toBeInstanceOf(Array)
  })

  it('should have at least one step with "label" and "component" properties', () => {
    const steps = useReportingWizardSteps(props)
    expect(steps.length).toBeGreaterThan(0)
    steps.every((step) => {
      expect(step.label).toBeDefined()
      expect(step.component).toBeDefined()
    })
  })

  it("component property should be Component instance", () => {
    const steps = useReportingWizardSteps(props)
    steps.every((step) => {
      const componentElement = <step.component />
      expect(React.isValidElement(componentElement)).toBe(true)
    })
  })

  it("label property should not be empty", () => {
    const steps = useReportingWizardSteps(props)
    steps.every((step) => {
      expect(step.label.trim().length).toBeGreaterThan(0)
    })
  })

  it("should return right steps", () => {
    const steps = useReportingWizardSteps(props)

    expect(steps[0].label).toBe("Instruções")
    expect(steps[0].component).toBe(CarPhotoInstructionsStep)

    expect(steps[1].label).toBe("Enviar foto da frente")
    expect(steps[1].component).toBe(CarFrontPhotoStep)

    expect(steps[2].label).toBe("Confirmar placa")
    expect(steps[2].component).toBe(CarPlateConfirmStep)

    expect(steps[3].label).toBe("Enviar localização")
    expect(steps[3].component).toBe(LocationStep)

    expect(steps[4].label).toBe("Denúncia realizada")
    expect(steps[4].component).toBe(SuccessStep)
  })

  it("should not return steps that are toggled off", () => {
    const steps = useReportingWizardSteps({
      toggles: {
        CAR_REPORT_PHOTO_INSTRUCTIONS: false,
        PLATE_CONFIRMATION_STEP: false,
      },
    })

    expect(steps[0].label).toBe("Enviar foto da frente")
    expect(steps[0].component).toBe(CarFrontPhotoStep)

    expect(steps[1].label).toBe("Enviar localização")
    expect(steps[1].component).toBe(LocationStep)

    expect(steps[2].label).toBe("Denúncia realizada")
    expect(steps[2].component).toBe(SuccessStep)
  })
})
