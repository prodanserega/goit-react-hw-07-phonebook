import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { store } from "./redux/store.js";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
