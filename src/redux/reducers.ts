import { combineReducers } from 'redux';
import users from './modules/Users/reducers';
import posts from './modules/Posts/reducers';
import authorizationUsers from './modules/Authorization/reducers';
import services from './modules/Services/reducers';
import events from './modules/Events/reducers';
import reviews from './modules/Reviews/reducers';

export default combineReducers({
    users,
    posts,
    authorizationUsers,
    services,
    events,
    reviews,
});
