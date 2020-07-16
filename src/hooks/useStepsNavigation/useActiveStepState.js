import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

const activeStepState = atom({
  default: 0,
  key: "setActiveStepIndex",
})

export const useActiveStepState = () => useRecoilState(activeStepState)
export const useActiveStepValue = () => useRecoilValue(activeStepState)
export const useSetActiveStepState = () => useSetRecoilState(activeStepState)

export default useActiveStepState
