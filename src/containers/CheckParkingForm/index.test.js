import React from "react"
import renderer from "react-test-renderer"
import { RecoilRoot } from "recoil"
import CheckParkingForm from "."

describe("<CheckParkingForm /> container", () => {
  it("should render", () => {
    const tree = renderer
      .create(
        <RecoilRoot>
          <CheckParkingForm />
        </RecoilRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
