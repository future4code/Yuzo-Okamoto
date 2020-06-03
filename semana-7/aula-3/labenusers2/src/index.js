import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  html {
    color: white;
    font-size: 62.5%;
    font-family: sans-serif;
  }
  body {
    font-size: 1.6rem;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  h1 {
    font-size: 2.2rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
