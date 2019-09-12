import Theme from "@components/theme";
import Navigation from "@containers/navigation";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import routerConfig from "./config";

class Main extends React.Component<RouteComponentProps> {
    public render() {
        const module = (
            <Theme>
                <Navigation />
                <div style = {{ marginLeft: "300px" }}>
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
            </Theme>
        );

        return module;
    }
}

export default withRouter(Main);
