import {ADD_COMMENT, Comment, Post, PostActions, SET_OBSERVE_POSTS, SET_POST_PENDING, SET_POSTS} from "./types";

export function setPosts(data: Post[]): PostActions {
    return {
        type: SET_POSTS,
        payload: data
    };
}

export function setPending(data: boolean): PostActions {
    return {
        type: SET_POST_PENDING,
        payload: data
    };
}
export function addComment(data: Comment): PostActions {
    return {
        type: ADD_COMMENT,
        payload: data
    };
}

export function setObservePosts(data: Post[]): PostActions {
    return {
        type: SET_OBSERVE_POSTS,
        payload: data
    };
}