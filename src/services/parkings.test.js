import React from "react"

import Api from "../api"
import { getParkingsByCarPlate, createParkingReport } from "./parkings"

jest.mock("../api")

describe("Parkings API", () => {
  beforeEach(() => {
    Api.mockReturnValue({
      get: jest.fn(),
      post: jest.fn(),
    })
  })

  it("should call parkings API get with car plate", () => {
    const carPlate = "ABC1234"
    const version = 0

    getParkingsByCarPlate(carPlate, version)

    expect(Api().get).toHaveBeenCalledWith(`/v${version}/parkings/${carPlate}`)
  })

  it("should call parkings API post with car photo", () => {
    const carFrontPhotoPreviewUrl = "photo-url"
    const parkingReportState = {
      carFrontPhotoPreviewUrl: carFrontPhotoPreviewUrl,
    }
    const version = 0

    const formData = new FormData()
    formData.append("car_front_photo", carFrontPhotoPreviewUrl)

    createParkingReport(parkingReportState, version)

    expect(Api().post).toHaveBeenCalledWith(
      `/v${version}/parkings/`,
      expect.objectContaining(formData)
    )
  })
})
