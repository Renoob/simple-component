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
        if (this.props.direction === "row") {
            this.setRowStyles();
        }
    }

    // 横向
    public setRowStyles = () => {
        const ul = this.waterfallRef.current;
        const li = this.waterfallRef.current.childNodes[0] as HTMLLIElement;
        const ulWidth: number = ul.offsetWidth; // 父级宽度
        const liWidth: number = li.offsetWidth; // 子集宽度
        const columnCount = Math.floor(ulWidth / liWidth); // 列数
        const heightArr: number[] = []; // 每列高度集合
        const childNodes = Array.from(ul.childNodes);
        // 设置每个元素的 top、left
        childNodes.forEach((item, index) => {
            const ele = item as HTMLLIElement;
            let top = 0;
            let left = 0;
            if (index < columnCount) {
                // 第一行
                heightArr.push(ele.offsetHeight);
                top = 0;
                left = liWidth * index;
            } else {
                // 其他行
                const minHeight = Math.min.apply(this, heightArr);
                const minIndex = heightArr.indexOf(minHeight);
                top = minHeight;
                left = liWidth * minIndex;
                heightArr[minIndex] += ele.offsetHeight;
            }
            ele.style.top = `${top}px`;
            ele.style.left = `${left}px`;
        });
    }

    // 纵向
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
