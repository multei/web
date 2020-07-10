import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import ParkingExpansionPanel from "."

describe("ParkingExpansionPanel", () => {
  const car_front_photo_height = "car_front_photo_height"
  const car_front_photo_uri = "car_front_photo_uri"
  const car_front_photo_width = "car_front_photo_width"
  const car_plate = "car_plate"
  const car_rear_photo_height = "car_rear_photo_height"
  const car_rear_photo_uri = "car_rear_photo_uri"
  const car_rear_photo_width = "car_rear_photo_width"
  const coordinates = { x: 0, y: 1 }
  const created_at = "created_at"
  const uuid = "uuid"

  const props = {
    car_front_photo_height,
    car_front_photo_uri,
    car_front_photo_width,
    car_plate,
    car_rear_photo_height,
    car_rear_photo_uri,
    car_rear_photo_width,
    coordinates,
    created_at,
    uuid,
  }

  it("should render correctly", () => {
    const tree = renderer.create(<ParkingExpansionPanel {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should not render the map when coordinates are not defined", () => {
    props.coordinates = null

    const { container } = render(<ParkingExpansionPanel {...props} />)
    const iframe = container.querySelector("iframe")

    expect(iframe).toBeFalsy()
  })
})
