import * as React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./index.module.less";

class Navigation extends React.Component {
    public render() {
        const module = (
            <div className = { styles.navigation }>
                <NavLink exact to = "/" activeClassName = { styles.active }>simple-component</NavLink>
                <NavLink exact to = "/button" activeClassName = { styles.active }>按钮 Button</NavLink>
                <NavLink exact to = "/countDown" activeClassName = { styles.active }>倒计时 CountDown</NavLink>
                <NavLink exact to = "/modal" activeClassName = { styles.active }>弹窗 Modal</NavLink>
            </div>
        );
        return module;
    }
}

export default Navigation;
