export const parkingReportState = {
    carFrontPhotoPreviewUrl: null,
    carPlate: "",
    currentPosition: null,
    isCarFrontPhotoValid: true,
}

export const useParkingReportState = () => [parkingReportState, jest.fn()]

export default useParkingReportState
