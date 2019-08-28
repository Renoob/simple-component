import * as React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch  } from "redux-thunk";
import { fetchTime } from "STORE/time/middleware";
import "./index.less";

interface IProps {
    fetchTime: () => void;
    now: number;
}

class Home extends React.Component<IProps, {}> {
    public componentDidMount() {
        this.props.fetchTime();
    }

    public render() {
        const { now } = this.props;

        const module = (
            <div className = "home">
                时间：{ now }
            </div>
        );

        return module;
    }
}

interface ITime {
    time: {
        now: number,
    };
}

function mapStateToProps({ time }: ITime) {
    return {
        now: time.now,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    return {
        fetchTime: () => dispatch(fetchTime()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
