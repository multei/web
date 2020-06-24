import React from "react"
import renderer from "react-test-renderer"
import { RecoilRoot } from "recoil"

import CarFrontPhotoStep from "."
import useFeatureToggle from "./../../hooks/useFeatureToggle"

jest.mock("./../../hooks/useFeatureToggle")
jest.mock("./../../hooks/useLoadingState")
jest.mock("./../../hooks/useParkingReportState")

describe("CarFrontPhotoStep", () => {
  let props

  beforeEach(() => {
    props = {
      onSubmit: () => {},
    }
    useFeatureToggle.mockReturnValue([false])
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
