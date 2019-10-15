import { Waterfall } from "@components/index";
import * as React from "react";

const styles = require("./index.module.less");

interface IWaterfallState {
    list: string[];
}

class WaterfallExample extends React.Component {
    public state: IWaterfallState = {
        list: [],
    };

    public componentDidMount() {
        const { list } = this.state;
        for (let i = 0; i < 20; i++) {
            switch (i % 3) {
                case 0:
                    list.push("low");
                    break;
                case 1:
                    list.push("middle");
                    break;
                case 2:
                    list.push("high");
                    break;
            }
        }
        this.setState({ list });
    }

    public render() {
        const { list } = this.state;

        const module = (
            <div className = { styles.waterfallExample }>
                <Waterfall>
                    {
                        list.map((item: string, index) => (
                            <Waterfall.Li key = { index }>
                                <span className = { styles[item] }>{ item }</span>
                            </Waterfall.Li>
                        ))
                    }
                </Waterfall>
            </div>
        );
        return module;
    }
}

export default WaterfallExample;
