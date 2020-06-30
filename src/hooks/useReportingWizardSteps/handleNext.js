import { createParkingReport } from "../../services/parkings"

export const handleCarFrontPhoto = (parkingReportState) => {
  const handleSuccess = ({ data }) => {
    const uuid = data.data.uuid
    const carPlate = data.data.parkings.car_plate

    localStorage.setItem(`PARKING_REPORT`, uuid)

    return {
      uuid,
      carPlate,
      isCarFrontPhotoValid: true,
    }
  }

  const handleError = (error) => {
    localStorage.removeItem(`PARKING_REPORT`)

    return {
      isCarFrontPhotoValid: false,
    }
  }

  const { carFrontPhotoPreviewUrl } = parkingReportState
  return createParkingReport(carFrontPhotoPreviewUrl)
    .then(handleSuccess)
    .catch(handleError)
}
