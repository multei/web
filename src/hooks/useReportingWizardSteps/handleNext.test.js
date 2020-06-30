import { handleCarFrontPhoto, handleLocationStep } from "./handleNext"

jest.mock("../../services/parkings")

describe("useStepsNavigation", () => {
  const mockSetItem = jest.fn()
  const mockRemoveItem = jest.fn()

  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, "setItem")
    jest.spyOn(window.localStorage.__proto__, "removeItem")

    window.localStorage.__proto__.setItem = mockSetItem
    window.localStorage.__proto__.removeItem = mockRemoveItem
  })

  it("should store uuid in localStorage", async () => {
    const parkingReportState = {
      carFrontPhotoPreviewUrl: "url",
    }

    const response = await handleCarFrontPhoto(parkingReportState)

    const { uuid } = response

    expect(window.localStorage.__proto__.setItem).toHaveBeenCalledWith(
      "PARKING_REPORT",
      uuid
    )
  })

  it.todo("should not store uuid in localStorage when some error occurred")

  it("should remove uuid from localStorage on complete parking report", async () => {
    const parkingReportState = {
      uuid: "uuid",
      currentPosition: {
        coords: {
          latitude: "LAT",
          longitude: "LNG",
        },
      },
    }

    await handleLocationStep(parkingReportState)

    expect(window.localStorage.__proto__.removeItem).toHaveBeenCalledWith(
      "PARKING_REPORT"
    )
  })

  it.todo("should not remove uuid from localStorage when some error occurred")
})
