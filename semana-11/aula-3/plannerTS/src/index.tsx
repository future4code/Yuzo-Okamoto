import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontSize: '5rem',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* Normalização dos estilos conforme padrão Material-UI */}
    <CssBaseline />

    {/* Estilização Global */}
    <GlobalStyle />

    {/* Componentes com estilo podem sobrescrever os estilos de Material-UI. */}
    <StylesProvider injectFirst>

      {/* Provedor de tema do Material-UI */}
      <MuiThemeProvider theme={theme}>
        
        {/* Provedor de tema do Styled-Components */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
