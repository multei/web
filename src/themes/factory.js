import theme from "./index"

const factory = (prefersDarkMode) => () =>
  theme({ paletteType: prefersDarkMode ? "dark" : "light" })

export default factory
