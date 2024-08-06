import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./store";
import { StoreInitialState } from "./store/initialState";
import { storeReducer } from "./store/storeReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider initialState={StoreInitialState} reducer={storeReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
