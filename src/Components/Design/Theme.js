import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#F41F4E",
    },
    secondary: {
      main: "#FFC2C7",
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      fontFamily: "Arvo",
    },
    h2: {
      fontFamily: "Arvo",
    },
    h3: {
      fontFamily: "Arvo",
    },
    button: {
      fontFamily: "Arvo",
    },
    h4: {
      fontFamily: "Arvo",
    },
    h5: {
      fontFamily: "Arvo",
    },
    h6: {
      fontFamily: "Arvo",
    },
    body1: {
      fontFamily: "Lato",
    },
    overline: {
      fontFamily: "arvo",
    },
  },
  props: {
    MuiAppBar: {
      color: "secondary",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
});

export default myTheme;
