import Api from "../api"

const api = Api()

export function getParkingsByCarPlate(carPlate) {
  return api.get(`/parkings/${carPlate}`)
}
