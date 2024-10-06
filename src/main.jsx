import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const reactRoot = document.getElementById("react-root")

const root = ReactDOM.createRoot(reactRoot)

const testHeading = React.createElement("h1", {}, "hellow girlll") 

root.render(
    <App/>
)
