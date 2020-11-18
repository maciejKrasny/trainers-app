import { combineReducers } from 'redux';
import users from './modules/Users/reducers';
import posts from './modules/Posts/reducers';


export default combineReducers({
    users,
    posts,
});
