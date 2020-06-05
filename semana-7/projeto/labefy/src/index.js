import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { Normalizer } from "./Normalizer";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Normalizer />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
