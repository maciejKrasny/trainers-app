import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../../redux/modules/Users/types";
import BlogSection from "../BlogSection/BlogSection";
import PriceList from "../PriceListSection/PriceList";
import EventsSection from "../EventsSection/EventsSection";
import ReviewSection from "../ReviewSection/ReviewSection";

interface TrainerRouterProps {
    userId: string;
}

const TrainerRouter: React.FC<TrainerRouterProps> = ({ userId }) => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/blog`}>
                <BlogSection userId={userId}/>
            </Route>
            <Route path={`${path}/recenzje`}>
                <ReviewSection userId={userId} />
            </Route>
            <Route path={`${path}/wydarzenia`}>
                <EventsSection userId={userId} />
            </Route>
            <Route path={`${path}/cennik`}>
                <PriceList userId={userId} />
            </Route>
            <Route exact path={path}>
                <BlogSection userId={userId}/>
            </Route>
        </Switch>
    )
};

export default TrainerRouter;
