// LIBs
import React from "react";
import ReactDOM from "react-dom/client";

// CONTEXTs
import { AppContextProvider } from "./core/contexts";

// APP
import { App } from "./App";

// STYLESHEETs
import "./core/stylesheets/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
