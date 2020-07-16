import React from "react"
import { RecoilRoot } from "recoil"
import { render, screen, fireEvent } from "@testing-library/react"
import SuccessStep from "."
import { useSetActiveStepState } from "../../hooks/useStepsNavigation/useActiveStepState"
import { useParkingReportState } from "../../hooks/useParkingReportState"

jest.mock("../../hooks/useStepsNavigation/useActiveStepState")

jest.mock("../../hooks/useParkingReportState", () => {
  return {
    useParkingReportState: jest.fn(),
  }
})

describe("<SuccessStep /> container", () => {
  it("should set the parking report state within the onClick function", async () => {
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
    useParkingReportState.mockImplementation(() => [
      defaultParkingReportState,
      setParkingReportStateMock,
    ])

    render(
      <RecoilRoot>
        <SuccessStep />
      </RecoilRoot>
    )

    const element = screen.getByText("Fazer outra denúncia", {
      selector: "button span",
    })

    fireEvent.click(element)

    expect(setParkingReportStateMock).toHaveBeenCalledWith(
      defaultParkingReportState
    )
  })
})
