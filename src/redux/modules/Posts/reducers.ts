import { Reducer } from 'redux';
import initialState from './state';
import { PostsState, PostActions, SET_POSTS, ADD_POST, SET_POST_PENDING, SET_CURRENT_POST } from './types';

const postReducer: Reducer<PostsState, PostActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload,
            };
        case SET_POST_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
