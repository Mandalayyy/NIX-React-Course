import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./Rdx/index";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  </BrowserRouter>

);

