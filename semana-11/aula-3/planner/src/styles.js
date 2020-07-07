import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Francois One', sans-serif;
  }

  h1 {
    font-family: 'Bangers', cursive;
    letter-spacing: 10px;
    font-size: 60px;
    cursor: default;
  }

  h2 {
    font-size: 24px;
    cursor: default;
  }

  p {
    font-size: 18px;
  }
`;

export { GlobalStyle };
