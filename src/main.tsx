import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/stitch-pages.css";

// HashRouter keeps every route in the URL fragment (e.g. /#/role-selection-desktop).
// The server only ever serves index.html at "/", so deep links, refreshes, static
// hosts (GitHub Pages, S3, nginx) and even a double-clicked index.html all work.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
