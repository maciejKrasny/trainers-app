import { Reducer } from 'redux';
import initialState from './state';
import { UserState, UserActions, SET_USERS, ADD_USER, SET_USER_PENDING } from './types';

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
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
