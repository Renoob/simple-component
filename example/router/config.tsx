import * as React from "react";
import * as Loadable from "react-loadable";

const Loading = () => <div></div>;
const timeout = 1000;

const Home = Loadable({
    loader: () => import("@containers/home/index"),
    loading: Loading,
    timeout,
});
const CountDown = Loadable({
    loader: () => import("@containers/countDown/index"),
    loading: Loading,
    timeout,
});
const Modal = Loadable({
    loader: () => import("@containers/modal/index"),
    loading: Loading,
    timeout,
});
const Button = Loadable({
    loader: () => import("@containers/button/index"),
    loading: Loading,
    timeout,
});
const AnimationPoints = Loadable({
    loader: () => import("@containers/animationPoints/index"),
    loading: Loading,
    timeout,
});
const Input = Loadable({
    loader: () => import("@containers/Input/index"),
    loading: Loading,
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
}];

export default routerConfig;
