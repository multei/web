import { reportedParkingsState } from "../recoil/atoms/reportedParkingsState"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const useReportedParkingsState = () =>
  useRecoilState(reportedParkingsState)
export const useReportedParkingsValue = () =>
  useRecoilValue(reportedParkingsState)
export const useSetReportedParkingsState = () =>
  useSetRecoilState(reportedParkingsState)

export default useReportedParkingsState
