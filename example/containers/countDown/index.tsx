import CountDown from "@components/countDown";
import * as React from "react";

class CountDownExample extends React.Component {
    public render() {
        return (
            <div>
                <CountDown type = "year" />
            </div>
        );
    }
}

export default CountDownExample;
