import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  input {
    &:invalid {
      border: 2px solid red;
    }
  }
`;

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  myPalette: {
    darkText: "#111111",
    normalText: "#555555",
    primary: "#48CAE4",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <CssBaseline />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
