import "@components/style";
import App from "@router/app";
import * as React from "react";
import * as ReactDOM from "react-dom";

const container = document.getElementById("container");
ReactDOM.render(<App />, container);

if (module.hot) {
    module.hot.accept("@router/main.tsx", () => {
        ReactDOM.render(<App />, container);
    });
}
