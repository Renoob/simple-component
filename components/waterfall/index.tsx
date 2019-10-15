import * as React from "react";
import "./index.less";

interface IWaterfallProps {
    children: React.ReactNode;
    columnCount?: number;
    columnGap?: number;
}

interface ILiProps {
    children: React.ReactNode;
}

class Waterfall extends React.Component<IWaterfallProps, {}> {
    public static Li = ({ children }: ILiProps) => (
        <li className = "waterfall__li">{ children }</li>
    )

    public waterfallRef = React.createRef<HTMLUListElement>();

    public componentDidUpdate() {
        this.setStyles();
    }

    public setStyles = () => {
        if (this.props.columnCount > 0) {
            this.waterfallRef.current.style.columnCount = String(this.props.columnCount);
        }
        if (this.props.columnGap > 0) {
            this.waterfallRef.current.style.columnGap = `${this.props.columnGap}px`;
        }
    }

    public render() {
        const module = (
            <ul className = "waterfall" ref = { this.waterfallRef }>
                { this.props.children }
            </ul>
        );
        return module;
    }
}

export default Waterfall;
