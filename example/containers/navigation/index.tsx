import * as React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./index.module.less";

class Navigation extends React.Component {
    public render() {
        const module = (
            <div className = { styles.navigation }>
                <NavLink to = "/">simple-component</NavLink>
                <NavLink to = "/countDown">倒计时 CountDown</NavLink>
            </div>
        );
        return module;
    }
}

export default Navigation;
