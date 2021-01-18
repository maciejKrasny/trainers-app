import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../../../pages/home/Landing.page';
import TrainerPage from '../../../pages/home/Trainer.page';
import * as userThunks from '../../../redux/modules/Users/thunks';
import * as authorizationThunks from '../../../redux/modules/Authorization/thunks';
import {useDispatch, useSelector} from "react-redux";
import ListPage from "../../../pages/home/List.page";
import PostsPage from "../../../pages/home/Posts.page";

const MainRouter: React.FC = () => {
    const dispatch = useDispatch();
    const { authorization } = useSelector(state => state.authorizationUsers);

    useEffect(() => {
        dispatch(userThunks.fetchUsers());
        dispatch(authorizationThunks.fetchCurrentAuthorizationUser());
    }, [authorization?.token])

    console.log(authorization?.token)
    return (
        <Router>
            <Switch>
                <Route path="/trenerzy" component={ListPage} />
                <Route path="/:id" component={TrainerPage} />
                <Route path="/" component={authorization?.user._id ? PostsPage : LandingPage} />
            </Switch>
        </Router>
    )
};

export default MainRouter;
