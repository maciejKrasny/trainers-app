import { Reducer } from 'redux';
import initialState from './state';
import { AuthorizationActions, AuthorizationState, CLEAR_CURRENT_AUTHORIZATION_USER, SET_AUTHORIZATION_USERS, SET_AUTHORIZATION_USER_PENDING, SET_CURRENT_AUTHORIZATION_USER } from './types';

const userReducer: Reducer<AuthorizationState, AuthorizationActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION_USERS:
            return {
                ...state,
                authorizationUsers: action.payload,
            };
        case SET_CURRENT_AUTHORIZATION_USER:
            return {
                ...state,
                currentAuthorizationUser: action.payload,
            };
        case CLEAR_CURRENT_AUTHORIZATION_USER:
            return {
                ...state,
                currentAuthorizationUser: undefined,
            };
        case SET_AUTHORIZATION_USER_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
