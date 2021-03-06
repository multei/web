import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const parkingReportState = atom({
  key: "parkingReportState",
  default: {
    uuid: null,
    carFrontPhotoPreviewUrl: null,
    carPlate: "",
    currentPosition: null,
    isCarFrontPhotoValid: true,
    isLocationValid: true,
  },
})

export const useParkingReportState = () => useRecoilState(parkingReportState)
export const useParkingReportValue = () => useRecoilValue(parkingReportState)

export const useSetParkingReportState = () =>
  useSetRecoilState(parkingReportState)

export default useParkingReportState
