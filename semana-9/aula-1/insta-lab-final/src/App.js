import React from 'react';

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
    </>
  );
}

export default App;
