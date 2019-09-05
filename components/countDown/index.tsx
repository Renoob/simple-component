import * as React from "react";

interface IProps {
    endTime?: number; // 结束时间
    startTime: number; // 开始时间
    type: string; // 倒计时类型
}

interface IState {
    diffDay: number;
    diffHour: number;
    diffMin: number;
    diffSec: number;
    endTime: number;
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
            endTime: props.endTime ? props.endTime : this.initEndTime(), // 结束时间
            startTime: props.startTime, // 开始时间
        };
    }

    public initEndTime = () => {
        const { type } = this.props;
        const year = new Date().getFullYear();
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        const monthDayArr = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        switch (type) {
            case "day":
                return new Date().setHours(24, 0, 0, 0);
            case "week":
                const leaveWeek = 7 - new Date().getDay();
                return new Date().setHours(24, 0, 0, 0) + leaveWeek * (24 * 60 * 60 * 1000);
            case "month":
                const leaveMonth = monthDayArr[new Date().getMonth()] - new Date().getDate();
                return new Date().setHours(24, 0, 0, 0) + leaveMonth * (24 * 60 * 60 * 1000);
            case "year":
                let leaveYear = 0;
                monthDayArr.slice(new Date().getMonth()).forEach((item: number) => {
                    leaveYear += item;
                });
                return new Date().setHours(24, 0, 0, 0) + leaveYear * (24 * 60 * 60 * 1000);
            default:
                return new Date().setHours(24, 0, 0, 0);
        }
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
        const endTime = this.state ? this.state.endTime : this.initEndTime();
        const diffTime = endTime - startTime;
        // 天
        const diffDay = Math.floor(diffTime / ( 24 * 60 * 60 * 1000 ));
        const leave1 = diffTime % ( 24 * 60 * 60 * 1000 );
        // 时
        const diffHour = Math.floor(leave1 / ( 60 * 60 * 1000 ));
        const leave2 = leave1 % ( 60 * 60 * 1000 );
        // 分
        const diffMin = Math.floor(leave2 / ( 60 * 1000 ));
        const leave3 = leave2 % ( 60 * 1000 );
        // 秒
        const diffSec = Math.floor(leave3 / ( 1000 ));

        return { diffDay, diffHour, diffMin, diffSec };
    }

    public render() {
        const { diffDay, diffHour, diffMin, diffSec } = this.state;

        const module = (
            <div>
                <span>
                    <span>{ diffDay > 10 ? diffDay.toString().split("")[0] : 0 }</span>
                    <span>{ diffDay > 10 ? diffDay.toString().split("")[1] : diffDay }</span>
                    <span>{ diffDay > 10 ? diffDay.toString().split("")[2] : diffDay }</span>
                </span>
                <span>天</span>
                <span>
                    <span>{ diffHour > 10 ? diffHour.toString().split("")[0] : 0 }</span>
                    <span>{ diffHour > 10 ? diffHour.toString().split("")[1] : diffHour }</span>
                </span>
                <span>时</span>
                <span>
                    <span>{ diffMin > 10 ? diffMin.toString().split("")[0] : 0 }</span>
                    <span>{ diffMin > 10 ? diffMin.toString().split("")[1] : diffMin }</span>
                </span>
                <span>分</span>
                <span>
                    <span>{ diffSec > 10 ? diffSec.toString().split("")[0] : 0 }</span>
                    <span>{ diffSec > 10 ? diffSec.toString().split("")[1] : diffSec }</span>
                </span>
                <span>秒</span>
            </div>
        );
        return module;
    }
}

export default CountDown;
