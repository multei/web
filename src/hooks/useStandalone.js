import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStandalone = () => {
  if (useMediaQuery("(display-mode: standalone)")) {
    return true
  }
  if (typeof window.navigator === "undefined") {
    return false
  }
  return Boolean(navigator.standalone)
}

export default useStandalone
