import { combineReducers } from "redux";
import time from "./time/reducers";

const reducers = combineReducers({
    time,
});

export default reducers;
