import React from "react"
import renderer from "react-test-renderer"
import CheckParkingForm from "."

describe("<CheckParkingForm /> component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<CheckParkingForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
