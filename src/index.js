import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/vendors/normalize.scss";
import "./styles/root.scss";
import "./styles/style.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
