import * as React from "react";
import "./index.less";

class Input extends React.Component {
    public render() {
        const module = (
            <div className = "input">
                <input className = "input__box" />
                <span></span>
            </div>
        );
        return module;
    }
}

export default Input;
