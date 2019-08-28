import * as React from "react";
import * as styles from "./index.module.less";

class List extends React.Component {
    public render() {
        const list = "list";

        const module = (
            <div className = { styles[list] }>
                列表
            </div>
        );

        return module;
    }
}

export default List;
