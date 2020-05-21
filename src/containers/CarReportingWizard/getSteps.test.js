import React from "react"
import { getSteps } from "./getSteps"

describe("<getSteps />", () => {

    it("should return all steps", async () => {
        const numberOfSteps = 5

        const featureToggle = {
            getPlateConfirmationStepToggle: true,
            carReportPhotoInstructions: true,
        };

        const [steps, maxSteps] = getSteps(featureToggle);

        expect(steps.length).toBe(numberOfSteps);
        expect(maxSteps).toBe(numberOfSteps);
    })

    it("should not return confirm plate step", async () => {
        const featureToggle = {
            getPlateConfirmationStepToggle: false,
        };

        const [steps, maxSteps] = getSteps(featureToggle);

        expect(steps.includes(<>Confirmar placa</>)).toBeFalsy()
    })

    it("should not return car report photo instructions", async () => {
          const featureToggle = {
          carReportPhotoInstructions: false,
        };

        const [steps, maxSteps] = getSteps(featureToggle);

        expect(steps.includes(<>Instruções</>)).toBeFalsy()
    })
})
