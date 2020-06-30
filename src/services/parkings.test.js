import React from "react"

import Api from "../api"
import {
  getParkingsByCarPlate,
  createParkingReport,
  completeParkingReport,
} from "./parkings"

jest.mock("../api")

describe("Parkings API", () => {
  const version = 0

  beforeEach(() => {
    Api.mockReturnValue({
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
    })
  })

  it("should call parkings API get with car plate", () => {
    const carPlate = "ABC1234"

    getParkingsByCarPlate(carPlate, version)

    expect(Api().get).toHaveBeenCalledWith(`/v${version}/parkings/${carPlate}`)
  })

  it("should call parkings API post with car photo", () => {
    const carFrontPhotoPreviewUrl = "photo-url"
    const parkingReportState = {
      carFrontPhotoPreviewUrl: carFrontPhotoPreviewUrl,
    }

    const formData = new FormData()
    formData.append("car_front_photo", carFrontPhotoPreviewUrl)

    createParkingReport(parkingReportState, version)

    expect(Api().post).toHaveBeenCalledWith(
      `/v${version}/parkings/`,
      expect.objectContaining(formData)
    )
  })

  it("should call parkings API patch with the coordinates", () => {
    const uuid = "uuid"
    const currentPosition = "-LAT,+LNG"

    const parkingReportState = {
      uuid,
      currentPosition,
    }

    completeParkingReport(parkingReportState, version)

    expect(Api().patch).toHaveBeenCalledWith(
      `/v${version}/parkings/`,
      expect.objectContaining({
        uuid: uuid,
        coordinates: currentPosition,
      })
    )
  })
})
