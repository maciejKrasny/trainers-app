import {Reducer} from 'redux';
import initialState from './state';
import {SET_MOST_POPULAR_USERS, SET_USER_PENDING, SET_USERS, TO_OBSERVED, UserActions, UserState} from './types';

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_MOST_POPULAR_USERS:
            return {
                ...state,
                mostPopularUsers: action.payload,
            };
        case TO_OBSERVED:
            const currentTrainerIndex = state.users.findIndex(user => user._id === action.payload);
            const trainers = [...state.users];
            if (currentTrainerIndex !== -1) {
                trainers[currentTrainerIndex].userDetails.isObserved = !trainers[currentTrainerIndex].userDetails.isObserved;
            }
            return {
                ...state,
                users: trainers
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
