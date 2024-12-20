import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { updateNewMessageText } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
};
