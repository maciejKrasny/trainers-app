import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../../../pages/home/Landing.page';
import TrainerPage from '../../../pages/home/Trainer.page';
import * as userThunks from '../../../redux/modules/Users/thunks';
import * as authorizationThunks from '../../../redux/modules/Authorization/thunks';
import {useDispatch, useSelector} from "react-redux";
import ListPage from "../../../pages/home/List.page";
import PostsPage from "../../../pages/home/Posts.page";
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";

const MainRouter: React.FC = () => {
    const dispatch = useDispatch();
    const { authorization } = useSelector(state => state.authorizationUsers);
    const handler = useHttpErrorHandler();
    useEffect(() => {
        dispatch(userThunks.fetchUsers(handler));
        dispatch(authorizationThunks.fetchCurrentAuthorizationUser());
    }, [authorization?.token])

    return (
        <Router>
            <Switch>
                <Route path="/trenerzy" component={ListPage} />
                <Route path="/obserwowane" component={PostsPage} />
                <Route path="/:id" component={TrainerPage} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
};

export default MainRouter;
