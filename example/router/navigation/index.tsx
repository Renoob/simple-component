import * as React from "react";
import { NavLink } from "react-router-dom";

const styles = require("./index.module.less");

class Navigation extends React.Component {
    public render() {
        const module = (
            <div className = { styles.navigation }>
                <NavLink exact to = "/" activeClassName = { styles.active }>simple-component</NavLink>
                <NavLink exact to = "/button" activeClassName = { styles.active }>按钮 Button</NavLink>
                <NavLink exact to = "/countDown" activeClassName = { styles.active }>倒计时 CountDown</NavLink>
                <NavLink exact to = "/modal" activeClassName = { styles.active }>弹窗 Modal</NavLink>
                <NavLink exact to = "/animationPoints" activeClassName = { styles.active }>
                    鼠标轨迹 AnimationPoints
                </NavLink>
                <NavLink exact to = "/input" activeClassName = { styles.active }>输入框 Input</NavLink>
                <NavLink exact to = "/loading" activeClassName = { styles.active }>加载中 Loading</NavLink>
            </div>
        );
        return module;
    }
}

export default Navigation;
