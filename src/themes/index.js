import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = ({ paletteType }) => {
  /**
   * @see https://coolors.co/a63446-f6f4f3-0069ae-23ce6b-0f1108
   */
  const baseTheme = createMuiTheme({
    palette: {
      type: paletteType === "light" ? "light" : "dark",
      primary: {
        contrastText: "#f6f4f3",
        main: paletteType === "light" ? "#0069ae" : "#623CEA",
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
  })
  return createMuiTheme({
    ...baseTheme,
    typography: {
      body2: {
        "-moz-font-feature-settings": '"kern", "liga", "clig", "calt"',
        "-ms-font-feature-settings": '"kern", "liga", "clig", "calt"',
        "-webkit-font-feature-settings": '"kern", "liga", "clig", "calt"',
        fontFeatureSettings: '"kern", "liga", "clig", "calt"',
        fontKerning: "normal",
        fontWeight: "normal",
        wordWrap: "break-word",
      },
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
      fontWeightBold: "bold",
    },
    overrides: {
      MuiAppBar: {
        root: {
          display: "block",
        },
      },
      MuiButton: {
        root: {
          font: "inherit",
          margin: 0,
          overflow: "visible",
          '&[type="button"], &[type="reset"], &[type="submit"], html &[type="button"]': {
            "-webkit-appearance": "button",
            "&::-moz-focus-inner": {
              borderStyle: "none",
              padding: 0,
            },
            "&::-moz-focusring": {
              outline: "1px dotted ButtonText",
            },
          },
        },
      },
      MuiContainer: {
        root: {
          margin: "0 auto",
          padding: `0 1.0875rem ${baseTheme.spacing(3)}px`,
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
            [baseTheme.breakpoints.down("xs")]: {
              fontSize: "100%",
            },
          },
          "::-webkit-input-placeholder": {
            color: "inherit",
            opacity: 0.54,
          },
          "::-webkit-file-upload-button": {
            "-webkit-appearance": "button",
            font: "inherit",
          },
          "[hidden], template": {
            display: "none",
          },
          abbr: {
            borderBottom: "none",
            cursor: "help",
            "&[title]": {
              borderBottom: "1px dotted hsla(0, 0%, 0%, 0.5)",
              textDecoration: "none",
            },
          },
          address: {
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: 0,
          },
          "code, kbd, pre, samp": {
            fontFamily:
              '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
            fontSize: "1em",
          },
          "code, kbd, samp": {
            fontSize: "0.85rem",
            lineHeight: `${baseTheme.spacing(3)}px`,
          },
          code: {
            backgroundColor: baseTheme.palette["code"].background,
            borderRadius: `${baseTheme.spacing(0.5)}px`,
            padding: "0.2em 0",
            "&:before, &:after": {
              content: '" "',
              letterSpacing: "-0.2em",
            },
            "pre &": {
              background: "none",
              lineHeight: 1.42,
              "&:before, &:after": {
                content: '" "',
              },
            },
          },
          dfn: {
            fontSize: "italic",
          },
          dd: {
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: 0,
          },
          dl: {
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: 0,
          },
          dt: {
            fontWeight: "bold",
          },
          hgroup: {
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: 0,
          },
          mark: {
            backgroundColor: baseTheme.palette["mark"].main,
            color: baseTheme.palette["mark"].contrastText,
          },
          noscript: {
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: 0,
          },
          pre: {
            background: baseTheme.palette["code"].background,
            borderRadius: `${baseTheme.spacing(0.5)}px`,
            fontSize: "0.85em",
            lineHeight: 1.42,
            margin: `0 0 ${baseTheme.spacing(3)}px`,
            padding: `${baseTheme.spacing(3)}px`,
            overflow: "auto",
            wordWrap: "normal",
          },
          small: {
            fontSize: "80%",
          },
          "sub, sup": {
            fontSize: "75%",
            lineHeight: 0,
            position: "relative",
            verticalAlign: "baseline",
          },
          sub: {
            bottom: "-0.25em",
          },
          sup: {
            top: "-0.5em",
          },
          "svg:not(:root)": {
            overflow: "hidden",
          },
        },
      },
      MuiDivider: {
        root: {
          border: "none",
          boxSizing: "content-box",
          height: "1px",
          margin: `0 0 calc(${baseTheme.spacing(3)}px - 1px);`,
          overflow: "visible",
          padding: 0,
        },
      },
      MuiInput: {
        inputTypeSearch: {
          "-webkit-appearance": "textfield",
          outlineOffset: "-2px",
        },
        "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
          "-webkit-appearance": "none",
        },
      },
      MuiInputBase: {
        input: {
          font: "inherit",
          margin: 0,
          overflow: "visible",
        },
        multiline: {
          font: "inherit",
          margin: 0,
          overflow: "auto",
        },
      },
      MuiLink: {
        root: {
          "-webkit-text-decoration-skip": "objects",
          backgroundColor: "transparent",
          textDecorationSkip: "objects",
          textDecorationSkipInk: "auto",
          "&:active, &:hover": {
            outlineWidth: 0,
          },
        },
        underlineNone: {
          textDecoration: "none",
        },
      },
      MuiList: {
        root: {
          listStyleImage: "none",
          listStylePosition: "outside",
          padding: 0,
        },
        gutters: {
          marginBottom: `${baseTheme.spacing(3)}px`,
        },
      },
      MuiListItem: {
        root: {
          paddingLeft: 0,
          "& > ol, & > ul": {
            marginBottom: `${baseTheme.spacing(3)}px`,
            marginLeft: `${baseTheme.spacing(3)}px`,
            marginTop: `${baseTheme.spacing(3)}px`,
          },
          "& *:last-child": {
            marginBottom: 0,
          },
          "& > p": {
            marginBottom: `${baseTheme.spacing(1.5)}px`,
          },
        },
        gutters: {
          marginBottom: `${baseTheme.spacing(1.5)}px`,
        },
      },
      MuiSelect: {
        root: {
          textTransform: "none",
        },
      },
      MuiTable: {
        root: {
          borderCollapse: "collapse",
          fontSize: "1rem",
          lineHeight: `${baseTheme.spacing(3)}px`,
          margin: `0 0 ${baseTheme.spacing(3)}px`,
          padding: 0,
          width: "100%",
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "1px solid hsla(0, 0%, 0%, 0.12)",
          fontFeatureSettings: '"tnum"',
          "-moz-font-feature-settings": '"tnum"',
          "-ms-font-feature-settings": '"tnum"',
          "-webkit-font-feature-settings": '"tnum"',
        },
        alignLeft: {
          textAlign: "left",
        },
        head: {
          fontWeight: "bold",
        },
        paddingNone: {
          "&:first-child": {
            paddingLeft: 0,
          },
          "&:last-child": {
            padding: 0,
          },
        },
      },
      MuiTableHead: {
        root: {
          textAlign: "left",
        },
      },
      MuiToolbar: {
        root: {
          maxWidth: baseTheme.breakpoints.values.md,
        },
      },
      MuiTypography: {
        root: {
          margin: `0 0 ${baseTheme.spacing(3)}px`,
          padding: 0,
        },
        h1: {
          fontSize: "2.25rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
        },
        h2: {
          fontSize: "1.62671rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
          [baseTheme.breakpoints.down("sm")]: {
            fontSize: "1.38316rem",
          },
        },
        h3: {
          fontSize: "1.38316rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
        },
        h4: {
          fontSize: "1rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
        },
        h5: {
          fontSize: "0.85028rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
        },
        h6: {
          fontSize: "0.78405rem",
          fontWeight: "bold",
          lineHeight: 1.1,
          textRendering: "optimizeLegibility",
        },
        paragraph: {
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
    },
  })
}

export default theme
