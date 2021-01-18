import {Reducer} from 'redux';
import initialState from './state';
import {
    AuthorizationActions,
    AuthorizationState,
    CLEAR_CURRENT_AUTHORIZATION_USER,
    SET_AUTHORIZATION_USER,
    SET_AUTHORIZATION_USER_PENDING
} from './types';

const userReducer: Reducer<AuthorizationState, AuthorizationActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION_USER:
            return {
                ...state,
                authorization: action.payload,
            };
        case CLEAR_CURRENT_AUTHORIZATION_USER:
            return {
                ...state,
                authorization: undefined,
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
