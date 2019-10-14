import * as React from "react";
import * as Loadable from "react-loadable";

const Load = () => <div></div>;
const timeout = 1000;

const Home = Loadable({
    loader: () => import("@containers/home/index"),
    loading: Load,
    timeout,
});
const CountDown = Loadable({
    loader: () => import("@containers/countDown/index"),
    loading: Load,
    timeout,
});
const Modal = Loadable({
    loader: () => import("@containers/modal/index"),
    loading: Load,
    timeout,
});
const Button = Loadable({
    loader: () => import("@containers/button/index"),
    loading: Load,
    timeout,
});
const AnimationPoints = Loadable({
    loader: () => import("@containers/animationPoints/index"),
    loading: Load,
    timeout,
});
const Input = Loadable({
    loader: () => import("@containers/input/index"),
    loading: Load,
    timeout,
});
const Loading = Loadable({
    loader: () => import("@containers/loading/index"),
    loading: Load,
    timeout,
});
const Waterfall = Loadable({
    loader: () => import("@containers/waterfall/index"),
    loading: Load,
    timeout,
});

const routerConfig = [{
    component: Home,
    exact: true,
    path: "/",
}, {
    component: CountDown,
    exact: true,
    path: "/countDown",
}, {
    component: Modal,
    exact: true,
    path: "/modal",
}, {
    component: Button,
    exact: true,
    path: "/button",
}, {
    component: AnimationPoints,
    exact: true,
    path: "/animationPoints",
}, {
    component: Input,
    exact: true,
    path: "/input",
}, {
    component: Loading,
    exact: true,
    path: "/loading",
}, {
    component: Waterfall,
    exact: true,
    path: "/waterfall",
}];

export default routerConfig;
