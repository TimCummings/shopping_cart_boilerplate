import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import "./index.css";
import store from "./lib/store"
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

//import store
//wrap App in Provider, handing store as an element attribute

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
