import * as React from "react";
import "./index.less";

interface IButtonsProps {
    onClick: () => void;
}

class Button extends React.Component<IButtonsProps, {}> {
    public onClick = () => {
        this.props.onClick();
    }

    public render() {
        const module = (
            <button className = "button" onClick = { this.onClick }>button</button>
        );
        return module;
    }
}

export default Button;
