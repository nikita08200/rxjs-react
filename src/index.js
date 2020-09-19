import React from "react";
import ReactDOM from "react-dom";
import "@zellwk/css-reset";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
