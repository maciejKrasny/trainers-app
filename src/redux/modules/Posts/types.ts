import { WithPagination } from "../../types";
import {User} from "../Users/types";

export interface Comment {
    id: string;
    user: User;
    content: string;
    postId: string;
}

export interface Post {
    _id: string;
    title: string;
    author: User;
    content: string;
    comments?: Comment[];
    commentsCount: number;
}

export interface PostsState {
    posts: Post[];
    postsCurrentPage: number;
    postsTotalPages: number;
    observePosts: Post[];
    observePostsCurrentPage: number;
    observePostsTotalPages: number;
    pending: boolean;
}

export const SET_POSTS = 'SET_POSTS';
export const SET_OBSERVE_POSTS = 'SET_OBSERVE_POSTS';
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS';
export const SET_POST_PENDING = 'SET_POST_PENDING';
export const RESET = 'RESET_POSTS';

export interface SetPostsAction {
    type: typeof SET_POSTS;
    payload:  WithPagination<Post[]>;
}

export interface SetPostPending {
    type: typeof SET_POST_PENDING;
    payload: boolean;
}

export interface SetPostCommentsAction {
    type: typeof SET_POST_COMMENTS;
    payload: {
        postId: string;
        comments: Comment[];
    };
}

export interface SetObservePostsAction {
    type: typeof SET_OBSERVE_POSTS;
    payload: WithPagination<Post[]>;
}

export interface ResetPostsAction {
    type: typeof RESET;
}

export type PostActions = SetPostsAction | SetPostPending | SetPostCommentsAction | SetObservePostsAction | ResetPostsAction;