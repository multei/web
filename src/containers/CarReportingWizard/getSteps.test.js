import React from "react"

// import useFeatureToggle from "../../hooks/useFeatureToggle"
import { getSteps } from "./getSteps"

// jest.mock("../../hooks/useFeatureToggle")

describe("<getSteps />", () => {
    const numberOfSteps = 4;

    it("should return all steps", async () => {
        const featureToggle = {
            getPlateConfirmationStepToggle: true,
        };

        const [steps, maxSteps] = getSteps(featureToggle);

        expect(steps.length).toBe(numberOfSteps);
        expect(maxSteps).toBe(numberOfSteps);
    })

    it("should not return Confirm Plate step", async () => {
        const featureToggle = {
            getPlateConfirmationStepToggle: false,
        };

        const [steps, maxSteps] = getSteps(featureToggle);

        expect(steps.includes(<>Confirmar placa</>)).toBeFalsy()
        expect(maxSteps).toBe(numberOfSteps - 1);
    })

})
