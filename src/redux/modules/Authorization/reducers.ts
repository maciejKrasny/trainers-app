import { Reducer } from 'redux';
import initialState from './state';
import {  AuthorizationActions, CLEAR_USER, SET_USER, SET_USER_PENDING, AuthorizationState } from './types';

const userReducer: Reducer<AuthorizationState, AuthorizationActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case CLEAR_USER:
            return {
                ...state,
                users: undefined,
            };
        case SET_USER_PENDING:
            return {
                ...state,
                pending: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
