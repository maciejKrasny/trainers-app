import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../../redux/modules/Users/types";
import BlogSection from "../BlogSection/BlogSection";
import PriceList from "../PriceListSection/PriceList";
import EventsSection from "../EventsSection/EventsSection";
import ReviewSection from "../ReviewSection/ReviewSection";

interface TrainerRouterProps {
    user?: User;
}

const TrainerRouter: React.FC<TrainerRouterProps> = ({ user }) => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/blog`}>
                <BlogSection user={user} />
            </Route>
            <Route path={`${path}/recenzje`}>
                <ReviewSection  />
            </Route>
            <Route path={`${path}/wydarzenia`}>
                <EventsSection />
            </Route>
            <Route path={`${path}/cennik`}>
                <PriceList user={user} />
            </Route>
            <Route exact path={path}>
                <BlogSection user={user} />
            </Route>
        </Switch>
    )
};

export default TrainerRouter;
