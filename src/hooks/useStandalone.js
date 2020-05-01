import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStandalone = () => {
  if (useMediaQuery("(display-mode: standalone)")) {
    return true
  }
  if (
    typeof window === "undefined" ||
    typeof window.navigator === "undefined"
  ) {
    return false
  }
  return Boolean(window.navigator.standalone)
}

export default useStandalone
