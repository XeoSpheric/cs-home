import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./services/authContext";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
  <MantineProvider theme={{ fontFamily: 'Open Sans' }}>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </MantineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
