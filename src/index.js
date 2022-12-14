// vendor imports
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// locale imports
// store
import store from "./store";
// components
import App from "./App";
// styles
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
