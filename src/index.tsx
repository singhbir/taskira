import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./redux/store";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebaseconfig";

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
