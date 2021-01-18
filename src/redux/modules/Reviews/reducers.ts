import {Reducer} from 'redux';
import initialState from './state';
import {ADD_REVIEW, ReviewActions, ReviewState, SET_REVIEW_PENDING, SET_REVIEWS} from "./types";

const userReducer: Reducer<ReviewState, ReviewActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
            };
        case SET_REVIEW_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case ADD_REVIEW: {
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            }
        }
        default:
            return state;
    }
};

export default userReducer;
