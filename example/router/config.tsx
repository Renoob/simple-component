import * as React from "react";
import * as Loadable from "react-loadable";

const Loading = () => <div></div>;
const timeout = 1000;

export const Home = Loadable({
    loader: () => import("@containers/home/index"),
    loading: Loading,
    timeout,
});

export const List = Loadable({
    loader: () => import("@containers/list/index"),
    loading: Loading,
    timeout,
});

const routerConfig = [{
    component: Home,
    exact: true,
    path: "/",
}, {
    component: List,
    exact: true,
    path: "/list",
}];

export default routerConfig;
