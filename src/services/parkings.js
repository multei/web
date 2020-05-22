import Api from "../api"

export const getParkingsByCarPlate = (carPlate, version = 1) =>
  Api().get(`/v${version}/parkings/${carPlate}`)
