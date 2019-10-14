import * as React from "react";
import "./index.less";

interface IWaterfallProps {
    data?: [];
    children: React.ReactNode;
}

interface ILiProps {
    children: string;
}

class Waterfall extends React.Component<IWaterfallProps, {}> {
    public static Li = ({ children }: ILiProps) => (
        <li>{ children }</li>
    )

    public render() {
        const module = (
            <ul className = "waterfall">
                { this.props.children }
            </ul>
        );
        return module;
    }
}

export default Waterfall;
