import {
  createParkingReport,
  completeParkingReport,
} from "../../services/parkings"

export const handleCarFrontPhoto = (parkingReportState) => {
  const handleSuccess = ({ data }) => {
    const uuid = data.data.uuid
    const carPlate = data.data.parkings.car_plate

    localStorage.setItem(`PARKING_REPORT`, uuid)

    return {
      success: true,
      newParkingReportState: {
        uuid,
        carPlate,
        isCarFrontPhotoValid: true,
      },
    }
  }

  const handleError = (error) => {
    return {
      success: false,
      newParkingReportState: {
        isCarFrontPhotoValid: false,
      },
    }
  }

  const { carFrontPhotoPreviewUrl } = parkingReportState
  return createParkingReport(carFrontPhotoPreviewUrl)
    .then(handleSuccess)
    .catch(handleError)
}

export const handleLocationStep = (parkingReportState) => {
  const handleSuccess = ({ data }) => {
    const uuid = data.data.uuid

    localStorage.removeItem("PARKING_REPORT")

    return {
      success: true,
      newParkingReportState: {
        uuid,
        isLocationValid: true,
      },
    }
  }

  const handleError = (error) => {
    return {
      success: false,
      newParkingReportState: {
        isLocationValid: false,
      },
    }
  }
  const { uuid, currentPosition } = parkingReportState
  const coordinates =
    currentPosition.coords.latitude + "," + currentPosition.coords.longitude

  return completeParkingReport(uuid, coordinates)
    .then(handleSuccess)
    .catch(handleError)
}
