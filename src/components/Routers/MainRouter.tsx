import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ListPage from '../../pages/List.page';
import TrainerPage from '../../pages/Trainer.page';
import * as postThunks from '../../redux/modules/Posts/thunks';
import * as userThunks from '../../redux/modules/Users/thunks';
import * as authorizationThunks from '../../redux/modules/Authorization/thunks';
import * as serviceThunks from '../../redux/modules/Services/thunks';
import { useDispatch } from "react-redux";

const MainRouter: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postThunks.fetchPosts());
        dispatch(userThunks.fetchUsers());
        dispatch(authorizationThunks.fetchAuthorizationUsers());
        dispatch(authorizationThunks.fetchCurrentAuthorizationUser());
        dispatch(serviceThunks.fetchServices());
    }, [])
    return (
        <Router>
            <Switch>
                <Route path="/:id" component={TrainerPage} />
                <Route path="/" component={ListPage} />
            </Switch>
        </Router>
    )
};

export default MainRouter;
