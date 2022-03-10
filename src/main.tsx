import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./services/authContext";
import "./styles/main.scss";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <DndProvider backend={HTML5Backend}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DndProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
