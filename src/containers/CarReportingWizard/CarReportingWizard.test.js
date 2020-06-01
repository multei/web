import React from "react"
import { RecoilRoot } from "recoil"
import { render, screen } from "@testing-library/react"
import useFeatureToggle from "../../hooks/useFeatureToggle"
import CarReportingWizard from "./CarReportingWizard"

jest.mock("../../hooks/useFeatureToggle")

describe("<CarReportingWizard /> container", () => {
  const featureToggleImplementation = (keys) => (key) => {
    if (keys[key] !== undefined) return [keys[key]]

    return [false]
  }

  it("should include carPlateConfirmStep when car plate toggle is enabled", async () => {
    useFeatureToggle.mockImplementation(
      featureToggleImplementation({
        PARKING_REPORT: true,
        PLATE_CONFIRMATION_STEP: true,
      })
    )

    render(
      <RecoilRoot>
        <CarReportingWizard />
      </RecoilRoot>
    )

    const label = await screen.getByText("Confirmar placa")
    expect(label).toBeTruthy()
  })

  it("should not include carPlateConfirmStep when car plate toggle is disabled", async () => {
    useFeatureToggle.mockImplementation(
      featureToggleImplementation({
        PARKING_REPORT: true,
        PLATE_CONFIRMATION_STEP: false,
      })
    )

    render(
      <RecoilRoot>
        <CarReportingWizard />
      </RecoilRoot>
    )

    const label = await screen.queryByText("Confirmar placa")
    expect(label).toBeFalsy()
  })
})
