import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { getThemeOptions } from "muy"

const theme = ({ paletteType }) => {
  /**
   * @see https://coolors.co/a63446-f6f4f3-0069ae-23ce6b-0f1108
   */
  const baseTheme = createMuiTheme({
    palette: {
      type: paletteType === "light" ? "light" : "dark",
      primary: {
        contrastText: "#f6f4f3",
        main: "#623CEA",
      },
      secondary: {
        main: "#119DA4",
      },
      error: {
        main: "#A63446",
      },
      success: {
        main: "#23CE6B",
      },
      mark: {
        contrastText: "#0f1108",
        main: "#ffff00",
      },
      code: {
        background: "hsla(0, 0%, 0%, 0.2)",
      },
      divider: "hsla(0, 0%, 0%, 0.2)",
      text: {
        primary: paletteType === "light" ? "hsla(0, 0%, 0%, 0.8)" : "#f6f4f3",
      },
      background: {
        default: paletteType === "light" ? "#f6f4f3" : "#011627",
        paper: paletteType === "light" ? "#FBFFFE" : "hsla(0, 0%, 0%, 0.2)",
      },
    },
    typography: {
      fontFamily: [
        "Overpass",
        '"-apple-system"',
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  })
  return createMuiTheme({
    ...baseTheme,
    ...getThemeOptions({ baseTheme }),
  })
}

export default theme
