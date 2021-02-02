import {Reducer} from 'redux';
import initialState from './state';
import {
    PostActions,
    PostsState,
    RESET,
    SET_OBSERVE_POSTS,
    SET_POST_COMMENTS,
    SET_POST_COMMENTS_OBSERVED,
    SET_POST_PENDING,
    SET_POSTS
} from './types';

const postReducer: Reducer<PostsState, PostActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                postsCurrentPage: action.payload.currentPage,
                postsTotalPages: action.payload.totalPages,
                posts: [...state.posts, ...action.payload.data],
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
                posts[currentPostIndex].commentsCount = action.payload.comments.length;
                return {
                    ...state,
                    posts: posts,
                };
            }
            return {
                ...state,
            };
        }
        case SET_POST_COMMENTS_OBSERVED: {
            const currentPostIndex = state.observePosts.findIndex(post => post._id === action.payload.postId);
            if (currentPostIndex !== -1) {
                const posts = [...state.observePosts];
                posts[currentPostIndex].comments = action.payload.comments;
                posts[currentPostIndex].commentsCount = action.payload.comments.length;
                return {
                    ...state,
                    observePosts: posts,
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

        case RESET:
            return {
                pending: false,
                posts: [],
                postsCurrentPage: 0,
                postsTotalPages: 0,
                observePosts: [],
                observePostsCurrentPage: 0,
                observePostsTotalPages: 0,
            }
        default:
            return state;
    }
};

export default postReducer;
