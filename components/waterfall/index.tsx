import * as React from "react";
import "./index.less";

interface IWaterfallProps {
    direction: string; // 朝向(row-横向，column-纵向)
    children: React.ReactNode;
    columnCount?: number; // 列数
    columnGap?: number; // 列间距
}

interface ILiProps {
    children: React.ReactNode;
}

class Waterfall extends React.Component<IWaterfallProps, {}> {
    public static defaultProps = {
        direction: "column",
    };

    public static Li = ({ children }: ILiProps) => (
        <li className = "waterfall__li">{ children }</li>
    )

    public waterfallRef = React.createRef<HTMLUListElement>();

    public componentDidUpdate() {
        if (this.props.direction === "column") {
            this.setColumnStyles();
        }
    }

    public setColumnStyles = () => {
        if (this.props.columnCount > 0) {
            this.waterfallRef.current.style.columnCount = String(this.props.columnCount);
        }
        if (this.props.columnGap > 0) {
            this.waterfallRef.current.style.columnGap = `${this.props.columnGap}px`;
        }
    }

    public render() {
        const { direction } = this.props;
        const module = (
            <ul className = { `waterfall ${ direction === "row" ? "waterfall--row" : "waterfall--column" }` }
                ref = { this.waterfallRef }
                >
                { this.props.children }
            </ul>
        );
        return module;
    }
}

export default Waterfall;
