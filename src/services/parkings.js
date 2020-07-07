import Api from "../api"

export const getParkingsByCarPlate = (carPlate, version = 1) =>
  Api().get(`/v${version}/parkings/${carPlate}`)

export const createParkingReport = async (
  carFrontPhotoPreviewUrl,
  version = 1
) => {
  const carFrontPhoto = await fetch(carFrontPhotoPreviewUrl).then((r) =>
    r.blob()
  )
  const formData = new FormData()

  formData.append("car_front_photo", carFrontPhoto)
  return Api().post(`/v${version}/parkings/`, formData)
}

export const completeParkingReport = (uuid, coordinates, version = 1) => {
  const request = {
    uuid,
    coordinates,
  }

  return Api().patch(`/v${version}/parkings/`, request)
}
