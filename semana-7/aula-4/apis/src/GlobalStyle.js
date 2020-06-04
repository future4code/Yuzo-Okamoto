import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: sans-serif;
    font-size: 1.8rem;
    color: black;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
    color: inherit;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4 {
    font-size: 2.4rem;
  }
  h5 {
    font-size: 2.2rem;
  }
  h6 {
    font-size: 2rem;
  }
`;

export default GlobalStyle;
