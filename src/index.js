import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
