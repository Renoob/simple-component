import { CountDown } from "@components/index";
import * as React from "react";

class CountDownExample extends React.Component {

    public state = {
        endTime: 0, // 结束时间
    };

    public componentDidMount() {
        setTimeout(() => {
            this.setState({ endTime: new Date().setHours(0, 0, 0, 0) + 7 * (24 * 60 * 60 * 1000) });
        }, 2000);
    }

    public render() {
        return (
            <div>
                <CountDown type = "year" endTime = { this.state.endTime } />
            </div>
        );
    }
}

export default CountDownExample;
