import { atom, useRecoilState } from "recoil"

export const useMenuToggle = (key) => {
  const openState = atom({
    default: false,
    key,
  })

  const [open, setOpen] = useRecoilState(openState)

  const toggleOpen = (newValue) => () => {
    setOpen(newValue)
  }

  return [open, toggleOpen]
}
