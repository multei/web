import React from "react"
import { RecoilRoot } from "recoil"
import { render, screen } from "@testing-library/react"
import SuccessStep from "."
import { useSetActiveStepState } from "../../hooks/useStepsNavigation/useActiveStepState"
import { useSetParkingReportState } from "../../hooks/useParkingReportState"

jest.mock("../../hooks/useStepsNavigation/useActiveStepState")

jest.mock("../../hooks/useParkingReportState", () => {
  return {
    useSetParkingReportState: jest.fn(),
  }
})

describe("<SuccessStep /> container", () => {
  it("should set the parking report state", async () => {
    const defaultParkingReportState = {
      uuid: null,
      carFrontPhotoPreviewUrl: null,
      carPlate: "",
      currentPosition: null,
      isCarFrontPhotoValid: true,
      isLocationValid: true,
    }
    const setParkingReportStateMock = jest.fn()

    useSetActiveStepState.mockImplementation(() => jest.fn())
    useSetParkingReportState.mockImplementation(() => setParkingReportStateMock)

    render(
      <RecoilRoot>
        <SuccessStep />
      </RecoilRoot>
    )

    expect(setParkingReportStateMock).toHaveBeenCalledWith(
      defaultParkingReportState
    )
  })
})
