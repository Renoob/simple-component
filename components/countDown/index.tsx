import * as React from "react";

interface IProps {
    startTime: number; // 开始时间
    endTime?: number; // 结束时间
    type: string; // 倒计时类型
}

interface IState {
    diffDay: number;
    diffHour: number;
    diffMin: number;
    diffSec: number;
    startTime: number;
}

class CountDown extends React.Component<IProps, IState> {
    public static defaultProps = {
        startTime: new Date().getTime(),
        type: "day",
    };

    public localTime = new Date().getTime(); // 本地时间(用于raf)

    public constructor(props: IProps) {
        super(props);
        const diff = this.calculation(props.startTime);
        this.state = {
            diffDay: diff.diffDay, // 天
            diffHour: diff.diffHour, // 时
            diffMin: diff.diffMin, // 分
            diffSec: diff.diffSec, // 秒
            startTime: props.startTime, // 开始时间
        };
    }

    public componentDidMount() {
        this.raf();
    }

    public raf = () => {
        const newLocalTime = new Date().getTime();
        const localDiff = newLocalTime - this.localTime;
        if (localDiff >= 1000) {
            this.localTime = newLocalTime;
            const now = this.state.startTime + localDiff;
            const diff = this.calculation(now);
            this.setState({
                diffDay: diff.diffDay,
                diffHour: diff.diffHour,
                diffMin: diff.diffMin,
                diffSec: diff.diffSec,
                startTime: now,
            });
        }
        window.requestAnimationFrame(this.raf);
    }

    public calculation = (startTime: number) => {
        const { type } = this.props;
        const diffDay = 0; // 天
        let diffHour = 0; // 时
        let diffMin = 0; // 分
        let diffSec = 0; // 秒
        if (type === "day") {
            diffHour = 24 - new Date(startTime).getHours();
            diffMin = 60 - new Date(startTime).getMinutes();
            diffSec = 60 - new Date(startTime).getSeconds();
        }
        return { diffDay, diffHour, diffMin, diffSec };
    }

    public render() {
        const { diffDay, diffHour, diffMin, diffSec } = this.state;

        const module = (
            <span>{ diffDay } 日 { diffHour } 时 { diffMin } 分 { diffSec } 秒</span>
        );
        return module;
    }
}

export default CountDown;
