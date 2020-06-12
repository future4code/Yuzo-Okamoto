import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
  body {
    font-family: sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 29px;
  }
  h3 {
    font-size: 26.4px;
  }
  h4 {
    font-size: 23.8px;
  }
  h5 {
    font-size: 21.2px;
  }
  h6 {
    font-size: 18.6px;
  }
`;

export { GlobalStyle };
