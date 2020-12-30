import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../redux/modules/Users/types";
import BlogSection from "../BlogSection/BlogSection";
import InfoSection from "../InfoSection/InfoSection";
import PriceList from "../PriceListSection/PriceList";

interface TrainerRouterProps {
    user?: User;
}

const TrainerRouter: React.FC<TrainerRouterProps> = ({ user }) => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/informacje`}>
                <InfoSection user={user} />
            </Route>
            <Route path={`${path}/blog`}>
                <BlogSection user={user} />
            </Route>
            <Route path={`${path}/cennik`}>
                <PriceList user={user} />
            </Route>
            <Route exact path={path}>
                <InfoSection user={user} />
            </Route>
        </Switch>
    )
};

export default TrainerRouter;
