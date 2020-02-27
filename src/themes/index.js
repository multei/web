import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#f6f4f3",
      main: "#0069ae",
    },
    secondary: {
      main: "#23ce6b",
    },
    error: {
      main: "#A63446",
    },
  },
})

export default theme
