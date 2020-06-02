import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
    color: inherit;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    color: white;
    font-family: sans-serif;
    font-size: 1.7rem;
    box-sizing: border-box;
    background: #2c345c;
  }
  header {
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  section {
    flex: 1;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid white;
  }
  h1 {
    font-size: 3rem;
    font-style: italic;
  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

export default GlobalStyle;
