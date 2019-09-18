import * as React from "react";
import "./index.less";

class Loading extends React.Component {
    public render() {
        const module = (
            <div className = "loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
        return module;
    }
}

export default Loading;
