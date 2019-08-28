import App from "@router/app";
import "@styles/index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";

const container = document.getElementById("container");
ReactDOM.render(<App />, container);

if (module.hot) {
    module.hot.accept("ROUTER/app", () => {
        ReactDOM.render(<App />, container);
    });
}
