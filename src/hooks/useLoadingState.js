import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

const loadingState = atom({
  default: null,
  key: "loadingState",
})

export const useLoadingState = () => useRecoilState(loadingState)
export const useLoadingValue = () => useRecoilValue(loadingState)
export const useSetLoadingState = () => useSetRecoilState(loadingState)

export default useLoadingState
