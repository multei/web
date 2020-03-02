import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = ({ paletteType }) => {
  const defaultTheme = createMuiTheme()
  const baseTheme = {
    palette: {
      primary: {
        background: paletteType === "light" ? "#f6f4f3" : "#0f1108",
        contrastText: paletteType === "light" ? "#f6f4f3" : "#0f1108",
        main: "#0069ae",
      },
      secondary: {
        main: "#23ce6b",
      },
      error: {
        main: "#A63446",
      },
      divider: "hsla(0, 0%, 0%, 0.2)",
    },
  }
  return createMuiTheme({
    ...baseTheme,
    typography: {
      fontFamily: [
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
    overrides: {
      MuiAppBar: {
        root: {
          marginBottom: defaultTheme.spacing(3),
        },
      },
      MuiContainer: {
        root: {
          margin: "0 auto",
          padding: "0 1.0875rem 1.45rem",
        },
      },
      MuiCssBaseline: {
        "@global": {
          html: {
            "-ms-text-size-adjust": "100%;",
            "-webkit-text-size-adjust": "100%",
            boxSizing: "border-box",
            lineHeight: "1.45em",
            overflowY: "scroll",
            [defaultTheme.breakpoints.down("xs")]: {
              fontSize: "100%",
            },
          },
          body: {
            "-moz-font-feature-settings": '"kern", "liga", "clig", "calt"',
            "-ms-font-feature-settings": '"kern", "liga", "clig", "calt"',
            "-webkit-font-feature-settings": '"kern", "liga", "clig", "calt"',
            backgroundColor: baseTheme.palette.background,
            color: "hsla(0, 0%, 0%, 0.8)",
            fontFeatureSettings: '"kern", "liga", "clig", "calt"',
            fontKerning: "normal",
            fontWeight: "normal",
            wordWrap: "break-word",
          },
          "::-webkit-input-placeholder": {
            color: "inherit",
            opacity: 0.54,
          },
          "::-webkit-file-upload-button": {
            "-webkit-appearance": "button",
            font: "inherit",
          },
          a: {
            "&:active, &:hover": {
              outlineWidth: 0,
            },
          },
        },
      },
      MuiDivider: {
        root: {
          border: "none",
          boxSizing: "content-box",
          height: "1px",
          margin: `0 0 calc(${defaultTheme.spacing(3)}px - 1px);`,
          overflow: "visible",
          padding: 0,
        },
      },
      MuiLink: {
        root: {
          "-webkit-text-decoration-skip": "objects",
          backgroundColor: "transparent",
        },
        underlineNone: {
          textDecoration: "none",
        },
      },
      MuiTypography: {
        h1: {
          fontSize: "2.25em",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          textRendering: "optimizeLegibility",
        },
        h2: {
          fontSize: "1.62671rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          textRendering: "optimizeLegibility",
        },
        h3: {
          fontSize: "1.38316rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          textRendering: "optimizeLegibility",
        },
        h4: {
          fontSize: "1rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          textRendering: "optimizeLegibility",
        },
        h5: {
          fontSize: "0.85028rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          textRendering: "optimizeLegibility",
        },
        h6: {
          fontSize: "0.78405rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          textRendering: "optimizeLegibility",
        },
        paragraph: {
          margin: `0 0 ${defaultTheme.spacing(3)}px`,
          padding: 0,
          "&:last-child": {
            marginBottom: 0,
          },
        },
        srOnly: {
          "-webkit-clip-path": "inset(50%)",
          border: 0,
          clip: "rect(1px, 1px, 1px, 1px)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap",
          "&:active, &:focus": {
            "-webkit-clip-path": "none",
            clip: "auto",
            clipPath: "none",
            height: "auto",
            margin: "auto",
            overflow: "visible",
            width: "auto",
            whiteSpace: "normal",
          },
        },
      },
      MuiToolbar: {
        root: {
          maxWidth: defaultTheme.breakpoints.values.md,
        },
      },
    },
  })
}

export default theme
