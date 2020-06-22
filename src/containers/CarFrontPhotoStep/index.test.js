import React from "react"
import renderer from "react-test-renderer"
import { RecoilRoot } from "recoil"

import CarFrontPhotoStep from "."
import useFeatureToggle from "./../../hooks/useFeatureToggle"
import { useSetLoadingState } from "./../../hooks/useLoadingState"
import { useParkingReportState } from "./../../hooks/useParkingReportState"

jest.mock("./../../hooks/useFeatureToggle")
jest.mock("./../../hooks/useLoadingState")
jest.mock("./../../hooks/useParkingReportState")

describe("CarFrontPhotoStep", () => {
  let props

  beforeEach(() => {
    props = {
      onSubmit: () => {},
    }
    useSetLoadingState.mockReturnValue(() => {})
    useFeatureToggle.mockReturnValue([false])

    useParkingReportState.mockReturnValue([
      {
        carFrontPhotoPreviewUrl: null,
        carPlate: "",
        currentPosition: null,
        isCarFrontPhotoValid: true
      },
      jest.fn(),
    ])
  })

  it("should render correctly", () => {
    const tree = renderer
      .create(
        <RecoilRoot>
          <CarFrontPhotoStep {...props} />
        </RecoilRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
