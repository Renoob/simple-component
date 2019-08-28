import * as React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./index.module.scss";
import "./index.scss";

class Menu extends React.Component {
    public render() {
        const menu = "menu";

        const module = (
            <div className = { styles[menu] }>
                <NavLink to = "/" exact activeClassName = "active">首页</NavLink>
                <NavLink to = "/list" exact activeClassName = "active">列表</NavLink>
            </div>
        );
        return module;
    }
}

export default Menu;
