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

const routerConfig = [{
    component: Home,
    exact: true,
    path: "/",
}, {
    component: CountDown,
    exact: true,
    path: "/countDown",
}];

export default routerConfig;
