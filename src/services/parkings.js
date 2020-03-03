import Api from "../api"

export function getParkingsByCarPlate(carPlate) {
  const api = Api()
  return api.get(`/parkings/${carPlate}`)
}
