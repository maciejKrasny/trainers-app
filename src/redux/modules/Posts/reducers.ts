import {Reducer} from 'redux';
import initialState from './state';
import {ADD_COMMENT, PostActions, PostsState, SET_OBSERVE_POSTS, SET_POST_PENDING, SET_POSTS} from './types';

const postReducer: Reducer<PostsState, PostActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case SET_OBSERVE_POSTS:
            return {
                ...state,
                observePosts: action.payload,
            };
        case ADD_COMMENT: {
            const currentPostIndex = state.posts.findIndex(post => post._id === action.payload.postId);
            if (currentPostIndex !== -1) {
                const posts = [...state.posts];
                posts[currentPostIndex].comments = [...(posts[currentPostIndex].comments || []), action.payload];
                return {
                    ...state,
                    posts: posts,
                };
            }
            return {
                ...state,
            };
        }
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
