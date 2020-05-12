import React from 'react'
import { render, screen } from '@testing-library/react'
import useFeatureToggle from '../../hooks/useFeatureToggle'
import CarReportingWizard from "."

jest.mock("../../hooks/useGlobal")
jest.mock("../../hooks/useFeatureToggle")

describe("<CarReportingWizard /> container", () => {
  const featureToggleImplementation = (keys) => (key) => {
    if (keys[key] !== undefined)
      return [keys[key]]

    return [false]
  }

  it("should include carPlateConfirmStep when car plate toggle is enabled", async () => {
    useFeatureToggle.mockImplementation(featureToggleImplementation({
      PARKING_REPORT: true,
      PLATE_CONFIRMATION_STEP: true
    }))

    render(<CarReportingWizard />)

    const label = await screen.getByText('Confirmar placa');
    expect(label).toBeTruthy() ;
  })

  it("should not include carPlateConfirmStep when car plate toggle is disabled", async () => {
    useFeatureToggle.mockImplementation(featureToggleImplementation({
      PARKING_REPORT: true,
      PLATE_CONFIRMATION_STEP: false
    }))

    render(<CarReportingWizard />)

    const label = await screen.queryByText('Confirmar placa');
    expect(label).toBeFalsy() ;
  })
})
