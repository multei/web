import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const reportedParkingsState = atom({
  key: "reportedParkingState",
  default: [],
})

export const useReportedParkingsState = () =>
  useRecoilState(reportedParkingsState)
export const useReportedParkingsValue = () =>
  useRecoilValue(reportedParkingsState)
export const useSetReportedParkingsState = () =>
  useSetRecoilState(reportedParkingsState)

export default useReportedParkingsState
