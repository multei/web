import { atom } from "recoil"

export const parkingReportState = atom({
  key: "parkingReportState",
  default: {
    carFrontPhotoPreviewUrl: null,
    carPlate: "",
    currentPosition: null,
  },
})
