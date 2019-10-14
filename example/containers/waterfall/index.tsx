import { Waterfall } from "@components/index";
import * as React from "react";

class WaterfallExample extends React.Component {
    public render() {
        const module = (
            <div>
                <Waterfall>
                    <Waterfall.Li>1111</Waterfall.Li>
                </Waterfall>
            </div>
        );
        return module;
    }
}

export default WaterfallExample;
