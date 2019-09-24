import { Button } from "@components/index";
import * as React from "react";

class ButtonExample extends React.Component {
    public onClick = () => {
        alert("你点击了按钮");
    }

    public render() {
        return (
            <div>
                <Button onClick = { this.onClick }></Button>
            </div>
        );
    }
}

export default ButtonExample;
