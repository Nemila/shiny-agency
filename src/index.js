import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

let Dark = createContext();

ReactDOM.render(
  <React.StrictMode>
    <Dark.Provider value="true">
      <App />
    </Dark.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
