import { AnimationPoints } from "@components/index";
import * as React from "react";

const styles = require("./index.module.less");

class AnimationPointsExample extends React.Component {
    public render() {
        return (
            <div className = { styles.animationPoints }>
                <AnimationPoints height = { 800 } width = { 500 }></AnimationPoints>
            </div>
        );
    }
}

export default AnimationPointsExample;
