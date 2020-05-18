import { parkingReportState } from "../recoil/atoms/parkingReportState"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const useParkingReportState = () => useRecoilState(parkingReportState)
export const useParkingReportValue = () => useRecoilValue(parkingReportState)

export const useSetParkingReportState = () =>
  useSetRecoilState(parkingReportState)

export default useParkingReportState
