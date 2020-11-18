import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogSection from "../BlogSection/BlogSection";

const TrainerRouter: React.FC = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/informacje`}>
                info
            </Route>
            <Route path={`${path}/blog`}>
                <BlogSection />
            </Route>
            <Route path={`${path}/cennik`}>
                cennik
            </Route>
            <Route exact path={path}>
                info
            </Route>
        </Switch>
    )
};

export default TrainerRouter;
