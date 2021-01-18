import {User} from "../Users/types";

export interface Comment {
    _id: string;
    author: User;
    content: string;
    postId: string;
}

export interface Post {
    _id: string;
    title: string;
    author: User;
    content: string;
    comments?: Comment[];
}

export interface PostsState {
    posts: Post[];
    observePosts: Post[];
    pending: boolean;
}

export const SET_POSTS = 'SET_POSTS';
export const SET_OBSERVE_POSTS = 'SET_OBSERVE_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_POST_PENDING = 'SET_POST_PENDING';

export interface SetPostsAction {
    type: typeof SET_POSTS;
    payload: Post[];
}

export interface SetPostPending {
    type: typeof SET_POST_PENDING;
    payload: boolean;
}

export interface AddCommentAction {
    type: typeof ADD_COMMENT;
    payload: Comment;
}

export interface SetObservePostsAction {
    type: typeof SET_OBSERVE_POSTS;
    payload: Post[];
}

export type PostActions = SetPostsAction | SetPostPending | AddCommentAction | SetObservePostsAction;