import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStandalone = () =>
  useMediaQuery("(display-mode: standalone)") || navigator.standalone

export default useStandalone
