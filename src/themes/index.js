import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { getThemeOptions } from "muy"
import themes from "@multei/themes"

const theme = ({ paletteType }) => {
  const baseTheme = createMuiTheme(themes[paletteType])
  return createMuiTheme({
    ...baseTheme,
    ...getThemeOptions({ baseTheme }),
  })
}

export default theme
