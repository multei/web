import { loadingState } from "../recoil/atoms/loadingState"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const useLoadingState = () => useRecoilState(loadingState)
export const useLoadingValue = () => useRecoilValue(loadingState)
export const useSetLoadingState = () => useSetRecoilState(loadingState)

export default useLoadingState
