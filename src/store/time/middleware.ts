import { Dispatch } from "redux";
import { getTime } from "./actions";

function fetchTime() {
    return (dispatch: Dispatch) => {
        setInterval(() => {
            dispatch(getTime({ now: new Date().getTime() }));
        }, 1000);
    };
}

export { fetchTime };
