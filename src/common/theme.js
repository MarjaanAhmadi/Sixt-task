import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5f00",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "white",
        backgroundColor: "#ff5f00",
      },
    },
  },
});

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
