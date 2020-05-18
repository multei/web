import Api from "../api"

export const getParkingsByCarPlate = (carPlate) =>
  Api().get(`/parkings/${carPlate}`)
