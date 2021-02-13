import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
