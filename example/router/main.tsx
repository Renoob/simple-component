import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import routerConfig from "./config";
import Header from "./header";
import Navigation from "./navigation";

const styles = require("./main.module.less");

class Main extends React.Component<RouteComponentProps> {
    public render() {
        const module = (
            <>
                <Header />
                <div className = { styles.container }>
                    <Navigation />
                    <div className = { styles.content }>
                        <Switch>
                            {
                                routerConfig.map((item) => (
                                    <Route
                                        key = { item.path }
                                        path = { item.path }
                                        component = { item.component }
                                        exact = { item.exact }
                                    />
                                ))
                            }
                        </Switch>
                    </div>
                </div>
            </>
        );

        return module;
    }
}

export default withRouter(Main);
