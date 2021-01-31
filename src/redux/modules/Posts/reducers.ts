import {Reducer} from 'redux';
import initialState from './state';
import {PostActions, PostsState, SET_OBSERVE_POSTS, SET_POST_COMMENTS, SET_POST_PENDING, SET_POSTS} from './types';

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
                observePostsCurrentPage: action.payload.currentPage,
                observePostsTotalPages: action.payload.totalPages,
                observePosts: [...state.observePosts, ...action.payload.data],
            };
        case SET_POST_COMMENTS: {
            const currentPostIndex = state.posts.findIndex(post => post._id === action.payload.postId);
            if (currentPostIndex !== -1) {
                const posts = [...state.posts];
                posts[currentPostIndex].comments = action.payload.comments;
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
